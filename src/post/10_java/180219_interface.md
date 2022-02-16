---
title: "인터페이스(Interface)"
lang: ko
showOnSidebar: true
---

# 인터페이스
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