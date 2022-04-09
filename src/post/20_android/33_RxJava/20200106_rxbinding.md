---
title: "RxBinding"
description: "RxBinding"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents

[[toc]]

# RxBinding
[`RxBinding`](https://github.com/JakeWharton/RxBinding)은 안드로이드 UI 위젯을 위한 바인딩 라이브러리입니다. 

보통 버튼을 클릭했을 때의 이벤트는 다음과 같이 처리합니다.

``` kotlin
class MainActivity : AppCompatActivity() {

    private val button: Button by lazy { findViewById(R.id.activity_main_button) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        button.setOnClickListener {
            // 버튼을 클릭했을 때
        }
    }
}
```
`RxBinding`를 사용하면 다음과 같이 버튼을 클릭했을 때의 이벤트를 `구독(Subscribe)`할 수 있습니다.

``` kotlin
class MainActivity : AppCompatActivity() {

    private val button: Button by lazy { findViewById(R.id.activity_main_button) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        button.clicks()
            .subscribe {
                // 버튼을 클릭했을 때
            }
    }
}
```
이처럼 `RxBinding`을 사용하면 위젯에 발생하는 이벤트를 `Observable`하게 처리할 수 있습니다.

## 의존성 추가
`RxBinding`을 사용하려면 다음 의존성을 추가해야합니다.
``` groovy
// 모듈 수준의 build.gradle

// Platform Binding
implementation "com.jakewharton.rxbinding3:rxbinding:3.1.0"

// AndroidX Binding
implementation 'com.jakewharton.rxbinding3:rxbinding-core:3.1.0'
implementation 'com.jakewharton.rxbinding3:rxbinding-appcompat:3.1.0'
implementation 'com.jakewharton.rxbinding3:rxbinding-drawerlayout:3.1.0'
implementation 'com.jakewharton.rxbinding3:rxbinding-leanback:3.1.0'
implementation 'com.jakewharton.rxbinding3:rxbinding-recyclerview:3.1.0'
implementation 'com.jakewharton.rxbinding3:rxbinding-slidingpanelayout:3.1.0'
implementation 'com.jakewharton.rxbinding3:rxbinding-swiperefreshlayout:3.1.0'
implementation 'com.jakewharton.rxbinding3:rxbinding-viewpager:3.1.0'
implementation 'com.jakewharton.rxbinding3:rxbinding-viewpager2:3.1.0'

// Google Material Component Binding
implementation 'com.jakewharton.rxbinding3:rxbinding-material:3.1.0'
```

## 사용법

### Button 클릭 
우선 위에서 살펴본 것 처럼 버튼이 클릭되었을 때의 이벤트를 감지할 수 있습니다.
``` kotlin
class MainActivity : AppCompatActivity() {

    private val button: Button by lazy { findViewById(R.id.activity_main_button) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        button.clicks()
            .subscribe {
                // 버튼을 클릭했을 때
            }
    }
}
```

### TextEdit의 텍스트 변화
보통 `EditText`의 텍스트가 변하는 것을 탐지하려면 `TextWatcher`를 사용합니다.

``` kotlin
private val editText: EditText by lazy { findViewById(R.id.activity_main_editText) }

// ...

editText.addTextChangedListener(object: TextWatcher {
    override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {
        // 텍스트가 변하기 전에 호출
    }

    override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
        // 텍스트가 변할 때 호출
    }

    override fun afterTextChanged(s: Editable?) {
        // 텍스트가 변한 후 호출
    }
})
```
`RxBinding`를 사용하면 다음과 같이 `Observable`스럽게 텍스트 변화를 탐지할 수 있습니다.
``` kotlin
private val editText: EditText by lazy { findViewById(R.id.activity_main_editText) }

// ...

editText
    .textChanges()
    .subscribe {
        // 텍스트가 변할 때 호출
    }
```

## 마치며 
`RxBinding`을 사용하면 `Button`과 `EditText` 외에도 다양한 안드로이드 UI 위젯 이벤트를 `Observable`스럽게 처리할 수 있습니다. 특히 `RxBinding`은 `Observable`클래스의 `debounce()`, `throttle()` 메소드와 함께 사용할 때 강력한 힘을 발휘합니다. 