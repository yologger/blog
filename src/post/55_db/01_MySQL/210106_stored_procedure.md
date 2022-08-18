---
title: "MYSQL - 변수, Stored Procedure, Function"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---
# Table of Contents
[[toc]]

## SQL 파일 실행
`source` 명령어로 `.sql` 파일을 실행할 수 있다.
``` shellsession
mysql > source /home/user/test.sql
```

## MySQL의 변수
MySQL에는 크게 네 가지의 변수가 있다.
- 시스템 변수
- 사용자 정의 변수
- Store Procedure의 파라미터
- Store Procedure의 지역 변수

### 시스템 변수
시스템 변수는 데이터베이스 전체에서 유효한 변수다.

시스템 변수는 다음과 같이 조회할 수 있다.
``` sql
SHOW GLOBAL VARIABLES;
```
`LIKE`로 필요한 변수를 조회할 수 있다.
``` sql
SHOW GLOBAL VARIABLES LIKE 'CHAR%';
```

### 사용자 정의 변수
사용자 정의 변수는 현재 MySQL에 연결된 세션에만 유효한 변수다. 세션이 닫히면 사용자 정의 변수도 사라진다.
``` sql
SET @num = 0;
```
다음과 같이 여러 변수를 한꺼번에 설정할 수 있다.
``` sql
SET @num1 = 1, @num2 = 2, @num3 = 3;
```
사용자 정의 변수는 다음과 같이 조회할 수 있다.
``` sql
SELECT @num1, @num2, @num3;
```

## Stored Procedure
`저장 프로시저(Stored Procedure)`는 다음과 같이 생성하며, 현재 사용 중인 데이터베이스에 저장 프로시저가 생성된다.
``` sql
DELIMITER $$
CREATE PROCEDURE GetMemberCount()
BEGIN
    SELECT COUNT(*)
    FROM member;
END $$
DELIMITER ; 
```
저장 프로시저는 다음과 같이 호출한다.
``` sql
CALL GetMemberCount()
``` 
`SHOW PROCEDURE STATUS`로 프로시저 목록을 확인할 수 있다.
``` sql
SHOW PROCEDURE STATUS WHERE db = 'my_db';
```

`SHOW CREATE PROCEDURE <프로시저_이름>`로 프로시저 상세 내용을 확인할 수 있다.
``` sql
SHOW CREATE PROCEDURE GetMemberCount;
```
프로시저는 다음과 같이 수정할 수 있다.
``` sql
DELIMITER $$
ALTER PROCEDURE GetMemberCount()
BEGIN
    SELECT COUNT(*) AS 'total'
    FROM member;
END $$
DELIMITER ;  
```

`DROP PROCEDURE <프로시저_이름>`로 프로시저를 삭제할 수 있다.
``` sql
DROP PROCEDURE GetMemberCount;
```
### Stored Procedure의 파라미터
저장 프로시저는 세 가지 종류의 파라미터를 가질 수 있다.

- in
- out
- inout

`IN`은 Call-by-value 타입의 파라미터로 원본 변수에 영향을 주지 않는다.
``` sql
DELIMITER $$
CREATE PROCEDURE PrintUserByName(
	-- 파라미터 선언
	IN p_name VARCHAR(255)
)
BEGIN
    -- 조회 후 화면에 출력
	SELECT * FROM user WHERE name = p_name;
END $$
DELIMITER ; 
```
``` sql
CALL PrintUserByName("yologger");
```
`OUT`은 Call-by-reference 타입의 파라미터로 원본 변수에 영향을 준다. 프로시저의 반환값에 사용할 수 있다.
``` sql
DELIMITER $$
CREATE PROCEDURE GetUserCount(
	-- 파라미터 선언
    OUT p_count INT
)
BEGIN
    -- 조회 후 OUT 변수에 저장
	SELECT COUNT(*) INTO p_count FROM user;
END $$
DELIMITER ; 
```
``` sql
SET @num = 0;
CALL GetUserCount(@num);
```
`INOUT`은 위 두 특성을 모두 가진 파라미터다.
``` sql
DELIMITER $$
CREATE PROCEDURE MULTIPLY(
    INOUT p_value INT
)
BEGIN
    SELECT p_value * p_value INTO p_value;
END $$
DELIMITER ; 
```
``` sql
SET @num = 8;
CALL MULTIPLY(@num);

SELECT @num;    -- 64
```

### Stored Procedure의 지역변수
저장 프로시저는 내부에 지역변수를 가질 수 있다. 지역변수는 기본값을 선언하지 않으면 `NULL`로 초기화된다.
``` sql
DELIMITER $$ 
CREATE PROCEDURE PrintUserInfo() 
BEGIN
    -- 변수 선언
	DECLARE v_age INT;  -- NULL
    DECLARE v_height FLOAT;  -- NULL
    DECLARE v_weight FLOAT;  -- NULL

    -- 생략 ... 
END $$
DELIMITER ; 
```
다음과 같이 기본값을 할당할 수 있다. 또한 `SET`을 통해 값을 변경할 수 있다.
``` sql
DELIMITER $$ 
CREATE PROCEDURE PrintUserInfo() 
BEGIN
    -- 변수 선언
	DECLARE v_age INT DEFAULT 0;
    DECLARE v_height FLOAT DEFAULT 0.0;
    DECLARE v_weight FLOAT DEFAULT 0.0;

    -- 변수 값 변경
    SET v_age = 30;
    SET v_height = 176.3;
    SET v_weight = 70.2;

    -- 생략 ... 
END $$
DELIMITER ; 
```
다음과 같이 반복문과 함께 사용할 수 있다.
``` sql
DELIMITER $$ 
CREATE PROCEDURE DoLooping() 
BEGIN
    -- 변수 선언
	DECLARE v_idx INT DEFAULT 0;
    
    -- 반복문
    WHILE(v_idx < 10) DO
		INSERT INTO user(sequence) VALUE(v_idx);
		SET v_idx = v_idx + 1;
    END WHILE;
END $$
DELIMITER ; 
```

### SELECT INTO
`SELECT INTO` 구문을 사용하면 결과값을 변수에 저장할 수 있다.
``` sql
DELIMITER $$ 
CREATE PROCEDURE test() 
BEGIN
    -- 변수 선언
	DECLARE v_count INT;
    
    -- 반복문
    SELECT count(*) INTO v_count FROM user;
    
    -- 변수 출력
    SELECT v_count;
END $$
DELIMITER ; 
```
``` sql
CALL test();
```

## Function
`함수(Function)`는 다음과 같이 생성한다.
``` sql
DELIMITER $$
CREATE FUNCTION getSum(value1 INT, value2 INT) RETURNS INT
BEGIN
	DECLARE sum INT;
    SET sum = value1 + value2;
    RETURN sum;
END $$
DELIMITER ;
```
함수는 다음과 같이 호출할 수 있다.
``` sql
SELECT getSum(1, 2);  -- 3
```
데이터베이스에 생성된 함수는 다음 명령어로 확인할 수 있다.
``` sql
SHOW function status where db = 'my_db';
```
생성된 함수의 내용은 다음 명령어로 확인할 수 있다.
``` sql
SHOW CREATE FUNCTION getSum;
```

## Stored Procedure vs. Function
저장 프로시저와 함수는 다음과 같은 차이점이 있다.
|Stored Procedure|Function|
|------|---|
|반환값이 있을 수도 없을 수도 있다. </br> 여러 값을 반환할 수도 있다.|반환값이 있어야한다.|
|서버에서 실행되기 때문에 상대적으로 빠르다.|클라이언트에서 실행되기 때문에 상대적으로 느리다.|
|`CALL procudure()` 형태로 호출한다.|`SELECT function()` 형태로 호출한다.|