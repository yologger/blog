---
title: "Spring Data MongoDB 시작하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Spring Data MongoDB
`Spring Data MongoDB`는 스프링 어플리케이션에서 `MongoDB`로의 쉬운 접근과 환경설정을 제공한다.

## 의존성 추가
`Spring Data Redis`를 사용하려면 다음 의존성을 추가해야한다.
``` groovy
// build.gradle
implementation 'org.springframework.boot:spring-boot-starter-data-mongodb'
```

## 환경 설정
`application.properties` 파일에 설정 값을 추가한다.
``` properties
spring.data.mongodb.host=localhost 
spring.data.mongodb.port=27017
spring.data.mongodb.username=
spring.date.mongodb.password=
```

## Document 정의
### @Document
객체에 `@Document`를 추가하여 도큐먼트로 지정한다.

``` java
@Document
public class MemberDocument {
    // ... 
}
```

`@Document`의 `member` 속성으로 콜렉션 이름을 지정할 수 있다.

``` java
@Document(collection = "member")
public class MemberDocument {
    // ... 
}
```

### @id
`@id` 어노테이션으로 `_id` 필드를 지정하지 않으면 CRUD 작업을 수행할 때 자동으로 `ObjectId`가 할당된다.

``` java {5,6}
@Document(collection = "member")
@Getter
public class MemberEntity {

    // @Id
    // private Long id;

    @Field
    private String email;

    @Field
    private String name;

    @Field
    private Boolean isMarried;

    @Field
    private Integer age;

    @Field
    private Double weight;

    // ..
}
```
``` {3}
> db.member.find().pretty()
{
	"_id" : ObjectId("625beebf086eef0b837f3a57"),
	"email" : "Paul@gmai.com",
	"name" : "Paul",
	"isMarried" : true,
	"age" : 25,
	"weight" : 170.3,
	"_class" : "com.yologger.spring_mongodb.data.MemberEntity"
}
```
물론 명시적으로 `_id` 필드를 지정할 수 있다. 

``` java {5,6}
@Document(collection = "member")
@Getter
public class MemberEntity {

    @Id
    private ObjectId id;

    @Field
    private String email;

    @Field
    private String name;

    @Field
    private Boolean isMarried;

    @Field
    private Integer age;

    @Field
    private Double weight;

    // ...                                 
}
```

다른 데이터 타입을 `_id` 필드로 사용할 수 있다. 이 경우 `_id`필드가 자동으로 생성되도록 직접 구현해야한다.
``` java 
@Document(collection = "member")
@Getter
public class MemberEntity {

    @Id
    private Long id;

    // ...                                 
}
```

### @Field
`@Field`를 사용하여 필드를 지정할 수 있다.
``` java {5,8,11,14,17}
@Document(collection = "member")
@Getter
public class MemberDocument {

    @Field
    private String email;

    @Field
    private String name;

    @Field
    private Boolean isMarried;

    @Field
    private Integer age;

    @Field
    private Double weight;

    // ...
}
```

필드 이름을 직접 지정할 수 있다.
``` java
@Document(collection = "member")
@Getter
public class MemberDocument {

    @Field("is_married")
    private Boolean isMarried;

    // ...
}
```

### @CreatedDate, @LastModifiedDate
`@CreatedDate`를 추가하면 도큐먼트가 생성된 날짜와 시간을 추가할 수 있다. `@LastModifiedDate`를 추가하면 마지막으로 도큐먼트가 변경된 날짜와 시간을 추가할 수 있다.

보통 다음과 같이 모든 도큐먼트의 부모가 되는 베이스 클래스를 생성하고 상속하는 형태로 사용한다.

``` java 
@Document(collection = "member")
@Getter
public class MemberDocument {

    // ...

    @CreatedDate
    private LocalDateTime createdDate;

    // ...
}
```

``` java 
@Document(collection = "member")
@Getter
public class MemberDocument {

    // ...

    @LastModifiedDate
    private LocalDateTime lastModifiedDate;

    // ...
}
```



### TTL

### Index
`@Indexed`

## 연관관계
### @ManyToOne
### @OneToOne

## CRUD 작업 실행하기
`Spring Data MongoDB`는 `MongoDB`에 접근하기 위한 두 가지 방법을 제공한다.
- `MongoTemplate`
- `MongoRepository`

``` java
public interface MemberRepository extends MongoRepository<MemberEntity, Long> {
}
```





## MongoTemplate
Dao

## MongoRepository

## MongoOperations

## @Query

## @Transational

## 테스트용 인메모리 캐시

## 설정 커스터마이징

## 단위 테스트