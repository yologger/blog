---
title: "Class, Instance, Object"
lang: ko
showOnSidebar: true
---

## 객체지향 프로그래밍
자바는 모든 대상을 `객체(Object)`로 바라본다. 이러한 점에서 자바는 `객체지향 프로그래밍(Object-oriented Programming)`언어다. 객체지향 프로그래밍을 이해하려면 클래스와 인스턴스에 대해 알아야한다.

## 클래스와 인스턴스
클래스와 인스턴스를 설명할 때 와플 기계와 와플을 예로 든다.
![](./180211_class_instance_object/1.png)

`클래스(Class)`는 <u>인스턴스를 만드는 틀</u>, `인스턴스(Instance)`는 <u>클래스로 만든 무언가</u>다. 즉 클래스는 와플 기계, 인스턴스 와플이다. 클래스를 코드로 표현하면 다음과 같다.
``` java
class Waffle {
    // ...
}
```
인스턴스는 다음과 같이 생성한다. 키워드 `new`를 사용하고 클래스 이름 뒤에 `()`를 붙여주면 된다.
``` java
Waffle waffle = new Waffle()
```
이렇게 만든 인스턴스는 `객체(Object)`라고도 한다.