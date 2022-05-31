---
title: "Spring Security 테스트"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Spring Security 테스트
`Spring Security`를 테스트하는 방법에 대해 알아본다.

## 의존성 추가
스프링 시큐리티와 관련된 의존성은 다음과 같다.
``` groovy
// build.gradle
dependencies {
    testImplementation 'org.springframework.security:spring-security-test'
}
```

## @WithMockUser
`@WithMockUser`를 사용하면 <u>인증된</u> 가짜 사용자를 만들 수 있다. 별도의 설정이 없다면 username = "user", password = "password", role = "USER"로 설정된다.
``` java
import org.springframework.security.test.context.support.WithMockUser;

@WebMvcTest
class TestControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    @WithMockUser(roles = "USER")
    public void test() throws Exception {
        mvc.perform(get("/test/test1"))
                .andExpect(content().string("test1"));
    }
}
```
다음과 같이 username, password, role를 직접 설정할 수 있다.
``` java {8}
@WebMvcTest
class TestControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    @WithMockUser(username = "paul", password = "1234", roles = "USER")
    public void test() throws Exception {
        // ...
    }
}
```
다음과 같이 클래스 레벨에 추가할 수 있다.
``` java {2}
@WebMvcTest
@WithMockUser(username = "paul", password = "1234", roles = "USER")
class TestControllerTest {
    // ...
}
```

## @WithAnonymousUser
`@WithAnonymousUser`를 사용하면 인증되지 않는 사용자를 테스트할 수 있다.
``` java {2}
@WebMvcTest
@WithAnonymousUser
class TestControllerTest {
    // ...
}
```

## @WithUserDetails
대부분 `UserDetailsService`인터페이스의 `loadUserByUsername(String username)`를 구현하여 인증 정보를 가져온다.
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

        return UserInfo("paul@gmail.com", "Jason Paul", "USER");
    }
}
```
`@WithUserDetails`을 사용하면 테스트 환경에서 `UserDetailsService.loadUserByUsername(String username)`가 반환할 사용자 정보를 직접 설정할 수 있다.
``` java
import org.springframework.security.test.context.support.WithUserDetails;

@WebMvcTest
class TestControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    @WithUserDetails("paul@gmail.com")
    public void test() throws Exception {
        mvc.perform(get("/test/test1"))
                .andExpect(content().string("test1"));

    }
}
```

## SecurityContext에 직접 Authentication 주입하기
`SecurityContext`에 직접 `Authentication`을 주입할 수도 있다.
``` java
class Test {

    @BeforeEach
    void setUp() {
        UserDetails user = ...
        SecurityContext context = SecurityContextHolder.getContext();
        context.setAuthentication(new UsernamePasswordAuthenticationToken(user, user.getPassword(), user.getAuthorities()));
    }

    @Test
    void test() {
        ...
    }
}
```


## @WebMvcTest와 스프링 시큐리티
`@WebMvcTest`는 컨트롤러 계층과 관련된 컴포넌트만 컨테이너에 등록하는 슬라이싱 테스트다. `@WebMvcTest`는 스프링 시큐리티와 관련된 설정도 로드하기 때문에 별도의 시큐리티 관련 구성 클래스를 정의했다면 그 내용이 적용된다.
``` java {5-7}
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final MemberDetailsService memberDetailsService;
    private final JwtUtil jwtUtil;
    private final MemberRepository memberRepository;

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
                        .anyRequest().permitAll()
                );
    }
    // ...
}
```
문제는 위 코드와 같이 시큐리티 구성 클래스가 다른 빈에 의존할 때 발생한다. `@WebMvcTest` 테스트 코드를 실행하면 `MemberDetailsService`, `JwtUtil`, `MemberRepository` 빈이 없기 때문에 다음과 같은 에러가 발생한다.
```
Parameter 0 of constructor in SecurityConfig required a bean of type 'MemberDetailsService' that could not be found.
```
따라서 다음과 같이 시큐리티 구성 클래스를 빈 등록 대상에서 제외시켜야한다. 
``` java {3-5,15}
@WebMvcTest(
    controllers = TestController.class,
    excludeFilters = {
        @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = SecurityConfig.class)
    }
)
@DisplayName("TestController 테스트")
class TestControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    @DisplayName("test1() 테스트")
    @WithMockUser
    public void test_test1() throws Exception {
        mvc.perform(get("/test/test1"))
                .andExpect(content().string("test1"));
    }
}
```
이렇게 하면 스프링 시큐리티의 기본값이 적용되기 때문에 `@WithMockUser`어노테이션을 붙여 인증된 목업 유저로 테스트를 진행할 수 있다.