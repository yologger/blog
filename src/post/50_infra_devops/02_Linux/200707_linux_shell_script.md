---
title: "리눅스 쉘 스크립트"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

## 쉘 스크립트
`쉘 스크립트(Shell Script)`는 명령어들이 나열된 파일이다.

간단한 쉘 스크립트를 작성해보자.
``` 
$ vi a.sh
```
``` sh a.sh
#!/bin/bash

# This is comment.

# 변수 선언
name="Bill Gates"
age=34

echo "Hello World"
echo "My name is ${name}"
echo "I'm ${age} years old."
echo "Good bye~"
```
첫 줄의 `#!/bin/bash`는 쉘 스크립트를 실행할 쉘을 지정한다. 

그 다음 쉘 스크립트 파일에 실행 권한을 부여하자.
```
$ chmod a+x a.sh
```
이제 다음과 같이 쉘 스크립트를 실행할 수 있다.
```
$ ./a.sh
echo "Hello World"
echo "My name is Bill Gates"
echo "I'm 34 years old."
echo "Good bye~"
```
`sh`명령어로 쉘 스크립트를 실행할 수도 있다.
```
$ sh a.sh
```

## if 문
`if 문`은 다음과 같은 형태로 사용한다.
``` sh
#!/bin/bash

if [ .. ]
    then [명령어]
elif [ .. ]
    then [명령어]
else
    [명령어]	
fi
```

### 숫자 비교
숫자 비교 예제를 첨부한다.
``` sh number.sh
#!/bin/bash

echo "Please enter the value: "
read INPUT

if [ ${INPUT} -ge 50 ]
    then echo "greater than 50"
fi
```
```
$ ./number.sh
Please enter the value: 
100
greater than 50
```
숫자를 비교할 때는 다음 키워드를 사용한다.

|키워드|설명|
|------|---|
|eq|equal|
|ne|not equal|
|gt|greater than|
|ge|greater than & equal|
|lt|less than|
|le|less than & equal|

### 문자열 비교
문자열은 쌍따옴표로 감싸줘야한다.
```
name="Paul"
```
문자열 비교는 `==` 또는 `!=`을 사용한다.

문자열 비교 예제를 첨부한다.
``` sh
!/bin/sh

VAR1="Paul"
VAR2="Paul"

if [ ${VAR1} = ${VAR2} ]
    then echo "equal"
else
    echo "not equal"
fi
```

### 파라미터
쉘 스크립트는 파라미터를 전달받을 수 있다. 쉘 스크립트 안에서는 `$1`, `$2`, ... `$n` 형태로 파라미터에 접근할 수 있다.

예제를 첨부한다.
```sh test.sh
#!/bin/sh

if [ "$1" = "$2" ]
    then echo "same.”
elif [ "$1" != "$2" ]
    then echo "different.”
fi
```
```
$ ./test.sh "Paul" "Monica"
different.
```
```
$ ./test.sh "Paul" "Paul"
same.
```

### continue, break
`if 문`은 `continue`와 `break`와 함께 사용할 수도 있다. 보통 다음과 같은 형태로 사용한다.
``` sh
if [조건]
    then continue
else
    break
fi
```

## for 문
`for 문`은 다음과 같은 형태로 사용한다.
``` sh
for "변수" IN "원소1" "원소2" .. "원소n"
do
    # 명령어
done
    # 명령어
```
예제를 첨부한다.
``` sh
#!/bin/sh

for name in "Paul" "John" "Eric"
do
    echo "${name}"
done
    echo "Finished."
```
``` text 출력 결과
Paul
John
Eric
Finished.
```

## while 문
`while 문`은 다음과 같은 형태로 사용한다.
``` sh
while [조건]
do
    # 명렁어
done
```
예제를 첨부한다.
``` sh text.sh
#!/bin/sh
CNT=0

while [ ${CNT} -lt 10 ]
do
    echo ${CNT}
    CNT=$( expr ${CNT} + 1 )
done
    echo "END"
```
``` text 출력 결과
0
1
2
3
4
5
6
7
8
9
END
```

## case 문
``` sh
#!/bin/sh

echo “Please enter the value: ”
read num

case ${num} in
    1)
        echo “num is one.”;;
    2)
        echo “num is two.”;;
    *)
        echo “num is other number.”;;
esac
```

## 쉘 함수
쉘 스크립트 안에는 함수를 정의할 수도 있다. 다음과 같은 형태로 정의한다.
``` sh
function name(){
    # 내용
}
```
예제를 첨부한다.
``` sh test.sh
#!/bin/sh
function myFun(){
    echo "Hello myFun"
}

myFun
myFun
```
```
$ ./test.sh
Hello myFun
Hello myFun
```
함수에 인자를 전달할 수도 있다.
``` sh test.sh
#!/bin/sh
function myFun(){
    echo "$1"
}

myFun "Paul"
myFun "John"
```
```
$ ./test.sh
Paul
John
```