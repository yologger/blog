---
title: "Kotlin 제너릭(Generic)"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# 제네릭
`제네릭(Generic)`은 <u>클래스나 메서드 내부에서 사용할 데이터의 자료형을 외부에서 설정</u>하는 것이다. 제너릭의 장점은 다음과 같다.

- 타입에 종속되지 않은 유연한 로직
- 타입 안정성
- 자동 형변환

## 제네릭 클래스
제네릭 클래스를 정의할 땐 `<>`안에 임의의 문자를 명시한다. 이 문자를 `타입 파라미터(Type Parameter)`라고 하며, 타입 파라미터는 관습적으로 대문자 `E(Element)`, `T(Type)`, `K(Key)`, `V(Value)`를 사용한다.
``` kotlin
class Box<T> constructor(val item: T) 
```
이렇게 정의된 제네릭 클래스는 다음과 같이 사용한다. 타입 파리미터에는 어떠한 데이터 타입도 들어갈 수 있다. 
``` kotlin
var box1 = Box<Int>(1)
var box2 = Box<String>("Hello World.")
var box3 = Box<Person>(Person("Paul"))
```
제너릭을 사용한 아래 코드는
``` kotlin
class Box<T> constructor(val item: T)

var box = Box<Int>(1)
```
컴파일 후 다음과 같이 변환된다. 
``` kotlin
class Box constructor(val item: Int)

var box = Box(1)
```
타입 파라미터는 여러 개를 사용할 수도 있다.
``` kotlin
class Box<T, U> constructor(val item1: T, val item2: U)

var box1 = Box<Int, String>(1, "Hello World.")
var box2 = Box<String, Double>("Hello World.", 3.4)
var box3 = Box<Person, Phone>(Person("Paul"), Phone("Apple"))
```


## 제네릭 함수
제네릭은 클래스 뿐만 아니라 함수에도 사용할 수 있다.

### 함수의 파라미터
함수의 파라미터에 제네릭을 사용할 땐 키워드 `fun`과 `함수 이름` 사이에 `타입 파라미터`를 명시한다.
``` kotlin
fun <T> printSomething(something: T) {
    println("Something: ${something.toString()}")
}
```
``` kotlin
fun main() {
    printSomething<Int>(1)
	printSomething<String>("Hello World")
}
```
여러 개의 타입 파라미터를 사용할 수도 있다.
``` kotlin
fun <T, K> printSomething(something1: T, something2: K) {
    println("Something1: ${something1.toString()}, Something2: ${something2.toString()}")
}
```
``` kotlin
fun main() {
    printSomething<Int, String>(3, "Hello")		// Something1: 3, Something2: Hello
}
```
### 함수의 반환 값
함수의 반환 값에도 `타입 파라미터`를 사용할 수 있다.
``` kotlin
fun <T, K> getSomething(something: T): K {
    return something as K
}
``` 
``` kotlin
fun main() {
    val result = getSomething<Double, Int>(1.5)
    println(result)	// 1
}
```

## 타입 제한
`타입 제한`을 사용하면 타입 파라미터에 들어올 실제 값의 자료형을 제한할 수 있다. 타입 제한은 `<T: Superclass>` 형태로 사용한다.

클래스에서의 타입 제한은 다음과 같이 사용할 수 있다.
``` kotlin
class Person<T: Phone> constructor(val phone: T)
```
`<T: Phone>`가 바로 타입을 제한하는 코드다. 타입 파리미터 `T`에는 다음 클래스의 인스턴스만 올 수 있다.

-  `Phone`클래스
- `Phone`클래스를 상속받는 클래스

``` kotlin
open class Phone()  // Phone 클래스
open class Galaxy(): Phone() {}  // Phone 클래스를 상속하는 Galaxy 클래스
open class Laptop()  // Phone 클래스를 상속하지 않는 Laptop 클래스
```
``` kotlin
var person1 = Person<Phone>(Phone())    // Success
var person2 = Person<Galaxy>(Galaxy())  // Success
var person3 = Person<Laptop>(Laptop())  // Error
```
`<T: Superclass>` 대신 키워드 `where`를 사용할 수 있다.
``` kotlin
class Person<T> constructor(val phone: T) where T: Phone
```
메소드에서 타입 제한은 다음과 같이 사용할 수 있다.
``` kotlin
fun <T: String> printSomething(something: T) {
    println("Something: ${something.toString()}")
}
```
``` kotlin
fun main() {
	printSomething<String>("Hello World")  // Success
    printSomething<Int>(1)  // Error
}
```
마찬가지로 키워드 `where`로 타입 제한을 할 수 있다.
``` kotlin
fun <T> printSomething(something: T) where T: String {
    println("Something: ${something.toString()}")
}
```
``` kotlin
fun main() {
	printSomething<String>("Hello World")  // Success
    printSomething<Int>(1)  // Error
}
```
키워드 `where`의 타입 파라미터가 여러 개일 때 각각에 대해 타입 제한을 할 수 있다는 것이다.
``` kotlin
fun <T, K> printSomething(something1: T, something2: K) where T: String, K: Int {
    println("${something1.toString()}, ${something2.toString()}")
}
```
``` kotlin
fun main() {
	printSomething<String, Int>("Hello World", 3)  // Success
	printSomething<Int, String>(3, "Hello World")  // Error
}
```

## in
키워드`in`은 Java 제네릭의 `super`와 유사하다. 키워드`in`은 <u>제네릭의 타입 파라미터를 특정 클래스와 그 클래스의 **조상 클래스**로 제한</u>한다.

아래 예제를 살펴보자. `Programmer`클래스는 `Person`를 상속하고 `AppProgrammer`는 `Programmer`를 상속하고 있다. 

``` kotlin
open class Person constructor(var name: String)

open class Programmer constructor(name: String, var company: String) : Person(name)

class AppProgrammer constructor(name: String, company: String, var field: String) : Programmer(name, company)
```
이제 아래 코드를 살펴보자.
``` kotlin
fun printArrayList(arrayList: ArrayList<in Programmer>) {
    println(arrayList.toString())
}
```
`<in Programmer>`를 통해 `Programmer`와 그 부모 클래스인 `Person`클래스만 들어올 수 있도록 하고 있다.
``` kotlin
var people = arrayListOf<Person>()
printArrayList(people)          // Success

var people = arrayListOf<Programmer>()
printArrayList(programmers)     // Success

var people = arrayListOf<AppProgrammer>()
printArrayList(appProgrammer)   // Error
``` 

## out
키워드`out`은 Java 제너릭의 `extends`와 유사하다. 키워드`out`는 <u>타입 파라미터의 실제 타입을 특정 클래스와 특정 클래스의 **자손 클래스**</u>로 제한한다.
``` kotlin
open class Person constructor(var name: String)

open class Programmer constructor(name: String, var company: String) : Person(name)

class AppProgrammer constructor(name: String, company: String, var field: String) : Programmer(name, company)

fun printArrayList(arrayList: ArrayList<out Programmer>) {
    println(arrayList.toString())
}
```
``` kotlin
var people = arrayListOf<Person>()
printArrayList(people)          // Error

var people = arrayListOf<Prograammer>()
printArrayList(programmers)     // Success

var people = arrayListOf<AppProgrammer>()
printArrayList(appProgrammer)   // Success
``` 


## 타입 소거
제너릭의 타입 파라미터는 컴파일 타임에 존재하지만 런타임에는 접근할 수 없다. 바로 타입 소거 때문이다. 다음 예제를 살펴보자.
``` kotlin
fun <T> printType(value: T) {

    when (T::class) {   // Error, Cannot use 'T' as reified type parameter. Use a class instead.
        String::class -> {
            print("value is String type.")
        }
        Int::class -> {
            print("value is Int type.")
        }
    }
}

var name: String = "Paul"
printType<String>(name)
``` 
위 코드는 `T:class` 형태로 클래스 타입을 읽으려 하고 있다. 그러나 이 코드를 컴파일하면 에러가 발생한다. 타입 파라미터인 `T`는 런타임에 접근할 수 없기 때문이다. 따라서 보통 다음과 같이 별도의 인자로 클래스 타입을 전달하여 사용한다.
``` kotlin
fun <T: Any> printType(value: T, classType: KClass<T>) {
    when (classType) {
        String::class -> {
            print("value is String type.")
        }
        Int::class -> {
            print("value is Int type.")
        }
    }
}

var name: String = "Paul"
printType<String>(name, String::class)
```
하지만 키워드 `reified`를 타입 파라미터 앞에 붙여주고 `inline`함수 형태로 사용하면 `Kclass`를 인자로 전달할 필요없이 런타임에 타입 `T`에 접근할 수 있다.
``` kotlin
inline fun <reified T: Any> printType(value: T) {
    when (T::class) {
        String::class -> {
            print("value is String type.")
        }
        Int::class -> {
            print("value is Int type.")
        }
    }
}

var name: String = "Paul"
printType<String>(name)
``` 