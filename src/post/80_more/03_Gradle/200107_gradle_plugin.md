---
title: "Gradle Plugin"
lang: ko
showOnSidebar: true
collapsible: true
---

# Gradle Plugin
`Gradle Plugin`은 유용한 Task들의 집합이다. Gradle Plugin을 추가하면 프로젝트를 더 다양한 방법으로 빌드할 수 있다. 간단한 Gradle 프로젝트를 만들면서 Gradle Plugin에 대해 알아보자. 

## 예제
먼저 디렉토리를 생성하자.
```
$ mkdir myProject
$ cd myProject
```
Gradle 프로젝트로 초기화하기 위하여 `gradle init`명령어를 입력한다.
``` 
$ gradle init
```
생성할 프로젝트 정보를 입력해야한다. 일단 아래와 같이 입력하자.
```
Select type of project to generate:
  1: basic
  2: application
  3: library
  4: Gradle plugin
Enter selection (default: basic) [1..4] 1

Select build script DSL:
  1: Groovy
  2: Kotlin
Enter selection (default: Groovy) [1..2] 1

Generate build using new APIs and behavior (some features may change in the next minor release)? (default: no) [yes, no] no

Project name (default: myProject): myProject
```
프로젝트가 성공적으로 생성되면 다음과 같이 출력된다.
```
> Task :init
Get more help with your project: Learn more about Gradle by exploring our samples at https://docs.gradle.org/7.3.1/samples
```
Gradle 프로젝트는 다음과 같은 구조를 가진다.
```
$ tree .
.
├── build.gradle
├── settings.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
└── .gradle
```

이제 Java 소스코드를 작성해보자. 우선 `src/java/main` 디렉토리를 생성한다.
``` console
$ mkdir -p src/java/main
$ cd src/java/main
```
이 디렉토리 안에 패키지를 생성한다.
```
$ mkdir -p com.yologger.app
```
디렉토리 구조는 다음과 같다.
```
$ tree
.
├── build.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
├── settings.gradle
└── src
    └── main
        └── java
            └── com
                └── yologger
                    └── app
                        └── Main.java
```
`Main.java`파일을 생성하고 아래와 같이 코드를 작성한다.
``` java Main.java
package com.yologger.app;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```
마지막으로 빌드 스크립트를 작성하자.
``` groovy build.gradle
// 플러그인 적용
apply plugin: 'java'
apply plugin: 'application'

application {
    // Main 함수가 포함된 클래스 지정
    mainClass = 'com.yologger.app.Main'
}
```
이제 다음 명령어로 프로젝트를 빌드할 수 있다.
```
$ gradle compileJava
```
다음 명령어로 프로젝트를 실행할 수도 있다.
```
$ gradle run
```

## Gradle Plugin
예제에서 `build.gradle`파일에 두 개의 플러그인을 적용했다.
``` groovy build.gradle
apply plugin: 'java'
apply plugin: 'application'
```
`java`는 Java 어플리케이션을 컴파일하기 위한 플러그인이다. 이 플러그인은 `compileJava` 태스크를 포함한다. 따라서 콘솔창에서 다음과 같이 태스크를 호출할 수 있게 된다.
```
$ gradle compileJava
```
java 플러그인이 제공하는 모든 태스크는 [이 곳](https://docs.gradle.org/current/userguide/java_plugin.html#java_plugin)에서 확인할 수 있다.

`application`은 Java 어플리케이션을 JVM에서 실행시키기 위한 플러그인이다. 이 플러그인은 `run` 태스크를 포함한다. 따라서 콘솔창에서 다음과 같이 태스크를 호출할 수 있게 된다.
```
$ gradle run
```
이처럼 `Gradle Plugin`은 기본으로 내장된 태스크 외에도 유용한 태스크 집합을 추가해준다.

## Built-in Plugin
Gradle은 내장된 기본 플러그인을 제공한다. 이를 `Built-in Plugin`이라고 한다. java, application 플러그인도 Built-in Plugin이며 별도의 설치없이 사용할 수 있다. 모든 Built-in Plugin은 [이 곳](https://docs.gradle.org/current/userguide/plugin_reference.html)에서 확인할 수 있다.

## 외부 Plugin 설치
`Built-in Plugin` 외에도 외부 플러그인을 설치하고 적용할 수 있다.

보통 안드로이드 어플리케이션을 개발할 때는 `Android` 플러그인과 `Kotlin Android` 플러그인과 설치한다.
``` groovy build.gradle (Project level)
buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        // Android Gradle Plugin
        classpath "com.android.tools.build:gradle:7.0.0"

        // Kotlin Android Gradle Plugin
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.5.21"
    }
}
```
그리고 다음과 같이 플러그인을 적용한다.
``` groovy build.gradle (Module level)
apply plugin: 'com.android.application'
apply plugin: 'kotlin-android'

android {
  // ...
}
```
스프링 부트 어플리케이션을 개발할 때는  `Spring Boot` 플러그인을 설치하고 적용한다.
``` groovy build.gradle
buildscript {
    repositories {
        mavenCentral()
        jcenter()
    }

    dependencies {
        classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
    }
}

apply plugin: 'org.springframework.boot'
apply plugin: 'io.spring.dependency-management'
```