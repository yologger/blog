---
title: "디자인 패턴"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Design Pattern
- 객체지향 프로그래밍 설계를 할 때 자주 발생하는 문제를 피하기 위해 사용되는 패턴

# GoF
- 자주 사용되는 23개의 패턴을 정리한 논문

## 생성 패턴
객체를 생성할 때 사용하는 패턴
### 싱글톤(Singleton)
- 클래스의 인스턴스가 오직 하나만 존재하도록 하는 패턴
- 스프링 코어 같이 의존성 주입을 지원하는 프레임워크에서는 빈을 싱글톤으로 유지하는 기능을 제공한다.
``` java
public class ThemeManager {
    // Instance
    private static ThemeManager instance = new ThemeManager();

    // private construct
    private ThemeManager() {}

    public static ThemeManager getInstance() {
        return instance;
    }
}
```
``` java
ThemeManager themeMgr = ThemeManager.getInstance();
```

### 빌더(Builder)
- 인스턴스를 생성자로 직접 생성하지 않고, 빌더라는 내부 클래스로 간접 생성하는 것
- 생성자의 인자가 많으면 각 인자가 어떠한 의미를 가지는지 알기 어려운데 `Builder`클래스와 `setXXX()` 형태의 메소드로 이를 해결할 수 있다.
- Java에서는 Lombok 라이브러리의 `@Builder` 어노테이션으로 쉽게 구현할 수 있다.

``` java
class Something {

    private Something(int number, String name, double size) {
        //Something 클래스 초기화
    }

    public static class Builder {

        int number=0;
        String name=null;
        double size=0d;

        public Builder() {
            //Builder 초기화
        }

        public Builder setNumber(int number) {
            this.number = number;
            return this;
        }

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setSize(double size) {
            this.size = size;
            return this;
        }

        public Something build() {
            return new Something(number, name, size);
        }
    }
}
```
``` java
Something something = new Something.Builder()
.setNumber(number)
.setName(name)
.setSize(size)
.build();
```

### 팩토리 메소드(Factory Method)


### 추상팩토리(Abstract Factory)

### 프로토타입(Prototype)

## 구조 패턴
객체의 구조를 디자인할 때 사용하는 패턴

### 어댑터(Adapter)

### 퍼사드(Facade)
- Facade는 `건물의 외관 정면`이라는 의미
- 복잡한 내부과정을 대신 처리해주는 Wrapper 클래스를 제공하는 패턴
``` java
class Cpu {
	public void freeze() { ... }
	public void jump(long position) { ... }
	public void execute() { ... }
}
```
``` java
class Memory {
	public void load(long position, byte[] data) {
		...
	}
}
```
``` java
class HardDisk {
	public byte[] read(long lba, int size) {
		...
	}
}
```
``` java
class Computer {

    // ...

	public void startComputer() {
        Cpu cpu = new Cpu();
        Memory memory = new Memory();
        HardDisk hardDisk = new HardDisk();
		cpu.freeze();
		memory.load(BOOT_ADDRESS, hardDisk.read(BOOT_SECTOR, SECTOR_SIZE));
		cpu.jump(BOOT_ADDRESS);
		cpu.execute();
	}
}
```
``` java
Computer facade = new Computer()
facade.startComputer();
```



### 프록시(Proxy)

### 컴포지트(Composite)

### 브릿지(Bridge)
### 데코레이터(Decorator)

### 플라이웨이트(Flyweight)


## 행위 패턴
객체 간 커뮤니케이션을 할 때 사용하는 패턴

### 반복자(Iterator)
- 연속적인 데이터를 동일한 방법으로 쉽게 접근할 수 있도록 도와주는 패턴
- Java에서는 List 같은 Collection들이 `Iterable` 인터페이스를 구현한다. 이 인터페이스에는 `Iterator`가 존재하는데, `Iterator`의 `next()`, `hasNext()` 메소드를 사용하면 동일한 요소들에 반복적으로 접근할 수 있다.
``` java
// Iterable.java
public interface Iterable<T> {
    Iterator<T> iterator();

    // 중략...
}
```
``` java
// Iterator.java
public interface Iterator {
    boolean hasNext();
    Object next();
    void remove();
}
```
``` java
// List.java
public iterface List extends Iterable {
    // ...
}
``` java
List<String> list = new ArrayList(Arrays.asList("a", "b", "c", "d"));
Iterator iterator = list.iterator();

while (iterator.hasNext()) {
    String c = iterator.next();
}
```

### 옵저버(Observer)
- 어떤 클래스에 변화가 일어났을 때, 이를 관찰하고 있는 다른 클래스에가 통보해주는 것.
- 안드로이드의 LiveData, Rxjava의 Observable, Reactor의 Flux같이 `Reactive Programming`에서 많이 사용되는 패턴
``` java
Observable observable = Observable.create(emitter -> {
    emitter.onNext("a")
    emitter.onNext("b")
    emitter.onNext("c")
});

observable.subscribe(new Observer() {

    @Override
    public void onSubscribe(@NonNull Disposable d) {
        // ..
    }

    @Override
    public void onNext(@NonNull Object o) {
        // ..
    }

    @Override
    public void onError(@NonNull Throwable e) {
        // ..
    }

    @Override
    public void onComplete() {
        // ..
    }
});
```

### 책임 연쇄(Chain of Responsibility)

### 전략(Strategy)

### 템플릿 메소드(Template method)

### 중재자(Mediator)

### 메멘토(Memento)

### 커맨드(Command)

### 상태(State)

### 방문자(Visitor)

### 인터프리터(Interpreter)
