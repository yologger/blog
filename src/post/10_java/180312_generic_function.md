---
title: "제너릭 함수(Generic Function)"
lang: ko
showOnSidebar: true
---

# 제너릭 함수
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