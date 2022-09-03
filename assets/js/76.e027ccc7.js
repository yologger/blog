(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1387:function(t,e,s){t.exports=s.p+"assets/img/1.0c104602.png"},1388:function(t,e,s){t.exports=s.p+"assets/img/2.817c5cdf.png"},1389:function(t,e,s){t.exports=s.p+"assets/img/3.22903ab8.png"},1390:function(t,e,s){t.exports=s.p+"assets/img/4.877339a7.png"},1391:function(t,e,s){t.exports=s.p+"assets/img/5.c74bb77f.png"},1728:function(t,e,s){"use strict";s.r(e);var a=s(34),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#kubernetes"}},[t._v("Kubernetes")])]),a("li",[a("a",{attrs:{href:"#master-node-worker-node"}},[t._v("Master node, Worker node")])]),a("li",[a("a",{attrs:{href:"#다양한-kubernetes-환경"}},[t._v("다양한 Kubernetes 환경")]),a("ul",[a("li",[a("a",{attrs:{href:"#개발-환경"}},[t._v("개발 환경")])]),a("li",[a("a",{attrs:{href:"#운영-환경-온프레미스"}},[t._v("운영 환경 - 온프레미스")])]),a("li",[a("a",{attrs:{href:"#운영-환경-클라우드-컴퓨팅-서비스에-쿠버네티스-클러스터-구성"}},[t._v("운영 환경 - 클라우드 컴퓨팅 서비스에 쿠버네티스 클러스터 구성")])]),a("li",[a("a",{attrs:{href:"#운영-환경-관리형-쿠버네티스"}},[t._v("운영 환경 - 관리형 쿠버네티스")])])])]),a("li",[a("a",{attrs:{href:"#mac-os에서-쿠버네티스-시작하기"}},[t._v("Mac OS에서 쿠버네티스 시작하기")])]),a("li",[a("a",{attrs:{href:"#aws-ec2에서-쿠버네티스-클러스터-구축해보기"}},[t._v("AWS EC2에서 쿠버네티스 클러스터 구축해보기")]),a("ul",[a("li",[a("a",{attrs:{href:"#보안-그룹-설정"}},[t._v("보안 그룹 설정")]),a("ul",[a("li",[a("a",{attrs:{href:"#master-node"}},[t._v("Master node")])]),a("li",[a("a",{attrs:{href:"#worker-node"}},[t._v("Worker node")])])])]),a("li",[a("a",{attrs:{href:"#호스트-이름-변경"}},[t._v("호스트 이름 변경")])]),a("li",[a("a",{attrs:{href:"#패키지-업그레이드"}},[t._v("패키지 업그레이드")])]),a("li",[a("a",{attrs:{href:"#메모리-스왑-비활성화"}},[t._v("메모리 스왑 비활성화")])]),a("li",[a("a",{attrs:{href:"#ntp-설정"}},[t._v("NTP 설정")])]),a("li",[a("a",{attrs:{href:"#도커-설치"}},[t._v("도커 설치")])]),a("li",[a("a",{attrs:{href:"#쿠버네티스-설치"}},[t._v("쿠버네티스 설치")])]),a("li",[a("a",{attrs:{href:"#마스터-노드에서-클러스터-초기화하기"}},[t._v("마스터 노드에서 클러스터 초기화하기")])]),a("li",[a("a",{attrs:{href:"#워커-노드-추가하기"}},[t._v("워커 노드 추가하기")])]),a("li",[a("a",{attrs:{href:"#오버레이-네트워크-설치"}},[t._v("오버레이 네트워크 설치")])]),a("li",[a("a",{attrs:{href:"#노드-삭제하기"}},[t._v("노드 삭제하기")])]),a("li",[a("a",{attrs:{href:"#클러스터에-오브젝트-추가해보기"}},[t._v("클러스터에 오브젝트 추가해보기")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[t._v("#")]),t._v(" Kubernetes")]),t._v(" "),a("p",[a("code",[t._v("Kubernetes")]),t._v("는 "),a("u",[t._v("컨테이너 오케스트레이션")]),t._v(" 시스템으로 다음과 같은 기능을 제공한다.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("클러스터링")]),t._v(" "),a("ul",[a("li",[t._v("쿠버네티스는 여러 실제 서버를 논리적으로 하나의 서버로 클러스터링해준다.")]),t._v(" "),a("li",[t._v("각 서버는 직접 구축한 온프레미스 서버일 수도 있고, AWS EC2처럼 클라우드 서버일 수도 있다.")])])]),t._v(" "),a("li",[a("code",[t._v("오토 스케일링")]),t._v(" "),a("ul",[a("li",[t._v("쿠버네티스는 노드나 컨테이너를 쉽게 수평적 확장할 수 있다.")])])]),t._v(" "),a("li",[a("code",[t._v("셀프 힐링")]),t._v(" "),a("ul",[a("li",[t._v("쿠버네티스는 특정 노드나 컨테이너가 다운되어도 자동으로 복구해준다.")])])]),t._v(" "),a("li",[a("code",[t._v("로드 밸런싱")]),t._v(" "),a("ul",[a("li",[t._v("쿠버네티스는 노드나 컨테이너에 트래픽을 골고루 분배해준다.")])])]),t._v(" "),a("li",[a("code",[t._v("롤링 업데이트")]),t._v(" "),a("ul",[a("li",[t._v("쿠버네티스는 무중단 배포를 지원한다.")])])]),t._v(" "),a("li",[a("code",[t._v("롤백")]),t._v(" "),a("ul",[a("li",[t._v("쿠버네티스는 이전 버전으로 쉽게 돌아가는 롤백 기능을 제공한다.")])])]),t._v(" "),a("li",[t._v("그 밖에도 "),a("code",[t._v("네트워킹")]),t._v(", "),a("code",[t._v("보안")]),t._v(", "),a("code",[t._v("스토리지")]),t._v(" 등의 다양한 기능을 제공한다.")])]),t._v(" "),a("h2",{attrs:{id:"master-node-worker-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-node-worker-node"}},[t._v("#")]),t._v(" Master node, Worker node")]),t._v(" "),a("p",[t._v("쿠버네티스는 여러 서버를 "),a("code",[t._v("클러스터(Cluster)")]),t._v("로 만들어준다. 쿠버네티스에서는 각 서버를 "),a("code",[t._v("노드(Node)")]),t._v("라고 한다.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1387),alt:""}})]),t._v(" "),a("p",[a("code",[t._v("마스터 노드(Master node)")]),t._v("는 클러스터와 워커 노드를 관리하며, "),a("code",[t._v("워커 노드(Worker node)")]),t._v("에는 컨테이너가 생성된다. (마스터 노드에도 컨테이너가 생성될 수 있다.)")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1388),alt:""}})]),t._v(" "),a("p",[t._v("보통 다음과 같은 순서로 쿠버네티스 클러스터를 구축한다.")]),t._v(" "),a("ol",[a("li",[t._v("실제 서버든 클라우드 서비스의 서버든 상관없이 노드 역할을 할 서버를 세 개 이상 준비한다.")]),t._v(" "),a("li",[t._v("모든 서버에 쿠버네티스를 설치한다.")]),t._v(" "),a("li",[t._v("마스터 노드 역할을 할 서버를 선택한다.")]),t._v(" "),a("li",[t._v("사용자는 "),a("code",[t._v("kubectl")]),t._v("로 마스터 노드에 접속하여 워커 노드를 등록한다.")]),t._v(" "),a("li",[t._v("사용자는 워커 노드에 접속하여 마스터 노드에 대한 정보를 등록하여 클러스터 구축을 마무리한다.")]),t._v(" "),a("li",[t._v("모든 노드에 설치된 "),a("code",[t._v("kubelet")]),t._v("이 유기적으로 통신하며 하나의 서버처럼 동작한다.")]),t._v(" "),a("li",[t._v("사용자는 마스터 노드에 접속하여 클러스터를 관리, 운영한다.")])]),t._v(" "),a("h2",{attrs:{id:"다양한-kubernetes-환경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다양한-kubernetes-환경"}},[t._v("#")]),t._v(" 다양한 Kubernetes 환경")]),t._v(" "),a("h3",{attrs:{id:"개발-환경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개발-환경"}},[t._v("#")]),t._v(" 개발 환경")]),t._v(" "),a("p",[t._v("개발 환경에서는 하나의 노드로 구성된 쿠버네티스를 구축할 수 있다. 리눅스 환경에서는 "),a("code",[t._v("Minikube")]),t._v(", Mac OS 환경에서는 "),a("code",[t._v("Docker Destkop for Mac")]),t._v(", Window 환경에서는 "),a("code",[t._v("Docker Desktop for Window")]),t._v("를 설치하면 된다.")]),t._v(" "),a("h3",{attrs:{id:"운영-환경-온프레미스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#운영-환경-온프레미스"}},[t._v("#")]),t._v(" 운영 환경 - 온프레미스")]),t._v(" "),a("p",[a("code",[t._v("온프레미스")]),t._v("는 AWS 같은 클라우드 서비스를 이용하지 않고 자체적인 서버실을 구축하여 운영하는 방식을 말한다. 온프레미스 환경에서는 "),a("code",[t._v("kubeadm")]),t._v(", "),a("code",[t._v("kops")]),t._v(", "),a("code",[t._v("kubespray")]),t._v(" 등을 사용하여 쿠버네티스 클러스터를 구축할 수 있다.")]),t._v(" "),a("h3",{attrs:{id:"운영-환경-클라우드-컴퓨팅-서비스에-쿠버네티스-클러스터-구성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#운영-환경-클라우드-컴퓨팅-서비스에-쿠버네티스-클러스터-구성"}},[t._v("#")]),t._v(" 운영 환경 - 클라우드 컴퓨팅 서비스에 쿠버네티스 클러스터 구성")]),t._v(" "),a("p",[t._v("AWS EC2와 같은 클라우드 컴퓨팅 서비스에 쿠버네티스 클러스터를 구축할 수도 있다. 보통 "),a("code",[t._v("kubeadm")]),t._v(", "),a("code",[t._v("kops")]),t._v(", "),a("code",[t._v("kubespray")]),t._v(" 등을 사용하여 쿠버네티스 클러스터를 구축할 수 있다.")]),t._v(" "),a("h3",{attrs:{id:"운영-환경-관리형-쿠버네티스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#운영-환경-관리형-쿠버네티스"}},[t._v("#")]),t._v(" 운영 환경 - 관리형 쿠버네티스")]),t._v(" "),a("p",[t._v("온프레미스 환경이든 AWS EC2 클라우드 컴퓨팅 서비스를 사용하든 마스터 노드에서 클러스터 구성을 위한 복잡한 환경설정을 해야한다. "),a("code",[t._v("AWS EKS(Elastic Kubernetes Service)")]),t._v(", "),a("code",[t._v("GCP GKE(Google Kubernetes Engine)")]),t._v(" 같은 서비스는 마스터 노드 역할을 하는 클라우드 컴퓨팅 서비스를 제공하며, 이를 "),a("code",[t._v("관리형 쿠버네티스(Managed Kubernetes)")]),t._v("라고 한다.")]),t._v(" "),a("h2",{attrs:{id:"mac-os에서-쿠버네티스-시작하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-os에서-쿠버네티스-시작하기"}},[t._v("#")]),t._v(" Mac OS에서 쿠버네티스 시작하기")]),t._v(" "),a("p",[a("code",[t._v("Docker Desktop for Mac")]),t._v("에는 쿠버네티스가 내장되어있다. "),a("code",[t._v("Docker Desktop for Mac")]),t._v("을 실행하여 다음과 같은 순서로 쿠버네티스를 활성화하면 된다.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1389),alt:""}})]),t._v(" "),a("p",[a("code",[t._v("kubectl version")]),t._v(" 명령어로 쿠버네티스 버전을 확인해보자.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ kubectl version  \nClient Version: version.Info{Major:"1", Minor:"22", GitVersion:"v1.22.4", GitCommit:"b695d79d4f967c403a96986f1750a35eb75e75f1", GitTreeState:"clean", BuildDate:"2021-11-17T15:48:33Z", GoVersion:"go1.16.10", Compiler:"gc", Platform:"darwin/amd64"}\nServer Version: version.Info{Major:"1", Minor:"22", GitVersion:"v1.22.4", GitCommit:"b695d79d4f967c403a96986f1750a35eb75e75f1", GitTreeState:"clean", BuildDate:"2021-11-17T15:42:41Z", GoVersion:"go1.16.10", Compiler:"gc", Platform:"linux/amd64"}\n')])])]),a("p",[a("code",[t._v("kubectl get nodes")]),t._v("명령어로 클러스터에 포함된 노드들을 확인할 수 있다. 현재 하나의 노드를 확인할 수 있다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl get nodes\nNAME             STATUS   ROLES                  AGE   VERSION\ndocker-desktop   Ready    control-plane,master   66m   v1.22.4\n")])])]),a("h2",{attrs:{id:"aws-ec2에서-쿠버네티스-클러스터-구축해보기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-ec2에서-쿠버네티스-클러스터-구축해보기"}},[t._v("#")]),t._v(" AWS EC2에서 쿠버네티스 클러스터 구축해보기")]),t._v(" "),a("p",[t._v("쿠버네티스 클러스터를 구성하기 위한 조건은 다음과 같다.")]),t._v(" "),a("ul",[a("li",[t._v("서버가 2개의 CPU core, 2GB RAM 이상이어야 한다.")]),t._v(" "),a("li",[t._v("메모르 스왑을 비활성화해야한다.")]),t._v(" "),a("li",[t._v("모든 서버의 시간이 NTP를 통해 동기화되어야한다.")])]),t._v(" "),a("p",[t._v("두 개의 AWS EC2 인스턴스로 쿠버네티스 클러스터를 구축해보자. AWS EC2 스펙은 다음과 같다.")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu Server 20.04 LTS (HVM), SSD Volume Type")]),t._v(" "),a("li",[t._v("t3a.small (2 CPU core, 2GB RAM)")])]),t._v(" "),a("h3",{attrs:{id:"보안-그룹-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보안-그룹-설정"}},[t._v("#")]),t._v(" 보안 그룹 설정")]),t._v(" "),a("p",[t._v("쿠버네티스 노드 간 통신을 위해 다음과 같은 포트를 개방해야한다.")]),t._v(" "),a("h4",{attrs:{id:"master-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-node"}},[t._v("#")]),t._v(" Master node")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("kubelet")]),t._v(": 10250")]),t._v(" "),a("li",[a("code",[t._v("kube-apiserver")]),t._v(": 6443")]),t._v(" "),a("li",[a("code",[t._v("etcd")]),t._v(": 2379, 2380")])]),t._v(" "),a("h4",{attrs:{id:"worker-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#worker-node"}},[t._v("#")]),t._v(" Worker node")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("kubelet")]),t._v(": 10250")])]),t._v(" "),a("h3",{attrs:{id:"호스트-이름-변경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#호스트-이름-변경"}},[t._v("#")]),t._v(" 호스트 이름 변경")]),t._v(" "),a("p",[a("code",[t._v("Hostname")]),t._v("에는 영문 소문자(a-z), 숫자(0-9), 그리고 하이폰(-)만 사용해야 한다.\n우선 "),a("code",[t._v("sudo hostnamectl set-hostname <HOSTNAME>")]),t._v(" 명령어로 호스트 이름을 변경한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo hostnamectl set-hostname cluster-master1\n")])])]),a("p",[a("code",[t._v("hostnamectl")]),t._v(" 명령어로 반영되었는지 확인한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ hostnamectl\n   Static hostname: cluster-master1\n         Icon name: computer-vm\n           Chassis: vm\n        Machine ID: ec ... 766e7\n           Boot ID: 33 ... e0732\n    Virtualization: kvm\n  Operating System: Ubuntu 18.04.6 LTS\n            Kernel: Linux 5.4.0-1060-aws\n      Architecture: x86-64\n")])])]),a("p",[a("code",[t._v("/etc/hosts")]),t._v(" 파일을 열고 호스트 네임을 추가한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo vim /etc/hosts\n")])])]),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("127.0.0.1 localhost\n127.0.0.1 cluster-master1\n....\n")])])]),a("p",[t._v("마지막으로 서버를 재시작한다.")]),t._v(" "),a("h3",{attrs:{id:"패키지-업그레이드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#패키지-업그레이드"}},[t._v("#")]),t._v(" 패키지 업그레이드")]),t._v(" "),a("p",[t._v("기본으로 설치된 패키지들을 최신으로 업데이트 한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo apt update\n\n$ sudo apt upgrade\n")])])]),a("h3",{attrs:{id:"메모리-스왑-비활성화"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#메모리-스왑-비활성화"}},[t._v("#")]),t._v(" 메모리 스왑 비활성화")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo swapoff -a\n")])])]),a("h3",{attrs:{id:"ntp-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ntp-설정"}},[t._v("#")]),t._v(" NTP 설정")]),t._v(" "),a("p",[t._v("쿠버네티스 클러스터는 여러 서버로 구성된다. 따라서 모든 서버의 시간을 "),a("code",[t._v("NTP(Network Time Protocol)")]),t._v("로 동기화 해야한다. 다음 명령어를 순서대로 입력하자.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo apt install ntp\n\n$ sudo service ntp restart\n\n$ sudo ntpq -p\n")])])]),a("h3",{attrs:{id:"도커-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#도커-설치"}},[t._v("#")]),t._v(" 도커 설치")]),t._v(" "),a("p",[t._v("먼저 각 노드에 도커를 설치하기 위해 다음 명령어를 순서대로 입력한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ sudo apt-get update && sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common gnupg2\n\n$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key --keyring /etc/apt/trusted.gpg.d/docker.gpg add -\n\n$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\n\n$ sudo apt-get update && sudo apt-get install -y containerd.io=1.2.13-2 docker-ce=5:19.03.11~3-0~ubuntu-$(lsb_release -cs) docker-ce-cli=5:19.03.11~3-0~ubuntu-$(lsb_release -cs)\n\n$ sudo mkdir /etc/docker\n\n$ cat <<EOF | sudo tee /etc/docker/daemon.json\n{\n  "exec-opts": ["native.cgroupdriver=systemd"],\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "100m"\n  },\n  "storage-driver": "overlay2"\n}\nEOF\n\n$ sudo mkdir -p /etc/systemd/system/docker.service.d\n\n$ sudo systemctl daemon-reload\n\n$ sudo systemctl restart docker\n\n$ sudo systemctl enable docker\n')])])]),a("p",[t._v("도커가 설치되었는지 확인하자.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ docker --version\nDocker version 20.10.14, build a224086\n")])])]),a("p",[t._v("도커는 다음과 같이 시작, 상태 확인, 정지할 수 있다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo systemctl start docker \n\n$ sudo systemctl status docker \n\n$ sudo systemctl stop docker \n")])])]),a("h3",{attrs:{id:"쿠버네티스-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스-설치"}},[t._v("#")]),t._v(" 쿠버네티스 설치")]),t._v(" "),a("p",[t._v("먼저 쿠버네티스 저장소를 추가한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ sudo apt-get update\n\n$ sudo apt-get install -y apt-transport-https ca-certificates curl\n\n$ sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg\n\n$ echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list\n\n$ sudo apt-get update\n\n$ sudo apt-get install -y kubectl kubeadm kubelet \n\n$ sudo apt-mark hold kubectl kubeadm kubelet \n')])])]),a("ul",[a("li",[a("code",[t._v("kubectl")]),t._v(": 쿠버네티스를 제어하기 위한 CLI 도구")]),t._v(" "),a("li",[a("code",[t._v("kubeadm")]),t._v(": 쿠버네티스 클러스터를 구축하고 실행하는 도구")]),t._v(" "),a("li",[a("code",[t._v("kubelet")]),t._v(": 쿠버네티스 노드 사이에서 실행되며, 노드 사이의 통신을 담당하는 도구")])]),t._v(" "),a("p",[t._v("지금까지 마스터 노드에 도커와 쿠버네티스를 설치했다. 다른 작업 노드에도 동일한 방법으로 도커와 쿠버네티스를 설치하자.")]),t._v(" "),a("h3",{attrs:{id:"마스터-노드에서-클러스터-초기화하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#마스터-노드에서-클러스터-초기화하기"}},[t._v("#")]),t._v(" 마스터 노드에서 클러스터 초기화하기")]),t._v(" "),a("p",[t._v("마스터 노드로 사용할 호스트에서 다음 명령어로 클러스터를 초기화하고 마스터 노드를 생성한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo kubeadm init \\\n    --pod-network-cidr=192.168.0.0/16 \\\n    --control-plane-endpoint=<EC2 IP주소> \\\n    --apiserver-cert-extra-sans=<EC2 IP주소>    \n")])])]),a("p",[t._v("마스터 노드 생성에 성공하면 다음과 같은 결과물이 출력된다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Your Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nAlternatively, if you are the root user, you can run:\n\n  export KUBECONFIG=/etc/kubernetes/admin.conf\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nYou can now join any number of control-plane nodes by copying certificate authorities\nand service account keys on each node and then running the following as root:\n\n  kubeadm <마스터 노드 EC2 IP>:<PORT> --token 생략 ...\n\nThen you can join any number of worker nodes by running the following on each as root:\n\n  kubeadm join <마스터노드 EC2 IP>:<PORT> --token 생략 ...\n')])])]),a("p",[t._v("결과물에서 명령어 몇 가지를 확인할 수 있는데 먼저 첫 번째 명령어를 마스터 노드에서 실행한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo mkdir -p $HOME/.kube\n\n$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n\n$ sudo chown $(id -u):$(id -g) $HOME/.kube/config\n")])])]),a("p",[t._v("두 번째 명령어는 마스터 노드를 추가하고 싶을 때 마스터 노드에서 실행한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("You can now join any number of control-plane nodes by copying certificate authorities\nand service account keys on each node and then running the following as root:\n\n  kubeadm <마스터 노드 EC2 IP>:<PORT> --token 생략 ...\n")])])]),a("p",[t._v("세 번째 명령어는 워커 노드를 추가하고 싶을 때 워커 노드에서 실행한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Then you can join any number of worker nodes by running the following on each as root:\n\n  kubeadm join <마스터노드 EC2 IP>:<PORT> --token 생략 ...\n")])])]),a("h3",{attrs:{id:"워커-노드-추가하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#워커-노드-추가하기"}},[t._v("#")]),t._v(" 워커 노드 추가하기")]),t._v(" "),a("p",[t._v("워커 노드로 사용할 EC2 인스턴스에도 위와 동일한 방법으로 도커와 쿠버네티스를 설치한다. 그리고 마스터 노드를 생성할 때 출력된 세 번째 명령어를 워커 노드에서 실행한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo kubeadm join <마스터노드 EC2 IP>:<PORT> --token 생략 ...\nThis node has joined the cluster\n")])])]),a("h3",{attrs:{id:"오버레이-네트워크-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#오버레이-네트워크-설치"}},[t._v("#")]),t._v(" 오버레이 네트워크 설치")]),t._v(" "),a("p",[t._v("우선 마스터 노드 다음 명령어를 입력한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl get pod --all-namespaces\nNAMESPACE     NAME                                      READY   STATUS              RESTARTS   AGE\nkube-system   coredns-64897985d-7cn8t                   0/1     Pending             0          10m\nkube-system   coredns-64897985d-fqxbs                   0/1     Pending             0          10m\nkube-system   etcd-cluster-master1                      1/1     Running             0          10m\nkube-system   kube-apiserver-cluster-master1            1/1     Running             0          10m\nkube-system   kube-controller-manager-cluster-master1   1/1     Running             0          10m\nkube-system   kube-proxy-8xft2                          1/1     Running             0          9m6s\nkube-system   kube-proxy-qkd54                          1/1     Running             0          10m\nkube-system   kube-scheduler-cluster-master1            1/1     Running             0          10m\n")])])]),a("p",[a("code",[t._v("kube-system")]),t._v("에 "),a("code",[t._v("coredns")]),t._v("로 시작하는 오브젝트를 확인할 수 있다. 쿠버네티스는 싱글 노드 환경에서 기본적으로 "),a("code",[t._v("coredns")]),t._v("를 사용하여 오브젝트를 식별하며, "),a("code",[t._v("coredns-64897985d-7cn8t")]),t._v(", "),a("code",[t._v("coredns-64897985d-fqxbs")]),t._v("는 "),a("code",[t._v("coredns")]),t._v("와 관련된 오브젝트다.")]),t._v(" "),a("p",[t._v("그러나 멀티 노드로 구성된 클러스터 환경에서 오브젝트 사이의 통신을 위해서는 오버레이 네트워크를 구성해야한다. "),a("code",[t._v("CNI(Contaier Network Interface)")]),t._v("는 컨테이너 간 네트워킹을 제어할 수 있는 플러그인 표준이며, 이 구현체에는 "),a("code",[t._v("Calico")]),t._v(", "),a("code",[t._v("Flannel")]),t._v(" 등이 존재한다.")]),t._v(" "),a("p",[t._v("아직 오버레이 네트워크가 구성되지 않았기 때문에 "),a("code",[t._v("coredns")]),t._v("와 관련된 오브젝트의 상태가 "),a("code",[t._v("Pending")]),t._v("이다.")]),t._v(" "),a("p",[t._v("이제 "),a("code",[t._v("Calico")]),t._v("를 사용하여 오버레이 네트워크를 구성해보자. 다음 명령어를 입력하기만 하면 된다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml\n")])])]),a("p",[t._v("정상적으로 설치가 완료되면 "),a("code",[t._v("Calico")]),t._v("와 관련된 오브젝트가 생성, 실행되는 것을 확인할 수 있다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl get pods --all-namespaces\nNAMESPACE     NAME                                      READY   STATUS    RESTARTS   AGE\nkube-system   calico-kube-controllers-7c845d499-x84g7   1/1     Running   0          11m\nkube-system   calico-node-shffx                         0/1     Running   0          11m\nkube-system   calico-node-tgw54                         0/1     Running   0          11m\nkube-system   coredns-64897985d-7cn8t                   1/1     Running   0          22m\nkube-system   coredns-64897985d-fqxbs                   1/1     Running   0          22m\nkube-system   etcd-cluster-master1                      1/1     Running   0          23m\nkube-system   kube-apiserver-cluster-master1            1/1     Running   0          23m\nkube-system   kube-controller-manager-cluster-master1   1/1     Running   0          23m\nkube-system   kube-proxy-8xft2                          1/1     Running   0          21m\nkube-system   kube-proxy-qkd54                          1/1     Running   0          22m\nkube-system   kube-scheduler-cluster-master1            1/1     Running   0          23m\n")])])]),a("p",[t._v("또한 오버레이 네트워크가 구성됐기 때문에 "),a("code",[t._v("coredns")]),t._v("와 관련된 오브젝트의 상태도 "),a("code",[t._v("Running")]),t._v("으로 변경되었다.")]),t._v(" "),a("h3",{attrs:{id:"노드-삭제하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#노드-삭제하기"}},[t._v("#")]),t._v(" 노드 삭제하기")]),t._v(" "),a("p",[t._v("삭제할 노드에서 "),a("code",[t._v("kubeadm reset")]),t._v(" 명령어를 입력하면 쿠버네티스에서 노드가 삭제된다.")]),t._v(" "),a("h3",{attrs:{id:"클러스터에-오브젝트-추가해보기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#클러스터에-오브젝트-추가해보기"}},[t._v("#")]),t._v(" 클러스터에 오브젝트 추가해보기")]),t._v(" "),a("p",[t._v("디플로이먼트, 서비스를 추가하여 클러스터가 잘 작동하는지 확인하자.")]),t._v(" "),a("p",[t._v("우선 디플로이먼트를 생성한다.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx-deployment.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("label\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pod\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("label\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("container\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl apply -f nginx-deployment.yml\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl get deployment\nNAME               READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   3/3     3            3           33s\n")])])]),a("p",[t._v("그리고 ClusterIP 타입의 서비스를 생성한다.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx-service.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("port\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("label\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterIP\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl apply -f nginx-service.yml\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl get services\nNAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE\nkubernetes      ClusterIP   10.96.0.1        <none>        443/TCP    14m\nnginx-service   ClusterIP   10.103.118.151   <none>        9999/TCP   6s\n")])])]),a("p",[t._v("그 다음 인그레스 오브젝트를 생성한다.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx-ingress.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.k8s.io/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ingress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/rewrite-target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" / \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetes.io/ingress.class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /service\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pathType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Prefix\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl apply -f nginx-ingress.yml\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl get ingress\nNAME            CLASS    HOSTS   ADDRESS   PORTS   AGE\nnginx-ingress   <none>   *                 80      2m32s\n")])])]),a("p",[t._v("그리고 nginx 인그레스 컨트롤러를 설치한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.0/deploy/static/provider/baremetal/deploy.yaml\n")])])]),a("p",[t._v("마지막으로 nginx 인그레스 컨트롤러 서비스의 외부 포트를 EC2 보안 그룹에서 개방한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl get services -n ingress-nginx \nNAME                                 TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE\ningress-nginx-controller             NodePort    10.102.204.237   <none>        80:30480/TCP,443:32300/TCP   10m\ningress-nginx-controller-admission   ClusterIP   10.106.35.236    <none>        443/TCP                      10m\n")])])]),a("p",[a("img",{attrs:{src:s(1390),alt:""}})]),t._v(" "),a("p",[t._v("이제 워커노드로 요청을 보낼 수 있게 된다.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1391),alt:""}})])])}),[],!1,null,null,null);e.default=n.exports}}]);