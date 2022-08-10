---
title: "[Java 8] 메소드 참조, 생성자 참조"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# 메소드 참조, 생성자 참조
Java 8 부터 `메소드 참조`, `생성자 참조`를 사용할 수 있다.

## 메소드 참조
`메소드 참조(Method Reference)`을 사용하면 람다식이 오직 하나의 메소드만을 호출하는 경우 람다식, 람다식의 매개변수를 생략하고 `::`을 사용하여 간단하게 표현할 수 있다.

예제를 살펴보자. 다음과 같은 함수형 인터페이스가 있다.
``` java
@FunctionalInterface
interface Lambda {
    void run(String something);
}
```
이제 함수형 인터페이스 타입의 변수에 람다식을 할당한다.
``` java {1}
Lambda lambda = (something) -> System.out.println(something);
lambda.run("Hello World");
```
위 코드는 람다식이 단 하나의 메소드 `System.out.println(something)`만을 호출하고 있다. 이처럼 람다식이 하나의 메소드만을 호출하는 경우 메소드 참조를 사용하여 다음과 같이 단축할 수 있다.
``` java {1}
Lambda lambda = System.out::println;
lambda.run("Hello World");
```
즉, 두 구문은 동일하다.
``` java
(something) -> System.out.println(something)
```
``` java
System.out::println
```

메소드 참조는 다음과 같은 형태로 사용한다.
- 클래스이름`::`메소드이름
- 참조변수이름`::`메소드이름


## 생성자 참조
생성자를 호출하는 람다식도 메소드 참조 예제처럼 단축할 수 있다.

다음 예제를 보자
``` java
@FunctionalInterface
interface Lambda {
    Person run(String str);
}
```
``` java {1}
Lambda lambda = (str) ->  new Person(str);
Person p = lambda.run("Paul");
```
생성자 참조를 사용하면 다음과 같이 단축할 수 있다.
``` java {1}
Lambda lambda = Person::new;
Person p = lambda.run("Paul");
```