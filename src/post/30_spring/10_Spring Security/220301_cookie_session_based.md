---
title: "Cookie-Session 기반 인증 구현"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Cookie-Session 기반 인증 구현

## 의존성 설정
`Spring Security` 의존성을 추가한다.
``` groovy
// build.gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-security'
    testImplementation 'org.springframework.security:spring-security-test'
    // 생략 ...
}
```

## 스프링 시큐리티 기본 설정
프로젝트에 의존성을 추가하면 스프링 시큐리티는 <u>기본적으로 모든 엔드포인트에 대한 HTTP 요청을 차단한다.</u>

예제를 살펴보자. 다음과 같은 컨트롤러가 있다. 이 컨트롤러는 `home.mustache` 뷰를 보여준다.
``` java
// HomeController.java
@RestController
public class MainController {

    @GetMapping
    public String home() {
        return "home";
    }
} 
```
`home.mustache`는 다음과 같다.
``` html
<!DOCTYPE HTML>
<html>
<head>
    <title>home</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
<h1>This is Home</h1>
</body>
</html>
```
이제 웹 브라우저에서 `http://localhost:8080`로 접근해보자. `home.mustache`를 보여주지 않고 `http://localhost:8080/login`로 리다이렉트되는 것을 확인할 수 있다. 스프링 시큐리티가 모든 엔드포인트에 대해 인증되지 않은 접근을 차단하기 때문이다. 스프링 시큐리티의 기본 설정값은 다음과 같이 로그인 페이지를 자동으로 제공한다.

![](./220301_cookie_session_based/1.png)

인증을 위해 로그인을 해보자. 스프링 시큐리티 기본 설정에서 Username은 `user`이며, Password는 어플리케이션을 구동할 때 로그에 출력된다.

![](./220301_cookie_session_based/2.png)

인증에 성공한 후 `http://localhost:8080`에 다시 접속해보자. 

![](./220301_cookie_session_based/3.png)

스프링 시큐리티는 기본적으로 `Cookie-Session` 방식으로 인증한다. 따라서 로그인 후 웹 브라우저에서 `Cookie`를 확인할 수 있다.

![](./220301_cookie_session_based/4.png)

기본 설정값은 로그아웃을 위한 페이지도 제공한다. `http://localhost:8080/logout`으로 접근하면 된다.

![](./220301_cookie_session_based/5.png)


이처럼 프로젝트에 스프링 시큐리티를 추가하기만 하면 <u>모든 엔드포인트에 대한 HTTP 요청을 차단</u>하는데 이는 스프링 시큐리티의 기본 설정이 적용되기 때문이다. 기본 설정은 `SecurityAutoConfiguration` 클래스에 정의되어있다.
``` java
@AutoConfiguration
@ConditionalOnClass(DefaultAuthenticationEventPublisher.class)
@EnableConfigurationProperties(SecurityProperties.class)
@Import({ SpringBootWebSecurityConfiguration.class, SecurityDataConfiguration.class })
public class SecurityAutoConfiguration {

	@Bean
	@ConditionalOnMissingBean(AuthenticationEventPublisher.class)
	public DefaultAuthenticationEventPublisher authenticationEventPublisher(ApplicationEventPublisher publisher) {
		return new DefaultAuthenticationEventPublisher(publisher);
	}

}
```
`SecurityAutoConfiguration`는 내부적으로 `SpringBootWebSecurityConfiguration` 구성 클래스를 임포트한다.
``` java {12-15}
@Configuration(proxyBeanMethods = false)
@ConditionalOnWebApplication(type = Type.SERVLET)
class SpringBootWebSecurityConfiguration {

	@Configuration(proxyBeanMethods = false)
	@ConditionalOnDefaultWebSecurity
	static class SecurityFilterChainConfiguration {

		@Bean
		@Order(SecurityProperties.BASIC_AUTH_ORDER)
		SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
			http.authorizeRequests().anyRequest().authenticated();  // 접근 제어
			http.formLogin();   // 폼 기반 인증 활성화
			http.httpBasic();   // HTTP 기본 인증 활성화
			return http.build();
		}
	}
    // 생략 ...
}
```
`SpringBootWebSecurityConfiguration`에서 설정하는 설정값은 다음과 같다. 
- `authorizeRequests().anyRequest().authenticated()`: 모든 요청에 대해서 인증을 요구한다.
- `formLogin()`: 폼 기반 인증을 활성화한다.
- `httpBasic()`:  HTTP 기본 인증을 활성화한다.

[`폼 기반 인증(Form-based Authentication)`](https://docs.oracle.com/cd/E19798-01/821-1841/6nmq2cpki/index.html)은 다음과 같이 HTML Form 태그로 사용자를 인증하는 방식이다.
``` html
<form name="LoginForm" method="post" action="/auth/login">
  <input type="text" name="username"/>
  <input type="password" name="password"/>
</form>
```
스프링 시큐리티는 기본 로그인 페이지를 제공한다.

![](./220301_cookie_session_based/3.png)

[`HTTP 기본 인증(Http basic authentication)`](https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication)은 다음 절차를 준수하는 인증 방법을 의미한다.

1. 서버는 클라이언트의 인증이 실패했을 때 `WWW-Authenticate` 헤더를 추가하여 `401(Unauthorized)` 응답을 보낸다.
2. 클라이언트는 `Authorization` 헤더에 인코딩된 비밀번호를 추가하여 인증을 요청한다.
3. 인증이 완료되면 서버는 `200(OK)` 응답을 보낸다.


스프링 시큐리티 기본 설정은 다음과 같이 비활성화할 수 있다.
``` java {1}
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class SpringSecuritySampleApplication {
 
    public static void main(String[] args) {
        SpringApplication.run(SpringSecuritySampleApplication.class, args);
    }
}
```

기본 설정은 커스텀 구성 클래스를 정의해도 비활성화된다.

## 스프링 시큐리티 설정 커스터마이징
스프링 시큐리티와 관련된 설정을 커스터마이징하려면 구성 클래스를 정의해야한다. 구성 클래스는 `WebSecurityConfigurerAdapter`를 상속하며, `@EnableWebSecurity`어노테이션을 추가해야한다.
``` java
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    // ...
}
```

`WebSecurityConfigurerAdapter`의 `configure(HttpSecurity http)`메소드를 오버라이드하여 인증 절차를 설정할 수 있다. 

다음과 같이 사용자가 직접 로그인 페이지를 정의할 수 있다.
``` java{9}
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .anyRequest().authenticated().and()
            .formLogin()
                .loginPage("/login.html")  // 사용자 정의 로그인 페이지
            // ...
    }
}       
```
그 외에도 다음과 같이 여러 설정을 커스터마이징할 수 있다.
``` java
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .anyRequest().authenticated().and()
            .formLogin()
                .loginPage("/login.mustache")  // 사용자 정의 로그인 페이지
                .defaultSuccessUrl("/home")  // 로그인 성공 후 이동 페이지
                .failureUrl("/login")  // 로그인 실패 후 이동 페이지
                .usernameParameter("userId")  // 아이디 파라미터명 설정
                .passwordParameter("passwd")  // 패스워드 파라미터명 설정
                .loginProcessingUrl("/login")  // 로그인 Form Action Url
                .successHandler(new AuthenticationSuccessHandler() {
                    // 로그인 성공 후 핸들러
                })
                .failureHandler(new AuthenticationFailureHandler() {
                    // 로그인 실패 후 핸들러
                }).and()
            // ...
    }
}
```
`HttpSecurity.logout()`메소드로 로그아웃 관련 설정을 할 수도 있다.
``` java
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            // ...
            .logout()
                .logoutUrl("/auth/logout.mustache")
                .logoutSuccessUrl("/auth/login.mustache")
                .logoutSuccessHandler(...)
                .invalidateHttpSession(true)  // 서버 세션 삭제하기
                .deleteCookies("JSESSIONID").and()  // 클라이언트 쿠키 삭제하기
            // ...
    }
}
```

각 기능은 `and()` 대신 <b>`disable()`</b>을 사용하여 비활성화할 수 있다.
``` java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .anyRequest().authenticated().and()
            .formLogin().disable()
            .httpBasic().disable()
            .logout().disable();
    }
}
```


## Filter
https://vsh123.github.io/spring%20security/Spring-Security-Filter-chain/

SessionManagementFilter














## 사용자 데이터 클래스 설계
`Role`과 `Authority`를 모두 사용한다. 따라서 사용자 데이터 클래스가 더 복잡하다.

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

    @Column(length = 200, nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @ManyToMany
    @JoinTable(
            name = "user_role",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id")
    )
    private Set<RoleEntity> roles = new HashSet<RoleEntity>();

    @Builder
    public UserEntity(String email, String password, Collection<RoleEntity> roles) {
        this.email = email;
        this.password = password;
        this.roles.addAll(roles);
    }
}
```
``` java
public interface UserRepository extends JpaRepository<UserEntity, Long> {
}
```
`역할(Role)`과 관렫된 클래스는 다음과 같다.
``` java
public enum RoleEnum {

    ADMIN("ADMIN"),
    USER("USER");

    private String description;

    RoleEnum(String description) {
        this.description = description;
    }
}
```
``` java
@Entity
@Table(name = "role")
@Getter
@NoArgsConstructor
public class RoleEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private RoleEnum role;

    @ManyToMany(mappedBy = "roles")
    private Set<UserEntity> users = new HashSet<UserEntity>();

    @ManyToMany
    @JoinTable(
            name = "role_authority",
            joinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "authority_id", referencedColumnName = "id")
    )
    private Set<AuthorityEntity> authorities = new HashSet<AuthorityEntity>();

    @Builder
    public RoleEntity(RoleEnum role, Collection<AuthorityEntity> authorities) {
        this.role = role;
        this.authorities.addAll(authorities);
    }
}
```
``` java
public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
    public RoleEntity findByRole(RoleEnum role);
}
```
`권한(Authority)`과 관련된 클래스는 다음과 같다.
``` java
public enum AuthorityEnum {

    CREATE_USER("CREATE_USER"),
    UPDATE_USER("UPDATE_USER"),
    DELETE_USER("DELETE_USER");

    private String description;

    AuthorityEnum(String description) {
        this.description = description;
    }
}
```
``` java
@Entity
@Table(name = "authority")
@Getter
@NoArgsConstructor
public class AuthorityEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private AuthorityEnum authority;

    @ManyToMany(mappedBy = "authorities")
    private Set<RoleEntity> roles = new HashSet<RoleEntity>();

    @Builder
    public AuthorityEntity(AuthorityEnum authority) {
        this.authority = authority;
    }
}
```
``` java
public interface AuthorityRepository extends JpaRepository<AuthorityEntity, Long> {
    public AuthorityEntity findByAuthority(AuthorityEnum authority);
}
```
사용자 추가를 위한 테스트 코드는 다음과 같다.
``` java
@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private AuthorityRepository authorityRepository;

    @Autowired
    private RoleRepository roleRepository;

    @BeforeEach
    public void setUp() {
        // 어플리케이션에서 필요로하는 Authority 먼저 생성
        AuthorityEntity authority = AuthorityEntity.builder()
                .authority(AuthorityEnum.CREATE_USER)
                .build();
        authorityRepository.save(authority);

        // 어플리케이션에서 필요로하는 Role 먼저 생성
        RoleEntity role = RoleEntity.builder()
                .role(RoleEnum.USER)
                .authorities(Arrays.asList(authority))
                .build();
        roleRepository.save(role);
    }

    @Autowired
    private UserRepository userRepository;

    @Test
    public void test() {
        RoleEntity role = roleRepository.findByRole(RoleEnum.USER);

        UserEntity user = UserEntity.builder()
                .email("paul@gmail.com")
                .password("1234")
                .roles(Arrays.asList(role))
                .build();

        userRepository.save(user);

        List<UserEntity> users = userRepository.findAll();
        assertThat(users.size()).isEqualTo(1);
    }
}
```
## 구성 클래스 작성
``` java
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    private final UserDetailsServiceImpl userDetailsService;
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        .csrf().disable();
        .authorizeRequests(authorize -> authorize
            .antMatchers("/","/join","/login").permitAll()
            .antMatchers("/member/**").authenticated() // 일반사용자 접근 가능
            .antMatchers("/manager/**").hasAnyRole("MANAGER", "ADMIN") // 매니저, 관리자 접근 가능
            .antMatchers("/admin/**").hasRole("ADMIN").and()// 관리자만 접근 가능
            .anyRequest().authenticated()
        )
        .formLogin()
            .loginPage("/login.mustache")  // 로그인 페이지
            .loginProcessingUrl("/login")  // 인증을 요청할 URL, POST 메소드를 사용해야한다.
            .defaultSuccessUrl("/home")  // 인증이 필요할 때 로그인 페이지와 로그인 성공시 리다이랙팅 경로 지정
            .usernameParameter("email")  // 아이디 파라미터명 설정
            .passwordParameter("password")  // 패스워드 파라미터명 설정
            .exceptionHandling().accessDeniedPage("/forbidden").and() 
        logout()
            .logoutUrl("/logout")
            .logoutSuccessUrl("/");
        .userDetailsService(userDetailsServiceImpl);
    }
}
```
여기서 가장 중요한 부분은 `HttpSecurity.formLogin().loginProcessingUrl()`와 `HttpSecurity.userDetailsService()`다.

로그인 페이지는 다음과 같다.
``` html
<form name="LoginForm" method="post" action="/login">
  <input type="email" name="email"/>
  <input type="password" name="password"/>
</form>
```
이때 `HttpSecurity.formLogin().loginProcessingUrl()`에 지정한 경로로 HTTP POST 방식으로 로그인 요청을 보낸다. 그러면 `HttpSecurity.userDetailsService()`로 설정한 `UserDetailsServiceImpl` 클래스를 사용하여 인증을 진행한다.

`UserDetailsServiceImpl` 클래스는 다음과 같다.
``` java
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepositoryImpl userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username Not Found."));

        return User.builder()
                .username(userEntity.getEmail())
                .password(userEntity.getPassword())
                // .roles()
                // .authorities()
                .build();
    }
}
```
이때 데이터베이스에서 읽어온 ROLE 또는 AUTHORITY 정보를 `org.springframework.security.core.userdetails.User`의 `roles()` 또는 `authorities()` 메소드로 적절히 변환하여 넣어주어야 한다.

## UserDetails
위 예제에서는 `loadUserByUsername()` 메소드의 반환값으로 `org.springframework.security.core.userdetails.User`클래스를 사용했다. 이 클래스 대신 데이터 클래스에서 `org.springframework.security.core.userdetails.UserDetails`인터페이스를 직접 구현할 수도 있다.
``` java
@Entity
@Table(name = "user")
@NoArgsConstructor
@Getter
public class UserEntity implements UserDetails {

}
```

이 경우 `loadUserByUsername()` 메소드에서 `UserEntity`를 바로 반환할 수도 있다.
``` java
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepositoryImpl userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username Not Found."));

        return userEntity;
    }
}
```
