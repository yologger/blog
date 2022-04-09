---
title: "레이아웃 인플레이트(Layout Inflate)"
description: "레이아웃 인플레이트(Layout Inflate)"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents

[[toc]]

## 인플레이트
`인플레이트(Inflate)`는 레이아웃 파일에 정의된 `뷰(View)`를 `객체화`하는 작업입니다.

예를 들어 안드로이드 스튜디오 프로젝트를 생성하면 `MainActivity.kt`와 `activity_main.xml`이 자동으로 생성됩니다. `activity_main.xml`이 레이아웃 파일이며, 개발자는 레이아웃 파일에 다양한 뷰를 추가하여 사용자 인터페이스를 구성합니다.

인플레이트는 이 레이아웃 파일에 정의된 뷰를 코드에서 사용할 수 있도록 객체화하는 작업을 의미합니다.

## 액티비티에서의 인플레이트
다음과 같은 레이아웃 파일이 있다고 가정합시다.
``` xml 
// activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView android:id="@+id/activity_main_tv"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="TextView"
        app:layout_constraintTop_toTopOf="parent"/>
    
</androidx.constraintlayout.widget.ConstraintLayout>
``` 

액티비티에서는 `setContentView()`메소드를 사용하여 레이아웃 파일을 인플레이트 합니다.
``` kotlin 
// MainActivity.kt
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}
```

이후 `findViewById()`를 사용하여 레이아웃에 있는 뷰를 참조할 수 있습니다.
``` kotlin 
// MainActivity.kt
class MainActivity : AppCompatActivity() {

    lateinit var textView: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        textView = findViewById<TextView>(R.id.activity_main_tv)
    }
}
```

`setContentView()`를 생략하고 앱을 실행하면 다음과 같은 에러가 발생합니다.

```
java.lang.RuntimeException: Unable to start activity ComponentInfo{MainActivity}: java.lang.IllegalStateException: findViewById<TextView>(R.id.activity_main_tv) must not be null
```

## 프래그먼트에서의 인플레이트
프래그먼트에서는 인플레이트하기 위해 시스템 서비스인 `레이아웃 인플레이터`를 사용합니다.

우선 프래그먼트의 레이아웃 파일은 다음과 같습니다.
``` xml 
// fragment_main.xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    tools:context=".SubFragment">

    <TextView android:id="@+id/fragment_sub_tv"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="SubFragment"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"/>

</androidx.constraintlayout.widget.ConstraintLayout>
```

프래그먼트는 생명주기 함수 `onCreateView()`에서 레이아웃 파일을 인플레이트 합니다. 안드로이드 시스템은 `onCreateView()`의 인자로 시스템 서비스인 `LayoutInflator`를 전달합니다. 이 클래스의 `inflate()`함수를 사용하여 레이아웃 파일을 인플레이트 할 수 있습니다.
``` kotlin 
// SubFragment.kt
class SubFragment : Fragment() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val rootView: View = inflater.inflate(R.layout.fragment_sub, container, false)
        return rootView
    }
}
```

인플레이트가 끝나면 `requireView()`나 `getView()`를 호출하여 레이아웃의 `루트 뷰`를 참조할 수 있습니다. `루트 뷰`란 레이아웃 파일의 뷰 계층 구조에서 가장 상단에 있는 뷰를 말합니다. 이 루트 뷰는 `onCreateView()`에서 반환한 뷰이기도 합니다.
``` kotlin 
// SubFragment.kt
class SubFragment : Fragment() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val rootView: View = inflater.inflate(R.layout.fragment_sub, container, false)
        return rootView
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        // val rootView = getView()
        val rootView = requireView()
    }
}
```

이제 루트 뷰의 `findViewById()`를 호출하여 자식 뷰에 접근할 수 있습니다.
``` kotlin 
// SubFragment.kt
class SubFragment : Fragment() {

    lateinit textView: TextView
    // ..

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val rootView = requireView()
        textView = rootView.findViewById(R.id.fragment_sub_tv)
    }
}
```