---
title: "Maven Project 생성하기"
lang: ko
showOnSidebar: true
collapsible: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

## Maven 설치
MacOS 환경에서는 `Homebrew`를 통해 `Maven`을 설치할 수 있다.
``` 
$ brew install maven
```
설치된 Maven의 버전을 확인해보자
``` 
$ mvn -version
```
Homebrew의 `brew info`를 통해 설치경로 등의 패키지 정보를 확인할 수 있다.
``` 
$ brew info maven
```
```
maven: stable 3.8.4 (bottled)
Java-based project management
https://maven.apache.org/
Conflicts with:
  mvnvm (because also installs a 'mvn' executable)
/usr/local/Cellar/maven/3.8.4 (79 files, 10MB) *
  Poured from bottle on 2021-12-07 at 14:40:40
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/maven.rb
License: Apache-2.0
==> Dependencies
Required: openjdk ✔
==> Analytics
install: 77,619 (30 days), 215,451 (90 days), 673,523 (365 days)
install-on-request: 77,149 (30 days), 213,878 (90 days), 668,836 (365 days)
```

## Maven 프로젝트 생성하기
Maven 프로젝트를 생성해보자. 우선 프로젝트의 루트 디렉토리를 생성한다.
```
$ mkdir maven_project

$ cd maven_project
```
프로젝트의 루트 디렉토리에 `pom.xml`파일을 생성한다.
```
$ touch pom.xml
```
모든 Maven 프로젝트는 `pom.xml`파일을 포함해야하며, 다음 내용을 필수적으로 포함해야한다.
``` xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

    <modelVersion>4.0.0</modelVersion>
    <groupId>com.yologger.app</groupId>
    <artifactId>maven_project</artifactId>
    <packaging>jar</packaging>
    <version>0.0.1</version>
    <name>maven_project</name>
    <url>http://maven.apache.org</url>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.7.0</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>
```
- `<project>`: 최상위 태그
- `<modelVersion>`: pom.xml 파일의 버전이며, 항상 4.0.0 값으로 설정한다.
- `<groupId>`: 조직의 고유 id를 입력한다. 보통 조직 도메인 네임의 역순을 입력한다.
- `<artifactId>`: 애플리케이션을 구분하는 고유 id를 입력한다.
- `<version>`: 해당 artifact의 버전을 입력한다.
- `<packaging>`: 어떤 파일 형식으로 패키징할지 정의한다. jar, war, exe 등이 올 수 있다.
- `<name>`: 애플리케이션의 이름을 입력한다.
- `<build>`: 빌드 시 사용할 옵션을 입력한다.
- `<plugins>`: 플러그인은 Maven이 애플리케이션을 빌드할 때 사용하는 도구다. 이 태그 안에 사용할 플러그인을 나열한다. 모든 Maven 플러그인은 [이 곳](https://maven.apache.org/plugins/index.html)에서 확인할 수 있다.

`maven-compiler-plugin`는 소스코드를 컴파일 할 때 사용되는 플러그인이다. `<source>`태그에는 소스코드의 Java 버전을 입력하고 `<target>`태그에는 생성될 class파일의 Java 버전을 입력한다.

그 다음 `src/main/java` 디렉토리를 생성하고 `App.java`파일을 생성하자. 
``` java
public class App {
    public static void main(String args[]){
        System.out.println("Hello Maven Project!");
    }
}
```
기존에 빌드된 코드가 있다면 `mvn clean`명령어를 입력하여 정리한다.
``` 
$ mvn clean
```
이제 `mvn compile` 명령어로 프로젝트를 빌드한다.
```
$ mvn compile
```
빌드가 완료되면 `target` 디렉토리에 결과물이 생성된다.
``` {4}
$ ls
pom.xml 
src
target
```
이제 클래스 파일을 실행할 수 있다.
```
$ java -classpath target/classes App
Hello Maven Project! 
```

## 패키징
`패키징(Packaging)`이란 프로젝트를 쉽게 배포할 수 있도록 `jar`, `war`, `zip` 형태로 빌드하는 것이다. `mvn package` 명령어를 사용하면 프로젝트를 패키징할 수 있다. `jar`파일로 패키징하려면 `pom.xml`에 `maven_jar_plugin`플러그인을 추가해야한다.
```xml pom.xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

    <!-- .. -->

    <build>
        <plugins>
            <!-- .. -->
            <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-jar-plugin</artifactId>
            <version>3.2.0</version>
            <configuration>
            <archive>
                <manifest>
                <addClasspath>true</addClasspath>  
                <classpathPrefix>lib/</classpathPrefix>  
                <mainClass>App</mainClass>  
                </manifest>  
            </archive>
            </configuration>
        </plugin>

        </plugins>
    </build>
</project>
```
다음 명령어를 입력하여 패키징한다.
```
$ mvn package
```
`class`디렉토리에 `jar`파일이 생성된다.
``` {2}
$ ls ./target
maven_project-0.0.1.jar
classes                 
generated-sources       
maven-archiver          
maven-status            
```
패키징된 파일을 실행해보자.
```
$ java -jar target/maven_project-0.0.1.jar
Hello Maven Project!
```

## 템플릿 사용하기
`mvn archetype:generate`을 사용하면 템플릿을 사용하여 Maven 프로젝트를 쉽게 생성할 수 있다.
``` 
$ mvn archetype:generate
```
이 때 세 개의 인자를 전달해야한다.
- `groupId`: 조직의 고유 id를 입력한다. 보통 조직 도메인 네임의 역순을 입력한다.
- `artifactId`: 애플리케이션을 구분하는 고유 id를 입력한다.
- `archetypeArtifactId`: 프로젝트를 생성할 때 사용할 템플릿을 지정한다. 자주 사용되는 템플릿은 다음과 같으며, 모든 템플릿은 [이 곳](https://maven.apache.org/guides/introduction/introduction-to-archetypes.html)에서 확인 가능하다.
    - maven-archetype-quickstart
    - maven-archetype-simple
    - maven-archetype-webapp

이제 `maven-archetype-quickstart` 템플릿을 사용하여 프로젝트를 생성해보자.
```
$ mvn archetype:generate -DgroupId=com.yologger.app -DartifactId=quickstart -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```
`maven-archetype-quickstart`템플릿을 사용하면 다음과 같은 구조로 프로젝트가 생성된다.
```
$ cd quickstart

$ tree .
.
├── pom.xml
└── src
    ├── main
    │   └── java
    │       └── com
    │           └── yologger
    │               └── app
    │                   └── App.java
    └── test
        └── java
            └── com
                └── yologger
                    └── app
                        └── AppTest.java
```
이번엔 `maven-archetype-webapp`템플릿을 사용해보자.
```
$ mvn archetype:generate -DgroupId=com.yologger.webapp -DartifactId=webapp -DarchetypeArtifactId=maven-archetype-webapp -DinteractiveMode=false 
```
다음과 같은 구조로 프로젝트가 생성된다.
```
$ cd webapp

$ tree .
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