---
title: "ServletConfig, ServletContext"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## ServletConfig
`ServletConfig`는 <u>특정 서블릿</u>에 대한 정보를 가지고 있는 런타임 정보다. 

### @WebServlet 어노테이션
`@WebServlet` 어노테이션의 `initParams` 속성으로 `ServletConfig`를 생성할 때 초기화 파라미터를 전달할 수 있다.
``` java{4-10}
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.WebInitParam;

@WebServlet(
    urlPatterns={"/Controller"}, 
    initParams={
        @WebInitParam(name="name", value="Paul"), 
        @WebInitParam(name="nation", value="England")
    }
)
public class Controller extends HttpServlet {
    // ..
}
```
이제 다음과 같이 사용할 수 있다.
``` java{16-18}
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.WebInitParam;

@WebServlet(
    urlPatterns={"/Controller"}, 
    initParams={
        @WebInitParam(name="name", value="Paul"), 
        @WebInitParam(name="nation", value="England")
    }
)
public class Controller extends HttpServlet {

    // ..

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletConfig servletConfig = getServletConfig();
        String name = servletConfig.getInitParameter("name");       // Paul
        String nation = servletConfig.getInitParameter("nation");   // England
    }
}
```

### web.xml
`web.xml` 파일에 서블릿을 선언할 때 `<param-name>`, `<param-value>` 태그로 초기화 파라미터를 전달할 수 있다.
``` xml{9-24}
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://xmlns.jcp.org/xml/ns/javaee"
    xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
    id="WebApp_ID" version="3.1">

    <!-- ... -->

    <servlet>
        <servlet-name>controller</servlet-name>
        <servlet-class>com.yologger.app.controller.Controller</servlet-class>
        <init-param>
            <param-name>name</param-name>
            <param-value>paul</param-value>
        </init-param>
        <init-param>
            <param-name>nation</param-name>
            <param-value>england</param-value>
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>controller</servlet-name>
        <url-pattern>/controller</url-pattern>
    </servlet-mapping>

</web-app>
```
다음과 같이 사용한다.
``` java Controller.java
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.WebInitParam;

public class Controller extends HttpServlet {

    // ..

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletConfig servletConfig = getServletConfig();
        String name = servletConfig.getInitParameter("name");       // Paul
        String nation = servletConfig.getInitParameter("nation");   // England
    }
}
```

## ServletContext
대부분의 애플리케이션은 런타임에 시시각각 변하는 애플리케이션에 대한 종합적인 정보를 메모리에 유지하고 있다. 이를 보통 `컨텍스트(Context)`라고 한다. Java Web Application은 `ServletContext` 인터페이스로 컨텍스트에 접근할 수 있다. ServletContext는 모든 Servlet에서 접근할 수 있으며, Servlet 간의 데이터 공유에도 사용할 수 있다.

`ServletContext`는 `web.xml`에 정의한다. ServletContext는 Servlet이 생성되기 전에 미리 구성되어야한다. 따라서 Servlet 매핑보다 위에 정의한다.
``` xml{7-16}
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://xmlns.jcp.org/xml/ns/javaee"
	xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
	id="WebApp_ID" version="3.1">

    <!-- ServletContext -->
    <context-param>
        <param-name>name</param-name>
        <param-value>Paul</param-value>
    </context-param>

    <context-param>
        <param-name>nation</param-name>
        <param-value>England</param-value>
    </context-param>

    <!-- Servlet -->
    <servlet>
        <servlet-name>MyController</servlet-name>
        <servlet-class>com.yologger.app.controller.MyController</servlet-class>
        <init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>MyController</servlet-name>
        <url-pattern>/MyController</url-pattern>
    </servlet-mapping>

    <servlet>
        <servlet-name>YourController</servlet-name>
        <servlet-class>com.yologger.app.controller.YourController</servlet-class>
        <init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>YourController</servlet-name>
        <url-pattern>/YourController</url-pattern>
    </servlet-mapping>

</web-app>
```

`ServletContext`는 다음과 같이 접근한다.
``` java {8-10}
// MyController.java

public class MyController extends HttpServlet {

    // ..

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = getServletContext();
        String name = servletContext.getInitParameter("name");      // Paul
        String nation = servletContext.getInitParameter("nation");  // England
    }
}
```
`ServletContext`는 동일한 웹 애플리케이션 내 어떠한 Servlet에서도 접근할 수 있다.
``` java 
// YourController.java

public class YourController extends HttpServlet {

    // ..

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = getServletContext();
        String name = servletContext.getInitParameter("name");      // Paul
        String nation = servletContext.getInitParameter("nation");  // England
    }
}
```

## ServletContextListener
`ServletContextListener`을 사용하면 웹 애플리케이션의 생명주기를 감시할 수 있다. 우선 `ServletContextListener`클래스를 상속하는 클래스를 정의한다.
``` java{3}
package com.yologger.app.listener;

public class AppListener implements ServletContextListener {
    // ...
}
```
ServletContextListener의 `contextInitialized()`, `contextDestroyed()` 메소드를 오버라이드한다.
``` java AppListener.java
package com.yologger.app.listener;

public class AppListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent event){
        // ...
    }		

    @Override
    public void contextDestroyed(ServletContextEvent event){
        // ...
    }	
}
```
- `contextInitialized()`: Web Application이 시작할 때 해당 메소드가 호출된다.
- `contextDestroyed()`: Web Application이 소멸할 때 해당 메소드가 호출된다.

이제 AppListener를 Web Container에 등록해야한다. 두 가지 방법이 있다.

### web.xml
`<listener>`태그를 사용하여 `web.xml`에 등록한다.
``` xml {13-15}
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://xmlns.jcp.org/xml/ns/javaee"
	xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
	id="WebApp_ID" version="3.1">

    <!-- ServletContext -->
    <context-param>
        <!-- .. -->
    </context-param>

    <!-- Listener -->
    <listener>
        <listener-class>com.yologger.app.listener.AppListener</listener-class>
    </listener>

    <!-- Servlet Mapping -->
    <servlet>
        <!-- .. -->
    </servlet>
</web-app>
```

### @WebListener 어노테이션
`ServletContextListener`를 상속하는 클래스에 `@WebListener`어노테이션을 추가한다.
``` java{5}
package com.yologger.app.listener;

import javax.servlet.annotation.WebListener;

public class AppListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent event){
        // ...
    }		

    @Override
    public void contextDestroyed(ServletContextEvent event){
        // ...
    }	
}
```