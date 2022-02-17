---
title: "Java 객체지향 프로그래밍"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

# 객체지향 프로그래밍
자바는 모든 대상을 `객체(Object)`로 바라본다. 이러한 점에서 자바는 `객체지향 프로그래밍(Object-oriented Programming)`언어다. 객체지향 프로그래밍을 이해하려면 클래스와 인스턴스에 대해 알아야한다.

## 클래스와 인스턴스
클래스와 인스턴스를 설명할 때 와플 기계와 와플을 예로 든다.
![](./180211_object_oriented_programming/1.png)

`클래스(Class)`는 <u>인스턴스를 만드는 틀</u>, `인스턴스(Instance)`는 <u>클래스로 만든 무언가</u>다. 즉 클래스는 와플 기계, 인스턴스 와플이다. 클래스를 코드로 표현하면 다음과 같다.
``` java
class Waffle {
    // ...
}
```
인스턴스는 다음과 같이 생성한다. 키워드 `new`를 사용하고 클래스 이름 뒤에 `()`를 붙여주면 된다.
``` java
Waffle waffle = new Waffle()
```
이렇게 만든 인스턴스는 `객체(Object)`라고도 한다.

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

## 상속
실생활에서 상속은 자식이 부모의 재산을 물려받는 행위를 뜻한다. 자바에서도 상속은 비슷한 의미로 사용된다. `상속(Inheritance)`은 <u>자식 클래스가 부모 클래스의 멤버변수나 메소드를 그대로 물려받는 것</u>을 의미한다. 이를 통해 코드의 중복을 제거할 수 있다.

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

## 추상 클래스
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


## 인터페이스
<u>모든 메소드가 선언만 있고 구현부가 없는 클래스</u>를 `인터페이스`라고 한다. 인터페이스는 특정 규격을 준수하도록 강제하는데 사용한다.

인터페이스를 선언할 때는 키워드 `interface`를 사용한다. 인터페이스에는 메서드를 선언만 하고 구현은 하지 않는다.
``` java
interface Database {
    void save()
    void delete()
}
```
인터페이스는 인스턴스 생성할 수 없다.
``` java
Database db = new Database();   // 아래와 같은 에러가 발생합니다.
// 'Database' is abstract; cannot be instantiated
```
따라서 인터페이스를 구현해야한다. 인터페이스를 구현한 클래스를 `구현체(Imlementation)`라고 한다. 인터페이스를 구현할 때는 키워드 `implements`를 사용한다.

인터페이스 `Database` 규격을 따르는 클래스 두 개를 구현해보자.
``` java
class MySQL implements Database {

    @Override
    void save() {
        OracleClient client = new OracleClient()
        client.save()
    }

    @Override
    void delete() {
        OracleClient client = new OracleClient()
        client.delete()
    }
}
```
``` java
class Realm implements Database {

    @Override
    void save() {
        Realm realm = new Realm()
        realm.save()
    }

    @Override
    void delete() {
        Realm realm = new Realm()
        realm.delete()
    }
}
```
위 예제에서는 `Database`라는 규격을 따르도록 강제하고있다. 이렇게 하면 `Database`를 사용하는 입장에서 실제 구현체가 무엇인지 신경쓰지 않고 사용할 수 있다. 이를 이처럼 인터페이스에 다양한 구현체를 할당할 수 있는 것을 어려운 용어로 `다형성(Polymorphism)`이라고 한다.

다형성을 예제를 통해 살펴보겠습니다.
``` java
class LoginViewModel implements ViewModel {

    Database db = new MySQL()
    db.save()
    
    db = new Realm()
    db.save()

    // ...
}
```
변수 `db`에 `MySQL`의 인스턴스가 할당되든 `Realm`의 인스턴스가 할당되는 `save()`메소드를 호출할 수 있다. `MySql`클래스와 `Realm`클래스가 `Database`인터페이스의 표준을 따르고 있기 때문이다. 

이처럼 인터페이스와 다형성을 사용하면 유지보수성을 향상시킬 수 있다.


## 내부 클래스
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

## 익명 클래스
다음과 같은 부모 클래스가 있다고 가정하자.
``` java
// 부모 클래스
abstract class Person {
    abstract void doSomething();
}
```
이를 상속한 자식 클래스를 한번만 사용하는 경우, 매번 자식 클래스를 정의하기에는 번거로운 경우가 있다.
``` java
// 자식 클래스를 정의
class Designer extends Person {

    @Override
    void doSomething() {
        System.out.println("Do something.");
    }
}

// 자식 클래스 사용
Person person = new Designer();
person.doSomething();
```

이러한 경우 익명 클래스를 유용하게 사용할 수 있다.
``` java
abstract class Person {
    abstract void doSomething();
}

// 익명 클래스 사용
Person person = new Person() {
    @Override
    public void doSomething() {
        System.out.println("Do something.");
    }
};

person.doSomething();
```
익명 클래스는 안드로이드 어플리케이션 개발에서 이벤트를 처리할 때 많이 사용한다.
``` java
Button loginButton = findViewById(R.id.loginButton);


// 버튼을 눌렀을 때 실행할 코드를 익명 클래스로 등록
loginButton.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        // log in
    }
});
```

## 열거형
`열거형(Enum)`는 <u>서로 관련 있는 상수들을 모아 심볼릭한 명칭의 집합으로 정의하는 것</u>이다.

예를 들어 방향은 동, 서, 남, 북 네 가지로 값의 범위가 한정되어있다. 이러한 경우 열거형을 유용하게 사용할 수 있다. 열거형은 다음과 같이 키워드`enum`을 사용하여 정의한다.

``` java
enum Direction {
    EAST, WEST, SOUTH, NORTH
}
```
열거형의 인스턴스는 다음과 같이 생성할 수 있다.
``` java
Direction direction = Direction.EAST;
```
열거형은 `switch` 구문과 함께 유용하게 사용할 수 있다.
``` java
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

## java.lang 패키지
`java.lang` 패키지는 자바에서 가장 기본적인 동작을 수행하는 클래스들의 집합이다. 이 패키지에 있는 클래스는 `import`하지 않아도 바로 사용할 수 있다. 

## Object 클래스
`Object`클래스는 모든 자바 클래스의 최고 조상 클래스다. 자바의 모든 클래스는 암시적으로든 명시적으로든 이 클래스를 상속하고 있다. 이 클래스는 `java.lang`패키지에 포함되며, 유용한 여러 메소드를 제공한다.

### equals()
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
### getClass()
인스턴스의 `클래스 타입`을 반환한다. 
``` java
Person person = new Person("Paul");
System.out.println(person.getClass());  // class com.yologger.app.Person

Phone phone = new Phone();
System.out.println(phone.getClass());   // class com.yologger.app.Phone
```

### hashCode()
`hashcode()`는 객체의 해시코드를 반환한다. 이 함수는 <u>객체의 주소값</u>을 해시함수에 넣어 만든 고유한 정수값을 반환하기 때문에 객체마다 다른 값을 가지고 있다. 따라서 이 해시코드를 사용하여 두 객체가 동일한지 비교할 수 있다.
``` java
Person p1 = new Person("Paul");
Person p2 = p1;
Person p3 = new Person("John");

System.out.println(p1.hashCode());  // 214520509
System.out.println(p2.hashCode());  // 214520509
System.out.println(p3.hashCode());  // 68944050
```
### toString() 메소드
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

### 그 외 
그 외에도 `Object` 클래스는 `finalize()`, `notify()`, `notifyAll()`, `wait()` 메소드 등을 제공한다.

## static
키워드 `static`은 클래스의 멤버변수와 메소드 앞에 붙일 수 있다. 이 키워드가 붙어있는 멤버변수와 메소드를 `정적 멤버변수`와 `정적 메소드`라고 한다.

정적 멤버변수와 정적 메소드는 다음과 같은 특징이 있다.
- 클래스의 인스턴스를 생성하지 않고도 `정적 메소드`를 호출할 수 있다.
- 클래스의 인스턴스를 생성하지 않고도 `정적 멤버변수`에 접근할 수 있다.
- 클래스의 모든 인스턴스가 `정적 멤버변수`를 공유한다.

예제를 살펴보자. 정적 멤버변수와 정적 메소드는 키워드 `static`을 붙여서 선언한다.
``` java
class Counter {

    // 정적 멤버변수
    static int count = 0;

    // 생성자
    Counter() {

    }

    // 정적 메소드
    static void increment() {
        count++;
    }

    // 정적 메소드
    static void decrement() {
        count--;
    }

    // 정적 메소드
    static void printCount() {
        System.out.println(count);
    }
}
```
정적 멤버변수와 정적 메소드는 다음과 같이 인스턴스를 생성하지 않고도 사용할 수 있다.
``` java
Counter.printCount();   // 0

Counter.increment();
Counter.increment();
Counter.increment();

Counter.printCount();   // 3
```

## 초기화 블록
### 인스턴스 초기화 블록
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

### static 초기화 블록
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

## 접근 제한자
접근 제한자는 <u>외부에서 클래스 내부의 메소드나 멤버변수에 접근하는 것을 제한하는 것</u>이다. Java는 `private`, `protected`, `default`, `public`이라는 네 개의 접근 제한자를 지원한다. 접근 제한자는 클래스, 생성자, 메소드, 멤버변수 앞에 붙일 수 있습니다.

### private
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

### protected
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

### default
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

### public
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
