---
title: "Spring 면접 정리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Spring 면접 정리
`Spring` 면접 내용을 정리합니다.


## Web Server vs. WAS
- `Web Server`는 파일 시스템에 저장된 정적 컨텐츠를 제공한다. 반면 `WAS`는 비즈니스 로직을 수행한 후 동적으로 컨텐츠를 생성하여 제공한다.
- IBM WebSphere 같은 `WAS`는 Web Server, Web Container, EJB Container로 이루어진다.
- Tomcat 같은 `Web container`는 Web Server, Web Container로 이루어진다. 

## Servlet
`Servlet`은 HTTP 요청을 받아 적절한 비즈니스 로직을 수행한 후 응답을 반환하거나 동적으로 웹 페이지를 생성하여 반환하는 Java Web Application의 컴포넌트다.

## Servlet Container
`Servlet Container` 는 Servlet의 생명 주기를 관리한다. 

## Servlet 동작 원리
1. HTTP 요청이 들어오면 Servlet Container는 Servlet에 새로운 스레드를 할당하여 콜백 메소드를 실행한다.
2. Servlet Container는 HTTP 메소드에 따라 `get()` , `post()`, `service()` 를 호출하는데 이때 `HttpServletRequest` 와 `HttpServletResponse` 를 인자로 전달해준다.
3. 콜백 메소드에서 적절한 비즈니스 로직을 수행한 후 웹 페이지나 데이터를 반환한다.

## ServletConfig vs. ServletContext
- `ServletConfig` 는 서블릿 하나에 대한 설정을 가지고 있는 런타임 컨텍스트다. 
- `ServletContext` 는 서블릿 컨테이너에 대한 정보를 가지고 있는 런타임 싱글톤 컨텍스트다. 여러 서블릿이 이 객체를 통해 통신을 하거나 데이터 공유를 할 수 있다.

## Servlet Filter
- `Servlet Filter` 를 사용하면 서블릿이 사용자의 요청을 처리하기 전 필터링하여 특정 작업을 수행할 수 있다. 
- 필터는 Spring Interceptor와 함께 스프링 시큐리티에서 인증 여부, 접근 권한 등을 확인하는데 사용할 수 있다.

## web.xml
톰캣은 Java Web Application을 구동할 때 `web.xml`을 참고하여 서블릿 컨테이너와 서블릿 컨텍스트를 구성한다. 이 파일에는 welcome file, url mapping, servlet listener, servlet filter 등을 선언한다.

## JSP
HTML에 Java 코드를 삽입하여 동적으로 웹 페이지를 생성할 수 있는 언어다. WAS가 JSP를 해석하여 웹 페이지를 반환하는 Servlet으로 변환한다.

## Forward vs. Redirect
둘 다 페이지 전환과 관련이 있다. `Forward` 는 페이지 전환의 주체가 서버다. 클라이언트가 A 페이지를 요청하면 서버는 B 페이지를 응답해준다. 반면 `Redirect` 는 페이지 전환의 주체가 클라이언트다. 클라이언트가 A 페이지를 요청하면 서버는 B 페이지로 이동하라고 응답하고 클라이언트가 다시 B 페이지를 요청한다.

## EJB vs. POJO
- `EJB(Enterprise JavaBeans)` 는 대규모 엔터프라이즈 시스템을 구축하기 위한 표준이다.
- EJB 표준을 따르는 시스템에서 컴포넌트들은 `EJB Container` 에 의해 관리되기 위해 EJB의 특정 클래스를 상속, 구현하거나 어노테이션을 붙여야하며, 이로 인해 컴포넌트들이 무거워진다는 단점이 있다.
- `POJO(Plain Old Java Object)` 는 말 그대로 시스템을 구성하는 컴포넌트들가 특정 클래스를 상속, 구현하거나 어노테이션을 붙일 필요없이 순수한 자바 객체로 정의할 수 있음을 의미하며, 스프링 프레임워크도 이 철학을 따르고 있다. 참고로 스프링 컨테이너에서 관리하는 POJO 객체는 `빈(Bean)` 이라고도 한다.

## 제어의 역전
객체의 생명주기를 Spring IoC Container에 위임하는 것

## 의존성 주입
Spring IoC Container에 관리하는 빈을 코드에 주입하는 것
- 필드 주입
- Setter 주입
- 생성자 주입
- Lombok

## BeanFactory, ApplicationContext
모든 애플리케이션은 런타임에 시시각각 변하는 애플리케이션에 대한 정보를 메모리에 유지하고 있으며, 보통 이 정보의 집합을 `Context` 라고 한다. 스프링 프레임워크의 경우 IoC Container에 이 정보들을 유지하고 있는데 <b>`BeanFactory`</b> 는 이 정보에 접근할 수 있는 인터페이스를 제공한다. 예를 들어 `BeanFactory` 의 `getBean()` 메소드로 컨테이너에서 관리하는 빈을 주입받을 수 있다.

<b>`ApplicationContext`</b> 는 BeanFactory를 상속하며 Profile, Property, Environment, 다국어 처리, 어플리케이션 생명주기 같은 추가적인 기능을 제공하는 인터페이스다.

## @ComponentScan
- 컨테이너에 빈을 등록하는 방법은 크게 두 가지, XML 파일을 이용하거나 어노테이션을 이용하는 것이다.
- 어노테이션을 이용하는 경우 `@Component`, `@Controller`, `@RestController`, `@Service` , `@Repository` 등을 클래스에 붙이면 되는데, `@ComponentScan` 은 이 어노테이션이 붙은 클래스의 경로를 컨테이너에 알려주는 역할을 한다.

## DispatcherServlet
Spring MVC의 핵심 컴포넌트로 사용자의 요청을 받은 후 이를 적절한 컨트롤러로 위임한다. 전면에서 모든 사용자 요청 수신을 전담하기 때문에 `Front Controller` 패턴이라고도 한다.

## ViewResolver
컨트롤러가 반환하는 뷰의 이름을 바탕으로 실제 뷰를 탐색하여 반환한다.

## Spring Interceptor
`Spring Interceptor` 는 DispatcherServlet과 Controller 사이에 위치하며, 요청이 특정 컨트롤러로 들어가기 전 이를 가로채 특정 작업을 수행한다.

## Servlet Filter vs. Spring Interceptor
`ServletFilter` 는 스프링 프레임워크 밖에서 실행되며 ServletDispatcher 이전에 호출된다. 대표적으로 스프링 시큐리티가 인증 및 접근 제어를 위해 ServletFilter를 사용한다. `Spring Interceptor` 는 스프링 프레임워크 안에서 실행되며, ServletDispatcher와 Controller 사이에서 동작한다. 대표적으로 `Spring Validation`의 유효성 검증 어노테이션이 Spring Interceptor를 사용한다.

## AOP 
- Aspect-oriented Programming
- `AOP` 는 공통 기능을 추출하여 별도의 모듈로 만드는 것이다.
- AOP는 에러처리, 트랜잭션, 보안, 로깅 등에 사용된다.
- `@Aspect` 어노테이션을 붙인 구성 클래스에 공통기능을 정의한다.
- `@PointCut` 어노테이션으로 공통기능을 적용할 타겟을 지정한다.
- `@Before` , `@After` , `@Around` 등의 어노테이션을 붙인 어드바이스 메소드에 공통기능을 정의한다.
- `@ControllerAdvice`, `@RestControllerAdvice` 어노테이션도 AOP를 활용한 Global Exception Handler다.
- `@Transactional` 어노테이션도 내부적으로 트랜잭션을 시작하고 커밋하는 코드를 AOP를 사용하여 추가해준다.
- `AOP`는 Spring Interceptor와 Controller 사이에서 동작한다.

## ORM
- Object-Relation Mapping
- 관계형 데이터베이스의 테이블과 객체지향 프로그래밍의 객체를 매핑해주는 기술

## JPA
- Java Persistence API
- Java 진형의 ORM 표준
- JPA는 명세이며, 대표적인 구현체에는 Hibernate가 있다.

## 영속성 컨텍스트
- `영속성 컨텍스트`는 엔티티를 저장하고 관리하는 메모리 상의 공간이다. 
- `EntityManager`로 영속성 컨텍스트에 엔티티를 저장, 수정, 삭제, 조회할 수 있다.

## 영속성 컨텍스트의 장점
영속성 컨텍스트의 장점은 크게 네 가지다.

### 1차 캐시
영속성 컨텍스트는 내부에 `1차 캐시`를 가지고 있다. 1차 캐시는 메모리 영역에 존재하기 때문에 온디스크에 존재하는 데이터베이스에서 엔티티를 조회하는 것보다 훨씬 빠르다.

### 쓰기 지연
엔티티 매니저는 쿼리 저장소라는 공간에 쿼리를 쌓아둔다. 그리고 커밋 시점에 한꺼번에 데이터베이스에 반영하기 때문에 성능을 최적화할 수 있다.

### 변경 감지(Dirty Checking)
JPA에는 엔티티 수정을 위한 별도의 `update()`같은 메소드가 없다. 대신 엔티티를 조회해서 데이터를 변경하면 변경 기능이 동작하여 데이터베이스에 자동으로 반영된다.

### 지연 로딩
엔티티간 연관관계가 존재하는 경우, 처음부터 연관된 엔티티들을 모두 영속성 컨텍스트에 올려두는 것은 비효율적이다. `지연 로딩(Lazy Loading)`과 `Proxy 패턴`을 사용하면 연관된 엔티티들에 실제로 접근하는 시점에 SQL을 호출할 수 있다. 

## 엔티티의 생명주기
- 영속성 컨텍스트에서 관리되는 엔티티는 생명주기를 갖는다.
- 엔티티를 생성했으나 영속성 컨텍스트에서 관리되지 않는 상태를 `비영속`이라고 한다.
- 엔티티가 영속성 컨텍스트에서 관리되는 상태를 `영속`이라고 한다.
- 영속성 컨텍스트가 더 이상 엔티티를 관리하지 않는 상태를 `준영속`이라고 한다.
- 엔티티가 영속성 컨텍스트와 데이터베이스에서 삭제된 상태를 `삭제`라고 한다.

## Flush
- 영속성 컨텍스트에서 관리되는 엔티티를 온디스크 데이터베이스에 반영하는 것을 `Flush`라고 한다.
- 플러시는 세 가지 경우에 발생한다.
  - EntityManager.flush() 호출
  - EntityManager.commit() 호출
  - JPQL 쿼리

## 연관관계의 주인
데이터베이스는 외래키로 연관관계를 표현한다. 반면 JPA는 참조를 통해 연관관계를 표현한다. 이러한 차이 때문에 양방향 연관관계에서는 외래키를 관리할 엔티티를 지정해야하는데 이를 `연관관계의 주인`이라고 한다. 연관관계는 오직 주인 엔티티를 통해서만 설정할 수 있다.

### 영속성 전이
- 특정 엔티티를 영속 상태로 만들 때 관계된 엔티티도 함께 영속 상태로 만드는 것
- 또는 특정 엔티티를 삭제할 때 관계된 엔티티도 함께 삭제하는 것
- `@Column` 어노테이션의 `cascade` 속성에 적절한 `CascadeType` 열거형을 지정하면 된다.

### 고아 객체
- 부모 엔티티와의 관계가 끊어진 자식 엔티티
- 부모 엔티티와의 관계가 끊어진 자식 엔티티를 자동으로 삭제하는 기능을 고아 객체 제거라고 하며, `@OneToMany`의 `orphanRemoval`을 `true`로 설정하면 된다.

### 프록시
- 실제 엔티티 객체 대신에 데이터베이스 조회를 지연할 수 있는 가짜 객체
- JPA 에서는 지연로딩에 프록시 패턴이 사용된다.

### 글로벌 페치 전략
엔티티를 조회할 때 관계된 엔티티들을 언제 조회할 것인가를 결정하는 것을 `글로벌 패치 전략`이라고 한다. 글로벌 패치 전략은 크게 두 가지 방법이 있다.
- `즉시 로딩`: 부모 엔티티를 조회하는 시점에 자식 엔티티들도 함께 조회한다.
- `지연 로딩`: 부모 엔티티만 먼저 조회하고 자식 엔티티는 실제로 접근하는 시점에 조회한다.

### JPQL
- Java Persistence Query Laungage
- JPQL을 사용하면 좀 더 복잡한 조회나 조인 작업을 수행할 수 있으며 `EntityManager.createQuery()` 메소드를 사용한다.
- 데이터베이스 SQL과 유사한 문법을 가지나 데이터베이스 테이블이 아닌 엔티티 객체를 대상으로 조회한다.
- 문자열로 작성하기 때문에 개발 과정, 컴파일 타임에 에러를 잡아내기 어렵다.

### Query DSL
- `Query DSL`을 사용하면 `Q 클래스`를 사용하여 복잡한 쿼리 또는 조인을 처리할 수 있다.
- `JPQL`은 쿼리를 <u>문자열</u>로 작성하기 때문에 코드 작성 시점이나 컴파일 타임에 오류를 검출할 수 없다.
- `Query DSL`을 사용하면 문자열이 아닌 코드로 쿼리를 작성하여 문법적 오류를 컴파일 단계에저 검출할 수 있기 때문에 `타입 안정성`이 있다.
- 또한 쿼리 결과를 엔티티가 아닌 사용자 정의 객체로 받을 수 있다.
- Query DSL은 내부적으로 JPA의 EntityManager를 사용한다. 따라서 Query DSL로 조회한 엔티티도 JPA의 영속성 컨텍스트에서 관리된다.

### N+1 쿼리 문제
- 쿼리 1개의 결과가 N개일 때 N개의 쿼리가 추가적으로 실행되는 문제.
- 두 엔티티 사이에 연관관계가 있을 떄 발생한다.
- JPQL은 특정 엔티티와 연관된 엔티티를 조회할 때 먼저 특정 엔티티만을 조회한다. 그 후 패치 전략에 따라 연관관계에 있는 엔티티들을 즉시 로딩 또는 지연 로딩한다. 이 때문에 즉시 로딩인지 지연 로딩인지에 관계없이 N번의 추가적인 쿼리가 발생하게 된다.
- `JPQL`이나 `Query DSL`의 <b>`페치 조인(Fetch Join)`</b>을 사용하면 N+1 문제를 해결할 수 있다.
- JPQL의 일반적인 조인은 연관된 엔티티는 함께 조회하지 않는다. 대상 엔티티만 먼저 조회한 후 패치 전략에 따라 연관된 엔티티를 즉시 로딩 또는 지연로딩하기 때문이다. 반면 `페치 조인(Fetch Join)`을 사용하면 연관된 엔티티들도 하나의 쿼리로 한꺼번에 조인하여 가져온다.
- 다만 페치 조인은 페이징 API를 사용할 수 없다는 단점이 있다.

## Spring Data JPA
- <b>`Spring Data JPA`</b>는 스프링 프레임워크에서 JPA를 더 추상화하여 사용하기 쉽게 만든 프로젝트다.
- 내부적으로 Hibernate을 사용하며, `EntityManager`를 직접 관리하지 않고 `JpaRepository`인터페이스를 사용할 수 있다. 
- 또한 Query Method, JPQL, 페이징, 정렬 기능을 추가적으로 제공한다
- 쿼리 메소드를 사용하면 <u>메소드 이름</u>으로 <u>JPQL 쿼리</u>를 생성할 수 있다.
- `CrudRepository` 인터페이스는 CRUD 작업을 위한 다양한 메소드를 자동으로 생성한다.
- `PagingAndSortingRepository`인터페이스는 `CrudRepository`를 상속하며 정렬 및 페이징 관련된 메소드가 추가적으로 생성된다.
- `JpaRepository`인터페이스는 `PagingAndSortingRepository`를 상속하며 <u>영속성 컨텍스트 관리</u>, <u>Flush</u>, <u>벌크 연산</u> 같은 추가적인 메소드를 제공한다.

## JPA Auditing
데이터베이스의 중요한 테이블은 새로운 행이 추가되거나, 행이 변경되거나, 삭제되면 이 기록을 별도의 컬럼에 기록해야한다. Spring Data JPA는 이러한 기능을 제공하며, 이를 `JPA Auditing` 이라고 한다.

## Spring Legacy vs. Spring Boot
- 임베디드 톰캣을 사용한다.
- Spring이 주로 XML 파일에 빈을 정의하는 반면 Spring Boot는 어노테이션을 기반으로 빈을 관리한다.
- 사전에 정의된 합리적인 설정인 `Auto Configuration`을 통해 더욱 쉽게 서비스를 위한 설정을 할 수 있다.

## Spring Security
- 인증과 접근 제어를 제공하는 스프링 모듈
- 스프링 시큐리티는 여러 서블릿 필터들의 묶음인 필터 체인으로 동작한다.
- 스프링 구성파일의 `HttpSecurity`를 조작하여 접근을 제어할 수 있다.
- 스프링 시큐리티는 `SecurityContext`의 `Authentication`에 현재 스레드와 관련된 인증 정보를 유지하고 있다.

## Spring TDD
`통합테스트`는 프로젝트에서 사용하는 모든 컴포넌트를 컨테이너에 등록한다. 이 때문에 속도가 느리지만 운영 환경과 가장 유사하게 테스트할 수 있다.

`슬라이싱 테스트`는 레이어드 아키텍처에서 특정 계층과 관련된 컴포넌트만 컨테이너에 등록하여 독립적으로 테스트하는 것으로 속도가 빠르다. 다만 다른 계층으로의 의존성이 있는 경우 Mockito 같은 목업 라이브러리로 모킹해야한다. 

어플리케이션이 커질 수록 통합테스트는 속도가 느려진다. 따라서 레이어드 아키텍쳐나 클린 아키텍처를 도입하여 계층을 명확하게 분리하고 모듈 간 응집도는 높히고 결합도는 낮추는 것이 가장 중요하다. 이후 슬라이싱 테스트를 도입하는 것이 좋다고 생각해요.

## Spring WebFlux
`Spring MVC`는 동기/블로킹이며, 런타임으로 멀티 스레드로 동작하는 톰캣 같은 서블릿 컨테이너를 사용한다. Spring MVC는 `One request One thread` 모델로 요청이 올 때마다 스레드를 생성하여 전담하게 한다. 이 모델에서는 네트워크나 입출력 등 무거운 작업을 수행하면 스레드가 자원을 점유한 채 대기하게 된다. CPU는 다른 스레드를 실행시키기 위해 `Context Switching`을 하며, 스레드 수가 많아질 수록 이에 대한 비용이 커지게 된다.

<b>`Spring WebFlux`</b>는 비동기/논블로킹 모델이며, 보통 네티 같은 비동기/논블로킹 런타임을 사용한다. Spring WebFlux는 <u>이벤트 드리븐 모델</u>인 `Node.js`와 유사하다. 다만 싱글 스레드는 아니며 CPU 코어 수 만큼의 스레드로 병렬처리를 한다. 비동기/논블로킹 모델에서 워커 스레드는 입출력 같이 오랜 시간이 걸리는 작업이 I/O Controller에 의해 처리될 때 이를 기다리지 않고 다른 작업을 수행한다. 다시 말해 <u>스레드를 놀지 않게 하는 것이 핵심이며, 같은 스레드를 사용하기 때문에 `Context Switching` 비용이 최소화된다.</u>

비동기/논블로킹 모델에서는 다른작업이 종료되었을 때 이를 알려줄 수 있는 방법이 필요한데, 보통 다음과 같은 방법으로 구현한다.
- Callback를 함께 전달하여 작업이 끝났을 때 호출되도록 한다.
- 관찰, 구독 가능한 객체로 이벤트를 보내거나 상태 변화를 일으킨다.

관찰, 구독 가능한 형태로 비동기/논블로킹 모델을 구현하는 경우, 서버가 데이터를 생성하는 속도가 클라이언트의 소비 속도보다 빠를 수 있다. 클라이언트는 이를 적절하게 처리하기 위해 배압 이슈를 해결해야 한다.

비동기/논블로킹의 모델은 네트워크 통신이나 데이터 소스도 논블로킹하게 처리해야한다. 그렇지 않으면 스레드 수가 적기 때문에 오히려 동기/블로킹 모델보다 속도가 느려지게 된다. Spring WebFlux의 경우 `WebClient`나 `Spring Data R2DBC(Reactive Relation Database Connectivity)`를 사용하여 네트워크 통신이 데이터 소스도 논블로킹하게 처리한다.

비동기/논블로킹 모델은 요청 하나가 CPU를 적게 사용하지만 요청 수는 많은 모델에 적합하다. 

WebFlux는 Reactive Stream API 명세의 구현체인 `Reactor`의 `Mono`, `Flux`를 사용한다. 물론 다른 구현체는 `RxJava`를 사용할 수 있으며, Kotlin과 코루틴의 `suspend`함수를 사용하면 코드를 더욱 직관적으로 작성할 수 있다. 

WebFlux는 `Server Sent Event` 구현에도 사용할 수 있다.


## Spring Batch
- `Spring Batch`을 사용하면 배치 작업을 쉽게 수행할 수 있다.
- 배치 작업을 원하는 시간에 실행하기 위해 `Spring Quartz`라는 스케쥴러와 함께 사용한다.