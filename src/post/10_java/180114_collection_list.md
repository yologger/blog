---
title: "List, Vector, ArrayList, LinkedList"
lang: ko
showOnSidebar: true
---

# 컬렉션 프레임워크
Java API는 같은 타입의 여러 데이터를 한꺼번에 효율적으로 관리하기 위해 `컬렉션 프레임워크(Collection Framework)`를 지원한다. 
![](./180114_collection_list/1.png)

컬렉션 프레임워크는 `java.util` 패키지에 포함되어있으며, 가장 중요한 요소는 `List`, `Set`, `Map`이다.

## List
배열은 생성할 때 크기가 결정된다. 따라서 배열이 생성되면 동적으로 데이터를 추가하거나 삭제할 수 없다. 데이터를 동적으로 추가, 삭제하려면 `List`를 사용해야한다.

컬렉션 프레임워크가 제공하는 `List`의 정의는 다음과 같다.
``` java
public interface List<E> extends Collection<E> {
    int size();
    boolean isEmpty();
    boolean contains(Object o);
    boolean add(E e);
    boolean remove(Object o);
    E set(int index, E element);
    E get(int index);
    ...
}
``` 
`List`는 Interface이므로 인스턴스를 생성할 수 없다. 따라서 List의 구현체가 필요하다. 다행히 자바 API에서는 `Vector`, `ArrayList`, `LinkedList` 등 다양한 구현체를 제공한다.

## Vector
`Vector`는 다음과 같이 선언하고 초기화한다.
``` java
List<String> vector = new Vector<String>();
```
다음과 같이 요소를 추가한다.
``` java
vector.add("Joey");
vector.add("Chandler");
vector.add("Ross");

System.out.println(vector.toString());   // [Joey, Chandler, Ross]
```
다음과 같이 요소를 삭제할 수 있다.
``` java
// 인덱스로 삭제
vector.remove(0);

// 요소로 삭제
vector.remove("Ross");
```
요소 값을 변경할 수 있다.
``` java
vector.set(0, "Rachel");
```
요소 값에 접근할 수 있다.
``` java
System.out.println(vector.get(0));   // Joey
```

## ArrayList
`ArrayList`는 가장 많이 사용되는 List의 구현체다. ArrayList는 다음과 같이 선언하고 초기화한다.
``` java
List<String> list = new ArrayList<String>();
```
다음과 같이 요소를 추가한다.
``` java
list.add("Ronaldo");
list.add("Benzema");
list.add("Bale");

System.out.println(list.toString());    // [Ronaldo, Benzema, Bale]
``` 
다음과 같이 요소를 삭제할 수 있다.
``` java
list.remove(0);

list.remove("Ronaldo");
```
요소 값을 변경할 수 있다.
``` java
list.set(0, "Son");

System.out.println(list.toString());    // [Son, Bale]
``` 
요소 값에 접근할 수 있다.
``` java
System.out.println(list.get(0));        // Son
```

## LinkedList
`LinkedList`는 다음과 같이 선언하고 초기화한다.
``` java
List<String> linkedList = new LinkedList<String>();
```
다음과 같이 요소를 추가한다.
``` java
linkedList.add("Chandler");
linkedList.add("Ross");
linkedList.add("Joey");

System.out.println(linkedList.toString());  // [Chandler, Ross, Joey]
```
요소를 삭제할 수 있다.
``` java
linkedList.remove("Ross");

linkedList.remove(0);
```
요소를 변경할 수 있다.
``` java
linkedList.set(0, "Monica");
```
요소 값에 접근할 수 있다.
``` java
linkedList.get(1);
```

## Vector vs. ArrayList
`Vector`는 동기화가 되어있다. 다시 말해 한 순간에 하나의 스레드만 접근할 수 있기 때문에 <u>스레드 안전(Thread Safe)</u>이라고 한다. 반면 `ArrayList`는 동기화되지 않았기 때문에 동시에 여러 스레드가 접근할 수 있다.

`Vector`는 동기화가 되어있는 대신 속도가 느리다. 반면 `ArrayList`는 동기화가 되지 않았기 때문에 속도가 빠르다.

따라서 싱글 스레드 환경에서는 `ArrayList`를 사용하고 멀티 스레드 환경에서는 `Vector`를 사용하는 것이 바람직하다.

## ArrayList vs. LinkedList
`ArrayList`는 내부적으로 배열을 사용한다. 
``` java ArrayList.java
public class ArrayList<E> {
    // ...
    transient Object[] elementData; 
    private int size;
}
```
ArrayList를 생성할 때 크기가 고정된 배열을 생성한다. 그리고 고정된 배열이 꽉 차면 더 큰 크기의 새로운 배열을 생성하고 복사한다.

반면 `LinkedList`는 내부적으로 `Node`를 사용한다.
``` java LinkedList
public class LinkedList<E> {
    transient int size = 0;
    transient Node<E> first;
    transient Node<E> last;
}
``` 

보통 데이터를 순차적으로 추가, 삭제하는 경우 `ArrayList`가 더 빠르다. 반면 데이터를 중간에 추가, 삭제하는 경우 `LinkedList`가 더 빠르다. 따라서 상황에 따라 적절한 것을 선택하자.

## List 깊은 복사 하기
`List`의 깊은 복사는 다음과 같이 할 수 있다.
``` java
List<Integer> list = new ArrayList<Integer>();
list.add(1);
list.add(2);
list.add(3);

// 깊은 복사
List<Integer> copy = new ArrayList<Integer>(list);
copy.add(4);

System.out.println(list.toString());    // [1, 2, 3]
System.out.println(copy.toString());    // [1, 2, 3, 4]
System.out.println(list.hashCode());    // 30817
System.out.println(copy.hashCode());    // 955331
```

## List를 특정 크기의 값으로 초기화하기
`Collections`클래스의 `nCopies()`메소드를 사용하면 `List`를 특정 크기의 값으로 쉽게 초기화할 수 있다.
``` java
List<Integer> list = new ArrayList<Integer>(Collections.nCopies(10, 1));

System.out.println(list.toString());    // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
```