---
title: "Kotlin 함수(Function)"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## 함수
`함수(Function)`는 <u>특정 값을 입력받아 작업을 수행하고 결과를 반환</u>한다.

### 매개변수가 있는 함수
함수를 선언할 때는 키워드`fun`을 사용한다. 함수 호출 시 값을 전달할 수 있다. 이를 `매개변수(Parameter)`라고 한다.
``` kotlin
// 함수 선언
fun printSomething(something: String) {
    println(something);  
} 
```
이렇게 정의한 함수는 아래와 같이 호출한다.
``` kotlin
// 함수 호출
printSomething("Hello World!")
```

### 매개변수가 없는 함수
매개변수가 없는 함수도 있다.
``` kotlin
// 함수 정의
fun printHelloWorld() {
    println("Hello World.")
}
```

이렇게 정의한 함수는 아래와 같이 호출한다.
``` kotlin
printHelloWorld()  // Hello World.
```
### 반환값이 있는 함수
함수는 값을 반환할 수 있다. 값을 반환할 때는 키워드`return`을 사용한다. 또한 반환값이 있는 경우 함수에 타입을 반드시 명시해야한다.
``` kotlin
// 함수 선언
fun getLength(something: String): Int {
    return something.length
}
```
이렇게 정의한 함수는 아래와 같이 호출한다.
``` kotlin
// 함수 호출
var length = getLength("Hello World!")
```

### Named argument
함수를 호출할 때 매개변수의 이름을 명시할 수 있다.
``` kotlin
fun printName(name: String, age: Int) {
    println(name)
}

// 매개변수의 이름을 명시하지 않고 호출
printName("John", 35)    

// 매개변수의 이름을 명시하고 호출
printName(name="John", age=35)

// 매개변수의 이름을 명시하면 매개변수의 순서를 바꿔서 호출할 수 있다.
printName(age=35, name="John")   
```

### 기본값
함수를 정의할 때 매개변수의 기본값을 선언할 수 있다.
``` kotlin
fun printName(name: String = "John") {
    println(name)
}
```
함수로 값을 전달하지 않으면 기본값이 매개변수에 할당된다.
``` kotlin
printName()         // John
printName("Kane")   // Kane
```

### 단일 표현식
함수의 실행코드가 한 줄인 경우 `대입문(=)`처럼 단축할 수 있다. 이를 `단일 표현식`이라고 한다.
``` kotlin
fun getDescription(name: String): String {
    return "Name: ${name}"
}
```
위 구문은 실행코드가 반환문 한 줄이다. 이는 다음과 같이 `단일 표현식`으로 표현할 수 있다.
``` kotlin
fun getDescription(name: String) = "Name: ${name}"
```
함수의 반환문이 없어도 실행코드가 한 줄인 경우 `단일 표현식`으로 표현할 수 있다.
``` kotlin
fun printDescription(name: String) {
    print("Name: ${name}")
} 
```
위 구문은 다음과 같이 단축할 수 있다.
``` kotlin
fun printDescription(name: String) = print("Name: ${name}")
```

## 매개변수 vs. 전달인자
### 매개변수
Kotlin에서는 함수를 다음과 같이 선언한다.
``` kotlin
fun printSomething(something: String): Int {
    // ...
}
```
여기서 something을 `매개변수(Parameter)`라고 한다. 변수라는 말 그대로 함수의 실행구문 내에서 변수처럼 접근할 수 있다.
``` kotlin
fun printSomething(something: String): Int {
    // 변수처럼 something에 접근
    println(something)
    return something.length
}
```

### 전달인자
`전달인자(Argument)`는 함수를 호출할 때 <u>매개변수로 전달되는 실제 값</u>을 의미한다. 위에서 선언한 함수는 다음과 같이 호출한다.
``` kotlin
printSomething("Hello World!")
```
여기서 실제로 전달되는 문자열 "Hello World"가 전달인자다.

## Unit vs. Nothing
### Unit
`Unit`은 Java의 Void와 유사하며 <u>함수의 반환값이 없음</u>을 의미한다.
``` kotlin
fun printSomething(something: String): Unit {
    println(something)
    return
}

printSomething("Hello")
```
반환값이 없는 함수에서는 `Unit`은 생략할 수 있다.
``` kotlin
fun printSomething(something: String) {
    println(something)
    return
}

printSomething("Hello")
```
반환값이 없는 함수에서는 `return`도 생략할 수 있다.
``` kotlin
fun printSomething(something: String) {
    println(something)
}

printSomething("Hello")
```

`Unit`은 싱글톤이다. 따라서 인스턴스를 생성하지 않고도 접근할 수 있다. 물론 인스턴스 또한 생성할 수 있다.
``` Kotlin
var unit: Unit = Unit
```
`Unit`은 `RxJava`에서 데이터가 없는 이벤트에 사용할 수 있다.
``` Kotlin
var didLogOut = PublishSubject.create<Unit>()
didLogOut.onNext(Unit)
``` 

### Nothing
`Nothing`은 <u>함수가 정상적으로 끝나지 않는다는 것을 명시적으로 표현</u>하는데 사용한다.

예를 들어 예외를 발생시키는 함수는 정상적으로 끝나지 않는다. 이를 표현할 때 `Nothing`을 사용할 수 있다.
``` kotlin
fun doSomething(): Nothing {
    throw Exception("Unknown exception.")
}
```
`Nothing` 타입을 반환하는 대표적인 함수가 `TODO()`다. `TODO()`는 `NotImplementedError`이라는 예외를 발생시킨다.
``` kotlin
public inline fun TODO(): Nothing = throw NotImplementedError()
```
이번에는 `TODO()`를 호출하는 예제를 살펴보자. 인터페이스 `Person`이 있다.
``` kotlin
interface Person {
    fun printName()
    fun printAge()
}
```
안드로이드 스튜디오에서 이 인터페이스의 구현체 `Programmer`를 정의하면 다음과 같이 `TODO()`함수가 추가된다.
``` kotlin
class Programmer: Person {

    override fun printName() {
        TODO("Not yet implemented")
    }

    override fun printAge() {
        TODO("Not yet implemented")
    }

}
```
이 코드는 `TODO()`를 삭제하고 `printName()`과 `printAge()`를 구현하기 전까지 빌드되지 않는다. 이처럼 `TODO()`는 코드가 아직 구현되지 않았으며, 나중에 코드를 구현해야한다는 것을 표시하는데 사용한다.

## 가변인자
함수의 파라미터가 몇 개일지 모를 수도 있다. 이때 키워드`vararg`를 사용할 수 있다.
``` kotlin
fun sum(vararg numbers: Int): Int {
    // ...
}
```
`vararg`가 붙은 매개변수는 함수 내부에서 배열처럼 사용할 수 있다.
``` kotlin
fun sum(vararg numbers: Int): Int {
    // numbers는 array
    var sum = 0
    for (n in numbers) {
        sum += n
    }
    return sum
}
```
이제 함수를 호출할 때 인자를 유연하게 전달할 수 있다.
``` kotlin
var result1 = sum(1, 2, 3)  // 6
var result2 = sum(1, 2, 3, 4, 5, 6)  // 21
```

## 확장 함수
`확장 함수(Extension Function)`를 사용하면 기존에 정의된 클래스를 수정하지 않고 메소드를 추가할 수 있다. 
``` kotlin
class Person constructor(val name: String, val age: Int) {

    fun printName() {
        println("Name: ${name}")
    }

    fun printAge() {
        println("Age: ${age}")
    }
}

fun Person.printInformation() {
    print("${name} is ${age} years old.")
}

val person: Person = Person("Paul", 35)
person.printInformation()
``` 
보통 Java API나 다른 사람이 만든 라이브러리처럼 코드를 직접 변경하기 어려운 경우 `확장 함수`을 사용한다. 다음은 `Int`클래스에 홀수인지 짝수인지 판단해주는 함수를 추가하는 예제다.
``` kotlin
fun Int.isEven() = this % 2 == 0

fun Int.isOdd() {
    return this % 2 !== 0
}
	
val age: Int = 5	

println(a.isEven())   // false
println(a.isOdd())    // true
```

## 중위 함수
일반적으로 메소드를 호출할 땐 `객체.함수이름()`형태로 호출한다. 중위 함수를 사용하면 콤마와 소괄호를 생략하고 `함수이름`으로 호출할 수 있다.

중위 함수는 다음과 같이 선언한다.
``` kotlin
infix fun Int.multiply(x: Int): Int {
    return this * x
}
```
중위 함수는 다음과 같이 호출한다.
``` kotlin
var three = 3
// 점과 괄호를 생략하여 호출
var result = three multiply 5
``` 
중위 함수를 사용하려면 세 가지 조건을 충족해야한다.
1. 중위함수는 클래스의 메소드 또는 확장 함수의 형태여야 한다.
1. 오직 하나의 인자만 가져야한다.
1. 키워드 `infix`를 붙인다.

## 인라인 함수
인라인 함수를 사용하면 람다를 사용했을 때 무의미한 객체 생성을 막고 성능을 향상시킬 수 있다.

우선 Kotlin 파일을 컴파일하면 Java이 되는데, 함수 앞에 키워드 `inline`을 붙이면 함수를 호출하는 곳에 함수의 몸체를 그대로 복사한다. 우선 `inline`을 사용하지 않은 일반 함수 예문을 살펴보자.
``` kotlin
fun doSomething() {
    println("doSomething start")
    doSomethingElse()
    println("doSomething end")
}

fun doSomethingElse() {
    println("doSomethingElse")
}
```
위 코드를 Java로 변환하면 아래와 같은 코드가 생성된다.
``` java
public void doSomething() {
   System.out.print("doSomething start");
   // doSomethingElse()를 호출
   doSomethingElse();
   System.out.print("doSomething end");
}

public void doSomethingElse() {
   System.out.print("doSomethingElse");
}
```
그럼 키워드 `inline`를 붙이면 어떤 일이 발생할까?
``` kotlin
fun doSomething() {
    println("doSomething start")
    doSomethingElse()
    println("doSomething end")
}

inline fun doSomethingElse() {
    println("doSomethingElse")
}
```
아래 코드처럼 `doSomething()`메소드의 몸체를 그대로 복사하고 있다. 
``` java
public void doSomething() {
   System.out.print("doSomething start");
   // 그대로 복사
   System.out.print("doSomethingElse");
   System.out.print("doSomething end");
}

public void doSomethingElse() {
   System.out.print("doSomethingElse");
}
```
그렇다면 `inline 함수`는 왜 쓰는걸까?


### Runtime Penalties
Kotlin에서는 함수를 함수의 인자로 전달할 때 문제가 발생한다. 함수를 함수의 인자로 전달하면 추가적인 메모리 할당이 발생하기 때문이다. 

우선 아래 Kotlin 코드를 살펴보자. 
``` kotlin
fun someMethod(a: Int, func: () -> Unit):Int {
    func()
    return 2*a
}

fun main(args: Array<String>) {
    var result = someMethod(2, {
        println("Just some dummy function")
    })
    println(result)
}
``` 
위 코드를 아래와 같이 Java로 변환하면 `someMethod()`메소드를 호출하기 위해 객체를 생성한다. 
``` java
public final class InlineFunctions {

   public static final InlineFunctions INSTANCE;

   static {
      // InlineFunctions()라는 객체를 생성
      InlineFunctions var0 = new InlineFunctions();
      INSTANCE = var0;
   }

   public final int someMethod(int a, @NotNull Function0 func) {
      func.invoke();
      return 2 * a;
   }

   @JvmStatic
   public static final void main(@NotNull String[] args) {
      // 생성한 객체에서 메소드를 호출
      int result = INSTANCE.someMethod(2, (Function0)null.INSTANCE);
      System.out.println(result);
   }
}
```
객체를 생성한다는 것은 메모리를 그만큼 사용함을 의미한다. 만약 이 함수를 열 번 호출하면 열 개의 객체가 생성되며, 이러한 부분이 성능을 저하시킬 수 있다.

이제 함수 앞에 키워드`inline`을 붙여보자.
``` kotlin
inline fun someMethod(a: Int, func: () -> Unit):Int {
    func()
    return 2*a
}
```
위 코드를 컴파일하면 객체를 생성하지 않고 코드 자체를 호출하는 부분으로 복사한다.
``` java
public final class InlineFunctions {

   @JvmStatic
   public static final void main(@NotNull String[] args) {
      // 객체를 생성하지 않고 코드 자체를 복사    
      int a = 2;
      int var5 = false;
      String var6 = "Just some dummy function";
      System.out.println(var6);
      int result = 2 * a;
      System.out.println(result);
   }

}
```
이처럼 `inline 함수`를 사용하면 메모리 성능을 향상시킬 수 있다. 하지만 코드 양이 많은 함수를 `inline 함수`로 사용하면, 컴파일된 코드의 양도 많아질 수 있다. 따라서 `inline 함수`는 1~3줄 정도의 함수에 사용하는 것이 권장된다.


### 주의할 점
`inline 함수`는 내부적으로 코드를 복사하기 때문에, 인자로 전달받은 함수를 다른 함수의 인자로 전달하거나 다시 참조할 수 없다. 
``` kotlin
inline fun newMethod(a: Int, func1: () -> Unit, func2: () -> Unit) {
    // 인자로 전달받은 func1() 함수를 다시 호출
    func1()

    // 인자로 전달받은 func2() 함수를 다른 함수의 인자로 다시 전달
    someMethod(10, func2)
}

fun main(args: Array<String>) {
    newMethod(
        2, 
        { println("Just some dummy function" ) },
        { println("can't pass function in inline functions") }
    )
}
```
위 코드는 다음과 같은 컴파일 에러를 발생시킨다.
``` 
Error:(9, 24) Kotlin: Illegal usage of inline-parameter 'func2' in 'public final inline fun newMethod(a: Int, func: () -> Unit, func2: () -> Unit): Unit defined in example.InlineFunctions'. Add 'noinline' modifier to the parameter declaration
```
### noinline
그럼 위 예제에서 `func2()`만 접근이 가능하고 `func2()`함수만 다른 함수의 인자로 전달되도록 할 수는 없을까? 바로 이러한 경우 키워드 `noinline`를 사용한다. 키워드 `noinline`붙은 키워드는 컴파일 시 일반 함수와 동일하게 동작한다. 따라서 다시 함수에 접근하거나 다른 함수의 인자로 전달할 수 있다.
``` kotlin
inline fun newMethod(a: Int, func1: () -> Unit, noinline func2: () -> Unit) {
    func1()
    someMethod(10, func2)
}

@JvmStatic
fun main(args: Array<String>) {
    newMethod(2, {println("Just some dummy function")},
            {println("can't pass function in inline functions")})
}
```


### crossline
키워드 `crossline`을 이해하려면 우선 `non-local returns`에 대해 알아야 한다. 아래 Kotlin 코드를 살펴보자.
``` kotlin
fun doSomething() {
    print("doSomething start")
    doSomethingElse {
        print("doSomethingElse")

        // 함수의 인자로 전달된 함수 내부에서 return문을 호출하고 있다.
        return 
    }
    print("doSomething end")
}

inline fun doSomethingElse(abc: () -> Unit) {
    abc()
}
```
이제 위 코드를 디컴파일하면 다음과 같은 Java 코드를 확인할 수 있다.
``` java
public void doSomething() {
    System.out.print("doSomething start");
    System.out.print("doSomethingElse");
}
```
디컴파일된 코드에 `System.out.print("doSomething end")`가 포함되지 않았다는 것을 확인할 수 있다. 함수의 인자로 전달된 함수 내부에서 `return`을 호출했으므로 `doSomething()`함수 자체가 종료된 것이다. 이러한 현상을 `non-local returns`라고 한다.

`crossline`은 이러한 문제를 해결할 때 사용한다. 
``` kotlin
fun doSomething() {
    print("doSomething start")
    doSomethingElse {
        print("doSomethingElse")
        // 이 곳에서 return을 호출할 수 없게 합니다.
    }
    print("doSomething end")
}

inline fun doSomethingElse(crossinline abc: () -> Unit) {
    abc()
}
``` 