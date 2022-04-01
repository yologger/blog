---
title: "스타일, 테마 관리하기"
description: "Theme, Style 관리하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents

[[toc]]

# Style, Theme
`Style`과 `Theme`을 사용하면 `UI`의 텍스트 색상, 텍스트 크기, 배경 색상 등을 일관성있게 관리할 수 있다. 

## Attribute
개별 `View`의 속성은 <b>`Attribute`</b>를 통해 관리할 수 있다. 다음 코드는 `Attribute`를 사용하여 버튼 색상, 텍스트 색상, 텍스트 크기, 텍스트 스타일을 설정하고 있다.
``` xml {4-7}
<Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:backgroundTint="@color/yellow_500"
    android:textColor="@color/black"
    android:textSize="15dp"
    android:textStyle="bold"
    android:text="Button" />
```

## Style
<b>`Style`</b>은 여러 `Attribute`를 함께 정의한 후 적용하는 방법이다. 파일명은 상관없으나 필자는 `res/style.xml`에 `Style`을 정의한다.
```xml
<!-- style.xml -->
<resources xmlns:tools="http://schemas.android.com/tools">
    <style name="MyButtonStyle">
        <item name="android:backgroundTint">@color/yellow_500</item>
        <item name="android:textColor">@color/black</item>
        <item name="android:textSize">15dp</item>
        <item name="android:textStyle">bold</item>
    </style>
</resources>
```
정의한 `Style`는 `style`속성으로 적용할 수 있다.
```xml{4}
<Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    style="@style/MyButtonStyle"
    android:text="Button" />
```

## Theme
`Style`이 지정한 대상에만 적용된다면 <b>`Theme`</b>은 하위 모든 요소들에 적용된다. 이러한 특성 때문에 `Theme`은 일반적으로 `Application`, `Activity`, `ViewGroup`에 적용한다. `Theme`도 파일명은 상관없으나 필자는 `res/theme/xml`에 정의한다.

다음과 같이 사용자 정의 `Theme`이 있다고 가정하자.
``` xml
<!-- theme.xml -->
<resources xmlns:tools="http://schemas.android.com/tools">

    <style name="Base.AppTheme" parent="Theme.MaterialComponents.DayNight.NoActionBar">
        <item name="colorPrimary">@color/purple_500</item>
        <item name="colorPrimaryVariant">@color/purple_700</item>
        <item name="colorOnPrimary">@color/white</item>
        <item name="colorSecondary">@color/teal_200</item>
        <item name="colorSecondaryVariant">@color/teal_700</item>
        <item name="colorOnSecondary">@color/black</item>
        <item name="android:statusBarColor" tools:targetApi="l">@color/white</item>
        <item name="android:windowLightStatusBar" tools:targetApi="m">true</item>
    </style>

    <style name="AppTheme" parent="Base.AppTheme">
    </style>

    <style name="AppTheme.Pink" parent="AppTheme">
        <!-- Primary brand color. -->
        <item name="colorPrimary">@color/pink_500</item>
        <item name="colorPrimaryVariant">@color/pink_700</item>
        <item name="colorOnPrimary">@color/white</item>
        <!-- Secondary brand color. -->
        <item name="colorSecondary">@color/yellow_500</item>
        <item name="colorSecondaryVariant">@color/yellow_700</item>
        <item name="colorOnSecondary">@color/black</item>
        <!-- Status bar color. -->
        <!-- Status bar color. -->
        <item name="android:statusBarColor" tools:targetApi="l">@color/black</item>
        <item name="android:windowLightStatusBar" tools:targetApi="m">false</item>
        <!-- Customize your theme here. -->
    </style>
</resources>
```
`Theme`은 `theme` 속성을 사용하여 적용한다. `Theme`을 애플리케이션에 적용해보자. 애플리케이션에 적용하면 모든 액티비티, 액티비티가 포함하는 모든 뷰에 적용된다.
``` xml{12}
<!-- AndroidManifest.xml -->
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.yologger.myapplication">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <!-- 중략 .. -->
    </application>

</manifest>
```

`Theme`은 액티비티에도 적용할 수 있다.
``` xml{19}
<!-- AndroidManifest.xml -->
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.yologger.myapplication">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">

        <activity
            android:name=".MainActivity"/>

        <activity
            android:name=".SubActivity"
            android:theme="@style/AppTheme.Pink" />

        <!-- 중략 .. -->
    </application>

</manifest>
```
`Theme`의 특징은 다음과 같다.
- `Application`, `Activity`, `ViewGroup`에 적용한다.
- 적용하는 곳과 모든 자식 `View`에도 적용된다.

## 우선순위
`Attribute`, `Style`, `Theme`의 우선순위는 다음과 같다.
- `Attribute` > `Style` > `Theme`

## Status Bar 대응하기
`Status Bar` 색상은 다음과 같이 대응할 수 있다.

``` xml 
<!-- 라이트 테마 -->
<resources xmlns:tools="http://schemas.android.com/tools">
    <!-- Base application theme. -->
    <style name="Base.AppTheme" parent="Theme.MaterialComponents.DayNight.NoActionBar">
        <!-- Status bar color. -->
        <item name="android:statusBarColor" tools:targetApi="l">@color/white</item>
        <!-- Status bar textcolor black -->
        <item name="android:windowLightStatusBar" tools:targetApi="m">true</item>
    </style>
</resources>
```
``` xml
<!-- 다크 테마 -->
<resources xmlns:tools="http://schemas.android.com/tools">
    <!-- Base application theme. -->
    <style name="Base.AppTheme" parent="Theme.MaterialComponents.DayNight.NoActionBar">
        <!-- Status bar color. -->
        <item name="android:statusBarColor" tools:targetApi="l">@color/black</item>
        <!-- Status bar textcolor black -->
        <item name="android:windowLightStatusBar" tools:targetApi="m">false</item>
    </style>
</resources>
```