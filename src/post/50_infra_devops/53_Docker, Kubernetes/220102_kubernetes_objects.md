---
title: "Kubernetes 오브젝트"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# 오브젝트
쿠버네티스는 자원을 `오브젝트(Object)`라는 형태로 관리한다. 대표적인 오브젝트에는 다음과 같은 것이 있다.
- `Pod`
- `ReplicaSet`
- `Service`
- `Deployment`
- `Ingress`
- `Configmap`
- `Secret`

## 오브젝트 종류 확인하기
``` shellsession
$ kubectl api-resources
NAME                              SHORTNAMES   APIVERSION                             NAMESPACED   KIND
configmaps                        cm           v1                                     true         ConfigMap
namespaces                        ns           v1                                     false        Namespace
nodes                             no           v1                                     false        Node
persistentvolumes                 pv           v1                                     false        PersistentVolume
pods                              po           v1                                     true         Pod
secrets                                        v1                                     true         Secret
deployments                       deploy       apps/v1                                true         Deployment
replicasets                       rs           apps/v1                                true         ReplicaSet
jobs                                           batch/v1                               true         Job
ingresses                         ing          networking.k8s.io/v1                   true         Ingress
roles                                          rbac.authorization.k8s.io/v1           true         Role
생략 ....
```

## Pod
- 컨테이너 애플리케이션의 기본 단위를 `팟(Pod)`이라고 한다.
- 팟은 하나 이상의 도커 컨테이너로 구성된다.
