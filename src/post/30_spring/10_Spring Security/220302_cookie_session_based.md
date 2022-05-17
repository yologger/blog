---
title: "Cookie-Session 기반 인증 구현"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Cookie-Session 기반 인증 구현
[Token 기반 인증](/post/30_spring/10_Spring%20Security/220301_token_based_auth.html)에 이어 `Cookie-Session 기반 인증`을 구현해보자.

## 의존성 설정
`Spring Security` 의존성을 추가한다.
``` groovy
// build.gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-security:${spring_security_version}'
}
```

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
        .authorizeRequests()
            .antMatchers("/","/join","/login").permitAll()
            .antMatchers("/member/**").authenticated() // 일반사용자 접근 가능
            .antMatchers("/manager/**").hasAnyRole("MANAGER", "ADMIN") // 매니저, 관리자 접근 가능
            .antMatchers("/admin/**").hasRole("ADMIN").and()// 관리자만 접근 가능
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
