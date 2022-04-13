---
title: "MYSQL - 제약조건"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---
# Table of Contents
[[toc]]

# 제약조건
`제약조건(Constraint)`에 대해 정리한다.

## 제약조건 확인
``` sql
select * from information_schema.table_constraints;
```
``` sql
select * from information_schema.table_constraints WHERE table_name = 'member';
```

## NOT NULL
``` sql
CREATE TABLE member (
    email VARCHAR(255) NOT NULL
    ...
);
```
``` sql
ALTER TABLE member MODIFY email VARCAHR(255) NOT NULL;
```

## PRIMARY KEY
``` sql
CREATE TABLE member (
	id BIGINT PRIMARY KEY,
    ...
);
```
``` sql
CREATE TABLE member (
	id BIGINT,
    ...
    PRIMARY KEY(id)
);
```
``` sql
CREATE TABLE member (
	id BIGINT,
    ...
    CONSTRAINT pk_member PRIMARY KEY(id)
);
```

## FOREIGN KEY
``` sql
CREATE TABLE post (
    writer_id BIGINT
    ...
    FOREIGN KEY (writer_id) REFERENCES member(id)
    ...
);
```
``` sql
CREATE TABLE post (
    writer_id BIGINT
    ...
    CONSTRAINT fk_post_writer_id_member_id FOREIGN KEY (writer_id) REFERENCES member(id)
    ...
);
```
``` sql
ALTER TABLE post 
ADD CONSTRAINT
FOREIGN KEY writer_id REFERENCES member (id) ON UPDATE CASCADE ON DELETE CASCADE
```
``` sql
ALTER TABLE post 
ADD CONSTRAINT fk_post_writer_id_member_id 
FOREIGN KEY writer_id REFERENCES member (id) ON UPDATE CASCADE ON DELETE CASCADE
```

## UNIQUE KEY 
``` sql
CREATE TABLE member (
    email VARCHAR(255) UNIQUE KEY
)
```
``` sql
CREATE TABLE member (
    email VARCHAR(255),
    ...
    UNIQUE KEY(email)
)
```
``` sql
CREATE TABLE member (
    email VARCHAR(255),
    ...
    CONSTRAINT unq_member_email UNIQUE KEY(email)
)
```
``` sql
ALTER TABLE member 
ADD CONSTRAINT UNIQUE KEY(email);
```
``` sql
ALTER TABLE member 
ADD CONSTRAINT unq_member_email UNIQUE KEY(email);
```

## DEFAULT
```sql{3}
CREATE TABLE member (
    ...
	name VARCHAR(255) DEFAULT 'Annonymous'
);
```
``` sql
ALTER TABLE member MODIFY email VARCHAR(255) DEFAULT 'Annonymous';
```

## CHECK
```sql{4}
CREATE TABLE member (
    ...
	age INT,
    CHECK (age >= 0)
);
```
```sql
ALTER TABLE member ADD CONSTRAINT CHECK(age > 0);
```
```sql
ALTER TABLE member ADD CONSTRAINT chk_member_age CHECK(age > 0);
```

## 복합키 
`복합 기본키`
``` sql{5}
CREATE TABLE order (
    member_id bigint NOT NULL,
    product_id bigint NOT NULL,
    ...
    PRIMARY KEY(member_id, product_id)
);
```
`복합 유일키`
``` sql{6}
CREATE TABLE order (
    id biging NOT NULL AUTO_INCREMENT PRIMARY KEY,
    member_id bigint NOT NULL,
    product_id bigint NOT NULL,
    ...
    UNIQUE KEY(member_id, product_id)
);
```

## 제약조건 삭제
``` sql
ALTER TABLE 테이블명 DROP CONSTRAINT 제약조건명;
```