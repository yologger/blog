---
title: "MySQL 정리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# MySQL
`MySQL`에 대해 정리한다.

## CREATE
``` sql
CREATE TABLE member (
    id bigint NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    age INTEGER,
    PRIMARY KEY (id)
);
```
``` sql
CREATE TABLE post (
    id bigint NOT NULL AUTO_INCREMENT,
    content varchar(255),
    writer_id bigint NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (`writer_id`) REFERENCES `member` (`id`)
);
```

## INSERT
``` sql
INSERT INTO member(name, age) VALUES('Paul', 35); 
```
``` sql
INSERT INTO member(name, age) VALUES('Monica', 23), ('Ross', 28), ('Chandler', 29); 
```
``` sql
INSERT INTO post(writer_id, content) VALUES(2, 'content1'), (2, 'content2'), (2, 'content3'), (3, 'content4'), (3, 'content5'), (4, 'content6'), (4, 'content7')
```

## UPDATE
``` sql
UPDATE member SET name = 'Paul' WHERE id = 1;
```

## DELETE
``` sql
DELETE FROM member WHERE age = 29;
```

## SELECT

### =
``` sql
SELECT * FROM member WHERE id=5;
``` 

### !=
``` sql
SELECT * FROM member WHERE id!=5; 
```
### IN
``` sql
SELECT * FROM member WHERE id IN (6, 7); 
```

### NOT IN
``` sql
SELECT * FROM member WHERE id NOT IN (6, 7); 
```

## SubQuery
``` sql
SELECT * FROM post WHERE writer_id IN (
	SELECT id FROM member WHERE age > 30
);
```
``` sql
SELECT * FROM post WHERE writer_id NOT IN (
	SELECT id FROM member WHERE age > 30
);
```

## UNION
``` sql
SELECT * FROM post WHERE writer_id=3
UNION
SELECT * FROM post WHERE writer_id=4;
```
```
+----+----------+-----------+
| id | content  | writer_id |
+----+----------+-----------+
|  4 | content4 |         3 |
|  5 | content5 |         3 |
|  6 | content6 |         4 |
|  7 | content7 |         4 |
+----+----------+-----------+
```

## JOIN
``` sql
SELECT * FROM member;
```
```
+----+----------+------+
| id | name     | age  |
+----+----------+------+
|  1 | Monica   |   23 |
|  2 | Ross     |   28 |
|  3 | Chandler |   29 |
|  4 | Paul     |   35 |
+----+----------+------+
```
``` sql
SELECT * FROM post;
```
```
+----+----------+-----------+
| id | content  | writer_id |
+----+----------+-----------+
|  1 | content1 |         2 |
|  2 | content2 |         2 |
|  3 | content3 |         2 |
|  4 | content4 |         3 |
|  5 | content5 |         3 |
|  6 | content6 |         4 |
|  7 | content7 |         4 |
+----+----------+-----------+
```

### CROSS JOIN
`Cartesian Product`라고도 한다.
``` sql
SELECT m.id as member_id, m.name, m.age, p.id as post_id, p.content, p.writer_id 
FROM member m
CROSS JOIN post p;
```
```
+-----------+----------+------+---------+----------+-----------+
| member_id | name     | age  | post_id | content  | writer_id |
+-----------+----------+------+---------+----------+-----------+
|         4 | Paul     |   35 |       1 | content1 |         2 |
|         3 | Chandler |   29 |       1 | content1 |         2 |
|         2 | Ross     |   28 |       1 | content1 |         2 |
|         1 | Monica   |   23 |       1 | content1 |         2 |
|         4 | Paul     |   35 |       2 | content2 |         2 |
|         3 | Chandler |   29 |       2 | content2 |         2 |
|         2 | Ross     |   28 |       2 | content2 |         2 |
|         1 | Monica   |   23 |       2 | content2 |         2 |
|         4 | Paul     |   35 |       3 | content3 |         2 |
|         3 | Chandler |   29 |       3 | content3 |         2 |
|         2 | Ross     |   28 |       3 | content3 |         2 |
|         1 | Monica   |   23 |       3 | content3 |         2 |
|         4 | Paul     |   35 |       4 | content4 |         3 |
|         3 | Chandler |   29 |       4 | content4 |         3 |
|         2 | Ross     |   28 |       4 | content4 |         3 |
|         1 | Monica   |   23 |       4 | content4 |         3 |
|         4 | Paul     |   35 |       5 | content5 |         3 |
|         3 | Chandler |   29 |       5 | content5 |         3 |
|         2 | Ross     |   28 |       5 | content5 |         3 |
|         1 | Monica   |   23 |       5 | content5 |         3 |
|         4 | Paul     |   35 |       6 | content6 |         4 |
|         3 | Chandler |   29 |       6 | content6 |         4 |
|         2 | Ross     |   28 |       6 | content6 |         4 |
|         1 | Monica   |   23 |       6 | content6 |         4 |
|         4 | Paul     |   35 |       7 | content7 |         4 |
|         3 | Chandler |   29 |       7 | content7 |         4 |
|         2 | Ross     |   28 |       7 | content7 |         4 |
|         1 | Monica   |   23 |       7 | content7 |         4 |
+-----------+----------+------+---------+----------+-----------+
```

### INNER JOIN
`ON`절의 조건을 만족하는 컬럼만 출력한다.
``` sql
SELECT m.id as member_id, m.name, m.age, p.id as post_id, p.content, p.writer_id 
FROM member m
INNER JOIN post p
ON m.id = p.writer_id;
```
```
+-----------+----------+------+---------+----------+-----------+
| member_id | name     | age  | post_id | content  | writer_id |
+-----------+----------+------+---------+----------+-----------+
|         2 | Ross     |   28 |       1 | content1 |         2 |
|         2 | Ross     |   28 |       2 | content2 |         2 |
|         2 | Ross     |   28 |       3 | content3 |         2 |
|         3 | Chandler |   29 |       4 | content4 |         3 |
|         3 | Chandler |   29 |       5 | content5 |         3 |
|         4 | Paul     |   35 |       6 | content6 |         4 |
|         4 | Paul     |   35 |       7 | content7 |         4 |
+-----------+----------+------+---------+----------+-----------+
```

### LEFT OUTER JOIN
`ON`절의 조건을 만족하는 컬럼 + 왼쪽 테이블 컬럼
``` sql
SELECT m.id as member_id, m.name, m.age, p.id as post_id, p.content, p.writer_id 
FROM member m
LEFT OUTER JOIN post p
ON m.id = p.writer_id;
```
``` {4}
+-----------+----------+------+---------+----------+-----------+
| member_id | name     | age  | post_id | content  | writer_id |
+-----------+----------+------+---------+----------+-----------+
|         1 | Monica   |   23 |    NULL | NULL     |      NULL |
|         2 | Ross     |   28 |       1 | content1 |         2 |
|         2 | Ross     |   28 |       2 | content2 |         2 |
|         2 | Ross     |   28 |       3 | content3 |         2 |
|         3 | Chandler |   29 |       4 | content4 |         3 |
|         3 | Chandler |   29 |       5 | content5 |         3 |
|         4 | Paul     |   35 |       6 | content6 |         4 |
|         4 | Paul     |   35 |       7 | content7 |         4 |
+-----------+----------+------+---------+----------+-----------+
```

### RIGHT OUTER JOIN
`ON`절의 조건을 만족하는 컬럼 + 오른쪽 테이블 컬럼
``` sql
SELECT p.id as post_id, p.content, p.writer_id, m.id as member_id, m.name, m.age 
FROM post p
RIGHT OUTER JOIN member m
ON m.id = p.writer_id;
```
```{4}
+---------+----------+-----------+-----------+----------+------+
| post_id | content  | writer_id | member_id | name     | age  |
+---------+----------+-----------+-----------+----------+------+
|    NULL | NULL     |      NULL |         1 | Monica   |   23 |
|       1 | content1 |         2 |         2 | Ross     |   28 |
|       2 | content2 |         2 |         2 | Ross     |   28 |
|       3 | content3 |         2 |         2 | Ross     |   28 |
|       4 | content4 |         3 |         3 | Chandler |   29 |
|       5 | content5 |         3 |         3 | Chandler |   29 |
|       6 | content6 |         4 |         4 | Paul     |   35 |
|       7 | content7 |         4 |         4 | Paul     |   35 |
+---------+----------+-----------+-----------+----------+------+
```

### FULL OUTER JOIN
`MySQL`은 `FULL OUTER JOIN`을 지원하지 않는다. 따라서 `UNION`으로 흉내낼 수 있다.
``` sql
(
    SELECT m.id as member_id, m.name, m.age, p.id as post_id, p.content, p.writer_id 
    FROM post p
    LEFT OUTER JOIN member m
    ON m.id = p.writer_id
)
UNION
(
    SELECT m.id as member_id, m.name, m.age, p.id as post_id, p.content, p.writer_id
    FROM member m
    LEFT OUTER JOIN post p
    ON m.id = p.writer_id
);
```
```
+-----------+----------+------+---------+----------+-----------+
| member_id | name     | age  | post_id | content  | writer_id |
+-----------+----------+------+---------+----------+-----------+
|         2 | Ross     |   28 |       1 | content1 |         2 |
|         2 | Ross     |   28 |       2 | content2 |         2 |
|         2 | Ross     |   28 |       3 | content3 |         2 |
|         3 | Chandler |   29 |       4 | content4 |         3 |
|         3 | Chandler |   29 |       5 | content5 |         3 |
|         4 | Paul     |   35 |       6 | content6 |         4 |
|         4 | Paul     |   35 |       7 | content7 |         4 |
|         1 | Monica   |   23 |    NULL | NULL     |      NULL |
+-----------+----------+------+---------+----------+-----------+
```