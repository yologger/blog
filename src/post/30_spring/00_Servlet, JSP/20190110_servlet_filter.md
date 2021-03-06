---
title: "Servlet Filter"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## Filter
`필터(Filter)`를 사용하면 클라이언트의 요청을 서블릿에서 처리하기 전에 필터링할 수 있다. 필터는 다음과 같은 용도로 활용할 수 있다.
- 사용자 인증 필터
- 로깅 또는 감시 필터
- 이미지 변환 및 압축
- 데이터 변화

필터는 `Filter`인터페이스를 구현하고 세 가지 메소드를 구현해야한다.
``` java MyFilter.java
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;

public class MyFilter implements Filter {

    public MyFilter() {
        //..
    }

    public void init(FilterConfig filterConfig) throws ServletException {
        //..
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        //..
    }

    public void destroy() {
        //..
    }

}
```
### init()
Filter가 처음 생성될 때만 한 번 호출된다.
### destroy()
Filter가 소멸될 때 한 번 호출된다.
### doFilter()
이 메소드에서 Client의 Request를 필터링한다.
``` java
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
    // ...
}
```
이 함수의 세 번째 인자로 `FilterChain` 객체가 전달된다. 여러 개의 필터가 설정된 경우 `FilterChain`클래스의 `doFilter()`를 호출해야 다음 필터로 넘어간다.
``` java
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
    // (1) 전처리 코드
    chain.doFilter(request, response);
    // (2) 후처리 코드
}
```

## Filter 등록
Filter는 두 가지 방법으로 등록할 수 있다.

### @WebFilter 어노테이션
`@WebFilter`을 사용하면 된다. 이때 필터링할 경로를 함께 전달한다. 모든 경로에 대한 요청을 필터링하려면 `/*`을 전달하면 된다.
``` java MyFilter.java {3}
package com.yologger.app;

@WebFilter("/*")
public class MyFilter implements Filter {

    public MyFilter() {
        //..
    }

    public void init(FilterConfig fConfig) throws ServletException {
        //..
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        //..
    }

    public void destroy() {
        //..
    }

}
```
### web.xml에 등록
`web.xml`에 필터를 등록할 수도 있다.
``` java MyFilter.java
package com.yologger.app;

public class MyFilter implements Filter {

    // ..

}
```
``` xml{4-11}
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://xmlns.jcp.org/xml/ns/javaee" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd" id="WebApp_ID" version="3.1">

    <filter>
        <filter-name>MyFilter</filter-name>
        <filter-class>com.yologger.app.MyFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>MyFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>

</web-app> 
```

### 예제
이제 예제를 살펴보자.
``` java Controller.java
@WebServlet("/Controller")
public class Controller extends HttpServlet {
       
    public Controller() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doGet()");
        response.getWriter().append("/Controller");
    }
}
```
``` java MyFilter.java
@WebFilter("/*")
public class MyFilter implements Filter {

    public MyFilter() {
    }

    public void init(FilterConfig fConfig) throws ServletException {
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        System.out.println("Before doFilter()");
        chain.doFilter(request, response);
        System.out.println("After doFilter()");
    }

    public void destroy() {
    }
}
```
이제 웹 브라우저에서 `http://localhost:8000/project/Controller`로 접속하면 다음과 같이 출력된다.
```
Before doFilter()
doGet()
After doFilter()
```