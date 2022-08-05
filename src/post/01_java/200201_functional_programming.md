---
title: "[Java 8] 람다식, 함수형 인터페이스"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# 함수형 인터페이스
비교적 최근 출시된 언어에는 `함수형 프로그래밍` 패러다임이 적용되고 있다. Java에서도 이 패러다임을 적용하기 위해 `함수형 인터페이스`가 도입되었다. 이번 포스트에서는 Java에서의 함수형 프로그래밍에 대해 알아보자.


## 람다식
`람다식(Lambda Expression)`는 함수를 이름이 없는 하나의 식으로 표현한 것이다. 함수를 람다식으로 표현하면 함수의 이름이 필요없기 때문에 `익명 함수(Anonymous Function)`라고도 한다.

### Kotlin에서의 람다식
Kotlin, Swift처럼 비교적 최근에 개발된 프로그래밍 언어는 자체적으로 람다식를 지원한다. 

Kotlin에서 함수는 다음과 같이 선언한다.
``` kotlin
fun printName(name: String) {
    println(name)
}
```
위 코드를 람다식로 표현하면 다음과 같다.
``` kotlin
{ name: String ->
    println(name)
}
```

### Java 7 이전에서의 람다식
Java는 Kotlin, Swift 같은 언어에 비해 비교적 오래되었다. 또한 객체지향 프로그래밍을 패러다임으로 만들어졌기 때문에 Java 7 이전에는 언어 자체적으로 람다식을 지원하지 않았다. 


## 일급 객체와 함수형 프로그래밍
다음 세 가지 조건을 모두 충족하면 `일급 객체`라고 한다.
1. 변수나 상수에 할당할 수 있어야 한다.
2. 함수의 인자로 전달할 수 있어야 한다.
3. 함수의 반환값으로 반환할 수 있어야 한다.

Kotlin에서는 함수나 람다식을 일급 객체로 취급한다. 따라서 다음과 같이 함수를 변수에 할당할 수 있다.

``` kotlin
fun printHelloWorld() {
    println("Hello World.")
}

// 함수를 변수에 할당할 수 있다.
var method = ::printHelloWorld

// 호출
method()
```
람다식도 변수에 할당할 수 있다.
``` kotlin
var myMethod: (name: String) -> Unit = { name: String ->
    println(name)
}
``` 
람다식을 함수의 매개변수로도 전달할 수 있다. 아래 코드는 `run()`이라는 함수의 매개변수로 람다식를 전달하고 있다.
``` kotlin
run({ name: String -> 
    printName()
})
``` 
이는 언어 자체에서 `함수 타입`을 지원하기 때문이다. 정수 타입에는 정수를 할당하는 것처럼 함수 타입에는 함수를 할당할 수 있다. 위 예제에서는 `(name: String) -> Unit`가 바로 함수 타입이다. 이처럼 Kotlin에서는 함수나 람다식을 변수에 할당할 수 있고, 함수의 인자로 전달할 수 있으며, 함수의 반환값으로도 반환할 수 있다.

::: tip
함수나 람다식을 변수에 할당하거나 함수의 인자로 전달하거나 함수의 반환값으로 반환하는 것을 `함수형 프로그래밍(Functional Programming)`이라고 한다.
:::


반면 Java는 객체지향 프로그래밍 패러다임으로 시작한 언어이기 때문에 함수나 메소드를 변수에 할당할 수 없고 함수의 인자로 전달할 수 없으며 함수의 반환값으로 반환할 수도 없다.
``` java
void printHelloWorld() {
    System.out.println("Hello World.");
}

// 함수를 변수에 할당할 수 없다.
Object method = printHelloWorld;    // 에러
```
그러나 Java 8부터 람다식과 함수형 프로그래밍을 지원하기 위한 Java API가 추가되었다.

## Java 8의 람다식, 함수형 인터페이스
Java 8부터는 `람다식`을 지원한다.

``` java
(String name) -> {
    System.out.println(name);
};
```
하지만 Java는 함수 타입이 없기 때문에 여전히 람다식을 변수에 저장하거나 매개변수로 전달할 수 없다. 이를 해결하기 위해 도입된 개념이 `함수형 인터페이스(Functional Interface)`다.

함수형 인터페이스는 <u><b>단 한 개의 추상 메소드</b></u>가 선언된 인터페이스를 정의하고 `@FunctionalInterface` 어노테이션을 붙여주면 된다.
``` java
@FunctionalInterface
interface MyLambda {
    void myMethod(String name);
}
``` 
이제 마치 변수에 함수를 할당하는 것처럼 람다식을 사용할 수 있다.
``` java
MyLambda printName = (String name) -> {
    System.out.println(name);
};

printName.myMethod("Paul");
```
이제 마치 변수에 함수를 할당하는 것처럼 람다식을 사용할 수 있다.
``` java
MyLambda printName = (String name) -> {
    System.out.println(name);
};

printName.myMethod("Paul");
```
인터페이스와 메소드의 이름은 원하는대로 선택하면 된다.
``` java
@FunctionalInterface
interface YourLambda {
    void yourMethod(String name);
}
``` 
이제 여러가지 함수형 인터페이스와 람다식을 살펴보자.

### 매개변수가 없고 반환값도 없는 람다식
매개변수가 없고 반환값도 없는 함수형 인터페이스는 다음과 같이 선언한다.
``` java
@FunctionalInterface
interface Lambda {
    void run();
}
```
다음과 같이 사용할 수 있다.
``` java
Lambda lambda = () -> {
    System.out.println("Hello World!");
};

lambda.run();   // Hello World!
```
람다식의 실행구문이 한 줄인 경우 다음과 같이 중괄호를 생략하고 한 줄로 단축할 수 있다.
``` java
Lambda lambda = () -> System.out.println("Hello World!");

lambda.run();   // Hello World!
```

### 매개변수는 없고 반환값은 있는 람다식
매개변수는 없고 반환값은 있는 함수형 인터페이스는 다음과 같이 선언한다.
``` java
@FunctionalInterface
interface Lambda {
    String run();
}
```
다음과 같이 사용한다.
``` java
Lambda lambda = () -> {
    return "Hello World";
};

String result = lambda.run();
```
람다식의 실행구문이 한 줄인 경우 다음과 같이 중괄호를 생략하고 한 줄로 단축할 수 있다.
``` java
Lambda lambda = () -> "Hello World";

String result = lambda.run();
```

### 매개변수는 있고 반환값은 없는 람다식
매개변수는 있고 반환값은 없는 함수형 인터페이스는 다음과 같이 정의한다.
``` java
@FunctionalInterface
interface Lambda {
    void run(int a, int b);
}
```
다음과 같이 사용할 수 있다.
``` java
Lambda lambda = (int a, int b) -> {
    System.out.println(a + b);
};

lambda.run(3, 7);   // 10
```
람다식의 실행구문이 한 줄인 경우 다음과 같이 중괄호를 생략하고 한 줄로 단축할 수 있다.
``` java
Lambda lambda = (int a, int b) -> System.out.println(a + b);

lambda.run(3, 7);   // 10
```
람다식에서는 매개변수의 자료형을 생략할 수 있다.
``` java
Lambda lambda = (a, b) -> System.out.println(a + b);

lambda.run(3, 7);   // 10
```
매개변수가 하나인 람다식은 소괄호도 생략할 수 있다.
``` java
MyLambda myLambda = a -> System.out.println(a);
```

### 매개변수가 있고 반환값도 있는 람다식
매개변수가 있고 반환값도 있는 함수형 인터페이스는 다음과 같이 정의한다.
``` java
@FunctionalInterface
interface Lambda {
    int run(int a, int b);
}
```
다음과 같이 사용할 수 있다.
``` java
Lambda lambda = (int a, int b) -> {
    return a + b;
};

int result = lambda.run(3, 7);
```
람다식의 실행구문이 한 줄인 경우 다음과 같이 중괄호를 생략하고 한 줄로 단축할 수 있다.
``` java
Lambda lambda = (int a, int b) -> a + b;
int result = lambda.run(3, 7);
```
람다식에서는 매개변수의 자료형을 생략할 수 있다.
``` java
Lambda lambda = (a, b) -> a + b;
int result = lambda.run(3, 7);
```

## 사전에 정의된 함수형 인터페이스
Java API에서는 자주 사용될 것 같은 함수형 인터페이스가 이미 정의되어있다.

### Supplier
매개변수 없이 반환값만 갖는 함수형 인터페이스다. Supplier는 `T get()`라는 추상 메소드를 가진다.
``` java
// 정의
@FunctionalInterface
public interface Supplier<T> {
    T get();
}
```
``` java
// 사용 방법
Supplier<String> supplier = () -> "Hello World!";

System.out.println(supplier.get());     // "Hello World!"
```

### Consumer
매개변수가 있고 반환값은 없는 함수형 인터페이스다. Consumer는 `void accept(T t)`라는 추상 메소드를 가진다.
``` java
// 정의
@FunctionalInterface
public interface Consumer<T> {

    void accept(T t);

    default Consumer<T> andThen(Consumer<? super T> after) {
        Objects.requireNonNull(after);
        return (T t) -> { accept(t); after.accept(t); };
    }
}
```
``` java
// 사용 방법
Consumer<String> consumer = (String name) -> {
    System.out.println(name);
};

consumer.accept("Hello World");
```
### Function
매개변수도 있고 반환값도 있는 함수형 인터페이스다. Function은 `R apply(T t)`라는 추상 메소드를 가진다.
``` java
// 정의
@FunctionalInterface
public interface Function<T, R> {

    R apply(T t);

    default <V> Function<V, R> compose(Function<? super V, ? extends T> before) {
        Objects.requireNonNull(before);
        return (V v) -> apply(before.apply(v));
    }

    default <V> Function<T, V> andThen(Function<? super R, ? extends V> after) {
        Objects.requireNonNull(after);
        return (T t) -> after.apply(apply(t));
    }

    static <T> Function<T, T> identity() {
        return t -> t;
    }
}
```
``` java
// 사용법
Function<String, Integer> function = (String str) -> {
    str.length();
}

function.apply("Hello World");
```

### Predicate
매개변수가 있고 `boolean`타입의 값을 반환한다. Supplier는 `boolean test(T t)`라는 추상 메소드를 가진다. 
``` java
// 정의
@FunctionalInterface
public interface Predicate<T> {

    boolean test(T t);

    default Predicate<T> and(Predicate<? super T> other) {
        Objects.requireNonNull(other);
        return (t) -> test(t) && other.test(t);
    }

    default Predicate<T> negate() {
        return (t) -> !test(t);
    }

    default Predicate<T> or(Predicate<? super T> other) {
        Objects.requireNonNull(other);
        return (t) -> test(t) || other.test(t);
    }

    static <T> Predicate<T> isEqual(Object targetRef) {
        return (null == targetRef)
                ? Objects::isNull
                : object -> targetRef.equals(object);
    }
    
}
```
``` java
// 사용 방법
Predicate<String> predicate = (str) -> str.equals("Hello World");

predicate.test("Hello World");
```

## 안드로이드에서의 람다식
람다식은 안드로이드 어플리케이션 개발에서도 자주 사용된다. 보통 버튼같은 위젯을 클릭했을 때 실행할 구문을 람다식 안에 구현한다.

우선 람다식를 사용하지 않고 익명 클래스를 사용하여 특정 버튼을 클릭했을 때 실행할 구문을 등록해보자.
``` java
Button button = findViewById(R.id.button);

button.setOnTouchListener(new View.OnTouchListener() {
    @Override
    public boolean onTouch(View v, MotionEvent event) {
        return false;
    }
});
```
람다식를 사용하면 다음과 같이 단축할 수 있다.
``` java
button.setOnTouchListener((View v, MotionEvent event) -> {
    return false;
});
```
데이터 타입도 생략할 수 있다.
``` java
button.setOnTouchListener((v, event) -> {
    return false;
});
```
함수의 몸체가 한 줄일 때는 `중괄호{}`도 생략하여 한 줄로 표현할 수 있다.
``` java
button.setOnTouchListener((v, event) -> false);
```
매개변수가 한 개일 때는 `소괄호()`도 생략할 수 있다.
``` java
button.setOnClickListener(v -> System.out.println("Button clicked."));
```