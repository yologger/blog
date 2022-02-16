---
title: "Set, HashSet, TreeSet"
lang: ko
showOnSidebar: true
---

# 컬렉션 프레임워크
Java API는 같은 타입의 여러 데이터를 한꺼번에 효율적으로 관리하기 위해 `컬렉션 프레임워크(Collection Framework)`를 지원한다. 
![](./180115_collection_set/1.png)

컬렉션 프레임워크는 `java.util` 패키지에 포함되어있으며, 가장 중요한 요소는 `List`, `Set`, `Map`이다.

## Set
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
Set은 Interface이므로 인스턴스를 생성할 수 없다. 따라서 Set의 구현체가 필요하다. 다행히 자바 API에서는 `HashSet`, `TreeSet`, `LinkedHashSet`이라는 구현체를 제공한다. 

## HashSet
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

## TreeSet
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

## LinkedHashSet
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

## HashSet vs. LinkedHashSet
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


## HashSet vs. TreeSet
`HashSet`은 내부적으로 Hash Table을 통해 구현되어있다. 따라서 데이터를 삽입, 삭제하거나 포함여부를 확인할 때 `O(1)`의 시간복잡도를 가진다. 또한 데이터가 임의의 순서로 배치된다.

반면 `TreeSet`은 내부적으로 Binary Search Tree를 통해 구현되어있다. 따라서 데이터를 삽입, 삭제하거나 포함 여부를 확인할 때 `O(log n)`의 시간복잡도를 가진다. 또한 Binary Search Tree를 사용하기 때문에 데이터가 정렬된다.  

데이터의 삽입, 삭제, 포함여부 확인이 빈번할 때는 `HashSet`을 사용한다. 반면 순서 보장이나 정렬이 필요하면 `LinkedHashSet`이나 `TreeSet`을 사용한다.

## Set 깊은 복사
`Set`의 깊은 복사는 다음과 같이 할 수 있다.
``` java
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