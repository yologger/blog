---
title: "[Java 8] Reactive Stream API, Reactor"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

## Reactive Stream API
`Reactive Stream API`는 비동기 데이터 처리를 위한 표준이다. Reactive Stream API는 아주 간단한 API로 구성되어있다.
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
Reactive Stream API는 그저 스펙(Specification)이기 때문에 이를 구현한 구현체(Implementation)이 필요하다. Reactive Stream API를 구현한 구현체에는 대표적으로 두 가지가 있다.
- ReactiveX (Rxjava, RxKotlin)
- Reactor

## Reactor
`Reactor`는 `Flux`, `Mono`라는 두 가지의 Publisher를 제공한다. `Flux`는 0-N개의 결과값을 방출하고 `Mono`는 0 또는 1개의 결과값을 방출한다.

 `Reactor`를 사용하려면 다음 의존성을 추가해야한다.
``` groovy 
// build.gradle
implementation "io.projectreactor:reactor-core:${reactor_version}"
```

## Flux 사용법
`Flux`클래스에는 `Flux`를 생성하기 위한 다양한 메소드가 존재한다.

### Flux.create()
``` java
import reactor.core.publisher.Flux;

Flux<Integer> flux = Flux.create(emitter -> {
    emitter.next(1);
    emitter.next(2);
    emitter.next(3);
    emitter.complete();
});

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

### Flux.generate()
``` java
import reactor.core.publisher.Flux;

Flux<Integer> flux = Flux.generate(generator -> {
    generator.next(1);
    generator.complete();
});

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
onComplete
```

### Flux.just()
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

###  Flux.range()
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

### Flux.fromArray()
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

### Flux.fromIterable()

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
### Flux.never()

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
### Flux.empty()

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
### Flux.error()

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

## Mono 사용법
`Mono`는 0 또는 1개의 결과값을 방출한다.

### Mono.generate()
``` java
Mono<Integer> mono = Mono.create((sink) -> {
    sink.success();
});

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
``` java
Mono<Integer> mono = Mono.create((sink) -> {
    sink.success(1);
});

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

### Mono.just()
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

### Mono.never()
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

### Mono.empty()
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
### Mono.error()
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