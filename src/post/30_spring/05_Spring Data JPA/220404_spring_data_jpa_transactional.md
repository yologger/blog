---
title: "Spring Data JPA - Transaction"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## @PersistenceContext, @PersistenceUnit
Hibernate에서는 보통 `EntityManager`객체를 직접 생성하고 관리한다.
``` java
// EntityMangerFactory 생성
EntityManagerFactory entityManagerfactory = Persistence.createEntityManagerFactory("test_persistence");

// EntityManager 생성
EntityManager entityManager = entityManagerfactory.createEntityManager();

// Transaction 생성
EntityTransaction transaction = entityManager.getTransaction();

try {
    // Transaction 생성
    transaction.begin();

    // 엔티티 생성
    MemberEntity member = new MemberEntity("paul@gmail.com", "paul", "1234");

    // 데이터 삽입
    entityManager.persist(member);

    // Commit
    transaction.commit();

} catch (Exception e) {
    transaction.rollback();
} finally {
    entityManager.close();
}

entityManagerfactory.close();
```

Spring Data JPA를 사용하면 스프링이 직접 EntityManager를 생성하고 관리한다. 이렇게 Spring IoC Container에서 관리하는 EntityManager를 `Shared EntityManager` 또는 `Managed EntityManager`라고 한다. `@PersistenceContext` 어노테이션을 사용하면 이 EntityManager를 주입받을 수 있다. 
``` java {6,7}
import javax.persistence.PersistenceContext;

@Service
public class MemberService {

    @PersistenceContext
    EntityManager entityManager;

    public void join(String email, String name, String password) {
        // Transaction 생성
        EntityTransaction transaction = entityManager.getTransaction();

        try {
            // Transaction 생성
            transaction.begin();

            // 엔티티 생성
            MemberEntity member = new MemberEntity("paul@gmail.com", "paul", "1234");

            // 데이터 삽입
            entityManager.persist(member);

            // Commit
            transaction.commit();

    } catch (Exception e) {
        transaction.rollback();
    } finally {
        entityManager.close();
    }
}
```
위 코드를 실행하면 다음과 같은 에러가 발생한다.
```
Not allowed to create transaction on shared EntityManager - use Spring transactions or EJB CMT instead.
```
`Shared EntityManager`는 스프링이 지정한 방법인 `@Transactional` 어노테이션으로 트랜잭션을 처리해야한다.
``` java  {7}
@Service
public class MemberService {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional
    public void join(String email, String name, String password) {

        // 엔티티 생성
        MemberEntity member = new MemberEntity("paul@gmail.com", "paul", "1234");

        // 데이터 삽입
        entityManager.persist(member);
    }
}
```

다음과 같이 `flush()`를 호출하여 데이터베이스에 즉시 반영할 수도 있다.
``` java
// 엔티티 생성
MemberEntity member = new MemberEntity("paul@gmail.com", "paul", "1234");

// 데이터 삽입
entityManager.persist(member);

// 플러시
entityManager.flush();
```

참고로 `EntityManagerFactory`를 주입받으려면 `@PersistenceUnit`을 사용하면 된다.
``` java
@PersistenceUnit
EntityManagerFactory entityManagerFactory;
```

## @Transactional
스프링 프레임워크는 서블릿 컨테이너 위에서 동작한다. 서블릿 컨테이너는 사용자가 HTTP 요청을 보낼 때마다 서블릿에 하나의 스레드를 할당하며, 이 스레드가 각각의 요청을 처리하게 된다. 이 말은 스프링 프레임워크도 멀티 스레드로 동작하며, 각 스레드에서 EntityManager로 메모리에 위치한 영속성 컨텍스트에 동시에 접근할 수 있기 때문에 `Thread Safe`하지 않다는 것을 의미한다.

따라서 `Shared EntityManager`를 사용할 때는 스레드를 동기화하고 `Thread Safe`를 보장하기 위해 반드시 <b>`@Transactional`</b> 어노테이션을 추가해야한다.
``` java {10}
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Service
public class MemberService {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional
    public void join(String email, String name, String password) {
        MemberEntity member = new MemberEntity("paul@gmail.com", "paul", "1234");
        entityManager.persist(member);
    }
}
```
`@Transactional`은 해당 어노테이션이 붙어있는 메소드에 트랜잭션을 적용해준다. 따라서 메소드 전체가 성공해야 트랜잭션을 커밋하며, 메소드 실행 중 예외가 발생하면 트랜잭션을 롤백한다.

`@Transactional`어노테이션은 메소드 뿐만 아니라 클래스에도 붙일 수 있다. 이 경우 모든 메소드에 트랜잭션이 적용된다.
``` java
@Transactional
public class MemberService {
    // ...
}
```

참고로 Spring Data JPA를 사용하지 않는 경우 일반적으로 `Dao`클래스를 직접 정의하고 내부적으로 EntityManager를 사용하여 Data Access Layer를 구현했다.
``` java
public class MemberDao {

    protected EntityManager entityManager;

    @PersistenceContext
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public void save(member MemberEntity) throws DataAccessException {
        entityManager.persist(member);
    }

    public MemberEntity get(Long id) {
        return MemberEntity entityManager.find(MemberEntity.class, id);
    }

    public void delete(member MemberEntity) throws DataAccessException {
        entityManager.remove(member);
    }

    // ...
} 
```
Spring Data JPA를 사용하는 경우 EntityManager를 직접 사용하기 보단 Spring Data JPA가 제공하는 `JpaRepository` 인터페이스를 구현한다.
``` java
public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
    // ...
}
```
JpaRepository는 내부적으로 Shared EntityManager를 사용하여 영속성 컨텍스트를 조작한다. 따라서 JpaRepository의 메소드를 호출하는 곳에 `@Transaction` 어노테이션을 추가해야한다.
``` java {7}
@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Transactional
    public void join(String email, String name, String password) {
        // ...
    
        MemberEntity member = new Member(email, name, password);
        memberRepository.save(member);

        // ...
    }
}
```

`@Transactional` 어노테이션은 Unchecked Exception이 발생했을 때만 롤백한다. Checked Exception이 발생해도 롤백을 하고 싶으면 `@Transactional(rollbackFor = Exception.class)`로 지정해야한다.


## @Transactional과 테스트
테스트 클래스나 테스트 메소드에 `@Transactional` 어노테이션을 추가하면 테스트가 끝난 후 자동으로 롤백된다. 
``` java
@SpringBootTest
public class Test {
    
    @Transcational
    public void test() {
        // ...
    }
}
```

`@Transactional`을 사용하지 않는 경우 다음과 같이 테스트 종료 후 데이터를 삭제하는 코드를 추가한다.
``` java
public class Test {

    @Autowired MemberRepository memberRepository;

    @AfterEach
    public void tearDown() {
        memberRepository.deleteAll();
    }

    @Transcational
    public void test() {
        // ...
    }
}
```
`@SpringBootTest`의 `webEnvironment`속성을 `SpringBootTest.WebEnvironment.RANDOM_PORT`로 설정하면 `@Transactional` 어노테이션을 붙여도 롤백되지 않는다. 따라서 다음과 같이 롤백 코드를 직접 추가해야한다.
``` java {27}
@SpringBootTest(
     webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
class AuthControllerTest {

    @Autowired
    TestRestTemplate template;

    @Autowired
    MemberRepository memberRepository;

    @Nested
    @DisplayName("회원가입 테스트")
    class Join {

        @Test
        @DisplayName("회원가입 성공 테스트")
        void join() {
            JoinRequestDto request = JoinRequestDto.builder()
                    .email("Smith@gmail.com")
                    .name("Smith")
                    .nickname("Smith")
                    .password("4321Qwer32!!")
                    .build();
            ResponseEntity<JoinResponseDto> response = template.postForEntity("/auth/join", request, JoinResponseDto.class);
            assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
            memberRepository.deleteById(response.getBody().getMemberId());
        }
    }
```

## @Commit, @Rollback
`@Commit`, `@Rollback`은 스프링 테스트 모듈에 포함된 어노테이션으로 테스트 환경에서 사용한다.
``` groovy
// build.gradle
dependencies {
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    // ...
}
```
테스트 환경에서 `@Test`, `@Transactional`을 함께 사용하는 경우 테스트가 끝나면 기본적으로 자동으로 롤백이 된다. 다음 두 코드는 동일하다.
``` java
@SpringBootTest
public class Test {

    @Autowired
    MemberRepository memberRepository;

    @Test
    @Transactional
    public test() {
        memberRepository.save(new MemberEntity("ronaldo@gmail.com", "ronaldo", 35));
        memberRepository.save(new MemberEntity("messi@gmail.com", "messi", 35));

        // ...
    }
}
```
``` java {9}
@SpringBootTest
public class Test {

    @Autowired
    MemberRepository memberRepository;

    @Test
    @Transactional
    @Rollback(value = true)
    public test() {
        memberRepository.save(new MemberEntity("ronaldo@gmail.com", "ronaldo", 35));
        memberRepository.save(new MemberEntity("messi@gmail.com", "messi", 35));

        // ...
    }
}
```
`@Rollback(value = false)`로 설정하는 경우 테스트 종료 후 롤백되지 않도록 한다. 메소드에 붙이면 해당 메소드만 롤백이 된다.
``` java {8}
@SpringBootTest
public class Test {

    // ...

    @Test
    @Transactional
    @Rollback(value = false)
    public test() {
        // ...
    }
}
```
클래스에 붙이면 모든 메소드에 적용된다.
``` java {2}
@SpringBootTest
@Rollback(value = false)
public class Test {

    // ...

    @Test
    @Transactional
    public test() {
        // ...
    }
}
```

`@Commit` 어노테이션을 붙이면 테스트 종료 후 데이터베이스에도 반영되며, `@Rollback(value = false)`와 동일하다.
``` java {5}
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Rollback(false)
public @interface Commit {
}
```