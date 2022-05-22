---
title: "Java Wrapper 클래스"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Wrapper 클래스
`Wrapper 클래스`를 사용하면 원시 타입을 객체로 취급할 수 있다. 예를 들면 제너릭을 사용할 때는 타입 파라미터로 참조 타입만 전달할 수 있는데 이 때 Wrapper 클래스를 사용할 수 있다. 
``` java
class Person<T> {
    T data;

    public Person(T data) {
        this.data = data;
    }
}
```
``` java
Person<int> person = new Person<int>(3);    // Error. Type argument cannot be of primitive type
```
이럴 때 `Wrapper 클래스`를 사용할 수 있다. 즉  `Wrapper 클래스`는 <u>원시 타입을 참조 타입으로 취급하기 위해 사용</u>한다.
``` java
Person<Integer> person = new Person<Integer>(3);
```
`Wrapper 클래스`는 `java.lang` 패키지에 포함되어있으며, 원시 타입에 대응하는 `Wrapper 클래스`가 존재한다.

|원시 타입|래퍼 클래스|
|-------|--------|
|byte|Byte|
|char|Character|
|short|Short|
|int|Integer|
|long|Long|
|boolean|Boolean|
|float|Float|
|double|Double|

## 박싱과 언박싱
원시 타입의 값으로 `Wrapper 클래스`를 만드는 것을 `박싱(Boxing)`이라고 한다.
``` java
Integer age = new Integer(30);
Double height = new Double(165.3);
```
`Wrapper 클래스`에서 기본 타입의 값을 얻어내는 것을 `언박싱(Boxing)`이라고 한다. Wrapper 클래스의 `xxxValue()` 메소드를 사용하여 언박싱을 할 수 있다.
``` java
int _age = age.intValue();
double _height = height.doubleValue();
``` 
다른 타입으로 형변환할 때도 `xxxValue()`메소드를 사용할 수 있다.
``` java
Double age = new Double(130.32);

System.out.println(age.intValue());  // 130
System.out.println(age.longValue());  // 130
System.out.println(age.floatValue());  // 130.32
System.out.println(age.doubleValue());  // 130.32
```

## 오토 박싱과 오토 언박싱
직접적으로 박싱/언박싱을 하지 않아도 자동으로 박싱/언박싱이 일어나기도 한다. `Wrapper 클래스`에 원시 타입의 데이터를 할당할 경우 오토 박싱이 된다.
``` java
Integer age = 30;
``` 
`Wrapper 클래스`의 객체를 원시 타입에 할당할 때도 오토 언박싱이 된다.
``` java
int _age = age;
``` 