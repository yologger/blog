---
title: "git checkout"
lang: ko
showOnSidebar: true
---

# git checkout
`git checkout`명령어를 사용하면 특정 Commit으로 `Head`를 이동시킬 수 있다.

예제를 살펴보자. 현재 `master` 브랜치의 Commit 내역은 다음과 같다.
``` shellsession
$ git log
commit 44444 (HEAD -> master)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:39:01 2021 +0900

    4

commit 33333
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:38:45 2021 +0900

    3

commit 22222
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:38:25 2021 +0900

    2

commit 11111
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:38:07 2021 +0900

    1

```
브랜치의 <u>가장 최근 Commit</u>에는 <u>브랜치의 이름</u>이 표시된다. 다음 결과는 Commit ID 44444가 가장 최근 Commit이라는 의미다.
``` {1}
commit 44444 (master)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:39:01 2021 +0900

    4
```
현재 작업 중인 Commit에는 `HEAD`포인터가 표시된다.
``` {1}
commit 44444 (HEAD)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:39:01 2021 +0900

    4
```
다음 출력 결과는 `master`브랜치의 가장 최근 Commit의 Id가 44444이며, 현재 이 Commit에서 작업 중이라는 의미다.
``` {1}
commit 44444 (HEAD -> master)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:39:01 2021 +0900

    4
```

이제 `git checkout`명령어와 Commit Id를 이용하여 특정 Commit으로 이동해보자.
``` shellsession
// Commit Id 22222로 Head 이동
$ git checkout 22222
```
``` shellsession{2}
$ git log
commit 22222 (HEAD)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:38:25 2021 +0900

    2

commit 11111
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:38:07 2021 +0900

    1
```
다시 master 브랜치의 최신 commit으로 Head를 이동시켜보자.
``` shellsession
// git checkout <branch_name>
$ git checkout master
```
``` shellsession {2}
$ git log
commit 44444 (HEAD -> master)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:39:01 2021 +0900

    4

commit 33333
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:38:45 2021 +0900

    3

commit 22222
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:38:25 2021 +0900

    2

commit 11111
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:38:07 2021 +0900

    1
```

N 단계 이전으로 Head를 옮길 수 있다.

``` shellsession{5}
// 두 단계 이전으로 이동 
$ git checkout HEAD~2

$ git log
commit 22222 (HEAD)
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:38:25 2021 +0900

    2

commit 11111
Author: yologger <yologger1013@gmail.com>
Date:   Tue Oct 5 20:38:07 2021 +0900

    1
```