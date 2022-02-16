---
title: "추상 클래스"
lang: ko
showOnSidebar: true
---

# 추상 클래스
<u>미구현된 메소드를 가지고 있는 클래스</u>를 `추상 클래스`라고 한다. 추상 클래스를 선언할 땐 키워드 `abstract`를 붙인다.
``` java
// 부모 클래스
abstract class Person {

    String name;

    Person(String name) {
        this.name = name;
    }

    // 구현된 메소드
    void printName() {
        System.out.println(name);
    }

    // 미구현된 메소드
    abstract void printInformation();
}
```
추상 클래스는 인스턴스를 생성할 수 없다.
``` java
Person person = new Person("Paul"); // 아래와 같은 에러가 발생
// 'Person' is abstract; cannot be instantiated
```

따라서 이를 상속하는 자식 클래스에서 미구현된 메소드를 구현해야한다.
``` java
class Player extends Person {

    String team;

    Player(String name, String team) {
        super(name);
        this.team = team;
    }

    // 메소드 구현
    @Override
    void printInformation() {
        System.out.println(name + " plays in " +team);
    }
}
```
이제 클래스의 인스턴스를 생성할 수 있다.
``` java
Player player = new Player("Paul", "Real Madrid")
```