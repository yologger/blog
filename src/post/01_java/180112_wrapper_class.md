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
`Wrapper 클래스`에서 원시 타입의 값을 얻어내는 것을 `언박싱(Boxing)`이라고 한다. Wrapper 클래스의 `xxxValue()` 메소드를 사용하여 언박싱을 할 수 있다.
``` java
int _age = age.intValue();
double _height = height.doubleValue();
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

## Wrapper 타입 형변환
다른 타입으로 형변환할 때도 `xxxValue()`메소드를 사용할 수 있다.
``` java
Double height = new Double(177.32);

System.out.println(height.intValue());  // 177
System.out.println(height.longValue());  // 177
System.out.println(height.floatValue());  // 177.32
System.out.println(height.doubleValue());  // 177.32
```

## 기본타입을 문자열로 변환

### + 연산자
`+`연산자를 사용하면 원시 타입을 문자열로 변경할 수 있다.
```  java
String age = 30 + "";
String weight = 70.3 + "";
```

### String.valueOf()
`String.valueOf()`를 사용해도 원시 타입을 문자열로 변경할 수 있다.
``` java
String age = String.valueOf(30);
String weight  = String.valueOf(70.5);
```

### Wrapper.toString()
Wrapper 클래스의 `toString()`을 사용하면 원시 타입을 문자열로 변경할 수 있다.
``` java
String age = Integer.toString(30);
String weight = Double.toString(70.3);
```

## 문자열을 기본타입으로 변환

### Wrapper.valueOf()
Wrapper 클래스의 `valueOf()`메소드는 문자열을 Wrapper 클래스로 변환한다.
``` java
Integer age = Integer.valueOf("34");
Double weight = Double.valueOf("70.3");
Boolean isMarried = Boolean.valueOf("false");
```

### Wrapper.parseXXX()
Wrapper 클래스의 `parseXXX()`메소드는 문자열을 원시타입으로 변환한다.
``` java
int age = Integer.parseInt("34");
double weight = Double.parseDouble("70.3");
boolean isMarried = Boolean.parseBoolean("false");
```

## Wrapper 클래스와 값 비교
`Wrapper` 클래스는 값 비교를 위한 `compare()`메소드를 제공한다.
``` java
System.out.println(Integer.compare(1, 2));  // -1
System.out.println(Integer.compare(2, 2));  // 0
System.out.println(Integer.compare(2, 1));  // 1
```
``` java
System.out.println(Double.compare(1.0, 1.9));  // -1
System.out.println(Double.compare(1.9, 1.9));  // 0
System.out.println(Double.compare(1.9, 1.0));  // 1
```