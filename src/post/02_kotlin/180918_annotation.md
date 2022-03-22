---
title: "Kotlin 어노테이션(Annotation)"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

::: tip
Java의 [어노테이션, 어노테이션 프로세서](/post/10_java/180316_annotation.html#어노테이션)에 대한 포스트를 먼저 읽어보시길 권장합니다.
:::

## 어노테이션 클래스 선언방법
Kotlin에서 어노테이션은 다음과 같이 선언할 수 있습니다.
``` kotlin
annotation class IsAvailable
```
이렇게 선언한 어노테이션은 다음과 같이 사용합니다.
``` kotlin
fun main() {
    // 어노테이션 사용
    @IsAvailable var name: String = "name"   
}
```
어노테이션은 데이터를 가질 수도 있습니다.
``` kotlin
annotation class IsAvailable(val message: String)
```
다음과 같이 선언할 수도 있습니다.
``` kotlin
annotation class IsAvailable {
    val message: String
}
```
데이터가 있는 어노테이션은 다음과 같이 사용합니다.
``` kotlin
fun main() {
    @IsAvailable("IsNameAvailabe") var name: String = "name"   
}
```

## 어노테이션의 위치
우선 어노테이션은 클래스 앞에 붙일 수 있습니다
``` kotlin
@MyAnnotation 
class MyClass {
    ...
}
```
어노테이션은 메소드 앞에도 사용할 수 있습니다.
``` kotlin
MyClass {
    @MyAnnotation fun myMethod(myProperty: Int): Int {
        ...
    }
}
```
어노테이션을 생성자 앞에 사용하려면 constructor 키워드 명시해야 한다.
``` kotlin
class MyClass @MyAnnotation constructor(dependency: ... )
```
어노테이션은 클래스의 멤버변수 앞에도 붙일 수 있습니다.
``` kotlin
@Inject lateinit var cat: Cat
```
메소드의 매개변수 앞에도 붙일 수 있습니다.
``` kotlin
fun myMethod(@MyAnnotation myProperty: Int): Int {
    return 1
}
```
함수의 반환값 앞에도 붙일 수 있습니다.
``` kotlin
fun myMethod(myProperty: Int): Int {
    return ( @MyAnnotation 1 )
}
```