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
`Web Server`는 파일 시스템에 저장된 정적 컨텐츠를 제공한다. 반면 `WAS`는 비즈니스 로직을 수행한 후 동적으로 컨텐츠를 생성하여 제공한다. `WAS`는 크게 세 개 - Web Server, Web Container, EJB Container로 이루어지는데, IBM Websphere처럼 세 요소를 모두 포함하는 제품도 있고 Tomcat처럼 Web Server, Web Container 만을 포함하는 제품도 있다.

## Servlet
`Servlet` 은 HTTP  요청을 받아 적절한 비즈니스 로직을 수행한 후 응답을 반환하거나 동적으로 웹 페이지를 생성하여 반환하는 Java Web Application의 컴포넌트다.

## Servlet Container
`Servlet Container` 는 Servlet의 생명 주기를 관리한다. 

## Servlet 동작 원리
1. HTTP 요청이 들어오면 Servlet Container는 새로운 스레드를 만들어 Servlet의 콜백 메소드를 실행한다.
2. Servlet Container는 HTTP 메소드에 따라 `get()` , `post()`, `service()` 를 호출하는데 이때 `HttpServletRequest` 와 `HttpServletResponse` 를 인자로 전달해준다.
3. 콜백 메소드에서 적절한 비즈니스 로직을 수행한 후 웹 페이지나 데이터를 반환한다.

## ServletConfig vs. ServletContext
`ServletConfig` 는 서블릿 하나에 대한 설정을 가지고 있는 런타임 컨텍스트다. `ServletContext` 는 서블릿 컨테이너에 대한 정보를 가지고 있는 런타임 싱글톤 컨텍스트다. 여러 서블릿이 이 객체를 통해 통신을 하거나 데이터 공유를 할 수 있다.

## Servlet Filter
`Servlet Filter` 를 사용하면 서블릿이 사용자의 요청을 처리하기 전 필터링하여 특정 작업을 수행할 수 있다. 필더는 Spring Interceptor와 함께 스프링 시큐리티에서 인증 여부 등을 확인하는데 사용할 수 있다.

## web.xml
톰캣은 Java Web Application을 구동할 때 `web.xml`을 참고하여 서블릿 컨테이너와 서블릿 컨텍스트를 구성한다. 이 파일에는 welcome file, url mapping, servlet listener, servlet filter 등을 선언한다.

## JSP
HTML에 Java 코드를 삽입하여 동적으로 웹 페이지를 생성할 수 있는 언어다. WAS가 JSP를 해석하여 웹 페이지를 반환하는 Servlet으로 변환한다.

## Forward vs. Redirect
둘 다 페이지 전환과 관련이 있다. `Forward` 는 페이지 전환의 주체가 서버다. 클라이언트가 A 페이지를 요청하면 서버는 B 페이지를 응답해준다. 반면 `Redirect` 는 페이지 전환의 주체가 클라이언트다. 클라이언트가 A 페이지를 요청하면 서버는 B 페이지로 이동하라고 응답하고 클라이언트가 다시 B 페이지를 요청한다.

## EJB vs. POJO
- `EJB(Enterprise JavaBeans)` 는 대규모 엔터프라이즈 시스템을 구축하기 위한 표준
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
모든 애플리케이션은 런타임에 시시각각 변하는 애플리케이션에 대한 정보를 메모리에 유지하고 있으며, 보통 이 정보의 집합을 `Context` 라고 한다. 스프링 프레임워크의 경우 IoC Container에 이 정보들을 유지하고 있는데 `BeanFactory` 는 이 정보에 접근할 수 있는 인터페이스를 제공한다. 예를 들어 `BeanFactory` 의 `getBean()` 메소드로 컨테이너에서 관리하는 빈을 주입받을 수 있다.

  `ApplicationContext` 는 BeanFactory를 상속하며 Profile, Property, Environment, 다국어 처리, 어플리케이션 생명주기 같은 추가적인 기능을 제공하는 인터페이스다.

## @ComponentScan
- 컨테이너에 빈을 등록하는 방법은 크게 두 가지, XML 파일을 이용하거나 어노테이션을 이용하는 것이다.
- 어노테이션을 이용하는 경우 `@Component`, `@Controller`, `@RestController`, `@Service` , `@Repository` 등을 클래스에 붙이면 되는데, `@ComponentScan` 은 이 어노테이션이 붙은 클래스의 경로를 컨테이너에 알려주는 역할을 한다.

## DispatcherServlet
Spring MVC의 핵심 컴포넌트로 사용자의 요청을 받은 후 이를 적절한 컨트롤러로 위임한다. 전면에서 모든 사용자 요청 수신을 전담하기 때문에 `Front Controller` 패턴이라고도 한다.

## ViewResolver
컨트롤러가 반환하는 뷰의 이름을 바탕으로 실제 뷰를 탐색하여 반환한다.

## Spring Interceptor
`Spring Interceptor` 는 DispatcherServlet과 Controller 사이에 위치하여 요청을 가로채 특정 작업을 수행하거나 응답을 가로채 추가적인 작업을 수행할 수 있다. 인터셉터는 보안, 인증, 에러처리 등에 활용되며, 특히 스프링 시큐리티에서 서블릿 필터와 함께 중요한 역할을 한다.

## Servlet Filter vs. Spring Interceptor
`ServletFilter` 는 스프링 프레임워크 밖에서 실행되며 ServletDispatcher 이전에 호출된다. `Spring Interceptor` 는 스프링 프레임워크 안에서 실행되며, ServletDispatcher와 Controller 사이에서 동작한다.

## AOP 
- Aspect-oriented Programming
- `AOP` 는 공통 기능을 추출하여 별도의 모듈로 만드는 것이다.
- `@Aspect` 어노테이션을 붙인 구성 클래스에 공통기능을 정의한다.
- `@PointCut` 어노테이션으로 공통기능을 적용할 타겟을 지정한다.
- `@Before` , `@After` , `@Around` 등의 어노테이션을 붙인 어드바이스 메소드에 공통기능을 정의한다.
- `@ControllerAdvice`, `@RestControllerAdvice` 어노테이션도 AOP를 활용한 Global Exception Handler다.

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
메모리의 영속성 컨텍스트라는 공간에 엔티티를 유지하기 때문에 온디스크 데이터베이스보다 훨씬 빠르다.

### 쓰기 지연
엔티티 매니저는 커밋하기 전까지 인메모리의 쿼리 저장소라는 공간에 쿼리를 쌓아둔다. 그리고 커밋하는 시점에 한꺼번에 데이터베이스에 반영하기 때문에 성능을 최적화할 수 있다.

### 변경 감지(Dirty Checking)
JPA에는 엔티티 수정을 위한 별도의 `update()`같은 메소드가 없다. 대신 엔티티를 조회해서 데이터를 변경하면 변경 기능이 동작하여 데이터베이스에 자동으로 반영된다.

### 지연 로딩
엔티티간 연관관계가 존재하는 경우, 처음부터 연관된 엔티티들을 모두 영속성 컨텍스트에 올려두는 것은 비효율적이다. `지연 로딩(Lazy Loading)`과 `Proxy 패턴`을 사용하면 연관된 엔티티들에 실제로 접근하는 시점에 SQL을 호출할 수 있다. 

### Spring Data JPA
`Hibernate`보다 더 추상화된 방법으로 데이터베이스를 관리할 수 있다.

### 영속성 전이, CascadeType
특정 엔티티를 영속 상태로 만들 때 연관된 엔티티도 함께 영속 상태로 만드는 것을 `영속성 전이`라고 한다. 영속성 전이는 `cascade` 속성과 `CascadeType` 열거형으로 설정할 수 있다.

## 프록시(Proxy)
실제 엔티티 객체 대신에 데이터베이스 조회를 지연할 수 있는 가짜 객체를 `프록시(Proxy)` 객체라고 한다. JPA는 프록시 객체를 사용하여 지연로딩 기능을 구현한다.

## 글로벌 페치 전략
엔티티를 조회할 때 연관된 엔티티들을 어떻게 조회할 것인가를 결정하는 것을 `글로벌 패치 전략`이라고 한다. 글로벌 패치 전략은 크게 두 가지 방법이 있다.
- 즉시 로딩
- 지연 로딩

### N+1 쿼리 문제
- 쿼리 1개의 결과가 N개일 때 N개의 쿼리가 추가적으로 실행되는 문제.
- 두 엔티티 사이에 연관관계가 있을 떄 발생한다.
- JPQL은 특정 엔티티와 연관된 엔티티를 조회할 때 먼저 특정 엔티티만을 조회한다. 그 후 패치 전략을 적용하여 연관관계에 있는 엔티티들을 즉시 로딩 또는 지연 로딩한다. 이 때문에 추가적인 쿼리가 발생하게 된다.
- `JPQL`이나 `Query DSL`의 `페치 조인(Fetch Join)`을 사용하면 N+1 문제를 해결할 수 있다.
- JPA에서 일반적인 조인은 연관된 엔티티는 함께 조회하지 않는다. 대상 엔티티를 먼저 조회한 후 패치 전략에 따라 연관된 엔티티를 즉시 로딩 또는 지연로딩하기 때문이다. 반면 `JPQL`이나 `Query DSL`의 `페치 조인(Fetch Join)`을 사용하면 연관된 엔티티들도 하나의 쿼리로 한꺼번에 조인하여 가져온다.
- 다만 페치 조인은 페이징 API를 사용할 수 없다는 단점이 있다.

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

## Query DSL
- `Query DSL`을 사용하면 복잡한 쿼리 또는 조인을 처리할 수 있다.
- `JPQL`은 쿼리를 문자열로 작성하기 때문에 코드 작성 시점이나 컴파일 타임에 오류를 검출할 수 없다.
- `Query DSL`을 사용하면 문자열이 아닌 코드로 쿼리를 작성하여 문법적 오류를 컴파일 단계에저 검출할 수 있다.
- 또한 쿼리 결과를 엔티티가 아닌 사용자 정의 객체로 받을 수 있다.

## Spring vs. Spring Boot
- 임베디드 톰캣을 사용한다.
- `AutoConfiguration`을 통해 더욱 쉽게 서비스를 위한 설정을 할 수 있다.
- Spring이 주로 XML 파일에 빈을 정의하는 반면 Spring Boot는 어노테이션을 기반으로 빈을 관리한다.

## Spring Security
- 인증과 접근제어를 제공하는 스프링 모듈
- 스프링 시큐리티는 기본적으로 모든 요청에 대해 접근을 차단한다.
- 스프링 구성파일의 `HttpSecurity`를 조작하여 접근을 제어할 수 있다.
- 스프링 시큐리티는 `SpringContextHolder` 안 `SpringContext` 안 `Authentication`에 현재 스레드와 관련된 인증 정보를 유지하고 있다.


## Spring TDD

통합테스트는 프로젝트에서 사용하는 모든 컴포넌트를 컨테이너에 등록한다. 이 때문에 속도가 느리지만 운영 환경과 가장 유사하게 테스트할 수 있다.

슬라이싱 테스트는 레이어드 아키텍처에서 특정 계층과 관련된 컴포넌트만 컨테이너에 등록하여 독립적으로 테스트하는 것으로 속도가 빠르다. 다만 다른 계층으로의 의존성이 있는 경우 Mockito 같은 목업 라이브러리로 모킹해야한다. 

어플리케이션이 커질 수록 통합테스트는 속도가 느려진다. 따라서 레이어드 아키텍쳐나 클린 아키텍처를 도입하여 계층을 명확하게 분리하고 모듈 간 응집도는 높히고 결합도는 낮추는 것이 가장 중요하다. 이후 슬라이싱 테스트를 도입하는 것이 좋다고 생각해요.

## Spring WebFlux
- `Spring WebFlux`는 적은 수의 스레드를 사용하는 비동기/논블로킹 모델입니다. 이를 통해 리액티브한 웹 프레임워크를 개발할 수 있다.
- 이벤트 드리븐 모델인 `Node.js`와 유사하지만 싱글 스레드는 아닙니다.
- 데이터 소스도 논블로킹하게 처리하려면 `R2DBC` 같은 모듈이 필요하다.
- 내장 WAS로 톰캣이 아닌 Netty를 사용한다.
- Reactive Stream API 명세의 구현체인 `Reactor`의 `Mono`, `Flux`를 사용한다
- 물론 RxJava나 코틀린의 Coroutine을 사용할 수도 있다.
- 요청 자체는 단순하지만 요청 수가 많은 모델에 적합하다.
- `Server Sent Event` 구현에도 웹 플럭스를 활용할 수 있다.

## gRPC
- google Remote Procedure Call
- 다른 서버의 메서드를 로컬 메서드처럼 호출하는 기술
- `프로토콜 버퍼`를 사용하는 인터페이스 프로젝트를 생성하고, `.proto` 확장자로 인터페이스 코드를 작성한 후 JAR 파일로 빌드한다.
- 이 결과물을 클라이언트 프로젝트와 서버 프로젝트에 임포트하여 사용할 수 있다.
- REST API는 HTTP 1.1을 사용하고 메시지 포맷으로 JSON을 사용한다.
- gRPC는 HTTP 2를 사용하고 메시지 포맷으로 프로토콜 버퍼를 사용한다.
- gRPC는 REST API에 비해 형식이 더욱 엄격하여 불필요한 논쟁을 줄인다.
- gRPC의 프로토콜 버퍼는 REST API의 JSON 직렬화보다 최대 8배 빼를 수 있다고 한다.


## Reactive Programming
리엑티브 프로그래밍은 크게 두 방식으로 구현한다.
- `Event Driven Programming`: 이벤트를 발생하는 `Observable`한 대상, 이를 구독하는 `Subscriber`
- 상태 기반 프로그래밍: 상태가 변하는 대상, 이 상태가 변할 때 구독하는 곳에서 이를 탐지한다.
- `Publish/Subscribe` 모델이라고도 한다.
- MSA에서는 `Kafka`, `Redis` 같은 메시지 큐를 구독하는 형태로 구현한다.
- 안드로이드 모바일에서도 `RxJava`나 `LiveData` 등의 형태로 이미 Reactive Programming 패러다임을 적용하고 있다.
  
## MSA
- 모노톨릭 아키텍처에 대응되는 개념으로 작은 단위로 축소한 모듈이 서로 상호작용하여 서비스를 제공하는 모델
- 쿠버네티스 같이 오토 스케일링, 셀프 힐링, 트래픽 분배 등의 기능을 제공하는 오케스트레이션 도구가 필요하다.
- 또한 여러 모듈이 서로 상호작용할 수 있는 채널인 메시지 큐도 필요하다.

## Domain Driven Development
- 도메인 주도 설계(Domain Driven Development)
- 도메인, 현업의 비즈니스를 중심으로 하는 프로그래밍

## Web Socket
- 양방향 데이터 통신을 위한 프로토콜
- TCP Socket이 OSI 4 Layer에서 동작하는 반면 WebSocket은 OSI 7 Layer의 `HTTP` 프로토콜 위에서 동작한다.
- 먼저 HTTP 프로토콜로 Websocket Handshaking을 하여 연결을 수립하고, 그 다음은 Websocket 프로토콜로 양방향으로 통신한다.

## Spring Batch
- `Spring Batch`을 사용하면 배치 작업을 쉽게 수행할 수 있다.
- 배치 작업을 원하는 시간에 실행하기 위해 `Spring Quartz`라는 스케쥴러와 함께 사용한다.