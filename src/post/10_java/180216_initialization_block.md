---
title: "초기화 블록"
lang: ko
showOnSidebar: true
---

## 인스턴스 초기화 블록
`인스턴스 초기화 블록`은 클래스의 인스턴스가 생성될 때 호출되며, <u>생성자보다도 먼저 호출된다</u>.
``` java
class Person {

    String name;

    // 초기화 블록
    {
        System.out.println("This is initialization block");
    }

    // 생성자
    Person(String name) {
        System.out.println("This is constructor");
        this.name = name;
    }

    void printName() {
        System.out.println(name);
    }
}
```
클래스의 인스턴스를 생성하면 다음과 같이 화면에 출력된다.
``` java
Person person = new Person("Paul");
// This is initialization block
// This is constructor

person.printName();
// Paul
```

## static 초기화 블록
`static 초기화 블록`은 클래스가 메모리에 로드될 때 호출되며, 다음과 같이 선언한다.
``` java
class Counter {
    static int count = 0;

    // static 초기화 블록
    static {
        System.out.println("Static Initialization Block");
    }

    static void increment() {
        count++;
    }

    static void decrement() {
        count--;
    }

    static void printCount() {
        System.out.println(count);
    }
}
```
`static 초기화 블록`은 클래스가 로드될 때 호출된다.
``` java
Counter.printCount();
// Static Initialization Block
// 0

Counter.increment();
Counter.increment();
Counter.printCount();
// 2
```