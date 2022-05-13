---
title: "Annotation을 통한 빈 관리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Annotation을 통한 빈 등록
`Spring IoC Container`에 객체를 등록하는 방법은 두 가지다.

- XML 파일을 통한 빈 등록
- Annotation을 통한 빈 등록

이번 포스트에서는 Annotation을 통한 객체 등록에 대해 정리한다.

## @Configuration, @Bean
다음 `Person`클래스를 어노테이션을 사용하여 빈으로 등록해보자. 
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

Java 파일을 생성하고 `@Configuration`을 붙여준다. 이 어노테이션이 붙은 파일을 설정파일이라고 한다.
``` java {4}
// ApplicationConfig.java
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfig {

}
```

그리고 컨테이너에 등록할 빈을 반환하는 함수를 정의하고, `@Bean`을 어노테이션을 추가하면 된다.
``` java {8}
// ApplicationConfig.java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfig {

	@Bean
	public Person person() {
		Person person = new Person("Paul");
        return person;
	}
}
```
`@Bean`의 `name` 속성으로 빈 이름을 직접 지정할 수 있다. 별도의 지정이 없으면 메소드 이름과 동일한 이름의 빈이 생성된다.

``` java {8,14}
// ApplicationConfig.java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfig {

	@Bean   // 빈 이름은 doctor
	public Person doctor() {    
		Person person = new Person("Paul");
        return person;
	}

	@Bean(name="programmer")    // 빈 이름은 programmer
	public Person person() {
		Person person = new Person("Monica");
        return person;
	}
}
```

이제 컨테이너를 인스턴스화하자. 어노테이션을 사용하는 경우 `AnnotationConfigApplicationContext` 클래스를 사용하면 된다.
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

## @ComponentScan
`@Component`, `@Controller`, `@Service`, `@Repository` 등의 어노테이션을 사용하면 구성파일을 사용하지 않고도 컨테이너에 객체를 등록할 수 있다. 이 어노테이션들을 사용하려면 `@ComponentScan`어노테이션으로 객체의 경로를 컨테이너에게 알려줘야한다.

예제를 살펴보자. `MailManager`를 빈으로 등록하려고 하기 위해 `@Component` 어노테이션을 추가했다.
``` java{1,5}
package com.yologger.app;

import org.springframework.stereotype.Component;

@Component
public class MailManager {
    void sendEmail() {
        // ...
    }
}
```
컨테이너가 이 컴포넌트를 탐지할 수 있도록 구성파일에서 경로를 지정해주자.
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

참고로 `@Component`의 `name` 속성으로 빈 이름을 직접 지정할 수 있다.
``` java
@Component(name = "myFileManager")
public class FileManager {
    // ...
}
```
`name` 속성을 지정하지 않으면 클래스 이름의 앞 글자만 소문자인 값으로 빈 이름이 설정된다.
``` java
@Component
public class FileManager {
    // ...
}
```

## @Scope
빈은 `스코프(Scope)`를 가진다. 기본값은 `singleton`이며, 빈은 컨테이너 내에서 오직 한 개만 존재한다.
``` java {2}
@Component
@Scope("singleton")
public class MailManager {
    void sendEmail() {
        System.out.println("sendEmail()");
    }
}
```

스코프를 `prototype`으로 설정하면 빈을 주입할 때 마다 새로운 인스턴스가 생성된다.

``` java {2}
@Component
@Scope("prototype")
public class MailManager {
    void sendEmail() {
        System.out.println("sendEmail()");
    }
}
```

## @Lazy
기본적으로 스프링은 애플리케이션 구동과 동시에 모든 빈을 컨테이너에 등록하고 생성한다. `@Lazy` 어노테이션을 사용하면 빈이 실제로 참조될 때 생성한다. 
``` java
@Component
@Lazy
public class MailManager {
    // ..
}
```

## @DependsOn
`@DependsOn`을 사용하면 다른 빈이 먼저 초기화되어야 해당 빈이 초기화되도록 강제할 수 있다.
``` java
@Configuration
public class Config {

    @Bean
    @DependsOn("postService")
    public PostRepository postRepository() {
        // ...
    }
}
```