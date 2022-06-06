---
title: "스프링 부트 jar로 빌드하고 실행하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## Spring Legacy vs. Spring Boot
`Legacy Spring` 프로젝트를 빌드하면 `WAR(Web Application Archive)` 형태의 결과물이 생성된다. 이 `WAR` 파일을 실행하려면 `톰캣(Tomcat)`과 같은 컨테이너가 필요하다.

`Spring Boot` 프로젝트를 빌드하면 `JAR(Java Archive)` 형태의 결과물이 생성된다. `톰캣(Tomcat)`을 내장하고 있기 때문에 `JRE`만 있어도 실행 가능하다.

## 스프링부트 프로젝트 빌드하기
Gradle을 사용하는 경우 다음과 같은 방법으로 스프링부트 프로젝트를 빌드할 수 있다.
``` shellsession
$ ./gradlew clean build
```
빌드 결과물은 `build/libs` 디렉토리 아래 생성된다.
- `myproject-0.0.1.jar`
- `myproject-0.0.1-plain.jar`

## Plain jar vs. Executable jar
스프링 부트 2.5부터는 프로젝트를 빌드하면 두 개의 JAR 파일이 생성된다.
- `myproject-0.0.1.jar`
- `myproject-0.0.1-plain.jar`

`myproject-0.0.1-plain.jar`는 어플리케이션 실행에 필요한 의존성을 포함하지 않고 작성된 소스코드의 클래스 파일과 리소스 파일만 포함한다. 의존성을 포함하지 않기 때문에 `java -jar` 명령어로 실행할 경우 에러가 발상한다. 이러한 JAR 파일을 `Plain jar`라고 한다.

`myproject-0.0.1.jar`는 어플리케이션 실행에 필요한 모든 의존성을 포함한다. 때문에 `java -jar` 명령어로 실행할 수 있다.

`Plain jar`를 생성하지 않으려면 `build.gradle`에 다음 코드를 추가해주면 된다.
``` groovy
jar {
    enabled = false
}
```

## 스프링부트 실행하기
JAR 파일로 빌드된 스프링부트 프로젝트는 다음과 같이 실행할 수 있다.
``` shellsession
$ java -jar myproject-0.0.1.jar
```

### 포트번호 설정하기
``` shellsession
$ java -jar myproject-0.0.1.jar --server.port=8080
```
`-D` 파라미터는 반드시 `-jar`옵션과 `<YOUR_JAR>.jar`파일 사이에 와야한다.
``` shellsession
$ java -jar --Dserver.port=8080 myproject-0.0.1.jar
```

### properties 파일 추가하기
`src/main/resources`에 위치하는 설정 파일(`*.properties`, `*.yml`)은 빌드할 때 JAR 파일 내부에 포함된다. 그러나 `spring.config.location` 옵션을 사용하면 JAR 파일 외부에 존재하는 설정 파일을 실행 시점에 포함시킬 수 있다.

``` shellsession
$ java -jar myproject.jar --spring.config.location=/home/ec2-user/myapp/datasource.properties
```
`콤마(,)`로 여러 설정 파일을 적용할 수도 있다.
``` shellsession
$ java -jar myproject.jar --spring.config.location=/home/ec2-user/myapp/datasource.properties,/home/ec2-user/app/myapp/security.properties
```

### Active Profile 파일 지정하기
`spring.profiles.active` 옵션으로 JAR 파일을 실행할 때 활성화할 프로파일을 지정할 수 있다.
``` shellsession
$ java -jar -Dspring.profiles.active=dev myprojexwct-0.0.1.jar
```
``` shellsession
$ java -jar myproject-0.0.1.jar --spring.profiles.active=dev
```
``` properties
# application-dev.properties
spring.config.activate.on-profile=dev

# 생략..
```

## nohup
`nohup`은 프로세스와의 세션을 종료해도 프로세스가 백그라운드로 계속 실행하도록 하는 리눅스 명령어다. 보통 운영 환경에서 프로세스가 중단없이 실행되도록 하는데 사용한다.

``` shellsession
// nohup [프로세스] &
$ nohup -jar myproject-0.0.1.jar &
```

`nohup`으로 실행한 프로세스는 `nohup.out`이라는 파일에 결과물을 출력한다. `nohup.out` 파일을 생성하지 않으려면 표준출력과 표준에러를 `/dev/null`로 리다이랙션해주면 된다.
``` shellsession
// nohup [프로세스] &
$ nohup -jar myproject-0.0.1.jar 1>/dev/null 2>&1 &
```



