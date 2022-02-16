---
title: "Map, TreeMap, HashMap"
lang: ko
showOnSidebar: true
---

# 컬렉션 프레임워크
Java API는 같은 타입의 여러 데이터를 한꺼번에 효율적으로 관리하기 위해 `컬렉션 프레임워크(Collection Framework)`를 지원한다. 
![](./180116_collection_map/1.png)

컬렉션 프레임워크는 `java.util` 패키지에 포함되어있으며, 가장 중요한 요소는 `List`, `Set`, `Map`이다.

## Map
`맵(Map)`은 `키(Key)`와 `값(Value)`으로 구성된 데이터 집합이다. 키를 통해 값을 저장하거나 읽어오거나 변경하거나 삭제할 수 있다. 자바 API에서 제공하는 Map의 정의는 다음과 같다.
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

## HashMap
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

## TreeMap
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

## LinkedHashMap
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
players.set(7, "Son");

System.out.println(players.toString()); // {7=Son, 9=Benzema, 11=Bale}
```
다음과 같이 데이터를 삭제할 수 있다.
``` java
players.remove(7);

System.out.println(players.toString()); // {9=Benzema, 11=Bale}
```

## HashMap vs. LinkedHashMap
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
## HashMap vs. TreeMap
`HashMap`은 내부적으로 Hash Table을 통해 구현되어있다. 따라서 데이터를 삽입, 삭제하거나 포함여부를 확인할 때 `O(1)`의 시간복잡도를 가진다. 또한 데이터가 임의의 순서로 배치된다.

반면 `TreeMap`은 내부적으로 Binary Search Tree를 통해 구현되어있다. 따라서 데이터를 삽입, 삭제하거나 포함 여부를 확인할 때 `O(log n)`의 시간복잡도를 가진다. 또한 Binary Search Tree를 사용하기 때문에 데이터가 정렬된다. 

데이터의 삽입, 삭제, 포함여부 확인이 빈번할 때는 `HashMap`을 사용한다. 반면 순서 보장이나 정렬이 필요하면 `LinkedHashMap`이나 `TreeMap`을 사용한다.

## Map 깊은 복사
Map의 깊은 복사는 다음과 같이 할 수 있다.
``` java
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