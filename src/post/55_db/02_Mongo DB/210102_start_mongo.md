---
title: "Mongo DB 정리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---
# Table of Contents
[[toc]]

# Mongo DB 정리
비필수 스키마와 함께 JSON과 같은 문서를 사용하여 대량의 데이터를 저장하는 NoSQL 데이터베이스입니다. 

## Mongo DB 환경설정

### 설치
`Mac OS`에서는 `Homebrew`로 Mongo DB를 설치할 수 있다.
``` shellsession
$ brew tap mongodb/brew

$ brew install mongodb-community@4.2
```


### 서비스 시작
``` shellsession
$ brew services start mongodb-community@4.2 
```

### 서비스 재시작
``` shellsession
$ brew services restart mongodb-community@4.2
```

### 서비스 종료
``` shellsession
$ brew services stop mongodb-community@4.2
```

### Mongo DB 접속
``` shellsession
$ mongo
> 
```

### Compass
`Compass`는 Mongo DB를 위한 GUI database clinet다.


## Compass 설치
`Compass`는 Mongo DB를 위한 Database Client다. [이 곳](https://www.mongodb.com/try/download/compass)에서 다운받을 수 있다.
