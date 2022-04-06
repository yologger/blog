---
title: "Database 개념 정리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Database
`Databsae`개념에 대해 정리한다.

## DDL
`DDL(Data Definition Lauguage)`의 약자로 데이터베이스의 구조(Schema)를 정의하는 기능
- CREATE
- ALTER
- DROP
- TRUNCATE

## DML
`DML(Data Manipulation Lauguage)` 데이터를 조작하는 기능
- SELECT
- INSERT
- UPDATE
- DELETE

## DCL
`DCL(Database Control Launuage)`의 약자
- 무결성과 동시성 제어
    - COMMIT
    - ROLLBACK
- 보안과 권한
    - GRANT
    - REVOKE

## ERD
- `ERD(Entity-Relation Diagram)`은 데이터베이스의 개념적 설계에 사용한다.
- 필자는 [`draw.io`](https://app.diagrams.net/)를 사용하여 `ER Diagram`을 그린다.

## 기본키, 외래키
``` sql{3}
CREATE TABLE member (
    id BIGINT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id)
);
```
``` sql{3}
CREATE TABLE post (
    // ...
    writer_id BIGINT,
    FOREIGN KEY (`writer_id`) REFERENCES `member` (`id`)
);
```

## 기타 다른 키
- `유일성`: 하나의 키로 하나의 행를 식별
- `최소성`: 최소한의 속성을 사용

![](./210101_database/1.png)

- `슈퍼키`
    - 유일성
    - ~~최소성~~
        - 학번 - 단일속성
        - 주민번호 - 단일속성
        - 학번, 주민번호 - 복합속성
        - 주민등록번호, 학년 - 복합속성    

- `후보키`
    - 유일성
    - 최소성

- `기본키`와 `대체키`
    - 후보키가 여러 개인 경우 하나를 `기본키`, 나머지를 `대체키`로 지정한다.
        - 학번 - 기본키
        - 주민번호 - 대체키

## 이상현상
데이터베이스의 설계를 잘못하면 데이터의 `일관성`, `무결성`이 깨지는데 이를 <b>`이상현상(Anomaly)`</b>이라고 한다.
- 삽입 이상
- 갱신 이상
- 삭제 이상

## 정규화
- `이상현상`을 해결하기 위해 테이블을 <b>`무손실 분해`</b>하는 것
- 조인의 증가로 데이터 처리시간이 늘어난다는 단점이 있다.