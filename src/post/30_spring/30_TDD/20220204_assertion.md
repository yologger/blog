---
title: "Assertion 라이브러리 정리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Assertion 라이브러리
Java 생태계에는 테스트 코드 검증을 위한 많은 Assertion 라이브러리가 존재한다. 

- AssertJ
- Truth
- Hamcrest

## AssertJ
`AssertJ`의 공식 문서는 [이 곳](https://joel-costigliola.github.io/assertj/assertj-core-features-highlight.html)에서 확인할 수 있다.

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


## Truth
`Truth`는 [이 포스트](https://www.baeldung.com/google-truth)를 참고하여 정리했다.

### 설정
`Truth`를 사용하려면 다음 의존성을 추가해야한다.
``` groovy
// build.gradle
dependencies {
    // Truth
    testImplementation "com.google.truth:truth:1.1.3"
}
```

`Truth`는 Assertion을 위한 기능을 정적 메소드로 지원한다. 따라서 테스트 코드에 다음과 같이 `Truth`를 임포트한다.
``` java
import static com.google.common.truth.Truth.*;
```

### 숫자 테스트
정수는 다음과 같이 검증한다.
``` java
import static com.google.common.truth.Truth.assertThat;

@Test
void testAge() {
    int age = 30;
    assertThat(age).isEqualTo(30);
    assertThat(age).isGreaterThan(10);
    assertThat(age).isLessThan(50);
}
```

### 문자열 테스트
``` java
import static com.google.common.truth.Truth.assertThat;

@Test
void testString() {
    String name = "Cristiano Ronaldo";
    assertThat(name).contains("no");
    assertThat(name).startsWith("Cr");
    assertThat(name).endsWith("Ronaldo");
    assertThat(name).isEqualTo("Cristiano Ronaldo");
}
```

### Boolean 테스트
``` java
@Test
void testBoolean() {
    boolean isMarried = true;
    assertThat(isMarried).isTrue();

    boolean hasRole = false;
    assertThat(hasRole).isFalse();
}
```

### Java 8을 위한 Truth
Java 8에는 `Stream`, `Optional` 등 다양한 기능이 추가되었다. `Truth`를 Java 8 기능과 함께 사용하려면 다음 의존성을 추가해야한다.
``` groovy
// build.gradle
dependencies {
    testImplementation "com.google.truth.extensions:truth-java8-extension:${truth_java8_version}"
}
```
