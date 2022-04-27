---
title: "Github Actions + Argo CD 으로 Kubernetes CI/CD 파이프라인 구축하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

::: warning
이 포스트는 [공식 문서](https://catalog.us-east-1.prod.workshops.aws/workshops/9c0aa9ab-90a9-44a6-abe1-8dff360ae428/ko-KR/110-cicd/100-cicd)를 참고하여 작성되었습니다.
:::

## CI/CD 파이프라인
`Github Actions`와 `Argo CD`를 사용하여 스프링부트 프로젝트를 쿠버네티스 클러스터에 배포한다. 공식 문서에서 제공하는 CI/CD 파이프라인의 흐름은 다음과 같다.

![](./220106_kubernetes_argo/1.png)

1. 개발자는 소스코드 리포지토리에 푸시한다.
1. 소스코드 리포지토리의 `GitHub Actions`가 동작하여 도커 이미지를 생성하고 ECR에 푸시한다.
1. `GitHub Actions`는 `Kustomize`로 
1. `Argo CD`가 리포지토리의 변화를 감지하여 `Kubernetes`에 반영한다.


## GitOps
위처럼 배포, 운영과 관련된 모든 절차를 선언적으로 코드화하여 `Git`에서 관리하는 것을 <b>`GitOps`</b>라고 한다. 

GitOps의 핵심은 두 개의 저장소(소스코드 저장소, 메니페스트 저장소)을 사용하는 것이다.

![](./220106_kubernetes_argo/2.png)

## 환경
- Spring Boot
- Github Actions
- AWS ECR
- Multi AWS EC2 Kubernetes cluster (Not EKS)
- Argo CD

## CI 구축하기
`CI(Continuous Integration)`을 먼저 구축해보자.

![](./220106_kubernetes_argo/3.png)

`Dockerfile`은 다음과 같다.
``` 
FROM openjdk:8-jdk-alpine
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Dspring.profiles.active=prod",  "-jar","/app.jar"]
```

`Github Actions` 스크립트는 다음과 같다.
``` yml
# main.yml
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8

      - name: Grant execute permission for gradlew
        run: chmod +x gradlew

      - name: Add properties file
        run: echo '${{ secrets.APPLICATION_PROD_PROPERTIES }}' > ./src/main/resources/application-prod.properties

      # Jar 빌드
      - name: Build with Gradle
        run: ./gradlew clean build

      # AWS IAM 인증
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      # AWS ECR 로그인
      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v1

      # 이미지 태그 생성
      - name: Make image tag
        id: image
        run: |
          VERSION=$(echo ${{ github.sha }} | cut -c1-8)
          echo VERSION=$VERSION
          echo "::set-output name=version::$VERSION"

      # 도커 이미지 빌드 & AWS ECR에 푸시
      - name: Build and Push images to AWS ECR
        id: build-image
        env:
          ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
          ECR_REPOSITORY: ${{ secrets.ECR_REPOSITORY }}
          IMAGE_TAG: ${{ steps.image.outputs.version }}
        run: |
          echo "::set-output name=ecr_repository::$ECR_REPOSITORY"
          echo "::set-output name=image_tag::$IMAGE_TAG"
          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
```

빌드가 성공했다면 `ECR`에 이미지가 저장되었을 것이다.

## 메니페스트 리포지토리 구축

메니페스트 파일은 도커 이미지를 쿠버네티스 클러스터에 어떤 식으로 배포할지를 선언한 파일이다. 보통 `Kustomize`를 사용하여 메니페스트를 정의한다. 메니페스트 리포지토리에는 이 파일이 저장된다.

우선 메니페스트 리포지토리를 생성한다.

메니페스트에 리포지토리에는 도커 이미지를 클러스터

이제 메니페스트 리포지토리를 구축할 차례다.

![](./220106_kubernetes_argo/4.png)


https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

docker build -t $ECR_REGISTRY/${{ secrets.ECR_REPOSITORY }}:$IMAGE_TAG .
docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
          
## Argo CD 설치하기
먼저 쿠버네티스 클러스터에서 `Argo CD`를 설치한다.
```
// 네임스페이스 생성
$ kubectl create namespace argocd

// Argo CD와 관련된 오브젝트 설치
$ kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```
`Argo CD`와 관련된 오브젝트가 `argocd` 네임스페이스에 설치된다. 설치된 팟과 서비스를 확인해보자.
```
$ kubectl get pods -n argocd
NAME                                                READY   STATUS    RESTARTS   AGE
argocd-application-controller-0                     1/1     Running   0          119s
argocd-applicationset-controller-79f97597cb-gntdl   1/1     Running   0          2m
argocd-dex-server-6fd8b59f5b-gwwr9                  1/1     Running   0          2m
argocd-notifications-controller-5549f47758-4gqxv    1/1     Running   0          2m
argocd-redis-79bdbdf78f-k8ftl                       1/1     Running   0          2m
argocd-repo-server-5569c7b657-2df8d                 1/1     Running   0          2m
argocd-server-664b7c6878-krfp7                      1/1     Running   0          2m
```
```
$ kubectl get service -n argocd
NAME                                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
argocd-applicationset-controller          ClusterIP   10.107.177.230   <none>        7000/TCP                     7m3s
argocd-dex-server                         ClusterIP   10.99.2.29       <none>        5556/TCP,5557/TCP,5558/TCP   7m3s
argocd-metrics                            ClusterIP   10.106.79.143    <none>        8082/TCP                     7m3s
argocd-notifications-controller-metrics   ClusterIP   10.107.128.107   <none>        9001/TCP                     7m3s
argocd-redis                              ClusterIP   10.99.61.196     <none>        6379/TCP                     7m3s
argocd-repo-server                        ClusterIP   10.105.139.69    <none>        8081/TCP,8084/TCP            7m3s
argocd-server                             ClusterIP   10.96.104.252    <none>        80/TCP,443/TCP               7m3s
argocd-server-metrics                     ClusterIP   10.110.209.117   <none>        8083/TCP                     7m3s
```

Argo CD는 웹 브라우저에서 GUI 형태로 관련된 오브젝트를 관리할 수 있도록 `Argo CD API server`를 제공한다. 

![](./220106_kubernetes_argo/10.png)

Argo CD가 설치되면 기본적으로 API server 접근하기 위한 서비스가 `Cluster IP`타입으로 설정된다. 클러스터 외부에서도 API server에 접근할 수 있도록 서비스 타입을 `NodePort`로 바꿔주자.

```
$ kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "NodePort"}}'
```
``` {9}
$ kubectl get service -n argocd
NAME                                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
argocd-applicationset-controller          ClusterIP   10.107.177.230   <none>        7000/TCP                     8m40s
argocd-dex-server                         ClusterIP   10.99.2.29       <none>        5556/TCP,5557/TCP,5558/TCP   8m40s
argocd-metrics                            ClusterIP   10.106.79.143    <none>        8082/TCP                     8m40s
argocd-notifications-controller-metrics   ClusterIP   10.107.128.107   <none>        9001/TCP                     8m40s
argocd-redis                              ClusterIP   10.99.61.196     <none>        6379/TCP                     8m40s
argocd-repo-server                        ClusterIP   10.105.139.69    <none>        8081/TCP,8084/TCP            8m40s
argocd-server                             NodePort    10.96.104.252    <none>        80:30609/TCP,443:30992/TCP   8m40s
argocd-server-metrics                     ClusterIP   10.110.209.117   <none>        8083/TCP                     8m40s
```
이제 클러스터 외부에서 `<워커 노드 IP>:<외부노출 포트>` 형태로 API server에 접근할 수 있다.

::: warning
`EC2`로 클러스터를 구축한 경우 보안 그룹에서 해당 포트를 개방해야한다.
:::

제대로 접근한 경우 다음과 같이 로그인 화면이 나온다.

![](./220106_kubernetes_argo/11.png)

기본 계정은 `admin`이며, 비밀번호는 다음 명령어로 알아낼 수 있다.
```
$ kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```
https://potato-yong.tistory.com/137
https://catalog.us-east-1.prod.workshops.aws/workshops/9c0aa9ab-90a9-44a6-abe1-8dff360ae428/ko-KR/110-cicd/100-cicd


## 요약
