---
title: "리눅스 Redirection"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# 리다이렉션
`리다이렉션(Redirection)`을 사용하면 입출력을 재지정할 수 있다.

## 출력 재지정
`date`명령어는 시스템의 현재 시간을 모니터에 출력한다. 이는 기본적으로 `date`명령어가 표준 출력인 모니터에 결과물을 출력하기 때문이다.
```
$ date
Fri Jan  7 16:51:53 KST 2020
```
`>`로 출력을 파일로 변경해보자.
```
$ date > result.txt
```
파일을 확인해보자. 결과물이 저장되어있다.
```
$ less result
Fri Jan  7 16:51:53 KST 2020
```
`>`는 기존 내용을 덮어쓴다. 반면 `>>`는 기존 내용에 덧붙인다.
```
$ date >> result.txt
``` 
```
$ less result.txt
Fri Jan  7 16:51:53 KST 2020
Fri Jan  7 16:52:00 KST 2020
```

## 입력 재지정
`<`를 사용하면 입력을 재지정할 수 있다.
```
$ cat < result.txt
Fri Jan  7 16:51:53 KST 2020
Fri Jan  7 16:52:00 KST 2020
```

## 파이프라인
파이프라인을 사용하면 특정 명령어의 출력을 다른 명령어의 입력으로 사용할 수 있다.
```
$ ls -al | grep txt
```