---
title: "ServletContextListener"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

# ServletContextListener
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

## web.xml
`<listener>`태그를 사용하여 `Web.xml`에 등록한다.
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

## @WebListener 어노테이션
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