---
title: "Java 문자열과 기본타입 사이의 변환"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# 문자열과 기본타입 사이의 변환
Java에서는 문자열과 기본타입 사이의 변환을 위한 다양한 방법을 제공한다.

## 기본타입을 문자열로 변환
### Wrapper.toString()
Wrapper 클래스의 `toString()`을 사용하면 기본타입을 문자열로 변경할 수 있다.
``` java
String age = Integer.toString(30);
String weight = Double.toString(70.3);
```

### String.valueOf()
`String.valueOf()`를 사용해도 기본타입을 문자열로 변경할 수 있다.
``` java
String age = String.valueOf(30);
String weight  = String.valueOf(70.5);
```

### + 연산자
`+`연산자를 사용하면 기본타입을 문자열로 변경할 수 있다.
```  java
String age = 30 + "";
String weight = 70.3 + "";
```

## 문자열을 기본타입으로 변환
### Wrapper.parseXXX()
Wrapper 클래스의 `parseXXX()`메소드는 문자열을 원시타입으로 변환한다.
``` java
int age = Integer.parseInt("34");
double weight = Double.parseDouble("70.3");
boolean isMarried = Boolean.parseBoolean("false");
```

### Wrapper.valueOf()
Wrapper 클래스의 `valueOf()`메소드는 문자열을 Wrapper 클래스 변환한다.
``` java
Integer age = Integer.valueOf("34");
Double weight = Double.valueOf("70.3");
Boolean isMarried = Boolean.valueOf("false");
```

