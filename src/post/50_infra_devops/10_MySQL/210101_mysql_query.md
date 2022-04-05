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
    nation VARCHAR(255),
    gender VARCHAR(255),
    PRIMARY KEY (id)
);
```
``` sql
CREATE TABLE post (
    id bigint NOT NULL AUTO_INCREMENT,
    content varchar(255),
    writer_id bigint,
	violating boolean DEFAULT false,
    PRIMARY KEY (id),
    FOREIGN KEY (`writer_id`) REFERENCES `member` (`id`)
);
```

## INSERT
``` sql
INSERT INTO member(name, age, nation, gender) VALUES('paul', 35, 'england', 'man');
```
``` sql
INSERT INTO member(name, age, nation, gender) VALUES('monica', 23, 'usa', 'woman'), ('ross', 28, 'australia', 'man'), ('chandler', 29, 'england', 'woman'), ('chuck', 15, 'usa', 'man'), ('john', 35, 'australia', 'man'); 
```
``` sql
INSERT INTO member(name, age, nation) VALUES('silvia', 23, 'usa'), ('boss', 28, 'australia'), ('corona', 29, 'usa'), ('julia', 15, 'england'), ('joy', 30, 'england'), ('kane', 38, 'england');
```
``` sql
INSERT INTO post(content, writer_id) VALUES ('content1', 1);
```
``` sql
INSERT INTO post(writer_id, content) VALUES(2, 'content1'), (2, 'content2'), (2, 'content3'), (3, 'content4'), (3, 'content5'), (4, 'content6'), (4, 'content7');
```
``` sql
INSERT INTO post(writer_id, content, violating) VALUES(7, 'content8', true), (7, 'content9', true), (8, 'content10', true), (8, 'content11', true), (9, 'content12', true), (9, 'content13', true), (9, 'content14', true);
```
``` sql
INSERT INTO post(content) VALUES('content15'), ('content16');
```

## UPDATE
``` sql
UPDATE member SET name = 'paul' WHERE id = 1;
```
``` sql
UPDATE member SET name = 'paul', age = 33 WHERE id = 1;
```

## DELETE
``` sql
DELETE FROM member WHERE age = 29;
```

## SELECT

DISTINCT

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

### AND
``` sql
SELECT * FROM member WHERE age >= 25 AND age <30;
```

### OR
``` sql
SELECT * FROM member WHERE age <= 25 OR age > 30;
```

## AS
``` sql
SELECT m.name as member_name FROM member m WHERE age <= 25 OR age > 30;
```

## LIKE
``` sql
SELECT * FROM member;
```
```
+----+----------+------+-----------+--------+
| id | name     | age  | nation    | gender |
+----+----------+------+-----------+--------+
|  1 | paul     |   35 | england   | man    |
|  2 | monica   |   23 | usa       | woman  |
|  3 | ross     |   28 | australia | man    |
|  4 | chandler |   29 | england   | woman  |
|  5 | chuck    |   15 | usa       | man    |
|  6 | john     |   35 | australia | man    |
|  7 | silvia   |   23 | usa       | NULL   |
|  8 | boss     |   28 | australia | NULL   |
|  9 | corona   |   29 | usa       | NULL   |
| 10 | julia    |   15 | england   | NULL   |
| 11 | joy      |   30 | england   | NULL   |
| 12 | kane     |   38 | england   | NULL   |
+----+----------+------+-----------+--------+
```
`C`로 시작하는 데이터 조회
``` sql
SELECT * FROM member WHERE name LIKE 'C%';
```
```
+----+----------+------+---------+--------+
| id | name     | age  | nation  | gender |
+----+----------+------+---------+--------+
|  4 | chandler |   29 | england | woman  |
|  5 | chuck    |   15 | usa     | man    |
|  9 | corona   |   29 | usa     | NULL   |
+----+----------+------+---------+--------+
```
`ia`로 끝나는 데이터 조회
``` sql
SELECT * FROM member WHERE name LIKE '%ia';
```
```
+----+--------+------+---------+--------+
| id | name   | age  | nation  | gender |
+----+--------+------+---------+--------+
|  7 | silvia |   23 | usa     | NULL   |
| 10 | julia  |   15 | england | NULL   |
+----+--------+------+---------+--------+
```
`on`을 포함하는 데이터 조회
``` sql
SELECT * FROM member WHERE name LIKE '%on%';
```
```
+----+--------+------+--------+--------+
| id | name   | age  | nation | gender |
+----+--------+------+--------+--------+
|  2 | monica |   23 | usa    | woman  |
|  9 | corona |   29 | usa    | NULL   |
+----+--------+------+--------+--------+
```
문자열 길이가 `4`, 두 번째 문자가 `o`인 데이터 조회
``` sql
SELECT * FROM member WHERE name LIKE '_o__';
```
```
+----+------+------+-----------+--------+
| id | name | age  | nation    | gender |
+----+------+------+-----------+--------+
|  3 | ross |   28 | australia | man    |
|  6 | john |   35 | australia | man    |
|  8 | boss |   28 | australia | NULL   |
+----+------+------+-----------+--------+
```

## Grouping
``` sql
SELECT * FROM member;
```
```
+----+----------+------+-----------+--------+
| id | name     | age  | nation    | gender |
+----+----------+------+-----------+--------+
|  1 | paul     |   35 | england   | man    |
|  2 | monica   |   23 | usa       | woman  |
|  3 | ross     |   28 | australia | man    |
|  4 | chandler |   29 | england   | woman  |
|  5 | chuck    |   15 | usa       | man    |
|  6 | john     |   35 | australia | man    |
|  7 | silvia   |   23 | usa       | NULL   |
|  8 | boss     |   28 | australia | NULL   |
|  9 | corona   |   29 | usa       | NULL   |
| 10 | julia    |   15 | england   | NULL   |
| 11 | joy      |   30 | england   | NULL   |
| 12 | kane     |   38 | england   | NULL   |
+----+----------+------+-----------+--------+
```
`GROUP BY`로 그룹핑하는 컬럼은 프로젝션 대상에 반드시 포함되어야한다.
``` SQL
SELECT nation
FROM member
GROUP BY nation;
```
```
+-----------+
| nation    |
+-----------+
| england   |
| usa       |
| australia |
+-----------+
```
`GROUP BY`에 포함되지 않은 컬럼을 프로젝션하려면 `Grouping Function`을 사용해야한다.
``` sql
SELECT nation, COUNT(name)
FROM member
GROUP BY nation;
```
```
+-----------+-------------+
| nation    | COUNT(name) |
+-----------+-------------+
| england   |           5 |
| usa       |           4 |
| australia |           3 |
+-----------+-------------+
```
`HAVING`절로 `GROUPING`에 조건을 추가할 수 있다.
``` sql
SELECT nation, COUNT(name)
FROM member
GROUP BY nation
HAVING COUNT(name) > 3;
```
```
+---------+-------------+
| nation  | COUNT(name) |
+---------+-------------+
| england |           5 |
| usa     |           4 |
+---------+-------------+
```
`WHERE 절`은 `GROUPING`하기 전, `HAVING 절`은 `GROUPING`한 후 필터링한다.
``` sql
SELECT nation, COUNT(name)
FROM member
WHERE age >= 20
GROUP BY nation
HAVING COUNT(name) > 3;
```
```
+---------+-------------+
| nation  | COUNT(name) |
+---------+-------------+
| england |           4 |
+---------+-------------+
```


## ORDER BY
``` sql 
SELECT *
FROM member
ORDER BY age ASC, nation DESC;
```
```
+----+----------+------+-----------+--------+
| id | name     | age  | nation    | gender |
+----+----------+------+-----------+--------+
|  5 | chuck    |   15 | usa       | man    |
| 10 | julia    |   15 | england   | NULL   |
|  2 | monica   |   23 | usa       | woman  |
|  7 | silvia   |   23 | usa       | NULL   |
|  3 | ross     |   28 | australia | man    |
|  8 | boss     |   28 | australia | NULL   |
|  9 | corona   |   29 | usa       | NULL   |
|  4 | chandler |   29 | england   | woman  |
| 11 | joy      |   30 | england   | NULL   |
|  1 | paul     |   35 | england   | man    |
|  6 | john     |   35 | australia | man    |
| 12 | kane     |   38 | england   | NULL   |
+----+----------+------+-----------+--------+
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
``` sql
SELECT *
FROM member
WHERE age > ALL(
	SELECT age 
    FROM member
    WHERE nation = 'usa'
);
```
```
+----+------+------+-----------+--------+
| id | name | age  | nation    | gender |
+----+------+------+-----------+--------+
|  1 | paul |   35 | england   | man    |
|  6 | john |   35 | australia | man    |
| 11 | joy  |   30 | england   | NULL   |
| 12 | kane |   38 | england   | NULL   |
+----+------+------+-----------+--------+
```
``` sql
SELECT *
FROM member
WHERE age > ANY(
	SELECT age 
    FROM member
    WHERE nation = 'usa'
);
```
```
+----+----------+------+-----------+--------+
| id | name     | age  | nation    | gender |
+----+----------+------+-----------+--------+
|  1 | paul     |   35 | england   | man    |
|  2 | monica   |   23 | usa       | woman  |
|  3 | ross     |   28 | australia | man    |
|  4 | chandler |   29 | england   | woman  |
|  6 | john     |   35 | australia | man    |
|  7 | silvia   |   23 | usa       | NULL   |
|  8 | boss     |   28 | australia | NULL   |
|  9 | corona   |   29 | usa       | NULL   |
| 11 | joy      |   30 | england   | NULL   |
| 12 | kane     |   38 | england   | NULL   |
+----+----------+------+-----------+--------+
```

## 집합 연산
### UNION
`UNION`은 중복을 제거한다.
``` sql
SELECT * FROM post WHERE writer_id=3 or id = 4
UNION
SELECT * FROM post WHERE writer_id=4 or id = 5;
```
```
+----+----------+-----------+-----------+
| id | content  | writer_id | violating |
+----+----------+-----------+-----------+
|  4 | content4 |         3 |         0 |
|  5 | content5 |         3 |         0 |
|  6 | content6 |         4 |         0 |
|  7 | content7 |         4 |         0 |
+----+----------+-----------+-----------+
```

### UNION ALL
`UNION`은 중복을 제거하지 않는다.

``` sql
SELECT * FROM post WHERE writer_id=3 or id = 4
UNION ALL
SELECT * FROM post WHERE writer_id=4 or id = 5;
```
```
+----+----------+-----------+-----------+
| id | content  | writer_id | violating |
+----+----------+-----------+-----------+
|  4 | content4 |         3 |         0 |
|  5 | content5 |         3 |         0 |
|  5 | content5 |         3 |         0 |
|  6 | content6 |         4 |         0 |
|  7 | content7 |         4 |         0 |
+----+----------+-----------+-----------+
```


## JOIN
``` sql
SELECT * FROM member;
```
```
+----+----------+------+-----------+--------+
| id | name     | age  | nation    | gender |
+----+----------+------+-----------+--------+
|  1 | paul     |   35 | england   | man    |
|  2 | monica   |   23 | usa       | woman  |
|  3 | ross     |   28 | australia | man    |
|  4 | chandler |   29 | england   | woman  |
|  5 | chuck    |   15 | usa       | man    |
|  6 | john     |   35 | australia | man    |
|  7 | silvia   |   23 | usa       | NULL   |
|  8 | boss     |   28 | australia | NULL   |
|  9 | corona   |   29 | usa       | NULL   |
| 10 | julia    |   15 | england   | NULL   |
| 11 | joy      |   30 | england   | NULL   |
| 12 | kane     |   38 | england   | NULL   |
+----+----------+------+-----------+--------+
```
``` sql
SELECT * FROM post;
```
```
+----+-----------+-----------+-----------+
| id | content   | writer_id | violating |
+----+-----------+-----------+-----------+
|  1 | content1  |         2 |         0 |
|  2 | content2  |         2 |         0 |
|  3 | content3  |         2 |         0 |
|  4 | content4  |         3 |         0 |
|  5 | content5  |         3 |         0 |
|  6 | content6  |         4 |         0 |
|  7 | content7  |         4 |         0 |
|  8 | content8  |         7 |         1 |
|  9 | content9  |         7 |         1 |
| 10 | content10 |         8 |         1 |
| 11 | content11 |         8 |         1 |
| 12 | content12 |         9 |         1 |
| 13 | content13 |         9 |         1 |
| 14 | content14 |         9 |         1 |
| 15 | content15 |      NULL |         0 |
| 16 | content16 |      NULL |         0 |
+----+-----------+-----------+-----------+
```

### CROSS JOIN
`Cartesian Product`라고도 한다.
``` sql
SELECT m.id as member_id, m.name, m.age, p.id as post_id, p.content, p.writer_id 
FROM member m
CROSS JOIN post p;
```
```
+-----------+----------+------+---------+-----------+-----------+
| member_id | name     | age  | post_id | content   | writer_id |
+-----------+----------+------+---------+-----------+-----------+
|        12 | kane     |   38 |       1 | content1  |         2 |
|        11 | joy      |   30 |       1 | content1  |         2 |
|        10 | julia    |   15 |       1 | content1  |         2 |
|         9 | corona   |   29 |       1 | content1  |         2 |
|         8 | boss     |   28 |       1 | content1  |         2 |
|         7 | silvia   |   23 |       1 | content1  |         2 |
|         6 | john     |   35 |       1 | content1  |         2 |
|         5 | chuck    |   15 |       1 | content1  |         2 |
|         4 | chandler |   29 |       1 | content1  |         2 |
|         3 | ross     |   28 |       1 | content1  |         2 |
|         2 | monica   |   23 |       1 | content1  |         2 |
|         1 | paul     |   35 |       1 | content1  |         2 |
|        12 | kane     |   38 |       2 | content2  |         2 |
|        11 | joy      |   30 |       2 | content2  |         2 |
|        10 | julia    |   15 |       2 | content2  |         2 |
|         9 | corona   |   29 |       2 | content2  |         2 |
|         8 | boss     |   28 |       2 | content2  |         2 |
|         7 | silvia   |   23 |       2 | content2  |         2 |
|         6 | john     |   35 |       2 | content2  |         2 |
|         5 | chuck    |   15 |       2 | content2  |         2 |
|         4 | chandler |   29 |       2 | content2  |         2 |
|         3 | ross     |   28 |       2 | content2  |         2 |
|         2 | monica   |   23 |       2 | content2  |         2 |
|         1 | paul     |   35 |       2 | content2  |         2 |
|        12 | kane     |   38 |       3 | content3  |         2 |
|        11 | joy      |   30 |       3 | content3  |         2 |
|        10 | julia    |   15 |       3 | content3  |         2 |
|         9 | corona   |   29 |       3 | content3  |         2 |
|         8 | boss     |   28 |       3 | content3  |         2 |
|         7 | silvia   |   23 |       3 | content3  |         2 |
|         6 | john     |   35 |       3 | content3  |         2 |
|         5 | chuck    |   15 |       3 | content3  |         2 |
|         4 | chandler |   29 |       3 | content3  |         2 |
|         3 | ross     |   28 |       3 | content3  |         2 |
|         2 | monica   |   23 |       3 | content3  |         2 |
|         1 | paul     |   35 |       3 | content3  |         2 |
|        12 | kane     |   38 |       4 | content4  |         3 |
|        11 | joy      |   30 |       4 | content4  |         3 |
|        10 | julia    |   15 |       4 | content4  |         3 |
|         9 | corona   |   29 |       4 | content4  |         3 |
|         8 | boss     |   28 |       4 | content4  |         3 |
|         7 | silvia   |   23 |       4 | content4  |         3 |
|         6 | john     |   35 |       4 | content4  |         3 |
|         5 | chuck    |   15 |       4 | content4  |         3 |
|         4 | chandler |   29 |       4 | content4  |         3 |
|         3 | ross     |   28 |       4 | content4  |         3 |
|         2 | monica   |   23 |       4 | content4  |         3 |
|         1 | paul     |   35 |       4 | content4  |         3 |
|        12 | kane     |   38 |       5 | content5  |         3 |
|        11 | joy      |   30 |       5 | content5  |         3 |
|        10 | julia    |   15 |       5 | content5  |         3 |
|         9 | corona   |   29 |       5 | content5  |         3 |
|         8 | boss     |   28 |       5 | content5  |         3 |
|         7 | silvia   |   23 |       5 | content5  |         3 |
|         6 | john     |   35 |       5 | content5  |         3 |
|         5 | chuck    |   15 |       5 | content5  |         3 |
|         4 | chandler |   29 |       5 | content5  |         3 |
|         3 | ross     |   28 |       5 | content5  |         3 |
|         2 | monica   |   23 |       5 | content5  |         3 |
|         1 | paul     |   35 |       5 | content5  |         3 |
|        12 | kane     |   38 |       6 | content6  |         4 |
|        11 | joy      |   30 |       6 | content6  |         4 |
|        10 | julia    |   15 |       6 | content6  |         4 |
|         9 | corona   |   29 |       6 | content6  |         4 |
|         8 | boss     |   28 |       6 | content6  |         4 |
|         7 | silvia   |   23 |       6 | content6  |         4 |
|         6 | john     |   35 |       6 | content6  |         4 |
|         5 | chuck    |   15 |       6 | content6  |         4 |
|         4 | chandler |   29 |       6 | content6  |         4 |
|         3 | ross     |   28 |       6 | content6  |         4 |
|         2 | monica   |   23 |       6 | content6  |         4 |
|         1 | paul     |   35 |       6 | content6  |         4 |
|        12 | kane     |   38 |       7 | content7  |         4 |
|        11 | joy      |   30 |       7 | content7  |         4 |
|        10 | julia    |   15 |       7 | content7  |         4 |
|         9 | corona   |   29 |       7 | content7  |         4 |
|         8 | boss     |   28 |       7 | content7  |         4 |
|         7 | silvia   |   23 |       7 | content7  |         4 |
|         6 | john     |   35 |       7 | content7  |         4 |
|         5 | chuck    |   15 |       7 | content7  |         4 |
|         4 | chandler |   29 |       7 | content7  |         4 |
|         3 | ross     |   28 |       7 | content7  |         4 |
|         2 | monica   |   23 |       7 | content7  |         4 |
|         1 | paul     |   35 |       7 | content7  |         4 |
|        12 | kane     |   38 |       8 | content8  |         7 |
|        11 | joy      |   30 |       8 | content8  |         7 |
|        10 | julia    |   15 |       8 | content8  |         7 |
|         9 | corona   |   29 |       8 | content8  |         7 |
|         8 | boss     |   28 |       8 | content8  |         7 |
|         7 | silvia   |   23 |       8 | content8  |         7 |
|         6 | john     |   35 |       8 | content8  |         7 |
|         5 | chuck    |   15 |       8 | content8  |         7 |
|         4 | chandler |   29 |       8 | content8  |         7 |
|         3 | ross     |   28 |       8 | content8  |         7 |
|         2 | monica   |   23 |       8 | content8  |         7 |
|         1 | paul     |   35 |       8 | content8  |         7 |
|        12 | kane     |   38 |       9 | content9  |         7 |
|        11 | joy      |   30 |       9 | content9  |         7 |
|        10 | julia    |   15 |       9 | content9  |         7 |
|         9 | corona   |   29 |       9 | content9  |         7 |
|         8 | boss     |   28 |       9 | content9  |         7 |
|         7 | silvia   |   23 |       9 | content9  |         7 |
|         6 | john     |   35 |       9 | content9  |         7 |
|         5 | chuck    |   15 |       9 | content9  |         7 |
|         4 | chandler |   29 |       9 | content9  |         7 |
|         3 | ross     |   28 |       9 | content9  |         7 |
|         2 | monica   |   23 |       9 | content9  |         7 |
|         1 | paul     |   35 |       9 | content9  |         7 |
|        12 | kane     |   38 |      10 | content10 |         8 |
|        11 | joy      |   30 |      10 | content10 |         8 |
|        10 | julia    |   15 |      10 | content10 |         8 |
|         9 | corona   |   29 |      10 | content10 |         8 |
|         8 | boss     |   28 |      10 | content10 |         8 |
|         7 | silvia   |   23 |      10 | content10 |         8 |
|         6 | john     |   35 |      10 | content10 |         8 |
|         5 | chuck    |   15 |      10 | content10 |         8 |
|         4 | chandler |   29 |      10 | content10 |         8 |
|         3 | ross     |   28 |      10 | content10 |         8 |
|         2 | monica   |   23 |      10 | content10 |         8 |
|         1 | paul     |   35 |      10 | content10 |         8 |
|        12 | kane     |   38 |      11 | content11 |         8 |
|        11 | joy      |   30 |      11 | content11 |         8 |
|        10 | julia    |   15 |      11 | content11 |         8 |
|         9 | corona   |   29 |      11 | content11 |         8 |
|         8 | boss     |   28 |      11 | content11 |         8 |
|         7 | silvia   |   23 |      11 | content11 |         8 |
|         6 | john     |   35 |      11 | content11 |         8 |
|         5 | chuck    |   15 |      11 | content11 |         8 |
|         4 | chandler |   29 |      11 | content11 |         8 |
|         3 | ross     |   28 |      11 | content11 |         8 |
|         2 | monica   |   23 |      11 | content11 |         8 |
|         1 | paul     |   35 |      11 | content11 |         8 |
|        12 | kane     |   38 |      12 | content12 |         9 |
|        11 | joy      |   30 |      12 | content12 |         9 |
|        10 | julia    |   15 |      12 | content12 |         9 |
|         9 | corona   |   29 |      12 | content12 |         9 |
|         8 | boss     |   28 |      12 | content12 |         9 |
|         7 | silvia   |   23 |      12 | content12 |         9 |
|         6 | john     |   35 |      12 | content12 |         9 |
|         5 | chuck    |   15 |      12 | content12 |         9 |
|         4 | chandler |   29 |      12 | content12 |         9 |
|         3 | ross     |   28 |      12 | content12 |         9 |
|         2 | monica   |   23 |      12 | content12 |         9 |
|         1 | paul     |   35 |      12 | content12 |         9 |
|        12 | kane     |   38 |      13 | content13 |         9 |
|        11 | joy      |   30 |      13 | content13 |         9 |
|        10 | julia    |   15 |      13 | content13 |         9 |
|         9 | corona   |   29 |      13 | content13 |         9 |
|         8 | boss     |   28 |      13 | content13 |         9 |
|         7 | silvia   |   23 |      13 | content13 |         9 |
|         6 | john     |   35 |      13 | content13 |         9 |
|         5 | chuck    |   15 |      13 | content13 |         9 |
|         4 | chandler |   29 |      13 | content13 |         9 |
|         3 | ross     |   28 |      13 | content13 |         9 |
|         2 | monica   |   23 |      13 | content13 |         9 |
|         1 | paul     |   35 |      13 | content13 |         9 |
|        12 | kane     |   38 |      14 | content14 |         9 |
|        11 | joy      |   30 |      14 | content14 |         9 |
|        10 | julia    |   15 |      14 | content14 |         9 |
|         9 | corona   |   29 |      14 | content14 |         9 |
|         8 | boss     |   28 |      14 | content14 |         9 |
|         7 | silvia   |   23 |      14 | content14 |         9 |
|         6 | john     |   35 |      14 | content14 |         9 |
|         5 | chuck    |   15 |      14 | content14 |         9 |
|         4 | chandler |   29 |      14 | content14 |         9 |
|         3 | ross     |   28 |      14 | content14 |         9 |
|         2 | monica   |   23 |      14 | content14 |         9 |
|         1 | paul     |   35 |      14 | content14 |         9 |
|        12 | kane     |   38 |      15 | content15 |      NULL |
|        11 | joy      |   30 |      15 | content15 |      NULL |
|        10 | julia    |   15 |      15 | content15 |      NULL |
|         9 | corona   |   29 |      15 | content15 |      NULL |
|         8 | boss     |   28 |      15 | content15 |      NULL |
|         7 | silvia   |   23 |      15 | content15 |      NULL |
|         6 | john     |   35 |      15 | content15 |      NULL |
|         5 | chuck    |   15 |      15 | content15 |      NULL |
|         4 | chandler |   29 |      15 | content15 |      NULL |
|         3 | ross     |   28 |      15 | content15 |      NULL |
|         2 | monica   |   23 |      15 | content15 |      NULL |
|         1 | paul     |   35 |      15 | content15 |      NULL |
|        12 | kane     |   38 |      16 | content16 |      NULL |
|        11 | joy      |   30 |      16 | content16 |      NULL |
|        10 | julia    |   15 |      16 | content16 |      NULL |
|         9 | corona   |   29 |      16 | content16 |      NULL |
|         8 | boss     |   28 |      16 | content16 |      NULL |
|         7 | silvia   |   23 |      16 | content16 |      NULL |
|         6 | john     |   35 |      16 | content16 |      NULL |
|         5 | chuck    |   15 |      16 | content16 |      NULL |
|         4 | chandler |   29 |      16 | content16 |      NULL |
|         3 | ross     |   28 |      16 | content16 |      NULL |
|         2 | monica   |   23 |      16 | content16 |      NULL |
|         1 | paul     |   35 |      16 | content16 |      NULL |
+-----------+----------+------+---------+-----------+-----------+
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
+-----------+----------+------+---------+-----------+-----------+
| member_id | name     | age  | post_id | content   | writer_id |
+-----------+----------+------+---------+-----------+-----------+
|         2 | monica   |   23 |       1 | content1  |         2 |
|         2 | monica   |   23 |       2 | content2  |         2 |
|         2 | monica   |   23 |       3 | content3  |         2 |
|         3 | ross     |   28 |       4 | content4  |         3 |
|         3 | ross     |   28 |       5 | content5  |         3 |
|         4 | chandler |   29 |       6 | content6  |         4 |
|         4 | chandler |   29 |       7 | content7  |         4 |
|         7 | silvia   |   23 |       8 | content8  |         7 |
|         7 | silvia   |   23 |       9 | content9  |         7 |
|         8 | boss     |   28 |      10 | content10 |         8 |
|         8 | boss     |   28 |      11 | content11 |         8 |
|         9 | corona   |   29 |      12 | content12 |         9 |
|         9 | corona   |   29 |      13 | content13 |         9 |
|         9 | corona   |   29 |      14 | content14 |         9 |
+-----------+----------+------+---------+-----------+-----------+
```

### LEFT OUTER JOIN
`ON`절의 조건을 만족하는 컬럼 + 왼쪽 테이블 컬럼
``` sql
SELECT m.id as member_id, m.name, m.age, p.id as post_id, p.content, p.writer_id 
FROM member m
LEFT OUTER JOIN post p
ON m.id = p.writer_id;
```
``` {4,12,13,21,22,23}
+-----------+----------+------+---------+-----------+-----------+
| member_id | name     | age  | post_id | content   | writer_id |
+-----------+----------+------+---------+-----------+-----------+
|         1 | paul     |   35 |    NULL | NULL      |      NULL |
|         2 | monica   |   23 |       1 | content1  |         2 |
|         2 | monica   |   23 |       2 | content2  |         2 |
|         2 | monica   |   23 |       3 | content3  |         2 |
|         3 | ross     |   28 |       4 | content4  |         3 |
|         3 | ross     |   28 |       5 | content5  |         3 |
|         4 | chandler |   29 |       6 | content6  |         4 |
|         4 | chandler |   29 |       7 | content7  |         4 |
|         5 | chuck    |   15 |    NULL | NULL      |      NULL |
|         6 | john     |   35 |    NULL | NULL      |      NULL |
|         7 | silvia   |   23 |       8 | content8  |         7 |
|         7 | silvia   |   23 |       9 | content9  |         7 |
|         8 | boss     |   28 |      10 | content10 |         8 |
|         8 | boss     |   28 |      11 | content11 |         8 |
|         9 | corona   |   29 |      12 | content12 |         9 |
|         9 | corona   |   29 |      13 | content13 |         9 |
|         9 | corona   |   29 |      14 | content14 |         9 |
|        10 | julia    |   15 |    NULL | NULL      |      NULL |
|        11 | joy      |   30 |    NULL | NULL      |      NULL |
|        12 | kane     |   38 |    NULL | NULL      |      NULL |
+-----------+----------+------+---------+-----------+-----------+
```

### RIGHT OUTER JOIN
`ON`절의 조건을 만족하는 컬럼 + 오른쪽 테이블 컬럼
``` sql
SELECT m.id as member_id, m.name, m.age, p.id as post_id, p.content, p.writer_id 
FROM member m
RIGHT OUTER JOIN post p
ON m.id = p.writer_id;
```
```{18-19}
+-----------+----------+------+---------+-----------+-----------+
| member_id | name     | age  | post_id | content   | writer_id |
+-----------+----------+------+---------+-----------+-----------+
|         2 | monica   |   23 |       1 | content1  |         2 |
|         2 | monica   |   23 |       2 | content2  |         2 |
|         2 | monica   |   23 |       3 | content3  |         2 |
|         3 | ross     |   28 |       4 | content4  |         3 |
|         3 | ross     |   28 |       5 | content5  |         3 |
|         4 | chandler |   29 |       6 | content6  |         4 |
|         4 | chandler |   29 |       7 | content7  |         4 |
|         7 | silvia   |   23 |       8 | content8  |         7 |
|         7 | silvia   |   23 |       9 | content9  |         7 |
|         8 | boss     |   28 |      10 | content10 |         8 |
|         8 | boss     |   28 |      11 | content11 |         8 |
|         9 | corona   |   29 |      12 | content12 |         9 |
|         9 | corona   |   29 |      13 | content13 |         9 |
|         9 | corona   |   29 |      14 | content14 |         9 |
|      NULL | NULL     | NULL |      15 | content15 |      NULL |
|      NULL | NULL     | NULL |      16 | content16 |      NULL |
+-----------+----------+------+---------+-----------+-----------+
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
+-----------+----------+------+---------+-----------+-----------+
| member_id | name     | age  | post_id | content   | writer_id |
+-----------+----------+------+---------+-----------+-----------+
|         2 | monica   |   23 |       1 | content1  |         2 |
|         2 | monica   |   23 |       2 | content2  |         2 |
|         2 | monica   |   23 |       3 | content3  |         2 |
|         3 | ross     |   28 |       4 | content4  |         3 |
|         3 | ross     |   28 |       5 | content5  |         3 |
|         4 | chandler |   29 |       6 | content6  |         4 |
|         4 | chandler |   29 |       7 | content7  |         4 |
|         7 | silvia   |   23 |       8 | content8  |         7 |
|         7 | silvia   |   23 |       9 | content9  |         7 |
|         8 | boss     |   28 |      10 | content10 |         8 |
|         8 | boss     |   28 |      11 | content11 |         8 |
|         9 | corona   |   29 |      12 | content12 |         9 |
|         9 | corona   |   29 |      13 | content13 |         9 |
|         9 | corona   |   29 |      14 | content14 |         9 |
|      NULL | NULL     | NULL |      15 | content15 |      NULL |
|      NULL | NULL     | NULL |      16 | content16 |      NULL |
|         1 | paul     |   35 |    NULL | NULL      |      NULL |
|         5 | chuck    |   15 |    NULL | NULL      |      NULL |
|         6 | john     |   35 |    NULL | NULL      |      NULL |
|        10 | julia    |   15 |    NULL | NULL      |      NULL |
|        11 | joy      |   30 |    NULL | NULL      |      NULL |
|        12 | kane     |   38 |    NULL | NULL      |      NULL |
+-----------+----------+------+---------+-----------+-----------+
```