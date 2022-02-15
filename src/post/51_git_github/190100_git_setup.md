---
title: "Git 시작하기"
lang: ko
showOnSidebar: true
---


# Git
`Git`은 버전 관리 시스템이다. Git을 사용하면 프로젝트의 변경사항을 쉽게 추적할 수 있다.

## Git 설치 및 설정
MacOS 환경에서는 Homebrew로 Git을 쉽게 설치할 수 있다.
``` shellsession
$ brew install git
```
버전을 확인해보자.
``` 
$ git --version
git version 2.30.1
```

설치되면 계정의 이름과 이메일을 설정해야한다.
``` shellsession
$ git config --global user.name "yologger"
$ git config --global user.email "yologger1013@gmail.com"
```

`git config`명령어로 모든 설정을 확인할 수 있다.
``` shellsession
$ git config --list
user.name=yologger
user.email=yologger1013@gmail.com
...
```

## 프로젝트 초기화
`git init`명령어로 프로젝트를 초기화한다.
``` shellsession
// 프로젝트 생성
$ mkdir myProject

// 프로젝트로 이동
$ cd myProject

// 프로젝트 초기화
$ git init
```
`git init`으로 프로젝트를 초기화하면 `.git`디렉토리가 생성된다. Git이 이 디렉토리를 관리한다는 의미며, 버전 관리에 필요한 데이터들이 이 곳에 저장된다.
``` shellsession{5}
$ ls -al
total 0
drwxr-xr-x   3 yologger  staff   96 Dec 20 14:45 .
drwx------@ 10 yologger  staff  320 Dec 20 14:42 ..
drwxr-xr-x   9 yologger  staff  288 Dec 20 14:45 .git
```