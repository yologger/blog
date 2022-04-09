---
title: "코드에서 환경변수 분리하기 - BuildConfig"
description: "코드에서 환경변수 분리하기 - BuildConfig"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# BuildConfig
안드로이드 시스템은 앱을 빌드할 때 여러가지 파일을 자동으로 생성합니다. 그 중 하나가 `BuildConfig`클래스입니다. 이 클래스에는 현재 빌드와 관련된 정보가 상수 형태로 정의되어 있으며, 코드에서도 직접 참조할 수 있습니다.

## 코드에서 BuildConfig에 접근하기
자동으로 생성된 `BuildConfig`클래스는 다음과 같습니다.
``` java 
// BuildConfig.java

public final class BuildConfig {
    public static final boolean DEBUG = Boolean.parseBoolean("true");
    public static final String APPLICATION_ID = "com.yologger.example";
    public static final String BUILD_TYPE = "debug";
    public static final int VERSION_CODE = 1;
    public static final String VERSION_NAME = "1.0";
}
```

`BuildConfig`클래스에 정의된 상수는 코드에서 다음과 같이 접근할 수 있습니다.
``` kotlin 
// MainActivity.kt

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val applicationId = BuildConfig.APPLICATION_ID  // "com.yologger.example"
        val versionCode = BuildConfig.VERSION_CODE      // 1
    }
}
```

그렇다면 이 상수는 어디에 정의되어 있을까요? 바로 모듈 수준의 `build.gradle`입니다. 이 파일의 `defaultConfig 섹션`에 상수가 정의되어 있습니다.
``` groovy 
// 모듈 수준의 build.gradle

android {
    defaultConfig {
        applicationId "com.yologger.example"
        minSdkVersion 21
        targetSdkVersion 30
        versionCode 1
        versionName "1.0"
    }
    // ...
}
```

## 상수를 직접 정의하고 사용하기
`buildConfigField`를 사용하면 상수를 직접 정의하고 코드에서 참조할 수도 있습니다. 모듈 수준의 `build.gradle`에 `buildConfigField ("DATA_TYPE", "KEY", "VALUE")` 형태로 선언하면 됩니다.
``` groovy 
// 모듈 수준의 build.gradle

android {
    defaultConfig {
        applicationId "com.yologger.example"
        minSdkVersion 21
        targetSdkVersion 30
        versionCode 1
        versionName "1.0"
        
        buildConfigField ("String", "AUTH_API_KEY", '"your_auth_api_key"')
        buildConfigField ("String", "AUTH_API_URL", '"your_auth_api_url"')
    }
}
```

::: tip
추가 후 `Gradle Sync`를 해야만 BuildConfig 클래스가 생성됩니다.
:::

::: tip
문자열의 경우 작은 따옴표로 감싸주어야 합니다.
:::

새로 생성된 `BuildConfig`클래스는 다음과 같습니다.
``` java 
// BuildConfig.java

package com.example.simple_memo;

public final class BuildConfig {
  public static final boolean DEBUG = Boolean.parseBoolean("true");
  public static final String APPLICATION_ID = "com.yologger.example";
  public static final String BUILD_TYPE = "debug";
  public static final int VERSION_CODE = 1;
  public static final String VERSION_NAME = "1.0";
  // Field from default config.
  public static final String AUTH_API_KEY = "your_auth_api_key";
  // Field from default config.
  public static final String AUTH_API_URL = "your_auth_api_url";
}
```

생성된 상수에 접근해봅시다.
``` kotlin 
// MainActivity.kt

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val apiKey = BuildConfig.AUTH_API_KEY       // your_auth_api_key
        val apiUrl = BuildConfig.AUTH_API_URL       // your_auth_api_url
    }
}
```

## 상수를 xml 파일에서 사용하기
`xml 파일`에서 사용할 상수는 `resValue`를 사용하여 선언합니다.
``` groovy 
// build.gradle

android {
    defaultConfig {
        ...
        // buildConfigField ("String", "AUTH_API_KEY", '"your_auth_api_key"')
        // buildConfigField ("String", "AUTH_API_URL", '"your_auth_api_url"')
        resValue "string", "CLIENT_ID", "your_client_id"
        resValue "string", "CLIENT_SECRET", "your_client_secret"
    }
}
```
다음과 같이 사용할 수 있습니다.
``` xml 
// activity_main.xml

<TextView android:text="@string/CLIENT_ID"/>
<TextView android:text="@string/CLIENT_SECRET"/>
```