---
title: "Stack, Queue, Deque"
lang: ko
showOnSidebar: true
---

# 컬렉션 프레임워크
Java API는 같은 타입의 여러 데이터를 한꺼번에 효율적으로 관리하기 위해 `컬렉션 프레임워크(Collection Framework)`를 지원한다. 
![](./180117_stack_queue_deque/1.png)

컬렉션 프레임워크는 `java.util` 패키지에 포함되어있으며, 가장 중요한 요소는 `List`, `Set`, `Map`이다. 그 밖에도 `Stack`, `Queue`, `Deque` 등의 자료구조를 지원한다.

## Stack
Java에서 Stack을 사용할 때는 `Stack`클래스를 사용한다.
``` java
Stack<Integer> stack = new Stack<Integer>();
```
`push()`로 가장 위에 요소를 추가할 수 있다.
``` java
stack.push(1);
stack.push(2);
stack.push(3);
```
`top`에 있는 요소는 `peek()`로 접근할 수 있다.
``` java
stack.peak();
```
`pop()`으로 가장 위의 요소를 제거하고 반환할 수 있다.
``` java
Integer value = stack.pop();
```

## Queue
Queue는 `Queue`인터페이스와 `LinkedList`클래스로 구현한다.
``` java
public interface Queue<E> extends Collection<E> {
    boolean add(E e);
    boolean offer(E e);
    E remove();
    E poll();
    E element();
    E peek();
}
```
`Queue`는 다음과 같이 생성한다.
``` java
Queue<Integer> queue = new LinkedList<Integer>();
```
Enqueue 작업은 `add()`나 `offer()`를 사용한다.
``` java
Queue<Integer> queue = new LinkedList<Integer>();
queue.add(1);
queue.offer(2);

System.out.println(queue.toString());   // [1, 2]
```
`peak()`을 사용하면 가장 처음 들어온 요소에 접근할 수 있다.
``` java
System.out.println(queue.toString());   // [1, 2, 3]

Integer result = queue.peek();          // 1
```
Dequeue 작업은 `remove()`나 `poll()`을 사용한다.
``` java
System.out.println(queue.toString());   // [1, 2, 3, 4]

System.out.println(queue.remove());     // 1
System.out.println(queue.poll());       // 2

System.out.println(queue.toString());   // [3, 4]
```

## Deque
Java에서 Deque는 `Deque`인터페이스와 `ArrayDeque`로 구현한다.
``` java Deque.java
public interface Deque<E> extends Queue<E> {
    void addFirst(E e);
    void addLast(E e);
    E removeFirst();
    E removeLast();
    E peekFirst();
    E peekLast();
    boolean contains(Object o);
    // ...
}
```
데이터 삽입은 다음과 같이 한다.
``` java
Deque<Integer> deque = new ArrayDeque<>();

deque.addLast(1);
deque.addLast(2);
System.out.println(deque.toString());   // [1, 2]

deque.addFirst(5);
deque.addFirst(6);
System.out.println(deque.toString());   // [6, 5, 1, 2]
``` 
데이터 접근은 다음과 같이 한다.
``` java
System.out.println(deque.toString());   // [6, 5, 1, 2]

System.out.println(deque.peekFirst());  // 6
System.out.println(deque.peekLast());   // 2
```
데이터 삭제는 다음과 같이 한다.
``` java
System.out.println(deque.toString());       // [6, 5, 1, 2]

System.out.println(deque.removeFirst());    // 6
System.out.println(deque.removeLast());     // 2

System.out.println(deque.toString());       // [5, 1]
```