---
title: "Docker 사용법"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Docker
`Docker` 사용법에 대해 정리한다.

## Virtual Machine
한 운영체제에 가상의 여러 운영체제를 가상화하는 기술이다. 제품군에는 `VirtualBox`, `VMWare` 등이 있다.

## Docker
`Docker`는 컨테이너 가상화 플랫폼이다. Docker는 호스트 OS에 `Docker Container`라는 격리된 공간을 제공해준다. 

## Docker의 장점
- `Docker Container`를 생성하고 필요한 소프트웨어를 설치한 후 `Docker Image`로 빌드하면 Docker가 설치된 어떠한 곳에서든 실행할 수 있다. 이 덕분에 개발, 환경구성, 배포가 쉬워진다.
- `Docker Swarm`이나 `Kubernetes`같은 `컨테이너 오케스트레이션 기술`과 함께 사용하여 `MSA(Microservice Architecuture)`를 쉽게 구성할 수 있다.

## Virtual Machine vs. Docker
`Virtual Machine`은 게스트 OS와 하이버바이저를 거쳐 호스트 OS의 커널과 자원을 사용하기 때문에 성능 손실이 발생한다. 반면 `Docker`는 하이버파이저와 게스트 OS가 없고 `도커 엔진`만을 거쳐 호스트 OS의 커널과 자원을 사용하며, 호스트 OS에서 프로세스로 동작하기 때문에 속도가 훨씬 빠르다.

![](./210101_start_docker/1.png)

## 설치
운영체제에 따라 `Docker`를 설치하는 방법이 다르다.

### Mac OS에 Docker 설치
Mac OS 환경에서는 [Homebrew](https://brew.sh/)로 `Docker Desktop on Mac`을 쉽게 설치할 수 있다.
``` shellsession
$ brew install --cask docker 
```
도커 버전을 확인해보자.
``` shellsession
$ docker -v
Docker version 20.10.11, build dea9396
```

`LaunchPad`에서도 `Docker Desktop on Mac`을 확인할 수 있다.

![](./210101_start_docker/2.png)

## 도커 이미지 검색 
`docker search` 명령어로 도커 이미지를 검색할 수 있다.
``` shellsession
// docker search <image_name>
$ docker search centos
```
## 도커 이미지 다운로드
`docker pull`명령어로 도커 이미지를 다운받을 수 있다. `centos:7` 이미지를 다운받아보자.
``` shellsession
// docker pull <image_name>
$ docker pull centos:7
``` 

## 다운받은 도커 이미지 확인
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
자주 사용하는 옵션은 다음과 같다.
- `-i -t`: `docker attach`명령어로 컨테이너 내부에 진입할 수 있다.
- `-d`: 컨테이너를 백그라운드로 실행한다.

## 도커 컨테이너 실행
`docker start` 명령어로 도커 컨테이너를 시작한다.
``` shellsession
$ docker start <container_name>
docker start my_centos

$ docker ps -a          
CONTAINER ID   IMAGE      COMMAND       CREATED          STATUS         PORTS     NAMES
b5df63051a50   centos:7   "/bin/bash"   28 seconds ago   Up 3 seconds             my_centos
```

## 도커 컨테이너 접속
`docker attach`명령어로 컨테이너 내부로 접속할 수 있다.
``` shellsession
$ docker attach my_centos
[root@a9adb823231 /]# 
```

## 도커 컨테이너에서 나오기
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

## 도커 이미지 다운, 컨테이너 생성, 시작, 접속 한번에 하기
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

## 도커 컨테이너 목록, 상태 확인
`docker ps`명령어로 도커 컨테이너 목록을 확인할 수 있다. 어떤 옵션도 추가하지 않으면 실행 중인 컨테이너 목록만 출력된다. 정지된 컨테이너 목록까지 확인하려면 `-a` 옵션을 추가한다.
``` shellsession
$ docker ps -a
CONTAINER ID   IMAGE      COMMAND       CREATED         STATUS    PORTS     NAMES
b5df63051a50   centos:7   "/bin/bash"   7 seconds ago   Created             my_centos
```
`STATUS`는 컨테이너의 상태를 나타내며 다음 값들을 가질 수 있다.

- `Created`: 컨테이너가 생성되었으나 한번도 실행된 적이 없는 상태
- `Up`: 실행 중
- `Exited`: 종료된 상태
- `Pause`: 일시 중지된 상태

## 도커 컨테이너 삭제
`docker rm` 명령어를 사용하면 도커 컨테이너를 삭제할 수 있다.
``` shellsession
// docker rm <container_name>
$ docker rm my_centos
```  
`docker container prune` 명령어를 사용하면 모든 도커 컨테이너를 삭제한다.
``` shellsession
$ docker container prune
```

## 도커 이미지 만들기
`docker commit`명령어를 사용하면 Docker container를 빌드하여 Docker image를 생성할 수 있다.
``` shellsession
$ docker images
REPOSITORY          TAG       IMAGE ID       CREATED         SIZE
original_image      3.1     0903d3cdd37e   12 months ago   211MB
```
``` shellsession{2}
// docker commit -a [author] -m [message] ORIGINAL_CONTAINER COPIED_CONTAINER:TAG
$ docker commit -a "yologger" -m "This is message" copied_image copied_image:0.0.1
```
``` shellsession{4}
$ docker images
REPOSITORY          TAG     IMAGE ID       CREATED         SIZE
original_image      3.1     0903d3cdd37e   12 months ago   211MB
copied_image        0.1     0903d3cdd37e   4 seconds ago   211MB
```

## 도커 이미지 삭제
`docker image rmi` 명령어로 이미지를 삭제할 수 있다.
```shellsession{6}
$ docker images
REPOSITORY          TAG     IMAGE ID       CREATED         SIZE
original_image      3.1     0903d3cdd37e   12 months ago   211MB
copied_image        0.1     0903d3cdd37e   4 seconds ago   211MB

$ docker rmi copied_image:0.1

$ docker images
REPOSITORY          TAG     IMAGE ID       CREATED         SIZE
original_image      3.1     0903d3cdd37e   12 months ago   211MB
```
도커 이미지가 도커 컨테이너로 사용 중이라면 컨테이너를 먼저 삭제해야한다.

## 도커 이미지 이름, 태그 변경하기
`docker tag`명령어로 이미지 이름과 태그를 변경할 수 있다.
```shellsession
$ docker images
REPOSITORY          TAG     IMAGE ID       CREATED         SIZE
original_image      3.1     0903d3cdd37e   12 months ago   211MB
```
``` shellsession
// docker tag [기존이미지명:기존태그명] [새로운이미지명:새로운태그명]
$ docker tag copied_image:0.1 new_image:0.1
```
기존 이미지가 사라지는 것은 아니며, 새로운 이미지가 생성된다.
``` shellsession{4}
$ docker images
REPOSITORY          TAG     IMAGE ID       CREATED         SIZE
original_image      3.1     0903d3cdd37e   12 months ago   211MB
new_image           0.1     eeb6ee3f44bd   4 seconds ago   211MB
```

## 도커 허브로 이미지 배포하기
`Docker Hub`의 `Repository`를 사용하면 도커 이미지를 배포할 수 있다. [이 곳](https://hub.docker.com/)에 접속하여 회원가입 후 `Repository > Create Repository`를 클릭한다. 그리고 `Repository` 이름을 입력하고 Repository를 생성한다. 

::: warning
Repository의 이름은 이미지의 이름과 동일해야한다.
:::

![](./210101_start_docker/3.png)

생성에 성공하면 Repository 정보를 확인할 수 있다.

![](./210101_start_docker/4.png)

이제 업로드할 이미지 이름 앞에 <b><u>사용자 이름</u></b>을 추가한다.
``` shellsession
$ docker tag test_image:0.1 yologger1013/test_image:0.1
REPOSITORY                  TAG       IMAGE ID       CREATED          SIZE
test_image                  0.1       0903d3cdd37e   41 minutes ago   211MB
yologger1013/test_image     0.1       0903d3cdd37e   41 minutes ago   211MB
```

그리고 `docker login` 명령어로 도커 허브에 로그인한다.
``` shellsession
$ docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username: yologger1013
Password: 
Login Succeeded

Logging in with your password grants your terminal complete access to your account. 
For better security, log in with a limited-privilege personal access token. Learn more at https://docs.docker.com/go/access-tokens/
```

마지막으로 `docker push` 명령어로 이미지를 업로드한다.
``` shellsession
$ docker push yologger1013/test_image:0.1
The push refers to repository [docker.io/yologger1013/test_image]
d4b7a766cea6: Pushed 
83109fa660b2: Mounted from library/ubuntu 
30d3c4334a23: Mounted from library/ubuntu 
f2fa9f4cf8fd: Mounted from library/ubuntu 
0.1: digest: sha256:a7770184b5c0020cf9832e68509957bbca4498a4916c92a453047f184729e7f2 size: 1157
```

도커 허브에서 푸시한 이미지를 확인할 수 있다.

![](./210101_start_docker/6.png)

## 도커 허브에서 이미지 다운받기
`docker push` 명령어로 도커 허브에서 이미지를 다운받을 수 있다.
``` shellsession
$ docker pull yologger1013/test_image:0.1 

$ docker images
REPOSITORY                TAG       IMAGE ID       CREATED          SIZE
yologger1013/test_image   0.1       0903d3cdd37e   56 minutes ago   211MB
```

## Dockerfile
지금까지 다음과 같은 순서로 `Docker image`를 생성했다.

1. Docker image로 Docker container 생성
2. Docker container에 접속하여 필요한 어플리케이션 설치
3. `docker commit` 명령어로 이미지 생성

이러한 과정들을 `Dockerfile`라는 스크립트 파일에 나열한 후, 이 파일로 쉽게 Docker image를 생성할 수 있다.

예제를 살펴보자. 베이스가 되는 `ubuntu:18.04` 이미지에 `git`이 설치된 새로운 이미지를 생성할 것이다. 우선 디렉토리를 생성하자.
```shellsession
$ mkdir my_project

$ cd my_project 
```

그 다음 `Dockerfile`을 생성한다.
```
# 베이스가 될 이미지 지정
FROM ubuntu:18.04

# 패키지 매니저 업데이트
RUN apt update

# 패키지 매니저로 git 설치
RUN apt install -y git
```
이제 `docker build` 명령어로 이미지를 생성하자.
``` shellsession{1}
$ docker build -t my_ubuntu_image:0.1 .
[+] Building 2.2s (8/8) FINISHED                                                                                              
 => [internal] load build definition from Dockerfile                                                                     0.0s
 => => transferring dockerfile: 36B                                                                                      0.0s
 => [internal] load .dockerignore                                                                                        0.0s
 => => transferring context: 2B                                                                                          0.0s
 => [internal] load metadata for docker.io/library/ubuntu:18.04                                                          2.1s
 => [auth] library/ubuntu:pull token for registry-1.docker.io                                                            0.0s
 => [1/3] FROM docker.io/library/ubuntu:18.04@sha256:982d72c16416b09ffd2f71aa381f761422085eda1379dc66b668653607969e38    0.0s
 => CACHED [2/3] RUN apt update                                                                                          0.0s
 => CACHED [3/3] RUN apt install -y git                                                                                  0.0s
 => exporting to image                                                                                                   0.0s
 => => exporting layers                                                                                                  0.0s
 => => writing image sha256:abf23e9807b83b21b052ec8ad3c569c3131b0b73acf49c133fa6b08ffa6d272b                             0.0s
 => => naming to docker.io/library/my_ubuntu_image:0.1        
```
생성된 이미지를 확인할 수 있다.
``` shellsession
$ docker images
REPOSITORY        TAG       IMAGE ID       CREATED          SIZE
my_ubuntu_image   0.1       abf23e9807b8   24 minutes ago   197MB
```
마지막으로 생성한 이미지로 컨테이너를 생성해서 `git`이 설치되어있는지 확인해보자.
``` shellsession
$ docker create -i -t --name my_ubuntu_container my_ubuntu_image:0.1

$ docker ps -a
CONTAINER ID   IMAGE                 COMMAND   CREATED          STATUS    PORTS     NAMES
92102fed06dd   my_ubuntu_image:0.1   "bash"    14 seconds ago   Created             my_ubuntu_container

$ docker start my_ubuntu_container

$ docker attach my_ubuntu_container
```
`git`이 설치된 것을 확인할 수 있다.
``` shellsession
root@1143426a0e96:/# git --version
git version 2.17.1
```