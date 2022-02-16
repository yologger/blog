---
title: "제네릭(Generic)이란"
lang: ko
showOnSidebar: true
---

## 제네릭이란?
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

{% alert danger icon %}
오류는 <u>컴파일 타임</u>에서 찾아내는 것이 가장 좋다. <u>런타임</u>에 오류가 발생하여 어플리케이션이 다운되면 비즈니스에 큰 문제가 생기기 때문이다.
{% endalert %}

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