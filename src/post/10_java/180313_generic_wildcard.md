---
title: "제너릭의 와일드 카드(Wildcard)"
lang: ko
showOnSidebar: true
---

# 와일드 카드
`와일드 카드(Wildcard)`는 <u>제네릭 클래스의 인스턴스를 함수의 인자로 전달할 때, 그 인스턴스의 타입 파라미터를 제한하는 것</u>을 의미한다. 개념이 어렵기 때문에 예제를 통해 살펴보겠다.

## 와일드 카드(?) 
다음과 같은 함수가 있다고 가정하자. 이 함수는 인자로 `ArrayList`타입을 인자로 받는다.
``` java
void printElements(ArrayList<?> list) { 
    // ..
}
```
ArrayList의 타입 파라미터를 `?`로 선언하면 list가 어떠한 데이터 타입도 다 가질 수 있다. 이 물음표를 `와일드 카드`라고 한다.
``` java
// 제네릭 클래스 ArrayList의 타입 변수로 String, Person, Player가 모두 올 수 있다.
ArrayList<String> list1 = new ArrayList<String>();
ArrayList<Person> list2 = new ArrayList<Person>();
ArrayList<Player> list3 = new ArrayList<Player>();

printElements(list1);
printElements(list2);
printElements(list3);
```

## extends
그런데 인자로 전달되는 `ArrayList`에 저장되는 데이터를 제한할 수 있다. 아래와 같이 `물음표(?)`와 키워드 `extends`를 사용하면 된다. 
``` java
void printElements(ArrayList<? extends Person> list) {
    // ..
}
```

`Person`클래스를 선언해보자.
``` java
class Person {
    String name;

    Person(String name) {
        this.name = name;
    }
}
```
`Person`클래스를 상속하는 `Player`클래스를 선언한다.
``` java
class Player extends Person {
    String team;

    Player(String name, String team) {
        super(name);
        this.team = team;
    }
}
``` 
이제 세 개의 `ArrayList`를 생성하고 메소드의 매개변수로 전달해보자.
``` java
ArrayList<String> list1 = new ArrayList<String>();
ArrayList<Person> list2 = new ArrayList<Person>();
ArrayList<Player> list3 = new ArrayList<Player>();

printElements(list1);   // 에러
printElements(list2);
printElements(list3);
```

`<? extends Person>`는 `Person`객체 또는 `Person`객체를 상속한 객체를 데이터로 가지고 있는 `ArrayList`객체만 함수의 인자로 전달될 수 있음을 의미한다. 따라서 아래 코드에서 `Person`객체를 상속하지 않은 `list1` 때문에 컴파일 에러가 발생힌다.

## super
키워드 `super`를 사용하면 특정 클래스와 부모 클래스만 인자로 제한할 수 있다.
``` java
void printElements(ArrayList<? super Person> list) {
    // ..
}

ArrayList<String> list1 = new ArrayList<String>();
ArrayList<Person> list2 = new ArrayList<Person>();
ArrayList<Player> list3 = new ArrayList<Player>();

printElements(list1);   // 에러
printElements(list2);
printElements(list3);
```



# 와일드 카드<?>의 종류
- `<? extends T>` 와일드 카드의 상한 제한(upper bound) - T와 그 자손들을 구현한 객체들만 타입 매개변수로 올 수 있다.
- `<? super T>` 와일드 카드의 하한 제한(lower bound) - T와 그 조상들을 구현한 객체들만 타입 매개변수로 올 수 있다.
- `<?>` 타입 매개변수에 제한이 없다.