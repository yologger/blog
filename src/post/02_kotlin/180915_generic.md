---
title: "Kotlin 제너릭(Generic)"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

## 제네릭
`제네릭(Generic)`은 <u>클래스나 메서드 내부에서 사용할 데이터의 자료형을 외부에서 설정</u>하는 것입니다. 이를 통해 컴파일 단계에서 메서드나 클래스에 사용되는 다양한 데이터의 `타입 체크`를 가능하게 합니다.

## 제네릭 클래스
제네릭 클래스를 정의할 땐 `<>`안에 임의의 문자를 명시합니다. 이 문자를 `타입 파라미터(Type Parameter)`라고 합니다. 타입 파라미터는 관습적으로 대문자 `E(Element)`, `T(Type)`, `K(Key)`, `V(Value)`를 사용합니다.
``` kotlin
class Box<T> constructor(val item: T) 
```
이렇게 정의된 제네릭 클래스는 다음과 같이 사용합니다. 타입 파리미터에는 어떠한 데이터 타입도 들어갈 수 있습니다. 
``` kotlin
var box1 = Box<Int>(1)
var box2 = Box<String>("Hello World.")
var box3 = Box<Person>(Person("Paul"))
```
아래 코드를 살펴봅시다. 
``` kotlin
class Box<T> constructor(val item: T)

var box = Box<Int>(1)
```
이 코드를 컴파일하면 아래와 같은 코드로 변환됩니다.
``` kotlin
class Box constructor(val item: Int)

var box = Box(1)
```
여러 개의 타입 파라미터를 사용할 수도 있습니다.
``` kotlin
class Box<T, U> constructor(val item1: T, val item2: U)

var box1 = Box<Int, String>(1, "Hello World.")
var box2 = Box<String, Double>("Hello World.", 3.4)
var box3 = Box<Person, Phone>(Person("Paul"), Phone("Apple"))
```


## 제네릭 함수
제네릭은 클래스 뿐만 아니라 함수에도 사용할 수 있습니다. 

### 함수의 파라미터
우선 함수에서 제네릭을 사용할 땐 키워드 **fun**과 **함수명** 사이에 `타입 파라미터`를 명시합니다.  
``` kotlin
fun <T> printElement(element: T) {
    println("Element: ${element.toString()}")
}
```
``` kotlin
printElement(1)
printElement("Hello World")
printElement(Person())
```
### 반환 값
함수의 반환 값에도 `타입 파라미터`를 사용할 수 있습니다.
``` kotlin
fun <T> getElement(element: T): T {
    println("Element: ${element.toString()}")
}
``` 
``` kotlin
var element1 = getElement(1)
var element2 = getElement("Hello World")
var element3 = getElement(Person())
```

## 타입 제한
`타입 제한`을 사용하면 타입 파라미터에 들어올 실제 값의 자료형을 제한할 수 있습니다. 타입 제한은 `<T: Superclass>` 형태로 사용합니다. 아래 코드를 살펴봅시다. 
``` kotlin
class Person<T: Phone> constructor(val phone: T)
```
`<T: Phone>`가 바로 타입을 제한하는 코드입니다. 타입 파리미터 `T`에는 `Phone`클래스와 `Phone`클래스를 상속받는 클래스만 올 수 있습니다.
``` kotlin
open class Phone()
open class Galaxy(): Phone() {}

open class Laptop()
```
``` kotlin
var person1 = Person<Phone>(Phone())    // Success
var person2 = Person<Galaxy>(Galaxy())  // Success

var person3 = Person<Laptop>(Laptop())  // Error
```

키워드 `where`를 사용해도 `타입 파라미터`에 실제로 오는 자료형을 제한할 수 있습니다. 아래 코드를 살펴봅시다.
``` kotlin
fun <T> getElement(element: T): T where T: Int {
    println("Element: ${element.toString()}")
}

var element1 = getElement(1)
var element2 = getElement(3.14) // Error
var element3 = getElement("Hello World")    // Error
```
`where T: Int`를 통해 타입 파라미터 `T`에 올 수 있는 데이터의 자료형을 `Int`로 제한하고 있습니다.

## in
키워드`in`은 자바 제네릭의 `super`와 유사합니다. 키워드`in`은 <u>제네릭의 타입 파라미터를 특정 클래스와 그 클래스의 **조상 클래스**로 제한</u>합니다.

아래 예제를 살펴봅시다. `Programmer`클래스는 `Person`를 상속하고 `AppProgrammer`는 `Programmer`를 상속하고 있습니다. 

``` kotlin
open class Person constructor(var name: String)

open class Programmer constructor(name: String, var company: String) : Person(name)

class AppProgrammer constructor(name: String, company: String, var field: String) : Programmer(name, company)
```
이제 아래 코드를 살펴봅시다.
``` kotlin
fun printArrayList(arrayList: ArrayList<in Programmer>) {
    println(arrayList.toString())
}
```
`<in Programmer>`를 통해 `Programmer`와 그 부모 클래스인 `Person`클래스만 들어올 수 있도록 하고 있습니다.
``` kotlin
var people = arrayListOf<Person>()
printArrayList(people)          // Success

var people = arrayListOf<Programmer>()
printArrayList(programmers)     // Success

var people = arrayListOf<AppProgrammer>()
printArrayList(appProgrammer)   // Error
``` 

## out
키워드`out`은 Java 제너릭의 `extends`와 유사합니다. 키워드`out`는 <u>타입 파라미터의 실제 타입을 특정 클래스와 특정 클래스의 **자손 클래스**</u>로 제한합니다.
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
제너릭의 타입 파라미터는 컴파일 타임에 존재하지만 런타임에는 접근할 수 없습니다. 바로 타입 소거 때문입니다. 다음 예제를 살펴봅시다.
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
위 코드는 `T:class` 형태로 클래스 타입을 읽으려 하고있습니다. 그러나 이 코드를 컴파일하면 에러가 발생합니다. 타입 파라미터인 `T`는 런타임에 접근할 수 없기 때문입니다. 따라서 보통 다음과 같이 별도의 인자로 클래스 타입을 전달하여 사용합니다.
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
하지만 키워드 `reified`를 타입 파라미터 앞에 붙여주고 `inline`함수 형태로 사용하면 `Kclass`를 인자로 전달할 필요 없이 런타임에 타입 `T`에 접근할 수 있습니다.
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