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

Spring Data JPA는 스프링 어플리케이션이 시작될 때 EntityManager객체를 Spring IoC Container에 자동으로 등록해준다. 이렇게 Spring IoC Container에서 관리하는 EntityManager를 `Shared EntityManager` 또는 `Managed EntityManager`라고 한다. <b>`@PersistenceContext`</b> 어노테이션을 사용하면 이 EntityManager를 주입받을 수 있다. 
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
그러나 위 코드를 실행하면 다음과 같은 에러가 발생한다.
```
Not allowed to create transaction on shared EntityManager - use Spring transactions or EJB CMT instead.
```
이 에러를 해결하려면 `@Transaction` 어노테이션을 사용해야한다.

참고로 `EntityManagerFactory`를 주입받으려면 `@PersistenceUnit`을 사용하면 된다.
``` java
@PersistenceUnit
EntityManagerFactory entityManagerFactory;
```

## @Transaction
스프링 프레임워크는 서블릿 컨테이너 위에서 동작한다. 사용자가 HTTP 요청을 보낼 때마다 서블릿에 하나의 스레드를 할당한다. 이 스레드는 각 요청을 처리하게 된다. 이 말은 스프링 프레임워크가 멀티 스레드로 동작하며, 각 스레드에서 EntityManager로 메모리에 위치한 영속성 컨텍스트에 동시에 접근할 수 있기 때문에 `Thread Safe`하지 않다는 것을 의미한다.

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
`@Transaction`은 해당 어노테이션이 붙어있는 메소드에 트랜잭션을 적용해준다.     ㅌ따라서 메소드 전체가 성공해야 트랜잭션을 커밋하며, 메소드 실행 중 예외가 발생하면 트랜잭션을 롤백한다.

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
JpaRepository는 내부적으로 Shared EntityManager를 사용하여 영속성 컨텍스트를 조작한다. 따라서 JpaRepository의 메소드를 호출하는 곳에도 `@Transaction` 어노테이션을 추가해야한다.
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


## @Commit, @Rollback
`@Commit`, `@Rollback`은 Spring Test 라이브러리에 포함된 어노테이션이다.
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