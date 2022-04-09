---
title: "Java 제네릭(Generic)"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# 제네릭
`제네릭(Generic)`은 <u>클래스나 메서드 내부에서 사용할 데이터의 자료형을 외부에서 지정하는 것</u>이다. 제네릭을 사용하면 다음과 같은 장점이 있다.

- 타입에 종속되지 않은 유연한 로직
- 타입 안정성
- 자동 형변환 

## 제너릭을 사용하지 않았을 때의 문제점
제네릭을 사용하면 특정 타입에 종속되지 않은 유연한 로직을 구현할 수 있다. 

아래 `Stack`클래스 예제를 살펴보자.
``` java
class Stack {

    private String[] elements;  // String 타입의 배열
    private int size = 0;
    private static final int DEFAULT_SIZE = 16;

    public Stack() {
        elements = new String[DEFAULT_SIZE];
    }

    public void push(String element) {
        elements[size++] = element;
    }

    public String pop() {
        if(size == 0) {
            throw new EmptyStackException();
        }

        String result = elements[--size];
        elements[size] = null;

        return result;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int size() {
        return size;
    }
}
```
`Stack`클래스는 `String`타입의 배열을 멤버변수로 가지고 있다. 따라서 다음과 같이 `String`타입의 데이터만 추가하고 삭제할 수 있다.
``` java
// Stack 생성
Stack stack = new Stack();

// String 타입의 데이터 추가
stack.push("Paul");
stack.push("John");
stack.push("James");

// String 타입의 데이터 삭제
stack.pop();
``` 
이제 `Integer`타입의 데이터를 추가하려고 한다. 그러나 위 `Stack`클래스를 사용할 수는 없다. `Stack`클래스는 `String`타입의 데이터만 입력받고 저장하고 삭제할 수 있기 때문이다. 따라서 별도의 `StackForInteger`클래스를 정의해야한다.
``` java
class StackForInteger {

    private Integer[] elements;
    private int size = 0;
    private static final int DEFAULT_SIZE = 16;

    public Stack() {
        elements = new Integer[DEFAULT_SIZE];
    }

    public void push(Integer element) {
        elements[size++] = element;
    }

    public Integer pop() {
        if(size == 0) {
            throw new EmptyStackException();
        }

        Integer result = elements[--size];
        elements[size] = null;

        return result;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int size() {
        return size;
    }
}
```
이제 `StackForInteger`클래스를 사용해서 `Integer`타입의 데이터를 추가하고 삭제할 수 있게 된다.
``` java
// StackForInteger 생성
StackForInteger stack = new StackForInteger();

// Integer 타입의 데이터 추가
stack.push(1);
stack.push(2);
stack.push(3);

// Integer 타입의 데이터 삭제
stack.pop();
```
이제 `String`, `Integer`뿐만 아니라 더 다양한 타입의 데이터를 취급한다고 가정해보자. 그럼 타입이 추가될 때 마다 새로운 클래스를 정의해야 할까? 바로 이러한 경우 `제네릭`을 사용할 수 있다.


## 장점 1. 특정 타입에 종속되지 않은 유연한 로직
아래 코드는 제네릭을 적용한 `Stack`클래스다.
``` java
class Stack<E> {

    private E[] elements;
    private int size = 0;
    private static final int DEFAULT_SIZE = 16;

    public Stack() {
        elements = (E[])new Object[DEFAULT_SIZE];
    }

    public void push(E element) {
        elements[size++] = element;
    }

    public E pop() {
        if(size == 0) {
            throw new EmptyStackException();
        }

        E result = elements[--size];
        elements[size] = null;

        return result;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int size() {
        return size;
    }
}
```
클래스 이름 옆 `<>`안의 문자`E`를 `타입 파라미터(Type Parameter)`라고 한다. 타입 파라미터는 관습적으로 대문자 `E(Element)`, `T(Type)`, `K(Key)`, `V(Value)`를 사용한다.

타입 파라미터가 붙어있는 클래스를 `제너릭 클래스`라고 한다. 제너릭 클래스는 인스턴스를 생성할 때 자료형 정보를 타입 파라미터에 전달한다.

우선 타입 파라미터로 `String`을 전달하여 Stack을 생성해보자
``` java
// Stack 생성
Stack<String> people = new Stack<String>();
```
이제 `String`타입의 데이터를 추가할 수 있다.
``` java
// 문자열 데이터 추가
people.push("Paul");
people.push("John");
people.push("James");
```
타입 파라미터로 `Integer`를 전달하여 새로운 Stack을 생성하자.
``` java
// Stack 생성
Stack<Int> scores = new Stack<Int>();
```
이제 `Integer`타입의 데이터도 추가할 수 있다.
``` java
// 문자열 데이터 추가
scores.push(1);
scores.push(2);
scores.push(3);
```
이처럼 제네릭을 사용하면 특정 타입에 종속되지 않은 유연한 로직을 작성할 수 있다.

## 장점 2. 타입 안정성
`타입 안정성`은 <u>런타임에 발생할 에러를 컴파일 타임에 찾아낼 수 있음</u>을 의미한다.

예제를 살펴보자. 자바 API에서 기본적으로 제공하는 `ArrayList`를 쉽고 간단하게 재구현하고 있다.
``` java
class CustomArrayList {

    private int size;
    private Object[] elementData = new Object[5];

    public void add(Object value) {
        elementData[size++] = value;
    }

    public Object get(int idx) {
        return elementData[idx];
    }
}
```
이제 `CustomArrayList`의 인스턴스를 생성하고 <u>정수형</u> 데이터를 넣어보자.
``` java
CustomArrayList list = new CustomArrayList();

list.add(10)
list.add(20)

Integer value = (Integer) list.get(0)
```
컴파일도 잘 되고 런타임에서도 잘 동작하는 것을 확인할 수 있다. `add()`메소드는 매개변수로 `Object`타입의 데이터를 입력받기 때문이다.

이제 `add()`메소드에 <u>문자열</u> 데이터를 전달해보자.
``` java
CustomArrayList list = new CustomArrayList();

list.add("10")
list.add("20")

Integer value = (Integer) list.get(0)
```
`add()`메소드는 매개변수로 `Object`타입의 데이터를 입력받기 때문에 문법적으로는 아무런 문제가 없고 컴파일도 정상적으로 수행된다. 그러나 실행을 하면 런타임에서 다음과 같은 오류가 발생한다.
```
Exception in thread "main" java.lang.ClassCastException: java.lang.String cannot be cast to java.lang.Integer
```
형 변환이 제대로 이루어지지 않았다는 오류 메시지다. 

::: warning
오류는 <u>컴파일 타임</u>에서 찾아내는 것이 가장 좋다. <u>런타임</u>에 오류가 발생하여 어플리케이션이 다운되면 비즈니스에 큰 문제가 생기기 때문이다.
:::

이러한 문제점을 해결하는데 제네릭을 사용할 수 있다. 제네릭을 사용하여 `CustomArrayList`를 정의해보자.
``` java
class CustomArrayList<T> {

    private Object[] elementData = new Object[5];
    private int size;

    public void add(T value) {
        elementData[size++] = value;
    }

    public T get(int idx) {
        return (T) elementData[idx];
    }
}
```
이제 인스턴스를 생성할 때 자료형을 전달하면, 컴파일러는 <u>타입 파라미터로 전달된 자료형</u>을 <u>클래스 내부의 타입 파라미터 T</u>로 대체되는 것처럼 인식하게 된다.
``` java
CustomArrayList<Integer> list = new CustomArrayList<Integer>();
list.add(10);
list.add(20);

Integer value = list.get(0)
```
또한 잘못된 타입의 데이터를 입력하면 컴파일 시점에 오류를 탐지하여 타입 안정성을 높여줄 수 있다.
``` java
CustomArrayList<Integer> list = new CustomArrayList<Integer>();

list.add("10");  // 컴파일 시점에 다음과 같은 에러가 발생한다.
```

## 장점 3. 자동 형변환
제네릭을 사용하면 자동으로 형변환을 해준다는 장점이 있다. 제네릭을 사용하지 않은 `CustomArrayList`클래스를 다시 살펴보자.
``` java
class CustomArrayList {

    private int size;
    private Object[] elementData = new Object[5];

    public void add(Object value) {
        elementData[size++] = value;
    }

    public Object get(int idx) {
        return elementData[idx];
    }
}
```
메소드 `get()`은 `Object`타입의 데이터를 반환한다. 따라서 값을 사용하려면 형 변환을 해야한다.
``` java
CustomArrayList list = new CustomArrayList();

list.add(10)
list.add(20)

Integer value = (Integer) list.get(0)   // 형 변환
```
이제 제네릭을 사용하여 `CustomArrayList`클래스를 정의해보자.
``` java
class CustomArrayList<T> {

    private Object[] elementData = new Object[5];
    private int size;

    public void add(T value) {
        elementData[size++] = value;
    }

    public T get(int idx) {
        return (T) elementData[idx];
    }
}
```
제네릭을 사용하면 별도의 형 변환이 필요없다.
``` java
CustomArrayList<Integer> list = new CustomArrayList<Integer>();
list.add(10);
list.add(20);

Integer value = list.get(0);    // 형 변환 필요없음
``` 

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

## 제너릭 인터페이스
제너릭은 클래스 뿐만 아니라 인터페이스와도 사용할 수 있다. 이를 `제너릭 인터페이스(Generic Interface)`라고 한다.
``` java
interface Box<E> {
    E element;
    E getElement();
}
```

## 제너릭 타입
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

## 제한된 타입 파라미터 
키워드 `extends`를 사용하면 타입 파라미터로 들어오는 데이터의 타입을 제한할 수 있다. 이를 `제한된 타입 파라미터 (Bounded Type Parameter)`이라고 한다.
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

## 제너릭 함수
제네릭은 클래스 뿐만 아니라 함수에서도 사용할 수 있다. 함수의 선언부에 타입 파라미터를 사용할 수 있으며, 이러한 함수를 `제너릭 함수(Generic Function)`라고 한다.

반환값이 없는 제너릭 함수는 다음과 같이 정의하고 사용한다. 함수의 반환 타입 앞에 타입 파라미터를 적어주면 된다.
``` java
<T> void printElement(ArrayList<T> list) {
    for (int i=0; i<list.size(); i++) {
        System.out.println(list.get(i).toString());
    }
    return;
}
```
이렇게 정의한 제너릭 함수는 다음과 같이 호출할 수 있다.
``` java
ArrayList<Integer> numbers = new ArrayList<Integer>();
numbers.add(1);
numbers.add(2);
numbers.add(3);

printElement(numbers);
```
``` java
ArrayList<String> players = new ArrayList<String>();
players.add("Paul");
players.add("John");
players.add("Smith");

printElement(players);
```

반환값이 있는 제너릭 함수는 다음과 같이 정의하고 사용한다. 
``` java
<T> T getFirstElement(ArrayList<T> list) {
    return list.get(0);
}
```

제너릭 클래스 안에서 제너릭 함수를 사용할 땐 주의해야한다. 아래 코드를 살펴보자.
``` java
class Manager<T> {
    <T> void printElements(ArrayList<T> list) {
        for (int i=0; i<list.size(); i++) {
            System.out.println(list.get(i).toString());
        }
        return;
    }
}
```
`Manager<T>`의 `T`와 `<T> void printElements(ArrayList<T> list)`의 `T`는 서로 다른 타입 파라미터다. 따라서 아래와 같이 타입 파라미터의 문자를 구분하는 것이 권장된다.
``` java
class Manager<T> {
    <E> void printElements(ArrayList<E> list) {
        for (int i=0; i<list.size(); i++) {
            System.out.println(list.get(i).toString());
        }
        return;
    }
}
```

## 와일드 카드
`와일드 카드(Wildcard)`는 <u>제네릭 클래스의 인스턴스를 함수의 인자로 전달할 때, 그 인스턴스의 타입 파라미터를 제한하는 것</u>을 의미한다. 개념이 어렵기 때문에 예제를 통해 살펴보겠다.

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

### extends
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

### super
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

와일드 카드의 종류는 다음과 같다.
- `<? extends T>` 와일드 카드의 상한 제한(upper bound) - T와 그 자손들을 구현한 객체들만 타입 매개변수로 올 수 있다.
- `<? super T>` 와일드 카드의 하한 제한(lower bound) - T와 그 조상들을 구현한 객체들만 타입 매개변수로 올 수 있다.
- `<?>` 타입 매개변수에 제한이 없다.

## 타입 소거
`타입 소거(Type Erasure)`는 <u>컴파일 타임에 제네릭의 타입 파라미터를 구체화된 자료형으로 대체하는 것</u>이다. Java 컴파일러는 소스 코드를 <u>컴파일</u>할 때 타입 소거를 수행한다.

Java 컴파일러는 타입 파라미터가 `Unbounded Type`인지 `Bounded Type`인지에 따라 다른 방법으로 소거한다. 

### Unbounded Type의 타입소거
`Unbounded Type`은 형식 타입 파라미터로 전달되는 실 타입 파라미터의 범위를 제한하지 않은 것을 의미한다. `<T>` 형태의 형식 타입 파라미터를 Unbounded Type이라고 생각하면 된다.

`Unbounded Type` 예제를 살펴보자.
``` java
// 컴파일 전 (타입 소거 전) 
public class Printer<T> {
    public void print(T something) {
        System.out.println(something);
    }
}
``` 
컴파일러는 위 코드를 바이트 코드로 변환하는데, 아래 코드를 바이트 코드로 변환한 것과 동일한 코드가 생성된다.
``` java
// 컴파일 후 (타입 소거 후)
public class Printer {
    public void print(Object something) {
        System.out.println(something);
    }
}
``` 
컴파일러는 형식 타입 파라미터를 소거하고 `Unbounded Type`인 `<T>`를 `Object`로 대치한다.

### Bounded Type의 타입소거
`Bounded Type`은 <u>형식 타입 파라미터로 전달되는 실 타입 파라미터의 범위를 제한한 것</u>이다. `<T extends Something>` 형태의 형식 타입 파라미터를 Unbounded Type이라고 생각하면 된다.

`Bounded Type` 예제를 살펴보자.
``` java
public class Test<T extends Observable<T>> {
    private T data;

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
``` 
컴파일러는 위 코드를 바이트 코드로 변환하는데, 아래 코드를 바이트 코드로 변환한 것과 동일한 바이트 코드가 생성된다.
``` java
public class Test {
    private Observable data;

    public Observable getData() {
        return data;
    }

    public void setData(Observable data) {
        this.data = data;
    }
}
```
타입 파라미터를 포함한 `Observable<T>`는 `Observable`로 소거되었다. `<E extends Something>`은 `Object`가 아닌 `Something`로 대치되는 것이다.
