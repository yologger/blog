---
title: "[Java 8] 메소드 참조, 생성자 참조"
lang: ko
showOnSidebar: true
---

# Table of Contents
[[toc]]

## 메소드 참조
`메소드 참조(Method Reference)`은 람다식이 단 하나의 메소드만을 호출하는 경우, 람다식에서 불필요한 매개변수를 줄여 사용할 수 있게 한다. 

예제를 살펴보자.
``` java
@FunctionalInterface
interface Lambda {
    void run(String something);
}
```
``` java
Lambda lambda = (something) -> System.out.println(something);
lambda.run("Hello World");
```
위 예제는 람다식이 단 하나의 메소드 `System.out.println(something)`만을 호출하고 있다. 이 예제는
메소드 참조를 사용하면 위 예제를 더욱 단축할 수 있다.
``` java
Lambda lambda = System.out::println;
lambda.run("Hello World");
```
즉, 두 구문은 동일하다.
``` java
(something) -> System.out.println(something)
System.out::println
```

메소드 참조는 다음과 같은 형태로 사용한다.
- 클래스이름::메소드이름
- 참조변수이름::메소드이름


## 생성자 참조
생성자를 호출하는 람다식도 메소드 참조 예제처럼 단축할 수 있다.

다음 예제를 보자
``` java
@FunctionalInterface
interface Lambda {
    Person run(String str);
}
```
``` java
Lambda lambda = (str) ->  new Person(str);
Person p = lambda.run("Paul");
```
생성자 참조를 사용하면 다음과 같이 단축할 수 있다.
``` java
Lambda lambda = Person::new;
Person p = lambda.run("Paul");
```