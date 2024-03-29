---
title: "Kotlin 클래스 참조, Reflection"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## 클래스 참조, Java Class, Kotlin KClass
Java에서는 런타임에 클래스에 대한 정보를 `Class`클래스에 저장할 수 있다. 이를 `클래스 참조(Class Reference)`라고 하며, 여러 가지 방법으로 클래스를 참조할 수 있다.
``` java
// .class를 사용하여 클래스에서 객체 정보 가져오기
Class clazz = String.class
```
``` java
// forName()메소드를 사용하여 클래스에서 객체 정보 가져오기
Class clazz = Class.forName("java.lang.String");
```
``` java
// 인스턴스로부터 객체 정보 가져오기
String string = new String();
Class clazz = string.getClass();
```
반면 Kotlin에서는 `더블콜론(::)`을 사용하여 클래스에 대한 정보를 가져올 수 있다. 
``` kotlin
// 클래스에서 객체 정보 가져오기
var kclazz: KClass<Person> = Person::class
```
``` kotlin
// 인스턴스에서 객체 정보 가져오기
var kclazz: KClass<Person> = p::class
```
주의할 점은 Kotlin에서는 `Class`클래스가 아닌 `KClass`라는 클래스에 정보가 저장한다는 것이다. 이는 Java에서 사용하는 클래스와 Kotlin에서 사용하는 클래스가 다르기 때문이다. 

Kotlin의 `Kclass`를 Java의 `Class`로 변환하려면 `.java`를 뒤에 붙여주면 된다.
``` kotlin
var kclazz: KClass<Person> = Person::class
var clazz: Class<Person> = kclazz.java
```

## 리플렉션(Reflection)
`리플렉션(Reflection)`은 런타임에서 구체적인 클래스 타입을 몰라도 그 클래스의 멤버변수, 메소드 등에 접근할 수 있도록 하는 API다. 리플렉션은 클래스 참조를 사용하여 구현할 수 있다.

### 리플렉션을 사용하여 멤버 변수 참조
다음과 같은 클래스가 있다고 가정해보자.
``` kotlin
class Player {
    var name = "Ronaldo"
    var nation = "Portugal"
    var team = "Juventus"
    var age = 35
}
```
리플렉션을 사용하면 다음과 같이 클래스의 멤버변수에 접근할 수 있다.
``` kotlin
var player: Player = Player()
val kclazz: KClass<Player> = player::class

// KClass를 사용하여 Player 클래스의 멤버변수를 알아내고 있다.
kclazz.memberProperties.forEach {
    print("${it.name} :: ${it.getter.get(p)}")
}

// name :: Ronaldo
// nation :: Portugal
// team :: Juventus
// age :: 35
```

### 리플렉션을 사용하여 함수 참조
리플렉션은 함수를 참조하는데 사용할 수도 있다.
``` kotlin
fun printName(name: String) {
    println(name);
}

// 함수를 변수에 저장하는데 리플렉션 사용
var myFun = ::printName
myFun("ronaldo")  
```
``` kotlin
fun isOdd(x: Int): Boolean {
    return x % 2 !=0
}

val numbers = listOf(1, 2, 3, 4)

// 함수를 함수의 인자로 전달하는데 리플렉션 사용
println(numbers.filter(::isOdd)) 
```

### 초기화 여부 확인
리플렉션을 사용하여 멤버변수가 초기화되었는지 확인할 수도 있다.
``` kotlin
class Phone { ... }

class Person {

    lateinit var phone: Phone
    
    fun getPhone(): Phone {
        //  변수가 초기화 됐는지 확인
        if(::phone.isInitialized) {	
            return phone
        } else {
            this.phone = Phone()
            return phone
        }
    }
}
```