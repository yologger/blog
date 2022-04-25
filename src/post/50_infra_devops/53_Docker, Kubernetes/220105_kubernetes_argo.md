---
title: "Github Actions + Argo CD 으로 Kubernetes CI/CD 파이프라인 구축하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

::: warning
미완성된 포스트입니다.
:::

# Table of Contents
[[toc]]

`Github Actions`와 `Argo CD`를 사용하여 스프링부트 프로젝트를 쿠버네티스 클러스터에 배포한다.

## 환경
- Spring Boot
- Github Actions
- AWS ECR
- Argo CD

## CI 구축하기
`Dockerfile`은 다음과 같다.
``` 
FROM openjdk:8-jdk-alpine
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Dspring.profiles.active=prod",  "-jar","/app.jar"]
```

Github Actions 스크립트는 다음과 같다.
``` yml
# main.yml
name: CI

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

      - name: Build with Gradle
        run: ./gradlew clean build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v1

      - name: Build and Push images to AWS ECR
        id: build-image
        env:
          ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
          IMAGE_TAG: ${{ github.sha }}
        run: |
          docker build -t $ECR_REGISTRY/${{ secrets.ECR_REPOSITORY }}:$IMAGE_TAG .
          docker push $ECR_REGISTRY/${{ secrets.ECR_REPOSITORY }}:$IMAGE_TAG
          echo "::set-output name=image::$ECR_REGISTRY/${{ secrets.ECR_REPOSITORY }}:$IMAGE_TAG"
```

## CD 구축하기