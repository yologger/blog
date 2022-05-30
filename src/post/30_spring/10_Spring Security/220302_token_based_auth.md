---
title: "Token 기반 인증 구현 (JWT)"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Token 기반 인증 구현
`Spring Security`와 `jjwt`를 사용하여 Token 기반 인증을 구현해보자.

## 의존성 설정
`Spring Security`와 `jjwt` 의존성을 추가한다.
``` groovy
// build.gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-security:${spring_security_version}'
    implementation 'io.jsonwebtoken:jjwt:${jjwt_version}'
}
```

## 데이터 설계
 `Authority`와 `Role`을 사용하지 않고 Token 기반 인증을 구현해본다.

사용자와 관련된 엔티티 클래스는 다음과 같다.
``` java
@Entity
@Table(name = "user")
@NoArgsConstructor
@Getter
public class UserEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String email;

    @Column
    private String password;

    @Builder
    public UserEntity(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
```
``` java
public interface UserRepository extends JpaRepository<UserEntity, Long> {
}
```

## 회원가입 구현
회원가입을 위한 서비스 레이어 컴포넌트는 다음과 같다.

``` java
@Service
@RequiredArgsConstructor
public class AuthService {

    private final PasswordEncoder passwordEncoder;

    // ...
    @Transactional
    public ResponseEntity<JoinResponseDto> join(JoinRequestDto request) throws MemberAlreadyExistException {

        // Check If User already exists.
        Optional<MemberEntity> result = memberRepository.findByEmail(request.getEmail());
        if (result.isPresent()) throw new MemberAlreadyExistException("Member Already Exists.");

        String encryptedPassword = passwordEncoder.encode(request.getPassword());
        MemberEntity newMember = MemberEntity.builder()
                .email(request.getEmail())
                .password(encryptedPassword)
                .build();

        MemberEntity created = memberRepository.save(newMember);

        JoinResponseDto response = JoinResponseDto.builder()
                .memberId(created.getId())
                .build();

        return ResponseEntity.created(null).body(response);
    }
}
```

## 로그인을 통한 인증 구현
로그인 구현을 위해서는 다음과 같이 설정 클래스를 작성한다.
``` java
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final MemberDetailsServiceImpl memberDetailsService;

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // AuthenticationManager가 MemberDetailsServiceImpl를 사용하여 인증하도록 설정
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
            .userDetailsService(MemberDetailsServiceImpl)
            .passwordEncoder(passwordEncoder());
    }

    // AuthenticationManager를 빈으로 등록
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
```

`MemberDetailsServiceImpl`클래스는 다음과 같다.
``` java
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

@Service
@RequiredArgsConstructor
public class MemberDetailsServiceImpl implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MemberEntity memberEntity = memberRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username Not Found."));

        return User.builder()
                .username(memberEntity.getEmail())
                .password(memberEntity.getPassword())
                .roles("USER")
                .build();
    }
}
```

인증을 위한 서비스 레이어는 다음과 같다.
``` java {22}
@Service
@RequiredArgsConstructor
public class AuthService {

    private final JwtUtil jwtUtil;

    private final AuthenticationManager authenticationManager;

    // 중략 ..

    @Transactional
    public ResponseEntity<LoginResponseDto> login(LoginRequestDto request) throws MemberNotExistException, InvalidPasswordException {

        // Check if member exists.
        MemberEntity member = memberRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new MemberNotExistException("Member does not exist."));

        // Check if password correct.
        if (!passwordEncoder.matches(request.getPassword(), member.getPassword())) {
            throw new InvalidPasswordException("Invalid password exception");
        }

        // 인증 수행
        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        // Principal(본인)
        User me = (User) auth.getPrincipal();

        // 토큰 생성
        String accessToken = jwtUtil.generateAccessToken(member.getId(), member.getEmail(), member.getName(), member.getNickname());
        String refreshToken = jwtUtil.generateRefreshToken(member.getId(), member.getEmail(), member.getName(), member.getNickname());

        // DB 업데이트
        member.setAccessToken(accessToken);
        member.setRefreshToken(refreshToken);

        LoginResponseDto response = LoginResponseDto.builder()
                .memberId(member.getId())
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .name(member.getName())
                .nickname(member.getNickname())
                .build();

        return ResponseEntity.ok(response);
    }
}
```
여기서 핵심인 부분은 다음과 같다.
``` java
// 인증 수행
Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
```
`AuthenticationManager.authenticate()`를 호출하면 `UserDetailsService.loadUserByUsername()`가 호출된다. 이 메소드에서 데이터베이스로부터 사용자를 조회한다. 그리고 `org.springframework.security.core.userdetails.User`객체에 `username`, `password`를 설정하여 반환하면 스프링 시큐리티가 `UsernamePasswordAuthenticationToken` 객체로 전달한 `username`, `password`와 비교하여 인증 여부를 판단한다.
``` java
@Override
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    MemberEntity memberEntity = memberRepository.findByEmail(username)
            .orElseThrow(() -> new UsernameNotFoundException("Username Not Found."));

    return User.builder()
            .username(memberEntity.getEmail())
            .password(memberEntity.getPassword())
            .roles("USER")
            .build();
}
```

`AuthenticationManager.authenticate()`는 인증에 성공하면 `Authoirzation` 객체에 인증 정보를 담아 반환한다. 이 객체에는 인증에 성공한 사용자의 정보가 담겨있다.
``` java
// 인증 
Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

// Principal(본인)
User me = (User) auth.getPrincipal();
```
인증에 실패하면 세 가지 예외 중 하나를 발생시킨다.
- `BadCredentialsException`: username 또는 password가 틀린 경우 발생한다.
- `DisabledException`: 계정이 비활성화된 경우 발생한다.
- `LockedException`: 계정이 잠긴 경우 발생한다.

## 토큰 발급
인증에 성공하면 JWT로 토큰을 발행하여 클라이언트에게 반환하면 해야한다. 서비스 보안의 중요도에 따라 액세스 토큰만 사용하기도 하며, 액세스 토큰과 리프레시 토큰을 모두 사용하기도 한다. 예제에서는 둘 다 사용한다.
``` java {22}
@Service
@RequiredArgsConstructor
public class AuthService {

    private final JwtUtil jwtUtil;

    private final AuthenticationManager authenticationManager;

    // 중략 ..

    @Transactional
    public ResponseEntity<LoginResponseDto> login(LoginRequestDto request) throws MemberNotExistException, InvalidPasswordException {

        // Check if member exists.
        MemberEntity member = memberRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new MemberNotExistException("Member does not exist."));

        // Check if password correct.
        if (!passwordEncoder.matches(request.getPassword(), member.getPassword())) {
            throw new InvalidPasswordException("Invalid password exception");
        }

        // 인증 수행
        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        // Principal(본인)
        User me = (User) auth.getPrincipal();

        // 토큰 생성
        String accessToken = jwtUtil.generateAccessToken(member.getId(), member.getEmail(), member.getName(), member.getNickname());
        String refreshToken = jwtUtil.generateRefreshToken(member.getId(), member.getEmail(), member.getName(), member.getNickname());

        // DB 업데이트
        member.setAccessToken(accessToken);
        member.setRefreshToken(refreshToken);

        LoginResponseDto response = LoginResponseDto.builder()
                .memberId(member.getId())
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .name(member.getName())
                .nickname(member.getNickname())
                .build();

        return ResponseEntity.ok(response);        
    }
}
``` 

## 토큰 검증
이제 클라이언트는 자원에 접근할 때 토큰을 함께 전송한다. 백엔드에서는 이 토큰이 유효한지를 먼저 검증해야한다. 이때 `Spring Filter`를 사용할 수 있다.

우선 JWT를 발행하고 검증하는 `JwtUtil`클래스를 구현하자.
``` java
@Component
public class JwtUtil {

    @Value("${jwt.secret.access-token}")
    private String accessTokenSecret;

    @Value("${jwt.secret.refresh-token}")
    private String refreshTokenSecret;

    private long accessTokenExpire = 60 * 24 * 1;   // 1 day
    private long refreshTokenExpire = 60 * 24 * 7;  // 7 days

    public String generateAccessToken(Long id, String email, String name, String nickname) {

        // Header
        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", "HS256");

        // Payload
        Map<String, Object> payloads = new HashMap<>();
        payloads.put("id", id);
        payloads.put("email", email);
        payloads.put("name", name);
        payloads.put("nickname", nickname);

        // Generate access token
        String accessToken = Jwts.builder()
                .setHeader(headers)         // Set headers
                .setClaims(payloads)        // Set claims
                .setSubject("member")       // Purpose of token
                .setExpiration(Date.from(ZonedDateTime.now().plusMinutes(accessTokenExpire).toInstant()))  // Set expiration
                .signWith(SignatureAlgorithm.HS256, accessTokenSecret.getBytes()) // Sign with HS256, Key
                .compact();                 // Generate token

        return accessToken;
    }

    public String generateRefreshToken(Long id, String email, String name, String nickname) {

        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", "HS256");

        Map<String, Object> payloads = new HashMap<>();
        payloads.put("id", id);
        payloads.put("email", email);
        payloads.put("fullName", name);
        payloads.put("nickname", nickname);

        String refreshToken = Jwts.builder()
                .setHeader(headers)
                .setClaims(payloads)
                .setSubject("member")
                .setExpiration(Date.from(ZonedDateTime.now().plusMinutes(refreshTokenExpire).toInstant()))
                .signWith(SignatureAlgorithm.HS256, refreshTokenSecret.getBytes())
                .compact();

        return refreshToken;
    }


    public void verifyAccessToken(String accessToken) throws UnsupportedEncodingException {
        Jwts.parser()
                .setSigningKey(accessTokenSecret.getBytes("UTF-8"))  // Set Key
                .parseClaimsJws(accessToken);  // Parsing and verifying. throws error in case of failure.
    }

    public void verifyRefreshToken(String refreshToken) throws UnsupportedEncodingException, MalformedJwtException, SignatureException, ExpiredJwtException {
        Jwts.parser()
                .setSigningKey(refreshTokenSecret.getBytes("UTF-8"))  // Set Key
                .parseClaimsJws(refreshToken);  // Parsing and verifying. throws error in case of failure.
    }

    public Long verifyAccessTokenAndGetMemberId(String accessToken) throws UnsupportedEncodingException, MalformedJwtException, SignatureException, ExpiredJwtException {
        Claims claims = Jwts.parser()
                .setSigningKey(accessTokenSecret.getBytes("UTF-8"))  // Set Key
                .parseClaimsJws(accessToken)  // Parsing and verifying. throws error in case of failure.
                .getBody();

        Long id = claims.get("id", Long.class);
        return id;
    }
}
```
그리고 필터를 다음과 같이 구현한다.
``` java
@AllArgsConstructor
public class ValidateAccessTokenFilter extends OncePerRequestFilter {

    private JwtUtil jwtUtil;
    private List<String> notFilteredUrls;
    private MemberRepository memberRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.info("Will validate access token.");

        // Check if 'Authorization' header exists.
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !StringUtils.hasText(authHeader)) {

            // Header
            response.setStatus(GlobalErrorCode.MISSING_AUTHORIZATION_HEADER.getStatus());
            response.setContentType("application/json;charset=utf-8");

            // Body
            JSONObject body = new JSONObject();
            body.put("status", GlobalErrorCode.MISSING_AUTHORIZATION_HEADER.getStatus());
            body.put("code", GlobalErrorCode.MISSING_AUTHORIZATION_HEADER.getCode());
            body.put("message", GlobalErrorCode.MISSING_AUTHORIZATION_HEADER.getMessage());
            response.getWriter().print(body);
            log.info("INVALID ACCESS TOKEN: " + GlobalErrorCode.MISSING_AUTHORIZATION_HEADER.getMessage());
            return;
        }

        // Check if 'Authorization' header starts with 'Bearer'
        if (!authHeader.startsWith("Bearer")) {
            // Header
            response.setStatus(GlobalErrorCode.BEARER_NOT_INCLUDED.getStatus());
            response.setContentType("application/json;charset=utf-8");

            // Body
            JSONObject body = new JSONObject();
            body.put("status", GlobalErrorCode.BEARER_NOT_INCLUDED.getStatus());
            body.put("code", GlobalErrorCode.BEARER_NOT_INCLUDED.getCode());
            body.put("message", GlobalErrorCode.BEARER_NOT_INCLUDED.getMessage());
            response.getWriter().print(body);
            log.info("INVALID ACCESS TOKEN: " + GlobalErrorCode.BEARER_NOT_INCLUDED.getMessage());
            return;
        }

        // Check if access token exists.
        String accessToken = authHeader.substring(7);
        if (accessToken == null || accessToken.trim().isEmpty()) {
            // Header
            response.setStatus(GlobalErrorCode.ACCESS_TOKEN_EMPTY.getStatus());
            response.setContentType("application/json;charset=utf-8");

            // Body
            JSONObject body = new JSONObject();
            body.put("status", GlobalErrorCode.ACCESS_TOKEN_EMPTY.getStatus());
            body.put("code", GlobalErrorCode.ACCESS_TOKEN_EMPTY.getCode());
            body.put("message", GlobalErrorCode.ACCESS_TOKEN_EMPTY.getMessage());
            response.getWriter().print(body);
            log.info("INVALID ACCESS TOKEN: " + GlobalErrorCode.ACCESS_TOKEN_EMPTY.getMessage());
            return;
        }

        try {
            // Compare with ex-access token

            Long memberId = jwtUtil.verifyAccessTokenAndGetMemberId(accessToken);
            Optional<MemberEntity> result = memberRepository.findById(memberId);
            if (!result.isPresent()) {
                // Header
                response.setStatus(GlobalErrorCode.INVALID_ACCESS_TOKEN.getStatus());
                response.setContentType("application/json;charset=utf-8");

                // Body
                JSONObject body = new JSONObject();
                body.put("status", GlobalErrorCode.INVALID_ACCESS_TOKEN.getStatus());
                body.put("code", GlobalErrorCode.INVALID_ACCESS_TOKEN.getCode());
                body.put("message", GlobalErrorCode.INVALID_ACCESS_TOKEN.getMessage());

                log.info("INVALID ACCESS TOKEN: " + GlobalErrorCode.INVALID_ACCESS_TOKEN.getMessage());
                response.getWriter().print(body);
                return;
            }

            if (!(accessToken.equals(result.get().getAccessToken()))) {
                // Header
                response.setStatus(GlobalErrorCode.INVALID_ACCESS_TOKEN.getStatus());
                response.setContentType("application/json;charset=utf-8");

                // Body
                JSONObject body = new JSONObject();
                body.put("status", GlobalErrorCode.INVALID_ACCESS_TOKEN.getStatus());
                body.put("code", GlobalErrorCode.INVALID_ACCESS_TOKEN.getCode());
                body.put("message", GlobalErrorCode.INVALID_ACCESS_TOKEN.getMessage());

                log.info("INVALID ACCESS TOKEN: " + GlobalErrorCode.INVALID_ACCESS_TOKEN.getMessage());
                response.getWriter().print(body);
                return;
            }

            // Validate Access token
            jwtUtil.verifyAccessToken(accessToken);
            log.info("VALID ACCESS TOKEN");
            filterChain.doFilter(request, response);
            return;
        } catch (ExpiredJwtException e) {
            // Header
            response.setStatus(GlobalErrorCode.EXPIRED_ACCESS_TOKEN.getStatus());
            response.setContentType("application/json;charset=utf-8");

            // Body
            JSONObject body = new JSONObject();
            body.put("status", GlobalErrorCode.EXPIRED_ACCESS_TOKEN.getStatus());
            body.put("code", GlobalErrorCode.EXPIRED_ACCESS_TOKEN.getCode());
            body.put("message", GlobalErrorCode.EXPIRED_ACCESS_TOKEN.getMessage());

            log.info("INVALID ACCESS TOKEN: " + GlobalErrorCode.EXPIRED_ACCESS_TOKEN.getMessage());
            response.getWriter().print(body);
            return;
        } catch (Exception e) {
            // Header
            response.setStatus(GlobalErrorCode.INVALID_ACCESS_TOKEN.getStatus());
            response.setContentType("application/json;charset=utf-8");

            // Body
            JSONObject body = new JSONObject();
            body.put("status", GlobalErrorCode.INVALID_ACCESS_TOKEN.getStatus());
            body.put("code", GlobalErrorCode.INVALID_ACCESS_TOKEN.getCode());
            body.put("message", GlobalErrorCode.INVALID_ACCESS_TOKEN.getMessage());
            response.getWriter().print(body);
            log.info("INVALID ACCESS TOKEN: " + GlobalErrorCode.INVALID_ACCESS_TOKEN.getMessage());
            return;
        }
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        return notFilteredUrls.stream().anyMatch(exclude -> exclude.equalsIgnoreCase(request.getServletPath()));
    }
}
```
마지막으로 요청이 들어올 때마다 필터가 작동하도록 등록한다.
``` java {42}
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final MemberDetailsService memberDetailsService;
    private final JwtUtil jwtUtil;
    private final MemberRepository memberRepository;

    // 중략 ...

    private static final List<String> NOT_FILTERED_URLS = Arrays.asList(
            "/profile",
            "/auth/emailVerificationCode",
            "/auth/confirmVerificationCode",
            "/auth/join",
            "/auth/login",
            "/auth/logout",
            "/auth/reissueToken",
            "/test/test1",
            "/test/test2",
            "/test/test3",
            "/test/test4",
            "/test/test5"
    );

    // AccessToken 검증 필터 빈으로 등록
    @Bean
    public ValidateAccessTokenFilter validateAccessTokenFilter() {
        ValidateAccessTokenFilter filter = new ValidateAccessTokenFilter(jwtUtil, NOT_FILTERED_URLS, memberRepository);
        return filter;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable()
                .csrf().disable()
                .cors().disable()
                .formLogin().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .addFilterBefore(validateAccessTokenFilter(), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests(authorize -> authorize
                        .antMatchers("/test/**").permitAll()
                        .antMatchers("/auth/**").permitAll()
                        .antMatchers("/post/**").permitAll()
                        .antMatchers("/member/**").permitAll()
                        .antMatchers("/profile").permitAll()
                        .anyRequest().authenticated()
                );
    }
}

```