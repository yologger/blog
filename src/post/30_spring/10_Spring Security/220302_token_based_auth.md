---
title: "Token 기반 인증 구현 (JWT)"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Token 기반 인증 구현
`Spring Security`와 `jjwt`를 사용한 Token 기반 인증 구현을 정리한다.

## 의존성 설정
`Spring Security`와 `jjwt` 의존성을 추가한다.
``` groovy
// build.gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-security'
    implementation 'io.jsonwebtoken:jjwt'
}
```

## Token 관리 객체
``` properties
# application.properties
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=root

# spring.jpa.hibernate.ddl-auto=none
spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=true
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.format_sql=true

jwt.token.secret=token_secret
# 1day = 1440, 7days = 10080
jwt.token.expire=1440
```
``` java
@Component
@Slf4j
public class TokenProvider {

    @Value("${jwt.token.secret}")
    private String secret;

    @Value("${jwt.token.expire}")
    private long expireTimeInSeconds;

    private static final String AUTHORITIES_KEY = "auth";

    public String createToken(Authentication authentication) {
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        Date validity = Date.from(ZonedDateTime.now().plusMinutes(expireTimeInSeconds).toInstant());

        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim(AUTHORITIES_KEY, authorities)
                .signWith(SignatureAlgorithm.HS256, secret.getBytes())
                .setExpiration(validity)
                .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secret.getBytes(StandardCharsets.UTF_8)).parseClaimsJws(token);
            return true;
        } catch (SecurityException | MalformedJwtException e) {
            log.info("잘못된 JWT 서명입니다.");
        } catch (ExpiredJwtException e) {
            log.info("만료된 JWT 토큰입니다.");
        } catch (UnsupportedJwtException e) {
            log.info("지원되지 않는 JWT 토큰입니다.");
        } catch (IllegalArgumentException e) {
            log.info("JWT 토큰이 잘못되었습니다.");
        }
        return false;
    }

    public Authentication getAuthentication(String token) {

        Claims claims = Jwts.parser()
                .setSigningKey(secret.getBytes(StandardCharsets.UTF_8))
                .parseClaimsJws(token)
                .getBody();

        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

        User principal = new User(claims.getSubject(), "", authorities);

        return new UsernamePasswordAuthenticationToken(principal, token, authorities);
    }
}
```

## 영속성 계층 구현
``` java
public enum AuthorityType {

    ADMIN("ADMIN"),
    USER("USER");

    private String description;

    AuthorityType(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
```
``` java
@Entity
@Table(name = "user")
@NoArgsConstructor
@Getter
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String password;

    @Enumerated(EnumType.STRING)
    private AuthorityType authority;

    @Builder
    public UserEntity(String name, String password, AuthorityType authority) {
        this.name = name;
        this.password = password;
        this.authority = authority;
    }
}
```
``` java
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    public Optional<UserEntity> findOneByName(String name);
}
```

## 서비스 계층

``` java
@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.findOneByName(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getName())
                .password(user.getPassword())
                .authorities(new SimpleGrantedAuthority(user.getAuthority().getDescription()))
                .build();
    }
}
```

``` java
@Service
@RequiredArgsConstructor
public class UserService {

    private final PasswordEncoder passwordEncoder;

    private final UserRepository userRepository;

    public Long register(RegisterRequestDto request) {

        UserEntity user = UserEntity.builder()
                .name(request.getName())
                .authority(AuthorityType.USER)
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        UserEntity saved = userRepository.save(user);
        return saved.getId();
    }
}
```

## 컨트롤러 계층
``` java
@Getter
public class RegisterRequestDto {
    private String name;
    private String password;

    @Builder
    public RegisterRequestDto(String name, String password) {
        this.name = name;
        this.password = password;
    }
}
``` 
``` java
@Getter
public class LoginRequestDto {
    private String name;

    private String password;

    @Builder
    public LoginRequestDto(String name, String password) {
        this.name = name;
        this.password = password;
    }
}
``` 
``` java
@Getter
public class LoginResponseDto {
    private String token;

    public LoginResponseDto(String token) {
        this.token = token;
    }
}
```
``` java
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;

    private final TokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto request) {
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(request.getName(), request.getPassword());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);

        String token = tokenProvider.createToken(authentication);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + token);

        return new ResponseEntity<>(new LoginResponseDto(token), httpHeaders, HttpStatus.OK);
    }
}
```
``` java
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/user/registration")
    public ResponseEntity<Long> register(@RequestBody RegisterRequestDto request) {
        return new ResponseEntity(userService.register(request), HttpStatus.CREATED);
    }
}
``` 
``` java
@RequestMapping("/test")
public class TestController {

    @GetMapping("/test1")   // 인증만 되면 다 접근 가능
    String test() {
        return "test1";
    }

    @PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")   // 인증 후 'USER', 'ADMIN' 권한을 가져야만 접근 가능
    @GetMapping("/test2")
    String test2() {
        return "test2";
    }

    @PreAuthorize("hasAnyAuthority('USER')")   // 인증 후 'USER' 권한을 가져야만 접근 가능
    @GetMapping("/test3")
    String test3() {
        return "test3";
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")   // 인증 후 'ADMIN' 권한을 가져야만 접근 가능
    @GetMapping("/test4")
    String test4() {
        return "test4";
    }
}
```

## 보안 관련 컴포넌트
``` java
@Slf4j
public class JwtFilter extends OncePerRequestFilter {

    public static final String AUTHORIZATION_HEADER = "Authorization";

    private TokenProvider tokenProvider;

    public JwtFilter(TokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String jwt = resolveToken(request);
        String requestURI = request.getRequestURI();

        if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
            Authentication authentication = tokenProvider.getAuthentication(jwt);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            log.debug("Security Context에 '{}' 인증 정보를 저장했습니다, uri: {}", authentication.getName(), requestURI);
        } else {
            log.debug("유효한 JWT 토큰이 없습니다, uri: {}", requestURI);
        }

        filterChain.doFilter(request, response);
    }

    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
```
``` java
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
    }
}
```
``` java
@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException {
        response.sendError(HttpServletResponse.SC_FORBIDDEN);
    }
}
```
``` java
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailsServiceImpl userDetailsService;
    private final TokenProvider tokenProvider;

    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .httpBasic().disable()
            .csrf().disable()
            .cors().disable()
            .formLogin().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            .addFilterBefore(jwtFilter(), UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler).and()
            .authorizeRequests((authorize) -> {
                authorize.antMatchers(HttpMethod.GET, "/user/registration").permitAll();
                authorize.antMatchers(HttpMethod.POST, "/user/registration").permitAll();
                authorize.antMatchers(HttpMethod.POST, "/auth/login").permitAll();
                authorize.anyRequest().authenticated();
            });
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    JwtFilter jwtFilter() {
        return new JwtFilter(tokenProvider);
    }
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
            .userDetailsService(userDetailsService)
            .passwordEncoder(passwordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
```

