---
title: ".gitignore 파일"
lang: ko
showOnSidebar: true
---

## .gitignore 파일
`.gitignore`파일을 사용하면 원격 저장소에 Push할 때 특정 파일은 무시할 수 있다.

예제를 살펴보자. 아래 상태에서
``` shellsession
$ ls
a.txt  b.txt  c.txt  d.txt  e.txt
```
`.gitignore`파일을 다음과 같이 작성하면
``` shellsession
$ vim .gitignore
a.txt
b.txt
```
원격 저장소에 Push할 때 `a.txt`, `b.txt`가 업로드되지 않는다.

## .gitignore 파일이 적용되지 않을 때
파일을 원격 저장소에 이미 업로드한 경우, `.gitignore`를 변경해도 적용되지 않는 경우가 있다. 이때는 다음과 같은 명령어를 순차적으로 실행하면 된다.
``` shellsession
$ git rm -r --cached .

$ git add -A

$ git commit -m "Update .gitignore"

$ git push
```