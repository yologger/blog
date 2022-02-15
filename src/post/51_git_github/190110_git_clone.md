---
title: "git clone"
lang: ko
showOnSidebar: true
---

# git clone
`git clone` 명령어를 사용하면 원격 저장소에서 관리하는 프로젝트를 로컬 PC에 동일하게 복사할 수 있다.

예제를 살펴보자. [Retrofit](https://github.com/square/retrofit)은 안드로이드에서 HTTP 통신을 할 때 사용하는 라이브러리다. `git clone`명령어를 사용하여 이 라이브러리를 로컬 PC에 복사해보자.

[https://github.com/square/retrofit](https://github.com/square/retrofit)에 접속한 후 `Code`버튼을 눌러 원격 저장소의 URL을 복사한다.
![](./190110_git_clone/1.png)

로컬 PC에서 `myRetrofit` 디렉토리를 생성한다.
``` shellsession
$ mkdir myRetrofit
$ cd myRetroft
```
`git clone`은 다음과 같이 사용한다.
``` shellsession
$ git clone <repository_url> <local_directory>
```
다음과 같이 작성하면 Retrofit을 현재 위치(`.`)에 다운받는다.
``` shellsession
$ git clone https://github.com/square/retrofit.git .
```
`ls`명령어를 실행하면 원격 저장소의 모든 파일이 다운된 것을 확인할 수 있다.
``` shellsession
$ ls
BUG-BOUNTY.md       README.md           deploy_website.sh   gradlew             retrofit-adapters   samples
CHANGELOG.md        RELEASING.md        gradle              gradlew.bat         retrofit-converters settings.gradle
LICENSE.txt         build.gradle        gradle.properties   retrofit            retrofit-mock       website
```