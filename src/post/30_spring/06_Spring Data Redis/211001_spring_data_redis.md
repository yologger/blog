---
title: "Spring Data Redis 시작하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Spring Data Redis
`Spring Data Redis`는 스프링 프레임워크에서 `redis`에 접근할 수 있도록 추상화된 방법을 제공하는 모듈이다.

## 의존성 추가
`Spring Data Redis`를 사용하려면 다음 의존성을 추가해야한다.
``` groovy
// build.gradle
implementation 'org.springframework.boot:spring-boot-starter-data-redis'
```

## 환경 설정
`application.properties` 파일에 설정 값을 추가한다.
``` properties
spring.redis.host=localhost
spring.redis.port=6379 
```

다음과 같은 설정값들이 있다.

|설정값|기본값|설명|
|------|---|---|
|`spring.redis.host`|localhost|레디스 서버 호스트|
|`spring.redis.port`|6379|레디스 서버 포트|
|`spring.redis.password`||레디스 서버 로그인 패스워드|
|`spring.redis.database`|0|커넥션 팩토리에 사용되는 데이터베이스 인덱스|
|`spring.redis.timeout`|0|호스트: 포트 쌍 목록 (콤마로 구분)|
|`spring.redis.pool.max-active`|8|pool에 할당될 수 있는 커넥션 최대수 (음수로 하면 무제한)|
|`spring.redis.pool.max-idle`|8|pool의 "idle" 커넥션 최대수 (음수로 하면 무제한)|
|`spring.redis.pool.max-wait`|-1|pool이 바닥났을 때 예외 발생 전, 커넥션 할당 차단 최대 시간 (단위 밀리세컨드, 음수는 무제한 차단)|
|`spring.redis.pool.min-idle`|0|풀에서 관리하는 idle 커넥션의 쵀소수 대상 (양수일 때만 유효)|
|`spring.redis.sentinel.master`||레디스 서버 이름|
|`spring.redis.sentinel.nodes`||호스트: 포트 쌍 목록 (콤마로 구분)|


그 다음 Spring Data Redis와 관련된 설정 클래스를 추가한다.
``` java
@Configuration
public class RedisConfig {

    @Value("${spring.redis.host}")
    private String host;

    @Value("${spring.redis.port}")
    private int port;
}
```

Redis 서버에 접근하려면 `Redis Client`를 설정해야한다. 가장 많이 사용되는 Redis Client는 `Jedis`, `Lettuce`가 있으며 `Lettuce`를 더 많이 사용하는 추세인 것 같다. 보통 Redis Client는 스프링 설정 파일에 다음과 같이 빈으로 등록하여 사용한다.
``` java {10-13}
@Configuration
public class RedisConfig {

    @Value("${spring.redis.host}")
    private String host;

    @Value("${spring.redis.port}")
    private int port;

    @Bean
    public RedisConnectionFactory redisConnectionFactory() {
        return new LettuceConnectionFactory(host, port);
    }
}
```

## CRUD 작업 실행하기
Spring Data Redis는 Redis에 접근하기 위한 두 가지 방법을 제공한다.
- `RedisTemplate`
- `RedisRepository`

## RedisTemplate
`RedisTemplate`는 Redis에 접근하기 위한 헬퍼 클래스다. RedisTemplate을 사용하려면 적절한 설정 후 빈으로 등록해야한다.

``` java
@Configuration
public class RedisConfig {

    @Value("${spring.redis.host}")
    private String host;

    @Value("${spring.redis.port}")
    private int port;

    @Bean
    public RedisConnectionFactory redisConnectionFactory() {
        return new LettuceConnectionFactory(host, port);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory());
        return redisTemplate;
    }
}
```
`Redis`는 다음 데이터 타입을 제공하며, RedisTemplate 클래스의 `opsForXXX()` 메소드를 사용하면 Redis 데이터 타입의 데이터를 저장, 변경, 조회, 삭제할 수 있다.

### opsForValue()
`opsForValue()`를 사용하면 Redis String 타입의 데이터를 저장, 변경, 조회, 삭제할 수 있다.
``` java
@DataRedisTest
class Test {

    @Autowired
    RedisTemplate redisTemplate;

    @Test
    public void test() {
        ValueOperations<String, String> operation = redisTemplate.opsForValue();
        operation.set("name", "Cristiano Ronaldo");

        String saved = operation.get("name");   // "Cristiano Ronaldo"
        assertThat(saved).isEqualTo("Cristiano Ronaldo");
    }
}
```

### opsForList()
`opsForList()`를 사용하면 Redis List 타입의 데이터를 저장, 변경, 조회, 삭제할 수 있다.
``` java
@DataRedisTest
class Test {

    @Autowired
    RedisTemplate redisTemplate;

    @Test
    public void test() {
        ListOperations<String, String> operations =  redisTemplate.opsForList();
        operations.rightPush("players", "Ronaldo");
        operations.rightPushAll("players", "Messi", "Benzema", "Suarez");
        List<String> players = operations.range("players", 0, -1);  // ["Ronaldo", "Messi", "Benzema", "Suarez"]
        assertThat(players.size()).isEqualTo(4);
    }
}
```

### opsForSet()
`opsForSet()`를 사용하면 Redis Set 타입의 데이터를 저장, 변경, 조회, 삭제할 수 있다.
``` java
@DataRedisTest
class Test {

    @Autowired
    RedisTemplate redisTemplate;

    @Test
    public void test() {
        SetOperations<String, String> operations =  redisTemplate.opsForSet();
        operations.add("players", "Paul");
        operations.add("players", "Paul", "John", "Mike", "Monica");
        Set<String> players =  operations.members("players");
        assertThat(players.size()).isEqualTo(4);
    }
}
```

### opsForHash()
`opsForSet()`를 사용하면 Redis Hash 타입의 데이터를 저장, 변경, 조회, 삭제할 수 있다.
``` java
@DataRedisTest
class Test {

    @Autowired
    RedisTemplate redisTemplate;

    @Test
    public void test() {
        HashOperations<String, String, String> operations =  redisTemplate.opsForHash();
        operations.put("team", "name", "Manchester United");
        operations.put("team", "manager", "Ferguson");
        operations.put("team", "ceo", "John");

        String name = operations.get("team", "name");   // Manchester United
        assertThat(name).isEqualTo("Manchester United");
    }
}
```

### Serializer
`opsForValue()`를 사용하여 Redis String 타입의 데이터를 저장해보자.
``` java
@DataRedisTest
class Test {

    @Autowired
    RedisTemplate redisTemplate;

    @Test
    public void test() {
        ValueOperations<String, String> operation = redisTemplate.opsForValue();
        operation.set("name", "Cristiano Ronaldo");

        String saved = operation.get("name");   // "Cristiano Ronaldo"
        assertThat(saved).isEqualTo("Cristiano Ronaldo");
    }
}
```
그리고 `redis-cli`에서 데이터를 조회해보자.
```
> KEYS *
1) "\xac\xed\x00\x05t\x00\x04name"
```
RedisTemplate은 Java 데이터를 바이너리 데이터로 직렬화하여 저장한다. 이때 별도의 설정을 하지 않으면 `JdkSerializationRedisSerializer`를 사용하여 직렬화를 하는데 이 시리얼라이저는 자바 클래스와 필드 정보를 앞에 붙이게 된다. 키 값인 `name` 앞에 붙은 `\xac\xed\x00\x05t\x00\x04`가 바로 이 정보다.

Java 어플리케이션에서 다시 역직렬화 하는데에는 문제가 없지만 다른 시리얼라이저를 사용할 수도 있다. `StringRedisSerializer`를 사용하면 자바 클래스와 필드 같은 정보를 붙이지 않고 직렬화하게된다.

``` java {9,10}
@DataRedisTest
class Test {

    @Autowired
    RedisTemplate redisTemplate;

    @Test
    public void test() {
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(new StringRedisSerializer());

        ValueOperations<String, String> operation = redisTemplate.opsForValue();
        operation.set("name", "Cristiano Ronaldo");

        String saved = operation.get("name");   // "Cristiano Ronaldo"
        assertThat(saved).isEqualTo("Cristiano Ronaldo");
    }
}
```
```
> KEYS *
1) "name"
```

보통 `Redis` 구성 클래스에서 다음과 같이 Serializer를 설정한다.
``` java {19,20}
@Configuration
public class RedisConfig {

    @Value("${spring.redis.host}")
    private String host;

    @Value("${spring.redis.port}")
    private int port;

    @Bean
    public RedisConnectionFactory redisConnectionFactory() {
        return new LettuceConnectionFactory(host, port);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory());
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(new StringRedisSerializer());
        return redisTemplate;
    }
}
```

## RedisRepository
`RedisRepository`를 사용하면 더욱 추상화된 방식으로 Redis에 접근할 수 있다. RedisRepository를 사용하려면 설정파일에 `@EnableRedisRepositories` 어노테이션을 추가해야한다.
``` java {2}
@Configuration
@EnableRedisRepositories
public class RedisConfig {

    @Value("${spring.redis.host}")
    private String host;

    @Value("${spring.redis.port}")
    private int port;

    @Bean
    public RedisConnectionFactory redisConnectionFactory() {
        return new LettuceConnectionFactory(host, port);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory());
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(new StringRedisSerializer());
        return redisTemplate;
    }
}
```
그리고 `@RedisHash` 어노테이션을 추가한 데이터 클래스를 생성한다.
``` java
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@RedisHash("person")
@Getter
public class Person {
    @Id
    String id;
    String email;
    String name;
    String password;

    @Builder
    public Person(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
}
```
그 다음 `Repository`를 정의한다.
``` java
public interface PersonRepository extends CrudRepository<Person, Long> {
}
```
이제 다음과 같이 사용할 수 있다.
``` java
@DataRedisTest
class Test {

    @Autowired
    PersonRepository personRepository;

    @Test
    public void test() {
        Person p1 = Person.builder()
                .email("Paul@gmail.com")
                .name("Paul")
                .password("1234")
                .build();

        personRepository.save(p1);

        Person p2 = Person.builder()
                .email("Smith@gmail.com")
                .name("Smith")
                .password("1234")
                .build();

        personRepository.save(p2);

        assertThat(personRepository.count()).isEqualTo(2);
    }
}
```

레디스 서버에서 실제 저장된 데이터를 조회해보자. 
```
> KEYS *
1) "person:a4be06b1-b445-42fe-a70f-0fdee111cf55"
2) "person"
3) "person:4c6d25c4-6d28-44e8-a0ac-434b2106ebd9"
```
데이터의 타입을 확인해보자.
```
> TYPE person
set

> TYPE person:a4be06b1-b445-42fe-a70f-0fdee111cf55
hash

> TYPE person:4c6d25c4-6d28-44e8-a0ac-434b2106ebd9
hash
```
`@RedisHash("person")` 어노테이션을 붙인 데이터 클래스는 Redis의 Set 타입으로 저장된다.
```
> smembers person
1) "a4be06b1-b445-42fe-a70f-0fdee111cf55"
2) "4c6d25c4-6d28-44e8-a0ac-434b2106ebd9"
```
그리고 실제 객체들은 Redis의 Hash 타입으로 저장된다.
```
> hgetall person:a4be06b1-b445-42fe-a70f-0fdee111cf55
 1) "_class"
 2) "com.yologger.spring_redis.repository.Person"
 3) "email"
 4) "Smith@gmail.com"
 5) "id"
 6) "a4be06b1-b445-42fe-a70f-0fdee111cf55"
 7) "name"
 8) "Smith"
 9) "password"
10) "1234"
```
```
> hgetall person:4c6d25c4-6d28-44e8-a0ac-434b2106ebd9
 1) "_class"
 2) "com.yologger.spring_redis.repository.Person"
 3) "email"
 4) "Paul@gmail.com"
 5) "id"
 6) "4c6d25c4-6d28-44e8-a0ac-434b2106ebd9"
 7) "name"
 8) "Paul"
 9) "password"
10) "1234"
```
