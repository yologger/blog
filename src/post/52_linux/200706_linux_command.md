---
title: "리눅스 명령어 정리"
lang: ko
showOnSidebar: true
---

# 명령어 종류
리눅스 명령어는 크게 네 종류로 구분된다. `type`명령어를 사용하면 명령어의 타입을 확인할 수 있다.

### 실행 파일
/usr/bin 디렉토리에서 본 파일들처럼 실행 파일을 말한다.
```
# type cp
cp is hashed (/bin/cp)
```
### 쉘에 내장된 명령어
쉘에 내장된 명령어다.
```
# type cd
cd is a shell builtin
```

### 쉘 함수

### 별칭
별칭을 사용하면 명령어로 본인의 명령어를 새롭게 정의할 수 있다.
```
# type ls
ls is aliased to `ls --color=auto'
```

# 명령어 정리

## alias
`alias`명령어를 사용하면 우리만의 명령어를 만들 수 있다.

우선 `type`명령어로 alias가 존재하는지 확인한다.
```
# type lsbin
bash: type: lsbin: not found
```
이제 다음과 같은 형태로 alias를 생성할 수 있다.
```
// alias name='string'
# alias lsbin='cd /bin; ls;'
```
다음과 같이 모든 alias를 확인할 수 있다.
```
# alias
...
alias lsbin='cd /bin; ls;'
```
`unalias`명령어로 alias를 삭제할 수 있다.
```
# unalias lsbin
```

## cal
달력과 현재 날짜를 표시한다.
```
# cal
```
``` text 출력 결과
    January 2022      
Su Mo Tu We Th Fr Sa  
                   1  
 2  3  4  5  6  7  8  
 9 10 11 12 13 14 15  
16 17 18 19 20 21 22  
23 24 25 26 27 28 29  
30 31 
```

## cp
파일이나 디렉토리를 복사할 때 사용한다.

file1을 file2에 복사한다.
```
// cp <file1> <file2>
# cp a.txt b.txt
```
file을 directory에 복사한다.
```
// cp <file> <directory>
# cp a.txt /home/yologger/mydir
```
디렉토리의 모든 파일을 다른 디렉토리에 복사한다.
```
# cp dir1/* dir2
```

## date
현재 시간과 날짜를 표시한다.
```
# date
```
``` text 출력 결과
Wed Jan  5 08:48:22 KST 2022
```

## df
현재 사용 중인 디스크 정보와 사용 가능한 디스크의 용량을 표시한다.
```
# df
```
``` text 출력 결과
Filesystem     1K-blocks    Used Available Use% Mounted on
overlay         61255492 2587752  55526416   5% /
tmpfs              65536       0     65536   0% /dev
shm                65536       0     65536   0% /dev/shm
/dev/vda1       61255492 2587752  55526416   5% /etc/hosts
tmpfs            1016696       0   1016696   0% /proc/acpi
tmpfs            1016696       0   1016696   0% /sys/firmware
```

## diff
두 파일을 비교할 수 있다.
```
$ cat text1
Hello world!
```
```
$ cat text2
Hello Linux!
```
```
$ diff text1 text2
1c1
< Hello world!
---
> Hello Linux!
```


## echo
텍스트를 화면에 출력한다.
```
$ echo "Hello World"
Hello World
```

## file
파일의 타입을 확인할 수 있다.
```
$ file a.txt
a.txt: ASCII text
```
## find
파일을 탐색할 수 있다. 보통 다음과 같은 형식으로 사용한다.
```
$ find [경로] -name ["파일명"]
```
현재 디렉토리와 하위 디렉토리에서 `txt`로 끝나는 파일을 탐색한다.
```
$ find . -name "*.txt"
```
사용자의 홈 디렉토리와 하위 디렉토리에서 `txt`로 끝나는 파일을 탐색한다.
```
$ find ~ -name "*.txt"
```

## free
메모리 사용 현황을 확인할 수 있다.
```
# free
```
``` text 출력 결과
             total       used       free     shared    buffers     cached
Mem:       2033396    1369668     663728     331176      83108     926972
-/+ buffers/cache:     359588    1673808
Swap:      1048572      19064    1029508
```

## head
파일의 앞 부분을 출력한다.
``` bash
// 앞의 다섯 줄을 출력한다.
head -n 5 a.txt
```

## help
명령어의 도움말 기능이다. 설명 및 사용법을 확인할 수 있다.
```
// help <command>
# help cd
```

## less
텍스트 파일의 내용을 확인할 수 있다.
```
$ less a.txt
```

## mkdir
디렉토리를 생성할 수 있다.
```
$ mkdir mydir
```

## more
파일 내용이 너무 길면 스크롤로 확인해야하는 불편함이 있다. `more`는 파일 내용을 한 페이지씩 보여준다.
```
$ more long.txt
```

## mv
파일 또는 디렉토리를 이동하거나 이름을 변경할 때 사용한다.

파일 이름을 변경한다.
```
// mv <old_file> <new_file>
# mv a.txt c.txt
```
파일을 디렉토리로 이동한다.
```
// mv <file> <directory>
# mv a.txt /home/yologger/mydir
```

현재 디렉토리의 모든 파일을 다른 디렉토리로 이동한다. 단 타겟 디렉토리가 생성되어있어야 한다.
```
# mv * /home/yologger/mydir 
```

## ping
목적지로 패킷을 전송한다. 목적지와의 네트워크 연결을 확인하는데 사용할 수 있다. 
```
$ ping www.google.com
PING www.google.com (142.250.196.132) 56(84) bytes of data.
64 bytes from nrt12s36-in-f4.1e100.net (142.250.196.132): icmp_seq=1 ttl=37 time=32.4 ms
64 bytes from nrt12s36-in-f4.1e100.net (142.250.196.132): icmp_seq=2 ttl=37 time=34.0 ms
64 bytes from nrt12s36-in-f4.1e100.net (142.250.196.132): icmp_seq=3 ttl=37 time=34.6 ms
64 bytes from nrt12s36-in-f4.1e100.net (142.250.196.132): icmp_seq=4 ttl=37 time=33.2 ms
```

## ps
프로세스 정보를 확인할 수 있다.
```
$ ps
  PID TTY          TIME CMD
    1 pts/0    00:00:00 bash
   19 pts/0    00:00:00 ps
```

보통 `aux`옵션을 함께 사용한다.
```
$ ps aux
```

## tar
파일을 압축할 수 있다. `-cvf`옵션을 사용하면 된다.
```
$ ls
text1.txt     text2.txt

$ tar -cvf text.tar text1.txt txt2.txt

$ text.tar     text1.txt     text2.txt
```
`xvf`옵션으로 압축을 풀 수 있다.
```
$ tar -xvf text.tar
```

## top
프로세스 등 시스템 상태를 동적으로 확인할 수 있다.
```
$ top
Tasks:   2 total,   1 running,   1 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.3 us,  0.9 sy,  0.0 ni, 98.6 id,  0.2 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem:   2033396 total,   832256 used,  1201140 free,     8040 buffers
KiB Swap:  1048572 total,        0 used,  1048572 free.   589484 cached Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND                                      
    1 root      20   0   18212   3208   2708 S   0.0  0.2   0:00.04 bash                                         
   21 root      20   0   19904   2260   1948 R   0.0  0.1   0:00.00 top  
```
[ps](#ps)가 명령어 실행 순간의 스냅샷을 보여준다면 `top`는 동적으로 시스템 활동을 보여준다.

## rmdir
디렉토리를 삭제한다.
```
$ rmdir mydir
```

## tail
파일의 뒷 부분을 출력한다.
```
// 파일의 뒷 부분 다섯 줄을 출력한다.
$ tail -n 5 a.txt
```
`-f`옵션을 추가하면 실시간으로 파일을 확인할 수 있다. 로그 파일의 최근 내용을 확인하는데 유용하다.
``` shell
$ tail -f /var/log/messages
```

## which
실행 파일의 설치 위치를 확인할 수 있다.
```
# which pwd
/bin/pwd
```