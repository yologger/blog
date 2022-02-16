---
title: "생성자, 멤버변수, 메소드"
lang: ko
showOnSidebar: true
---

## 생성자
`생성자(Constructor)`는 클래스의 인스턴스를 생성할 때 호출되는 구문이다. 보통 생성자에서는 초기화 작업을 수행한다.
``` java
class Person {

    // 멤버변수
    String name;

    // 생성자
    Person() {
        // 멤버변수 초기화
        this.name = "Paul";
        System.out.println("Constructor has occurred.");
    }
}
```
생성자는 인스턴스를 생성할 때 호출된다.
``` java
Person person = new Person();   // Constructor has occurred.
```
생성자에 매개변수를 전달할 수 있다.
``` java
class Person {

    // 멤버변수
    String name;

    // 매개변수가 없는 생성자
    Person() {
        this.name = "";
    }

    // 매개변수가 있는 생성자
    Person(String name) {
        this.name = name;
    }
}
```
## 멤버변수와 메소드
`멤버변수`와 `메소드`는 클래스 내부에 다음과 같이 선언한다.
``` java
class Person {

    // 멤버변수
    String name;

    // 멤버변수
    String nation;

    // 생성자
    Person(String name) {
        this.name = name;
    }

    // 메소드
    void printName() {
        System.out.println(this.name);
    }
}
```
멤버변수와 메소드는 다음과 같이 사용할 수 있다.
``` java
Person person = new Person("Paul");

person.printName();

String name = person.name;
```