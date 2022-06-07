---
title: "Hibernate - JPQL"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# JPQL
<b>`JPQL(Java Persistence Query Laungage)`</b>를 사용하면 좀 더 복잡한 조회를 하거나 조인 작업을 수행할 수 있다. JPQL은 데이터베이스 `SQL`과 매우 유사한 문법을 가지고 있다. 차이점이 있다면 데이터베이스의 테이블이 아닌 <u>객체, 즉 엔티티를 대상으로 쿼리를 수행한다</u>는 것이다.

다음과 같은 객체, 즉 엔티티가 있다고 가정하자.

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

    public MemberEntity() {

    }

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
그 다음 `문자열` 안에 JPQL 문법을 작성한다.
``` java
String jpql = "select m from MemberEntity as m";
```
이제 JPQL과 `EntityManager.createQuery()`메소드로 JPQL을 실행할 수 있다.
``` java
List<MemberEntity> members = entityManager.createQuery(jpql, MemberEntity.class).getResultList();
```
로그에 출력되는 데이터베이스 쿼리는 다음과 같다.
```
Hibernate: 
    select
        m1_0.id,
        m1_0.email,
        m1_0.name,
        m1_0.password 
    from
        member as m1_0 
    where
        m1_0.id = ?
```