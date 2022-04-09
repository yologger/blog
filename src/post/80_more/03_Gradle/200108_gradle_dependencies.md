---
title: "Gradle Dependency 관리"
lang: ko
showOnSidebar: true
collapsible: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

::: danger
현재 작성 중인 포스트입니다.
:::

## deprecated
- apk (deprecated)
- compile(deprecated)
- testCompile(deprecated)
- provided(deprecated) => runtimeOnly

## implementation
``` groovy
dependencies {
    // Dependency on a local library module
    implementation project(":mylibrary")

    // Dependency on local binaries
    implementation fileTree(dir: 'libs', include: ['*.jar'])

    // Dependency on a remote binary
    implementation 'com.example.android:app-magic:12.3'
    implementation group: 'com.example.android', name: 'app-magic', version: '12.3'

    implementation('some-library') {
        exclude group: 'com.example.imgtools', module: 'native'
    }
}
```
    
## api

    
## compileOnly (lombok)
## runtimeOnly (DB)


## 안드로이드
- debugImplementation - 디버그 빌드변형 빌드 시 적용
- releaseImplementation - 릴리즈 빌드변형 시 적용

## 안드로이드 테스트
- testImplementation
- androidTestImplementation

## 스프링
- testImplementation
- debugImplementation

## 어노테이션 프로세서
- annotationProcessor (Dagger)
- kapt (코틀린)


