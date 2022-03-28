---
title: "Hibernate 시작하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## 용어정리

- <b>`ORM(Object-Relational Mapping)`</b>: 관계형 데이터베이스의 테이블과 객체지향 프로그래밍의 객체를 매핑해주는 기술이다. 

- <b>`JPA(Java Persistence API)`</b>: `Java` 진형의 `ORM`을 `JPA`라고 한다. 
- <b>`Hibernate`</b>: `JPA`는 기능을 설명하는 `명세(Specification)`이므로 기능을 실제로 구현한 `구현체(Implementation)`가 필요하다. `Hibernate`는 `JPA`의 구현체 중 하나다.


## Hibernate 시작하기
`Gradle` 기반의 `Java` 프로젝트에서 `Hibernate`를 시작해보자. `Hibernate`를 사용하려면 다음 의존성을 추가해야한다.
``` groovy
dependencies {
    // Hibernate Entity Manager
    implementation 'org.hibernate:hibernate-entitymanager'
    
    // MySql Connector
    implementation 'mysql:mysql-connector-java':

    // Lombok
    implementation 'org.projectlombok:lombok:1.18.22'
}
```
`hibernate-entitymanager` 라이브러리를 내부적으로 다음과 같은 의존성을 포함한다.

![](./211001_hibernate/1.png)

그 다음 `src/main/resources/META-INF`에 `persistence.xml`을 생성한다. 이 파일에는 `Hibernate` 관련 설정을 작성한다.

![](./211001_hibernate/2.png)

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<persistence xmlns="http://xmlns.jcp.org/xml/ns/persistence" version="2.1">
    <persistence-unit name="test_persistence">
        <class>com.yologger.project.MemberEntity</class>
        <properties>
            <property name="javax.persistence.jdbc.driver" value="com.mysql.cj.jdbc.Driver"/>
            <property name="javax.persistence.jdbc.user" value="root"/>
            <property name="javax.persistence.jdbc.password" value="root"/>
            <property name="javax.persistence.jdbc.url" value="jdbc:mysql://127.0.0.1:3306/test_db"/>
            <property name="hibernate.dialect" value="org.hibernate.dialect.MySQLDialect"/>

            <property name="hibernate.show_sql" value="true"/>
            <property name="hibernate.format_sql" value="true"/>
        </properties>
    </persistence-unit>
</persistence>
```

## Entity 설계하기
이제 관계형 데이터베이스의 테이블과 매핑할 엔티티를 작성하자.
``` java
package com.yologger.project;

import javax.persistence.*;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Builder;

@Entity
@Table(name= "member")
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String email;

    @Column
    private String name;

    @Column
    private String password;

    public MemberEntity(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }
}
```

## 데이터 등록
`Hibernate`는 `EntityManager` 객체를 통해 CRUD 작업을 수행한다.
``` java
package com.yologger.project;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class App {
    public static void main(String[] args) {

        // EntityMangerFactory 생성
        EntityManagerFactory entityManagerfactory = Persistence.createEntityManagerFactory("test_persistence");

        // EntityManager 생성
        EntityManager entityManager = entityManagerfactory.createEntityManager();

        // Transaction 생성
        EntityTransaction transaction = entityManager.getTransaction();

        try {
            // Transaction 생성
            transaction.begin();

            // 엔티디 생성
            MemberEntity member = new MemberEntity("paul@gmail.com", "paul", "1234");

            // 데이터 삽입
            entityManager.persist(member);

            // Commit
            transaction.commit();

        } catch (Exception e) {
            transaction.rollback();
        } finally {
            entityManager.close();
        }
        entityManagerfactory.close();
    }
}
```
앱을 실행하면 로그에서 데이터베이스 쿼리를 확인할 수 있다.
```
Hibernate: 
    insert 
    into
        member
        (email, name, password) 
    values
        (?, ?, ?)
```

## 데이터 수정
`Hibernate`는 `update()`와 같은 수정 메소드를 제공하지 않는다. 그저 엔티티의 값을 다음과 같이 수정하면 된다.
``` java
MemberEntity member = new MemberEntity("john@gmail.com", "john", "1234");

// 수정
member.setEmail("monica@gmail.com");
member.setName("monica");

entityManager.persist(member);
```
이는 `Hibernate`의 `영속성 컨텍스트(Persistent Context)` 때문이다. 영속성 컨텍스트는 다음 포스트에서 다루겠다.

## 데이터 삭제
데이터 삭제는 `remove()` 메소드를 사용한다.
``` java
entityManager.remove(member);
```

## 데이터 한 개 조회
데이터 한 개를 조회할 때는 `find()`메소드를 사용한다.
``` java
MemberEntity member = entityManager.find(MemberEntity.class, id);
```
데이터 여러 개를 조회할 때는 `JPQL`, `QueryDSL` 등의 기술을 사용할 수 있다.