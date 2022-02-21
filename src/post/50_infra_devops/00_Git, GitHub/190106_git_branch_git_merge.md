---
title: "git branch, git merge"
lang: ko
showOnSidebar: true
---

## git branch

`브랜치(Branch)`를 사용하면 작업 공간을 분기할 수 있다.

우선 초기 상태를 확인해보자.
``` shellsession
$ git log
commit 90a9a879c5b45ae392a6b434a8cb75e823546374 (HEAD -> master)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 19:56:29 2021 +0900

    Second commit

commit 6904277d6ff897a2d7e8fac19f2186ab502cd1f1
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 19:54:44 2021 +0900

    First commit
```
`git branch`명령어로 현재 작업 중인 브랜치를 확인할 수 있다.
``` shellsession {2}
$ git branch
* master
```
새로운 브랜치를 생성해보자. `develop`브랜치를 생성해보자.
``` shellsession
$ git branch develop
```
이제 두 개의 브랜치(`develop`, `master`)가 존재하게되며, 현재 `master`에서 작업하고 있다.
``` shellsession{3}
$ git branch
  develop
* master
```
``` shellsession {2}
$ git log 
commit 90a9a879c5b45ae392a6b434a8cb75e823546374 (HEAD -> master, develop)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 19:56:29 2021 +0900

    Second commit

commit 6904277d6ff897a2d7e8fac19f2186ab502cd1f1
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 19:54:44 2021 +0900

    First commit
```
`git checkout`명령어를 이용하면 브랜치를 이동할 수 있다. `develop`로 이동해보자.
``` shellsession{5}
$ git checkout develop
'develop' 브랜치로 전환합니다

$ git branch
* develop
  master
```
`HEAD`가 `develop`로 이동했다.
``` shellsession{2}
$ git log
commit 90a9a879c5b45ae392a6b434a8cb75e823546374 (HEAD -> develop, master)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 19:56:29 2021 +0900

    Second commit

commit 6904277d6ff897a2d7e8fac19f2186ab502cd1f1
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 19:54:44 2021 +0900

    First commit
```
이제 `develop`브랜치에서 새로운 Commit을 해보자.
``` shellsession{2}
$ git branch
* develop
  master

$ git commit -m "Third commit"
```
로그를 확인해보자.
``` shellsession{2,8}
$ git log
commit f3ecc9c5c0aab5deb00955184b497d44f5175c48 (HEAD -> develop)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:03:57 2021 +0900

    Third commit

commit 90a9a879c5b45ae392a6b434a8cb75e823546374 (master)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 19:56:29 2021 +0900

    Second commit

commit 6904277d6ff897a2d7e8fac19f2186ab502cd1f1
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 19:54:44 2021 +0900

    First commit
```
다시 `master`로 이동해서 Commit을 해보자.

``` shellsession{5}
$ git checkout master 
'master' 브랜치로 전환합니다

$ git log
commit 90a9a879c5b45ae392a6b434a8cb75e823546374 (HEAD -> master)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 19:56:29 2021 +0900

    Second commit

commit 6904277d6ff897a2d7e8fac19f2186ab502cd1f1
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 19:54:44 2021 +0900

    First commit
```
``` shellsession
$ git commit
Third commit
```
이제 로그를 확인해보자. `git log`명령어에 `--branches`와 `--graph`옵션을 추가하면 시각적으로 브랜치를 확인할 수 있다.
``` shellsession{2,8}
$ git log --branches --graph
* commit 043b07324fb44cdbea4f6ef4539bcb52ad895a4f (HEAD -> master)
| Author: yologger <yologger1013@gmail.com>
| Date:   Tue Oct 5 20:10:27 2021 +0900
| 
|     Third commit
|   
| * commit f3ecc9c5c0aab5deb00955184b497d44f5175c48 (develop)
|/  Author: yologger <yologger1013@gmail.com>
|   Date:   Tue Oct 5 20:03:57 2021 +0900
|   
|       Third commit
| 
* commit 90a9a879c5b45ae392a6b434a8cb75e823546374
| Author: yologger <yologger1013@gmail.com>
| Date:   Tue Oct 5 19:56:29 2021 +0900
| 
|     Second commit
| 
* commit 6904277d6ff897a2d7e8fac19f2186ab502cd1f1
  Author: yologger <yologger1013@gmail.com>
  Date:   Tue Oct 5 19:54:44 2021 +0900
  
      First commit
```

## 브랜치 삭제
`git branch -d <branch_name>` 명령어를 사용하면 브랜치를 삭제할 수 있다.

## git merge
두 개의 브랜치를 합치는 작업을 `Merge`라 한다.

예제를 살펴보자. 초기 상태는 다음과 같다.
``` shellsession
$ git log
commit 49ff46662071c4c4576aac8c0aca98f34058c919 (HEAD -> master)
Author: yologger <yologger1013@gmail.com>
Date:   Mon Dec 20 22:38:48 2021 +0900

    Add a.txt
```
``` text
// a.txt
function do()
```
`develop`브랜치를 생성하고 `a.txt`를 다음과 같이 수정한 후 Commit하자.
``` shellsession
// 브랜치 생성
$ git branch develop

// 브랜치 이동
$ git checkout develop 

 // a.txt 수정
$ vim a.txt
function develop()  // 추가된 부분
function do()

// add & commit
$ git add -A
$ git commit
Update a.txt
: Add function 'develop()'
```
`master`브랜치로 돌아가서 `a.txt`를 다르게 수정한 후 Commit하자.
``` shellsession
// 브랜치 이동
$ git checkout master

// a.txt 수정
$ vim a.txt
function do()
function master()  // 추가된 부분

// add & commit
$ git add -A
$ git commit
Update a.txt
: Add function 'master()'
```
로그를 확인해보자.
``` shellsession{2,9}
$ git log --branches --graph
* commit 9f265d2ef48776f5c9ef53bd6b2f286b52a051aa (HEAD -> master)
| Author: yologger <yologger1013@gmail.com>
| Date:   Mon Dec 20 22:46:14 2021 +0900
| 
|     Update a.txt
|     : Add function 'master()'
|   
| * commit 6ea93029db54ab2d98a81924241395fd3ffd654f (develop)
|/  Author: yologger <yologger1013@gmail.com>
|   Date:   Mon Dec 20 22:44:06 2021 +0900
|   
|       Update a.txt
|       : Add function 'develop()'
| 
* commit 49ff46662071c4c4576aac8c0aca98f34058c919
  Author: yologger <yologger1013@gmail.com>
  Date:   Mon Dec 20 22:38:48 2021 +0900
  
      Add a.txt
```
이제 `develop`을 `master`에 병합해보자. `master`로 이동한 후 다음 명령어를 입력한다.
``` shellsession
// master로 이동
$ git checkout master

// develop을 master에 merge
$ git merge develop
```
로그도 확인해보자. `develop`브랜치가 `master`에 병합되었다.
``` shellsession{2-7}
$ git log --branches --graph
*   commit 1ac36964707e4b6bcf594d864728ce1fc473b5cf (HEAD -> master)
|\  Merge: 9f265d2 6ea9302
| | Author: yologger <yologger1013@gmail.com>
| | Date:   Mon Dec 20 22:48:47 2021 +0900
| | 
| |     Merge branch 'develop'
| | 
| * commit 6ea93029db54ab2d98a81924241395fd3ffd654f (develop)
| | Author: yologger <yologger1013@gmail.com>
| | Date:   Mon Dec 20 22:44:06 2021 +0900
| | 
| |     Update a.txt
| |     : Add function 'develop()'
| | 
* | commit 9f265d2ef48776f5c9ef53bd6b2f286b52a051aa
|/  Author: yologger <yologger1013@gmail.com>
|   Date:   Mon Dec 20 22:46:14 2021 +0900
|   
|       Update a.txt
|       : Add function 'master()'
| 
* commit 49ff46662071c4c4576aac8c0aca98f34058c919
  Author: yologger <yologger1013@gmail.com>
  Date:   Mon Dec 20 22:38:48 2021 +0900
  
      Add a.txt
```
`a.txt`의 내용도 확인해보자. `develop`브랜치의 `a.txt`내용이 추가되었다.
``` text a.txt
function branch()   // branch에서 추가
function do()
function master()   // master에서 추가
```
이제 다 사용한 `develop`브랜치를 삭제하자. `master`브랜치에서 다음 명령어를 실행한다.
``` shellsession
// master로 이동
$ git checkout master

// develop 삭제
$ git branch -d develop
```
`develop`브랜치가 삭제되었는지 로그를 다시 한 번 확인해보자.
``` shellsession
$ git log --branches --graph
*   commit 1ac36964707e4b6bcf594d864728ce1fc473b5cf (HEAD -> master)
|\  Merge: 9f265d2 6ea9302
| | Author: yologger <yologger1013@gmail.com>
| | Date:   Mon Dec 20 22:48:47 2021 +0900
| | 
| |     Merge branch 'develop'
| | 
| * commit 6ea93029db54ab2d98a81924241395fd3ffd654f
| | Author: yologger <yologger1013@gmail.com>
| | Date:   Mon Dec 20 22:44:06 2021 +0900
| | 
| |     Update a.txt
| |     : Add function 'develop()'
| | 
* | commit 9f265d2ef48776f5c9ef53bd6b2f286b52a051aa
|/  Author: yologger <yologger1013@gmail.com>
|   Date:   Mon Dec 20 22:46:14 2021 +0900
|   
|       Update a.txt
|       : Add function 'master()'
| 
* commit 49ff46662071c4c4576aac8c0aca98f34058c919
  Author: yologger <yologger1013@gmail.com>
  Date:   Mon Dec 20 22:38:48 2021 +0900
  
      Add a.txt
```

## Conflict 관리

두 브랜치를 Merge하는 과정에 불일치가 발생할 수 있다. 이를 `Conflict`라고 한다.

예제를 살펴보자. 초기 상태는 다음과 같다.
``` shellsession
$ git log
* commit bbb7ca7cf73c3022b5bcf0df80b922021935780c
  Author: yologger <yologger1013@gmail.com>
  Date:   Mon Dec 20 22:11:40 2021 +0900
  
      Add a.txt
```
``` shellsession
$ ls
a.txt

$ cat a.txt
function do()
```
이제 `develop`브랜치를 만들고 `a.txt`를 다음과 같이 수정한 후 Commit한다.
``` shellsession
$ git branch develop
$ git checkout develop
```
``` shellsession
// a.txt 수정
$ vim a.txt
funtion do(develop)
```
``` shellsession
// Add & Commit
$ git add -A
$ git commit -m "Update a.txt: add parameter 'develop'"
```
`master`브랜치로 돌아와서 `a.txt`를 다음과 같이 수정한 후 Commit한다.
``` shellsession
$ git checkout master
```
``` shellsession
// a.txt 수정
$ vim a.txt
funtion do(master)
```
``` shellsession
// Add & Commit
$ git add -A
$ git commit -m "Update a.txt: add parameter 'master'"
```
이제 로그를 확인해보자
``` shellsession
$ git log --branches --graph
* commit 8a452009b15e4c9cb251c5697c23d94c3b6c64d6 (HEAD -> master)
| Author: yologger <yologger1013@gmail.com>
| Date:   Mon Dec 20 21:53:57 2021 +0900
| 
|     Update a.txt: add parameter 'master'
|   
| * commit 906f9ea289a238eb72b3aead3de918e053f5e3b7 (develop)
|/  Author: yologger <yologger1013@gmail.com>
|   Date:   Mon Dec 20 21:50:41 2021 +0900
|   
|       Update a.txt: add parameter 'develop'
| 
* commit bbb7ca7cf73c3022b5bcf0df80b922021935780c
  Author: yologger <yologger1013@gmail.com>
  Date:   Mon Dec 20 21:47:50 2021 +0900
  
      Add a.txt
```
`master`에서 `develop`을 Merge해보자. `a.txt`에서 Conflict가 발생한다.
``` shellsession
$ git branch
* master
  develop
```
``` shellsession {3,4}
$ git merge develop
Auto-merging a.txt
CONFLICT (content): Merge conflict in a.txt
Automatic merge failed; fix conflicts and then commit the result. 
```
`a.txt`를 열어보면 어디에서 Conflict가 발생했는지 확인할 수 있다.
``` shellsession{3,5}
$ cat a.txt
<<<<<<< HEAD
function do(master)         // Head(master) branch에서의 a.txt
=======
function do(develop)        // develop branch에서의 a.txt
>>>>>>> develop
```
Conflict를 해결하려면 `a.txt`를 직접 수정하고 다시 Commit해야한다. `a.txt`를 다음과 같이 수정하자.
``` text{2}
// a.txt
function(master, develop)
```
다시 Commit해준다.
``` shellsession
$ git add
$ git commit
[master 9384313] Merge branch 'develop'
```
마지막으로 `master`에서 다 사용한 `develop`브랜치를 삭제해주자.
``` shellsession
$ git checkout master
$ git branch -d develop
```
결과를 확인해보자.
``` shellsession{2-7}
$ git log
*   commit 9384313dcb041f1dc73a6862b2bd8de883da4c21 (HEAD -> master)
|\  Merge: 8a45200 906f9ea
| | Author: yologger <yologger1013@gmail.com>
| | Date:   Mon Dec 20 22:02:19 2021 +0900
| | 
| |     Merge branch 'develop'
| | 
| * commit 906f9ea289a238eb72b3aead3de918e053f5e3b7
| | Author: yologger <yologger1013@gmail.com>
| | Date:   Mon Dec 20 21:50:41 2021 +0900
| | 
| |     Update a.txt
| |     : add parameter 'develop'
| | 
* | commit 8a452009b15e4c9cb251c5697c23d94c3b6c64d6
|/  Author: yologger <yologger1013@gmail.com>
|   Date:   Mon Dec 20 21:53:57 2021 +0900
|   
|       Update a.txt:
|       add parameter 'master'
| 
* commit bbb7ca7cf73c3022b5bcf0df80b922021935780c
  Author: yologger <yologger1013@gmail.com>
  Date:   Mon Dec 20 21:47:50 2021 +0900
  
      Add a.txt
```
`a.txt`도 확인해보자. 수정한대로 Merge된 것을 확인할 수 있다.
``` shellsession{2}
$ cat a.txt
function(master, develop)
```