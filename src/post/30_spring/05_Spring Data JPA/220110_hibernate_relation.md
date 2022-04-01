---
title: "Hibernate - Relation"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# 연관관계(Relation)
`Spring Data JPA`의 `연관관계(Relation)`에 대해 정리한다.

## @OneToMany
하나의 요소에 여러 개의 다른 요소들이 연결될 수 있으면 `One To Many(일대다)` 관계라고 한다.

예제를 살펴보자. 하나의 사용자 `MemberEntity`는 여러 포스트 `PostEntity`를 작성할 수 있다. 이를 `MemberEntity` 관점에서 표현하면 다음과 같다.
``` java {24,25}
// MemberEntity.java
@Entity
@Table(name= "member")
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberEntity extends BaseEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 200, nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String password;

    @OneToMany(mappedBy = "writer", cascade = CascadeType.ALL)
    private List<PostEntity> posts;
}
```

## @ManyToOne
이번에는 포스트 `PostEntity` 관점에서 살펴보자. 여러 포스트 `PostEntity`가 하나의 `MemberEntity`에 포함될 수 있다. 이를 코드로 작성하면 다음과 같다.
``` java
// PostEntity.java
@Table(name= "post")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostEntity extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "writer_id")
    private MemberEntity writer;
}
```

### 데이터 저장
연관관계를 매핑한 엔티티는 다음과 같이 저장한다.
``` java
MemberEntity member = new MemberEntity("paul@gmail.com", "Paul", "1234");
entityManager.persist(member);

PostEntity post = new PostEntity("content", member);
entityManager.persist(post);
```
실제 실행되는 데이터베이스 쿼리는 다음과 같다.
```
Hibernate: 
    insert 
    into
        member
        (email, name, password) 
    values
        (?, ?, ?)

Hibernate: 
    insert 
    into
        post
        (content, writer_id) 
    values
        (?, ?)
```

### 데이터 조회
연관관계가 매핑된 엔티티의 데이터 조회는 다음과 같이 할 수 있다.
``` java
Long id = 6L;
MemberEntity member = entityManager.find(MemberEntity.class, id);
List<PostEntity> posts = member.getPosts();
```
데이터베이스 쿼리는 다음과 같다.
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
Hibernate: 
    select
        p1_0.writer_id,
        p1_0.id,
        p1_0.content 
    from
        post as p1_0 
    where
        p1_0.writer_id = ?
```

### 데이터 수정
수정은 `update()`같은 메소드가 없다. 그저 엔티티의 속성값을 새롭게 설정하면 트랜잭션이 커밋될 때 플러시가 일어나면서 데이터베이스에 자동 저장된다.
``` java
transaction.begin();

Long id = 6L;
MemberEntity member = entityManager.find(MemberEntity.class, id);

// 수정
member.setName("John");

// 커밋
transaction.commit();
```
커밋이 호출되는 시점에 실행되는 쿼리는 다음과 같다.
```
Hibernate: 
    update
        member 
    set
        email=?,
        name=?,
        password=? 
    where
        id=?
```

### 연관관계 제거
`null`을 사용하여 연관관계를 제거할 수 있다.
``` java
transaction.begin();

Long id = 1L;
PostEntity post = entityManager.find(PostEntity.class, id);
post.setWriter(null);

transaction.commit();
```
커밋 시점에 실행되는 쿼리는 다음과 같다.
```
Hibernate: 
    update
        post 
    set
        content=?,
        writer_id=? 
    where
        id=?
```

### 엔티티 제거
연관관계가 매핑된 엔티티를 삭제하려면 연관관계를 먼저 제거한 후 엔티티를 삭제한다.
``` java
post1.setWriter(null);  // post1의 연관관계 제거
post2.setWriter(null);  // post2의 연관관계 제거
entitiManager.remove(member);   // member 엔티티 제거
```

## 양방향 연관관계
`MemberEntity` 코드를 다시 살펴보자.
``` java{11-12}
@Entity
@Table(name= "member")
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberEntity extends BaseEntity {

    // 중략 ..

    @OneToMany(mappedBy = "writer", cascade = CascadeType.ALL)
    private List<PostEntity> posts;
}
```
`MemberEntity`에서 `PostEntity`로 연관관계를 매핑하고 있다. 이를 <b>`단방향 연관관계`</b>라고 한다.

이제 `PostEntity` 코드를 살펴보자.
``` java{11-13}
@Table(name= "post")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostEntity extends BaseEntity {

    // 중략 ...

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "writer_id")
    private MemberEntity writer;
}
```
`PostEntity`에서 `MemberEntity`로 연관관계를 매핑했다. 이제 양쪽으로 연관관계가 매핑되었으며, 이를 <b>`양방향 연관관계`</b>라고 한다.

## 연관관계의 주인
관계형 데이터베이스는 투 테이블 간의 연관관계를 `외래 키(Foreign Key)`로 표현한다. 위의 `MemberEntity`, `PostEntity`로 생성된 데이터베이스 스키마에서 이를 확인할 수 있다.

![](./220110_hibernate_relation/1.png)

반면 객체 지향 언어에서는 `참조(Reference)`로 두 엔티티의 관계를 표현한다. 
``` java {6}
public class MemberEntity extends BaseEntity {

    // 생략 ...

    @OneToMany(mappedBy = "writer", cascade = CascadeType.ALL)
    private List<PostEntity> posts;
}
``` 

``` java {7}
public class PostEntity extends BaseEntity {

    // 생략... 

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "writer_id")
    private MemberEntity writer;
}
``` 
두 엔티티를 `양방향 연관관계`로 매핑하면 객체의 참조는 둘인데 외래 키는 하나가 된다. 이러한 차이 때문에 JPA에서는 두 객체 중 하나를 <b>`연관관계의 주인`</b>으로 설정해서 테이블 외래키를 관리하도록 해야한다.

<b>`연관관계의 주인`</b>은 외래키가 생성되는 테이블로 지정한다. 주인이 아닌 쪽에서는 `mappedBy` 속성으로 다른 엔티티를 주인으로 지정한다.
``` java {5}
public class MemberEntity extends BaseEntity {

    // 생략 ...

    @OneToMany(mappedBy = "writer", cascade = CascadeType.ALL)
    private List<PostEntity> posts;
}
``` 