---
title: "GitHub, git remote, git push"
lang: ko
showOnSidebar: true
---

## GitHub
`GitHub`는 원격 분산 버전관리 시스템이다. `Git`과는 다음과 같은 차이가 있다.

|Git|GitHub|
|---|---|
|로컬 저장소에 버전을 관리한다.|원격 저장소에서 버전을 관리한다.|
||여러 개발자가 함께 협업할 수 있다.|

GitHub에서 버전을 관리하는 과정은 다음과 같다.
![](./190107_git_remote_git_push/1.png)

## GitHub에 원격 저장소 생성하기
GitHub에 소스 코드를 업로드하려면 `원격 저장소(Remote Repository)`를 생성해야한다. [https://github.com/](https://github.com/)에 접속하여 `New` 버튼을 클릭하여 원격 저장소를 생성할 수 있다.
![](./190107_git_remote_git_push/2.png)
원격 저장소 이름, 설명, 공개 범위를 입력하고 `Create repository`을 누르면 원격 저장소가 생성된다.
![](./190107_git_remote_git_push/3.png)
원격 저장소가 생성되면 <u>원격 저장소 URL</u>이 생성된다. 원격 저장소에 소스 코드를 업로드할 때 이 URL을 사용한다.
![](./190107_git_remote_git_push/4.png)

## git remote
`git remote`명령어를 사용하면 로컬 저장소와 원격 저장소 사이의 `연결(Connection)`을 생성할 수 있다.

현재 로컬 저장소의 상태는 다음과 같다고 가정하자.
``` shellsession
$ git log
commit 87e3f71ded76107c3c10abfe176b4ba9064195a9 (HEAD -> master)
Author: yologger <yologger1013@gmail.com>
Date:   Mon Dec 20 18:31:38 2021 +0900

    Add b.txt

commit 41f83d2e830455d23299b86856a3ecf6195d46d4
Author: yologger <yologger1013@gmail.com>
Date:   Mon Dec 20 16:55:06 2021 +0900

    Add a.txt
```
원격 저장소에 파일을 업로드하려면 먼저 `README.md`파일을 생성해야한다. 이 파일에는 프로젝트의 설명을 작성한다. `README.md` 파일을 생성하고 적절하게 작성한 후 Commit 하자.
``` 
// README.md
This is README.md
```
``` shellsession
$ git add -A
$ git commit -m "Add README.md"
```
다시 상태를 확인해보자.
``` shellsession {2-6}
$ git log
commit a09ef71ded76107c3c10abfe176b4ba9064195a9 (HEAD -> master)
Author: yologger <yologger1013@gmail.com>
Date:   Mon Dec 20 18:37:38 2021 +0900

    Add README.md

commit 87e3f71ded76107c3c10abfe176b4ba9064195a9
Author: yologger <yologger1013@gmail.com>
Date:   Mon Dec 20 18:31:38 2021 +0900

    Add b.txt

commit 41f83d2e830455d23299b86856a3ecf6195d46d4
Author: yologger <yologger1013@gmail.com>
Date:   Mon Dec 20 16:55:06 2021 +0900

    Add a.txt
```

이제 URL을 통해 원격 저장소와의 연결을 만들어야한다. 이때 `git remote` 명령어를 사용한다. 
``` shellsession
// git remote add <connection_name> <url>
$ git remote add origin https://github.com/yologger/myProject.git
```
연결은 다음과 같이 확인할 수 있다.
``` shellsession
$ git remote
origin
``` 
연결 이름을 변경할 수도 있다.
```
// git remote rename <old_name> <new_name>
``` 
연결을 삭제할 수도 있다.
```
// git remote remove <connection_name>
```

## git push
연결이 생성되면 파일을 업로드할 수 있다. 먼저 현재 브랜치를 확인해보자.
``` shellsession
$ git branch
* master
```
`git push`명령어로 `master` 브랜치를 업로드하자.
``` shellsession
// git push -u <connection_name> <branch>
$ git push -u origin master
```

이제 [https://github.com/](https://github.com/)에 접속하여 해당 원격 저장소에 접속해보자. 파일이 업로드된 것을 확인할 수 있다.
![](./190107_git_remote_git_push/5.png)


콘솔에서 로그를 확인해보자. 마지막 Commit의 ID 뒷 부분에 `origin/master`가 추가되었다.
``` shellsession {2}
$ git log
commit a09ef71ded76107c3c10abfe176b4ba9064195a9 (HEAD -> master, origin/master)
Author: yologger <yologger1013@gmail.com>
Date:   Mon Dec 20 18:37:38 2021 +0900

    Add READMD.md

commit 87e3f71ded76107c3c10abfe176b4ba9064195a9
Author: yologger <yologger1013@gmail.com>
Date:   Mon Dec 20 18:31:38 2021 +0900

    Add b.txt

commit 41f83d2e830455d23299b86856a3ecf6195d46d4
Author: yologger <yologger1013@gmail.com>
Date:   Mon Dec 20 16:55:06 2021 +0900

    Add a.txt
```

아래 출력 결과의 의미는 다음과 같다.
```
commit 111111 (HEAD -> master, origin/master)
```
- `HEAD`: 현재 Id가 111111 Commit에서 작업 중이다.
- `master`: master 브랜치의 최신 Commit이 111111다.
- `origin/master`: origin으로 연결된 원격 저장소의 master 브랜치의 최신 Commit이 111111다.

