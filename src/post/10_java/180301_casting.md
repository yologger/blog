---
title: "Java 형 변환"
lang: ko
showOnSidebar: true
---

# 형 변환
`형 변환`은 <u>자료형을 다른 자료형으로 변환하는 것</u>이다.

## 기본자료형의 형 변환
기본자료형을 형 변환할 때는 `()`를 사용한다.
``` java
double height = 180.9;

// double형 변수를 int형 변수로 형 변환
int _height = (int)height;

System.out.print(_height);  // 180
```
## 참조 타입의 형 변환
다음 두 클래스가 있다고 가정해보자.
``` java
class Person {
    void work() {
        System.out.println("work.");
    }
}
```
``` java
class Designer extends Person {
    @Override
    void work() {
        System.out.println("design.");
    }
}
```
참조 타입의 형 변환도 `()`를 사용한다.
``` java
Designer designer = new Designer();

// Designer 클래스를 Person 클래스로 형 변환
Person person = (Person)designer;
person.work();  // design
```
