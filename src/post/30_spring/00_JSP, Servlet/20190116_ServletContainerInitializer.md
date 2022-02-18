---
title: "web.xml 파일 없애기"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

## ServletContainerInitializer
Servlet 3.0 부터는 `web.xml`없이 Servlet Context를 초기화할 수 있다. `javax.servlet.ServletContainerInitializer`인터페이스의 구현체를 만들고 `META-INF/services/javax.servlet.ServletContainerInitializer`라는 텍스트 파일에 추가하면 된다.

우선 `web.xml`을 사용한 간단한 예제를 살펴보자. `Controller` 서블릿 클래스를 컨테이너에 등록하고 URL 매핑을 하고있다.
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
    </servlet>
    <servlet-mapping>
        <servlet-name>controller</servlet-name>
        <url-pattern>/Controller</url-pattern>
    </servlet-mapping>

</web-app>
```

이제 `ServletContainerInitializer`인터페이스를 사용하여 위와 동일한 코드를 구현해보자. `web.xml`을 삭제하고 `ServletContainerInitializer`인터페이스의 구현체를 생성한다.
``` java AppInitializer.java
package com.yologger.app.config;

public class AppInitializer implements ServletContainerInitializer {

    @Override
    public void onStartup(Set<Class<?>> set, ServletContext servletContext) throws ServletException {	
        ServletRegistration.Dynamic servlet = servletContext.addServlet("controller", Controller.class);
        servlet.setLoadOnStartup(0);
        servlet.addMapping("/Controller");	
    }
}
```
그리고 `META-INFO/services` 디렉토리에 `javax.servlet.ServletContainerInitializer`라는 파일을 생성한다. 그 다음 `AppInitializer`클래스의 경로를 입력한다.
``` text javax.servlet.ServletContainerInitializer
com.yologger.app.config.AppInitializer
```
이제 웹 어플리케이션을 다시 시작해보자. Servlet Container는 `ServletContainerInitializer`인터페이스의 구현체를 참조하여 컨텍스트를 생성하게된다.

## SpringServletContainerInitializer
`Spring MVC` 역시 ServletContainerInitializer 인터페이스를 상속하는 `SpringServletContainerInitializer`를 사용한다. `SpringServletContainerInitializer`는 내부적으로 컨텍스트 파일(보통 *_context.xml 형태)을 읽어서 `Spring IoC Container`를 생성한 후 Servlet으로 등록한다. 