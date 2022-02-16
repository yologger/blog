---
title: "상속(Inheritance)"
lang: ko
showOnSidebar: true
---


# 상속
실생활에서 상속은 자식이 부모의 재산을 물려받는 행위를 뜻한다. 자바에서도 상속은 비슷한 의미로 사용된다. `상속(Inheritance)`은 <u>자식 클래스가 부모 클래스의 멤버변수나 메소드를 그대로 물려받는 것</u>을 의미한다. 이를 통해 코드의 중복을 제거할 수 있다.

# 사용 방법
다음과 같이 부모 클래스가 있다고 가정해보자.
``` java
// 부모 클래스
class Person {

    protected String name;

    Person(String name) {
        this.name = name;
    }

    void printInformation() {
        System.out.println(this.name);
    }
}
```
부모 클래스를 상속할 땐 키워드`extends`를 사용한다. 자식 클래스에서는 `@Override`를 붙여서 부모 클래스의 메소드를 재정의할 수 있다.
``` java
// 자식 클래스
class Player extends Person {

    private String team;

    Player(String name, String team) {
        super(name);
        this.team = team;
    }

    // 부모 클래스의 메소드를 재정의
    @Override
    void printInformation() {
        System.out.println(name + " plays in " + team);
    }
}
```
주의할 점은 자식 클래스의 생성자에서 부모 클래스의 생성자를 호출해야 한다는 것이다. 이때는 키워드 `super`를 사용합니다.
``` java
// 자식 클래스
class Player extends Person {

    // 자식 클래스의 생성자
    Player(String name, String team) {
        // 부모 클래스의 생성자를 호출
        super(name);
        // ...
    }
}
```

이렇게 정의한 자식 클래스는 다음과 같이 사용할 수 있다.
``` java
Player player = new Player("Heung-min Son", "Tottenham");
player.printInformation();	// Heung-min Son plays in Tottenham
```