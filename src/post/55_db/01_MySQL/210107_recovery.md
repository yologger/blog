---
title: "MYSQL - Recovery"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---
# Table of Contents
[[toc]]

# Recovery
`Recovery`는 장애 이전의 상태로 복원하는 작업을 의미한다. `Recovery` 방법에는 크게 두 가지가 존재한다.
- Undo
- Redo

## Undo
`Undo`는 `Rollback`과 동일하다. `Undo`는 트랜잭션 수행 중에 논리적인 장애가 발생했을 때 <u>이전 상태로 되돌리는 것</u>을 의미한다.

예를 살펴보자. 트랜잭션에서 `UPDATE` 실행 후 다음 연산을 수행하다 오류가 발생했다.
``` sql
UPDATE member SET age = age + 1 WHERE id = 1;

다음 연산;  // 이 지점에서 오류 발생

COMMIT;
```
그러면 이전 상태로 되돌리기 위해 다음과 같은 `Undo`작업이 수행된다.
``` sql
UPDATE member SET age = age - 1 WHERE id = 1;
```

데이터베이스는 연산이 실행될 때마다 이전 상태를 `Undo segment`라는 메모리 영역에 저장한다. `Commit`을 하기 전 논리적 장애가 발생했을 때 `Unde segment`를 사용하여 이전 상태로 되돌린다.

## Redo
`Redo`는 트랜잭션 수행 중에 외부적인 물리적 장애가 발생했을 때 트랜잭션을<u>다시 실행하는 것</u>을 의미한다.

예를 살펴보자. 트랜잭션에서 `UPDATE` 실행 후 다음 연산을 수행하다 정전으로 시스템이 다운됐다.
``` sql
UPDATE member SET age = age + 1 WHERE id = 1;

다음 연산;  // 이 지점에서 오류 발생

COMMIT;
```
그러면 시스템을 복구했을 때 `Redo` 작업이 다시 실행된다.
``` sql
UPDATE member SET age = age + 1 WHERE id = 1;
```
데이터베이스 시스템은 `Redo log`라는 파일에 변경 히스토리를 기록한다. 그리고 시스템이 복구되었을 때 이 파일을 사용하여 작업들을 재실행한다.