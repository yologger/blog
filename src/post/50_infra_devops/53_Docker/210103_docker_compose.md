---
title: "Docker Compose"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Docker Compose
하나의 시스템은 여러 컨테이너로 구성된다. `Docker Compose`를 사용하면 각 컨테이너 실행을 위한 명령어를 하나씩 입력할 필요없이 `docker-compose.yml`이라는 파일에 모든 컨테이너 실행과 실행 순서를 작성할 수 있다.

## Docker Compose 설치
Mac OS의 경우 `Docker Desktop on Mac`에 `Docker Compose`가 내장되어있다.

```   
$ docker-compose -version
docker-compose version 1.29.2, build 5becea4c
```

## docker-compose.yml
Docker Compose를 사용하려면 `docker-compose.yml`파일을 생성하고 생성할 이미지들과 필요한 정보들을 나열해야한다. 아래 예제는 세 개의 컨테이너 MySQL, Nginx, Tomcat을 실행한다.

``` yml
# docker-compose.yml
version: '3'

services:
  # MySQL
  db:
    image: docker.io/mysql
    ports:
      - "3306:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=password

  ## Tomcat
  app:
    image: docker.io/tomcat
    ports:
      - "8080:8080"

  ## Nginx
  web:
    image: docker.io/nginx
    ports:
      - "80:80"
```

## Docker Compose 실행
`docker-compose up` 명령어로 컨테이너들을 포그라운드로 실행할 수 있다.
```   
$ docker-compose up
```

`-d` 옵션을 추가하면 백그라운드로 실행한다.
```   
$ docker-compose up -d
```

만약 파일 이름이 `docker-compose.yml`이 아니라면 `-f` 옵션으로 파일 이름을 지정할 수 있다.
```   
$ docker-compose -f my-docker-compose.yml up -d
```

### Docker Compose 컨테이너들 확인하기
`docker-compose ps` 명령어로 컨테이너들을 확인할 수 있다. 
```   
$ docker-compose ps
    Name                   Command               State                 Ports              
------------------------------------------------------------------------------------------
project_app_1   catalina.sh run                  Up      0.0.0.0:8080->8080/tcp           
project_db_1    docker-entrypoint.sh mysqld      Up      0.0.0.0:3306->3306/tcp, 33060/tcp
project_web_1   /docker-entrypoint.sh ngin ...   Up      0.0.0.0:80->80/tcp  
```

### Docker Compose 재시작
```   
$ docker-compose restart
```

### Docker Compose 중지
```   
$ docker-compose stop
```

### Docker Compose 삭제
```   
$ docker-compose down
```