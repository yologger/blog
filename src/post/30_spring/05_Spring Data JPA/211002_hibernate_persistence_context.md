---
title: "Hibernate - 영속성 컨텍스트"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## EntityManager
`엔티티 매니저(Entity Manager)`는 엔티티를 저장, 수정, 삭제, 조회하는 역할을 담당한다. 엔티티 매니저는 `엔티티 매니저 팩토리(Entity Manager Factory)`를 통해 생성할 수 있다.
``` java
// EntityMangerFactory 생성
EntityManagerFactory entityManagerfactory = Persistence.createEntityManagerFactory("test_persistence");

// EntityManager 생성
EntityManager entityManager = entityManagerfactory.createEntityManager();
```

## Persistence Context
`영속성 컨텍스트(Persistence Context)`는 엔티티를 저장하는 메모리 상의 공간이다. 엔티티 매니저로 엔티티를 저장하거나 조회하면 영속성 컨텍스트에 엔티티가 저장되고 관리된다.

영속성 컨텍스트는 엔티티를 식별자 값으로 구분하므로 반드시 엔티티에 식별자 값이 있어야한다.
``` java {5}
@Entity
@Table(name= "member")
public class MemberEntity {

    @Id
    @Column
    private Long id;

    // 중략...
}
```

## 엔티티의 생명주기
엔티티는 네 가지의 상태를 가질 수 있다.
- `비영속(new)`
- `영속(managed)`
- `준영속(detached)`
- `삭제(removed)`

### 비영속
엔티티를 생성했으나 아직 영속성 컨텍스트에서 관리되지 않는 상태다.
``` java
MemberEntity member = new MemberEntity();
member.setEmail("paul@gmail.com");
member.setName("Paul");
member.setPassword("1234");
```

### 영속
엔티티가 영속성 컨텍스트에서 관리되고 있는 상태다.

``` java
MemberEntity member = new MemberEntity();
member.setEmail("paul@gmail.com");
member.setName("Paul");
member.setPassword("1234");

// 영속성 컨텍스트에 저장
entityManager.persist(member);
```

`EntityManager.find()`나 `JPQL`을 사용하여 조회한 엔티티 역시 영속성 컨텍스트에서 관리된다.
``` java
Long id = 1L;
MemberEntity member = entityManager.find(MemberEntity.class, id);
```
``` java
// JPQL로 엔티티 조회
String jpql = "select m from MemberEntity as m";
List<MemberEntity> members = entityManager.createQuery(jpql, MemberEntity.class).getResultList();
```

### 준영속
영속성 컨텍스트가 더 이상 엔티티를 관리하지 않는 상태를 `준영속`이라고 한다.
다음 메소드를 호출한 경우 엔티티는 준영속 상태가 된다.
- `EntityManager.detach()`
- `EntityManager.clear()`
- `EntityManager.close()`

#### EntityManager.detach()
`EntityManager.detach()`를 호출하면 1차 캐시, SQL 저장소를 포함하여 해당 엔티티를 관리하기 위한 모든 정보가 제거된다.
``` java{9,10}
MemberEntity member = new MemberEntity();
member.setEmail("paul@gmail.com");
member.setName("Paul");
member.setPassword("1234");

// 영속성 컨텍스트에 저장
entityManager.persist(member);

// 준영속
entityManager.detach(member);
```

#### EntityManager.clear()
`EntityManager.clear()`는 영속성 엔티티를 초기화하고 관리 중인 모든 엔티티를 준영속 상태로 만든다.
``` java
entityManager.clear();
```

#### EntityManager.close()
`EntityManager.close()`는 영속성 컨텍스트를 종료하면서 관리 중인 모든 엔티티를 준영속 상태로 만든다.
``` java
entityManager.close()
```

#### EntityManager.merge()
준영속 상태의 엔티티를 영속 상태로 변경할 때는 `EntityManager.merge()`를 사용한다.
``` java
// 준영속화
entityManager.detach(member);

// 중략..

// 영속화
entityManager.merge(member);
```


### 삭제
엔티티가 영속성 컨텍스트와 데이터베이스에서 삭제된 상태다.
``` java
entityManager.remove(member);
```

## 플러시
영속성 컨텍스트에서 관리되는 엔티티를 실제 데이터베이스에 반영하는 것을 `플러시(Flush)`라고 한다. 플러시를 하는 방법은 세 가지다.
- `EntityManager.flush()`
- `Commit`
- `JPQL 쿼리`

### flush()
`EntityManager.flush()`를 호출하면 영속성 컨텍스트를 강제로 플러시한다.
``` java {4}
entityManager.persist(memberA);
entityManager.persist(memberB);

entityManager.flush();

entityManager.persist(memberC);
entityManager.persist(memberD);
```

### Commit
트랜잭션을 커밋할 때 플러시가 자동으로 호출된다.
``` java {6}
transaction.begin();

entityManager.persist(memberA);
entityManager.persist(memberB);

entityManager.flush();

entityManager.persist(memberC);
entityManager.persist(memberD);

transaction.commit();
```

### JPQL 쿼리
`JPQL 쿼리`를 실행할 때마다 플러시가 자동으로 호출된다.
``` java {8,9}
transaction.begin();

// ...

entityManager.persist(memberA);
entityManager.persist(memberB);     // (1)

String jpql = "select m from MemberEntity as m";
List<MemberEntity> members = entityManager.createQuery(jpql, MemberEntity.class).getResultList();

transaction.commit();
```
`(1)`시점에 `memberA`와 `memberB`는 영속성 컨텍스트에는 저장되어있으나 데이터베이스에는 반영되지 않아있다. 이 상태에서 데이터베이스에서 `memberA`와 `memberB`를 조회하면 결과가 조회되지 않는다. 이러한 문제를 해결하기 위해 `JPQL`을 실행할 때 자동으로 플러시를 수행한다.




## 영속성 컨텍스트의 장점
영속성 컨텍스트는 다음과 같은 장점이 있다.
- `1차 캐시`
- `쓰기 지연`
- `변경 감지(Dirty Checking)`
- `지연 로딩`

### 1차 캐시
영속성 컨텍스트는 내부에 `1차 캐시`를 가지고 있다. `1차 캐시`는 주 메모리 영역에 존재하기 때문에 보조 메모리에 존재하는 데이터베이스에서 엔티티를 조회하는 것보다 훨씬 빠르다.

### 쓰기 지연
다음과 같이 여러번 엔티티를 저장한다고 가정하자.
``` java
transaction.begin();

entityManager.persist(memberA);
entityManager.persist(memberB);
entityManager.persist(memberC);

transaction.commit();
```
엔티티 매니저는 커밋하기 전까지 데이터베이스에 엔티티를 저장하지 않고 `쿼리 저장소`라는 공간에 `INSERT SQL 쿼리`을 모아둔다. 그리고 커밋을 하는 시점에 모아둔 쿼리를 한꺼번에 데이터베이스에 보내는데 이를 `쓰기 지연`이라고 한다. 이를 통해 성능을 최적화할 수 있다.

### 변경 감지
`Hibernate`에는 엔티티 수정을 위한 별도의 `update()`같은 메소드가 없다. 대신 다음과 같은 방법으로 엔티티 객체의 속성을 직접 수정한다.
``` java
transaction.begin();

// 엔티티 생성
member.setEmail("paul@gmail.com");
member.setName("paul")

// 영속성 컨텍스트에 저장
entityManager.persist(member);

// 엔티티 객체의 속성 변경
member.setEmail("john@gmail.com");
member.setName("john")

transaction.commit();
```
트랜잭션을 커밋하면 엔티티의 변경사항을 데이터베이스에 자동으로 반영하는데 이를 `변경 감지(Dirty Checking)`이라고 한다. 

변경 역시 `쿼리 저장소`라는 공간에 `Update SQL 쿼리`를 모아두었다가 커밋하는 시점에 한꺼번에 반영한다. 이를 통해 성능을 최적화할 수 있다.

### 지연 로딩
엔티티간 연관관계가 존재하는 경우, 처음부터 연관된 엔티티들을 모두 영속성 컨텍스트에 올려두는 것은 비효율적이다. `지연 로딩(Lazy Loading)`을 사용하면 연관된 엔티티들에 실제로 접근하는 시점에 SQL을 호출할 수 있다.
``` java
public class MemberEntity extends BaseEntity {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 중략 ...

    @OneToMany(fetch = FetchType.LAZY)
    private List<PostEntity> posts;
}
```