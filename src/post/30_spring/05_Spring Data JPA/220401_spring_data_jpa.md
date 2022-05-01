---
title: "Spring Data JPA 시작하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Spring Data JPA
`Spring Data JPA`는 스프링 프레임워크에서 `JPA`를 좀 더 편하게 사용할 수 있도록 하는 프로젝트다. 내부적으로 `Hibernate`을 포함하고 있기 때문에 `Hibernate`의 기능을 모두 사용할 수 있으며, 추가적인 기능도 제공한다.

## 설정
`Spring Data JPA`를 사용하려면 의존성을 추가해야한다.
``` groovy
// build.gradle
dependencies {
    // Spring Data JPA
    implementation "org.springframework.boot:spring-boot-starter-data-jpa"
}
```

내부적으로 `Hibernate`를 포함하는 것을 확인할 수 있다.
![](./220401_spring_data_jpa/1.png)

## JpaRepository 인터페이스
`Spring Data JPA`의 `JpaRepository`인터페이스는 CRUD 작업을 위한 다양한 메소드를 자동으로 생성한다.
``` java
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;

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

    @Builder
    public MemberEntity(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
}
```
``` java
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
}
```

`JpaRepository`인터페이스를 상속하면 자동으로 생성되는 메소드 몇 가지는 다음과 같다.

### save()
새로운 엔티티를 저장한다. 이미 있는 엔티티는 수정한다.
``` java
MemberEntity member = MemberEntity.builder()
    .email("monica@gmail.com")
    .name("Monica")
    .password("1234")
    .build();

memberRepository.save(member);
```
### saveAll()
여러 엔티티들을 저장한다.
``` java
List<MemberEntity> members = Arrays.asList(
    MemberEntity.builder().email("monica@gmail.com").name("Monica").password("1234").build(),
    MemberEntity.builder().email("ross@gmail.com").name("Ross").password("1234").build(),
    MemberEntity.builder().email("chandler@gmail.com").name("Chandler").password("1234").build(),
);

memberRepository.saveAll(members);
```


### delete()
엔티티 하나를 삭제한다.
``` java
MemberEntity member = MemberEntity.builder()
    .email("monica@gmail.com")
    .name("Monica")
    .password("1234")
    .build();

memberRepository.delete(member);
```

### deleteById()
`id`로 엔티티를 삭제한다.
```
memberRepository.deleteById(1);
```

### deleteAll()
모든 엔티티를 삭제한다.
``` java
memberRepository.deleteAll();
```
``` java
List<MemberEntity> members = Arrays.asList(
    MemberEntity.builder().email("monica@gmail.com").name("Monica").password("1234").build(),
    MemberEntity.builder().email("ross@gmail.com").name("Ross").password("1234").build(),
    MemberEntity.builder().email("chandler@gmail.com").name("Chandler").password("1234").build(),
);

memberRepository.deleteAll(members);
```

### deleteAllById
`id`로 엔티티를 삭제한다.
``` java
memberRepository.deleteAllById(1);
```

### getById()
`id`로 엔티티 하나를 조회한다.
``` java
MemberEntity target = memberRepository.getById(1);
```
엔티티가 없으면 `EntityNotFoundException`를 발생시킨다.

### findById()
`id`로 엔티티 하나를 조회한다. `getById()`와 달리 `Optional`로 래핑한 객체가 반환된다.
``` java
Optional<MemberEntity> target = memberRepository.findById(1);
if (target.isPresent()) {
    MemberEntity member = target.get();
} else {
    // ..
}
```

### count()
엔티티의 개수를 반환한다.
``` java
long count = memberRepository.count();
```

### existsById()
엔티티의 존재 여부를 반환한다.
``` java
boolean isPresent = memberRepository.existsById(1);
```

## InteliJ에서 JPA Entity ERD 확인하기
`IntelliJ > File > Project Structure`를 클릭한다. 그리고 `Project Settings > Modules`에서 프로젝트의 `main`을 선택한 후 `+` 버튼을 클릭한다.

![](./220401_spring_data_jpa/2.png)

`JPA`를 추가한 후 `JPA Default Provider`를 `Hibernate`로 선택한다.

![](./220401_spring_data_jpa/3.png)

`View > Tools Windows > Persistence`를 클릭하면 IntellJ 왼쪽 하단에 `Persistence` 탭이 생성된다. 여기서 `entityManagerFactory`를 우클릭 한 후 `ER Diagram`을 클릭하면 엔티티 연관관계가 그려진 ER Diagram을 확인할 수 있다.

![](./220401_spring_data_jpa/4.png)

![](./220401_spring_data_jpa/5.png)

## IntelliJ에서 Database Tool 사용하기

`IntelliJ > Prefrences > Plugins`에서 `Database Tools and SQL` 플러그인을 설치한다.

![](./220401_spring_data_jpa/6.png)

`IntelliJ > View > Tool Windows`에서 `Database`를 클릭한다.

![](./220401_spring_data_jpa/7.png)

IntellJ 오른쪽에 `Database` 탭이 활성화된다.

![](./220401_spring_data_jpa/8.png)

`+` 버튼을 클릭한 후 `Data Source`에서 원하는 데이터베이스를 추가할 수 있다. 데이터베이스가 연결되면 테이블 등 다양한 스키마 정보를 확인할 수 있다.

![](./220401_spring_data_jpa/9.png)

`+` 버튼을 클릭한 후 `Query Console`을 클릭하면 쿼리를 작성할 수 있는 새로운 창이 열린다. 이 곳에서 다양한 쿼리를 실행해볼 수 있다.

![](./220401_spring_data_jpa/10.png)

`테이블 선택 후 우클릭 > SQL Scripts > SQL Generator`를 클릭하면 DDL을 추출할 수도 있다.

![](./220401_spring_data_jpa/11.png)

![](./220401_spring_data_jpa/12.png)

`테이블 선택 후 우클릭 > Diagrams > Sho Visualization`을 클릭하면 ER Diagram도 확인할 수 있다.

![](./220401_spring_data_jpa/13.png)

