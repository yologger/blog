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
하나의 요소에 여러 개의 다른 요소들이 연결될 수 있으면 `One-To-Many(일대다)` 관계라고 한다.

예제를 살펴보자. 하나의 사용자(MemberEntity)는 여러 게시물(PostEntity)를 작성할 수 있다. 이를 사용자 관점에서 표현하면 다음과 같다.
``` java {20,21}
// MemberEntity.java
@Entity
@Table(name= "member")
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String password;

    @OneToMany
    private List<PostEntity> posts = new ArrayList<>();

    // 생략 ...
}
```

## @ManyToOne
이번에는 게시물(PostEntity) 관점에서 살펴보자. 여러 게시물은 하나의 사용자에 포함될 수 있다. 이를 `Many-To-One(다대일)`관계라고 하며, 코드로 작성하면 다음과 같다.
``` java{13-14}
// PostEntity.java
@Entity
@Table(name= "post")
public class PostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content")
    private String content;

    @ManyToOne
    private MemberEntity writer;

    // 생략 ...
}
```

## 단방향 연관관계, 양방향 연관관계
MemberEntity 코드를 다시 살펴보자.  
``` java{5-6}
@Entity
@Table(name= "member")
public class MemberEntity {

    @OneToMany
    private List<PostEntity> posts = new ArrayList<>();

    // 중략 ..
}
```
MemberEntity에서 PostEntity로 연관관계를 매핑하고 있다. 이를 <b>`단방향 연관관계`</b>라고 한다.

이제 PostEntity 코드를 살펴보자.
``` java{5-6}
@Entity
@Table(name= "post")
public class PostEntity {

    @ManyToOne
    private MemberEntity writer;

    // 중략 ...
}
```
PostEntity에서 MemberEntity로 연관관계를 매핑했다. 이제 양쪽으로 연관관계가 매핑되었으며, 이를 <b>`양방향 연관관계`</b>라고 한다.

## 연관관계의 주인
관계형 데이터베이스는 투 테이블 간의 연관관계를 `외래 키(Foreign Key)`로 표현한다. MemberEntity, PostEntity로 생성된 데이터베이스 스키마에서 이를 확인할 수 있다.

![](./220110_hibernate_relation/1.png)

반면 객체 지향 언어에서는 `참조(Reference)`로 두 엔티티의 관계를 표현한다. 
``` java {3-4}
public class MemberEntity {

    @OneToMany(mappedBy = "writer")
    private List<PostEntity> posts = new ArrayList<>();

    // 생략 ...
}
``` 

``` java {3-4}
public class PostEntity {

    @ManyToOne
    private MemberEntity writer;

    // 생략... 
}
``` 
두 엔티티를 양방향 연관관계로 매핑하면 객체의 참조는 둘인데 외래 키는 하나가 된다. 이러한 차이 때문에 <u>Hibernate에서는 두 객체 중 하나를 <b>`연관관계의 주인`</b>으로 설정해서 테이블 외래키를 관리하도록 해야한다</u>.

<b>`연관관계의 주인`</b>은 외래키가 생성되는 테이블로 지정한다. 주인이 아닌 엔티티에서 <b>`mappedBy`</b> 속성으로 다른 엔티티를 주인으로 지정하면 된다.

``` java {5}
public class MemberEntity {

    // 생략 ...

    @OneToMany(mappedBy = "writer")
    private List<PostEntity> posts = new ArrayList<>();
}
``` 

### 연관관계 주인과 관련된 주의사항
연관관계의 주인인 엔티티만이 외래키를 관리(연관관계 추가, 변경, 삭제)할 수 있다.
``` java
MemberEntity member = new MemberEntity("paul@gmail.com", "Paul", "1234");
entityManager.persist(member);

PostEntity post = new PostEntity("content", member);
entityManager.persist(post);

// 연관관계 추가
post.setWriter(member);
```
아래 코드는 연관관계의 주인이 아닌 엔티티에서 연관관계를 추가하고 있기 때문에 데이터베이스에 반영되지 않고 무시된다. 따라서 데이터베이스에 값이 추가되지 않는다.
``` java
member.getPosts().addPost(post);    // 무시
```

연관관계의 주인이 아닌 엔티티에서는 조회만 할 수 있다.
``` java
List<PostEntity> posts = member.getPosts(); 
```

### 엔티티 객체까지 고려한 양방향 관계
연관관계의 주인이 아닌 엔티티에서 연관관계를 추가하면 데이터베이스에 반영되지 않고 무시된다.  그럼에도 객체지향 관점에서는 연관관계의 주인인 엔티티 뿐만 아니라 아닌 쪽에도 데이터를 저장하는 것이 안전하다. 

예제를 살펴보자. 연관관계의 주인인 엔티티에만 데이터를 저장하고 있다.
``` java
Member member = new Member("paul@gmail.com", "paul", "1234");
Post post1 = new Post("content1")
Post post2 = new Post("content2")

// 연관관계 설정
post1.setWriter(member);
post2.setWriter(member);
```
이제 MemberEntity를 통해 PostEntity를 조회해보자. 
``` java
List<PostEntity> posts = member.getPosts();
System.out.println(posts.size());   // 0
```
`posts`의 크기가 0으로 출력된다. PostEntity에서 MemberEntity로의 연관관계는 설정되었으나 MemberEntity에서 PostEntity로의 연관관계는 설정되지 않았기 때문이다. 따라서 다음과 같이 다음과 같이 두 엔티티 객체에 데이터를 저장하도록 수정해야한다.
``` java{9-15}
@Entity
@Table(name= "post")
public class PostEntity {

    @ManyToOne
    @JoinColumn(name = "member_id")
    private MemberEntity writer;

    public void setWriter(MemberEntity writer) {
        if (this.writer != null) {
            this.writer.getPosts().remove(this);
        }
        this.writer = writer;
        writer.getPosts().add(this);
    } 

    // 중략 ...
}
```

## @JoinColumn
외래키 컬럼 이름을 별도로 지정하지 않으면 다음과 같은 형식으로 외래키 컬럼이 생성된다.
- `엔티티 필드 이름`_`참조하는 테이블의 컬럼명`

예제를 살펴보자.
``` java{6}
@Entity
@Table(name= "post")
public class PostEntity {

    @ManyToOne
    private MemberEntity writer;

    // 중략 ...
}
```
``` java {6,8}
@Entity
@Table(name= "member")
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 중략 ...
}
```
외래키 컬럼 이름을 별도로 지정하지 않았기 때문에 `writer_id`라는 이름으로 외래키 컬럼이 생성된다.

`@JoinColumn`을 사용하면 외래키 컬럼의 이름을 지정할 수 있다. 
``` java{6}
@Entity
@Table(name= "post")
public class PostEntity {

    @ManyToOne
    @JoinColumn(name = "member_id")
    private MemberEntity writer;

    // 중략 ...
}
```

## CRUD
연관관계에 있는 엔티티의 `CRUD`에 대해 정리한다.

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
Hibernate에는 `update()`같은 수정 메소드가 없다. 그저 엔티티의 속성값을 새롭게 설정하면 트랜잭션이 커밋될 때 플러시가 일어나면서 데이터베이스에 자동 저장된다.
``` java {8}
// 트랜잭션 생성
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
``` java{6}
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
연관관계가 매핑된 엔티티를 삭제할 때는 연관관계를 먼저 제거한 후 엔티티를 삭제한다.
``` java
post1.setWriter(null);  // post1의 연관관계 제거
post2.setWriter(null);  // post2의 연관관계 제거

entitiManager.remove(member);   // member 엔티티 제거
```

## @OneToOne
한 요소에 다른 한 요소만 연결될 수 있으면 `One-To-One(일대일)`관계라고 한다.

예제를 살펴보자. 한 사용자(MemberEntity)는 한 프로필(ProfileEntity) 정보만 가질 수 있다.
``` java
// MemberEntity.java
@Entity
@Table(name= "member")
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private ProfileEntity profile;

    // 생략 ...
}
```
``` java
// ProfileEntity
@Entity
@Table(name= "profile")
public class ProfileEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String address;

    @Column
    private String school;

    // 생략 ...
}
```
`@OneToOne` 역시 양방향 일대일 연관관계를 만들 수 있다.
``` java
// MemberEntity.java
@Entity
@Table(name= "member")
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "profile_id")
    private ProfileEntity profile;

    // 생략 ...
}
```
``` java
// ProfileEntity
@Entity
@Table(name= "profile")
public class ProfileEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String address;

    @Column
    private String school;

    @OneToOne(mappedBy = "profile")
    private MemberEntity member;

    // 생략 ...
}
```

## @ManyToMany
쇼핑몰을 개발하려고 한다. 한 사용자는 여러 상품을 구매할 수 있다. 한 상품을 여러 사용자가 구매할 수도 있다. 이러한 관계를 `Many-To-Many(다대다)`관계라고 한다.

다대다 관계는 사용자 엔티티, 상품 엔티티, 외래키로만 표현할 수 없고 별도의 연결 테이블이 필요하다.

이제 다대다 일대일 연관관계를 만들어보자.
``` java {14-19}
// MemberEntity.java
@Entity
@Table(name= "member")
public class MemberEntity {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String email;

    @ManyToMany
    @JoinTable(
            name = "member_product",
            joinColumns = @JoinColumn(name = "member_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<ProductEntity> products = new ArrayList<ProductEntity>();
}
```
``` java
// ProfileEntity.java
@Entity
@Table(name = "product")
public class ProductEntity {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;
}
```
- <b>`@JoinTable.name`</b>: 연결 테이블을 지정한다.
- <b>`@JoinTable.joinColumns`</b>: 연결 테이블에서 현재 테이블을 가리킬 외래키 컬럼을 지정한다.
- <b>`@JoinTable.reverseJoinColumns`</b>: 연결 테이블이서 상대 테이블을 가리킬 외래키 컬럼을 지정한다.

생성된 연결 테이블의 스키마는 다음과 같다.

![](./220110_hibernate_relation/2.png)

다대다 양방향 연관관계도 만들 수 있다. `mappedBy`를 지정하지 않은 쪽이 연관관계의 주인이 된다.
``` java {14,15}
// ProductEntity.java
@Entity
@Table(name = "product")
public class ProductEntity {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @ManyToMany(mappedBy = "products")
    private List<MemberEntity> members = new ArrayList<MemberEntity>();
}
```

### @ManyToMany의 한계와 해결방안
연결 테이블에 추가적인 컬럼이 필요하다면 어떻게 해야할까?

![](./220110_hibernate_relation/3.png)

이러한 경우 `@ManyToMany`를 사용할 수 없다. 따라서 실무에서는 추가적인 컬럼을 포함하는 연결 엔티티를 만들고 `@OneToMany`, `@ManyToOne` 연관관계를 연결 엔티티와 양방향으로 매핑한다.
``` java
// MemberProductEntity.java
@Entity
@Table(name = "member_product")
public class MemberProductEntity {

    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_amount")
    private int orderAmount;

    @ManyToOne
    @JoinColumn(name = "buyer_id")
    private MemberEntity buyer;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;

    // 중략..
}
```
외래키가 `MemberProductEntity`에 생성되므로 `MemberProductEntity`를 연관관계의 주인으로 지정한다.
``` java
// MemberEntity.java
@Entity
@Table(name= "member")
public class MemberEntity {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String email;

    @OneToMany(mappedBy = "buyer")
    private List<MemberProductEntity> memberProducts = new ArrayList<>();

    // 중략..
}
```
``` java
// ProductEntity.java
@Entity
@Table(name = "product")
public class ProductEntity {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @OneToMany(mappedBy = "product")
    private List<MemberProductEntity> memberProducts = new ArrayList<MemberProductEntity>();

    // 중략..
}
```
이제 다음과 같이 사용할 수 있다.
``` java
MemberEntity member = new MemberEntity();
member.setEmail("paul@gmail.com");
entityManager.persist(member);

ProductEntity product = new ProductEntity();
product.setName("iPhone 10");
entityManager.persist(product);

MemberProductEntity memberProduct = new MemberProductEntity();
memberProduct.setBuyer(member);
memberProduct.setProduct(product);
memberProduct.setAmount(10);
entityManager.persist(memberProduct);
```



## 프록시
## CASCADE (8장)
## Fetch (8장) 