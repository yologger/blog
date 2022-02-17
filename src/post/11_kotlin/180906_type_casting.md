---
title: "Kotlin 형 변환(Type Casting)"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table Of Contents
[[toc]]

## 형 변환
`형 변환`은 자료형을 다른 자료형으로 변환하는 것을 의미합니다.

### 기본자료형의 형변환
기본 자료형을 형변환할 때는 내장된 `형변환 함수`를 사용합니다.
``` kotlin
// 실수형 숫자를 정수형 숫자로 형변환
var height: Double = 179.3
var roughHeight: Int = height.toInt()  // 179
```
``` kotlin
// 문자열을 정수형 숫자로 형변환
var string: String = "100"
var number: Int = string.toInt()  // 100
```
``` kotlin
var string: String = "hundred"
var number: Int? = string.toIntOrNull()  // null
``` 


### 클래스 인스턴스의 형변환
클래스 인스턴스를 형변환할 때는 키워드 `as`를 사용합니다. 
``` kotlin
// 부모클래스
open class Person(var name: String) {
    fun printName() {
        println("Name: ${name}")
    }
}

// 자식클래스
class Player(name: String, var team: String): Person(name) {
    fun printTeam() {
        println("Team: ${team}")
    }
}

var player: Player = Player("Messi", "35")

// 자식클래스를 부모클래스로 형변환
var person: Person = player as Person

person.printName()
``` 
부모클래스가 `Nullable`타입이면 키워드 `as?`를 사용합니다. 
``` kotlin
open class Person(var name: String) {
    fun printName() {
        println("Name: ${name}")
    }
}

class Player(name: String, var team: String): Person(name) {
    fun printTeam() {
        println("Team: ${team}")
    }
}

var player: Player? = Player("Messi", "35")
var person: Person? = player as? Person

person?.printName()
```