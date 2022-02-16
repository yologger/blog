---
title: "내부 클래스(Inner Class)"
lang: ko
showOnSidebar: true
---

# Inner Class
자바에서는 클래스 안에 클래스를 정의할 수 있다. 이를 `내부 클래스`라고 한다. 내부 클래스는 다음과 같이 선언한다.
``` java
class Outer {

    class Inner {
        // ...
    }
}
```
내부 클래스는 외부 클래스의 인스턴스를 먼저 생성해야 내부 클래스를 생성할 수 있다.
``` java
// (1) 외부 클래스의 인스턴스 생성
Outer outer = new Outer();

// (2) 외부 클래스의 인스턴스를 사용하여 내부 클래스의 인스턴스 생성
Outer.Inner inner = outer.new Inner();
```

# Static Inner Class
`Static 내부 클래스`도 다음과 같이 선언할 수 있다.
``` java
class Outer {
    // Static Inner Class
    static class StaticInner {
    }
}
```
`Static 내부 클래스`는 외부 클래스의 인스턴스를 생성하지 않고도 내부 클래스의 인스턴스를 생성할 수 있다.
``` java
// 외부 클래스의 인스턴스를 생성하지 않고도 내부 클래스의 인스턴스 생성
Outer.StaticInner staticInner = new Outer.StaticInner();
```
