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

## AOP (Aspect-oriented Programming)
`AOP` 는 공통 기능을 추출하여 별도의 모듈로 만드는 것이다.

`@Aspect` 어노테이션을 붙인 구성 클래스에 공통기능을 정의한다

`@PointCut` 어노테이션으로 공통기능을 적용할 타겟을 지정한다.

`@Before` , `@After` , `@Around` 등의 어노테이션을 붙인 어드바이스 메소드에 공통기능을 정의한다.

## Spring TDD

통합테스트는 프로젝트에서 사용하는 모든 컴포넌트를 컨테이너에 등록한다. 이 때문에 속도가 느리지만 운영 환경과 가장 유사하게 테스트할 수 있다.

슬라이싱 테스트는 레이어드 아키텍처에서 특정 계층과 관련된 컴포넌트만 컨테이너에 등록하여 독립적으로 테스트하는 것으로 속도가 빠르다. 다만 다른 계층으로의 의존성이 있는 경우 Mockito 같은 목업 라이브러리로 모킹해야한다. 

어플리케이션이 커질 수록 통합테스트는 속도가 느려진다. 따라서 레이어드 아키텍쳐나 클린 아키텍처를 도입하여 계층을 명확하게 분리하고 모듈 간 응집도는 높히고 결합도는 낮추는 것이 가장 중요하다. 이후 슬라이싱 테스트를 도입하는 것이 좋다고 생각해요.

## gRPC
- google Remote Procedure Call
- 다른 서버의 메서드를 로컬 메서드처럼 호출하는 기술
- 프로토버퍼를 사용하는 인터페이스 프로젝트를 생성하고, `.proto` 확장자로 인터페이스 코드를 작성한 후 JAR 파일로 빌드한다.
- 이 결과물을 클라이언트 프로젝트와 서버 프로젝트에 임포트하여 사용할 수 있다.
- REST API는 HTTP 1.1을 사용하고 메시지 포맷으로 JSON을 사용한다.
- gRPC는 HTTP 2를 사용하고 메시지 포맷으로 프로토 버퍼를 사용한다.
- gRPC가 구현시간이 더 걸리지만 속도가 더 빠르다고 알고 있습니다.


## RestTemplate, WebClient, gRPC