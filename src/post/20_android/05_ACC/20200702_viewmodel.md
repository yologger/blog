---
title: "ViewModel"
description: "ViewModel"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents

[[toc]]

# Jetpack
`Jetpack`은 더 좋은 품질의 안드로이드 개발을 돕는 라이브러리의 집합입니다.

![](./20200702_viewmodel/1.png)

`Jetpack`은 크게 네 가지 카테고리로 분류됩니다.
- Architecture Component
- UI Component
- Foundation Component
- Behavior Component

이번 포스트에서는 `Lifecycle Owner`와 `Lifecycle-aware Component`에 대해 알아보겠습니다.

## 탄생 배경
우선 간단한 카운터 앱을 살펴봅시다. 코드는 다음과 같습니다.
``` xml
// activity_main.xml

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:orientation="vertical"
    android:gravity="center"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/activity_main_tv_value"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textSize="50sp"
        android:text="0"/>

    <Button
        android:id="@+id/activity_main_btn_plus"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:onClick="onButtonClicked"
        android:text="Plus"/>

    <Button
        android:id="@+id/activity_main_btn_minus"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:onClick="onButtonClicked"
        android:text="Minus"/>
</LinearLayout>
```

``` kotlin
// MainActivity.kt

class MainActivity : AppCompatActivity() {

    private var value = 0

    private val textViewValue: TextView by lazy { findViewById(R.id.activity_main_tv_value) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun onButtonClicked(view: View) {
        when(view.id) {
            R.id.activity_main_btn_plus -> {
                value += 1
                textViewValue.text = value.toString()
            }
            R.id.activity_main_btn_minus -> {
                value -= 1
                textViewValue.text = value.toString()
            }
        }
    }
}
```

이 앱은 화면 방향을 회전하면 데이터가 초기값으로 돌아갑니다. 화면이 회전되면서 액티비티가 소멸한 후 재생성되기 때문입니다.

![](./20200702_viewmodel/2.gif)

이러한 문제를 해결하기 위해 기존에는 `Activity`의 `onSaveInstanceState()`에서 데이터를 저장하고 `onCreate()`에서 데이터를 복구했습니다.
``` kotlin
// MainActivity.kt
class MainActivity : AppCompatActivity() {

    companion object {
        const val KEY = "key"
    }

    private var value = 0

    private val textViewValue: TextView by lazy { findViewById(R.id.activity_main_tv_value) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // 데이터 복구
        if (savedInstanceState != null && savedInstanceState.containsKey(KEY)) {
            value = savedInstanceState.getInt(KEY)
            textViewValue.text = value.toString()
        }
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)

        // 데이터 저장
        outState.putInt(KEY, value)
    }

    fun onButtonClicked(view: View) {
        when(view.id) {
            R.id.activity_main_btn_plus -> {
                value += 1
                textViewValue.text = value.toString()
            }
            R.id.activity_main_btn_minus -> {
                value -= 1
                textViewValue.text = value.toString()
            }
        }
    }
}
``` 

## ViewModel
`ViewModel`은 UI와 관련된 데이터를 별도의 객체에 저장하고 관리하도록 설계되었습니다. UI의 상태와 관련된 데이터를 `ViewModel`에 저장하기 때문에 화면 회전과 같이 구성이 변경될 때에도 데이터를 유지할 수 있습니다.

`ViewModel`은 다음과 같이 `ViewModel`클래스를 상속하여 정의합니다.
``` kotlin
// MainViewModel.kt
import androidx.lifecycle.ViewModel

class MainViewModel : ViewModel() {

    var value = 0

}
```
`Activity`에서는 `ViewModelProvider`를 사용하여 `ViewModel` 객체를 생성합니다.

``` kotlin
// MainActivity.kt
import androidx.lifecycle.ViewModelProvider

class MainActivity : AppCompatActivity() {

    private lateinit var mainViewModel: MainViewModel

    private val textViewValue: TextView by lazy { findViewById(R.id.activity_main_tv_value) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // ViewModel 초기화
        mainViewModel = ViewModelProvider(this).get(MainViewModel::class.java)
        textViewValue.text = mainViewModel.value.toString()
    }

    fun onButtonClicked(view: View) {
        when(view.id) {
            R.id.activity_main_btn_plus -> {
                mainViewModel.value ++
                textViewValue.text = mainViewModel.value.toString()
            }
            R.id.activity_main_btn_minus -> {
                mainViewModel.value --
                textViewValue.text = mainViewModel.value.toString()
            }
        }
    }
}
```

이제 화면 전환이 되어도 UI 상태가 유지됩니다.

## 다양한 ViewModel 생성 방법
`ViewModel`은 다양한 방법으로 생성할 수 있습니다.

### ViewModelProvider
``` kotlin
import androidx.lifecycle.ViewModel

class LoginViewModel: ViewModel() {
    fun login() {
        // do something.
    }
}
```

``` kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import androidx.lifecycle.ViewModelProvider
import com.yologger.viewmodel.R

class LoginActivity : AppCompatActivity() {

    private val loginViewModel: LoginViewModel by lazy { ViewModelProvider(this).get(LoginViewModel::class.java) }

    private val loginButton: Button by lazy { findViewById(R.id.activity_login_btn_login) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        loginButton.setOnClickListener {
            loginViewModel.login()
        }
    }
}
```

### ViewModelFactory
아래 예제를 살펴봅시다. `LoginViewModel`의 생성자에 `LogInUseCase`라는 파라미터가 있습니다.
``` kotlin
import androidx.lifecycle.ViewModel
import com.yologger.viewmodel.domain.LoginUseCase

class LoginViewModel(
    private val loginUseCase: LoginUseCase
) : ViewModel() {

    fun login() {
        loginUseCase.execute()
    }
}
```

``` kotlin
class LoginUseCase {

    fun execute() {
        // do something.
    }
}
```

이처럼 `ViewModel`에 파라미터가 있는 경우 `ViewModelFactory`를 정의해야합니다.
``` kotlin
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.yologger.viewmodel.domain.LoginUseCase
import java.lang.IllegalArgumentException

class LoginViewModelFactory(private val loginUseCase: LoginUseCase) : ViewModelProvider.Factory {
    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        return if (modelClass.isAssignableFrom(LoginViewModel::class.java)) {
            LoginViewModel(loginUseCase) as T
        } else {
            throw IllegalArgumentException()
        }
    }
}
```
이제 다음과 같이 `ViewModel`을 생성할 수 있습니다.
``` kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import androidx.lifecycle.ViewModelProvider
import com.yologger.viewmodel.R
import com.yologger.viewmodel.domain.LoginUseCase

class LoginActivity : AppCompatActivity() {

    private val loginUseCase: LoginUseCase by lazy { LoginUseCase() }
    private val loginViewModel: LoginViewModel by lazy { ViewModelProvider(this, LoginViewModelFactory(loginUseCase)).get(LoginViewModel::class.java) }

    private val loginButton: Button by lazy { findViewById(R.id.activity_login_btn_login) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        loginButton.setOnClickListener {
            loginViewModel.login()
        }
    }
}
```

### Android KTX
`Android KTX` 라이브러리를 사용하면 `ViewModel`을 보다 쉽게 생성할 수 있습니다. 이를 위해 다음 의존성을 추가해야합니다.
``` groovy
dependencies {

    // Android KTX
    implementation("androidx.activity:activity-ktx:1.4.0")
    implementation("androidx.fragment:fragment-ktx:1.3.6")
}
```
이제 `by viewModels()`로 `ViewModel`를 생성할 수 있습니다.
``` kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import androidx.activity.viewModels
import com.yologger.viewmodel.R
import com.yologger.viewmodel.domain.LoginUseCase

class LoginActivity : AppCompatActivity() {

    private val loginViewModel by viewModels<LoginViewModel>()

    private val loginButton: Button by lazy { findViewById(R.id.activity_login_btn_login) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        loginButton.setOnClickListener {
            loginViewModel.login()
        }
    }
}
```

`ViewModel`에 파라미터가 있다면 `ViewModelFactory`를 정의해야합니다.
``` kotlin
class LoginUseCase {

    fun execute() {
        // do something.
    }
}
```
``` kotlin
class LoginViewModelFactory(private val loginUseCase: LoginUseCase) : ViewModelProvider.Factory {
    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        return if (modelClass.isAssignableFrom(LoginViewModel::class.java)) {
            LoginViewModel(loginUseCase) as T
        } else {
            throw IllegalArgumentException()
        }
    }
}
```
``` kotlin
import androidx.lifecycle.ViewModel
import com.yologger.viewmodel.domain.LoginUseCase

class LoginViewModel(
    private val loginUseCase: LoginUseCase
) : ViewModel() {

    fun login() {
         loginUseCase.execute()
    }
}
```
파라미터가 있는 `ViewModel`은 다음과 같이 생성합니다.
``` kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import androidx.activity.viewModels
import com.yologger.viewmodel.R
import com.yologger.viewmodel.domain.LoginUseCase

class LoginActivity : AppCompatActivity() {

    private val loginUseCase: LoginUseCase by lazy { LoginUseCase() }

    private val loginViewModel by viewModels<LoginViewModel> { LoginViewModelFactory(loginUseCase) }

    private val loginButton: Button by lazy { findViewById(R.id.activity_login_btn_login) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        loginButton.setOnClickListener {
            loginViewModel.login()
        }
    }
}
```