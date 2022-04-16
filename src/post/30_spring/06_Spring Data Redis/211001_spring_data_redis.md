---
title: "Spring Data Redis 시작하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Spring Data Redis
`Spring Data Redis`는 스프링 어플리케이션에서 `Redis`로의 쉬운 접근과 환경설정을 제공한다.

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
}
```

## CRUD 작업 실행하기
`Spring Data Redis`는 `Redis`에 접근하기 위한 두 가지 방법을 제공한다.
- `RedisTemplate`
- `RedisRepository`

## RedisTemplate
