---
title: "Java 집합자료형(Collection)"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Java 집합자료형
Java의 `집합자료형(Collection)`에 대해 정리한다.

## 컬렉션 프레임워크
Java API는 같은 타입의 여러 데이터를 한꺼번에 효율적으로 관리하기 위해 `컬렉션 프레임워크(Collection Framework)`를 지원한다. 
![](./180114_collection/1.png)

컬렉션 프레임워크는 `java.util` 패키지에 포함되어있으며, 가장 중요한 요소는 `List`, `Set`, `Map`이다.

## List
배열은 생성할 때 크기가 결정된다. 따라서 배열이 생성되면 동적으로 데이터를 추가하거나 삭제할 수 없다. 데이터를 동적으로 추가, 삭제하려면 <b>`List`</b>를 사용해야한다.

`List`의 특징은 다음과 같다.
- 순서가 있다.
- 중복을 허용한다.

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
<b>`List`</b>는 `Interface`이므로 인스턴스를 생성할 수 없다. 따라서 List의 구현체가 필요하다. 다행히 자바 API에서는 `Vector`, `ArrayList`, `LinkedList` 등 다양한 구현체를 제공한다.

### Vector
<b>`Vector`</b>는 다음과 같이 선언하고 초기화한다.
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

### ArrayList
<b>`ArrayList`</b>는 가장 많이 사용되는 List의 구현체다. `ArrayList`는 다음과 같이 선언하고 초기화한다.
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

### LinkedList
<b>`LinkedList`</b>는 다음과 같이 선언하고 초기화한다.
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

### Vector vs. ArrayList
`Vector`는 동기화가 되어있다. 다시 말해 한 순간에 하나의 스레드만 접근할 수 있기 때문에 <u>스레드 안전(Thread Safe)</u>이라고 한다. 반면 `ArrayList`는 동기화되지 않았기 때문에 동시에 여러 스레드가 접근할 수 있다.

`Vector`는 동기화가 되어있는 대신 속도가 느리다. 반면 `ArrayList`는 동기화가 되지 않았기 때문에 속도가 빠르다.

따라서 싱글 스레드 환경에서는 `ArrayList`를 사용하고 멀티 스레드 환경에서는 `Vector`를 사용하는 것이 바람직하다.

### ArrayList vs. LinkedList
`ArrayList`는 내부적으로 배열을 사용한다. 
``` java ArrayList.java
public class ArrayList<E> {
    transient Object[] elementData; 
    private int size;
    // 생략 ...
}
```
`ArrayList`를 생성할 때 내부적으로 크기가 고정된 배열을 생성한다. 그리고 고정된 배열이 꽉 차면 더 큰 크기의 새로운 배열을 생성하고 복사한다.

반면 `LinkedList`는 내부적으로 `Node`를 사용한다.
``` java LinkedList
public class LinkedList<E> {
    transient int size = 0;
    transient Node<E> first;
    transient Node<E> last;
    // 생략 ...
}
``` 

보통 데이터를 순차적으로 추가, 삭제하는 경우 `ArrayList`가 더 빠르다. 반면 데이터를 중간에 추가, 삭제하는 경우 `LinkedList`가 더 빠르다. 따라서 상황에 따라 적절한 것을 선택하자.

### Array로 List 초기화하기
``` java
List<Integer> list = new ArrayList(Arrays.asList(1, 2, 3, 4, 5));
```

### List를 특정 크기의 값으로 초기화하기
`Collections`클래스의 `nCopies()`메소드를 사용하면 `List`를 특정 크기의 값으로 쉽게 초기화할 수 있다.
``` java{1}
List<Integer> list = new ArrayList<Integer>(Collections.nCopies(10, 1));

System.out.println(list.toString());    // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
```

### List 깊은 복사
다음과 같이 `List`를 깊은 복사할 수 있다.
``` java{7}
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

### List 메소드 정리
#### List.add()
``` java
List<Integer> list = new ArrayList(Arrays.asList(1, 2, 3, 4, 5));
list.add(6);
```
``` java
List<Integer> list = new ArrayList(Arrays.asList(1, 2, 3, 4, 5));
list.add(0, 20);
```

#### List.addAll()
``` java
List<Integer> list1 = new ArrayList(Arrays.asList(1, 2, 3, 4, 5));
List<Integer> list2 = new ArrayList(Arrays.asList(6, 7, 8, 9, 10));

list1.addAll(list2);
System.out.println(list1);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
``` java
List<Integer> list1 = new ArrayList(Arrays.asList(1, 2, 3, 4, 5));
List<Integer> list2 = new ArrayList(Arrays.asList(6, 7, 8, 9, 10));

list1.addAll(0, list2);
System.out.println(list1);  // [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
```

#### List.set()
``` java
List<Integer> list = new ArrayList(Arrays.asList(1, 2, 3, 4, 5));
list.set(0, 10);

System.out.println(list);   // [10, 2, 3, 4, 5]
```

#### List.get()
``` java
List<Integer> list = new ArrayList(Arrays.asList(1, 2, 3, 4, 5));

System.out.println(list.get(0));    // 1
```

#### List.remove()
``` java
List<String> list = new ArrayList(Arrays.asList("Paul", "John", "Smith", "Kane"));
list.remove(0);
list.remove("Kane");
System.out.println(list);    // [John, Smith]
```

#### List.indexOf()
``` java
List<String> list = new ArrayList(Arrays.asList("Paul", "John", "Smith", "Paul"));

System.out.println(list.indexOf("Paul"));       // 0
```
#### List.lastIndexOf()
``` java
List<String> list = new ArrayList(Arrays.asList("Paul", "John", "Smith", "Paul"));

System.out.println(list.lastIndexOf("Paul"));   // 3
```

#### List.size()
``` java
List<String> list = new ArrayList(Arrays.asList("Paul", "John", "Smith", "Paul"));

System.out.println(list.size());           // 4
```

#### List.forEach()
``` java
List<String> list = new ArrayList(Arrays.asList("Paul", "John", "Smith", "Paul"));

list.forEach((String item) -> {
    // ...
});
```

#### List.contains()
``` java
List<String> list = new ArrayList(Arrays.asList("Paul", "John", "Smith", "Paul"));

if (list.contains("Paul")) {
    // ...
}
```

#### List.isEmpty()
``` java
List<String> list = new ArrayList(Arrays.asList("Paul", "John", "Smith", "Paul"));

if (list.isEmpty()) {
    // ...
}
```

#### List.subList()
``` java
List<String> list = Arrays.asList("Paul", "John", "Smith", "Monica", "Chandler", "Ross");
List<String> subList = list.subList(1, 4);      // [John, Smith, Monica]
```

## Set
`Set`은 다음과 같은 특징이 있는 자료구조다.

- 순서가 없다.
- 중복을 허용하지 않는다.

자바 API에서 제공하는 `Set`의 정의는 다음과 같다.
``` java
public interface Set<E> extends Collection<E> {
    int size();
    boolean isEmpty();
    boolean contains(Object o);
    Iterator<E> iterator();
    boolean add(E e);
    boolean remove(Object o);
    boolean removeAll(Collection<?> c);
    void clear();
}
``` 
<b>`Set`</b>은 `Interface`이므로 인스턴스를 생성할 수 없다. 따라서 `Set`의 구현체가 필요하다. 다행히 자바 API에서는 `HashSet`, `TreeSet`, `LinkedHashSet`이라는 구현체를 제공한다. 

### TreeSet
`TreeSet`은 다음과 같이 생성한다.
``` java
Set<Integer> treeSet = new TreeSet<Integer>();
```
다음과 같이 데이터를 추가한다.
``` java
treeSet.add(1);
```
`TreeSet` 역시 중복을 허용하지 않는다.
``` java
Set<Integer> treeSet = new TreeSet<Integer>();

treeSet.add(3);
treeSet.add(1);
treeSet.add(1);
treeSet.add(1);
treeSet.add(2);
treeSet.add(2);

System.out.println(treeSet.toString());     // [1, 2, 3]
```

### HashSet
`HashSet`은 다음과 같이 생성한다.
``` java
Set<Integer> hashSet = new HashSet<Integer>();
```
다음과 같이 데이터를 추가한다.
``` java
hashSet.add(1);
```
`Set`은 중복을 허용하지 않는다. 동일한 데이터를 여러 개 추가해도 한 개만 유지된다.
``` java
Set<Integer> hashSet = new HashSet<Integer>();

hashSet.add(3);
hashSet.add(1);
hashSet.add(1);
hashSet.add(1);
hashSet.add(2);
hashSet.add(2);

System.out.println(hashSet.toString());     // [1, 2, 3]
```

### LinkedHashSet
`LinkedHashSet`은 다음과 같이 생성한다.
``` java
Set<Integer> linkedHashSet = new LinkedHashSet<>();
```
다음과 같이 데이터를 추가한다.
``` java
linkedHashSet.add(1);
```
`LinkedHashSet` 역시 중복을 허용하지 않는다.
``` java
Set<Integer> linkedHashSet = new LinkedHashSet<>();

linkedHashSet.add(3);
linkedHashSet.add(1);
linkedHashSet.add(1);
linkedHashSet.add(2);
linkedHashSet.add(2);

System.out.println(linkedHashSet.toString());   // [3, 1, 2]
``` 

### TreeSet vs. HashSet
`HashSet`은 내부적으로 Hash Table을 통해 구현되어있다. 따라서 데이터를 삽입, 삭제하거나 포함여부를 확인할 때 `O(1)`의 시간복잡도를 가진다. 또한 데이터가 임의의 순서로 배치된다.

반면 `TreeSet`은 내부적으로 Binary Search Tree를 통해 구현되어있다. 따라서 데이터를 삽입, 삭제하거나 포함 여부를 확인할 때 `O(log n)`의 시간복잡도를 가진다. 또한 Binary Search Tree를 사용하기 때문에 데이터가 정렬된다.  

데이터의 삽입, 삭제, 포함여부 확인이 빈번할 때는 `HashSet`을 사용한다. 반면 순서 보장이나 정렬이 필요하면 `LinkedHashSet`이나 `TreeSet`을 사용한다.

### HashSet vs. LinkedHashSet
`HashSet`은 데이터 삽입 순서를 보장하지 않는다.
``` java
Set<Integer> hashSet = new HashSet<Integer>();

hashSet.add(5);
hashSet.add(3);
hashSet.add(1);
hashSet.add(2);
hashSet.add(4);

System.out.println(hashSet.toString());   // [1, 2, 3, 4, 5]
```
반면 `LinkedHashSet`은 데이터 삽입 순서를 보장한다.
``` java
Set<Integer> linkedHashSet = new LinkedHashSet<>();

linkedHashSet.add(5);
linkedHashSet.add(3);
linkedHashSet.add(1);
linkedHashSet.add(2);
linkedHashSet.add(4);

System.out.println(linkedHashSet.toString());   // [5, 3, 1, 2, 4]
```

### Set 깊은 복사
`Set`의 깊은 복사는 다음과 같이 할 수 있다.
``` java {8}
Set<Integer> set = new HashSet<>();
set.add(1);
set.add(2);
set.add(3);
set.add(3);

// 깊은 복사
Set<Integer> copy = new HashSet<>(set);
copy.add(4);

System.out.println(set.toString());     // [1, 2, 3]
System.out.println(copy.toString());    // [1, 2, 3, 4]

System.out.println(set.hashCode());     // 6
System.out.println(copy.hashCode());    // 10
```

### Set의 메소드
#### Set.add()
``` java
Set<Integer> set = new HashSet<>();
set.add(1);
set.add(2);
set.add(3);
set.add(3);

System.out.println(set);    // [1, 2, 3]
```

#### Set.remove()
``` java
set.remove(3);
```

#### Set.contains()
``` java
if (set.contains(3)) {
    // ...
}
```

#### Set.isEmpty()
``` java
if (set.isEmpty()) {
    // ...
}
```

#### Set.size()
``` java
if (set.size() > 10) {
    // ...
}
```

#### Set.forEach()
``` java
set.forEach((Integer element) -> {
    // ...
});
```
``` java
for (Integer element: set) {
    // ...
}
```


## Map
`맵(Map)`은 `키(Key)`와 `값(Value)`으로 구성된 데이터 집합이다. 키를 통해 값을 저장하거나 읽어오거나 변경하거나 삭제할 수 있다. `Map`의 특징은 다음과 같다.

- `키(Key)`에는 중복된 값이 입력될 수 없다.
- `값(Value)`는 중복된 값이 입력될 수 있다.
- 순서가 유지되지 않는다.

 자바 API에서 제공하는 Map의 정의는 다음과 같다.
``` java
public interface Map<K, V> {
    int size();
    boolean isEmpty();
    V get(Object key);
    V put(K key, V value);
    V remove(Object key);
    void putAll(Map<? extends K, ? extends V> m);
    void clear();
    ... 
}
``` 
위에서 보는 것처럼 Map은 Interface이므로 인스턴스를 생성할 수 없다. 따라서 `Map`의 구현체가 필요하다. 다행히 Java API에서는 `HashMap`, `TreeMap`, `LinkedMap`이라는 구현체를 제공한다.

### TreeMap
`TreeMap`은 다음과 같이 선언하고 초기화한다.
``` java
Map<Integer, String> players = new TreeMap<Integer, String>();
```
다음과 같이 데이터를 추가한다.
``` java
players.put(7, "Ronaldo");
players.put(9, "Benzema");
players.put(11, "Bale");

players.toString(); // {7=Ronaldo, 9=Benzema, 11=Bale}
```
다음과 같이 데이터를 변경할 수 있다.
``` java
players.set(7, "Son");

System.out.println(players.toString()); // {7=Son, 9=Benzema, 11=Bale}
```
다음과 같이 데이터를 삭제할 수 있다.
``` java
players.remove(7);
System.out.println(players.toString()); // {9=Benzema, 11=Bale}
```

### HashMap
`HashMap`은 다음과 같이 선언하고 초기화한다.
``` java
Map<Integer, String> players = new HashMap<Integer, String>();
``` 
다음과 같이 데이터를 추가한다.
``` java
players.put(7, "Ronaldo");
players.put(9, "Benzema");
players.put(11, "Bale");

System.out.println(players.toString()); // {7=Ronaldo, 9=Benzema, 11=Bale}
```
다음과 같이 데이터를 변경할 수 있다.
``` java
players.set(7, "Son");

System.out.println(players.toString()); // {7=Son, 9=Benzema, 11=Bale}
```
다음과 같이 데이터를 삭제할 수 있다.
``` java
players.remove(7);

System.out.println(players.toString()); // {9=Benzema, 11=Bale}
```

### LinkedHashMap
`LinkedHashMap`은 다음과 같이 선언하고 초기화한다.
``` java
Map<Integer, String> players = new LinkedHashMap<Integer, String>();
```
다음과 같이 데이터를 추가한다.
``` java
players.put(7, "Ronaldo");
players.put(9, "Benzema");
players.put(11, "Bale");

System.out.println(players.toString()); // {7=Ronaldo, 9=Benzema, 11=Bale}
```
다음과 같이 데이터를 변경할 수 있다.
``` java
players.replace(7, "Son");

System.out.println(players.toString()); // {7=Son, 9=Benzema, 11=Bale}
```
다음과 같이 데이터를 삭제할 수 있다.
``` java
players.remove(7);

System.out.println(players.toString()); // {9=Benzema, 11=Bale}
```

### TreeMap vs. HashMap
`HashMap`은 내부적으로 Hash Table을 통해 구현되어있다. 따라서 데이터를 삽입, 삭제하거나 포함여부를 확인할 때 `O(1)`의 시간복잡도를 가진다. 또한 데이터가 임의의 순서로 배치된다.

반면 `TreeMap`은 내부적으로 Binary Search Tree를 통해 구현되어있다. 따라서 데이터를 삽입, 삭제하거나 포함 여부를 확인할 때 `O(log n)`의 시간복잡도를 가진다. 또한 Binary Search Tree를 사용하기 때문에 데이터가 정렬된다. 

데이터의 삽입, 삭제, 포함여부 확인이 빈번할 때는 `HashMap`을 사용한다. 반면 순서 보장이나 정렬이 필요하면 `LinkedHashMap`이나 `TreeMap`을 사용한다.

### HashMap vs. LinkedHashMap
`HashMap`은 데이터 삽입 순서를 보장하지 않는다.
``` java
Map<Integer, String> hashMap = new HashMap<Integer, String>();

hashMap.put(11, "Bale");
hashMap.put(7, "Ronaldo");
hashMap.put(1, "Courtois");
hashMap.put(9, "Benzema");
hashMap.put(4, "Ramos");
hashMap.put(8, "Kroos");

System.out.println(hashMap.toString()); 
// {1=Courtois, 4=Ramos, 7=Ronaldo, 8=Kroos, 9=Benzema, 11=Bale}
```

반면 `LinkedHashMap`은 데이터 삽입 순서를 보장한다.
``` java
Map<Integer, String> linkedHashMap = new LinkedHashMap<>();

linkedHashMap.put(11, "Bale");
linkedHashMap.put(7, "Ronaldo");
linkedHashMap.put(1, "Courtois");
linkedHashMap.put(9, "Benzema");
linkedHashMap.put(4, "Ramos");
linkedHashMap.put(8, "Kroos");

System.out.println(linkedHashMap.toString()); 
// {11=Bale, 7=Ronaldo, 1=Courtois, 9=Benzema, 4=Ramos, 8=Kroos}
```

### Map 깊은 복사
`Map`의 깊은 복사는 다음과 같이 할 수 있다.
``` java{6}
Map<String, String> map = new HashMap<String, String>();
map.put("name", "Paul");
map.put("nation", "USA");

// 깊은 복사
Map<String, String> copy = new HashMap<String, String>(map);
copy.put("job", "Programmer");

System.out.println(map.toString());     // {nation=USA, name=Paul}
System.out.println(copy.toString());    // {name=Paul, job=Programmer, nation=USA}

System.out.println(map.hashCode());     // -1051088633
System.out.println(copy.hashCode());    // 974907474
```

### Map 메소드 정리
#### Map.put()
``` java
Map<Integer, String> players = new TreeMap<Integer, String>();

players.put(7, "Ronaldo");
players.put(9, "Benzema");
players.put(11, "Bale");
```

#### Map.replace()
``` java
players.replace(7, "Mbappe");
```

#### Map.get()
``` java
Map<Integer, String> players = new TreeMap<Integer, String>();

players.put(7, "Ronaldo");
players.put(9, "Benzema");
players.put(11, "Bale");

String player1 = players.get(7);    // "Ronaldo"
String player2 = players.get(8);    // null
```

#### Map.getOrDefault()
``` java
String player3 = players.getOrDefault(8, "Ramos");  // "Ramos"
```

#### Map.isEmpty()
``` java
if (players.isEmpty()) {
    // ...
}
```

#### Map.containsKey()
``` java
if (players.containsKey(7)) {
    // ...
}
```

#### Map.containsValue()
``` java
if (players.containsValue("Ronaldo")) {
    // ...
}
```

#### Map.keySet()
``` java
Map<Integer, String> players = new TreeMap<Integer, String>();

players.put(7, "Ronaldo");
players.put(9, "Benzema");
players.put(11, "Bale");

for (Integer key: players.keySet()) {
    System.out.println(key);
}
```

## Stack
`Stack`을 사용할 때는 <b>`Stack`</b>클래스를 사용한다.
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
stack.peek();
```
`pop()`으로 가장 위의 요소를 제거하고 반환할 수 있다.
``` java
Integer value = stack.pop();
```

## Queue
`Queue`를 사용할 때는 <b>`Queue`</b>인터페이스와 <b>`LinkedList`</b>클래스로 구현한다.
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
데이터 삽입은 `add()`를 사용한다.
``` java
Queue<Integer> queue = new LinkedList<Integer>();
queue.add(1);

System.out.println(queue.toString());   // [1, 2]
```
`peak()`을 사용하면 가장 처음 들어온 요소에 접근할 수 있다.
``` java
System.out.println(queue.toString());   // [1, 2, 3]

Integer result = queue.peek();          // 1
```
데이터 삭제는 `remove()`를 사용한다.
``` java
System.out.println(queue.toString());   // [1, 2, 3, 4]

System.out.println(queue.remove());     // 1
System.out.println(queue.remove());       // 2

System.out.println(queue.toString());   // [3, 4]
```

## Deque
`Deque`는 <b>`Deque`</b>인터페이스와 <b>`ArrayDeque`</b>로 구현한다.
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

## Heap, Priority Queue
`Heap`과 `Priority Queue`는 데이터를 삽입한 순서에 상관없이 우선순위가 높은 데이터가 먼저 제거되는 자료구조다. <b>`PriorityQueue`</b>클래스로 `Heap`과 `Priority Queue`를 구현할 수 있다.

### 사용법

<b>`PriorityQueue`</b>클래스를 사용하여 생성한다.
``` java
PriorityQueue<Integer> priorityQueue = new PriorityQueue<Integer>();
```
`add()`를 사용하여 Enqueue를 한다.
``` java
priorityQueue.add(3);
priorityQueue.add(1);
priorityQueue.add(7);
priorityQueue.add(4);
priorityQueue.add(9);
priorityQueue.add(5);
```
정렬 기준을 별도로 설정하지 않으면 가장 낮은 값이 높은 우선순위를 갖는다. 따라서 오름차순으로 졍렬된 것과 동일하게 된다.
``` java
System.out.println(priorityQueue.toString());   // [1, 3, 5, 4, 9, 7]
```

`peek()`를 사용하여 우선순위가 가장 높은 데이터에 접근한다.
``` java
System.out.println(priorityQueue.peek());       // 1
```
`remove()`을 사용하여 우선순위가 가장 높은 데이터를 Dequeue한다.
``` java
System.out.println(priorityQueue.toString());   // [1, 3, 5, 4, 9, 7]

System.out.println(priorityQueue.remove());     // 1
System.out.println(priorityQueue.remove());       // 3
System.out.println(priorityQueue.toString());   // [4, 7, 5, 9]
```

### 내림차순 정렬
높은 값에 높은 우선순위를 부여할 수도 있다. `PriorityQueue` 객체를 생성할 때 `Collections.reverseOrder()`를 인자로 전달한다.
``` java
PriorityQueue<Integer> priorityQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
priorityQueue.add(3);
priorityQueue.add(1);
priorityQueue.add(7);
priorityQueue.add(4);
priorityQueue.add(9);
priorityQueue.add(5);

System.out.println(priorityQueue.toString());   // [9, 7, 5, 1, 4, 3]

System.out.println(priorityQueue.remove());     // 9
System.out.println(priorityQueue.remove());       // 7
System.out.println(priorityQueue.toString());   // [5, 4, 3, 1]
```

### 우선순위 기준 직접 지정하기
요소가 객체인 경우 `Comparable` 또는 `Comparator`를 사용하여 정렬 기준을 설정할 수 있다.

`Comparator` 예제는 다음과 같다.
``` java Person.java
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "[name='" + name + "', age=" + age + ']';
    }
}
```
``` java Main.java
PriorityQueue<Person> priorityQueue = new PriorityQueue<Person>(new Comparator<Person>() {
    @Override
    public int compare(Person p1, Person p2) {
        return p1.getAge() - p2.getAge();
    }
});

priorityQueue.add(new Person("Monica", 23));
priorityQueue.add(new Person("Phoebe", 25));
priorityQueue.add(new Person("Rachel", 24));
priorityQueue.add(new Person("Ross", 27));
priorityQueue.add(new Person("Chandler", 26));
priorityQueue.add(new Person("Ross", 22));

System.out.println(priorityQueue.remove().toString());      // [name='Ross', age=22]
System.out.println(priorityQueue.remove().toString());      // [name='Monica', age=23]
System.out.println(priorityQueue.remove().toString());      // [name='Rachel', age=24]
System.out.println(priorityQueue.remove().toString());      // [name='Phoebe', age=25]
System.out.println(priorityQueue.remove().toString());      // [name='Chandler', age=26]
System.out.println(priorityQueue.remove().toString());      // [name='Ross', age=27]
```

`Comparable` 예제는 다음과 같다. 어린 나이에 높은 우선순위를 부여하고 있다.
``` java{1,32-35}
class Person implements Comparable<Person> {

    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "[name='" + name + "', age=" + age + ']';
    }

    @Override
    public int compareTo(Person p) {
        return this.getAge() - p.getAge();
    }
}
```
``` java Main.java
PriorityQueue<Person> priorityQueue = new PriorityQueue<Person>();

priorityQueue.add(new Person("Monica", 23));
priorityQueue.add(new Person("Phoebe", 25));
priorityQueue.add(new Person("Rachel", 24));
priorityQueue.add(new Person("Ross", 27));
priorityQueue.add(new Person("Chandler", 26));
priorityQueue.add(new Person("Ross", 22));

System.out.println(priorityQueue.remove().toString());      // [name='Ross', age=22]
System.out.println(priorityQueue.remove().toString());      // [name='Monica', age=23]
System.out.println(priorityQueue.remove().toString());      // [name='Rachel', age=24]
System.out.println(priorityQueue.remove().toString());      // [name='Phoebe', age=25]
System.out.println(priorityQueue.remove().toString());      // [name='Chandler', age=26]
System.out.println(priorityQueue.remove().toString());      // [name='Ross', age=27]
```

## Collections 클래스
<b>`Collections`</b>클래스는 `List`, `Set`, `Map`처럼 `Collection`인터페이스를 상속한 객체를 조작하기 위한 유용한 메소드들을 제공한다.

### fill()
List의 모든 요소를 특정 값으로 대체한다.
``` java
List list = new ArrayList(Arrays.asList(1, 2, 3, 4));
Collections.fill(list, 5);
System.out.println(list);   // [5, 5, 5, 5]
```

### nCopies()
첫 번째 인자로 전달된 크기의 List를 두 번째 인자로 전달된 객체로 초기화하여 반환한다.
``` java
List list = Collections.nCopies(10, 1);
System.out.println(list);   // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
```
주의할 점은 `Collections.nCopies()`를 불변 리스트를 반환하므로 변경할 수 없다.

### swap()
두 요소를 스왑한다.
``` java
List list = new ArrayList(Arrays.asList(1, 2, 3, 4));

System.out.println(list);   // [1, 2, 3, 4]

Collections.swap(list, 0, 3);

System.out.println(list);   // [4, 2, 3, 1]
```

### emptyList()
빈 불변 List를 반환한다.
``` java
List list = Collections.emptyList();    // UnsupportedOperationException
list.add(1);
```

### emptyMap()
빈 불변 Map을 반환한다.

### emptySet()
빈 불변 Set을 반환한다.

### unmodifiableList()
`List`를 불변 객체로 만들어 반환한다.
``` java
List list = new ArrayList(Arrays.asList(1, 2, 3, 4));
list.add(5);        // Success
List immutable = Collections.unmodifiableList(list);
immutable.add(6);   // Error, UnsupportedOperationException
```

### unmodifiableMap()
`Map`을 불변 객체로 만들어 반환한다.

### unmodifiableSet()
`Set`을 불변 객체로 만들어 반환한다.

### copy()
List를 복사한다. 목적지 List는 출발지 List보다 크거나 같아야한다. 그렇지 않으면 `IndexOutOfBoundsException`가 발생한다.
``` java {3}
List src = new ArrayList(Arrays.asList(1, 1, 1));
List dest = new ArrayList(Arrays.asList(2, 2, 2, 2, 2));
Collections.copy(dest, src);    
System.out.println(dest);       // [1, 1, 1, 2, 2]
```
`Collections.copy()` 대신 다음과 같은 방법으로 배열을 복사할 수도 있다.
``` java
Integer[] arr = {1, 2, 3};
List<Integer> list = new ArrayList<Integer>(Arrays.asList(arr));

// 깊은 복사
List<Integer> copied = new ArrayList<Integer>(list);
copy.add(4);

System.out.println(list.toString());        // [1, 2, 3]
System.out.println(copied.toString());      // [1, 2, 3, 4]
System.out.println(list.hashCode());        // 30817
System.out.println(copied.hashCode());      // 955331
```

### max()
최대값을 반환한다.
``` java
List list = new ArrayList(Arrays.asList(3, 7, 8, 1));
Collections.max(list);  // 8
```

### min()
최소값을 반환한다.
``` java
List list = new ArrayList(Arrays.asList(3, 7, 8, 1));
Collections.min(list);  // 1
```

### addAll()
Collection에 요소들을 추가한다.
``` java
List list = new ArrayList(Arrays.asList(1, 2, 3, 4));
Collections.addAll(list, 5, 6, 7);
System.out.println(list);   // [1, 2, 3, 4, 5, 6, 7]
```

### replaceAll()
특정 요소를 다른 요소로 대체한다.
``` java
List list = new ArrayList(Arrays.asList(1, 1, 1, 2, 2, 2, 2));
Collections.replaceAll(list, 2, 3);
System.out.println(list);   // [1, 1, 1, 3, 3, 3, 3]
```


### binarySearch()
정렬된 List에서 요소를 찾는다.
``` java
List list = new ArrayList(Arrays.asList(1, 2, 3, 4, 5));

System.out.println(Collections.binarySearch(list, 1));      // 0
System.out.println(Collections.binarySearch(list, 4));      // 3
System.out.println(Collections.binarySearch(list, 10));     // -6
```
요소가 검색된 경우 인덱스를, 요소가 존재하지 않으면 음수를 반환한다.

### sort()
`List`를 정렬한다.
``` java
List list = new ArrayList(Arrays.asList(3, 7, 1, 9));
Collections.sort(list);
System.out.println(list);   // [1, 3, 7, 9]
```
요소가 객체인 경우 `sort()`의 두 번째 인자로 `Comparator`를 전달하여 정렬 기준을 지정할 수 있다.
``` java
PriorityQueue<Person> priorityQueue = new PriorityQueue<Person>(new Comparator<Person>() {
    @Override
    public int compare(Person p1, Person p2) {
        return p1.getAge() - p2.getAge();
    }
});
```
또는 요소가 `Comparable` 인터페이스를 구현하고 `compareTo()` 메소드를 오버라이드하여 정렬 기준을 지정할 수 있다.
``` java
class Person implements Comparable<Person> {

    // ...

    @Override
    public int compareTo(Person p) {
        return this.getAge() - p.getAge();
    }
}
```

### reverse()
`List`의 순서를 뒤집는다.
``` java
List list = new ArrayList(Arrays.asList(1, 2, 3, 4, 5));
Collections.reverse(list);
System.out.println(list);   // [5, 4, 3, 2, 1]
```

### shuffle()
요소의 순서를 무작위로 섞는다.
``` java
List list = new ArrayList(Arrays.asList(1, 2, 3, 4, 5));
Collections.shuffle(list);
System.out.println(list);   // [3, 1, 4, 2, 5]
```

### rotate()
두 번째 인자로 전달된 값만큼 배열을 회전시킨다.
``` java
List list = new ArrayList(Arrays.asList(1, 2, 3, 4, 5));
Collections.rotate(list, 2);
System.out.println(list);   // [4, 5, 1, 2, 3]
```