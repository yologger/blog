---
title: "Java Web Application 이란?"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Java Web Application

`Java Web Application`은 일반적인 `Java Application`과는 여러가지 차이점이 있다. Eclipse나 InteliJ 같은 IDE를 사용하면 Java Web Application 프로젝트를 쉽게 생성할 수 있다. 그러나 이번 포스트에서는 `Maven`으로 Java Web Application을 구성하면서 Java Application과의 차이점, 그리고 프로젝트의 구조에 대해 알아본다.

## 프로젝트 구조

[`maven`](/post/80_more/02_Maven/200102_maven_project.html)과 maven에서 제공하는 `maven-archtype-webapp` 탬플릿을 사용하면 Java Web Application 프로젝트를 쉽게 구성할 수 있다.
``` bash
$ mvn archetype:generate -DarchetypeArtifactId=maven-archetype-webapp
```
``` bash
....
Define value for property 'groupId': com.yologger
Define value for property 'artifactId': web_app
Define value for property 'version' 1.0-SNAPSHOT: : 0.0.1
Define value for property 'package' com.yologger: : com.yologger
Confirm properties configuration:
groupId: com.yologger
artifactId: web_app
version: 0.0.1
package: com.yologger
 Y: : y
....
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  20.264 s
[INFO] Finished at: 2021-12-07T17:31:11+09:00
[INFO] ------------------------------------------------------------------------
```
생성된 프로젝트의 구조는 다음과 같다.
``` bash
$  tree
.
├── pom.xml
└── src
    └── main
        ├── resources
        └── webapp
            ├── WEB-INF
            │   └── web.xml
            └── index.jsp
```
`webapp`디렉토리는 외부로 공개되며, 이 안에 있는 JSP 파일은 웹 브라우저에서 다음과 같이 접근할 수 있다.
![](1.png)

`webapp/WEB-INF` 디렉토리에는 외부로 공개하지 않아야 하는 파일을 위치시킨다. 추가적으로 Java Web Application은 `webapp/WEB-INF` 디렉토리를 생성하고 `web.xml`파일을 배치해야한다. 

참고로 IntelliJ나 Eclipse로 Java Web Application을 생성하면 `META-INF` 디렉토리와 `MANIFEST.MF`를 확인할 수 있다.
``` bash
$  tree
.
├── pom.xml
└── src
    └── main
        ├── resources
        └── webapp
            ├── META-INF
            │   └── MANIFEST.MF
            ├── WEB-INF
            │   └── web.xml
            └── index.jsp
```
이 파일은 프로젝트를 [`jar`](/ko/2018/01/03/04_java/180103_jar/)포맷으로 패키징할 때 사용한다.


## 의존성 추가
`JSP`, `Servlet` 등 Java Web Application의 핵심 요소들을 사용하려면 의존성을 추가해야한다.
``` xml
<!-- pom.xml -->

<project>
  <dependencies>
    <!-- Java Servlet API -->
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
        <version>3.1.0</version>
        <scope>provided</scope>
    </dependency>
    <!-- JSP API -->
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>jsp-api</artifactId>
        <version>2.0</version>
        <scope>provided</scope>
    </dependency>
  </dependencies>
</project>
```
## Java 파일은 어디에 작성해야할까?
지금까지 생성한 프로젝트는 Java 프로젝트인데 `java`폴더가 없다. 이때는 main폴더에 java폴더를 생성한 후, 그 안에 패키지와 소스 코드 파일을 배치하면 된다.
``` bash
$  tree
.
├── pom.xml
└── src
    └── main
        ├── java
        │   └── com
        │       └── yologger
        │           └── app
        │               └── Controller.java    
        ├── resources
        └── webapp
            ├── WEB-INF
            │   └── web.xml
            └── index.jsp
```
``` java
// Controller.java

package com.yologger.app;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Controller extends HttpServlet {

    private static final long serialVersionUID = 1L;

    public Controller() {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().append("Served at: ").append(request.getContextPath());
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

## Web Application Server 준비
일반적인 Java Application은 JDK만 준비되면 쉽게 실행할 수 있다. 그러나 Java Web Application은 JDK 외에도 `WAS(Web Application Server)`가 필요하다. `Apache Tomcat`이 대표적인 WAS다.