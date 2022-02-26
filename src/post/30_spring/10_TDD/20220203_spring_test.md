---
title: "스프링 부트 테스트 코드 작성하기"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

# 스프링 부트 테스트 코드 작성하기
스프링부트의 다양한 테스트 코드 작성법에 대해 정리한다.

## 의존성 추가
스프링 부트에서 테스트 코드를 작성하려면 다음 의존성을 추가해야한다.
``` groovy
// build.gradle
dependencies {
    testImplementation('org.springframework.boot:spring-boot-starter-test')
}
```

## @WebMvcTest
`@WebMvcTest`는 `Spring MVC`와 관련된 컴포넌트를 테스트하는데 사용된다. 즉 `Controller Layer`와 관련된 컴포넌트만 컨테이너에 등록하기 때문에 속도가 빠르다. `@WebMvcTest`가 로드하는 컴포넌트는 다음과 같다.
- `@Controller`
- `@ControllerAdvice`
- `@JsonComponent`
- `@WebMvcConfigurer`

다음과 같은 컴포넌트는 컨테이너에 등록되지 않는다.
- `@Component`
- `@Service`
- `@Repository`

참고로 `@WebMvcTest`는 스프링 시큐리티와 관련된 설정도 로드한다.

### 사용법
다음과 같은 Controller 클래스가 있다고 가정하자.
``` java
// TestController.java

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping("/test1")
    public String test1() {
        return "test1";
    }
}
```

이 클래스는 다음과 같이 테스트할 수 있다.
``` java
// TestControllerTest.java

@WebMvcTest(TestController.class)
class TestControllerTest {

    @Autowired
    MockMvc mvc;

    @Test
    public void test1() throws Exception {
        mvc.perform(get("/test/test1"))
                .andExpect(content().string("test1"));
    }
}
```

### MockMvc
`MockMvc`는 테스트를 위한 Spring MVC의 진입점이다. 쉽게 말해 가상의 테스트용 `Spring MVC 웹 서버`를 실행시키고 이 곳에 GET, POST 같은 HTTP Request를 보내는 것이다. 

### Mocking
만약 다음과 같이 의존관계가 존재한다면 어떻게 할까?
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
`@WebMvcTest`는 Controller Layer의 컴포넌트만 로드하기 때문에 Service Layer는 직접 설정해야한다. 이때는 `org.springframework.boot:spring-boot-starter-test`에 내장된 `Mockito`를 사용하면 된다. 의존 관계에 있는 Layer를 Mocking하고 Stub를 구현해주면 된다.
``` java{11,12,22}
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

## @DataJpaTest
`Spring Data JPA`를 사용한다면 `@DataJpaTest`를 사용할 수 있다.
``` groovy
dependencies {
    // Spring Data JPA
    implementation "org.springframework.boot:spring-boot-starter-data-jpa"
}
```
`@DataJpaTest`를 사용하면 단위 테스트 환경에서 인메모리 데이터베이스를 사용하여 빠르게 테스트할 수 있다. 보통 `h2`를 인메모리 데이터베이스로 사용하며, 다음과 같은 의존성을 추가해야한다.
``` groovy
dependencies {
    // H2
    testImplementation 'com.h2database:h2'
}
```
이제 예제를 통해 테스트를 진행해보자.
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

`@DataJpaTest`는 다음과 같이 사용한다.
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

## @SpringBootTest
`@SpringBootTest`는 통합 테스트로 모든 컴포넌트를 컨테이너에 등록하기 때문에 속도가 느리다. 

`RestTemplate`

`@Transctional` 어노테이션을 명시하면 테스트가 실행된 후 롤백 처리 된다.

`@AutoConfigureMockMvc`
`@AutoConfigureWebTestClient`

## @MockMvcTest

## @RestClientTest

## @JsonTest

## 어떤 테스트를 사용해야할까?
일반적으로 스프링 애플리케이션은 `Controller Layer`, `Service Layer`, `Data Layer`로 폴더나 모듈을 나눈다. 응집도(Cohension)을 높이고 결합도(Coupling)을 줄이기 위해서다. 

계층을 분리하면 해당 계층만을 독립적으로 테스트할 수 있으며, 이를 `슬라이스 테스트(Slice Test)`라고 한다.
- `@WebMvcTest`
- `@DataJpaTest`

반면 어플리케이션을 구성하는 요소를 모두 로드하여 테스트하는 것을 `통합 테스트(Integration Test)`라고 한다.
- `@SpringBootTest`

어플리케이션의 규모가 커질 수록 통합 테스트에 많은 시간이 소요된다. 따라서 계층을 적절히 분리하고 필요한 컴포넌트만 로드하는 `슬라이스 테스트`를 사용하는 것이 좋겠다.