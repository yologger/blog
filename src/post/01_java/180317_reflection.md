---
title: "Java 클래스 참조, Reflection"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## 클래스 참조, Class 클래스
Java의 모든 클래스와 인터페이스는 컴파일 후 `.class`파일로 변환된다. 이 파일에는 생성자, 멤버변수, 메서드 등 객체의 정보가 포함되어있는데 `Class`클래스를 사용하면 이 파일에서 가져온 객체의 정보를 담을 수 있다. 이를 `클래스 참조(Class Reference)`라고 한다.

`Class`클래스에 정보를 담는 방법에는 세 가지가 있다. 
``` java
// 클래스에 .class를 붙여서 객체 정보 가져오기
Class clazz = String.class
```
``` java
// Class클래스의 forName()메소드를 사용하여 객체 정보 가져오기
Class clazz = Class.forName("java.lang.String");
```
``` java
// 인스턴스에서 getClass()를 호출하여 객체 정보 가져오기
String string = new String();
Class clazz = string.getClass();
```

## 리플렉션(Reflection)
`리플렉션(Reflection)`은 <u>런타임에서 클래스의 구체적인 타입을 몰라도 그 클래스의 멤버변수, 메소드 등을 분석하고 접근할 수 있도록 하는 자바 API와 기법</u>이다. 리플렉션과 관련된 API는 `java.lang.reflect.*`패키지에 있다.

코드를 작성하다보면 작성 시점에 데이터의 타입을 모를 수도 있다. 이때 `리플렉션(Reflection)`을 사용할 수 있다. 

예제를 살펴보자. 다음과 같은 클래스가 있다.
``` java
package com.yologger.app;

class Person {

    String name;
    String nation;

    // 기본 생성자
    Person() {
        this.name = "";
        this.nation = "";
    }

    // 보조 생성자
    Person(String name, String nation) {
        this.name = name;
        this.nation = nation;
    }

    void printName() {
        System.out.println(name);
    }

    void printNation() {
        System.out.println(nation);
    }

    void printSomething(String something) {
        System.out.println(something);
    }

    void printHello() {
        System.out.println("Hello");
    }
}
```
`Class`클래스의 인스턴스에는 클래스 정보를 저장할 수 있다.
``` java
Class personClass = Person.class;
// 또는 Class personClass = Class.forName("Person");
```
이 `Class`타입의 인스턴스로 클래스의 인스턴스를 생성할 수도 있다. 이 때는 `newInstance()`메소드를 사용한다. 다만 반드시 매개변수가 없는 `기본생성자`가 존재해야 한다.
``` java
Class personClass = Person.class;

try {
    Person person = (Person) personClass.newInstance();
} catch (IllegalAccessException e) {
    e.printStackTrace();
} catch (InstantiationException e) {
    e.printStackTrace();
}
```
## 클래스의 멤버변수 가져오기
클래스의 멤버변수 정보를 읽어올 수 있다.
``` java
import java.lang.reflect.Field;

Field[] fields = personClass.getDeclaredFields();
for (int i=0; i<fields.length; i++) {
    System.out.println(fields[i].getName());
}
// name
// nation
```
## 클래스의 생성자 가져오기
클래스의 생성자 정보를 읽어올 수도 있다.
``` java
import java.lang.reflect.Constructor;

Class personClass = Person.class;

Constructor[] constructors = personClass.getDeclaredConstructors();
for (int i=0; i<constructors.length; i++) {
    System.out.println(constructors[i].getName());
}
// com.yologger.app.Person
// com.yologger.app.Person
```
## 클래스의 메소드 가져오기
클래스의 모든 메소드들은 다음과 같이 가져올 수 있다.
``` java
import java.lang.reflect.Method;

Class personClass = Person.class;

Method[] methods = personClass.getDeclaredMethods();
for (int i=0; i<methods.length; i++) {
    // 메소드 이름 출력
    System.out.println(methods[i].getName());
}
// printName
// printNation
// printSomething
// printHello
```
특정 메소드 한 개만 가져올 수도 있다.
``` java
Class personClass = Person.class;

try {
    Method method = personClass.getDeclaredMethod("printSomething");
    System.out.println(method.getName());   // printSomething
} catch (NoSuchMethodException e) {
    e.printStackTrace();
}
```

클래스의 메소드를 가져오면 이를 통해 호출도 할 수 있다. 이 때는 `invoke()`메소드를 호출한다.
``` java
Class personClass = Person.class;
Person person = new Person("Paul", "America");

try {
    Method printHelloMethod = personClass.getDeclaredMethod("printHello");
    printHelloMethod.invoke(person);    // Hello

} catch (NoSuchMethodException e) {
    e.printStackTrace();
} catch (IllegalAccessException e) {
    e.printStackTrace();
} catch (InvocationTargetException e) {
    e.printStackTrace();
}
```