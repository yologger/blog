---
title: "Docker 설치 및 시작하기"
lang: ko
showOnSidebar: true
---

# Docker 설치 및 시작하기

## 설치
Mac OS 환경에서는 [Homebrew](https://brew.sh/)로 `Docker`를 쉽게 설치할 수 있다.
``` shellsession
$ brew install --cask docker 
```
도커 버전을 확인해보자.
``` shellsession
$ docker -v
Docker version 20.10.11, build dea9396
```

## 도커 이미지 다운로드
우선 다운받을 수 있는 `도커 이미지`를 검색해보자. 
``` shellsession
// docker search <image_name>
$ docker search centos
```
`docker pull`명령어로 도커 이미지를 다운받을 수 있다. `centos:7` 이미지를 다운받아보자.
``` shellsession
// docker pull <image_name>
$ docker pull centos:7
``` 
`docker images` 명령어로 다운받은 도커 이미지 목록을 확인할 수 있다.
``` shellsession
$ docker images
REPOSITORY          TAG       IMAGE ID       CREATED        SIZE
centos              7         eeb6ee3f44bd   3 months ago   204MB
```

## 도커 컨테이너 생성
`docker create` 명령어로 도커 컨테이너를 생성할 수 있다. 자세한 실행 옵션은 [이 곳](https://docs.docker.com/engine/reference/commandline/create/)에서 확인할 수 있다.
``` shellsession
// docker create -i -t --name <container_name> <image_name> 
$ docker create -i -t --name my_centos centos:7
```

## 도커 컨테이너 목록 및 상태 확인
`docker ps`명령어로 도커 컨테이너 목록을 확인할 수 있다. 어떤 옵션도 추가하지 않으면 실행 중인 컨테이너 목록만 출력된다. 정지된 컨테이너 목록까지 확인하려면 `-a` 옵션을 추가한다.
``` shellsession
$ docker ps -a
CONTAINER ID   IMAGE      COMMAND       CREATED         STATUS    PORTS     NAMES
b5df63051a50   centos:7   "/bin/bash"   7 seconds ago   Created             my_centos
```
`STATUS`는 컨테이너의 상태를 나타내며 다음 값들을 가질 수 있다.
- `Up`: 실행 중
- `Exited`: 종료된 상태
- `Pause`: 일시 중지된 상태

## 도커 컨테이너 실행
`docker start` 명령어로 도커 컨테이너를 시작한다.
``` shellsession
$ docker start <container_name>
docker start myubuntu

$ docker ps -a          
CONTAINER ID   IMAGE      COMMAND       CREATED          STATUS         PORTS     NAMES
b5df63051a50   centos:7   "/bin/bash"   28 seconds ago   Up 3 seconds             my_centos
```

`docker attach`명령어로 컨테이너 내부로 접속할 수 있다.
``` shellsession
$ docker attach my_centos
[root@a9adb823231 /]# 
```
`exit`을 입력하여 컨테이너에서 빠져나올 수 있다.
``` shellsession
[root@a9adb823231 /]# exit 
```
`exit`을 사용하여 컨테이너에서 빠져나오면 컨테이너가 종료된다.
``` shellsession
$ docker ps -a
CONTAINER ID   IMAGE      COMMAND       CREATED         STATUS                       PORTS     NAMES
b5df63051a50   centos:7   "/bin/bash"   4 minutes ago   Exited (127) 4 seconds ago             my_centos
```
컨테이너를 종료시키지 않고 빠져나오려면 `Ctrl + P, Q`를 입력한다.

## docker run 명령어
`docker run` 명령어를 사용하면 도커 이미지 다운, 도커 컨테이너 생성, 시작, 접속을 한 번에 할 수 있다.
``` shellsession
// docker run -i -t --name [container_name] [image_name]
$ docker run -i -t --name my_centos ubuntu:14.04
root@bdccae5606a1:/#
```

## 도커 컨테이너 정지
`docker stop` 명령어를 사용하면 도커 컨테이너를 정지할 수 있다.
``` shellsession
// docker stop <container_name>
$ docker stop my_centos
```

# 도커 컨테이너 삭제
`docker rm` 명령어를 사용하면 도커 컨테이너를 삭제할 수 있다.
``` shellsession
// docker rm <container_name>
$ docker rm my_centos
```  
`docker container prune` 명령어를 사용하면 모든 도커 컨테이너를 삭제한다.
``` shellsession
$ docker container prune
```