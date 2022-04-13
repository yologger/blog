---
title: "리눅스 환경변수 정리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## 환경변수 vs. 쉘 변수
`환경변수`는 시스템에 저장되어 어디서든 접근 가능한 변수다. 다른 쉘로 교체해도 접근할 수 있다.

반면 `쉘 변수`는 사용 중인 쉘에서만 유효한 변수다. 다른 쉘로 교체하면 이전 쉘의 변수에 접근할 수 없다.

### 환경변수 확인하기
`env` 명령어는 환경변수를 보여준다.
``` shellsession
HOSTNAME=1143426a0e96
HOME=/root
TERM=xterm
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
PWD=
```

### 쉘 변수 확인하기
`set` 명령어는 환경변수와 쉘 변수를 모두 보여준다.
``` shellsession
$ set  
HOME='/root'
HOSTNAME='1143426a0e96'
IFS='
'
OPTIND='1'
PATH='/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'
PPID='0'
PS1='# '
PS2='> '
PS4='+ '
PWD='/'
TERM='xterm'
_='clear
```

## 환경변수
`env`명령어로 시스템의 모든 환경변수를 확인할 수 있다.
``` shellsession
$ env
HOSTNAME=1143426a0e96
HOME=/root
TERM=xterm
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
PWD=/
```
환경변수는 다음과 같이 선언한다.
``` shellsession
$ AGE=20
```
환경변수는 다음과 같이 출력할 수 있다.
``` shellsession
$ echo ${AGE}
20
```
`unset`명령어로 환경변수를 해제할 수 있다.
```
$ unset AGE
$ echo ${AGE}

```