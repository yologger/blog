---
title: "스프링 부트 테스트 코드 작성하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# 스프링 부트 테스트 코드 작성하기
스프링부트의 다양한 테스트 코드 작성법에 대해 정리한다.

## 의존성 추가
스프링 부트에서 테스트 코드를 작성하려면 스프링 부트 테스트 모듈을 추가해야한다.
``` groovy
// build.gradle
dependencies {
    testImplementation('org.springframework.boot:spring-boot-starter-test')
}
```

## @WebMvcTest
<b>`@WebMvcTest`</b>는 `Spring MVC`와 관련된 컴포넌트를 테스트하는데 사용된다. 컨트롤러 계층과 관련된 컴포넌트만 컨테이너에 등록하기 때문에 속도가 빠르다. `@WebMvcTest`가 로드하는 컴포넌트는 다음과 같다.
- `@Controller`
- `@ControllerAdvice`
- `@JsonComponent`
- `Filter`
- `Converter`, `GenericConverter`
- `WebMvcConfigurer`
- `HandlerMethodArgumentResolver` 

반면 다음과 같은 컴포넌트는 컨테이너에 등록되지 않는다.
- `@Component`
- `@Service`
- `@Repository`
- `@Configuration`이 붙은 구성 클래스의 `@Bean`


### 사용법
두 개의 컨트롤러 클래스가 있다고 가정하자.
``` java
@RestController
@RequestMapping("/post")
public class PostController {

    @GetMapping("/test")
    public String test() {
        return "post";
    }
}
```
``` java
@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping("/test")
    public String test() {
        return "user";
    }
}
```

`MockMvc`는 테스트를 위한 `Spring MVC`의 진입점이다. 쉽게 말해 가상의 테스트용 엔드 포인트를 제공하며, 이 곳으로 HTTP 요청을 보내고 결과값을 테스트한다.

#### GET 요청 테스트
첫 번째 예제다.
``` java
@RestController
public class TestController {
    @GetMapping
    @RequestMapping("/test1")
    public ResponseEntity<String> test1() {
        return ResponseEntity.ok("test1");
    }
}
```
``` java
@WebMvcTest
public class TestControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void test1() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/test1"))
                .andExpect(status().isOk())
                .andExpect(content().string("test1"))
                .andDo(print());
    }
}
```
두 번째 예제다.
``` java
@RestController
public class TestController {
    @GetMapping
    @RequestMapping("/test2/{name}/{nation}")
    public ResponseEntity<String> test2(@PathVariable String name, @PathVariable String nation) {
        return ResponseEntity.ok("test2" + name + nation);
    }    
}
```
``` java
@WebMvcTest
public class TestControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void test2() throws Exception {
        String name = "John";
        String nation = "USA";
        mvc.perform(MockMvcRequestBuilders.get("/test2/{name}/{nation}", name, nation))
                .andExpect(status().isOk())
                .andExpect(content().string("test2" + name + nation))
                .andDo(print());
    }    
}
```
세 번째 예제다.
``` java
@RestController
public class TestController {
    @GetMapping
    @RequestMapping("/test3")
    public ResponseEntity<String> test3(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String authorization,
            @RequestParam String name,
            @RequestParam String nation
    ) {
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.AUTHORIZATION, authorization);

        return new ResponseEntity(name+nation, headers, HttpStatus.OK);
    }    
}
```
``` java
@WebMvcTest
public class TestControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void test3() throws Exception {
        String name = "John";
        String nation = "USA";
        String token = "Bearer werjklwerjweklrjlkwer";

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("name", name);
        params.add("nation", nation);

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.AUTHORIZATION, token);

        mvc.perform(MockMvcRequestBuilders.get("/test3")
                .headers(headers)
                .params(params)
                .cookie(new Cookie("key", "value"))
                .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(header().string(HttpHeaders.AUTHORIZATION, token))
        .andExpect(content().string(name+nation))
        .andDo(print());
    }
}
```
네 번째 예제다.
``` java
@RestController
public class TestController {
    @GetMapping
    @RequestMapping("/test4")
    public ResponseEntity<Person> test4() {
        Person p = Person.builder()
                .name("paul")
                .nation("USA")
                .build();

        return ResponseEntity.ok(p);
    }    
}
```
``` json
{
    "name": "paul",
    "nation": "USA"
}
```
``` java
@WebMvcTest
public class TestControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void test4() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/test4"))
                .andExpect(jsonPath("$.name", is("paul")))
                .andExpect(jsonPath("$.nation", is("USA")))
                .andDo(print());
    }    
}
```
다섯 번째 예제다.
``` java
@RestController
public class TestController {
    @GetMapping
    @RequestMapping("/test5")
    public ResponseEntity<List<Person>> test5() {
        List<Person> people = new ArrayList<>(
                Arrays.asList(
                        Person.builder().name("ronaldo").nation("portugal").build(),
                        Person.builder().name("son").nation("korea").build(),
                        Person.builder().name("messi").nation("argentina").build()
                )
        );
        return ResponseEntity.ok(people);
    }    
}
```
``` json
[
    {
        "name": "ronaldo",
        "nation": "portugal"
    },
    {
        "name": "son",
        "nation": "korea"
    },
    {
        "name": "messi",
        "nation": "argentina"
    }
]
```
``` java
@WebMvcTest
public class TestControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void test5() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/test5"))
                .andExpect(jsonPath("$[0].name", is("ronaldo")))
                .andExpect(jsonPath("$[1].nation", is("korea")))
                .andExpect(jsonPath("$[2]").exists())
                .andExpect(jsonPath("$[3]").doesNotExist())
                .andDo(print());
    }    
}
```
여섯 번째 예제다.
``` java
@RestController
public class TestController {
    @GetMapping
    @RequestMapping("/test6")
    public ResponseEntity<JSONObject> test6() {

        HttpHeaders headers = new HttpHeaders();

        JSONArray array = new JSONArray();
        array.add(new Person("paul", "USA"));
        array.add(new Person("smith", "UK"));
        array.add(new Person("john", "Spain"));

        JSONObject body = new JSONObject();
        body.put("people", array);

        return new ResponseEntity(body, headers, HttpStatus.OK);
    }    
}
```
``` json
{
    "people": [
        {
            "name": "paul",
            "nation": "USA"
        },
        {
            "name": "smith",
            "nation": "UK"
        },
        {
            "name": "john",
            "nation": "Spain"
        }
    ]
}
```
``` java
@WebMvcTest
public class TestControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void test6() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/test6"))
                .andExpect(jsonPath("$.people[0].name", is("paul")))
                .andExpect(jsonPath("$.people[2].nation", is("Spain")))
                .andExpect(jsonPath("$.people[0]").exists())
                .andExpect(jsonPath("$.people[3]").doesNotExist())
                .andDo(print());

    }
}
```


#### POST 요청 테스트
HTTP POST는 다음과 같이 테스트할 수 있다.
``` java
@WebMvcTest
class Test {

    @Autowired
    MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void test3() throws Exception {
        Map<String, String> body = new HashMap<>();
        body.put("email", "Smith@gmail.com");
        body.put("name", "Smith");
        body.put("nickname", "Smith");
        body.put("password", "4321Qwer32!!");

        String mockAccessToken = "123Aqweaq3qw12dsx4jk2";

        mvc.perform(MockMvcRequestBuilders.post("/auth/join")
            .header(HttpHeaders.AUTHORIZATION, "Bearer " + mockAccessToken)
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(body)
        ))
        .andExpect(status().isOk())
        .andDo(print());
    }
}
```

`@WebMvcTest`의 파라미터로 컨테이너에 빈으로 등록할 클래스를 지정할 수 있다. 이 경우 지정되지 않은 `Spring MVC`의 컴포넌트는 빈으로 등록되지 않는다.
``` java
@WebMvcTest(PostController.class)
class Test {

    @Autowired
    MockMvc mvc;

    @Test
    void test1() throws Exception {
        mvc.perform(get("/post/test"))
                .andExpect(content().string("post"));
    }

    @Test
    void test2() throws Exception {
        // UserController는 빈에 등록되지 않았으므로 이 부분은 테스트에 실패한다.
        mvc.perform(get("/user/test"))
                .andExpect(content().string("user"));
    }

}
```

### Mocking
만약 컨트롤러에 다음과 같이 의존관계가 존재한다면 어떻게 할까?
``` java{7,16}
// TestController.java
@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class TestController {

    final TestService testService;

    @GetMapping("/test1")
    public String test1() {
        return "test1";
    }

    @GetMapping("/test2")
    public String test2() {
        return testService.test();
    }
}
```

``` java
// TestService.java
@Service
public class TestService {
    public String test() {
        return "test";
    }
}
```
`@WebMvcTest`는 컨트롤러 계층의 컴포넌트만 로드하기 때문에 의존관계에 있는 컴포넌트는 직접 설정해야한다. 이때는 `spring-boot-starter-test`라이브러리에 포함된 `Mockito`를 사용하여 모킹하면 된다.
``` java{10,11,21}
// TestControllerTest.java
import org.springframework.boot.test.mock.mockito.MockBean;

@WebMvcTest(TestController.class)
class TestControllerTest {

    @Autowired
    MockMvc mvc;

    @MockBean
    TestService testService;

    @Test
    public void test1() throws Exception {
        mvc.perform(get("/test/test1"))
                .andExpect(content().string("test1"));
    }

    @Test
    public void test2() throws Exception {
        given(testService.test()).willReturn("test");

        mvc.perform(get("/test/test2"))
                .andExpect(content().string("test"));
    }
}
```

### 특정 컴포넌트 제외시키기
`@WebMvcTest`는 컨트롤러 계층과 관련된 컴포넌트만 컨테이너에 등록하는 슬라이싱 테스트다. `@WebMvcTest`는 스프링 시큐리티와 관련된 설정도 로드하기 때문에 커스텀 스프링 시큐리티 구성 클래스를 정의했다면 그 내용이 적용된다.
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
따라서 다음과 같이 시큐리티 관련 커스텀 구성 클래스를 빈 등록 대상에서 제외시켜야한다. 
``` java {3-5,15}
@WebMvcTest(
    controllers = TestController.class,
    excludeFilters = {
        @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = SecurityConfig.class)
    }
)
@DisplayName("TestController 테스트")
class TestControllerTest {

    // ...
}
```
이렇게 되면 기본 스프링 시큐리티 설정이 적용된다. 따라서 `@WithMockUser`어노테이션을 붙여 인증된 사용자로 엔드포인트에 접근할 수 있다.
``` java {15}
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

## H2 데이터베이스
`H2`의 인메모리 데이터베이스를 사용하면 쉽게 데이터베이스를 테스트할 수 있다.

### 환경설정
다음 의존성을 추가한다.
``` groovy
// build.gradle
dependencies {
    // H2
    compileOnly 'com.h2database:h2'
}
```
그 다음 `application.properties`에 `H2` 관련 설정을 추가한다. 
``` properties {1-5}
# Datasource 설정
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# Jpa 설정
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.generate-ddl=true
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.format_sql=true
```
``` yml {3-8}
spring:
  # Datasource 설정
  datasource:
    url: jdbc:h2:mem:testdb
    username: sa
    password:
    driver-class-name: org.h2.Driver
  # JPA 설정    
  jpa:
    hibernate:
      ddl-auto: create-drop
    generate-ddl: true
    properties:
      hibernate:
        show_sql: true
        format_sql: true        
```

### H2 Console
`H2` 데이터베이스는 인메모리 데이터베이스를 위한 웹 기반 데이터베이스 클라이언트를 제공한다. `H2 Console`을 사용하려면 `application.properties`파일에 다음 설정을 추가해야한다.
``` properties
## H2 설정
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

어플리케이션이 구동된 상태에서 `http://localhost:포트/h2-console`에 접속하면 다음과 같은 화면을 볼 수 있다.

![](./20220205_spring_test/1.png)

`Connect` 버튼을 누르면 `H2 Console`에 접속된다. 이 곳에서 스키마를 조작할 수 있고 SQL문을 직접 실행할 수 도 있다.

![](./20220205_spring_test/2.png)

`H2`는 인메모리 데이터베이스이기 때문에 어플리케이션이 실행된 상태에서만 `H2 Console`을 사용할 수 있다.

### 테스트 환경에만 H2 활용하기
로컬 환경에서는 `MySQL`, 단위 테스트 환경에서는 `H2`를 사용할 수 있다. 우선 의존성 설정을 다음과 같이 수정한다.
``` groovy
// build.gradle
dependencies {
    runtimeOnly 'mysql:mysql-connector-java'

    // compileOnly 'com.h2database:h2'
    testCompileOnly 'com.h2database:h2'
}
```
`src/main/resources`의 `application.properties`는 다음과 같이 구성하여 `MySQL`을 사용하도록 한다.
``` properties
# src/main/resources/application.properties
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=root

# Jpa 설정
spring.jpa.hibernate.ddl-auto=none
## spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=true
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.format_sql=true
```
`src/test/resources`의 `application.properties`는 다음과 같이 구성하여 `H2`을 사용하도록 한다.
``` properties
## src/test/resources/application.properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# Jpa 설정
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.generate-ddl=true
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.format_sql=true
```

이제 테스트 환경에서는 `H2`를 사용하게 된다.
``` java
@SpringBootTest
class MemberRepositoryTest {

    @Autowired
    MemberRepository memberRepository;
    
    @AfterEach
    void tearDown() {
        memberRepository.deleteAll();
    }

    @Test
    void test() {
        MemberEntity memberEntity = MemberEntity.builder()
                .email("paul@gmail.com")
                .password("1234")
                .build();

        MemberEntity saved = memberRepository.save(memberEntity);

        assertThat(saved.getEmail()).isEqualTo("paul@gmail.com");
    }
}
```

## @DataJpaTest
`@DataJpaTest`를 사용하면 영속성 계층을 테스트할 수 있다. 이 어노테이션은 `Spring Data JPA`와 관련된 컴포넌트만 스프링 컨테이너에 등록하기 때문에 `@SpringBootTest`보다 훨씬 빠르다.

이 어노테이션도 `Spring Boot Test`모듈에 포함되어있다.
``` groovy
dependencies {
    // Spring Data JPA
    implementation "org.springframework.boot:spring-boot-starter-data-jpa"

    // Spring Test
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```
`@DataJpaTest`는 <u>기본적으로 인메모리 데이터베이스를 사용하여 테스트를 진행</u>한다. 따라서 인메모리 데이터베이스 의존성을 추가해야하며, 인메모리 데이터베이스로는 주로 `h2`가 사용된다.
``` groovy
dependencies {
    // H2
    testRuntimeOnly 'com.h2database:h2'
}
```
`application.properties` 또는 `application.yml`에 `H2`와 관련된 별도의 설정을 하지 않으면 자동으로 기본 설정이 적용된다. 

이제 예제를 통해 테스트를 진행해보자. 영속성 계층 클래스는 다음과 같다.
``` java
// UserEntity.java
@Entity
@Table(name= "user")
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 200, nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String password;
}
```
``` java
// UserRepository.java
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
}
```

`@DataJpaTest`는 다음과 같이 사용할 수 있다.
``` java
// UserRepositoryTest.java
@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
        userRepository.deleteAll();
    }

    @Test
    public void test_findByEmail() {
        // Given
        String email = "CR7@gmail.com";
        String name = "Cristiano Ronaldo";
        String password = "12341234";
        String nickname = "CR7";

        UserEntity input = UserEntity.builder()
                .email(email)
                .name(name)
                .password(password)
                .nickname(nickname)
                .build();

        userRepository.save(input);

        // When
        Optional<UserEntity> output = userRepository.findByEmail(email);

        // Then
        assertTrue(output.isPresent());
        assertThat(output.get().getEmail()).isEqualTo(email);
    }
}
```

### @DataJpaTest에서 온디스크 데이터베이스 사용하기
`@DataJpaTest`는 <u>기본적으로 인메모리 데이터베이스를 사용하여 테스트를 진행</u>한다. 온디스크 데이터베이스를 사용하려면 `@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)` 어노테이션을 테스트 클래스에 추가하면된다.
``` java{3}
// UserRepositoryTest.java
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class UserRepositoryTest {
    // ..
}
```
물론 온디스크 데이터베이스를 사용하는 경우 이에 대한 설정이 되어있어야 한다.
``` groovy {6-7}
// build.gradle
dependencies {
    // H2
    testRuntimeOnly 'com.h2database:h2'

    // MySQL Connector
    runtimeOnly 'mysql:mysql-connector-java'
}
```
``` properties
# src/main/resources/application.properties
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=root

# Jpa 설정
spring.jpa.hibernate.ddl-auto=none
## spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=true
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.format_sql=true
```

### @PersistenceContext
`@PersistenceContext`를 사용하면 `EntityManager`를 주입받을 수 있다.
``` java {4-5}
@DataJpaTest
class Test {

    @PersistenceContext
    private EntityManager entityManager;

    @Test
    public void test() {
        String dummyEmail = "CR7@gmail.com";
        String dummyName = "Cristiano Ronaldo";
        String dummyPassword = "12341234";
        String dummyNickname = "CR7";

        MemberEntity dummyMember = MemberEntity.builder()
                .email(dummyEmail)
                .name(dummyName)
                .password(dummyPassword)
                .nickname(dummyNickname)
                .authority(AuthorityType.USER)
                .build();

        entityManager.persist(dummyMember);

        MemberEntity savedMember = entityManager.find(MemberEntity.class, 1L);

        assertThat(savedMember.getAuthority()).isEqualTo(AuthorityType.USER);
    }
}
```

### @Commit, @Rollback
`@DataJpaTest`는 온디스크 데이터베이스를 사용하는 경우 기본적으로 테스트 종료 후 데이터베이스를 롤백한다. 롤백을 하지 않으려면 `@Commit` 또는 `@Rollback(false)` 어노테이션을 붙이면 된다.
``` java
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Commit
class UserRepositoryTest {
    // ...
}
```
### @SQL
`@SQL`을 사용하면 테스트를 실행하기 전 특정 쿼리를 수행할 수 있다. 보통 테스트 전에 미리 더미 데이터를 삽입하거나 스키마를 생성하는데 사용된다.

우선 `src/test/resources/data` 경로에 `dummy.sql` 파일을 다음과 같이 생성하자.
``` sql
-- dummy.sql
INSERT INTO member(email, password) VALUES('paul@gmail.com', '1234'), ('smith@gmail.com', '1234'), ('monica@gmail.com', '1234');
```
그리고 다음과 같이 테스트를 진행하기 전 쿼리를 실행시킬 수 있다.
``` java {4}
import org.springframework.test.context.jdbc.Sql;

@DataJpaTest
@Sql(scripts = {"classpath:data/dummy.sql"})
class MemberRepositoryTest {
    @Autowired MemberRepository memberRepository;

    @Test
    public void test() {
        List<MemberEntity> members = memberRepository.findAll();
        assertThat(members.size()).isEqualTo(3);
    }
}
```

## @SpringBootTest
`@SpringBootTest`는 통합 테스트에 사용되는 어노테이션이다. 모든 컴포넌트를 컨테이너에 등록하기 때문에 속도가 느리지만 운영 환경과 가장 유사하게 테스트할 수 있다.

``` java
@SpringBootTest
class MemberController {
    // ..
}
```
`classes` 속성을 사용하면 특정 클래스만 빈으로 등록하여 사용할 수 있다.
``` java {2-5}
@SpringBootTest(
    classes = {
        MemberController.class,
        MemberService.class
    }
)
class MemberController {

    // ..
}
```

### @SpringBootTest와 서비스 계층 테스트
`@SpringBootTest`는 서비츠 계층 테스트에 사용할 수 있다. 우선 간단한 예제를 살펴보자. 데이터소스는 `MySQL`을 사용한다.
``` properties
# Datasource 설정
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/test_db
spring.datasource.username=root
spring.datasource.password=root

# Jpa 설정
spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=true
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.format_sql=true
```
영속성 계층은 다음과 같다.
``` java
public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
}
```
서비스 계층은 다음과 같다.
``` java
@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    @Transactional
    public ResponseEntity<Long> join(JoinRequest request) {
        MemberEntity member = MemberEntity.builder()
                .email(request.getEmail())
                .password(request.getPassword())
                .build();

        MemberEntity saved = memberRepository.save(member);
        return new ResponseEntity(saved.getId(), HttpStatus.CREATED);
    }
}
```
테스트 코드는 다음과 같이 작성하면 된다.
``` java
@SpringBootTest
class MemberServiceTest {

    @Autowired
    private MemberService memberService;

    @Test
    public void test() {
        JoinRequest request = JoinRequest.builder()
                .email("paul@gmail.com")
                .password("1234")
                .build();
        ResponseEntity<Long> response = memberService.join(request);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isNotZero();
    }
}
```
위 코드를 실행하면 테스트용 데이터가 데이터베이스에 추가된다. `@Transactional` 어노테이션을 테스트 메소드에 추가하면 테스트 성공 후 자동으로 롤백할 수 있다.
``` java {8}
@SpringBootTest
class MemberServiceTest {

    @Autowired
    private MemberService memberService;

    @Test
    @Transactional
    public void test() {
        JoinRequest request = JoinRequest.builder()
                .email("paul@gmail.com")
                .password("1234")
                .build();
        ResponseEntity<Long> response = memberService.join(request);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isNotZero();
    }
}
```
`@Transactional`은 클래스 레벨에도 붙일 수 있다. 이 경우 테스트 클래스의 모든 메소드에 적용된다.
``` java {2}
@SpringBootTest
@Transactional
class MemberServiceTest {
    // ..
}
```

### @SpringBootTest와 컨트롤러 계층 테스트
`@SpringBootTest`어노테이션은 컨트롤러 계층을 테스트하는데 사용할 수 있다. `@SpringBootTest`를 사용하여 다음 컨트롤러를 테스트해보자.
``` java
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/join")
    public ResponseEntity<Long> join(@RequestBody JoinRequest request) {
        return memberService.join(request);
    }
}
```

#### WebEnvironment.MOCK (기본값)
`@SpringBootTest`의 `webEnviroment` 속성을 `SpringBootTest.WebEnvironment.MOCK`로 설정하면 실제 내장 톰캣을 구동하지 않고 <u>MOCK 컨테이너를 사용</u>하며, 이 곳에 빈이 등록된다.
``` java{1}
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class MemberControllerTest {
    // ...
}
```
`SpringBootTest.WebEnvironment.MOCK`을 사용하는 경우 테스트 클래스에 `@AutoConfigureMockMvc`를 추가하고 `MockMvc`를 주입받아 컨트롤러를 테스트할 수 있다.
``` java {2,5-6}
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
class MemberControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void test() throws Exception {

        Map<String, String> body = new HashMap<>();
        body.put("email", "smith@gmail.com");
        body.put("password", "1234");

        mvc.perform(post("/member/join")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(body)))
                .andExpect(status().isCreated())
                .andDo(print());
    }
}
```
위 코드는 테스트 데이터를 데이터베이스에 커밋한다. 테스트 후 롤백을 하려면 `@Transactional` 어노테이션을 추가하면 된다.
``` java {8}
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
class MemberControllerTest {

    // ...

    @Test
    @Transactional    
    void test() throws Exception {
        // ..
    }
}
```
특정 컴포넌트를 다음과 같이 Mocking 할 수도 있다. `MemberRepository`를 Mocking 해보자.
``` java {8-9,22}
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
class MemberControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private MemberRepository memberRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @Transactional
    void test() throws Exception {
        MemberEntity dummyResult = MemberEntity.builder()
                .email("smith@gmail.com")
                .password("1234")
                .build();

        when(memberRepository.save(any())).thenReturn(dummyResult);

        Map<String, String> body = new HashMap<>();
        body.put("email", "smith@gmail.com");
        body.put("password", "1234");

        mvc.perform(post("/member/join")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(body)))
                .andExpect(status().isCreated())
                .andDo(print());
    }
}
```
이번에는 `MemberService`를 Mocking 해보자.
``` java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
class MemberControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private MemberService memberService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @Transactional
    void test() throws Exception {

        ResponseEntity<Long> dummyResponse = new ResponseEntity(1L, HttpStatus.CREATED);

        when(memberService.join(any())).thenReturn(dummyResponse);

        Map<String, String> body = new HashMap<>();
        body.put("email", "smith@gmail.com");
        body.put("password", "1234");

        mvc.perform(post("/member/join")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(body)))
                .andExpect(status().isCreated())
                .andDo(print());
    }
}
```
위 예제처럼 컨트롤러와 바로 인접한 `MemberService`를 Mocking 하는 경우 `@SpringBootTest` 대신에 슬라이싱 테스트인 `@WebMvcTest`를 사용하는 것이 더 빠르다.
``` java
@WebMvcTest
@AutoConfigureMockMvc
class MemberControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private MemberService memberService;

    @MockBean
    private MemberRepository memberRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void test() throws Exception {

        ResponseEntity<Long> dummyResponse = new ResponseEntity(1L, HttpStatus.CREATED);

        when(memberService.join(any())).thenReturn(dummyResponse);

        Map<String, String> body = new HashMap<>();
        body.put("email", "smith@gmail.com");
        body.put("password", "1234");

        mvc.perform(post("/member/join")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(body)))
                .andExpect(status().isCreated())
                .andDo(print());
    }
}
```

#### WebEnvironment.RANDOM_PORT
`SpringBootTest.WebEnvironment.RANDOM_PORT`로 설정하면 <u>랜덤한 포트를 사용하여 실제 톰캣을 구동</u>시킨 후 모든 컴포넌트를 컨테이너에 등록한다. 이 경우 `TestRestTemplate`으로 컨트롤러를 테스트할 수 있다.
``` java {1}
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class MemberControllerTest {

    @Autowired
    TestRestTemplate template;

    @LocalServerPort
    private int port;   // 랜덤한 포트가 주입된다.

    @Test
    void test() {
        JoinRequest request = JoinRequest.builder()
                .email("ronaldo@gmail.com")
                .password("1234")
                .build();

        ResponseEntity<Long> response = template.postForEntity("/member/join", request, Long.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }
}
```
컨트롤러가 서비스 계층에 의존하는 경우 서비스 컴포넌트까지 빈으로 등록해야하므로 시간이 오래 걸린다. 이 경우 서비스 컴포넌트를 Mocking할 수 있다.
``` java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class TestControllerTest {

    @Autowired
    private TestRestTemplate template;

    @MockBean
    private TestService testService;

    @Test
    public void test() throws Exception {
        when(testService.test()).thenReturn("test");
        ResponseEntity<String> response = template.getForEntity("/test/test", String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }
}
```

`WebEnvironment.RANDOM_PORT`으로 설정할 경우 실제 톰캣을 사용하기 때문에 `@Transactional` 어노테이션을 추가해도 롤백이 되지 않는다. 따라서 다음 방법들을 사용한다.
- 테스트 코드에 데이터를 롤백하는 코드를 직접 추가한다.
- `H2` 인메모리 데이터베이스를 사용한다.

## 어떤 테스트를 사용해야할까?
일반적으로 스프링 애플리케이션은 응집도을 높이고 결합도을 낮추기 위해 `Controller Layer`, `Service Layer`, `Data Layer`로 폴더나 모듈을 나눈다. 

계층을 분리하면 해당 계층만을 독립적으로 테스트할 수 있으며, 이를 `슬라이스 테스트(Slice Test)`라고 한다. 스프링 프레임워크가 제공하는 슬라이스 테스트는 [이 곳](https://docs.spring.io/spring-boot/docs/current/reference/html/test-auto-configuration.html#appendix.test-auto-configuration)에서 확인할 수 있다.
- `@WebMvcTest`
- `@DataJpaTest`

반면 어플리케이션을 구성하는 요소를 모두 로드하여 테스트하는 것을 `통합 테스트(Integration Test)`라고 한다.
- `@SpringBootTest`

어플리케이션의 규모가 커질수록 통합 테스트에 많은 시간이 소요된다. 따라서 계층을 적절히 분리하고 필요한 컴포넌트만 로드하는 `슬라이스 테스트`를 사용하는 것이 좋겠다.

## @TestConfiguration, @Import
`@TestConfiguration`를 사용하면 테스트 환경에서 특정 빈을 선택적으로 스프링 컨테이너에 등록할 수 있다.

예제를 살펴보자. Query DSL을 사용하는 경우 `@SpringBootTest`로 통합 테스트를 하면 모든 빈이 등록되기 때문에 큰 문제가 없다. 그러나 `@DataJpaTest`를 사용하는 경우 Query DSL과 관련된 빈이 주입되지 않아 에러가 발생한다. 
```
Parameter 0 of constructor in com.yologger.repository.post.PostCustomRepositoryImpl required a bean of type 'com.querydsl.jpa.impl.JPAQueryFactory' that could not be found.
```

이제 테스트 환경에서 Query DSL과 관련된 빈을 등록해보자.
``` java
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@TestConfiguration
public class TestConfig {

    @PersistenceContext
    private EntityManager entityManager;

    @Bean
    public JPAQueryFactory jpaQueryFactory() {
        return new JPAQueryFactory(entityManager);
    }
}
```

그리고 `@Import`로 테스트 환경에서만 설정 클래스를 활성화할 수 있다.
``` java {2}
@DataJpaTest
@Import(TestConfig.class)
class MemberRepositoryTest {

    @Autowired
    private MemberRepository memberRepository;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    public void tearDown() {
        memberRepository.deleteAll();
    }

    @Test
    public void test_queryMember() {

        // Given
        String dummyEmail = "CR7@gmail.com";
        String dummyName = "Cristiano Ronaldo";
        String dummyPassword = "12341234";
        String dummyNickname = "CR7";

        MemberEntity input = MemberEntity.builder()
                .email(dummyEmail)
                .name(dummyName)
                .password(dummyPassword)
                .nickname(dummyNickname)
                .build();

        memberRepository.save(input);

        // When
        List<MemberEntity> members = memberRepository.findAll();

        // Then
        assertThat(members.size()).isEqualTo(1);
    }
}
```