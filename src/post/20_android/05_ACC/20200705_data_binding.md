---
title: "Data Binding"
description: "Data Binding"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents

[[toc]]

## Data Binding 등장 배경
다음과 같은 `레이아웃 XML 파일`이 있다고 가정합시다.
``` xml
// activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/activity_main_tv_name"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>

    <TextView
        android:id="@+id/activity_main_tv_nation"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>

</LinearLayout>
```

보통 액티비티에서는 `findViewById()`를 통해 뷰를 객채화합니다. 그리고 객체화한 뷰의 변수나 메소드로 UI를 수정합니다.
``` kotlin
// MainActivity.kt
class MainActivity : AppCompatActivity() {

    lateinit var textViewName: TextView
    lateinit var textViewNation: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        textViewName = findViewById(R.id.activity_main_tv_name)
        textViewNation = findViewById(R.id.activity_main_tv_nation)

        // 데이터
        val person = Person("Paul", "USA")

        // UI 수정
        textViewName.text = person.name
        textViewNation.text = person.nation
    }
}
```
``` kotlin
// MainActivity.kt
package com.yologger.project.data

data class Person(val name: String, val nation: String)
```

`Data Binding`을 사용하면 UI 요소와 데이터를 보다 쉽게 결합할 수 있습니다.

## 설정
`Data Binding`을 사용하려면 설정이 필요합니다.
``` groovy
// 모듈 수준의 build.gradle
android {
    dataBinding {
        enabled = true
    }
}
```

## 사용법
`Data Binding`을 사용하려면 레이아웃 XML 파일 전체를 `<layout>`태그로 감싸줘야합니다.
``` xml
// activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<layout>
    <LinearLayout
        xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:gravity="center"
        android:orientation="vertical"
        tools:context=".MainActivity">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"/>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"/>

    </LinearLayout>
</layout>
```

앱을 리빌드하면 `Binding 클래스`가 생성됩니다. 예를 들어 레이아웃 XML 파일이 `activity_main.xml`이라면 `ActivityMainBinding`클래스가 생성됩니다.

``` kotlin
// MainActivity.kt
class MainActivity : AppCompatActivity() {

    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        // ..
    }
}
```

이 클래스의 인스턴스는 `DataBindingUtil` 클래스를 사용하여 다음과 같이 초기화합니다.

``` kotlin
// MainActivity.kt
class MainActivity : AppCompatActivity() {

    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
    }
}
```

그 다음 `<data>`태그를 사용하여 변수를 추가합니다.
``` xml
// activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<layout>

    <data>
        <variable
            name="person"
            type="com.yologger.project.data.Person" />
    </data>

    <LinearLayout
        xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:gravity="center"
        android:orientation="vertical"
        tools:context=".MainActivity">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"/>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"/>

    </LinearLayout>
</layout>
```

이후 앱을 다시 한번 리빌드합니다. 그러면 `ActivityMainBinding`클래스에 `person`이라는 변수가 생성됩니다. 이 변수로 데이터를 전달합니다.
``` kotlin
// MainActivity.kt
class MainActivity : AppCompatActivity() {

    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)

        val person = Person("Paul", "USA")
        binding.person = person
    }
}
```

이제 레이아웃 XML 파일에서 전달받은 변수에 접근할 수 있습니다. 변수에 접근할 때는 `@{}`를 사용합니다.
``` xml
// activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<layout>

    <data>
        <variable
            name="person"
            type="com.yologger.project.data.Person" />
    </data>

    <LinearLayout
        xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:gravity="center"
        android:orientation="vertical"
        tools:context=".MainActivity">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="@{person.name}" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="@{person.nation}" />

    </LinearLayout>
</layout>
```

## ViewModel, LiveData와 함께 사용하기
`Data Binding`은 `ViewModel`, `LiveData`와 함께 사용할 수 있습니다. 간단한 로그인 화면 예제를 살펴보겠습니다.

`MainViewModel`클래스는 다음과 같습니다.
``` kotlin
// MainViewModel.kt
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MainViewModel: ViewModel() {

    val liveEmail: MutableLiveData<String> = MutableLiveData<String>().apply { value = "" }
    val livePassword: MutableLiveData<String> = MutableLiveData<String>().apply { value = "" }

    fun login() {
        // do something..
    }
}
```

`MainActivity`클래스는 다음과 같습니다.
``` kotlin
// MainActivity.kt
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.ViewModelProvider
import com.yologger.project.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    lateinit var viewModel: MainViewModel
    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // setContentView(R.layout.activity_main)
        viewModel = ViewModelProvider(this).get(MainViewModel::class.java)
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
        binding.lifecycleOwner = this
        binding.viewModel = viewModel
    }
}
```

`activity_main.xml`은 다음과 같습니다.
``` xml
// activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:tools="http://schemas.android.com/tools"
    xmlns:android="http://schemas.android.com/apk/res/android">

    <data>
        <variable
            name="viewModel"
            type="com.yologger.project.MainViewModel" />
    </data>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:gravity="center"
        android:orientation="vertical"
        tools:context=".MainActivity">

        <EditText
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="textEmailAddress"
            android:text="@={viewModel.liveEmail}"
            android:hint="email"/>

        <EditText
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:ems="10"
            android:inputType="textPassword"
            android:text="@={viewModel.livePassword}"
            android:hint="password"/>

        <Button
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:onClick="@{(view) -> viewModel.login()}"
            android:text="Login" />
    </LinearLayout>
</layout>
```

`@={}`는 `양방향 바인딩`이라고 합니다. `EditText`의 값을 수정하면 바인딩된 `LiveData`값도 변경됩니다. 변경된 값이 다시 `EditText`의 값도 수정되어야하므로 `양방향`이라는 표현을 사용합니다.

`@{(view) -> viewModel.login()}` 형태로 클릭 이벤트도 처리할 수 있습니다.

## BindingAdapter
`BindingAdapter`를 사용하면 `View`의 속성을 사용자가 직접 추가할 수 있습니다. 예제를 살펴보겠습니다. 예제는 `Switch`값에 따라 `View`의 가시성이 토글됩니다. (보였다가 안보였다가 합니다) 
``` xml
// activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:tools="http://schemas.android.com/tools"
    xmlns:android="http://schemas.android.com/apk/res/android">

    <data>
        <variable
            name="viewModel"
            type="com.yologger.project.MainViewModel" />
    </data>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:gravity="center"
        android:orientation="vertical"
        tools:context=".MainActivity">

        <View
            android:id="@+id/view"
            android:background="#FFA334"
            android:layout_width="200dp"
            android:layout_height="200dp" />

        <Switch
            android:id="@+id/switch1"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:onCheckedChanged="@{(switch, isChecked) -> viewModel.onCheckedChanged(isChecked)}"
            android:text="Invisible/Visible" />
    </LinearLayout>
</layout>
```

`MainViewModel`클래스는 다음과 같습니다.
``` kotlin 
// MainViewModel.kt
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MainViewModel: ViewModel() {

    val liveIsVisible: MutableLiveData<Boolean> = MutableLiveData<Boolean>().apply { value = false }

    fun onCheckedChanged(isChecked: Boolean) {
        liveIsVisible.value = isChecked
    }
}
```

`MainActivity`클래스는 다음과 같습니다.
``` kotlin
// MainViewModel.kt
import com.yologger.project.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    lateinit var viewModel: MainViewModel
    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // setContentView(R.layout.activity_main)
        viewModel = ViewModelProvider(this).get(MainViewModel::class.java)
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
        binding.lifecycleOwner = this
        binding.viewModel = viewModel
    }
}
```

`MainViewModel`은 `Boolean`타입의 `liveIsVisible`변수를 가지고 있습니다. 이 변수는 `true`, `false` 값만 가질 수 있습니다. 그러나 `View`의 가시성은 `true`, `false`가 아니라 다음과 같이 제어해야합니다.
``` kotlin
val view: View

view.visibility = View.VISIBLE
view.visibility = View.INVISIBLE
```

따라서 이 중간을 이어주는 무엇인가가 필요한데 이 것이 `BindingAdapter` 입니다. `BindingAdapter`는 다음과 같이 정의합니다.
``` kotlin
// ViewBindingAdapter.kt
object ViewBindingAdapter {

    @BindingAdapter("android:isVisible")
    @JvmStatic
    fun setVisibility(view: View, isVisible: Boolean) {
        view.visibility = if (isVisible) View.VISIBLE else View.INVISIBLE
    }
}
```

이제 레이아웃 XML 파일에서 마치 커스텀 속성처럼 `android:isVisible`을 사용할 수 있습니다.
``` xml
// activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:tools="http://schemas.android.com/tools"
    xmlns:android="http://schemas.android.com/apk/res/android">

    <data>
        <variable
            name="viewModel"
            type="com.yologger.project.MainViewModel" />
    </data>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:gravity="center"
        android:orientation="vertical"
        tools:context=".MainActivity">

        <View
            android:id="@+id/view"
            android:background="#FFA334"
            android:layout_width="200dp"
            android:isVisible="@{viewModel.liveIsVisible}"
            android:layout_height="200dp" />

        <Switch
            android:id="@+id/switch1"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:onCheckedChanged="@{(switch, isChecked) -> viewModel.onCheckedChanged(isChecked)}"
            android:text="Invisible/Visible" />
    </LinearLayout>
</layout>
```