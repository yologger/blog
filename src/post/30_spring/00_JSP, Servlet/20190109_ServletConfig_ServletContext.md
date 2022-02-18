---
title: "서블릿 초기화 파라미터 - ServletConfig, ServletContext"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

## ServletConfig
`ServletConfig`를 사용하면 <u>특정 서블릿</u>이 초기화될 때 데이터를 전달할 수 있다.  `ServletConfig`는 두 가지 방법으로 사용한다.

### @WebServlet 어노테이션
`@WebServlet` 어노테이션의 `initParams` 속성으로 초기화 파라미터를 전달한다.
``` java Controller.java
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.WebInitParam;

@WebServlet(urlPatterns = {"/Controller"}, initParams={@WebInitParam(name="name", value="Paul"), @WebInitParam(name="nation", value="England")})
public class Controller extends HttpServlet {
    // ..
}
```
이제 다음과 같이 사용할 수 있다.
``` java Controller.java
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.WebInitParam;

@WebServlet(urlPatterns = {"/Controller"}, initParams={@WebInitParam(name="name", value="Paul"), @WebInitParam(name="nation", value="England")})
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
서블릿 초기화 파라미터는 `web.xml`에 정의할 수도 있다.
``` xml web.xml
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
`ServletContext` WAS에서 실행 중인 Web Application 한 개에 대한 상태 정보를 의미한다. 모든 Servlet이 ServletContext에 접근할 수 있으며, Servlet 간의 데이터 공유에도 사용할 수 있다.

`ServletContext`는 `web.xml`에 정의한다. ServletContext는 Servlet이 생성되기 전에 미리 구성되어야한다. 따라서 Servlet 매핑보다 위에 정의한다.
``` xml web.xml
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
``` java MyController.java
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
``` java Controller2.java
public class YourController extends HttpServlet {

    // ..

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = getServletContext();
        String name = servletContext.getInitParameter("name");      // Paul
        String nation = servletContext.getInitParameter("nation");  // England
    }
}
```