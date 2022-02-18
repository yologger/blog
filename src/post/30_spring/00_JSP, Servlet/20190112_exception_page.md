---
title: "JSP 예외 페이지"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

# JSP 예외 페이지
`예외(Exception)`이 발생하면 특정 페이지를 보여줄 수 있다. 다음과 같이 `<%@ page isErrorPage="true" %>` JSP Action Tag를 추가하여 예외 페이지를 지정할 수 있다.
``` xml {4}
// errorPage404.jsp

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>404 Error page</title>
</head>
<body>
<h1>This is 404 Error page</h1>
</body>
</html>
```
이제 예외 페이지를 등록해야한다. 등록 방법에는 두 가지가 있다.

## web.xml에 예외 페이지 등록
``` xml {8-11}
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://xmlns.jcp.org/xml/ns/javaee" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd" id="WebApp_ID" version="3.1">
  
    <welcome-file-list>
        <!-- ... -->
    </welcome-file-list>
  
    <error-page>
        <error-code>404</error-code>
        <location>/errorPage404.jsp</location>
    </error-page>

</web-app>
```
다음과 같이 여러 에러 코드에 대한 예외 페이지를 등록할 수 있다.
``` xml {8-15}
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://xmlns.jcp.org/xml/ns/javaee" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd" id="WebApp_ID" version="3.1">
  
    <welcome-file-list>
        <!-- ... -->
    </welcome-file-list>
  
    <error-page>
        <error-code>404</error-code>
        <location>/errorPage404.jsp</location>
    </error-page>
    <error-page>
        <error-code>500</error-code>
        <location>/errorPage500.jsp</location>
    </error-page>

</web-app>
```

## JSP Action Tag를 통한 예외 페이지
페이지에서 에러가 발생할 때 특정 예외 페이지로 이동하도록 지정할 수 있다.
``` xml 
// Login.jsp

<%@ page errorPage=“errorPage.jsp” %>	
<!-- ... -->
```
`Login.jsp` 페이지에서 에러가 발생하면 `errorPage.jsp`로 이동한다. `errorPage.jsp`에는 `<%@ page isErrorPage="true" %>` JSP Action Tag를 추가하여 예외 페이지를 지정해야한다.
``` xml 
// errorPage.jsp

<%@ page isErrorPage=“true” %>
<!-- ... -->
```