---
title: "AssertJ 라이브러리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# AssertJ
Java 생태계에는 테스트 코드 검증을 위한 많은 Assertion 라이브러리가 존재한다. 

- AssertJ
- Truth
- Hamcrest

이번 포스트에서는 `AssertJ`에 대해 정리한다.

### 설정
`AssertJ`를 사용하려면 다음 의존성을 추가해야한다.
``` groovy
// build.gradle
dependencies {
    // AssertJ
    testImplementation 'org.assertj:assertj-core:3.22.0'
}
```
`Spring Boot Test` 모듈을 사용하는 경우 `AssertJ`이 내장되어있기 때문에 별도의 의존성 추가가 필요없다.
``` groovy
// build.gradle
dependencies {
    // Spring Boot Test
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```

`AssertJ`는 Assertion을 위한 기능을 정적 메소드로 지원한다. 따라서 테스트 코드에 다음과 같이 `AssertJ`를 임포트한다.
``` java
import static org.assertj.core.api.Assertions.*;
```

### 문자열 테스트
``` java
@Test
public void test() {
    assertThat("Hello, world")
        .isNotEmpty() 
        .contains("Hello")
        .contains("world")
        .doesNotContain("Goodbye")
        .startsWith("He")
        .endsWith("ld")
        .isEqualTo("Hello, world");
}
```

### 숫자 테스트
``` java
@Test
public void test() {
    assertThat(3.14)
        .isPositive() // 양수
        .isNotNegative()
        .isGreaterThan(3D)
        .isBetween(3D, 4D)
        .isLessThan(4D)
        .isNotZero()
        .isEqualTo(3.14);
}
```

### 예외처리 테스트
메소드가 특정 예외를 던지는지 테스트할 수 있다.
``` java
@Test
void user_already_exist() {
    assertThatThrownBy(() -> authService.join(request))
            .isInstanceOf(MemberAlreadyExistException.class);
}
```
메소드가 예외를 던지지 않는지 테스트할 수도 있다.
``` java
@Test
void user_not_exist() {
    assertThatNoException().isThrownBy(() -> {
        ResponseEntity<JoinResponseDto> response = authService.join(request);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    });
}
```

### 테스트 실패 시키기
`fail()`메소드로 테스트를 실패시킬 수 있다.
``` java
fail("Custom fail");
```