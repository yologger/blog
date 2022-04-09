---
title: "Kotlin 제어문"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table Of Contents
[[toc]]

## 비교연산자

`==`는 내부적으로 `equals()`메소드를 호출한다. 우선 기본 데이터 타입의 비교는 다음과 같이 한다.
``` kotlin
100 == 100      // true
100 != 100      // false
```
클래스의 인스턴스를 비교할 때도 마찬가지로 `equals()`를 호출한다. 단 `equals()`메소드를 오버라이드하여 구현해야한다.
``` kotlin
class Person(var name: String) {

    override fun equals(other: Any?): Boolean {
        var target = other as Person
        return this.name == target.name
    }
}	
```
이제 세 개의 인스턴스를 생성하자.
``` kotlin
var p1 = Person("Ronaldo")	
var p2 = Person("Ronaldo")	
var p3 = Person("Bale")	
```
`==`를 사용하면 `equals()`메소드가 호출된다. 아래 두 줄은 동일한 코드다.
``` kotlin
p1==p2          // true
p1.equals(p2))  // true
```

`===`는 같은 주소를 참조하고 있는지 `주소값`을 비교한다.
``` kotlin
var p1 = Person("Paul")	
var p2 = Person("Paul")	
var p3 = p1	

p1===p2     // false
p1===p3     // true
``` 

타입 체크를 할 때는 키워드`is`를 사용한다.
``` kotlin
var p = Person()

if (p is Person) {
    println("p is Person.")
} else {
    println("p is not Person.")
}
```

## 조건문
Kotlin은 두 가지의 조건문을 제공한다.

### if
``` kotlin
var isMarried: Boolean = true

if (isMarried) {
    println("He is married.");
} else {
    println("He is not married.");        
}
```

### when
``` kotlin
fun doWhen(nation: String) {
    when(nation) {
        "Korea" -> println("He's from Korea.")
        "Spain" -> println("He's from Spain.")
        "France" -> println("He's from France.")
        else -> println("Where are you from?")
    }
}

doWhen("Korea")     // He's from Korea.
doWhen("Germany")   // Where are you from?
```
`when`구문은 결과값을 변수에 할당할 수 있다.
``` kotlin
fun doWhen(nation: String): String {
    var result: String = when(nation) {
        "Korea" -> "He's from Korea."
        "Spain" -> "He's from Spain."
        "France" -> "He's from France."
        else -> "Where are you from?"
    }   
    return result
} 

var result = doWhen("Korean")
println(result)
```

## 반복문
### for
`for`구문은 키워드 `in`과 함께 사용할 수 있다.
``` kotlin
var players = arrayOf("Ronaldo", "Messi", "Ramos")

for(player in players) {
    println(player)
}
```
`for`구문은 범위연산자`..`와도 함께 사용할 수 있다.
``` kotlin
var sum: Int = 0
for (i in 1..10) {
    sum += i
}
println(sum)    // 55
```
인덱스가 필요할 땐 다음과 같이 사용한다.
``` kotlin
var players = arrayOf("Ronaldo", "Messi", "Ramos", "Pogba")

for(index in players.indices) {
    println(index)
}
```
인덱스와 요소를 모두 받을 수도 있다.
``` kotlin
var players = arrayOf("Ronaldo", "Messi", "Ramos", "Pogba")

for((index, player) in players.withIndex()) {
    println("player: ${player} / index: ${index}")
}

// player: Ronaldo / index: 0
// player: Messi / index: 1
// player: Ramos / index: 2
// player: Pogba / index: 3
```

### while
`while`구문은 조건이 만족할 때 까지 `코드 블럭 {}`을 반복 수행한다.
``` kotlin
var idx = 0

while(idx < 5) {
    println(idx)
    idx++
}
```

## continue
`continue`는 반복문에서 현재 반복을 건너뛴다.
``` kotlin
for (i in 1..4) {
    if ((i % 2 == 0)) continue
    println("i = $i")
}
```
```
i = 1
i = 3
```
`continue` 구문에는 `label`을 붙일 수 있다. label을 사용하면 이중 루프에서 어떤 루프를 건너뛸 지 지정할 수 있다. 

아래 예제는 `i`와 `j`가 모두 짝수일 때 출력을 건너뛴다. 첨부한 예제에서 차이점을 살펴보자.
``` kotlin
for (i in 1..4) {
    for (j in 1..4) {
        println("i = $i, j = $j")
    }
}
```
``` text 출력 결과
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 1, j = 4
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 2, j = 4
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
i = 3, j = 4
i = 4, j = 1
i = 4, j = 2
i = 4, j = 3
i = 4, j = 4
```

또 다른 예제를 살펴보자.
``` kotlin
outer@ for (i in 1..4) {
    inner@ for (j in 1..4) {
        if ((i % 2 == 0) and (j % 2 == 0)) continue@inner
        println("i = $i, j = $j")
    }
}
```
``` text 출력 결과
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 1, j = 4
i = 2, j = 1
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
i = 3, j = 4
i = 4, j = 1
i = 4, j = 3
```

마지막 예제를 살펴보자.
``` kotlin
outer@ for (i in 1..4) {
    inner@ for (j in 1..4) {
        if ((i % 2 == 0) and (j % 2 == 0)) continue@outer
        println("i = $i, j = $j")
    }
}
```

``` text 출력 결과
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 1, j = 4
i = 2, j = 1
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
i = 3, j = 4
i = 4, j = 1
```

## break
`break`는 현재 반복문을 종료한다.
``` kotlin
for (i in 1..4) {
    if ((i > 2)) break
    println("i = $i")
}
```
```
i = 1
i = 2
```
`break` 구문에도 `label`을 붙일 수 있다. label을 사용하면 이중 루프에서 어떤 루프를 종료할지 지정할 수 있다.

아래 예제는 `j`가 2보다 클 때 루프를 종료한다. 첨부한 예제에서 차이점을 살펴보자.
``` kotlin
for (i in 1..4) {
    for (j in 1..4) {
        println("i = $i, j = $j")
    }
}
```
``` text 출력 결과
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 1, j = 4
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 2, j = 4
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
i = 3, j = 4
i = 4, j = 1
i = 4, j = 2
i = 4, j = 3
i = 4, j = 4
```

다른 예제를 살펴보자.
``` kotlin
outer@ for (i in 1..4) {
    inner@ for (j in 1..4) {
        if (j>2) break@inner
        println("i = $i, j = $j")
    }
}
```
``` text 출력 결과
i = 1, j = 1
i = 1, j = 2
i = 2, j = 1
i = 2, j = 2
i = 3, j = 1
i = 3, j = 2
i = 4, j = 1
i = 4, j = 2
```
또 다른 예제를 살펴보자.
``` kotlin
outer@ for (i in 1..4) {
    inner@ for (j in 1..4) {
        if (j>2) break@outer
        println("i = $i, j = $j")
    }
}
```
``` text 출력 결과
i = 1, j = 1
i = 1, j = 2
```

## return과 label
`return`은 현재 실행 중인 함수를 종료하거나 값을 반환할 때 사용한다.
``` kotlin
fun printSomething(something: String) {
    println(something)
    // 함수 종료
    return
}
```
``` kotlin
fun getSomething(something: String): String {
    // 값 반환 및 함수 종료
    return something
}
```
`return`은 함수가 중첩될 때 문제가 된다. 예제를 살펴보자. 함수 안에 람다식이 중첩되어있다. 
``` kotlin
fun printNumbers() {
    arrayOf(1, 2, 3, 4, 5).forEach {
        if (it > 3) return
        println(it)
    }

    println("printNumbers() done.")
}
```
이 함수를 호출했을 때의 출력 결과를 살펴보자.
```
1
2
3
```
우리는 람다식의 종료를 예상했으나 람다식을 포함하는 `printNumbers()`함수가 종료되었다. 따라서 다음 구문이 실행되지 않았다.
``` kotlin
println("printNumbers() done.")
```
이것이 기본 동작이다. 람다식에서 `return`을 호출했을 때 람다식이 아니라 그것을 포함하고 있는 함수가 종료되는 것이며, 이를 `Non-local return`이라고 한다.

`label`은 이러한 문제를 해결하는데 사용할 수 있다. label을 명시적으로 람다에 붙이면 함수가 아니라 람다식만 종료시킬 수 있게된다.
``` kotlin
fun printNumbers() {
    arrayOf(1, 2, 3, 4, 5).forEach lambda@ {
        if (it > 3) return@lambda
        println(it)
    }

    println("printNumbers() done.")
}
```
``` text 출력 결과
1
2
3
printNumbers() done.
```
다음과 같이 암시적 label을 사용할 수도 있다.
``` kotlin
fun printNumbers() {
    arrayOf(1, 2, 3, 4, 5).forEach {
        if (it > 3) return@forEach
        println(it)
    }

    println("printNumbers() done.")
}
```
``` text 출력 결과
1
2
3
printNumbers() done.
```