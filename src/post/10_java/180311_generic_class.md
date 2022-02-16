---
title: "제너릭 클래스(Generic Class)"
lang: ko
showOnSidebar: true
---

## 제네릭 클래스
제네릭은 클래스에서 사용할 수 있다. `제네릭 클래스(Generic Class)`는 다음과 같이 정의한다.
``` java
class Box<E> {

    E element;

    Box(E element) {
        this.element = element;
    }

    E getElement() {
        return element;
    }
}
```
`<>`안에는 <u>아직 아직 타입이 결정되지 않음</u>을 의미하는 알파벳 대문자를 넣어준다. 이를 `타입 파라미터(Type Parameter)`라고 한다. 타입 파라미터는 관습적으로 대문자 `E(Element)`, `T(Type)`, `K(Key)`, `V(Value)`등을 사용한다.

이렇게 작성된 타입 파라미터에는 어떠한 타입의 데이터도 들어올 수 있다. 우선 타입 파라미터로 `Integer`를 전달해보자.
``` java
Box<Integer> box1 = new Box<Integer>(1);
```
제네릭 클래스를 정의할 때 사용한 `E`를 `형식 타입 파라미터(Formal type parameter)`라고 한다. 객체를 생성할 때 전달한 실제 자료형 `Integer`는 `실 타입 파라미터(Actual type parameter)`라고 한다.

컴파일러는 <u>타입 파라미터로 전달된 자료형</u>을 <u>클래스 내부의 T</u>로 대체되는 것처럼 인식한다. 마치 아래 코드와 같이 인식하는 것이다.
``` java
class Box {

    Integer element;

    Box(Integer element) {
        this.element = element;
    }

    Integer getElement() {
        return element;
    }
}
```
실 타입 파라미터로 `Integer`뿐만 아니라 `String`, `Person`등 다양한 자료형을 전달할 수 있다.
``` java
// element의 데이터 타입을 String으로 설정
Box<String> box2 = new Box<String>("Hello World");

// element의 데이터 타입을 Person으로 설정
Box<Person> box3 = new Box<Person>(new Person("Paul"));
```
## 제너릭 인터페이스와 제너릭 타입
제너릭은 클래스 뿐만 아니라 인터페이스와도 사용할 수 있다. 이를 `제너릭 인터페이스(Generic Interface)`라고 한다.
``` java
interface Box<E> {
    E element;
    E getElement();
}
```
제너릭 클래스와 제너릭 인터페이스를 합쳐서 `제너릭 타입(Generic Type)`이라고 한다.

## 제너릭 타입과 로 타입
참고로 제너릭을 사용하면 제너릭 타입에 대응하여 `로 타입(Raw Type)`이라는 개념이 등장한다. `로 타입(Raw Type)`은 제너릭을 사용할 때 실 타입 파라미터를 사용하지 않는 것을 의미한다.
``` java
// 제너릭 타입
Box<String> box1 = new Box<String>("Hello World");

// 로 타입
Box box2 = new Box("Hello World");
```
위 코드에서 `Box<String>`는 제너릭 타입이다. 반면 `Box`는 로 타입이다.

제네릭의 큰 장점 중 하나는 컴파일 타임에 타입을 체크하여 타입 안정성을 확보한다는 것이다. 따라서 제네릭을 사용할 때 로 타입의 사용을 권장하지 않는다.

## 제한된 타입 파라미터 (Bounded Type Parameter)
키워드 `extends`를 사용하면 타입 파라미터로 들어오는 데이터의 타입을 제한할 수 있다.
``` java
class Course<T extends Student> {

    private String name;
    private T[] students;

    public Course(String name, int capacity) {
        this.name = name;
        students = (T[]) (new Object[capacity]);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public T[] getStudents() {
        return students;
    }

    public void setStudents(T[] students) {
        this.students = students;
    }

    public void add(T t) {
        for (int i = 0; i < students.length; i++) {
            if (students[i] == null) {
                students[i] = t;
                break;
            }
        }
    }
}
```
`<T extends Student>`가 타입 파라미터를 제한하는 부분이다. `Student`클래스와 이를 상속하는 클래스만 들어갈 수 있다.
``` java
class Student {
    // ...
}

class HighSchoolStudent extends Student {
    // ...
}

class Worker {
    // ...
}
```
``` java
Course course = new Course("Programming", 10);

course.add(new Student("Paul"));    
course.add(new HighSchoolStudent("James"));

course.add(new Worker("John")); // Error
```