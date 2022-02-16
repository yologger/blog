---
title: "접근 제한자"
lang: ko
showOnSidebar: true
---

# 접근 제한자
접근 제한자는 <u>외부에서 클래스 내부의 메소드나 멤버변수에 접근하는 것을 제한하는 것</u>이다. Java는 `private`, `protected`, `default`, `public`이라는 네 개의 접근 제한자를 지원한다. 접근 제한자는 클래스, 생성자, 메소드, 멤버변수 앞에 붙일 수 있습니다.

## private
`private`가 붙은 멤버변수, 메소드, 생성자는 같은 클래스 안에서만 접근할 수 있다. 클래스에는 붙일 수 없다.
``` java
class Person {

    // private 변수 name
    private String name;

    Person(String name) {
        this.name = name;
    }

    void printName() {
        // 같은 클래스에서는 name에 접근할 수 있다.
        System.out.println(name);
    }
}

Person person = new Person("Paul");

person.name;    // 클래스 외부에서는 접근할 수 없다. 다음과 같은 에러가 발생한다.
// 'name' has private access in Person
```

## protected
`protected`가 붙은 멤버변수, 메소드, 생성자는 같은 패키지 내에서 상속 관계에 있는 자식 클래스에서만 접근할 수 있다. 클래스에는 붙일 수 없다.
``` java
package com.yologger.person;

// 부모 클래스
class Person {

    // protected 변수
    protected String name;

    Person(String name) {
        this.name = name;
    }
}
```
``` java
package com.yologger.person;

// 자식 클래스
class Programmer extends Person {

    Programmer(String name) {
        super(name);
    }

    void printName() {
        // 자식 클래스에서 부모 클래스의 protected 멤버변수에 접근 가능
        System.out.println(name);
    }
}
```

## default
접근 제한자를 생략하면 기본적으로 `default` 접근 제한자가 적용된다. `default`가 붙은 멤버변수, 메소드, 생성자는 동일한 패키지 내 어디서든 접근할 수 있다. `default`는 클래스에도 붙일 수 있다.

`Person`클래스는 `com.yologger.person`패키지에 정의되어있고 접근 제한자는 `default`다.
``` java
package com.yologger.person;

class Person {
    // ...
}
```
따라서 다른 패키지인 `com.yologger.app`에서 접근할 수 없다. 
``` java
package com.yologger.app;

Person person = new Person();   // 다음과 같은 에러가 발생한다. 
// 'com.yologger.person.Person' is not public in 'com.yologger.person'. Cannot be accessed from outside package
```

## public
`public`가 붙은 멤버변수, 메소드, 생성자는 다른 패키지라도 어디에서든 접근이 가능하다.
``` java
package com.yologger.person;

public class Person {
    // ...
}
```
다른 패키지인 `com.yologger.app`에서도 접근할 수 있다. 
``` java
package com.yologger.app;

Person person = new Person();
```
