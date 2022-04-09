---
title: "Shared Preference"
description: "Shared Preference"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---


# Shared Preference
`Shared Preference`를 사용하면 비교적 간단한 값을 저장할 수 있습니다. Shared Preference는 파일 형태로 아래 경로에 저장됩니다.

```
data/data/[pacakge_name]/shared_prefs/[file_name].xml
```
Shared Preference 파일에 저장된 데이터는 앱이 삭제되기 전까지 유지됩니다.

## Shared Preference 객체 생성하기

`Context`클래스에는 `getSharedPreferences()`메소드와 `getPreferences()`메소드가 선언되어있습니다.
``` java Context.java
package android.content;

public abstract class Context {
    public abstract SharedPreferences getSharedPreferences(String name, @PreferencesMode int mode);
    public abstract SharedPreferences getSharedPreferences(File file, @PreferencesMode int mode);
}
```

따라서 `Context`를 구현한 객체에서는 둘 중 하나의 메서드를 호출하여 새로운 Shared Preference 파일을 생성하거나 기존 파일에 접근할 수 있습니다. `액티비티(Activity)`도 `Context`클래스를 구현하므로 두 메소드를 호출할 수 있습니다.

### getSharedPreferences()
`getSharedPreferences()`는 함수의 첫 번째 인자로 전달되는 이름으로 파일을 생성하거나 구분합니다.
``` kotlin
private val YOUR_KEY = "your_key"
val sharedPref = activity?.getSharedPreferences(YOUR_KEY, Context.MODE_PRIVATE)
```

### getPreferences()
액티비티에서 하나의 Shared Preference 파일만 사용해야하는 경우 `getPreferences()`메서드를 사용합니다. 이 메서드는 액티비티에 포함된 기본 Shared Preference 파일을 자동으로 검색하므로 첫 번째 인자로 파일의 이름을 제공할 필요가 없습니다.
``` kotlin
val sharedPreference = activity?.getPreferences(Context.MODE_PRIVATE)
```

## Shared Prefenreces에 쓰기
SharedPreference의 `edit()`메소드를 호출하여 `Editor`객체를 생성합니다.
``` kotlin
private val YOUR_KEY = "your_key"
val sharedPref = activity?.getSharedPreferences(YOUR_KEY, Context.MODE_PRIVATE)

val editor = sharedPref.edit()
```
이제 `put○○○()`을 호출하여 데이터를 저장할 수 있습니다.
``` kotlin
edit.putString("name", "Monica")
edit.putInt("age", 35)
edit.putBoolean("is_married", false)
edit.putFloat("height", 168.3)
```
마지막으로 `commit()`을 호출하여 동기화합니다.
``` kotlin
edit.commit()
```

## Shared Prefrences에서 읽기
`SharedPreferences`객체의 `get()`를 호출하여 데이터를 읽어올 수 있습니다. 이 때 두 번째 인자로 값이 없을 때의 기본값을 지정합니다.
``` kotlin
private val YOUR_KEY = "your_key"
val sharedPref = activity?.getSharedPreferences(YOUR_KEY, Context.MODE_PRIVATE)

val name = sharedPref.getString("name", "")
val age = sharedPref.getInt("age", 0)
val isMarred = sharedPref.getBoolean("is_married", false)
val height = sharedPref.getFloat("height", 0.0)
```

## Context를 구현하지 않은 클래스
개발을 하다보면 `Context`클래스를 구현하지 않은 클래스에서도 `Shared Preferences`에 접근할 필요가 있습니다. 이 때는 `Application`클래스를 활용할 수 있습니다.

우선 `Application`클래스를 상속하는 `App`클래스를 정의합니다.
``` kotlin App.kt
import android.app.Application

class App: Application() {

    companion object {
        private lateinit var instance: App

        fun newInstance(): App {
            return instance
        }
    }

    override fun onCreate() {
        super.onCreate()
        instance = this
    }
}
``` 
`AndroidManifest.xml`파일에 `App`클래스를 지정합니다.
``` xml AndroidManifest.xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.yologger.shared_preference">

    <application android:name="com.yologger.shared_preference.App">
            <!-- ... -->
    </application>

</manifest>
```
이제 다음과 같이 `Shared Preferences`에 접근할 수 있습니다.
``` kotlin
class YourClass {
    private val sharedPreference = App.newInstance().getSharedPreferences("your_file_key", Context.MODE_PRIVATE)
}
```