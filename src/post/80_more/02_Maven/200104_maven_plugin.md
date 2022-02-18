---
title: "Maven 플러그인"
lang: ko
showOnSidebar: true
collapsible: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

## Maven 플러그인
`Maven 플러그인`은 pom.xml에 다음과 같은 형태로 추가한다.
``` xml
<project>
    <!-- .. -->

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>2.5.1</version>
            </plugin>
            </plugin>
        </plugins>
    </build>

</project>
```
예제에서는 [Maven Compiler Plugin](https://maven.apache.org/plugins/maven-compiler-plugin/)을 추가하고 있다.

원격 저장소에서 다운받은 플러그인은 로컬 저장소에 저장된다. 로컬 저장소의 위치는 보통 `/[user_home_directory]/.m2/repository/org/apache/maven/plugins`에 위치한다.
```
$ pwd
/Users/yologger/.m2/repository/org/apache/maven/plugins

$ ls        
maven-compiler-plugin           
maven-install-plugin      
maven-archetype-plugin          
maven-dependency-plugin         
maven-jar-plugin                 
maven-war-plugin           
maven-release-plugin         
maven-deploy-plugin             
maven-clean-plugin              
maven-site-plugin
// ...
```

## Goal
하나의 Plugin은 여러 개의 `Goal`로 구성된다. 예를 들어 Maven Compiler Plugin은 다음과 같은 Goal을 지원한다.
- `compile`: sourceDirectory의 소스 코드를 컴파일
- `testCompile`: testSourceDirectory의 테스트 소스 코드를 컴파일

Goal은 다음과 같이 실행할 수 있다.
```
$ mvn groupId:artifactId:version:goal
```
예를 들어 Maven Compiler Plugin의 compile goal은 다음과 같이 실행한다.
```
$ mvn org.apache.maven.plugins:maven-compiler-plugin:2.1:compile
```
만약 `Settings.xml`에 groupId를 추가하면 더 쉽게 Plugin과 Goal을 실행할 수 있다.
``` xml
<pluginGroups>
  <pluginGroup>org.apache.maven.plugins</pluginGroup>
</pluginGroups>
```
```
// mvn <plugin>:<goal>
$ mvn compiler:compile 
```
프로젝트를 생성할 때 사용하는 `mvn archetype:generate`명령어도 사실은 Plugin과 Goal이다.
```
// mvn <plugin>:<goal>
$ mvn archetype:generate
```