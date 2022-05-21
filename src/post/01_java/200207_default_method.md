---
title: "[Java 8] default 메소드"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## 인터페이스
`인터페이스`는 메소드 선언만 할 뿐 구현부는 포함하지 않는다.
``` java Person.java
interface Person {
    void work();
}
```
인터페이스는 인스턴스를 생성할 수도 없으며, 구현체에서 메소드를 모두 구현해야한다.
``` java Programmer.java
class Programmer implements Person {

    @Override
    public void work() {
        System.out.println("Do programming.");
    }
}
```

## default 메소드
키워드 `default`를 사용하면 인터페이스에서도 메소드를 구현할 수 있다.
``` java Person.java
interface Person {
    void work();

    default void eat() {
        System.out.println("Eat something.");
    }
}
```

## 왜 사용할까?
default 메소드는 `하위 호환성` 때문에 사용한다. 

예를 들어보자. 내가 작성한 라이브러리에 아래 인터페이스가 포함된다.
``` java Person.java
package com.yologger.mylib;

interface Person {
    void work();
}
```
그리고 다른 사람이 내 라이브러리를 사용하고 있다.
``` java Programmer.java
import com.yologger.mylib.Person;

class Programmer implements Person {

    @Override
    public void work() {
        System.out.println("Do programming.");
    }
}
```
이제 기능을 추가하기 위해서 인터페이스에 메소드를 추가한다고 가정하자.
``` java Person.java
package com.yologger.mylib;

interface Person {
    void work();
    void eat();     // 기능 추가
}
```
이 때문에 내 라이브러리를 사용하는 곳에도 영향을 준다. `Programmer`클래스를 수정해야하기 때문이다.
``` java Programmer.java
import com.yologger.mylib.Person;

class Programmer implements Person {

    @Override
    public void work() {
        System.out.println("Do programming.");
    }

    @Override
    public void eat() {
        System.out.println("Eat Something.");
    }
}
```
만약 default 메소드를 사용하면 기능을 추가해도 내 라이브러리를 사용하는 곳에 영향을 주지 않게된다.
``` java Person.java
interface Person {
    void work();
    
    default void eat() {
        System.out.println("Eat something.");
    }
}
```
이처럼 default 메소드를 사용하면 `하위 호환성`을 보장할 수 있다.