---
title: "객체 비교 - Comparable, Comparator"
lang: ko
showOnSidebar: true
---

# Table of Contents
[[toc]]

## Primitive Type 비교하기
Java에서 Primitive Type를 비교할 때는 `==`을 사용한다.
``` java
int a = 10;
int b = 10;
int c = 11;

System.out.println(a == b);     // true
System.out.println(a == c);     // false
```

## Reference Type 비교하기
Reference Type을 비교할 때 `==`를 사용하면 <u>객체의 주소값</u>을 비교한다.
``` java
Person p1 = new Person("Paul");
Person p2 = p1;
Person p3 = new Person("Paul");

System.out.println(p1 == p2);   // true
System.out.println(p1 == p3);   // false
```
객체가 아닌 값을 비교할 때는 [`Object`](/ko/2018/03/03/04_java/180303_object_class/)클래스의 `equals()`메소드를 사용한다. 
``` java
Person p1 = new Person("Paul");
Person p2 = new Person("Monica");
Person p3 = p1;
Person p4 = new Person("Paul");

System.out.println(p1.equals(p2));  // false
System.out.println(p1.equals(p3));  // true
System.out.println(p1.equals(p4));  // true
```
다만 객체에서 `equals()`를 직접 오버라이드 해야한다. 
```java Person.java
public class Person {

    private String name;

    public Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (o instanceof Person) {
            Person _person = (Person) o;
            return this.name == _person.name;
        } else {
            return false;
        }
    }
}
```


## Comparable
배열을 정렬할 때는 기준이 있어야한다. 예를 들어 `Person`클래스가 있다고 가정하자.
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
}
```
이제 `Arrays.sort()`를 사용하여 배열을 정렬하려고 한다. 
``` java Main.java
public class Main {

    public static void main(String[] args) {
        Person[] people = {
                new Person("Paul", 35),
                new Person("Monica", 23),
                new Person("Messi", 27),
                new Person("Jessica", 21),
                new Person("David", 40),
                new Person("Martin", 33)
        };

        Arrays.sort(people);
    }
}
```
`Comparable`인터페이스와 `compareTo()`를 구현하여 정렬의 기준을 정의할 수 있다.
``` java
public interface Comparable<T> {
    public int compareTo(T o);
}
```
이제 `Person`클래스의 `age`속성으로 정렬하도록 `Comparable`을 구현해보자.
``` java Person.java
class Person implements Comparable<Person> {

    // ...

    @Override
    public int compareTo(Person person) {
        return this.age - person.age;
    }
}
```
이제 `Comparrable.compareTo()`을 사용하여 정렬된다.


## Comparator
`Comparator`를 사용하여 정렬의 기준을 정의할 수도 있다.

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
}
```
``` java Main.java
public class Main {

    public static void main(String[] args) {
        Person[] people = {
                new Person("Paul", 35),
                new Person("Monica", 23),
                new Person("Messi", 27),
                new Person("Jessica", 21),
                new Person("David", 40),
                new Person("Martin", 33)
        };

        Arrays.sort(people, new Comparator<Person>() {
            @Override
            public int compare(Person o1, Person o2) {
                return o1.getAge() - o2.getAge();
            }
        });
    }
}
```
