---
title: "git diff"
lang: ko
showOnSidebar: true
---
# git diff

`git diff`명령어를 사용하면 두 Commit의 차이점을 비교할 수 있다. 우선 다음과 같이 `hello.kt`를 작성하고 첫 번째 Commit을 해보자.
``` kotlin{3}
// Hello.kt
fun printHello() {
    print("Hello")
}
```
``` shellsession
$ git commit -am "First Commit"
```
이제 `hello.kt`를 수정하고 두 번째 Commit을 한다.
``` kotlin {3}
// Hello.kt
fun printGoodbye() {
    print("Goodbye")
}
```
``` shellsession
$ git commit -am "Second Commit"
```
로그는 다음과 같다.
``` shellsession
$ git log
commit 22222 (HEAD -> master)
Author: yologger <yologger1013@gmail.com>
Date:   Mon Dec 20 20:53:10 2021 +0900

    Second Commit

commit 11111
Author: yologger <yologger1013@gmail.com>
Date:   Mon Dec 20 20:52:08 2021 +0900

    First Commit
```
이제 두 Commit의 차이점을 비교해보자. `git diff`는 다음과 같은 형태로 사용한다.
``` shellsession
// git diff <commit_a_id>..<commit_b_id>
$ git diff 11111..22222
```
결과는 다음과 같다.
```
diff --git a/hello.kt b/hello.kt
index 11111..22222
--- a/hello.kt
+++ b/hello.kt
@@ -1,3 +1,3 @@
-fun printHello() {
-       print("Hello")
+fun printGoodbye() {
+       print("Goodbye")
 }
```
결과를 살펴보자. `fun printHello() {`와 `print("Hello")`가 삭제되었고 `fun printGoodbye() {`와 `print("Goodbye")`가 추가된 것을 확인할 수 있다.