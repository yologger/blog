---
title: "Kotlin의 null 처리"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table Of Contents
[[toc]]

## NotNull 타입 
Kotlin은 변수를 초기화하지 않으면 컴파일 자체가 안됩니다.
``` kotlin
var name: String
// 컴파일 자체가 되지 않고 다음과 같은 에러가 발생합니다.
// Property must be initialized or be abstract
```
클래스의 멤버변수 역시 초기화하지 않으면 컴파일 자체가 안됩니다.
``` kotlin
class Person {
    private var name: String    // Property must be initialized or be abstract
    private var nation: String  // Property must be initialized or be abstract
}
```
`NotNull` 타입의 변수는 `null`로 초기화할 수도 없습니다.
``` kotlin
var name: String = null	
// 컴파일 자체가 되지 않고 다음과 같은 에러가 발생합니다.
// Null can not be a value of a non-null type String
```
``` kotlin
class Person {
    private var name: String = null     // Null can not be a value of a non-null type String
    private var nation: String = null   // Null can not be a value of a non-null type String
}
```
## Nullable 타입 
코틀린에서 `null`을 할당하기 위해서는 변수를 `Nullable`타입으로 선언해야합니다. 타입 뒤에 `물음표(?)`를 붙이면 됩니다.
``` kotlin
var name: String? = null

class Person {
    private var name: String? = null
    private var nation: String? = null
}
```

물론 `Nullable`타입이라도 초기화하지 않으면 컴파일 자체가 되지 않습니다.
``` kotlin
var name: String?   // 다음과 같은 에러가 발생합니다.
// Property must be initialized or be abstract
```
``` kotlin
class Person {
    private var name: String?       // Property must be initialized or be abstract
    private var nation: String?     // Property must be initialized or be abstract
}
```

## Null 체크
`Nullable`타입의 변수에 접근하려면 값이 `null`인지 체크해야합니다. 그렇지 않으면 컴파일 자체가 안됩니다.

``` kotlin
class Person constructor(val name: String) {
    fun printName() {
        println("name: ${name}")
    }
}

var person: Person? = null

person.printName()  // null 체크를 하지 않았으므로 다음과 같은 에러가 발생합니다.
// Only safe (?.) or non-null asserted (!!.) calls are allowed on a nullable receiver of type Person?
```
변수가 `null`이 아니라고 <u>단언</u>하고 변수에 접근할 수 있습니다. 이때는 `느낌표 두 개(!!)`를 사용합니다.
``` kotlin
var person: Person? = Person()
person!!.printName()    // 성공
```
다만 값이 `null`일 때 변수에 접근하면 런타임 에러가 발생합니다.
``` kotlin
var person: Person? = null
person!!.printName()    // 런타임 에러
```
따라서 런타임 에러를 방지하기 위해 `if`구문으로 `null`체크를 합니다. 
``` kotlin
var person: Person? = null

if (person != null) {
    person!!.printName()
}

var name = if (person != null) person!!.name else ""
```

## Safe Call
매번 `if`구문으로 `null`체크를 하는 것은 번거로운 일입니다. 이 때 단축구문인 `물음표(?)`를 사용할 수 있으며, 이를 `Safe Call`이라고 합니다.
``` kotlin
var person: Person? = null

person?.printName()
// person이 null이면 아무 일도 일어나지 않습니다.
// person이 null이 아니면 printName()을 호출합니다.

var name = person?.name
``` 
## Chaining
`Nullable`타입의 변수가 중첩되어 있는 경우, 다음과 같이 연속적으로 `null`체크를 할 수 있습니다.
``` kotlin
class Person constructor(val phone: Phone?)

class Phone constructor(val manufacturer: String) {
    fun printManufacturer() {
        print(manufacturer)
    }
}

var person: Person? = Person(Phone("Samsung"))

// Chaining
person?.phone?.printManufacturer()
var manufacturer: String? = person?.phone?.manufacturer
```

## Elvis 연산자
아래 예제를 살펴봅시다.
``` kotlin
var name: String? = null

var length = if (name?.length != null) {
    name?.length
} else {
    0
}
```
위 예제는 `엘비스 연산자(?:)`를 사용하여 아래와 같이 단축할 수 있습니다. 
``` kotlin
var name: String? = null
var length = name?.length ?: 0
```
값이 `null`일 경우 Exception을 발생시키도록 구현할 수 있다.
``` kotlin
var name: String? = null

// name?.length가 null이면 NullPointException을 발생
var length = name?.length ?: throw IllegalArgumentException("name is null")
```

## Scope 함수를 통한 Null 체크
`Scope 함수`를 Null 체크에 활용할 수 있습니다.

### 값이 null이 아닐 때 실행할 블럭
``` kotlin
class Person constructor(var name: String, var nation: String) { 
    // ... 
}

var person: Person? = null

var name = person?.let { 
    // person != null 이면 아래 2줄이 실행됩니다.
    println("person is not null.")
    it.name
}
```
### 값이 null일 때 실행할 블럭
``` kotlin
var person: Person? = null

person ?: {
    println("person is null")
}()
```
``` kotlin
var person: Person? = null

person ?: {
    println("person is null")
}.invoke()
```
``` kotlin
var person: Person? = null

person ?: run {
    println("person is null")
}
```
### 값이 null일 때와 아닐 때 실행할 블럭
``` kotlin
var person: Person? = null

person?.let{
    println("person is not null")
} ?: {
    println("person is null")
}()
```
``` kotlin
var person: Person? = null

person?.let{
    println("person is not null")
} ?: {
    println("person is null")
}.invoke()
```
``` kotlin
var person: Person? = null

var result = person?.let {
    println("person is not null")
} ?: run {
    println("person is null")
}
```