---
title: "Java 제어문"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Java 제어문
Java의 제어문에 대해 알아보자.

## 반복문
### for
`for`구문은 다음과 같이 사용할 수 있다.
``` java
for (int idx=0; idx<10; idx++) {
    System.out.println(idx);
}
```
`for`구문은 `:`과 함께 사용할 수도 있다.
``` java
Person[] people = {
    new Person("Son", "Korea"),
    new Person("Kane", "England"),
    new Person("Messi", "Argentina")
};

for (Person person: people) {
    person.printName();
}
```
``` text 출력 결과
Son
Kane
Messi
```
### while
`while`구문은 조건이 만족할 때 까지 `블럭({ .. })`을 반복 수행한다.
``` java
int idx = 0;
while (idx < 10) {
    System.out.println(idx);
    idx ++;
}
```

## 조건문

### if else
`if else`구문은 다음과 같이 사용할 수 있다.
``` java
bool isMarried = true;

if (isMarried) {
    System.out.println("He is married.");
} else {
    System.out.println("He is not married.");
}
```

### switch
`switch`구문은 `열거형(enum)`과 함께 유용하게 사용할 수 있다.
``` java
enum Direction {
    EAST, WEST, SOUTH, NORTH
}
``` 
``` java
Direction direction = Direction.EAST;

switch (direction) {
    case EAST: {
        System.out.println("Go to east.");
        break;
    }
    case WEST: {
        System.out.println("Go to west.");
        break;
    }
    case NORTH: {
        System.out.println("Go to north.");
        break;
    }
    case SOUTH: {
        System.out.println("Go to south.");
        break;
    }
}
```

### instanceOf
`instanceOf`는 인스턴스가 특정 클래스의 타입인지 확인할 때 사용한다.
``` java
Person person = new Person("Paul");

if (person instanceof Person) {
    System.out.println("person is instance of Person.");
} else {
    System.out.println("person is not instance of Person.");
}
```