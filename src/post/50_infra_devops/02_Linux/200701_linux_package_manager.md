---
title: "리눅스 배포판, 패키지 매니저"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## 리눅스 배포판
리눅스 배포판은 크게 두 가지 계열로 나뉜다.
- `데비안(Debian)`: Debian, Ubuntu 등
- `레드햇(Red Hat)`: Red Hat, CentOS, Fedora, Amazon Linux 등
- 기타: Alpine Linux

두 계열은 다양한 차이점이 있다. 그 중에서도 가장 중요한 부분 중 하나는 두 배포판이 다른 `패키지 매니저`를 사용한다는 것이다.

## 데비안 계열 패키지 관리
데비안 계열에서는 `dpkg` 또는 `apt`, `apt-get` 패키지 매니저를 사용하여 사용하여 패키지를 관리한다.

`dpkg`는 저수준의 패키지 매니저다. 설치한 패키지가 다른 패키지에 의존한다면 그 패키지도 직접 설치해야한다. 반면 `apt`, `apt-get`은 고수준의 패키지 매니저로 설치한 패키지가 의존하는 다른 패키지도 함께 설치해준다.

`ubuntu 14.04` 환경에서 `apt`로 `nodejs`를 관리해보자.

### apt search
패키지를 검색할 수 있다.
```
// apt search <package_name>
# apt search nodejs
```

### apt list
설치 가능한 패키지 목록을 확인할 수 있다.
```
# apt list | grep nodejs
```

`--installed`옵션을 추가하면 설치된 패키지 목록을 확인할 수 있다.
```
# apt list --installed
bash/trusty-updates,trusty-security,now 4.3-7ubuntu1.7 amd64 [installed]
grep/trusty,now 2.16-1 amd64 [installed]
vim/trusty-updates,trusty-security,now 2:7.4.052-1ubuntu3.1 amd64 [installed]
...
```
### apt update
설치 가능한 패키지 목록을 최신으로 업데이트한다.
```
# apt upgrade
```
### apt install
패키지를 설치할 수 있다.
```
// apt install <package_name>
# apt install nodejs
```

### apt show
설치한 패키지의 정보를 확인할 수 있다.
```
# apt show nodejs
Package: nodejs
Version: 0.10.25~dfsg2-2ubuntu1.2
Priority: extra
Section: universe/web
Origin: Ubuntu
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Original-Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Bugs: https://bugs.launchpad.net/ubuntu/+filebug
Installed-Size: 3120 kB
Depends: libc-ares2 (>= 1.8.0), libc6 (>= 2.14), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.1.1), libv8-3.14.5, zlib1g (>= 1:1.1.4)
Download-Size: 686 kB
Homepage: http://nodejs.org/
APT-Manual-Installed: yes
APT-Sources: http://archive.ubuntu.com/ubuntu/ trusty-updates/universe amd64 Packages
Description: evented I/O for V8 javascript
```
### apt remove
패키지를 삭제할 수 있다.
``` 
# apt remove nodejs
```

## 레드햇 개열 패키지 관리
레드햇 계열에서는 `rpm` 또는 `yum`이라는 패키지 매니저를 사용하여 사용하여 패키지를 관리한다.

`rpm`는 저수준의 패키지 매니저다. 설치한 패키지가 다른 패키지에 의존한다면 그 패키지도 직접 설치해야한다. 반면 `yum`은 고수준의 패키지 매니저로 설치한 패키지가 의존하는 다른 패키지도 함께 설치해준다.

`centos 7` 환경에서 `yum`으로 `Java 8`을 설치해보자.

### yum update
설치 가능한 패키지 목록을 최신으로 업데이트한다.
```
# yum update
```
### yum list
설치 가능한 패키지 목록을 확인할 수 있다.
```
# yum list java*jdk-devel
Available Packages
java-1.6.0-openjdk-devel.x86_64     1:1.6.0.41-1.13.13.1.el7_3      base   
java-1.7.0-openjdk-devel.x86_64     1:1.7.0.261-2.6.22.2.el7_8      base   
java-1.8.0-openjdk-devel.i686       1:1.8.0.312.b07-1.el7_9         updates
java-1.8.0-openjdk-devel.x86_64     1:1.8.0.312.b07-1.el7_9         updates
java-11-openjdk-devel.i686          1:11.0.13.0.8-1.el7_9           updates
java-11-openjdk-devel.x86_64        1:11.0.13.0.8-1.el7_9           updates
...
```
`yum list installed`로 설치된 패키지들을 확인할 수 있다.
```
# yum list installed
```
### yum search
설치 가능한 패키지를 탐색할 수도 있다.
```
# yum search openjdk
```
### yum install
패키지를 설치한다.
```
# yum install java-1.8.0-openjdk-devel.x86_64
```
### yum info
설치한 패키지의 정보를 확인할 수 있다.
```
# yum info java-1.8.0-openjdk-devel.x86_64
Loaded plugins: fastestmirror, ovl
Loading mirror speeds from cached hostfile
 * base: mirror.navercorp.com
 * extras: mirror.navercorp.com
 * updates: mirror.navercorp.com
Installed Packages
Name        : java-1.8.0-openjdk-devel
Arch        : x86_64
Epoch       : 1
Version     : 1.8.0.312.b07
Release     : 1.el7_9
Size        : 40 M
Repo        : installed
From repo   : updates
Summary     : OpenJDK 8 Development Environment
URL         : http://openjdk.java.net/
License     : ASL 1.1 and ASL 2.0 and BSD and BSD with advertising and GPL+ and GPLv2 and GPLv2 with
            : exceptions and IJG and LGPLv2+ and MIT and MPLv2.0 and Public Domain and W3C and zlib
Description : The OpenJDK 8 development tools.
```
### yum erase
패키지를 삭제할 수 있다.
```
# yum erase java-1.8.0-openjdk-devel.x86_64
```

## Apline Linux
- 리눅스 배포판 가운데 하나
- 용량이 작고, 보안이 뛰어나며, 간단하기 때문에 `Docker 컨테이너`에 많이 사용된다.