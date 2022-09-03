(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{1777:function(e,v,t){"use strict";t.r(v);var r=t(34),_=Object(r.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#web-server-vs-was"}},[e._v("Web Server vs. WAS")])]),t("li",[t("a",{attrs:{href:"#servlet"}},[e._v("Servlet")])]),t("li",[t("a",{attrs:{href:"#servlet-container"}},[e._v("Servlet Container")])]),t("li",[t("a",{attrs:{href:"#servlet-동작-원리"}},[e._v("Servlet 동작 원리")])]),t("li",[t("a",{attrs:{href:"#servletconfig-vs-servletcontext"}},[e._v("ServletConfig vs. ServletContext")])]),t("li",[t("a",{attrs:{href:"#servlet-filter"}},[e._v("Servlet Filter")])]),t("li",[t("a",{attrs:{href:"#web-xml"}},[e._v("web.xml")])]),t("li",[t("a",{attrs:{href:"#jsp"}},[e._v("JSP")])]),t("li",[t("a",{attrs:{href:"#forward-vs-redirect"}},[e._v("Forward vs. Redirect")])]),t("li",[t("a",{attrs:{href:"#ejb-vs-pojo"}},[e._v("EJB vs. POJO")])]),t("li",[t("a",{attrs:{href:"#제어의-역전"}},[e._v("제어의 역전")])]),t("li",[t("a",{attrs:{href:"#의존성-주입"}},[e._v("의존성 주입")])]),t("li",[t("a",{attrs:{href:"#beanfactory-applicationcontext"}},[e._v("BeanFactory, ApplicationContext")])]),t("li",[t("a",{attrs:{href:"#componentscan"}},[e._v("@ComponentScan")])]),t("li",[t("a",{attrs:{href:"#dispatcherservlet"}},[e._v("DispatcherServlet")])]),t("li",[t("a",{attrs:{href:"#viewresolver"}},[e._v("ViewResolver")])]),t("li",[t("a",{attrs:{href:"#spring-interceptor"}},[e._v("Spring Interceptor")])]),t("li",[t("a",{attrs:{href:"#servlet-filter-vs-spring-interceptor"}},[e._v("Servlet Filter vs. Spring Interceptor")])]),t("li",[t("a",{attrs:{href:"#aop"}},[e._v("AOP")])]),t("li",[t("a",{attrs:{href:"#orm"}},[e._v("ORM")])]),t("li",[t("a",{attrs:{href:"#jpa"}},[e._v("JPA")])]),t("li",[t("a",{attrs:{href:"#영속성-컨텍스트"}},[e._v("영속성 컨텍스트")])]),t("li",[t("a",{attrs:{href:"#영속성-컨텍스트의-장점"}},[e._v("영속성 컨텍스트의 장점")]),t("ul",[t("li",[t("a",{attrs:{href:"#_1차-캐시"}},[e._v("1차 캐시")])]),t("li",[t("a",{attrs:{href:"#쓰기-지연"}},[e._v("쓰기 지연")])]),t("li",[t("a",{attrs:{href:"#변경-감지-dirty-checking"}},[e._v("변경 감지(Dirty Checking)")])]),t("li",[t("a",{attrs:{href:"#지연-로딩"}},[e._v("지연 로딩")])])])]),t("li",[t("a",{attrs:{href:"#엔티티의-생명주기"}},[e._v("엔티티의 생명주기")])]),t("li",[t("a",{attrs:{href:"#flush"}},[e._v("Flush")])]),t("li",[t("a",{attrs:{href:"#연관관계의-주인"}},[e._v("연관관계의 주인")]),t("ul",[t("li",[t("a",{attrs:{href:"#영속성-전이"}},[e._v("영속성 전이")])]),t("li",[t("a",{attrs:{href:"#고아-객체"}},[e._v("고아 객체")])]),t("li",[t("a",{attrs:{href:"#프록시"}},[e._v("프록시")])]),t("li",[t("a",{attrs:{href:"#글로벌-페치-전략"}},[e._v("글로벌 페치 전략")])]),t("li",[t("a",{attrs:{href:"#jpql"}},[e._v("JPQL")])]),t("li",[t("a",{attrs:{href:"#query-dsl"}},[e._v("Query DSL")])]),t("li",[t("a",{attrs:{href:"#n-1-쿼리-문제"}},[e._v("N+1 쿼리 문제")])])])]),t("li",[t("a",{attrs:{href:"#spring-data-jpa"}},[e._v("Spring Data JPA")])]),t("li",[t("a",{attrs:{href:"#jpa-auditing"}},[e._v("JPA Auditing")])]),t("li",[t("a",{attrs:{href:"#spring-legacy-vs-spring-boot"}},[e._v("Spring Legacy vs. Spring Boot")])]),t("li",[t("a",{attrs:{href:"#spring-security"}},[e._v("Spring Security")])]),t("li",[t("a",{attrs:{href:"#spring-tdd"}},[e._v("Spring TDD")])]),t("li",[t("a",{attrs:{href:"#spring-webflux"}},[e._v("Spring WebFlux")])]),t("li",[t("a",{attrs:{href:"#spring-batch"}},[e._v("Spring Batch")])])])]),t("p"),e._v(" "),t("h1",{attrs:{id:"spring-면접-정리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-면접-정리"}},[e._v("#")]),e._v(" Spring 면접 정리")]),e._v(" "),t("p",[t("code",[e._v("Spring")]),e._v(" 면접 내용을 정리합니다.")]),e._v(" "),t("h2",{attrs:{id:"web-server-vs-was"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-server-vs-was"}},[e._v("#")]),e._v(" Web Server vs. WAS")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Web Server")]),e._v("는 파일 시스템에 저장된 정적 컨텐츠를 제공한다. 반면 "),t("code",[e._v("WAS")]),e._v("는 비즈니스 로직을 수행한 후 동적으로 컨텐츠를 생성하여 제공한다.")]),e._v(" "),t("li",[e._v("IBM WebSphere 같은 "),t("code",[e._v("WAS")]),e._v("는 Web Server, Web Container, EJB Container로 이루어진다.")]),e._v(" "),t("li",[e._v("Tomcat 같은 "),t("code",[e._v("Web container")]),e._v("는 Web Server, Web Container로 이루어진다.")])]),e._v(" "),t("h2",{attrs:{id:"servlet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servlet"}},[e._v("#")]),e._v(" Servlet")]),e._v(" "),t("p",[t("code",[e._v("Servlet")]),e._v("은 HTTP 요청을 받아 적절한 비즈니스 로직을 수행한 후 응답을 반환하거나 동적으로 웹 페이지를 생성하여 반환하는 Java Web Application의 컴포넌트다.")]),e._v(" "),t("h2",{attrs:{id:"servlet-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servlet-container"}},[e._v("#")]),e._v(" Servlet Container")]),e._v(" "),t("p",[t("code",[e._v("Servlet Container")]),e._v(" 는 Servlet의 생명 주기를 관리한다.")]),e._v(" "),t("h2",{attrs:{id:"servlet-동작-원리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servlet-동작-원리"}},[e._v("#")]),e._v(" Servlet 동작 원리")]),e._v(" "),t("ol",[t("li",[e._v("HTTP 요청이 들어오면 Servlet Container는 Servlet에 새로운 스레드를 할당하여 콜백 메소드를 실행한다.")]),e._v(" "),t("li",[e._v("Servlet Container는 HTTP 메소드에 따라 "),t("code",[e._v("get()")]),e._v(" , "),t("code",[e._v("post()")]),e._v(", "),t("code",[e._v("service()")]),e._v(" 를 호출하는데 이때 "),t("code",[e._v("HttpServletRequest")]),e._v(" 와 "),t("code",[e._v("HttpServletResponse")]),e._v(" 를 인자로 전달해준다.")]),e._v(" "),t("li",[e._v("콜백 메소드에서 적절한 비즈니스 로직을 수행한 후 웹 페이지나 데이터를 반환한다.")])]),e._v(" "),t("h2",{attrs:{id:"servletconfig-vs-servletcontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servletconfig-vs-servletcontext"}},[e._v("#")]),e._v(" ServletConfig vs. ServletContext")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ServletConfig")]),e._v(" 는 서블릿 하나에 대한 설정을 가지고 있는 런타임 컨텍스트다.")]),e._v(" "),t("li",[t("code",[e._v("ServletContext")]),e._v(" 는 서블릿 컨테이너에 대한 정보를 가지고 있는 런타임 싱글톤 컨텍스트다. 여러 서블릿이 이 객체를 통해 통신을 하거나 데이터 공유를 할 수 있다.")])]),e._v(" "),t("h2",{attrs:{id:"servlet-filter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servlet-filter"}},[e._v("#")]),e._v(" Servlet Filter")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Servlet Filter")]),e._v(" 를 사용하면 서블릿이 사용자의 요청을 처리하기 전 필터링하여 특정 작업을 수행할 수 있다.")]),e._v(" "),t("li",[e._v("필터는 Spring Interceptor와 함께 스프링 시큐리티에서 인증 여부, 접근 권한 등을 확인하는데 사용할 수 있다.")])]),e._v(" "),t("h2",{attrs:{id:"web-xml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-xml"}},[e._v("#")]),e._v(" web.xml")]),e._v(" "),t("p",[e._v("톰캣은 Java Web Application을 구동할 때 "),t("code",[e._v("web.xml")]),e._v("을 참고하여 서블릿 컨테이너와 서블릿 컨텍스트를 구성한다. 이 파일에는 welcome file, url mapping, servlet listener, servlet filter 등을 선언한다.")]),e._v(" "),t("h2",{attrs:{id:"jsp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsp"}},[e._v("#")]),e._v(" JSP")]),e._v(" "),t("p",[e._v("HTML에 Java 코드를 삽입하여 동적으로 웹 페이지를 생성할 수 있는 언어다. WAS가 JSP를 해석하여 웹 페이지를 반환하는 Servlet으로 변환한다.")]),e._v(" "),t("h2",{attrs:{id:"forward-vs-redirect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forward-vs-redirect"}},[e._v("#")]),e._v(" Forward vs. Redirect")]),e._v(" "),t("p",[e._v("둘 다 페이지 전환과 관련이 있다. "),t("code",[e._v("Forward")]),e._v(" 는 페이지 전환의 주체가 서버다. 클라이언트가 A 페이지를 요청하면 서버는 B 페이지를 응답해준다. 반면 "),t("code",[e._v("Redirect")]),e._v(" 는 페이지 전환의 주체가 클라이언트다. 클라이언트가 A 페이지를 요청하면 서버는 B 페이지로 이동하라고 응답하고 클라이언트가 다시 B 페이지를 요청한다.")]),e._v(" "),t("h2",{attrs:{id:"ejb-vs-pojo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ejb-vs-pojo"}},[e._v("#")]),e._v(" EJB vs. POJO")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("EJB(Enterprise JavaBeans)")]),e._v(" 는 대규모 엔터프라이즈 시스템을 구축하기 위한 표준이다.")]),e._v(" "),t("li",[e._v("EJB 표준을 따르는 시스템에서 컴포넌트들은 "),t("code",[e._v("EJB Container")]),e._v(" 에 의해 관리되기 위해 EJB의 특정 클래스를 상속, 구현하거나 어노테이션을 붙여야하며, 이로 인해 컴포넌트들이 무거워진다는 단점이 있다.")]),e._v(" "),t("li",[t("code",[e._v("POJO(Plain Old Java Object)")]),e._v(" 는 말 그대로 시스템을 구성하는 컴포넌트들가 특정 클래스를 상속, 구현하거나 어노테이션을 붙일 필요없이 순수한 자바 객체로 정의할 수 있음을 의미하며, 스프링 프레임워크도 이 철학을 따르고 있다. 참고로 스프링 컨테이너에서 관리하는 POJO 객체는 "),t("code",[e._v("빈(Bean)")]),e._v(" 이라고도 한다.")])]),e._v(" "),t("h2",{attrs:{id:"제어의-역전"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#제어의-역전"}},[e._v("#")]),e._v(" 제어의 역전")]),e._v(" "),t("p",[e._v("객체의 생명주기를 Spring IoC Container에 위임하는 것")]),e._v(" "),t("h2",{attrs:{id:"의존성-주입"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#의존성-주입"}},[e._v("#")]),e._v(" 의존성 주입")]),e._v(" "),t("p",[e._v("Spring IoC Container에 관리하는 빈을 코드에 주입하는 것")]),e._v(" "),t("ul",[t("li",[e._v("필드 주입")]),e._v(" "),t("li",[e._v("Setter 주입")]),e._v(" "),t("li",[e._v("생성자 주입")]),e._v(" "),t("li",[e._v("Lombok")])]),e._v(" "),t("h2",{attrs:{id:"beanfactory-applicationcontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory-applicationcontext"}},[e._v("#")]),e._v(" BeanFactory, ApplicationContext")]),e._v(" "),t("p",[e._v("모든 애플리케이션은 런타임에 시시각각 변하는 애플리케이션에 대한 정보를 메모리에 유지하고 있으며, 보통 이 정보의 집합을 "),t("code",[e._v("Context")]),e._v(" 라고 한다. 스프링 프레임워크의 경우 IoC Container에 이 정보들을 유지하고 있는데 "),t("b",[t("code",[e._v("BeanFactory")])]),e._v(" 는 이 정보에 접근할 수 있는 인터페이스를 제공한다. 예를 들어 "),t("code",[e._v("BeanFactory")]),e._v(" 의 "),t("code",[e._v("getBean()")]),e._v(" 메소드로 컨테이너에서 관리하는 빈을 주입받을 수 있다.")]),e._v(" "),t("p",[t("b",[t("code",[e._v("ApplicationContext")])]),e._v(" 는 BeanFactory를 상속하며 Profile, Property, Environment, 다국어 처리, 어플리케이션 생명주기 같은 추가적인 기능을 제공하는 인터페이스다.")]),e._v(" "),t("h2",{attrs:{id:"componentscan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#componentscan"}},[e._v("#")]),e._v(" @ComponentScan")]),e._v(" "),t("ul",[t("li",[e._v("컨테이너에 빈을 등록하는 방법은 크게 두 가지, XML 파일을 이용하거나 어노테이션을 이용하는 것이다.")]),e._v(" "),t("li",[e._v("어노테이션을 이용하는 경우 "),t("code",[e._v("@Component")]),e._v(", "),t("code",[e._v("@Controller")]),e._v(", "),t("code",[e._v("@RestController")]),e._v(", "),t("code",[e._v("@Service")]),e._v(" , "),t("code",[e._v("@Repository")]),e._v(" 등을 클래스에 붙이면 되는데, "),t("code",[e._v("@ComponentScan")]),e._v(" 은 이 어노테이션이 붙은 클래스의 경로를 컨테이너에 알려주는 역할을 한다.")])]),e._v(" "),t("h2",{attrs:{id:"dispatcherservlet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dispatcherservlet"}},[e._v("#")]),e._v(" DispatcherServlet")]),e._v(" "),t("p",[e._v("Spring MVC의 핵심 컴포넌트로 사용자의 요청을 받은 후 이를 적절한 컨트롤러로 위임한다. 전면에서 모든 사용자 요청 수신을 전담하기 때문에 "),t("code",[e._v("Front Controller")]),e._v(" 패턴이라고도 한다.")]),e._v(" "),t("h2",{attrs:{id:"viewresolver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#viewresolver"}},[e._v("#")]),e._v(" ViewResolver")]),e._v(" "),t("p",[e._v("컨트롤러가 반환하는 뷰의 이름을 바탕으로 실제 뷰를 탐색하여 반환한다.")]),e._v(" "),t("h2",{attrs:{id:"spring-interceptor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-interceptor"}},[e._v("#")]),e._v(" Spring Interceptor")]),e._v(" "),t("p",[t("code",[e._v("Spring Interceptor")]),e._v(" 는 DispatcherServlet과 Controller 사이에 위치하며, 요청이 특정 컨트롤러로 들어가기 전 이를 가로채 특정 작업을 수행한다.")]),e._v(" "),t("h2",{attrs:{id:"servlet-filter-vs-spring-interceptor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servlet-filter-vs-spring-interceptor"}},[e._v("#")]),e._v(" Servlet Filter vs. Spring Interceptor")]),e._v(" "),t("p",[t("code",[e._v("ServletFilter")]),e._v(" 는 스프링 프레임워크 밖에서 실행되며 ServletDispatcher 이전에 호출된다. 대표적으로 스프링 시큐리티가 인증 및 접근 제어를 위해 ServletFilter를 사용한다. "),t("code",[e._v("Spring Interceptor")]),e._v(" 는 스프링 프레임워크 안에서 실행되며, ServletDispatcher와 Controller 사이에서 동작한다. 대표적으로 "),t("code",[e._v("Spring Validation")]),e._v("의 유효성 검증 어노테이션이 Spring Interceptor를 사용한다.")]),e._v(" "),t("h2",{attrs:{id:"aop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aop"}},[e._v("#")]),e._v(" AOP")]),e._v(" "),t("ul",[t("li",[e._v("Aspect-oriented Programming")]),e._v(" "),t("li",[t("code",[e._v("AOP")]),e._v(" 는 공통 기능을 추출하여 별도의 모듈로 만드는 것이다.")]),e._v(" "),t("li",[e._v("AOP는 에러처리, 트랜잭션, 보안, 로깅 등에 사용된다.")]),e._v(" "),t("li",[t("code",[e._v("@Aspect")]),e._v(" 어노테이션을 붙인 구성 클래스에 공통기능을 정의한다.")]),e._v(" "),t("li",[t("code",[e._v("@PointCut")]),e._v(" 어노테이션으로 공통기능을 적용할 타겟을 지정한다.")]),e._v(" "),t("li",[t("code",[e._v("@Before")]),e._v(" , "),t("code",[e._v("@After")]),e._v(" , "),t("code",[e._v("@Around")]),e._v(" 등의 어노테이션을 붙인 어드바이스 메소드에 공통기능을 정의한다.")]),e._v(" "),t("li",[t("code",[e._v("@ControllerAdvice")]),e._v(", "),t("code",[e._v("@RestControllerAdvice")]),e._v(" 어노테이션도 AOP를 활용한 Global Exception Handler다.")]),e._v(" "),t("li",[t("code",[e._v("@Transactional")]),e._v(" 어노테이션도 내부적으로 트랜잭션을 시작하고 커밋하는 코드를 AOP를 사용하여 추가해준다.")]),e._v(" "),t("li",[t("code",[e._v("AOP")]),e._v("는 Spring Interceptor와 Controller 사이에서 동작한다.")])]),e._v(" "),t("h2",{attrs:{id:"orm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#orm"}},[e._v("#")]),e._v(" ORM")]),e._v(" "),t("ul",[t("li",[e._v("Object-Relation Mapping")]),e._v(" "),t("li",[e._v("관계형 데이터베이스의 테이블과 객체지향 프로그래밍의 객체를 매핑해주는 기술")])]),e._v(" "),t("h2",{attrs:{id:"jpa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jpa"}},[e._v("#")]),e._v(" JPA")]),e._v(" "),t("ul",[t("li",[e._v("Java Persistence API")]),e._v(" "),t("li",[e._v("Java 진형의 ORM 표준")]),e._v(" "),t("li",[e._v("JPA는 명세이며, 대표적인 구현체에는 Hibernate가 있다.")])]),e._v(" "),t("h2",{attrs:{id:"영속성-컨텍스트"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#영속성-컨텍스트"}},[e._v("#")]),e._v(" 영속성 컨텍스트")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("영속성 컨텍스트")]),e._v("는 엔티티를 저장하고 관리하는 메모리 상의 공간이다.")]),e._v(" "),t("li",[t("code",[e._v("EntityManager")]),e._v("로 영속성 컨텍스트에 엔티티를 저장, 수정, 삭제, 조회할 수 있다.")])]),e._v(" "),t("h2",{attrs:{id:"영속성-컨텍스트의-장점"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#영속성-컨텍스트의-장점"}},[e._v("#")]),e._v(" 영속성 컨텍스트의 장점")]),e._v(" "),t("p",[e._v("영속성 컨텍스트의 장점은 크게 네 가지다.")]),e._v(" "),t("h3",{attrs:{id:"_1차-캐시"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1차-캐시"}},[e._v("#")]),e._v(" 1차 캐시")]),e._v(" "),t("p",[e._v("영속성 컨텍스트는 내부에 "),t("code",[e._v("1차 캐시")]),e._v("를 가지고 있다. 1차 캐시는 메모리 영역에 존재하기 때문에 온디스크에 존재하는 데이터베이스에서 엔티티를 조회하는 것보다 훨씬 빠르다.")]),e._v(" "),t("h3",{attrs:{id:"쓰기-지연"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#쓰기-지연"}},[e._v("#")]),e._v(" 쓰기 지연")]),e._v(" "),t("p",[e._v("엔티티 매니저는 쿼리 저장소라는 공간에 쿼리를 쌓아둔다. 그리고 커밋 시점에 한꺼번에 데이터베이스에 반영하기 때문에 성능을 최적화할 수 있다.")]),e._v(" "),t("h3",{attrs:{id:"변경-감지-dirty-checking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#변경-감지-dirty-checking"}},[e._v("#")]),e._v(" 변경 감지(Dirty Checking)")]),e._v(" "),t("p",[e._v("JPA에는 엔티티 수정을 위한 별도의 "),t("code",[e._v("update()")]),e._v("같은 메소드가 없다. 대신 엔티티를 조회해서 데이터를 변경하면 변경 기능이 동작하여 데이터베이스에 자동으로 반영된다.")]),e._v(" "),t("h3",{attrs:{id:"지연-로딩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#지연-로딩"}},[e._v("#")]),e._v(" 지연 로딩")]),e._v(" "),t("p",[e._v("엔티티간 연관관계가 존재하는 경우, 처음부터 연관된 엔티티들을 모두 영속성 컨텍스트에 올려두는 것은 비효율적이다. "),t("code",[e._v("지연 로딩(Lazy Loading)")]),e._v("과 "),t("code",[e._v("Proxy 패턴")]),e._v("을 사용하면 연관된 엔티티들에 실제로 접근하는 시점에 SQL을 호출할 수 있다.")]),e._v(" "),t("h2",{attrs:{id:"엔티티의-생명주기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#엔티티의-생명주기"}},[e._v("#")]),e._v(" 엔티티의 생명주기")]),e._v(" "),t("ul",[t("li",[e._v("영속성 컨텍스트에서 관리되는 엔티티는 생명주기를 갖는다.")]),e._v(" "),t("li",[e._v("엔티티를 생성했으나 영속성 컨텍스트에서 관리되지 않는 상태를 "),t("code",[e._v("비영속")]),e._v("이라고 한다.")]),e._v(" "),t("li",[e._v("엔티티가 영속성 컨텍스트에서 관리되는 상태를 "),t("code",[e._v("영속")]),e._v("이라고 한다.")]),e._v(" "),t("li",[e._v("영속성 컨텍스트가 더 이상 엔티티를 관리하지 않는 상태를 "),t("code",[e._v("준영속")]),e._v("이라고 한다.")]),e._v(" "),t("li",[e._v("엔티티가 영속성 컨텍스트와 데이터베이스에서 삭제된 상태를 "),t("code",[e._v("삭제")]),e._v("라고 한다.")])]),e._v(" "),t("h2",{attrs:{id:"flush"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flush"}},[e._v("#")]),e._v(" Flush")]),e._v(" "),t("ul",[t("li",[e._v("영속성 컨텍스트에서 관리되는 엔티티를 온디스크 데이터베이스에 반영하는 것을 "),t("code",[e._v("Flush")]),e._v("라고 한다.")]),e._v(" "),t("li",[e._v("플러시는 세 가지 경우에 발생한다.\n"),t("ul",[t("li",[e._v("EntityManager.flush() 호출")]),e._v(" "),t("li",[e._v("EntityManager.commit() 호출")]),e._v(" "),t("li",[e._v("JPQL 쿼리")])])])]),e._v(" "),t("h2",{attrs:{id:"연관관계의-주인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#연관관계의-주인"}},[e._v("#")]),e._v(" 연관관계의 주인")]),e._v(" "),t("p",[e._v("데이터베이스는 외래키로 연관관계를 표현한다. 반면 JPA는 참조를 통해 연관관계를 표현한다. 이러한 차이 때문에 양방향 연관관계에서는 외래키를 관리할 엔티티를 지정해야하는데 이를 "),t("code",[e._v("연관관계의 주인")]),e._v("이라고 한다. 연관관계는 오직 주인 엔티티를 통해서만 설정할 수 있다.")]),e._v(" "),t("h3",{attrs:{id:"영속성-전이"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#영속성-전이"}},[e._v("#")]),e._v(" 영속성 전이")]),e._v(" "),t("ul",[t("li",[e._v("특정 엔티티를 영속 상태로 만들 때 관계된 엔티티도 함께 영속 상태로 만드는 것")]),e._v(" "),t("li",[e._v("또는 특정 엔티티를 삭제할 때 관계된 엔티티도 함께 삭제하는 것")]),e._v(" "),t("li",[t("code",[e._v("@Column")]),e._v(" 어노테이션의 "),t("code",[e._v("cascade")]),e._v(" 속성에 적절한 "),t("code",[e._v("CascadeType")]),e._v(" 열거형을 지정하면 된다.")])]),e._v(" "),t("h3",{attrs:{id:"고아-객체"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#고아-객체"}},[e._v("#")]),e._v(" 고아 객체")]),e._v(" "),t("ul",[t("li",[e._v("부모 엔티티와의 관계가 끊어진 자식 엔티티")]),e._v(" "),t("li",[e._v("부모 엔티티와의 관계가 끊어진 자식 엔티티를 자동으로 삭제하는 기능을 고아 객체 제거라고 하며, "),t("code",[e._v("@OneToMany")]),e._v("의 "),t("code",[e._v("orphanRemoval")]),e._v("을 "),t("code",[e._v("true")]),e._v("로 설정하면 된다.")])]),e._v(" "),t("h3",{attrs:{id:"프록시"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프록시"}},[e._v("#")]),e._v(" 프록시")]),e._v(" "),t("ul",[t("li",[e._v("실제 엔티티 객체 대신에 데이터베이스 조회를 지연할 수 있는 가짜 객체")]),e._v(" "),t("li",[e._v("JPA 에서는 지연로딩에 프록시 패턴이 사용된다.")])]),e._v(" "),t("h3",{attrs:{id:"글로벌-페치-전략"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#글로벌-페치-전략"}},[e._v("#")]),e._v(" 글로벌 페치 전략")]),e._v(" "),t("p",[e._v("엔티티를 조회할 때 관계된 엔티티들을 언제 조회할 것인가를 결정하는 것을 "),t("code",[e._v("글로벌 패치 전략")]),e._v("이라고 한다. 글로벌 패치 전략은 크게 두 가지 방법이 있다.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("즉시 로딩")]),e._v(": 부모 엔티티를 조회하는 시점에 자식 엔티티들도 함께 조회한다.")]),e._v(" "),t("li",[t("code",[e._v("지연 로딩")]),e._v(": 부모 엔티티만 먼저 조회하고 자식 엔티티는 실제로 접근하는 시점에 조회한다.")])]),e._v(" "),t("h3",{attrs:{id:"jpql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jpql"}},[e._v("#")]),e._v(" JPQL")]),e._v(" "),t("ul",[t("li",[e._v("Java Persistence Query Laungage")]),e._v(" "),t("li",[e._v("JPQL을 사용하면 좀 더 복잡한 조회나 조인 작업을 수행할 수 있으며 "),t("code",[e._v("EntityManager.createQuery()")]),e._v(" 메소드를 사용한다.")]),e._v(" "),t("li",[e._v("데이터베이스 SQL과 유사한 문법을 가지나 데이터베이스 테이블이 아닌 엔티티 객체를 대상으로 조회한다.")]),e._v(" "),t("li",[e._v("문자열로 작성하기 때문에 개발 과정, 컴파일 타임에 에러를 잡아내기 어렵다.")])]),e._v(" "),t("h3",{attrs:{id:"query-dsl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-dsl"}},[e._v("#")]),e._v(" Query DSL")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Query DSL")]),e._v("을 사용하면 "),t("code",[e._v("Q 클래스")]),e._v("를 사용하여 복잡한 쿼리 또는 조인을 처리할 수 있다.")]),e._v(" "),t("li",[t("code",[e._v("JPQL")]),e._v("은 쿼리를 "),t("u",[e._v("문자열")]),e._v("로 작성하기 때문에 코드 작성 시점이나 컴파일 타임에 오류를 검출할 수 없다.")]),e._v(" "),t("li",[t("code",[e._v("Query DSL")]),e._v("을 사용하면 문자열이 아닌 코드로 쿼리를 작성하여 문법적 오류를 컴파일 단계에저 검출할 수 있기 때문에 "),t("code",[e._v("타입 안정성")]),e._v("이 있다.")]),e._v(" "),t("li",[e._v("또한 쿼리 결과를 엔티티가 아닌 사용자 정의 객체로 받을 수 있다.")]),e._v(" "),t("li",[e._v("Query DSL은 내부적으로 JPA의 EntityManager를 사용한다. 따라서 Query DSL로 조회한 엔티티도 JPA의 영속성 컨텍스트에서 관리된다.")])]),e._v(" "),t("h3",{attrs:{id:"n-1-쿼리-문제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#n-1-쿼리-문제"}},[e._v("#")]),e._v(" N+1 쿼리 문제")]),e._v(" "),t("ul",[t("li",[e._v("쿼리 1개의 결과가 N개일 때 N개의 쿼리가 추가적으로 실행되는 문제.")]),e._v(" "),t("li",[e._v("두 엔티티 사이에 연관관계가 있을 떄 발생한다.")]),e._v(" "),t("li",[e._v("JPQL은 특정 엔티티와 연관된 엔티티를 조회할 때 먼저 특정 엔티티만을 조회한다. 그 후 패치 전략에 따라 연관관계에 있는 엔티티들을 즉시 로딩 또는 지연 로딩한다. 이 때문에 즉시 로딩인지 지연 로딩인지에 관계없이 N번의 추가적인 쿼리가 발생하게 된다.")]),e._v(" "),t("li",[t("code",[e._v("JPQL")]),e._v("이나 "),t("code",[e._v("Query DSL")]),e._v("의 "),t("b",[t("code",[e._v("페치 조인(Fetch Join)")])]),e._v("을 사용하면 N+1 문제를 해결할 수 있다.")]),e._v(" "),t("li",[e._v("JPQL의 일반적인 조인은 연관된 엔티티는 함께 조회하지 않는다. 대상 엔티티만 먼저 조회한 후 패치 전략에 따라 연관된 엔티티를 즉시 로딩 또는 지연로딩하기 때문이다. 반면 "),t("code",[e._v("페치 조인(Fetch Join)")]),e._v("을 사용하면 연관된 엔티티들도 하나의 쿼리로 한꺼번에 조인하여 가져온다.")]),e._v(" "),t("li",[e._v("다만 페치 조인은 페이징 API를 사용할 수 없다는 단점이 있다.")])]),e._v(" "),t("h2",{attrs:{id:"spring-data-jpa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-data-jpa"}},[e._v("#")]),e._v(" Spring Data JPA")]),e._v(" "),t("ul",[t("li",[t("b",[t("code",[e._v("Spring Data JPA")])]),e._v("는 스프링 프레임워크에서 JPA를 더 추상화하여 사용하기 쉽게 만든 프로젝트다.")]),e._v(" "),t("li",[e._v("내부적으로 Hibernate을 사용하며, "),t("code",[e._v("EntityManager")]),e._v("를 직접 관리하지 않고 "),t("code",[e._v("JpaRepository")]),e._v("인터페이스를 사용할 수 있다.")]),e._v(" "),t("li",[e._v("또한 Query Method, JPQL, 페이징, 정렬 기능을 추가적으로 제공한다")]),e._v(" "),t("li",[e._v("쿼리 메소드를 사용하면 "),t("u",[e._v("메소드 이름")]),e._v("으로 "),t("u",[e._v("JPQL 쿼리")]),e._v("를 생성할 수 있다.")]),e._v(" "),t("li",[t("code",[e._v("CrudRepository")]),e._v(" 인터페이스는 CRUD 작업을 위한 다양한 메소드를 자동으로 생성한다.")]),e._v(" "),t("li",[t("code",[e._v("PagingAndSortingRepository")]),e._v("인터페이스는 "),t("code",[e._v("CrudRepository")]),e._v("를 상속하며 정렬 및 페이징 관련된 메소드가 추가적으로 생성된다.")]),e._v(" "),t("li",[t("code",[e._v("JpaRepository")]),e._v("인터페이스는 "),t("code",[e._v("PagingAndSortingRepository")]),e._v("를 상속하며 "),t("u",[e._v("영속성 컨텍스트 관리")]),e._v(", "),t("u",[e._v("Flush")]),e._v(", "),t("u",[e._v("벌크 연산")]),e._v(" 같은 추가적인 메소드를 제공한다.")])]),e._v(" "),t("h2",{attrs:{id:"jpa-auditing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jpa-auditing"}},[e._v("#")]),e._v(" JPA Auditing")]),e._v(" "),t("p",[e._v("데이터베이스의 중요한 테이블은 새로운 행이 추가되거나, 행이 변경되거나, 삭제되면 이 기록을 별도의 컬럼에 기록해야한다. Spring Data JPA는 이러한 기능을 제공하며, 이를 "),t("code",[e._v("JPA Auditing")]),e._v(" 이라고 한다.")]),e._v(" "),t("h2",{attrs:{id:"spring-legacy-vs-spring-boot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-legacy-vs-spring-boot"}},[e._v("#")]),e._v(" Spring Legacy vs. Spring Boot")]),e._v(" "),t("ul",[t("li",[e._v("임베디드 톰캣을 사용한다.")]),e._v(" "),t("li",[e._v("Spring이 주로 XML 파일에 빈을 정의하는 반면 Spring Boot는 어노테이션을 기반으로 빈을 관리한다.")]),e._v(" "),t("li",[e._v("사전에 정의된 합리적인 설정인 "),t("code",[e._v("Auto Configuration")]),e._v("을 통해 더욱 쉽게 서비스를 위한 설정을 할 수 있다.")])]),e._v(" "),t("h2",{attrs:{id:"spring-security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-security"}},[e._v("#")]),e._v(" Spring Security")]),e._v(" "),t("ul",[t("li",[e._v("인증과 접근 제어를 제공하는 스프링 모듈")]),e._v(" "),t("li",[e._v("스프링 시큐리티는 여러 서블릿 필터들의 묶음인 필터 체인으로 동작한다.")]),e._v(" "),t("li",[e._v("스프링 구성파일의 "),t("code",[e._v("HttpSecurity")]),e._v("를 조작하여 접근을 제어할 수 있다.")]),e._v(" "),t("li",[e._v("스프링 시큐리티는 "),t("code",[e._v("SecurityContext")]),e._v("의 "),t("code",[e._v("Authentication")]),e._v("에 현재 스레드와 관련된 인증 정보를 유지하고 있다.")])]),e._v(" "),t("h2",{attrs:{id:"spring-tdd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-tdd"}},[e._v("#")]),e._v(" Spring TDD")]),e._v(" "),t("p",[t("code",[e._v("통합테스트")]),e._v("는 프로젝트에서 사용하는 모든 컴포넌트를 컨테이너에 등록한다. 이 때문에 속도가 느리지만 운영 환경과 가장 유사하게 테스트할 수 있다.")]),e._v(" "),t("p",[t("code",[e._v("슬라이싱 테스트")]),e._v("는 레이어드 아키텍처에서 특정 계층과 관련된 컴포넌트만 컨테이너에 등록하여 독립적으로 테스트하는 것으로 속도가 빠르다. 다만 다른 계층으로의 의존성이 있는 경우 Mockito 같은 목업 라이브러리로 모킹해야한다.")]),e._v(" "),t("p",[e._v("어플리케이션이 커질 수록 통합테스트는 속도가 느려진다. 따라서 레이어드 아키텍쳐나 클린 아키텍처를 도입하여 계층을 명확하게 분리하고 모듈 간 응집도는 높히고 결합도는 낮추는 것이 가장 중요하다. 이후 슬라이싱 테스트를 도입하는 것이 좋다고 생각해요.")]),e._v(" "),t("h2",{attrs:{id:"spring-webflux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-webflux"}},[e._v("#")]),e._v(" Spring WebFlux")]),e._v(" "),t("p",[t("code",[e._v("Spring MVC")]),e._v("는 동기/블로킹이며, 런타임으로 멀티 스레드로 동작하는 톰캣 같은 서블릿 컨테이너를 사용한다. Spring MVC는 "),t("code",[e._v("One request One thread")]),e._v(" 모델로 요청이 올 때마다 스레드를 생성하여 전담하게 한다. 이 모델에서는 네트워크나 입출력 등 무거운 작업을 수행하면 스레드가 자원을 점유한 채 대기하게 된다. CPU는 다른 스레드를 실행시키기 위해 "),t("code",[e._v("Context Switching")]),e._v("을 하며, 스레드 수가 많아질 수록 이에 대한 비용이 커지게 된다.")]),e._v(" "),t("p",[t("b",[t("code",[e._v("Spring WebFlux")])]),e._v("는 비동기/논블로킹 모델이며, 보통 네티 같은 비동기/논블로킹 런타임을 사용한다. Spring WebFlux는 "),t("u",[e._v("이벤트 드리븐 모델")]),e._v("인 "),t("code",[e._v("Node.js")]),e._v("와 유사하다. 다만 싱글 스레드는 아니며 CPU 코어 수 만큼의 스레드로 병렬처리를 한다. 비동기/논블로킹 모델에서 워커 스레드는 입출력 같이 오랜 시간이 걸리는 작업이 I/O Controller에 의해 처리될 때 이를 기다리지 않고 다른 작업을 수행한다. 다시 말해 "),t("u",[e._v("스레드를 놀지 않게 하는 것이 핵심이며, 같은 스레드를 사용하기 때문에 "),t("code",[e._v("Context Switching")]),e._v(" 비용이 최소화된다.")])]),e._v(" "),t("p",[e._v("비동기/논블로킹 모델에서는 다른작업이 종료되었을 때 이를 알려줄 수 있는 방법이 필요한데, 보통 다음과 같은 방법으로 구현한다.")]),e._v(" "),t("ul",[t("li",[e._v("Callback를 함께 전달하여 작업이 끝났을 때 호출되도록 한다.")]),e._v(" "),t("li",[e._v("관찰, 구독 가능한 객체로 이벤트를 보내거나 상태 변화를 일으킨다.")])]),e._v(" "),t("p",[e._v("관찰, 구독 가능한 형태로 비동기/논블로킹 모델을 구현하는 경우, 서버가 데이터를 생성하는 속도가 클라이언트의 소비 속도보다 빠를 수 있다. 클라이언트는 이를 적절하게 처리하기 위해 배압 이슈를 해결해야 한다.")]),e._v(" "),t("p",[e._v("비동기/논블로킹의 모델은 네트워크 통신이나 데이터 소스도 논블로킹하게 처리해야한다. 그렇지 않으면 스레드 수가 적기 때문에 오히려 동기/블로킹 모델보다 속도가 느려지게 된다. Spring WebFlux의 경우 "),t("code",[e._v("WebClient")]),e._v("나 "),t("code",[e._v("Spring Data R2DBC(Reactive Relation Database Connectivity)")]),e._v("를 사용하여 네트워크 통신이 데이터 소스도 논블로킹하게 처리한다.")]),e._v(" "),t("p",[e._v("비동기/논블로킹 모델은 요청 하나가 CPU를 적게 사용하지만 요청 수는 많은 모델에 적합하다.")]),e._v(" "),t("p",[e._v("WebFlux는 Reactive Stream API 명세의 구현체인 "),t("code",[e._v("Reactor")]),e._v("의 "),t("code",[e._v("Mono")]),e._v(", "),t("code",[e._v("Flux")]),e._v("를 사용한다. 물론 다른 구현체는 "),t("code",[e._v("RxJava")]),e._v("를 사용할 수 있으며, Kotlin과 코루틴의 "),t("code",[e._v("suspend")]),e._v("함수를 사용하면 코드를 더욱 직관적으로 작성할 수 있다.")]),e._v(" "),t("p",[e._v("WebFlux는 "),t("code",[e._v("Server Sent Event")]),e._v(" 구현에도 사용할 수 있다.")]),e._v(" "),t("h2",{attrs:{id:"spring-batch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-batch"}},[e._v("#")]),e._v(" Spring Batch")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Spring Batch")]),e._v("을 사용하면 배치 작업을 쉽게 수행할 수 있다.")]),e._v(" "),t("li",[e._v("배치 작업을 원하는 시간에 실행하기 위해 "),t("code",[e._v("Spring Quartz")]),e._v("라는 스케쥴러와 함께 사용한다.")])])])}),[],!1,null,null,null);v.default=_.exports}}]);