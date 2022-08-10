---
title: "Comparable, Comparator"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]



## Comparator
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

`Comparator`를 사용하면 정렬의 기준을 정의할 수도 있다.
``` java {13-18}
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
Java 8 부터는 다음과 같이 람다식으로 단축할 수 있다.
``` java {10}
Person[] people = {
        new Person("Paul", 35),
        new Person("Monica", 23),
        new Person("Messi", 27),
        new Person("Jessica", 21),
        new Person("David", 40),
        new Person("Martin", 33)
};

Arrays.sort(people, (o1, o2) -> o1.getAge() - o2.getAge());
```


## Comparable
`Comparable` 인터페이스를 구현하는 방법도 있다. `Person`클래스의 `age`속성으로 정렬하도록 `Comparable`을 구현해보자.
``` java Person.java
class Person implements Comparable<Person> {

    // ...

    @Override
    public int compareTo(Person person) {
        return this.age - person.age;
    }
}
```
이제 다음과 같이 사용할 수 있다.
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