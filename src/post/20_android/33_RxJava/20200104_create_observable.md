---
title: "Observable 생성하기"
description: "Observable 생성하기"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents

[[toc]]

# Observable 생성하기
`Observable`은 다양한 방식으로 생성할 수 있습니다.

## just()
`just()`는 인자로 넣은 데이터를 순차적으로 발행하는 `Observable`을 생성합니다.

![](./20200104_create_observable/1.png)

``` kotlin
val observable = Observable.just(1)

val disposable = observable
    .doOnDispose {
        println("doOnDispose")
    }
    .subscribeBy( onNext = { value ->
        println("onNext: ${value}")
    }, onError ={ error ->
        println("onError: ${error}")
    }, onComplete = {
        println("onComplete")
    })

    disposable.dispose()
```
```
onNext: 1
onNext: 2
onNext: 3
onComplete
```
```
1
```
인자에 여러 값을 넣을 수도 있습니다.
``` kotlin
val observable = Observable.just(1, 2, 3, 4, 5)

val disposable = observable
    .doOnDispose {
        println("doOnDispose")
    }
    .subscribeBy( onNext = { value ->
        println("onNext: ${value}")
    }, onError ={ error ->
        println("onError: ${error}")
    }, onComplete = {
        println("onComplete")
    })

    disposable.dispose()
```
```
onNext: 1
onNext: 2
onNext: 3
onNext: 4
onNext: 5
onComplete
```

## empty()
`empty()`는 이벤트를 방출하지 않지만 정상적으로 종료되는 `Observable`을 생성합니다.

![](./20200104_create_observable/2.png)

``` kotlin
val observable = Observable.empty<String>() 

val disposable = observable
    .doOnDispose {
        println("doOnDispose")
    }
    .subscribeBy( onNext = { value ->
        println("onNext: ${value}")
    }, onError ={ error ->
        println("onError: ${error}")
    }, onComplete = {
        println("onComplete")
    })

    disposable.dispose()
```
```
onComplete
```

## never()
`empty()`는 이벤트를 방출하지도 않고 종료되지도 않는 `Observable`을 생성합니다.

![](./20200104_create_observable/3.png)

``` kotlin
val observable = Observable.never<String>()  // onDispose 

val disposable = observable
    .doOnDispose {
        println("doOnDispose")
    }
    .subscribeBy( onNext = { value ->
        println("onNext: ${value}")
    }, onError ={ error ->
        println("onError: ${error}")
    }, onComplete = {
        println("onComplete")
    })

    disposable.dispose()
```
```
doOnDispose
```

## error()
`empty()`는 이벤트를 방출하지도 않고 에러와 함께 종료되는 `Observable`을 생성합니다.

![](./20200104_create_observable/4.png)

``` kotlin
val observable = Observable.error<String>(Exception("This is error"))

val disposable = observable
    .doOnDispose {
        println("doOnDispose")
    }
    .subscribeBy( onNext = { value ->
        println("onNext: ${value}")
    }, onError ={ error ->
        println("onError: ${error}")
    }, onComplete = {
        println("onComplete")
    })

    disposable.dispose()
```
```
onError: java.lang.Exception: This is error
```

## fromArray()
`fromArray()`는 배열을 인자로 받아서 배열의 요소를 방출하는 `Observable`을 생성합니다. 
``` kotlin
val observable = Observable.fromArray(1, 2, 3, 4, 5)

observable
    .subscribe {
        println(it)
    }
```
```
1
2
3
4
5
```

## fromIterable()
`fromIterable`은 `Iterable`클래스를 구현한 객체를 인자로 받아 각 요소를 방출합니다.
``` kotlin
val iterable = listOf<Int>(1, 2, 3, 4, 5)

val observable = Observable.fromIterable(iterable)

observable.subscribe {
    println(iterable)
}
```
```
1
2
3
4
5
```