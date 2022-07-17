---
title: "MYSQL - Stored Procedure"
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

## Stored Procedure
`저장 프로시저(Stored Procedure)`를 사용하면 
``` 
DELIMITER $$
CREATE PROCEDURE 'GetMemberCount' (
)
BEGIN
    SELECT COUNT(*)
    FROM member;
END $$
DELIMITER; 
```
`SHOW PROCEDURE STATUS`로 프로시저 목록을 확인할 수 있다.
```
> SHOW PROCEDURE STATUS;
```

`SHOW CREATE PROCEDURE <프로시저_이름>`로 프로시저 상세 내용을 확인할 수 있다.
```
> SHOW CREATE PROCEDURE GetMemberCount;
+----------------+-----------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------+----------------------+----------------------+--------------------+
| Procedure      | sql_mode                                                                                                              | Create Procedure                                                                                            | character_set_client | collation_connection | Database Collation |
+----------------+-----------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------+----------------------+----------------------+--------------------+
| GetMemberCount | ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION | CREATE DEFINER=`root`@`localhost` PROCEDURE `GetMemberCount`()
BEGIN 
	SELECT COUNT(*)
    FROM member;
END | utf8mb4              | utf8mb4_0900_ai_ci   | utf8_general_ci    |
+----------------+-----------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------+----------------------+----------------------+--------------------+
1 row in set (0.00 sec)
```

`DROP PROCEDURE <프로시저_이름>`로 프로시저를 삭제할 수 있다.
```
> DROP PROCEDURE GetMemberCount;
```

파라미터
변수 선언
조건문
반복문