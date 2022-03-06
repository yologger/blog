---
title: "Data Structure"
lang: ko
showOnSidebar: true
---

# Data Structure
`Java`로 자료 구조에 대해 공부한 내용을 정리합니다.

## Array

`배열(Array)`는 다음과 같은 특징이 있다.

- 배열이 생성될 때 크기가 고정되며, 크기를 변경할 수 없다.
- 데이터 읽기, 쓰기, 변경은 Random Access가 가능하므로 `O(1)`의 시간 복잡도를 갖는다.
- 물리적으로도 메모리 상에서 근접하게 위치하는 지역성을 갖는다.

Java에서는 다음과 같은 방법으로 1차원 배열을 선언한다.

```java 1차원 배열
int[] numbers = {1, 2, 3, 4, 5};
```


다음과 같은 방법으로 2차원 배열을 선언할 수 있다.

```java 2차원 배열
Integer[][] numbers = {
    { 1, 2, 3 },
    { 4, 5, 6 },
    { 7, 8, 9 }
};
```

## Dynamic Array

`Dynamic Array`는 다음과 같은 특징이 있다.

- 배열의 크기를 변경할 수 있다.
- 보통 Array의 크기가 꽉 차면, 두 배 크기의 새로운 Array를 생성한 후 데이터를 복사한다.

Java에서는 `ArrayList`가 Dynamic Array의 역할을 한다.

``` java ArrayList
import java.util.ArrayList;

ArrayList<Integer> darr = new ArrayList<Integer>();

// 데이터 추가
darr.add(1);
darr.add(2);
darr.add(3);

// 데이터 변경
darr.set(1, 5);

// 데이터 접근
darr.get(1);

// 데이터 삭제
darr.remove(2);
```

## LinkedList
`LinkedList`는 내부적으로 Array를 사용하지 않는다. 대신 다음 노드의 주소값을 저장하는 변수를 노드 내부에 포함한다.
```
import java.util.LinkedList;

public class LinkedList<T> {

    class Node<T> {
        private T data;
        public Node next;
    }

    // ...
}
```
Java에서는 다음과 같이 LinkedList를 사용할 수 있다.
```
List<Integer> linkedList = new LinkedList<Integer>();

// 데이터 추가
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
```

## Stack
`Stack`은 `FILO(First-in, Last-out)`의 자료구조다. Java에서는 다음과 같이 사용할 수 있다.
``` java Stack
import java.util.Stack;

Stack<Integer> stack = new Stack<Integer>();

stack.push(1);
stack.push(2);

stack.pop();    // 2
stack.pop();    // 1
```

## Queue
`Queue`는 `FIFO(First-in, Last-out)`의 자료구조다. Java에서는 `Queue`인터페이스와 `LinkedList`클래스로 구현한다.
``` java Queue
import java.util.Queue;
import java.util.LinkedList;

Queue<Integer> queue = new LinkedList<Integer>();

queue.add(1);
queue.add(2);

queue.remove();    // 1
queue.remove();    // 2
```

## Deque
`Deque`는 Stack과 Queue를 합친 자료구조다. Java에서는 `Deque`인터페이스와 `ArrayDeque`클래스로 구현한다.
``` java Deque
import java.util.Deque;
import java.util.ArrayDeque;

Deque<Integer> deque = new ArrayDeque<Integer>();

deque.addFirst(1);
deque.addLast(2);
deque.addLast(3);

deque.removeFirst();    // 1
deque.removeLast();     // 3
```

## Hash Table
`Hash Table`은 다음과 같은 특징을 가진다.
- Key - Value로 이루어진 자료구조다.
- Key와 Hash Function으로 데이터를 저장할 주소값을 계산한다. 
    `HashFunction(key) = Hash Table의 인덱스`
- 해시 함수의 반환값 = 해시 값 = 해시 주소
- Hash Table에는 해시 값을 저장하며, 보통 고정된 배열로 설계한다.
- `충돌(Collision)`이 발생하지 않도록 잘 설계해야한다.

Java에서는 `Map`인터페이스를 사용한다.
``` java 
import java.util.Map;
import java.util.HashMap;

Map

<Integer, String> map = new HashMap();

map.put(1, "Ronaldo");
map.put(2, "Kane");
map.put(3, "Paul");

map.get(2);
```