---
title: "View Binding"
description: "View Binding"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents

[[toc]]

## View Binding 등장 배경
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
        android:id="@+id/activity_main_tv"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="TextView"/>

    <Button
        android:id="@+id/activity_main_btn"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Button"/>
</LinearLayout>
```

보통 액티비티에서는 `findViewById()`를 통해 뷰를 탐색합니다.
``` kotlin
// MainActivity.kt
class MainActivity : AppCompatActivity() {

    lateinit var textView: TextView
    lateinit var button: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        textView = findViewById(R.id.activity_main_tv)
        button = findViewById(R.id.activity_main_btn)

        textView.text = "This is TextView"
        button.text = "This is Button"
        button.setOnClickListener {
            Toast.makeText(this@MainActivity, "Button Clicked.", Toast.LENGTH_SHORT).show()
        }
    }
}
```

`View Binding`을 사용하면 `findViewById()`를 사용하지않고 간편하게 뷰를 탐색할 수 있습니다.

## 설정
`View Binding`을 사용하려면 설정이 필요합니다. 안드로이드 스튜디오 4.0 이상이라면
``` groovy
// 모듈 수준의 build.gradle
android {
    buildFeatures {
        viewBinding = true
    }
}
```
안드로이드 스튜디오가 4.0 미만이라면 다음과 같이 설정합니다.
``` groovy
// 모듈 수준의 build.gradle
<!-- tab groovy -->
android {
    viewBinding {
        enabled = true
    }
}
```

## 사용법
`View Binding`을 설정하면 레이아웃 XML 파일에 대응하는 `Binding 클래스`가 생성됩니다. 예를 들어 레이아웃 XML 파일이 `activity_main.xml`이라면 `ActivityMainBinding`클래스가 생성됩니다. 이 클래스를 사용하여 아래와 같이 초기화합니다. 
``` kotlin
// MainActivity.kt
import com.yologger.project.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
    }
}
```

이제 `binding`변수로 레이아웃 XML 파일의 뷰를 조작할 수 있습니다.
``` kotlin
// MainActivity.kt
import com.yologger.project.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        binding.activityMainTv.text = "This is TextView"
        binding.activityMainBtn.text = "This is Button"
        binding.activityMainBtn.setOnClickListener {
            Toast.makeText(this@MainActivity, "Button Clicked.", Toast.LENGTH_SHORT).show()
        }
    }
}
```