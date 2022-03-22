---
title: "Annotation을 통한 빈 관리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Annotation을 통한 빈 관리
`Spring IoC Container`에 객체를 등록하는 방법은 두 가지다.

- XML 파일을 통한 객체 등록
- Annotation을 통한 객체 등록

이번 포스트에서는 Annotation을 통한 객체 등록에 대해 알아보려고 한다.

`XML 파일` 대신 `Annotation`을 사용하여 다음 `Person`클래스를 관리해보자.
``` java Person.java
class Person {

    private String name;

    public Person(String name){
        this.name = name;
    }

    public String getName(){
        return this.name;
    }
}
```

## @Configuration, @Bean
Java 파일을 생성하고 `@Configuration`을 붙여준다. 보통 이 어노테이션이 붙은 Java 파일을 구성파일이라고 한다.
``` java {5}
// ApplicationConfig.java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfig {

}
```

그리고 컨테이너에 등록할 객체를 반환하는 함수에 `@Bean`을 어노테이션을 추가하면 된다.
``` java {8,14}
// ApplicationConfig.java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfig {

	@Bean
	public Person doctor() {
		Person person = new Person("Paul");
        return person;
	}

	@Bean(name="programmer")
	public Person person() {
		Person person = new Person("Monica");
        return person;
	}
}
```
이제 `IoC Container`를 인스턴스화하자. 어노테이션을 사용하는 경우 `AnnotationConfigApplicationContext` 클래스를 사용한다.
``` java {5}
public class Main {

    public static void main(String[] args) {

        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(ApplicationConfig.class);
        
        Person doctor = ctx.getBean("doctor", Person.class);
        Person programmer = ctx.getBean("programmer", Person.class);

        System.out.println(doctor.getName());       // Paul
        System.out.println(programmer.getName());   // Monica
    }
}
```

## Component Scan
`@Component`, `@Controller`, `@Service`, `@Repository` 등의 어노테이션을 사용하면 구성파일을 사용하지 않고도 `Spring IoC Container`에 객체를 등록할 수 있다. 이러한 객체를 `Spring Stereotype`이라고도 한다.

`Component Scan`는 `@Component`, `@Controller`, `@Service`, `@Repository` 어노테이션이 붙은 클래스의 경로를 지정할 때 사용한다.

예제를 살펴보자. `MailManager`를 빈으로 등록하려고 하기 위해 `@Component` 어노테이션을 추가했다.
``` java{1,5}
package com.yologger.app;

import org.springframework.stereotype.Component;

@Component
public class MailManager {
    void sendEmail() {
        System.out.println("sendEmail()");
    }
}
```
컨테이너가 이 컴포넌트를 탐지할 수 있도록 구성파일에 경로를 지정해주자.
``` java{7}
package com.yologger.app;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.yologger.app")
public class ApplicationConfig {
}
```

이제 컨테이너에서 빈을 읽어올 수 있다.

``` java
package com.yologger.app;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(ApplicationConfig.class);
        MailManager manager = ctx.getBean("mailManager", MailManager.class);
        manager.sendEmail();
    }
}
```

## Scope
Bean은 `Scope`를 가진다. 기본값은 `prototype`이며 빈을 주입할 때 마다 새로운 인스턴스가 생성된다.

``` java {2}
@Component
@Scope("prototype")
public class MailManager {
    void sendEmail() {
        System.out.println("sendEmail()");
    }
}
```

scope를 `singleton`로 설정하면 빈은 컨테이너 내에서 오직 한 개만 존재한다.
``` java {2}
@Component
@Scope("singleton")
public class MailManager {
    void sendEmail() {
        System.out.println("sendEmail()");
    }
}
```