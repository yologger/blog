---
title: "Object 클래스"
lang: ko
showOnSidebar: true
---

# java.lang 패키지
`java.lang` 패키지는 자바에서 가장 기본적인 동작을 수행하는 클래스들의 집합이다. 이 패키지에 있는 클래스는 `import`하지 않아도 바로 사용할 수 있다. 

# Object 클래스
`Object`클래스는 모든 자바 클래스의 최고 조상 클래스다. 자바의 모든 클래스는 암시적으로든 명시적으로든 이 클래스를 상속하고 있다. 이 클래스는 `java.lang`패키지에 포함되며, 유용한 여러 메소드를 제공한다.

## equals()
메소드를 호출하는 객체와 인자로 전달받은 객체가 동일한지 여부를 반환한다. 다만 `Object`클래스를 상속하는 클래스에서는 `equals()`을 직접 구현해야한다.
``` java
package com.yologger.example;

class Person {

    String name;

    Person(String name) {
        this.name = name;
    }

    // equal()메소드를 직접 구현
    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Person) {
            Person _person = (Person) obj
            // name 속성 값이 같으면 같은 객체로 취급
            return this.name == _person.name;
        } else {
            return false;
        }
    }
}
```
다음과 같이 인스턴스를 비교할 수 있다.
``` java
Person p1 = new Person("Paul");
Person p2 = new Person("Paul");

boolean result = p1.equals(p2); // true
```
## getClass()
인스턴스의 `클래스 타입`을 반환한다. 
``` java
Person person = new Person("Paul");
System.out.println(person.getClass());  // class com.yologger.app.Person

Phone phone = new Phone();
System.out.println(phone.getClass());   // class com.yologger.app.Phone
```

## hashCode()
`hashcode()`는 객체의 해시코드를 반환한다. 이 함수는 <u>객체의 주소값</u>을 해시함수에 넣어 만든 고유한 정수값을 반환하기 때문에 객체마다 다른 값을 가지고 있다. 따라서 이 해시코드를 사용하여 두 객체가 동일한지 비교할 수 있다.
``` java
Person p1 = new Person("Paul");
Person p2 = p1;
Person p3 = new Person("John");

System.out.println(p1.hashCode());  // 214520509
System.out.println(p2.hashCode());  // 214520509
System.out.println(p3.hashCode());  // 68944050
```
## toString() 메소드
해당 객체의 정보를 문자열로 반환한다.

`toString()`을 구현하지 않은 상태에서 호출하면 아래와 같이 호출된다.
``` java
Person person = new Person("Paul", "London");

System.out.println(person.toString());  // com.yologger.app.Person@cc952bd
```
보통 `toString()`를 개발자가 원하는대로 구현하고 호출한다.
``` java
class Person {

    String name;
    String address;

    Person(String name, String address) {
        this.name = name;
        this.address = address;
    }

    // toString()을 직접 구현
    @Override
    public String toString() {
        return name + " lives in " + address;
    }
}

Person person = new Person("Paul", "London");

System.out.println(person.toString());  // Paul lives in London
```


## 그 외 
그 외에도 `Object` 클래스는 `finalize()`, `notify()`, `notifyAll()`, `wait()` 메소드 등을 제공한다.