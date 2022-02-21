---
title: "Java 예외 처리"
lang: ko
showOnSidebar: true
---

# Table of Contents
[[toc]]

# Java 예외 처리
Java의 예외 처리에 대해 알아보자.

## Throwable
Java는 오류가 발생하면 `Error`나 `Exception`을 발생시킨다. `Error`와 `Exception`은 모두 `Throwable`클래스를 상속한다.
![](./180223_exception_handling/1.png)

## Error
`Error`는 코드에서 잡아낼 수 없으며 어플리케이션 자체가 다운된다. 대표적으로 메모리가 부족하여 발생하는 `OutOfMemoryError`, `StackOveflowError`가 있다.

## Exception
`Exception`은 `try-catch`구문으로 잡아낼 수 있으며 프로그램이 다운되지 않도록 처리할 수 있다. 대표적으로 값이 `null`인 변수에 접근하면 발생하는 `NullPointException`이 있다.

아래 코드를 살펴보자.
``` java
Person person = null;

// 값이 null인 변수에 접근하고 있다.
person.printName();
```
값이 `null`인 변수에 접근하고 있다. 위 코드를 실행하면 `NullPointException`이 발생하고 어플리케이션이 다운된다.

## try catch 
이때 `try-catch`구문으로 `Exception`이 발생할 가능성이 있는 부분을 감싸주면 `Exception`이 발생해도 어플리케이션을 다운시키지 않고 에러 처리를 할 수 있다.

``` java
Person person = null;

try {
    // 값이 null인 변수에 접근하고 있습니다.
    person.printName();
} catch (NullPointerException nullPointerException) {
    nullPointerException.printStackTrace();
}
```
개발자가 직접 `Exception`을 정의하고 발생시킬 수 있다.
``` java
class CustomException extends Exception {
    CustomException(String message) {
        super(message);
    }
}
```
직접 `Exception`을 발생시킬 때는 키워드`throw`를 사용한다.
``` java
try {
    throw new CustomException("CustomException");
} catch (CustomException customException) {
    customException.printStackTrace();
}
``` 
`Exception`을 발생시킬 가능성이 있는 함수 뒤에는 키워드`throws`를 사용하여 가능성을 표시할 수 있다.
``` java
void doSomething() throws CustomException {
    throw new CustomException("Custom Exception");
}
```
키워드`throws`가 붙은 함수는 `try-catch`구문 안에서 사용해야한다.
``` java
try {
    doSomething();
} catch (CustomException customException) {
    customException.printStackTrace();
}
```