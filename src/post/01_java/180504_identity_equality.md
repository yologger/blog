---
title: "동일성과 동등성"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# 객체 비교하기
Java 에서는 데이터가 원시타입이냐 참조타입이냐에 따라 비교하는 방식이 다르다.

## 원시 타입 비교하기
Java에서 원시 타입을 비교할 때는 `==`을 사용한다.
``` java
int a = 10;
int b = 10;
int c = 11;

System.out.println(a == b);     // true
System.out.println(a == c);     // false
```

## 참조 타입 비교하기
참조 타입을 비교할 때 `==`를 사용하면 <u>객체의 주소값</u>을 비교한다. 객체의 주소값이 같으면 두 객체가 `동일성(Identity)`를 갖는다고 한다.
``` java
Person p1 = new Person("Paul");
Person p2 = p1;
Person p3 = new Person("Paul");

System.out.println(p1 == p2);   // true
System.out.println(p1 == p3);   // false
```

객체의 속성값을 비교할 때는 `Object`클래스의 `equals()`메소드를 사용한다. 
``` java
Person p1 = new Person("Paul");
Person p2 = new Person("Monica");
Person p3 = p1;
Person p4 = new Person("Paul");

System.out.println(p1.equals(p2));  // false
System.out.println(p1.equals(p3));  // true
System.out.println(p1.equals(p4));  // true
```
다만 클래스에서 `equals()`를 직접 오버라이드 해야한다. 
```java Person.java
public class Person {

    private String name;

    public Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (o instanceof Person) {
            Person _person = (Person) o;
            return this.name == _person.name;
        } else {
            return false;
        }
    }
}
```
객체의 속성값이 같으면 두 객체가 `동등성(Equality)`를 갖는다고 한다.