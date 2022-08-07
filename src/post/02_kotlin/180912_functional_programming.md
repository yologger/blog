---
title: "Kotlin 람다식, 함수형 프로그래밍"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]


## 람다식
`람다식(Lambda Expresssion)`는 `익명함수(Anonymous Function)`라고도 하며 <u>이름이 없는 함수</u>를 의미한다.

람다식을 사용할 때는 `{}`를 사용한다.
``` kotlin
val sayHello: () -> Unit = {
    println("Hello.")
}

sayHello()
```
람다식에 매개변수가 있는 경우 `{ 인자1, 인자2, ... -> }`을 사용한다.
``` kotlin
val printInformation: (name: String, age: Int) -> Unit = { name: String, age: Int ->
    println("${name} is ${age} years old.")
}

printInformation("Paul", 35)
```
반환값이 있는 경우 다음과 같이 사용하며, 람다식에서 값을 반환할 땐 키워드 `return`을 사용하지 않아도 마지막 구문이 자동으로 반환된다.
``` kotlin
val sum: (a: Int, b: Int) -> Int = { a: Int, b: Int ->
    a+b
}

var result = sum(3, 5)
println(result)
```
람다식도 자동으로 `타입 추론`이 되므로 `매개변수의 자료형`과 `함수타입`을 생략할 수 있다. 위 코드와 아래 코드는 동일하다.
``` kotlin
val sum = { a, b ->
    a+b
}

var result = sum(3, 5)
println(result)
```
매개변수가 한 개인 경우도 살펴보자.
``` kotlin
val printName = { name ->
    println(name)
}
```
`매개변수`와 `->`을 생략하고 `it`로 대체할 수 있다. 위 코드와 아래 코드는 동일하다.
``` kotlin
val printName = { 
    println(it)
}
```
### Trailing
함수의 맨 마지막 인자가 람다식이라면 `괄호()`에서 빼내어 밖에 표현할 수 있다.
``` kotlin
people.maxBy({p: Person -> p.age}) 

// Trailing
people.maxBy() {p: Person -> p.age} 
``` 
함수의 인자가 1개고 그 인자가 익명함수라면 `괄호()`까지 생략할 수 있다.
``` kotlin
people.maxBy {p: Person -> p.age} 
```
람다식의 인자가 1개라면 그 인자는 익명함수 내부에서 `it`으로 받을 수 있다.
``` kotlin
people.maxBy {it.age}
```
### 예제
안드로이드 앱에서 버튼과 같은 위젯을 클릭했을 때 처리할 내용을 람다식으로 구현한다. 아래 코드들은 모두 동일하다.
``` kotlin
// 익명 클래스 사용
button.setOnClickListener(object: View.OnClickListener {
    override fun onClick(v: View?) {
        // 클릭 시 처리
    }
})
```
``` kotlin
// 익명클래스의 구현해야 할 매서드가 1개 뿐인 인터페이스는 람다식으로 대체할 수 있다.
button.setOnClickListener({ v: View? ->
    // 클릭 시 처리
})
```
``` kotlin
// 트레일링
button.setOnClickListener() { v: View? ->
    // 클릭 시 처리
}
```
``` kotlin
// 파라미터가 하나인 경우, 괄호생략 가능
button.setOnClickListener { v: View? ->
    // 클릭 시 처리
}
```
``` kotlin
// 자료형 추론
button.setOnClickListener { v ->
    // ...
}
```

## 일급 객체
다음 세 가지 조건을 모두 충족하면 `일급 객체`라고 한다.
1. 변수나 상수에 할당할 수 있다.
1. 함수의 인자로 전달할 수 있다.
1. 함수의 반환값으로 반환할 수 있다.

Kotlin에서는 `함수`를 `일급 객체`로 취급한다. 함수가 위의 세 가지 조건을 모두 충족하는지 살펴보자.

### 함수를 변수나 상수에 할당할 수 있다.
Kotlin에서는 함수를 변수에 할당할 수 있다. 이때 `리플렉션`을 사용한다. 
``` kotlin
fun add(a: Int, b: Int): Int {
    return a+b
}

// 함수를 변수에 할당
var plus = ::add

// 함수 호출
var sum = plus(3, 5)
```
람다식 또한 변수에 할당할 수 있다.
``` kotlin
// 람다식을 변수에 할당
var add = { a, b -> 
    a+b
}

// 람다식 호출
var result = add(3, 4)
```

### 함수를 함수의 인자로 전달할 수 있다.
Kotlin에서는 함수를 함수의 인자로 전달할 수 있다.
``` kotlin
fun run(func: () -> Unit) {
    func()
}

// 함수의 인자로 람다식 전달
run({
    println("Hello World!")
})
```

### 함수를 함수의 반환 값으로 반환
Kotlin에서는 함수를 함수의 반환 값으로 반환할 수 있다.
``` kotlin
fun function(): () -> Unit {
    // 함수에서 익명함수를 반환
    return { println("kotlin") }
}

var myFunction = function()
```

## 함수 타입
`함수 타입`은 위 세 가지 특성을 가능하게 해주는 Kotlin의 자료형이다. 정수형 타입의 변수에 정수를 할당하는 것 처럼 함수형 타입에는 함수를 할당할 수 있다. 
``` kotlin
// 람다식을 변수에 할당
var add: (Int, Int) -> Int = { a, b -> 
    a+b
}

// 람다식 호출
var result = add(3, 4)
```
위 예제에서는 `(Int, Int) -> Int`가 바로 함수 타입이다.
