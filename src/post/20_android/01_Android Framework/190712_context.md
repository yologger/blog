---
title: "Context"
description: "Context"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents

[[toc]]

# Context
우선 공식 문서에 의하면 다음과 같습니다.
> Interface to global information about an application environment. This is an abstract class whose implementation is provided by the Android system. It allows access to application-specific resources and classes, as well as up-calls for application-level operations such as launching activities, broadcasting and receiving intents, etc.

`컨텍스트(Context)`는 어플리케이션이나 액티비티의 <u>현재 상태에 대한 정보</u>를 의미합니다. 다시 말해 컨텍스트에는 어플리케이션이나 액티비티에서 지금 어떤 일이 일어나는지에 대한 정보가 있습니다. 

어플리케이션이나 액티비티의 현재 상태는 시시각각 변합니다. 그러나 개발 단계에서는 컨텍스트에 어떠한 정보가 올지 알 수 없기 때문에 인터페이스 형태로 컨텍스트에 접근합니다. 런타임에서는 안드로이드 시스템이 어플리케이션이나 액티비티의 현재 상태 정보를 가진 구현체를 직접 주입해줍니다.


## Context의 종류
안드로이드에는 크게 두 가지의 컨텍스트가 있습니다.

### Application Context
어플리케이션 전체에 대한 맥락을 가지고 있습니다. 이 컨텍스트는 어플리케이션의 라이프사이클과 연결되어 있으며, `getApplicationContext()`를 호출하여 접근할 수 있습니다. 

### Activity Context
특정 액티비티에 대한 맥락을 가지고 있습니다. 이 컨텍스트는 액티비티의 생명주기와 연결되어 있습니다. 따라서 액티비티의 `onDestroy()`가 호출될 때 해당 컨텍스트도 메모리에서 사라지게 됩니다.

모든 `Activity`클래스는 `Context`클래스를 상속합니다. 따라서 액티비티 안에서 `this`를 사용하여 액티비티 컨텍스트에 접근할 수 있습니다.

## Context의 활용
우선 컨텍스트는 새로운 객체 생성하는데 사용됩니다.
``` kotlin
// 새로운 뷰 생성
val textView = TextView(this)
val button = Button(this)

// 어답터 생성
var cursorAdapter = SimpleCursorAdapter(getApplicationContext(), ..)
```
`시스템 서비스`나 `SharedPreferences`에 접근하는데 사용됩니다.
``` kotlin
// 시스템 서비스 - 레이아웃 인플레이터
var inflater = context.getSystemService(LAYOUT_INFLATER_SERVICE)

// SharedPreferences
getApplicationContext().getSharedPreferences(*name*, *mode*)
```
다른 컴포넌트를 호출하는데도 사용됩니다.
``` kotlin
// 액티비티 호출
val intent = Intent(this, SubActivity::class.java)
startActivity(intent)

// 컨텐트 프로바이더
val contextResolver = getApplicationContext().getContentResolver()
contextResolver.query(uri, ...)
```
자원에 접근하는데 사용할 수도 있습니다.
``` kotlin
var appPackageName: String = getApplicationContext().getPackageName()
var resources: Resources = getApplicationContext().getResources()
```
