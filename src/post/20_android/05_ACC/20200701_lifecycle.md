---
title: "Lifecycle Owner, Lifecycle-aware Component"
description: "Lifecycle Owner, Lifecycle-aware Component"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents

[[toc]]

## Jetpack
`Jetpack`은 더 좋은 품질의 안드로이드 개발을 돕는 라이브러리의 집합입니다.

![](./20200701_lifecycle/1.png)

`Jetpack`은 크게 네 가지 카테고리로 분류됩니다.
- Architecture Component
- UI Component
- Foundation Component
- Behavior Component

이번 포스트에서는 `Lifecycle Owner`와 `Lifecycle-aware Component`에 대해 알아보겠습니다.

## Lifecycle
`Activity`, `Fragment` 등 대부분의 안드로이드 컴포넌트들은 `생명주기(Lifecycle)`을 가지고 있습니다. 또한 컴포넌트가 생성되거나 화면에 보이거나 화면에서 사라질 때 사전에 정의된 `생명주기 함수(Lifecycle Method)`를 호출합니다.

## Lifecycle Owner
`Activity`, `Fragment` 등 대부분의 안드로이드 컴포넌트들은 `LifecycleOwner`클래스를 구현하고 있습니다.
``` kotlin AppCompatActivity.kt
open class AppCompatActivity: ... , LifeCycleOwner {
    ...
}
```
``` kotlin Fragment.kt 
open class Fragment: ... , LifeCycleOwner {
    ...
}
```

`LifecycleOwner`클래스에는 `getLifeCycle()`메소드가 정의되어있습니다. 이 메소드를 호출하여 해당 컴포넌트의 `LifeCycle`에 접근할 수 있습니다.

``` java LifeCycleOwner.java
class LifeCycleOwner {
    ...
    LifeCycle getLifeCycle()
}
```

## Lifecycle-aware Compoent
[`Lifecycle-aware Compoent`](https://developer.android.com/topic/libraries/architecture/lifecycle)를 사용하면 `Lifecycle`의 상태 변화를 탐지할 수 있습니다. Lifecycle-aware Compoent를 사용하려면 모듈 수준의 `build.gradle`에 의존성을 추가해야합니다.

``` groovy 
// 모듈 수준의 build.gradle
apply plugin: 'kotlin-kapt'

dependencies {
    implementation "androidx.lifecycle:lifecycle-runtime-ktx:$lifecycle_version"
    kapt "androidx.lifecycle:lifecycle-compiler:$lifecycle_version"
}
```

그 다음 `LifecycleObserver`클래스를 구현하는 클래스를 정의합니다. 생명주기가 변할 때 마다 결과를 출력하는 커스텀 로그를 정의해봅시다.
``` kotlin 
// CustomLogger.kt
class CustomLogger : LifecycleObserver {

    @OnLifecycleEvent(Lifecycle.Event.ON_CREATE)
    fun onCreate() {
        println("onCreate")
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_DESTROY)
    fun onDestroy() {
        println("onDestory")
    }
}
```
이제 `LifeCycleOwner`를 구현하는 클래스에서 `lifecycle`속성과 `addObserver()`메소드를 통해 `Observer`를 등록할 수 있습니다.
``` kotlin CreateActivity.kt
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Observer 등록
        lifecycle.addObserver(CustomLogger())
    }

    override fun onDestroy() {
        super.onDestroy()
        // Observer 해제
        lifecycle.removeObserver(CustomLogger())
    }
}
```