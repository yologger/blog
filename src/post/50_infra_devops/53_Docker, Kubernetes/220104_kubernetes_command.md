---
title: "Kubernetes 명령어 정리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## 노드 관련 명령어

### 노드 확인하기
`kubectl get nodes`명령어로 클러스터에 포함된 노드들을 확인할 수 있다.
```
$ kubectl get nodes
NAME              STATUS   ROLES                  AGE   VERSION
cluster-master1   Ready    control-plane,master   25m   v1.23.6
cluster-worker1   Ready    <none>                 23m   v1.23.6
```

## 오브젝트 관련 명령어

### 오브젝트 상세정보 확인
`kubectl describe <오브젝트 종류> <오브젝트 이름>`으로 오브젝트의 상세한 정보를 확인할 수 있다.
```
$ kubectl describe pods nginx-pod    
Name:         nginx-pod
Namespace:    default
Priority:     0
Node:         docker-desktop/192.168.65.4
Start Time:   Tue, 19 Apr 2022 14:23:56 +0900
Labels:       <none>
Annotations:  <none>
Status:       Running
IP:           10.1.0.33
IPs:
  IP:  10.1.0.33
Containers:
  nginx-container:
    Container ID:   docker://fe068fdc944c8d64e198c6da83eb29d8f97340412679605c6ba15bda710efe31
    Image:          nginx:latest
    Image ID:       docker-pullable://nginx@sha256:2275af0f20d71b293916f1958f8497f987b8d8fd8113df54635f2a5915002bf1
    Port:           80/TCP
    // 생략 ...
```


## 팟 관련 명령어

### 팟 확인
`kubectl get pods`명령어로 팟 목록을 확인할 수 있다.
```
$ kubectl get pods
NAME                               READY   STATUS    RESTARTS   AGE
nginx-deployment-664f4c64c-4sbfd   1/1     Running   0          45m
nginx-deployment-664f4c64c-5r55z   1/1     Running   0          45m
nginx-pod                          1/1     Running   0          38m
```

### 모든 네임스페이스의 팟 출력
`--all-namespaces` 옵션을 사옹하면 모든 네임스페이스의 팟을 확인할 수 있다.
```
$ kubectl get pods --all-namespaces
NAMESPACE     NAME                                      READY   STATUS    RESTARTS   AGE
kube-system   calico-kube-controllers-7c845d499-x84g7   1/1     Running   0          27m
kube-system   calico-node-shffx                         0/1     Running   0          27m
kube-system   calico-node-tgw54                         0/1     Running   0          27m
kube-system   coredns-64897985d-7cn8t                   1/1     Running   0          38m
kube-system   coredns-64897985d-fqxbs                   1/1     Running   0          38m
kube-system   etcd-cluster-master1                      1/1     Running   0          39m
kube-system   kube-apiserver-cluster-master1            1/1     Running   0          39m
kube-system   kube-controller-manager-cluster-master1   1/1     Running   0          39m
kube-system   kube-proxy-8xft2                          1/1     Running   0          37m
kube-system   kube-proxy-qkd54                          1/1     Running   0          38m
kube-system   kube-scheduler-cluster-master1            1/1     Running   0          39m
```


### 특정 네임스페이스의 팟 출력
`-n <네임스페이스 이름>` 옵션으로 특정 네임스페이스에 포함된 팟을 확인할 수 있다.
```
$ kubectl get pods -n kube-system
NAME                                      READY   STATUS    RESTARTS   AGE
calico-kube-controllers-7c845d499-x84g7   1/1     Running   0          29m
calico-node-shffx                         0/1     Running   0          29m
calico-node-tgw54                         0/1     Running   0          29m
coredns-64897985d-7cn8t                   1/1     Running   0          40m
coredns-64897985d-fqxbs                   1/1     Running   0          40m
etcd-cluster-master1                      1/1     Running   0          40m
kube-apiserver-cluster-master1            1/1     Running   0          40m
kube-controller-manager-cluster-master1   1/1     Running   0          40m
kube-proxy-8xft2                          1/1     Running   0          39m
kube-proxy-qkd54                          1/1     Running   0          40m
kube-scheduler-cluster-master1            1/1     Running   0          40m
```

### IP, 노드 같은 네트워크 정보도 함께 출력하기
`-o wide` 옵션을 추가하면 IP, 노드 같은 네트워크 정보도 함께 출력할 수 있다.
```
$ kubectl get pods -n kube-system -o wide
NAME                                      READY   STATUS    RESTARTS   AGE   IP                NODE              NOMINATED NODE   READINESS GATES
calico-kube-controllers-7c845d499-x84g7   1/1     Running   0          31m   192.168.39.1      cluster-worker1   <none>           <none>
calico-node-shffx                         0/1     Running   0          31m   172.31.42.69      cluster-worker1   <none>           <none>
calico-node-tgw54                         0/1     Running   0          31m   172.31.36.170     cluster-master1   <none>           <none>
coredns-64897985d-7cn8t                   1/1     Running   0          42m   192.168.247.130   cluster-master1   <none>           <none>
coredns-64897985d-fqxbs                   1/1     Running   0          42m   192.168.247.129   cluster-master1   <none>           <none>
etcd-cluster-master1                      1/1     Running   0          43m   172.31.36.170     cluster-master1   <none>           <none>
kube-apiserver-cluster-master1            1/1     Running   0          43m   172.31.36.170     cluster-master1   <none>           <none>
kube-controller-manager-cluster-master1   1/1     Running   0          43m   172.31.36.170     cluster-master1   <none>           <none>
kube-proxy-8xft2                          1/1     Running   0          41m   172.31.42.69      cluster-worker1   <none>           <none>
kube-proxy-qkd54                          1/1     Running   0          42m   172.31.36.170     cluster-master1   <none>           <none>
kube-scheduler-cluster-master1            1/1     Running   0          43m   172.31.36.170     cluster-master1   <none>           <none>
```

### 팟을 라벨 함께 출력
`--show-labels`옵션을 추가하면 라벨까지 확인할 수 있다.
```
$ kubectl get pods --show-labels
NAME                               READY   STATUS    RESTARTS   AGE   LABELS
nginx-deployment-664f4c64c-4sbfd   1/1     Running   0          45m   app=nginx-pod-label,pod-template-hash=664f4c64c
nginx-deployment-664f4c64c-5r55z   1/1     Running   0          45m   app=nginx-pod-label,pod-template-hash=664f4c64c
nginx-pod                          1/1     Running   0          38m   <none>
```

### 팟 내부에 접속하기
`kubectl exec -it <팟 이름> <사용할 쉘>`명령어로 팟 내부 컨테이너에 접속할 수 있다.
``` 
$ kubectl exec -it nginx-pod bash
root@nginx-pod:/# 
```

팟이 다중 컨테이너로 구성되어있다면 `-c <컨테이너 이름>` 옵션을 사용하여 특정 컨테이너로 접속할 수 있다.
``` 
$ kubectl exec -it nginx-pod -c nginx-container bash
root@nginx-pod:/# 
```
