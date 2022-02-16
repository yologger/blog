---
title: "제너릭과 타입 소거(Type Erasure)"
lang: ko
showOnSidebar: true
---

# 타입 소거
`타입 소거(Type Erasure)`는 <u>컴파일 타임에 제네릭의 타입 파라미터를 구체화된 자료형으로 대체하는 것</u>이다. Java 컴파일러는 소스 코드를 <u>컴파일</u>할 때 타입 소거를 수행한다.

Java 컴파일러는 타입 파라미터가 `Unbounded Type`인지 `Bounded Type`인지에 따라 다른 방법으로 소거한다. 

## Unbounded Type의 타입소거
`Unbounded Type`은 형식 타입 파라미터로 전달되는 실 타입 파라미터의 범위를 제한하지 않은 것을 의미한다. `<T>` 형태의 형식 타입 파라미터를 Unbounded Type이라고 생각하면 된다.

`Unbounded Type` 예제를 살펴보자.
``` java
// 컴파일 전 (타입 소거 전) 
public class Printer<T> {
    public void print(T something) {
        System.out.println(something);
    }
}
``` 
컴파일러는 위 코드를 바이트 코드로 변환하는데, 아래 코드를 바이트 코드로 변환한 것과 동일한 코드가 생성된다.
``` java
// 컴파일 후 (타입 소거 후)
public class Printer {
    public void print(Object something) {
        System.out.println(something);
    }
}
``` 
컴파일러는 형식 타입 파라미터를 소거하고 `Unbounded Type`인 `<T>`를 `Object`로 대치한다.

## Bounded Type의 타입소거
`Bounded Type`은 <u>형식 타입 파라미터로 전달되는 실 타입 파라미터의 범위를 제한한 것</u>이다. `<T extends Something>` 형태의 형식 타입 파라미터를 Unbounded Type이라고 생각하면 된다.

`Bounded Type` 예제를 살펴보자.
``` java
public class Test<T extends Observable<T>> {
    private T data;

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
``` 
컴파일러는 위 코드를 바이트 코드로 변환하는데, 아래 코드를 바이트 코드로 변환한 것과 동일한 바이트 코드가 생성된다.
``` java
public class Test {
    private Observable data;

    public Observable getData() {
        return data;
    }

    public void setData(Observable data) {
        this.data = data;
    }
}
```
타입 파라미터를 포함한 `Observable<T>`는 `Observable`로 소거되었다. `<E extends Something>`은 `Object`가 아닌 `Something`로 대치되는 것이다.
