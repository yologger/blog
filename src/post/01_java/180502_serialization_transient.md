---
title: "직렬화 - Serializable, transient"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# 직렬화
운영체제나 네트워크에는 Java의 객체의 개념이 없다. 그렇다면 어떻게 객체를 운영체제의 파일 시스템에 저장하거나 네트워크로 전송할 수 있을까?

`직렬화(Serialization)`는 객체를 바이트로 변환하여 저장하는 기술을 의미한다. `역직렬화(Deserialization)`는 바이트를 다시 Java 객체로 변환하는 것이다.

## Serializable
직렬화할 클래스는 `Serializable`를 구현해야한다.
``` java Person.java
class Person implements Serializable {
    private String name;
    private String nation;
    private int age;

    public Person(String name, String nation, int age) {
        this.name = name;
        this.nation = nation;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
} 
```

## ObjectInputStream, ObjectOutputStream
직렬화와 역직렬화에는 보통 `ObjectInputStream`, `ObjectOutputStream`을 사용한다.
``` java App.java
import java.io.*;

public class App {

    public static void main(String[] args) {

        FileOutputStream fos = null;
        ObjectOutputStream oos = null;

        FileInputStream fis = null;
        ObjectInputStream ois = null;

        Person original = new Person("Ronaldo", "Portugal", 37);

        try {
            String path = "/Users/yologger/Desktop/folder" + File.separator + "store.txt";

            fos = new FileOutputStream(path);
            oos = new ObjectOutputStream(fos);
            oos.writeObject(original);

            fis = new FileInputStream(path);
            ois = new ObjectInputStream(fis);

            Person result = (Person) ois.readObject();

            System.out.println(result.getName());   // Ronaldo
            System.out.println(result.getNation()); // Portugal
            System.out.println(result.getAge());    // 37

        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            try {
                oos.close();
                fos.close();
                ois.close();
                fis.close();
            } catch(IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

## transient
멤버변수에 `transient`을 붙이면 직렬화 대상에서 제외된다.
``` java Person.java
class Person implements Serializable{

    private String name;
    transient private String nation;
    private int age;

    // ...
}
```
`transient`가 붙은 멤버변수를 역직렬화하면 값이 `null`이 된다.
``` java
System.out.println(result.getName());   // Ronaldo
System.out.println(result.getNation()); // null
System.out.println(result.getAge());    // 37
```