---
title: "[Java 8] Concurrent API"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---


# Concurrent API
Java 8에는 동시성 제어를 위한 `Concurrent API`가 추가되었다. Concurrent API는 `java.util.concurrent`패키지에 포함되어있으며, 이 패키지는 동시성,  멀티 스레드 작업을 위한 다양한 컴포넌트를 제공한다.

## Runnable
Java 8 이전에는 멀티 스레드 작업을 위해 `Runnable` 인터페이스를 사용했다. 이 인터페이스의 코드는 다음과 같다. <u>반환값이 없고 예외를 발생시키지 않는다.</u> 
``` java
public interface Runnable {
    public abstract void run();
}
```

`Runnable`은 보통 다음과 같이 사용한다.
``` java
public class MyRunnable implements Runnable {
    @Override
    public void run() {
        String result = "Called at " + LocalTime.now();
        Thread.sleep(5 * 1000);
        System.out.println(result);
    }
}
```
``` java
public class Main {

    public static void main(String[] args) {
        MyRunnable runnable = new MyRunnable();
        Thread thread = new Thread(runnable);
        thread.start();
    }
}
```


## Callable
Java 8 부터는 `Callable` 인터페이스를 구현하여 멀티 스레드 작업을 할 수 있다. 이 인터페이스의 코드는 다음과 같다. <u>반환값이 있고 예외도 발생시킬 수 있다.</u>
``` java
public interface Callable<V> {
    V call() throws Exception;
}
```
`Callable`은 보통 다음과 같이 사용한다.
``` java
import java.util.concurrent.Callable;

public class MyCallable implements Callable<String> {
    @Override
    public String call() throws Exception {
        Thread.sleep(5 * 1000);
        String result = "Called at " + LocalTime.now();
        return result;
    }
}
```
``` java
import java.util.concurrent.Callable;
import java.util.concurrent.FutureTask;

public class Main {

    public static void main(String[] args){
        MyCallable callable = new MyCallable();
        FutureTask futureTask = new FutureTask(callable);
        Thread thread = new Thread(futureTask);
        thread.start();


        try {
            // 결과가 반환될 때 까지 기다린다.
            System.out.println("result : " + futureTask.get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```
`FutureTask`클래스는 내부적으로 `RunnableFuture`클래스를 상속하며, RunnableFuture클래스는 다시 `Runnable`인터페이스와 `Future`인터페이스를 구현하고있다.
``` java FutureTask.java
public class FutureTask<V> implements RunnableFuture<V> {
    // ...
}
```
``` java RunnableFuture.java
public interface RunnableFuture<V> extends Runnable, Future<V> {
    void run();
}
```
이 때문에 다음과 같은 형태로 `Thread`클래스의 생성자에 인스턴스를 전달할 수 있다.
``` java
MyCallable callable = new MyCallable();
FutureTask futureTask = new FutureTask(callable);
Thread thread = new Thread(futureTask);
```

## Thread Pool
멀티 스레드 환경에서 스레드 개수가 증가하면 스레드 생성과 스케쥴링으로 인한 성능 저하가 발생한다. 이를 해결하기 위해 `스레드 풀(Thread Pool)`이라는 공간에 일정 수의 스레드를 사전에 만들어 사용한다.

스레드 풀의 특징은 다음과 같다.
- 사전에 만들어둔 스레드를 사용하기 때문에 스레드 생성과 스케쥴링 비용일 줄일 수 있다.
- 다 사용한 스레드는 스레드 풀에 반납한다.
- 스레드를 재사용할 수 있다.
- 적절한 수의 스레드를 만드는 것이 중요하다.

`Concurrent API`의 를 통해 스레드 풀을 포함한 다양한 병렬처리를 할 수 있다. `ExecutorService`인터페이스와 `Executors`클래스를 사용하면 스레드 풀을 쉽게 제어할 수 있다.

간단한 예제를 살펴보자.
``` java
public class Main {

    public static void main(String[] args) {

        // 크기가 2인 스레드 풀 생성
        ExecutorService executorService = Executors.newFixedThreadPool(2);

        // 첫 번째 작업
        executorService.submit(new Runnable() {
            @Override
            public void run() {
                System.out.println("Job 1 started at " + LocalTime.now() + "in Thread: " + Thread.currentThread().getName());
                try {
                    Thread.sleep(5 * 1000);
                    System.out.println("Job 1 finished at " + LocalTime.now() + "in Thread: " + Thread.currentThread().getName());
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        // 두 번째 작업
        executorService.submit(new Runnable() {
            @Override
            public void run() {
                System.out.println("Job 2 started at " + LocalTime.now() + " in Thread: " + Thread.currentThread().getName());
                try {
                    Thread.sleep(5 * 1000);
                    System.out.println("Job 2 finished at " + LocalTime.now() + " in Thread: " + Thread.currentThread().getName());
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        // 세 번째 작업
        executorService.submit(new Runnable() {
            @Override
            public void run() {
                System.out.println("Job 3 started at " + LocalTime.now() + " in Thread: " + Thread.currentThread().getName());
                try {
                    Thread.sleep(5 * 1000);
                    System.out.println("Job 3 finished at " + LocalTime.now() + " in Thread: " + Thread.currentThread().getName());
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        // 스레드 풀 종료
        executorService.shutdown();
    }
}
```
우선 크기가 2인 스레드 풀을 다음과 같이 생성하고 있다. `Executors`클래스의 `newFixedThreadPool()`을 호출하면 스레드 풀을 생성할 수 있다.
``` java
ExecutorService executorService = Executors.newFixedThreadPool(2);
```
이제 세 개의 작업을 생성하고 `ExecutorService.submit()`의 인자로 전달하자. 각 작업은 시작 시간을 출력하고 5초 동안 Sleep한 후 종료 시간을 출력한다. 작업은 `Runnable` 또는 `Callable`로 구현한다.
``` java
executorService.submit(new Runnable() {
    @Override
    public void run() {
        // 스레드 이름과 시작 시간
        System.out.println("Job 1 started at " + LocalTime.now() + " in Thread: " + Thread.currentThread().getName());
        try {
            // 5초 동안 Sleep
            Thread.sleep(5 * 1000);
            // 스레드 이름과 종료 시간
            System.out.println("Job 1 finished at " + LocalTime.now() + " in Thread: " + Thread.currentThread().getName());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
});
```
`ExecutorService.submit()`에는 `작업(Runnable)`을 전달한다. 이제 스레드 풀은 작업을 처리하기 위해 스레드 하나를 할당한다.

마지막으로 스레드 풀을 종료시킨다. 
``` java
executorService.shutdown();
```
이제 출력 결과를 살펴보자.
```
Job 1 started at 20:06:11.747462 in Thread: pool-1-thread-1
Job 2 started at 20:06:11.747344 in Thread: pool-1-thread-2
Job 1 finished at 20:06:16.769752 in Thread: pool-1-thread-1
Job 2 finished at 20:06:16.769752 in Thread: pool-1-thread-2
Job 3 started at 20:06:16.771134 in Thread: pool-1-thread-1
Job 3 finished at 20:06:21.773421 in Thread: pool-1-thread-1
```
위 예제는 다음과 같은 순서로 처리된다.
1. 스레드 풀의 크기가 2 이므로 첫 번째 작업과 두 번째 작업은 스레드를 할당받아 동시에 처리된다. 
1. 반면 세 번째 작업은 남은 스레드가 없으므로 `작업 큐(Job Queue)`라는 공간에서 대기한다.
1. 첫 번째 작업 또는 두 번째 작업이 종료되어 스레드를 반환한다.
1. 세 번째 작업은 스레드를 재사용하여 처리된다.

이제 `Concurrent API`에 대해 좀 더 자세히 알아보자.

## 스레드 풀 생성하기
`Executors`클래스는 스레드 풀을 생성하기 위한 다양한 메소드를 제공한다. 모든 메소드는 [이 곳](https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/Executors.html)에서 확인할 수 있다.

- `newFixedThreadPool()`: 
    - 고정 크기의 스레드 풀을 생성한다. 
    - 남은 스레드가 없으면 작업은 `작업 큐(Job Queue)`에서 대기한다.

- `newCachedThreadPool()`
    - 가변 크기의 스레드 풀을 생성한다. 
    - 남은 스레드가 없으면 새로운 스레드를 생성하여 작업에 할당한다.

- `newSingleThreadExecutor()`
    - 크기가 1인 스레드 풀을 생성한다.


## 스레드 풀 실행하기
`ExecutorService`는 스레드 풀에 작업을 할당하기 위한 두 가지 메소드를 제공한다.

### execute()
`execute()`는 다음과 같은 특징이 있다.
- 작업 처리 결과를 반환하지 않는다.
- 작업 처리 도중에 예외가 발생하면 해당 스레드를 종료시키고 새로운 스레드를 생성한다.

`execute()` 예제를 첨부한다.
``` java
ExecutorService executorService = Executors.newSingleThreadExecutor();

executorService.execute(new Runnable() {
    @Override
    public void run() {
        try {
            System.out.println("[" + LocalTime.now() + "]" + " Job started.");
            Thread.sleep(10 * 1000);
            System.out.println("[" + LocalTime.now() + "]" + " Job finished.");
            String result = "This is result";
            System.out.println("[" + LocalTime.now() + "]" + " Result: " + result);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
});

executorService.shutdown();
```
``` text 출력 결과
[21:20:05.142350] Job started.
[21:20:15.154706] Job finished.
[21:20:15.155586] Result: This is result
```

### submit()
`submit()`는 다음과 같은 특징이 있다.
- 작업 처리 결과를 반환할 수 있다.
- 결과는 `Future`클래스로 Wrapping해서 반환된다.
- 작업 처리 도중에 예외가 발생해도 해당 스레드를 종료시키지 않고 다음 작업에 재사용한다.

`submit()` 예제를 첨부한다.
``` java
ExecutorService executorService = Executors.newSingleThreadExecutor();

Future<String> future = executorService.submit(new Callable<String>() {
    @Override
    public String call() throws Exception {
        System.out.println("[" + LocalTime.now() + "]" + " Job started.");
        Thread.sleep(10 * 1000);
        System.out.println("[" + LocalTime.now() + "]" + " Job finished.");
        String result = "This is result";
        return result;
    }
});

try {
    String result = future.get();
    System.out.println("[" + LocalTime.now() + "]" + " Result: " + result);
} catch (InterruptedException e) {
    e.printStackTrace();
} catch (ExecutionException e) {
    e.printStackTrace();
}

executorService.shutdown();
```
``` text 출력 결과
[21:23:27.843158] Job started.
[21:23:37.855516] Job finished.
[21:23:37.857058] Result: This is result
```

## 스레드 풀 종료하기
스레드 풀에 속한 스레드는 기본적으로 Main 스레드가 종료되어도 작업을 처리하기 위해 실행 상태로 남아있다. 따라서 적절한 시점에 스레드 풀을 종료하고 스레드를 해제해야한다.

`ExecutorService`클래스는 스레드 풀을 종료하기 위한 다양한 메소드를 제공한다.
- `shutdown()`
    - 작업 큐에 남아있는 작업이 모두 마무리될 때 까지 기다렸다가 스레드 풀을 종료한다.

- `shutdownNow()`
    - 작업 큐에 작업이 남아있는지와 관계없이 스레드 풀을 종료한다.

- `awaitTermination(long timeout, TimeUnit unit)`
    - timeout 안에 모든 작업을 처리하면 true, 처리하지 못하면 false를 반환한다. 

