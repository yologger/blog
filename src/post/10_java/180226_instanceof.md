---
title: "instanceOf"
lang: ko
showOnSidebar: true
---

# instanceOf
`instanceOf`는 인스턴스가 특정 클래스의 타입인지 확인할 때 사용한다.
``` java
Person person = new Person("Paul");

if (person instanceof Person) {
    System.out.println("person is instance of Person.");
} else {
    System.out.println("person is not instance of Person.");
}
```