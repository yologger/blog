---
title: "[Java 9] 불변 컬렉션"
lang: ko
showOnSidebar: true
---

# Table of Contents
[[toc]]

# Immutable Collection
Java 9에는 `컬렉션(Collection)`을 [불변 객체](/post/10_java/180114_collection.html#list)로 생성할 수 있도록 `List`, `Set`, `Map`에 새로운 메소드들이 추가되었다. 

`Immutable Collection`은 요소의 삽입, 수정, 삭제가 불가능하다. 만약 삽입, 수정, 삭제를 하면 `UnsupportedOperationException`이 발생한다.

## Java 9 이전
Java 9 이전에는 `Collections`클래스의 `unmodifiableList()` 메소드로 Immutable List를 생성한다.
``` java
List<Integer> list = new ArrayList<Integer>();
list.add(1);
list.add(2);
list.add(3);

list = Collections.unmodifiableList(list);

list.add(4);
```
```
Exception in thread "main" java.lang.UnsupportedOperationException
```

`unmodifiableSet()`메소드로 Immutable Set을 생성할 수 있다.
``` java
Set<Integer> set = new HashSet<Integer>();
set.add(1);
set.add(2);
set.add(3);
set.add(3);

set = Collections.unmodifiableSet(set);

set.add(5);
```
```
Exception in thread "main" java.lang.UnsupportedOperationException
```
`unmodifiableMap()`메소드로 Immutable Map을 생성할 수 있다.
``` java
Map<String, String> map = new HashMap<String, String>();
map.put("name", "Paul");
map.put("nation", "USA");
map.put("job", "Programmer");

map = Collections.unmodifiableMap(map);

map.put("address", "New york");
```
```
Exception in thread "main" java.lang.UnsupportedOperationException
```

## Java 9 이후
Java 9부터는 `of()`메소드로 불변 컬렉션을 쉽게 생성할 수 있다.

### Immutable List
``` java
List<Integer> list = List.of(1, 2, 3, 4, 5);

list.add(6);  
```
```
Exception in thread "main" java.lang.UnsupportedOperationException
```
### Immutable Set
``` java
Set<Integer> set = Set.of(1, 2, 3);

set.add(4);
```
```
Exception in thread "main" java.lang.UnsupportedOperationException
```
### Immutable Map
Immmutable Map은 `of()`또는 `ofEntires()`로 생성할 수 있다.
``` java
Map<String, String>  map = Map.of("name", "Paul", "nation", "USA");
```
``` java
Map<String, String>  map = Map.ofEntries(
    Map.entry("name", "Paul"),
    Map.entry("nation", "USA")
);
```