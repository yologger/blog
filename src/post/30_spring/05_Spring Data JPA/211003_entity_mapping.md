---
title: "Hibernate - 엔티티 매핑"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Entity Mapping
`Hibernate`의 `Entity Mapping`에 대해 정리한다.

## @Entity
`Hibernate`를 사용하여 테이블과 매핑할 클래스에는 `@Entity` 어노테이션을 필수로 붙여아한다.

``` java
@Entity
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String email;

    @Column
    private String password;
}
```
`Hibernate`는 <b>기본 생성자</b>로 엔티티 객체를 생성하기 때문에 `@Entity` 사용 시 <b>기본 생성자</b>를 반드시 정의해야한다.
``` java{15-18}
@Entity
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String email;

    @Column
    private String password;

    // 기본 생성자
    public void MemberEntity() {

    }
}
```

## @Table
엔티티와 매핑할 테이블을 지정한다. `name` 속성으로 생성될 테이블의 이름을 직접 지정할 수 있다.
``` java{16-19}
@Entity
@Table(name = "member")
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String email;

    @Column
    private String password;

    // 기본 생성자
    public void MemberEntity() {

    }
}
```
`@Table`을 생략하면 클래스 이름으로 테이블이 생성된다.
``` java
@Entity
public class MemberEntity {
    // ...
}
```

## 기본키
### 단일 기본키
`@id`를 사용하면 단일 컬럼의 기본키를 지정할 수 있다.
``` java{5}
@Entity
@Table(name = "member")
public class MemberEntity {

    @Id
    private Long id;

    // 생략 ...
}
```
`@GeneratedValue`의 `strategy`속성을 `GenerationType.IDENTITY`로 지정하면 기본키 생성을 데이터베이스에게 위임한다. `MySQL`의 경우 `AUTO_INCREMENT`를 추가하는 것과 동일하다.
``` java{6}
@Entity
@Table(name = "member")
public class MemberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 생략 ...
}
```
``` sql
create table member (
    id bigint NOT NULL AUTO_INCREMENT PRIMARY KEY
);
```

### 복합 기본키
복합키를 생성하려면 먼저 `Serializable`인터페이스를 구현한 <b>`식별자 클래스`</b>를 정의해야한다. 식별자 클래스는 `equal()`과 `hashCode()` 메소드를 구현해야한다.
``` java
public class OrderId implements Serializable {

    private Long memberId;
    private Long productId;

    @Override
    public boolean equals(Object o) { ... }

    @Override
    public int hashCode() { ... }

}
```
그리고 `@IdClass`어노테이션으로 식별자 클래스를 지정하면 된다.
``` java {3}
@Entity
@Table(name = "order")
@IdClass(OrderId.class)
public class Order {

    @Id
    @Column(name = "member_id")
    private Long memberId;

    @Id
    @Column(name = "product_id")
    private Long productId;
}
```

## @Column
`@Column`은 엔티티 클래스의 멤버변수와 테이블의 컬럼을 매핑하는데 사용된다.

### name 속성
생성되는 테이블 컬럼의 이름을 지정한다.
``` java{10,13}
@Entity
@Table(name = "member")
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    // 생략 ...
}
```
`name` 속성을 생략하면 멤버변수의 이름으로 컬럼을 생성한다.

### nullable 속성
`nullable = true`로 `NOT NULL` 제약조건을 추가할 수 있다.
``` java{10,13}
@Entity
@Table(name = "member")
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    // 생략 ...
}
```
실행되는 DDL은 다음과 같다.
``` sql {3,4}
create table member {
    id biging not null,
    email varchar(255) not null,
    password varchar(255) not null,
    primary key (id)
}
```

### length 속성
문자열의 크기를 지정할 수 있다.
``` java{10}
@Entity
@Table(name = "member")
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100)
    private String email;

    @Column
    private String password;

    // 생략 ...
}
```
``` sql {3}
create table member {
    id biging not null,
    email varchar(100),
    password varchar(255),
    primary key (id)
}
```

### unique 속성
컬럼을 유니크 키로 지정할 수 있다.
``` java{7}
@Entity
@Table(name = "member")
public class MemberEntity {
    
    // 생략 ..

    @Column(unique = true)
    private String email;

    // 생략 ...
}
```

### columnDefinition 속성
생성할 컬럼 정보를 직접 지정할 수 있다.
``` java{7}
@Entity
@Table(name = "member")
public class MemberEntity {
    
    // 생략 ..

    @Column(columnDefinition = "varchar(100) default 'empty'")
    private String name;

    // 생략 ...
}
```

## @Enumerated
`열거형(enum)`타입을 매핑할 때 사용한다. 다음과 같은 열거형이 있다고 가정하자.
``` java
enum GenderType {
    MAN, WOMAN, UNKNOWN
}
```
이 열거형은 두 가지 방법으로 테이블이 매핑할 수 있다.

### EnumType.ORDINAL
`EnumType.ORDINAL`은 열거형에 정의된 순서대로 MAN은 0, WOMAN은 1, UNKNOWN은 2로 매핑한다. 

``` java{5}
@Entity
@Table(name = "member")
public class MemberEntity {
    
    @Enumerated(EnumType.ORIGINAL)
    private GenderType gender;

    // 생략 ...
}
```
``` java
member.setGenderType(GenderType.MAN)
```
`EnumType.ORDINAL`는 다음과 같은 장단점이 있다.

- 데이터베이스에 저장되는 크기가 작다. 
- 이미 저장된 열거형의 순서를 바꾸거나 추가할 수 없다.

### EnumType.STRING
`EnumType.STRING`은 열거형을 문자열로 저장한다. MAN은 문자열 `MAN`, WOMAN은 문자열 `WOMAN`, UNKNOWN은 문자열 `UNKNOWN은`로 저장되는 것이다.
``` java{5}
@Entity
@Table(name = "member")
public class MemberEntity {
    
    @Enumerated(EnumType.STRING)
    private GenderType gender;

    // 생략 ...
}
```
``` java
member.setGenderType(GenderType.MAN)
```

`EnumType.STRING`는 다음과 같은 장단점이 있다.

- 데이터베이스에 저장되는 크기가 크다.
- 이미 저장된 열거형의 순서를 바꾸거나 추가할 수 있다.

열거형의 속성이 추가될 가능성이 있다면 `EnumType.STRING`를 사용하는 것이 안전하다.


## @Temporal
날짜 타입을 매핑하는데 사용한다.
``` java{5}
@Entity
@Table(name = "member")
public class MemberEntity {
    
    @Temporal
    @Column(name = "created_at")
    private LocalDataTime createdAt;

    // 생략 ...
}
```

## @Transiet
해당 어노테이션이 붙은 멤버변수는 데이터베이스 컬럼으로 매핑하지 않는다.
``` java
@Entity
@Table(name = "member")
public class MemberEntity {
    
    @Transiet
    @Column
    private String temp;

    // 생략 ...
}
```

## 유일키

### 단일 유일키
`@Column`의 `unique` 속성으로 단일 컬럼의 유일키를 생성할 수 있다.
``` java{8}
public class MemberEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    // 중략..
}
```

### 복합 유일키
`@Table` 어노테이션의 `uniqueConstraints` 속성으로 복합 컬럼의 유일키를 생성할 수 있다.
``` java {4-7}
@Entity
@Table(
    name = "member",
    uniqueConstraints = {@UniqueConstraint(
        name = "unq_email_name",
        columnNames = {"email", "name"}
    )}
)
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

    // 생략 ...
}
```
실행되는 DDL은 다음과 같다.
``` sql
ALTER TABLE member
ADD CONSTRAINT unq_email_name UNIQUE (email, name);
```