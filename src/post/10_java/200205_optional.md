---
title: "[Java 8] Optional API"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

## NullPointException
Java 언어로 개발을 할 때 가장 많이 발생하는 예외 중 하나가 바로 `NullPointException`이다. 
``` java
Person person = null;
person.getName();
```
```
Exception in thread "main" java.lang.NullPointerException at Main.main(Main.java:16)
```

이 예외를 피하기 위해 `null`을 체크해야하는데 이는 코드를 복잡하게 할 수 있다.
``` java
Person person = null;
if (person != null) {
    person.getName();
}
```

## Optional
`Optional`은 Java 8에서 추가된 기능으로 `null`이 올 수 있는 객체를 감싼 Wrapper 클래스다. 객체는 Optional의 `value` 속성에 저장된다.
``` java
public final class Optional<T> {
    private final T value;

    // ...
}
```
Optional을 다음과 같이 생성한다.
``` java
Person person = null;
Optional<Person> optional = Optional.ofNullable(null);
```
이제 `null`이 아닐 때만 값에 접근할 수 있다.
``` java
optional.ifPresent(p -> p.getName());
```
이제 자세한 Optional 사용법에 대해 알아보자.

## Optional 생성하기
### Optional.empty()
`empty()`는 값이 빈 Optional을 생성한다.
``` java
Optional<Person> optional = Optional.empty();

System.out.println(optional.isPresent());   // false
```
### Optional.of()
`of()`에 null일 가능성이 없는 값을 전달하여 Optional을 생성한다.
``` java
Person p = new Person("Paul");

Optional<Person> optional = Optional.of(p);

System.out.println(optional.isPresent());       // true
```
`of()`는 값이 없는 경우 NullPointException이 발생시킨다.
``` java
Person p = null;
Optional<Person> optional = Optional.of(p);     // NullPointerException
```

### Optional.ofNullable()
`ofNullable()`은 null일 가능성이 있는 객체를 전달하여 Optional을 생성한다.
``` java
Optional<Person> optional = Optional.ofNullable(null);
System.out.println(optional.isPresent());   // false
```
``` java
Person person = new Person("Paul");
Optional<Person> optional = Optional.ofNullable(person);
System.out.println(optional.isPresent());   // true
```

# Null 체크
### isPresent()
`isPresent()`를 사용하면 객체가 null인지 확인할 수 있다.
``` java
Optional<Person> optional = Optional.ofNullable(null);
System.out.println(optional.isPresent());   // false
```
``` java
Person person = new Person("Paul");

Optional<Person> optional = Optional.ofNullable(person);
System.out.println(optional.isPresent());   // true
```

### ifPresent()
`ifPresent()`는 객체가 null이 아닐 때 람다식을 실행한다.
``` java
Person person = new Person("Paul");

Optional.ofNullable(person)
    .ifPresent((p -> System.out.println(p.getName())));
```
``` text 출력 결과
Paul
```
객체가 null이면 람다식을 실행하지 않는다.
``` java
Person person = null;

Optional.ofNullable(person)
    .ifPresent((p -> System.out.println(p.getName())));
```
``` text 출력 결과

```

## 값 가져오기
`get()`을 사용하면 Optional이 가지고 있는 객체를 가져올 수 있다.
``` java
String str = Optional.ofNullable("Hello").get();
```
만약 값이 없다면 `NoSuchElementException`이 발생한다.
``` java
String str = Optional.ofNullable(null).get();   // NoSuchElementException
```

## 필터링
`filter()`을 사용하면 객체를 필터링할 수 있다.
``` java
Optional.of("ABCD")
    .filter(v -> v.startsWith("AB"))
    .ifPresent(value -> System.out.println(value));
```

``` text 출력 결과
ABCD
```

``` java
Optional.of("ABCD")
    .filter(v -> v.startsWith("XY"))
    .ifPresent(value -> System.out.println(value));
```
``` text 출력 결과

```

## 변환
### map()
`map()`을 사용하면 객체를 변환할 수 있다.
``` java
Optional.of("ABCD")
    .map(value -> value.toLowerCase())
    .ifPresent(value -> System.out.println(value));
```

``` text 출력 결과
abcd
```
위 코드는 [메소드 참조](/ko/2019/02/03/04_java/190203_method_reference/)을 사용하여 다음과 같이 단축할 수도 있다.
``` java
Optional.of("ABCD")
    .map(String::toLowerCase)
    .ifPresent(System.out::println);
```

### flatMap()
`flatMap()`을 사용하면 다른 Optional로 반환할 수 있다.
``` java
Optional.of("ABCD")
    .flatMap(value -> Optional.of(value.toLowerCase()))
    .ifPresent(System.out::println);    // abcd
```


# 기타
### orElse()
`orElse()`는 Optional이 비어있다면 `orElse()`로 지정한 값을 반환한다.
``` java
String str = "Something";

String value = Optional.ofNullable(str)
        .orElse("Another thing");

System.out.println(value);  // Something
```
``` java
String str = null;

String value = Optional.ofNullable(str)
        .orElse("Another Thing");

System.out.println(value);  // Another Thing
```

### orElseGet()
`orElseGet()`는 Optional이 비어있다면 람다식을 실행하고 람다식의 반환값을 반환한다.
``` java
String str = "Something";

String value = Optional.ofNullable(str)
        .orElseGet(() -> "Another thing");

System.out.println(value);  // Something
```
``` java
String str = null;

String value = Optional.ofNullable(str)
        .orElseGet(() -> "Another thing");

System.out.println(value);  // Another thing
```
### orElseThrow()
`orElseThrow()`는 Optional이 비어있다면 예외를 발생시킨다.
``` java
String str = "Something";

String value = Optional.ofNullable(str)
        .orElseThrow(NoSuchElementException::new);

System.out.println(value);      // Something
```
``` java
String str = null;

String value = Optional.ofNullable(str)
        .orElseThrow(NoSuchElementException::new);  // Exception in thread "main" java.util.NoSuchElementException

System.out.println(value);
```

## 원시타입 옵셔널
물론 제너릭과 Wrapper 클래스를 사용하면 원시 타입의 옵셔널을 생성할 수 있다.
``` java
Optional<Integer> optional = Optional.of(1);

optional.ifPresent(System.out::println);    // 1
```
그러나 제네릭과 Wrapper 클래스를 사용하지 않고 원시 타입의 옵셔널을 생성할 수도 있다.
``` java
OptionalInt optional = OptionalInt.of(1);

optional.ifPresent(System.out::println);    // 1
```
제공되는 원시 타입의 옵셔널은 다음과 같다.
- OptionalInt
- OptionalLong
- OptionalDouble