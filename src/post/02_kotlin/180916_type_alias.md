---
title: "Kotlin 타입 별칭(Type Alias)"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# 타입 별칭
`타입 별칭(Type Alias)`을 사용하면 타입의 이름이 길 때 간단한 별칭으로 대체할 수 있다. 타입 별칭를 정의할 때는 키워드`typealias`를 사용한다.

기본 자료형에 타입 별칭를 적용한 예제는 다음과 같다.
``` kotlin
typealias Number = Int

var number: Number = 3
``` 
클래스에 타입 별칭를 적용한 예제는 다음과 같다.
``` kotlin
class Person constructor(val name: String)

typealias Man = Person

var man: Man = Person("Harry")
``` 
타입 별칭은 타입에 제네릭 타입 파라미터가 포함됐을 때 유용하게 사용할 수 있다. 아래 코드를 살펴보자.
``` kotlin
var users: MutableList<MutableMap<String, String>> = mutableListOf(
        mutableMapOf("name" to "Paul"),
        mutableMapOf("name" to "John"),
        mutableMapOf("name" to "Jenny"),
        mutableMapOf("name" to "Park"),
        mutableMapOf("name" to "Lee")
)
```
변수 `user`의 데이터 타입은 `MutableList<MutableMap<String, String>>`이다. 이를 타입 별칭를 사용하여 `User`로 축약할 수 있다.
``` kotlin
typealias Users = MutableList<MutableMap<String, String>>

var users: Users = mutableListOf(
        mutableMapOf("name" to "Paul"),
        mutableMapOf("name" to "John"),
        mutableMapOf("name" to "Jenny"),
        mutableMapOf("name" to "Park"),
        mutableMapOf("name" to "Lee")
)
```