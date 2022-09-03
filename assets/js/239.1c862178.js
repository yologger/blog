(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{1718:function(a,t,e){"use strict";e.r(t);var s=e(34),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[a._v("#")]),a._v(" Table of Contents")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#리눅스-배포판"}},[a._v("리눅스 배포판")])]),e("li",[e("a",{attrs:{href:"#데비안-계열-패키지-관리"}},[a._v("데비안 계열 패키지 관리")]),e("ul",[e("li",[e("a",{attrs:{href:"#apt-search"}},[a._v("apt search")])]),e("li",[e("a",{attrs:{href:"#apt-list"}},[a._v("apt list")])]),e("li",[e("a",{attrs:{href:"#apt-update"}},[a._v("apt update")])]),e("li",[e("a",{attrs:{href:"#apt-install"}},[a._v("apt install")])]),e("li",[e("a",{attrs:{href:"#apt-show"}},[a._v("apt show")])]),e("li",[e("a",{attrs:{href:"#apt-remove"}},[a._v("apt remove")])])])]),e("li",[e("a",{attrs:{href:"#레드햇-개열-패키지-관리"}},[a._v("레드햇 개열 패키지 관리")]),e("ul",[e("li",[e("a",{attrs:{href:"#yum-update"}},[a._v("yum update")])]),e("li",[e("a",{attrs:{href:"#yum-list"}},[a._v("yum list")])]),e("li",[e("a",{attrs:{href:"#yum-search"}},[a._v("yum search")])]),e("li",[e("a",{attrs:{href:"#yum-install"}},[a._v("yum install")])]),e("li",[e("a",{attrs:{href:"#yum-info"}},[a._v("yum info")])]),e("li",[e("a",{attrs:{href:"#yum-erase"}},[a._v("yum erase")])])])]),e("li",[e("a",{attrs:{href:"#apline-linux"}},[a._v("Apline Linux")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"리눅스-배포판"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#리눅스-배포판"}},[a._v("#")]),a._v(" 리눅스 배포판")]),a._v(" "),e("p",[a._v("리눅스 배포판은 크게 두 가지 계열로 나뉜다.")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("데비안(Debian)")]),a._v(": Debian, Ubuntu 등")]),a._v(" "),e("li",[e("code",[a._v("레드햇(Red Hat)")]),a._v(": Red Hat, CentOS, Fedora, Amazon Linux 등")]),a._v(" "),e("li",[a._v("기타: Alpine Linux")])]),a._v(" "),e("p",[a._v("두 계열은 다양한 차이점이 있다. 그 중에서도 가장 중요한 부분 중 하나는 두 배포판이 다른 "),e("code",[a._v("패키지 매니저")]),a._v("를 사용한다는 것이다.")]),a._v(" "),e("h2",{attrs:{id:"데비안-계열-패키지-관리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#데비안-계열-패키지-관리"}},[a._v("#")]),a._v(" 데비안 계열 패키지 관리")]),a._v(" "),e("p",[a._v("데비안 계열에서는 "),e("code",[a._v("dpkg")]),a._v(" 또는 "),e("code",[a._v("apt")]),a._v(", "),e("code",[a._v("apt-get")]),a._v(" 패키지 매니저를 사용하여 사용하여 패키지를 관리한다.")]),a._v(" "),e("p",[e("code",[a._v("dpkg")]),a._v("는 저수준의 패키지 매니저다. 설치한 패키지가 다른 패키지에 의존한다면 그 패키지도 직접 설치해야한다. 반면 "),e("code",[a._v("apt")]),a._v(", "),e("code",[a._v("apt-get")]),a._v("은 고수준의 패키지 매니저로 설치한 패키지가 의존하는 다른 패키지도 함께 설치해준다.")]),a._v(" "),e("p",[e("code",[a._v("ubuntu 14.04")]),a._v(" 환경에서 "),e("code",[a._v("apt")]),a._v("로 "),e("code",[a._v("nodejs")]),a._v("를 관리해보자.")]),a._v(" "),e("h3",{attrs:{id:"apt-search"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apt-search"}},[a._v("#")]),a._v(" apt search")]),a._v(" "),e("p",[a._v("패키지를 검색할 수 있다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// apt search <package_name>\n# apt search nodejs\n")])])]),e("h3",{attrs:{id:"apt-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apt-list"}},[a._v("#")]),a._v(" apt list")]),a._v(" "),e("p",[a._v("설치 가능한 패키지 목록을 확인할 수 있다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# apt list | grep nodejs\n")])])]),e("p",[e("code",[a._v("--installed")]),a._v("옵션을 추가하면 설치된 패키지 목록을 확인할 수 있다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# apt list --installed\nbash/trusty-updates,trusty-security,now 4.3-7ubuntu1.7 amd64 [installed]\ngrep/trusty,now 2.16-1 amd64 [installed]\nvim/trusty-updates,trusty-security,now 2:7.4.052-1ubuntu3.1 amd64 [installed]\n...\n")])])]),e("h3",{attrs:{id:"apt-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apt-update"}},[a._v("#")]),a._v(" apt update")]),a._v(" "),e("p",[a._v("설치 가능한 패키지 목록을 최신으로 업데이트한다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# apt upgrade\n")])])]),e("h3",{attrs:{id:"apt-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apt-install"}},[a._v("#")]),a._v(" apt install")]),a._v(" "),e("p",[a._v("패키지를 설치할 수 있다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// apt install <package_name>\n# apt install nodejs\n")])])]),e("h3",{attrs:{id:"apt-show"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apt-show"}},[a._v("#")]),a._v(" apt show")]),a._v(" "),e("p",[a._v("설치한 패키지의 정보를 확인할 수 있다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# apt show nodejs\nPackage: nodejs\nVersion: 0.10.25~dfsg2-2ubuntu1.2\nPriority: extra\nSection: universe/web\nOrigin: Ubuntu\nMaintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>\nOriginal-Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>\nBugs: https://bugs.launchpad.net/ubuntu/+filebug\nInstalled-Size: 3120 kB\nDepends: libc-ares2 (>= 1.8.0), libc6 (>= 2.14), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.1.1), libv8-3.14.5, zlib1g (>= 1:1.1.4)\nDownload-Size: 686 kB\nHomepage: http://nodejs.org/\nAPT-Manual-Installed: yes\nAPT-Sources: http://archive.ubuntu.com/ubuntu/ trusty-updates/universe amd64 Packages\nDescription: evented I/O for V8 javascript\n")])])]),e("h3",{attrs:{id:"apt-remove"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apt-remove"}},[a._v("#")]),a._v(" apt remove")]),a._v(" "),e("p",[a._v("패키지를 삭제할 수 있다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# apt remove nodejs\n")])])]),e("h2",{attrs:{id:"레드햇-개열-패키지-관리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#레드햇-개열-패키지-관리"}},[a._v("#")]),a._v(" 레드햇 개열 패키지 관리")]),a._v(" "),e("p",[a._v("레드햇 계열에서는 "),e("code",[a._v("rpm")]),a._v(" 또는 "),e("code",[a._v("yum")]),a._v("이라는 패키지 매니저를 사용하여 사용하여 패키지를 관리한다.")]),a._v(" "),e("p",[e("code",[a._v("rpm")]),a._v("는 저수준의 패키지 매니저다. 설치한 패키지가 다른 패키지에 의존한다면 그 패키지도 직접 설치해야한다. 반면 "),e("code",[a._v("yum")]),a._v("은 고수준의 패키지 매니저로 설치한 패키지가 의존하는 다른 패키지도 함께 설치해준다.")]),a._v(" "),e("p",[e("code",[a._v("centos 7")]),a._v(" 환경에서 "),e("code",[a._v("yum")]),a._v("으로 "),e("code",[a._v("Java 8")]),a._v("을 설치해보자.")]),a._v(" "),e("h3",{attrs:{id:"yum-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum-update"}},[a._v("#")]),a._v(" yum update")]),a._v(" "),e("p",[a._v("설치 가능한 패키지 목록을 최신으로 업데이트한다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# yum update\n")])])]),e("h3",{attrs:{id:"yum-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum-list"}},[a._v("#")]),a._v(" yum list")]),a._v(" "),e("p",[a._v("설치 가능한 패키지 목록을 확인할 수 있다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# yum list java*jdk-devel\nAvailable Packages\njava-1.6.0-openjdk-devel.x86_64     1:1.6.0.41-1.13.13.1.el7_3      base   \njava-1.7.0-openjdk-devel.x86_64     1:1.7.0.261-2.6.22.2.el7_8      base   \njava-1.8.0-openjdk-devel.i686       1:1.8.0.312.b07-1.el7_9         updates\njava-1.8.0-openjdk-devel.x86_64     1:1.8.0.312.b07-1.el7_9         updates\njava-11-openjdk-devel.i686          1:11.0.13.0.8-1.el7_9           updates\njava-11-openjdk-devel.x86_64        1:11.0.13.0.8-1.el7_9           updates\n...\n")])])]),e("p",[e("code",[a._v("yum list installed")]),a._v("로 설치된 패키지들을 확인할 수 있다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# yum list installed\n")])])]),e("h3",{attrs:{id:"yum-search"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum-search"}},[a._v("#")]),a._v(" yum search")]),a._v(" "),e("p",[a._v("설치 가능한 패키지를 탐색할 수도 있다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# yum search openjdk\n")])])]),e("h3",{attrs:{id:"yum-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum-install"}},[a._v("#")]),a._v(" yum install")]),a._v(" "),e("p",[a._v("패키지를 설치한다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# yum install java-1.8.0-openjdk-devel.x86_64\n")])])]),e("h3",{attrs:{id:"yum-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum-info"}},[a._v("#")]),a._v(" yum info")]),a._v(" "),e("p",[a._v("설치한 패키지의 정보를 확인할 수 있다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# yum info java-1.8.0-openjdk-devel.x86_64\nLoaded plugins: fastestmirror, ovl\nLoading mirror speeds from cached hostfile\n * base: mirror.navercorp.com\n * extras: mirror.navercorp.com\n * updates: mirror.navercorp.com\nInstalled Packages\nName        : java-1.8.0-openjdk-devel\nArch        : x86_64\nEpoch       : 1\nVersion     : 1.8.0.312.b07\nRelease     : 1.el7_9\nSize        : 40 M\nRepo        : installed\nFrom repo   : updates\nSummary     : OpenJDK 8 Development Environment\nURL         : http://openjdk.java.net/\nLicense     : ASL 1.1 and ASL 2.0 and BSD and BSD with advertising and GPL+ and GPLv2 and GPLv2 with\n            : exceptions and IJG and LGPLv2+ and MIT and MPLv2.0 and Public Domain and W3C and zlib\nDescription : The OpenJDK 8 development tools.\n")])])]),e("h3",{attrs:{id:"yum-erase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum-erase"}},[a._v("#")]),a._v(" yum erase")]),a._v(" "),e("p",[a._v("패키지를 삭제할 수 있다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# yum erase java-1.8.0-openjdk-devel.x86_64\n")])])]),e("h2",{attrs:{id:"apline-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apline-linux"}},[a._v("#")]),a._v(" Apline Linux")]),a._v(" "),e("ul",[e("li",[a._v("리눅스 배포판 가운데 하나")]),a._v(" "),e("li",[a._v("용량이 작고, 보안이 뛰어나며, 간단하기 때문에 "),e("code",[a._v("Docker 컨테이너")]),a._v("에 많이 사용된다.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);