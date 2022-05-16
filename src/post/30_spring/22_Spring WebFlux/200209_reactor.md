---
title: "Reactive Stream API과 Reactor"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## Reactive Stream API
`Reactive Stream API`는 비동기 데이터 처리를 위해 Java 8부터 추가된 표준이다. Reactive Stream API는 아주 간단한 인터페이스로 구성되어있다.
``` java
public interface Publisher<T> {
    public void subscribe(Subscriber<? super T> s);
}

public interface Subscriber<T> {
    public void onSubscribe(Subscription s);
    public void onNext(T t);
    public void onError(Throwable t);
    public void onComplete();
}

public interface Subscription {
    public void request(long n);
    public void cancel();
}
```
Reactive Stream API는 그저 스펙(Specification)이기 때문에 이를 구현한 구현체(Implementation)이 필요하다. 대표적인 Reactive Stream API 구현체는 두 가지가 있다. 
- ReactiveX (Rxjava, RxKotlin)
- Reactor

## Reactor
 `Reactor`를 사용하려면 다음 의존성을 추가해야한다.
``` groovy 
// build.gradle
implementation "io.projectreactor:reactor-core:${reactor_version}"
```
Reactor는 `Mono`, `Flux`라는 두 가지의 Publisher를 제공한다.  

## Mono
`Mono`는 0 또는 1개의 결과값을 방출한다.

### Mono 생성과 구독
`Mono`클래스에는 Mono를 생성하기 위한 다양한 메소드가 존재한다.

#### Mono.create()
`Mono.create()`로 Mono를 생성할 수 있다. 

데이터를 0개 발행하는 Mono를 생성해보자.
``` java
Mono<Integer> mono = Mono.create((MonoSink<Integer> monoSink) -> {
    // 데이터 0개 발행
    monoSink.success();
});
```
`Mono.subscribe()`메소드로 Mono를 구독할 수 있다.
``` java
mono
    .subscribe((value) -> {
        // 데이터 수신 시 호출
        System.out.println("onNext: " + value);
    }, (error) -> {
        // 비정상 종료 시 호출
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        // 정상 종료 시 호출
        System.out.println("onComplete");
    });
```
출력 결과는 다음과 같다.
``` text 출력 결과
onComplete
```
데이터를 1개 발행하는 Mono를 생성해보자.
``` java
Mono<Integer> mono = Mono.create((MonoSink<Integer> monoSink) -> {
    // 데이터 1개 발행
    monoSink.success(1);
});
```
``` java
mono
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과
onNext: 1
onComplete
```

#### Mono.just()
`Mono.just()`로 간단하게 Mono를 생성할 수도 있다.
``` java
Mono<Integer> mono = Mono.just(1);

mono
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과
onNext: 1
onComplete
```

#### Mono.empty()
`Mono.empty()`는 아무 데이터도 발행하지 않고 정상 종료하는 Mono를 제공한다.
``` java
Mono<Integer> mono = Mono.empty();

mono
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과
onComplete
```

#### Mono.never()
`Mono.never()`는 아무 데이터도 발행하지 않고 종료하지도 않는 Mono를 제공한다.
``` java
Mono<Integer> mono = Mono.never();

mono
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과

```

#### Mono.error()
`Mono.error()`는 아무 데이터를 발행하지 않고 비정상 종료하는 Mono를 제공한다.
``` java
Mono<Integer> mono = Mono.error(new Throwable("Custom Error"));

mono
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과
enError: Custom Error
```


## Flux
`Flux`는 0-N개의 결과값을 방출한다.

### Flux 생성과 구독
`Flux`클래스에는 Flux를 생성하기 위한 다양한 메소드가 존재한다.

#### Flux.create()
`Flux.create()`로 1, 2, 3을 순차적으로 발행하는 Flux를 생성할 수 있다.
``` java
import reactor.core.publisher.Flux;

Flux<Integer> flux = Flux.create((FluxSink<Integer> sink) -> {
    sink.next(1);
    sink.next(2);
    sink.next(3);
    sink.complete();
});
```
`Flux.subscribe()` 메소드로 Flux를 구독할 수 있다.
``` java
flux
    .subscribe((value) -> {
        // 데이터 수신 시 호출
        System.out.println("onNext: " + value);
    }, (error) -> {
        // 비정상 종료 시 호출
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        // 정상 종료 시 호출
        System.out.println("onComplete");
    });
```
출력 결과는 다음과 같다.
``` text 출력 결과
onNext: 1
onNext: 2
onNext: 3
onComplete
```

#### Flux.just()
``` java
import reactor.core.publisher.Flux;

Flux<Integer> flux = Flux.just(1, 2, 3, 4, 5);

flux
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과
onNext: 1
onNext: 2
onNext: 3
onNext: 4
onNext: 5
onComplete
```

####  Flux.range()
``` java
import reactor.core.publisher.Flux;

Flux<Integer> flux = Flux.range(1, 10);

flux
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과
onNext: 1
onNext: 2
onNext: 3
onNext: 4
onNext: 5
onNext: 6
onNext: 7
onNext: 8
onNext: 9
onNext: 10
onComplete
```

#### Flux.fromArray()
``` java
import reactor.core.publisher.Flux;

Integer[] arr = {1, 2, 3, 4, 5};

Flux<Integer> flux = Flux.fromArray(arr);

flux
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과
onNext: 1
onNext: 2
onNext: 3
onNext: 4
onNext: 5
onComplete
```

#### Flux.fromIterable()

``` java
import reactor.core.publisher.Flux;

List list = new ArrayList<Integer>();
list.add(1);
list.add(2);
list.add(3);

Flux<Integer> flux = Flux.fromIterable(list);

flux
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과
onNext: 1
onNext: 2
onNext: 3
onComplete
```

#### Flux.empty()
`Flux.empty()`는 아무 데이터도 발행하지 않고 정상 종료하는 Flux를 제공한다.
``` java
import reactor.core.publisher.Flux;

Flux<Integer> flux = Flux.empty();

flux
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과
onComplete
```

#### Flux.never()
`Flux.never()`는 아무 데이터도 발행하지 않고 종료하지도 않는 Flux를 제공한다.

``` java
import reactor.core.publisher.Flux;

Flux<Integer> flux = Flux.never();

flux
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과

```
#### Flux.error()
`Flux.error()`는 아무 데이터를 발행하지 않고 비정상 종료하는 Flux를 제공한다.

``` java
import reactor.core.publisher.Flux;

Flux<Integer> flux = Flux.error(new Throwable("Custom Error"));

flux
    .subscribe((value) -> {
        System.out.println("onNext: " + value);
    }, (error) -> {
        System.out.println("enError: " + error.getMessage());
    }, () -> {
        System.out.println("onComplete");
    });
```
``` text 출력 결과
enError: Custom Error
```