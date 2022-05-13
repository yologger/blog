---
title: "Bean의 생명주기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Bean의 생명주기
`Spring IoC Container`는 `빈(Bean)`의 생성, 사용, 소멸을 제어하고 관리한다. 이 때문에 빈은 `생명주기(Lifecycle)`를 가지고 있다고 한다. 스프링 프레임워크는 빈의 생명주기를 탐지하는 다양한 방법을 제공한다.

## InitializingBean, DispoableBean
`InitializingBean`, `DispoableBean` 인터페이스를 구현하고 `afterPropertiesSet()`, `destroy()` 메소드를 구현하면 빈의 생성과 소멸을 탐지할 수 있다.
``` java
@Component
class Person implements InitializingBean, DispoableBean {
    
    @Override
    public void afterPropertiesSet() {
        // Bean 초기화 과정(ctx.refresh())에서 호출
    }

    @Override
    public void destroy() {
        // Bean 소멸 과정(ctx.close())에서 호출
    }		
}
```

## @PostConstruct, @PreDestory
`@PostConstruct`어노테이션을 추가한 메소드는 빈이 생성될 때 호출된다. 비슷하게 `@PreDestory`어노테이션을 추가한 메소드는 빈이 소멸할 때 호출한다.
``` java {4,9}
@Component
class Person {
    
    @PostConstruct
    public void initMethod() {
        // Bean이 생성될 때 호출
    }

    @PreDestory
    public void destoryMethod() {	
        // Bean이 소멸할 때 호출
    }
}
```

## initMethod, destroyMethod
`@Configuration`, `@Bean`으로 빈을 등록하는 경우 `@Bean`의 `initMethod`, `destroyMethod`로 생명주기 콜백을 지정할 수 있다.
``` java
public class MailManager {
    // ...

    public void initManager() {
        // ...
    }

    public void destroyManager() {
        // ...
    }
}
```
``` java{4}
@Configuration
public class Config {

    @Bean(initMethod = "initManager", destroyMethod = "destroyManager")
    public MailManager mailManager() {
        return new MailManager();
    }
}
```