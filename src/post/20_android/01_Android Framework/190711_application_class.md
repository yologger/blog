---
title: "Application 클래스"
description: "Application 클래스"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Application 클래스
`Application`클래스는 앱의 실행과 동시에 생성되는 객체입니다. `Application`클래스는 메모리에 오직 하나의 인스턴스로만 존재하는 싱글톤 객체며, 주로 컴포넌트 사이에서 데이터를 공유하는데 사용할 수 있습니다.

우선 `Application`클래스를 상속하는 서브클래스를 정의합니다.
``` java
package com.yologger.example

import android.app.Application;
import android.content.res.Configuration;

public class App extends Application {
    
    public String url = "https://www.naver.com";

    @Override
    public void onCreate() {
        super.onCreate();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
    }
}
```

이제 `AndroidManifest.xml`에 등록합니다.
``` xml AndroidManifest.xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
package="com.yologger.example">

    <application
        android:name="com.yologger.example.App">
            <!-- ... -->
    </application>
</manifest>
``` 


이제 `getApplication()`메소드를 사용하면 어느 컴포넌트에서든 공유 클래스에 접근할 수 있습니다.
``` kotlin MainActivity.kt
public class MainActivity extends Activity {

    private App app;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        app = (App)getApplication();
        String apiUrl = app.url
    }
}
```