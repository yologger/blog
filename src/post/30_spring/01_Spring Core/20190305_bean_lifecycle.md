---
title: "Bean의 생명주기"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

# Bean의 생명주기
`Spring IoC Container`는 `Bean`의 생성, 사용, 소멸을 제어하고 관리하며, `Bean`은 생명주기를 가지고 있다고 한다. `Bean`의 생명주기는 두 가지 방법으로 탐지할 수 있다.

- `InitializingBean`, `DispoableBean` 인터페이스
- `@PostConstruct`, `@PreDestory` 어노테이션

## InitializingBean, DispoableBean
`InitializingBean`, `DispoableBean` 인터페이스를 구현하고 `afterPropertiesSet()`, `destroy()` 메소드를 구현하면 Bean의 생성과 소멸을 탐지할 수 있다.
``` java {1}
class Person implements InitializingBean, DispoableBean{
    
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
`@PostConstruct`어노테이션을 추가한 메소드는 Bean이 생성될 때 호출된다. 비슷하게 `@PreDestory`어노테이션을 추가한 메소드는 Bean이 소멸할 때 호출한다.
``` java {3,8}
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