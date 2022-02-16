---
title: "반복문"
lang: ko
showOnSidebar: true
---

## for
`for`구문은 다음과 같이 사용할 수 있다.
``` java
for (int idx=0; idx<10; idx++) {
    System.out.println(idx);
}
```
`for`구문은 `:`과 함께 사용할 수도 있다.
``` java
Person[] people = {
    new Person("Son", "Korea"),
    new Person("Kane", "England"),
    new Person("Messi", "Argentina")
};

for (Person person: people) {
    person.printName();
}
```
``` text 출력 결과
Son
Kane
Messi
```
## while
`while`구문은 조건이 만족할 때 까지 `블럭({ .. })`을 반복 수행한다.
``` java
int idx = 0;
while (idx < 10) {
    System.out.println(idx);
    idx ++;
}
```