---
title: "[Java 8] 함수형 인터페이스"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

## 일급 객체 
다음 세 가지 조건을 모두 충족하면 일급 객체라고 한다.
1. 변수나 상수에 할당할 수 있어야 한다.
2. 함수의 인자로 전달할 수 있어야 한다.
3. 함수의 반환값으로 반환할 수 있어야 한다.

Kotlin에서 함수는 일급 객체다. 그러나 Java에서 함수는 일급 객체가 아니다. 우선 Kotlin 예제를 살펴보자.

``` kotlin
fun printHelloWorld() {
    println("Hello World.")
}

// 함수를 변수에 할당할 수 있다.
var method = ::printHelloWorld

// 호출
method()
```
이처럼 Kotlin은 함수를 변수에 할당할 수 있으며, 함수를 일급 객체로 취급한다. 그러면 Java 예제를 살펴보자.
``` java
void printHelloWorld() {
    System.out.println("Hello World.");
}

// 함수를 변수에 할당할 수 없다.
Object method = printHelloWorld;    // 에러
```
Kotlin은 함수를 함수의 인자로 전달할 수 있고 함수의 반환값으로 반환할 수 있다. 반면 Java는 함수를 함수의 인자로 전달할 수 없으며 함수의 반환값으로 반환할 수도 없다.


## 함수형 프로그래밍 언어 
`함수형 프로그래밍(Functional Programming)` 언어는 <u>함수를 일급 객체로 간주하여 변수에도 할당할 수 있고, 함수의 인자로 전달할 수 있으며, 함수의 반환값으로 반환할 수 있는 언어</u>를 의미한다.

## 람다식
`람다식(Lambda Expression)`는 함수를 하나의 식으로 표현한 것이다. 함수를 람다식으로 표현하면 메소드의 이름이 필요없기 때문에 `익명 함수(Anonymous Function)`라고도 한다.

### Kotlin에서의 람다식
Kotlin, Swift처럼 비교적 최근에 개발된 프로그래밍 언어는 자체적으로 람다식를 지원한다. 그럼 Kotin 예제를 살펴보자.

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
Kotlin은 함수를 `일급 객체`로 취급하므로 람다식를 변수에 할당할 수 있다.
``` kotlin
var printName: (name: String) -> Unit = { name: String ->
    println(name)
}
``` 
이는 언어 자체에서 `함수 타입`을 지원하기 때문이다. `정수 타입`에는 정수를 할당하는 것처럼 `함수 타입`에는 함수를 할당할 수 있다. 위 예제에서는 `(name: String) -> Unit`가 바로 `함수 타입`이다.


람다식는 함수의 매개변수로도 전달할 수 있다. 아래 코드는 `run()`이라는 함수의 매개변수로 람다식를 전달하고 있다.
``` kotlin
run({ name: String -> 
    printName()
})
``` 

### Java에서의 람다식
Java는 Kotlin, Swift 같은 언어에 비해 비교적 오래되었다. 또한 객체지향 프로그래밍을 패러다임으로 만들어졌기 때문에 언어 자체적으로 람다식와 함수형 프로그래밍을 지원하지 않는다. 그러나 Java 8부터 함수형 프로그래밍을 지원하기 위한 Java API가 추가되었다.

## 함수형 인터페이스의 등장
Java는 함수 타입이 없기 때문에 람다식을 변수에 저장하거나 매개변수로 전달할 수 없다. 이를 해결하기 위해 도입된 개념이 `함수형 인터페이스(Functional Interface)`다.

함수형 인터페이스를 구현하기 위해서는 인터페이스를 정의한다. 그리고 내부에는 <u><b>단 한 개의 추상 메소드</b></u>를 선언한 후 `@FunctionalInterface` 어노테이션을 붙여주면 된다.
``` java
@FunctionalInterface
interface Lambda {
    void execute(String name);
}
``` 
이제 마치 변수에 함수를 할당하는 것처럼 람다식을 사용할 수 있다.
``` java
Lambda printName = (String name) -> {
    System.out.println(name);
};

printName.execute("Paul");
```
인터페이스 이름과 메소드 이름은 원하는대로 선택하면 된다.
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

이제 여러 가지 함수형 인터페이스와 람다식을 살펴보자.

### 매개변수가 없고 반환값도 없는 람다식
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
람다식의 실행구문이 한 줄인 경우 다음과 같이 단축할 수 있다.
``` java
Lambda lambda = () -> System.out.println("Hello World!");

lambda.run();   // Hello World!
```

### 매개변수가 없고 반환값은 있는 람다식
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
실행구문이 한 줄인 경우 다음과 같이 단축할 수 있다.
``` java
Lambda lambda = () -> "Hello World";

String result = lambda.run();
```

### 매개변수가 있고 반환값은 없는 람다식
``` java
@FunctionalInterface
interface Lambda {
    void run(int a, int b);
}
```
다음과 같이 사용할 수 있다.
``` java
Lambda lambda = (int a, int b) -> {
    System.out.println(a+b);
};

lambda.run(3, 7);   // 10
```
람다식의 구문이 한 줄인 경우 다음과 같이 단축할 수 있다.
``` java
Lambda lambda = (int a, int b) -> System.out.println(a+b);

lambda.run(3, 7);   // 10
```
람다식에서는 매개변수의 자료형을 제외할 수 있다.
``` java
Lambda lambda = (a, b) -> System.out.println(a+b);

lambda.run(3, 7);   // 10
```

### 매개변수가 있고 반환값도 있는 람다식
``` java
@FunctionalInterface
interface Lambda {
    int run(int a, int b);
}
```
다음과 같이 사용할 수 있다.
``` java
Lambda lambda = (int a, int b) -> {
    return a+b;
};

int result = lambda.run(3, 7);
```
실행 구문이 한 줄인 경우 다음과 같이 단축할 수 있다.
``` java
Lambda lambda = (int a, int b) -> a + b;
int result = lambda.run(3, 7);
```
람다식에서는 매개변수의 자료형을 제외할 수 있다.
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
람다식에서는 데이터 타입도 생략할 수 있다.
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