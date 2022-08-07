---
title: "Kotlin 스코프 함수"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table Of Contents
[[toc]]

# 스코프 함수
Kotlin 표준 라이브러리는 객체의 컨텍스트 내에서 코드 블럭을 실행하기 위한 목적만을 가진 다섯 개의 `스코프 함수(Scope function)`를 제공한다.

## run()
`run()`은 <u>함수를 호출한 객체</u>가 <u>코드 블록</u>으로 <u>암시적으로</u> 전달된다. 따라서 코드 블록 안에서 호출 객체의 멤버변수와 메소드에 접근할 수 있다. 또한 코드 블록의 수행결과가 반환된다.
``` kotlin
class Person(var name: String, var age: Int) {

    fun incrementAge() {
        age += 1
    }

    fun printAge() {
        println("Age: ${age}")
    }
}
```
``` kotlin
var age = Person("", 0).run {

    // 호출객체의 멤버변수에 접근
    this.name = "Paul"
    this.age = 35

    // 호출객체의 메소드를 호출
    this.incrementAge()

    // 마지막 구문의 결과값이 반환
    this.age     
}
    
println(age)    // 36
```
`run()`을 호출한 객체는 람다 안에서 키워드 `this`로 접근할 수 있다. 함수를 호출한 객체를 `Receiver`라고 하며, 이러한 특성 때문에 스코프 함수는 `수신객체 지정 람다(Lambda with Receiver)`라고도 한다.

키워드 `this`를 생략할 수 있다.
``` kotlin
var age = Person("", 0).run {

    // 호출객체의 멤버변수에 접근
    name = "Paul"
    age = 35

    // 호출객체의 메소드를 호출
    incrementAge()

    // 마지막 구문의 결과값이 반환
    age     
}
    
println(age)    // 36
```

반환값 없이도 사용할 수도 있다.
``` kotlin
var person = Person("Paul", 35)

person.run {
    printAge()
}
```

## let()
`let()`은 함수를 호출하는 객체가 <u>인자</u>의 형태로 코드 블록에 전달된다.
``` kotlin
class Person(var name: String, var age: Int) {

    fun incrementAge() {
        age += 1
    }

    fun printAge() {
        println("Age: ${age}")
    }
}
```
``` kotlin
var age = Person("", 0).let { person ->

    // 호출객체의 멤버변수에 접근
    person.name = "Paul"
    person.age = 35

    // 호출객체의 메소드를 호출
    person.incrementAge()

    // 마지막 구문의 결과값이 반환
    person.age
}

println(age)    // 36
```
인자가 하나인 경우 `it`을 사용하여 코드를 더 간략하게 할 수 있다.
``` kotlin
var age = Person("", 0).let {

    // 호출객체의 멤버변수에 접근
    it.name = "Paul"
    it.age = 35

    // 호출객체의 메소드를 호출
    it.incrementAge()

    // 마지막 구문의 결과값이 반환
    it.age
}

println(age)    // 36
```

## apply()
`apply()`는 `코드 블록`으로 `함수를 호출한 객체`가 암시적으로 전달된다는 점에서 `run()`과 유사하다. 다만 전달 받은 객체 자체를 반환한다는 점에서 차이가 있다. 

``` kotlin
class Person(var name: String, var age: Int) {

    fun incrementAge() {
        age += 1
    }

    fun printAge() {
        println("Age: ${age}")
    }
}
```
``` kotlin
var person = Person("", 0).apply {
    this.name = "Paul"
    this.age = 35
    this.incrementAge()
    this.printAge()
}
```

## also()
`also()`는 <u>함수를 호출하는 객체</u>가 <u>인자</u>의 형태로 <u>코드 블록</u>으로 전달된다는 점에서 `apply()`함수와 유사하다. 그리고 전달 받은 객체가 반환된다.
``` kotlin
class Person constructor(var name: String, var age: Int) {

    fun printName() {
        println("Name: ${name}")
    }

    fun printAge() {
        println("Age; ${age}")
    }
}
```
``` kotlin
var person = Person("", 0).also { person ->

    // 생성된 클래스의 인스턴스(person)가 람다의 인자로 전달된다.
    person.name = "Paul"
    person.age = 35
    person.incrementAge()
    person.printAge()
}

```
인자가 하나인 경우 `it`을 사용하여 코드를 더 간략하게 할 수 있다.
``` kotlin
var person = Person("", 0).also { 

    it.name = "Paul"
    it.age = 35
    it.incrementAge()
    it.printAge()
}
```

## with()
`with()`는 `run()`과 유사하다. 차이점은 인스턴스 뒤에 `점(.)`을 붙여 호출하지 않고 함수의 인자로 인스턴스를 전달한다. 
``` kotlin
var person = Person("Paul", 35)

var age = with(person) {
    incrementAge()
    printAge()
    age
}
```
개발을 하다보면 다음과 같이 반복적으로 객체의 속성에 접근하거나 객체의 메소드를 호출하는 경우가 많다. 
``` kotlin
val settings = webView.settings

settings.javaScriptEnabled = true
settings.useWideViewPort = true
settings.domStorageEnabled = true
```
이때 `with()`를 유용하게 사용할 수 있다.
``` kotlin
val settings = webView.settings

with(settings) {
    javaScriptEnabled = true
    useWideViewPort = true
    domStorageEnabled = true
}
```