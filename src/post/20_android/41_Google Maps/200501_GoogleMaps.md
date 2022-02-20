---
title: "구글 지도(Google Maps)"
description: "Google AdMob으로 앱에 광고 넣기"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

## Google Maps 사용법

### SHA-1 인증키 발급
`Google Cloud Platform`, `Google Play`, `Google Firebase` 등의 서비스를 사용하다보면 `SHA-1 인증키`가 필요한 경우가 많습니다. `SHA-1 인증키`는 안드로이드 스튜디오에서 아래와 같이 발급할 수 있습니다.

우선 프로젝트를 열고 `[Gradle] > [Task] > [android] > [signingReport]`를 클릭합니다.

![](./200501_GoogleMaps/1.png)

그럼 하단 로그에 다음과 같이 `SHA1 인증키`가 출력됩니다.

![](./200501_GoogleMaps/2.png)


### API Key 발급
`Google Maps API`를 사용하려면 `API Key`를 발급받아야 합니다. [https://cloud.google.com/](https://cloud.google.com/)에서 로그인하고 오른쪽 상단에 있는 콘솔 버튼을 눌러줍니다.

![](./200501_GoogleMaps/3.png)

`API 및 서비스`에 들어갑니다.

![](./200501_GoogleMaps/4.png)

프로젝트를 하나도 추가하지 않았다면 다음과 같은 화면이 나옵니다. 오른쪽 `프로젝트 만들기`를 클릭합니다.

![](./200501_GoogleMaps/5.png)

`프로젝트 이름`을 입력하고 `만들기`를 클릭합니다.

![](./200501_GoogleMaps/6.png)

프로젝트가 생성되었습니다. 왼쪽 사이드 바 메뉴에서 `[API 및 서비스] > [대시보드]`로 들어갑니다

![](./200501_GoogleMaps/7.png)

상단 중앙의 `API 및 서비스 사용 설정`을 클릭합니다.

![](./200501_GoogleMaps/8.png)

`Maps SDK for Android`를 선택합니다.

![](./200501_GoogleMaps/9.png)

`사용` 버튼을 누릅니다.

![](./200501_GoogleMaps/10.png)

왼쪽 메뉴에서 `사용자 인증 정보`를 누르고 상단의 `사용자 인증 정보 만들기`를 클릭한 후 `API 키`를 선택합니다.

![](./200501_GoogleMaps/11.png)

`키 제한`을 클릭합니다. `키 제한`은 실제 배포되는 앱에서 키가 무단으로 사용되는 것을 방지하기 위함입니다.

![](./200501_GoogleMaps/12.png)

키의 `이름`은 임의로 설정합니다. 

![](./200501_GoogleMaps/13.png)

키를 `Android 앱`에서만 사용할 수 있도록 제한할 수 있습니다.

![](./200501_GoogleMaps/14.png)

`Google Cloud Platform`은 여러 API를 제공합니다. 이 중에서 `안드로이드를 위한 맵 API`만 사용하도록 제한할 수도 있습니다.

![](./200501_GoogleMaps/15.png)

아래와 같이 `앱의 사용량`도 제한할 수 있습니다. 이때 항목 추가를 누르고 위 안드로이드 스튜디오 프로젝트에서 발급한 `SHA-1 인증키`와 `패키지 이름`을 입력합니다. 이후 `완료` 버튼을 누르고 하단의 `저장` 버튼을 누릅니다.

![](./200501_GoogleMaps/16.png)


### 안드로이드 스튜디오에서 구글 맵스 설정
`Google Maps Android API`를 사용하려면 `Google Play Services` 라이브러리를 설치해야합니다. 

안드로이드 스튜디오에서 `SDK Manager`에 들어가서 `SDK Tools`를 선택합니다. `Google player services`를 체크하고 `OK` 버튼을 눌러 설치합니다.

![](./200501_GoogleMaps/17.png)

이제 모듈 수준의 `build.gradle`에 의존성을 추가해줍니다.
``` groovy
dependencies {
    implementation 'com.google.android.gms:play-services-maps:17.0.1'
    implementation 'com.google.android.gms:play-services-location:18.0.0'
}
```

### 레이아웃에 구글 맵스 추가하기
이제 `구글 맵스(Google Maps)`에서 서울을 표시해보겠습니다. 레이아웃에 다음과 같이 구글 맵스와 관련된 프래그먼트를 추가합니다.
``` xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <fragment xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:tools="http://schemas.android.com/tools"
        tools:context=".MapsActivity"
        android:id="@+id/activity_main_fragment_map"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:name="com.google.android.gms.maps.SupportMapFragment" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

다음과 같이 코드를 작성합니다.
``` kotlin
class MainActivity : AppCompatActivity() {

    private lateinit var mMap: GoogleMap

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val mapFragment: SuppoortMapFragment = supportFragmentManager.findFragmentById(R.id.activity_main_fragment_map) as SupportMapFragment
        mapFragment.getMapAsync(object : OnMapReadyCallback {
            override fun onMapReady(googleMap: GoogleMap) {
                // ...
            }
        })
    }
}
```
`SuppoortMapFragment`클래스의 `getMapAsync()`메소드는 구글 맵스와 관련된 프래그먼트를 비동기적으로 준비하고 `onMapReady()`를 호출합니다. 이때 `onMapReady()`메소드의 매개변수로 지도 데이터가 전달됩니다. 

위 코드는 다음과 같이 변경할 수도 있습니다. 
``` kotlin
class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private lateinit var mMap: GoogleMap

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val mapFragment = supportFragmentManager.findFragmentById(R.id.activity_main_fragment_map) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }

    override fun onMapReady(googleMap: GoogleMap) {
        // ...
    }
}
```
준비가 되면 실행할 코드를 `onMapReady()`에 서울의 위치를 보여주는 코드를 작성합니다.
``` kotlin
class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private lateinit var mMap: GoogleMap

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val mapFragment = supportFragmentManager.findFragmentById(R.id.activity_main_fragment_map) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }

    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap
        val seoul = LatLng(37.5665, 126.9780)
        mMap.moveCamera(CameraUpdateFactory.newLatLng(seoul))
    }
}
```

앱을 실행하면 서울 위치가 화면에 나옵니다.

![](./200501_GoogleMaps/18.png)

## 지도 타입
`구글 지도(Google Maps) API`는 여러 타입의 지도를 제공합니다. `setMapType()`메서드를 사용하면 지도의 타입을 변경할 수 있습니다. 우선 인공위성 타입의 지도입니다.

``` kotlin
class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private lateinit var mMap: GoogleMap

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val mapFragment = supportFragmentManager.findFragmentById(R.id.activity_main_fragment_map) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }

    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap
        val seoul = LatLng(37.5665, 126.9780)
        mMap.moveCamera(CameraUpdateFactory.newLatLng(seoul))

        // 위성 지도
        mMap.setMapType(GoogleMap.MAP_TYPE_SATELLITE)
    }
}
```

![](./200501_GoogleMaps/19.png)

표준 타입의 지도는 다음과 같이 보여줄 수 있습니다.
``` kotlin
class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    // ..

    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap
        val seoul = LatLng(37.5665, 126.9780)
        mMap.moveCamera(CameraUpdateFactory.newLatLng(seoul))

        // 표준 지도
        mMap.setMapType(GoogleMap.MAP_TYPE_NORMAL)
    }
}
```

![](./200501_GoogleMaps/20.png)

그 밖에도 다양한 타입의 지도를 제공합니다.
- `GoogleMap.MAP_TYPE_NONE`: 격자선 없이 나타납니다.
- `GoogleMap.MAP_TYPE_NORMAL`: 전형적인 도로 지도로 구성되는 표준 뷰입니다.
- `GoogleMap.MAP_TYPE_SATELLITE`: 해당 지도 영역의 인공위성 사진을 보여줍니다
- `GoogleMap.MAP_TYPE_HYBRID`: 도로 지도가 겹쳐진 인공위성 사진을 보여줍니다
- `GoogleMap.MAP_TYPE_TERRAIN`: 등고선과 색상 등의 지형 정보가 나타납니다.

## 마커
`GoogleMap`클래스의 `addMarker()`메소드를 사용하면 지도에 `마커(Marker)`를 표시할 수 있습니다.
``` kotlin
class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private lateinit var mMap: GoogleMap

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val mapFragment = supportFragmentManager.findFragmentById(R.id.activity_main_fragment_map) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }

    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap
        
        // 시드니
        val sydney = LatLng(-33.8688, 151.2093)
        mMap.addMarker(MarkerOptions().position(sydney).title("Marker in Sydney"))

        // 서울
        val seoul = LatLng(37.5665, 126.9780)
        mMap.addMarker(MarkerOptions().position(seoul).title("Marker in Seoul"))

        // 도쿄
        val tokyo = LatLng(35.6804, 139.7690)
        mMap.addMarker(MarkerOptions().position(tokyo).title("Marker in Tokyo"))

        // 위성 지도
        mMap.setMapType(GoogleMap.MAP_TYPE_SATELLITE)

        // 시드니로 카메라 이동
        mMap.moveCamera(CameraUpdateFactory.newLatLng(sydney))
    }
}
```

![](./200501_GoogleMaps/21.png)

마커를 선택하면 제목을 확인할 수 있습니다.

![](./200501_GoogleMaps/22.png)

## 줌-인, 줌-아웃
지도를 확대하는 것을 `줌-인(Zoom-in)`, 축소하는 것을 `줌-아웃(Zoom-out)`이라고 합니다. 예제를 만들면서 `줌-인`과 `줌-아웃`에 대해 알아보겠습니다.

우선 다음과 같이 두 개의 버튼을 추가합니다.

![](./200501_GoogleMaps/23.png)

레이아웃 파일은 다음과 같습니다.

``` xml
// activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <fragment xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/activity_main_fragment_map"
        tools:context=".MapsActivity"
        android:name="com.google.android.gms.maps.SupportMapFragment" />

    <com.google.android.material.floatingactionbutton.FloatingActionButton
        android:id="@+id/activity_fab_zoom_in"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:clickable="true"
        app:srcCompat="@drawable/ic_baseline_add_24"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_margin="16dp"/>

    <com.google.android.material.floatingactionbutton.FloatingActionButton
        android:id="@+id/activity_fab_zoom_out"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:clickable="true"
        app:srcCompat="@drawable/ic_baseline_remove_24"
        app:layout_constraintTop_toBottomOf="@+id/activity_fab_zoom_in"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_margin="16dp"/>

</androidx.constraintlayout.widget.ConstraintLayout>
```

코드는 다음과 같습니다. 카메라 위치를 바꿀 때는 `GoogleMap`클래스의 `moveCamera()`메소드를 호출합니다. 이 때 `줌-인`을 하려면 `CameraUpdateFactory.zoomIn()`을 `줌-아웃`을 하려면 `CameraUpdateFactory.zoomOut()`을 인자로 전달합니다.

``` kotlin
// MainActivity.kt

class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private lateinit var mMap: GoogleMap
    private val buttonZoomIn: FloatingActionButton by lazy { findViewById<FloatingActionButton>(R.id.activity_fab_zoom_in) }
    private val buttonZoomOut: FloatingActionButton by lazy { findViewById<FloatingActionButton>(R.id.activity_fab_zoom_out) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val mapFragment = supportFragmentManager.findFragmentById(R.id.activity_main_fragment_map) as SupportMapFragment
        mapFragment.getMapAsync(this)

        buttonZoomIn.setOnClickListener {
            mMap.moveCamera(CameraUpdateFactory.zoomIn())
        }

        buttonZoomOut.setOnClickListener {
            mMap.moveCamera(CameraUpdateFactory.zoomOut())
        }
    }

    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap
        val sydney = LatLng(37.5665, 126.9780)
    }
}
```

이제 (+) 버튼을 누르면 줌-인, (-) 버튼을 누르면 줌-아웃이 됩니다. `zoomTo()`메소드를 사용하면 특정 줌으로 이동할 수 있습니다.

## 내 위치 보여주기
내 위치 정보를 가져오려면 권한이 필요합니다. `AndroidManifest.xml`에 권한을 추가합니다.
``` xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.yologger.example_android_google_maps">

    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>

    <!-- ... -->

</manifest>
```

`GoogleMap` 객체의 `setMyLocationEnable()`을 호출하면 지도에 내 현재 위치를 표시할 수 있습니다. 우선 지도의 초기 화면은 시드니로 설정합니다.
``` kotlin
class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private var mMap: GoogleMap? = null

    companion object {
        const val REQUEST_CODE_PERMISSIONS = 1
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val mapFragment = supportFragmentManager.findFragmentById(R.id.activity_main_fragment_map) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }

    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap

        val sydney = LatLng(-33.8688, 151.2093)
        mMap?.moveCamera(CameraUpdateFactory.newLatLng(sydney))

        // ...
    }
}

```
위치 정보는 위험 권한이므로 권한을 확인해야합니다. 다음과 같이 권한 관련 코드를 추가합시다.

``` kotlin
class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private var mMap: GoogleMap? = null

    companion object {
        const val REQUEST_CODE_PERMISSIONS = 1
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val mapFragment = supportFragmentManager.findFragmentById(R.id.activity_main_fragment_map) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }

    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap

        val sydney = LatLng(-33.8688, 151.2093)
        mMap?.moveCamera(CameraUpdateFactory.newLatLng(sydney))

        val hasFineLocationPermission = ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)
        val hasCoarseLocationPermission = ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION)

        if (hasFineLocationPermission != PackageManager.PERMISSION_GRANTED && hasCoarseLocationPermission != PackageManager.PERMISSION_GRANTED) {
            // 권한이 없을 때 권한 요청
            ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION), REQUEST_CODE_PERMISSIONS)
        } else {
            // 권한이 있을 때
            mMap?.setMyLocationEnabled(true)
        }
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        when (requestCode) {
            REQUEST_CODE_PERMISSIONS -> {
                if(grantResults.isNotEmpty()) {
                    for ((i, permission) in permissions.withIndex()) {
                        isPermissionsGranted = grantResults[i] == PackageManager.PERMISSION_GRANTED
                    }
                }
            }
            else -> {
                Toast.makeText(this@MainActivity, "Permissions denied.", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
```
마지막으로 `GoogleMap`객체의 `setMyLocationEnabled(true)`를 호출합니다.

``` kotlin
class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    // ...

    override fun onMapReady(googleMap: GoogleMap) {

        // ...

        if (hasFineLocationPermission != PackageManager.PERMISSION_GRANTED && hasCoarseLocationPermission != PackageManager.PERMISSION_GRANTED) {
            // 권한이 없을 때 권한 요청
            ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION), REQUEST_CODE_PERMISSIONS)
        } else {
            // 권한이 있을 때
            mMap?.setMyLocationEnabled(true)
        }
    }

    // ...
}
```
이제 앱을 실행해봅시다. 초기 화면은 시드니로 설정되어있습니다.

![](./200501_GoogleMaps/24.png)

지도를 이동시켜 본인의 위치로 이동하면 파란 점을 확인할 수 있습니다. 이 점이 본인의 위치입니다.

![](./200501_GoogleMaps/25.png)

## 위치 권한
내 위치 정보를 가져오려면 권한이 필요합니다. `AndroidManifest.xml`에 권한을 추가합니다.
``` xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.yologger.example_android_google_maps">

    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>

    <!-- ... -->

</manifest>
``` 
`시스템 서비스`의 `LocationManager`를 사용하면 현재 위치를 가져올 수 있습니다. 
``` kotlin
val locationManager = getSystemService(Context.LOCATION_SERVICE) as LocationManager
```
위치는 두 가지 방법으로 가져올 수 있습니다.

### GPS 기반의 위치
인공위성으로 현재 위치를 알아냅니다. GPS로 위치를 알아낼 수 있는지 여부는 다음과 같이 확인할 수 있습니다.
``` kotlin
val isGPSEnable = locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER)

if (isGPSEnable) {
    val location = locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER)
} else {
    // ...
}
```

### NETWORK 기반의 위치
기기 주변의 Cell Tower나 Wi-Fi Access Point로 현재 위치를 알아냅니다. 네트워크로 위치를 알아낼 수 있는지의 여부는 다음과 같이 확인할 수 있습니다. 
``` kotlin
val isNetworkEnabled = locationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER)

if (isNetworkEnabled) {
    val location = locationManager.getLastKnownLocation(LocationManager.NETWORK_PROVIDER)
} else {
    // ...
}
```

## 지도를 내 위치로 이동하기
버튼을 눌렀을 때 권한을 체크하고, 권한이 있으면 현재 위치로 이동하는 예제입니다.

![](./200501_GoogleMaps/26.png)

위치 정보는 위험 권한이므로 런타임에서 권한 체크를 해야합니다. 버튼을 눌렀을 때 권한을 먼저 확인합시다.
``` kotlin
class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private var mMap: GoogleMap? = null

    private val buttonCurrentLocation: FloatingActionButton by lazy { findViewById<FloatingActionButton>(R.id.activity_fab_current_location) }

    companion object {
        const val REQUEST_CODE_PERMISSIONS = 1
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val mapFragment = supportFragmentManager.findFragmentById(R.id.activity_main_fragment_map) as SupportMapFragment
        mapFragment.getMapAsync(this)

        // 버튼을 눌렀을 때
        buttonCurrentLocation.setOnClickListener {
            moveToCurrentPosition()
        }
    }

    private fun moveToCurrentPosition() {

        val hasFineLocationPermission = ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)
        val hasCoarseLocationPermission = ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION)

        if (hasFineLocationPermission != PackageManager.PERMISSION_GRANTED && hasCoarseLocationPermission != PackageManager.PERMISSION_GRANTED) {
            // 권한이 없을 경우 권한 요청
            ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION), REQUEST_CODE_PERMISSIONS)
        } else {
            // 권한이 있을 경우
            // ...
        }
    }

    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap

        val sydney = LatLng(-33.8688, 151.2093)
        mMap.addMarker(MarkerOptions().position(sydney).title("Marker in Sydney"))
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        when (requestCode) {
            REQUEST_CODE_PERMISSIONS -> {
                if(grantResults.isNotEmpty()) {
                    for ((i, permission) in permissions.withIndex()) {
                        isPermissionsGranted = grantResults[i] == PackageManager.PERMISSION_GRANTED
                    }
                }
            }
            else -> {
                Toast.makeText(this@MainActivity, "Permissions denied.", Toast.LENGTH_SHORT).show()
            }
        }
    }
}

```
이제 권한이 있으면 `LocationManager`클래스의 `getLastKnownLocation()`메소드를 호출하여 현재 위치를 가져올 수 있습니다. `GoogleMap`클래스의 `moveCamera()`에 위치 정보를 전달하면 구글 지도의 위치를 현재 위치로 이동시킬 수 있습니다.
``` kotlin
class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    // ...

    private fun moveToCurrentPosition() {

        val hasFineLocationPermission = ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)
        val hasCoarseLocationPermission = ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION)

        if (hasFineLocationPermission != PackageManager.PERMISSION_GRANTED && hasCoarseLocationPermission != PackageManager.PERMISSION_GRANTED) {
            // 권한이 없으면 권한 요청
            ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION), REQUEST_CODE_PERMISSIONS)

        } else {
            // 권한이 있으면 위치정보 가져오기
            val locationManager = getSystemService(Context.LOCATION_SERVICE) as LocationManager
            val isGPSEnable = locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER)
            val isNetworkEnabled = locationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER)

            if (isGPSEnable) {
                val location = locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER)
                location?.run {
                    val latitude = location.latitude
                    val longitude  = location.longitude
                    val myLocation = LatLng(latitude, longitude)
                    mMap?.moveCamera(CameraUpdateFactory.newLatLng(myLocation))
                }

            } else if (isNetworkEnabled) {
                val location = locationManager.getLastKnownLocation(LocationManager.NETWORK_PROVIDER)
                location?.run {
                    val latitude = location.latitude
                    val longitude  = location.longitude
                    val myLocation = LatLng(latitude, longitude)
                    mMap?.moveCamera(CameraUpdateFactory.newLatLng(myLocation))
                }
            } else {
                Toast.makeText(this@MainActivity, "Your device doesn't support location service.", Toast.LENGTH_SHORT).show()
            }
        }
    }
    // ... 
```
이제 버튼을 누르고 권한을 허락하면 현재 위치로 지도가 이동합니다.

## 맵 컨트롤
우리는 이전 포스트에서 `줌 인 버튼`과 `줌 아웃 버튼`, `내 위치 버튼`을 직접 만들고 구현했습니다. 구글 맵 API는 이러한 기능을 위한 여러 `컨트롤`을 자체적으로 제공합니다. `UiSetting`클래스의 `setZoomControlsEnable(true)`메소드를 사용하면 됩니다.

우선 `GoogleMap`객체에서 `UiSettings`객체를 가져옵니다.
``` kotlin
val mapSettings: MapSettings? = mMap?.uiSettings
```
그리고 `setZoomControlsEnable(true)`메소드를 호출합니다.
``` kotlin
mapSettings?.setZoomControlsEnabled(true)
```
앱을 실행하면 `줌-인`과 `줌-아웃 버튼`, `현재 내 위치 버튼`이 나타납니다.

![](./200501_GoogleMaps/27.png)

내 위치 버튼에서 위치 정보를 사용하므로 권한 설정 코드가 필요합니다. 전체 코드는 다음과 같습니다.
``` kotlin
class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private var mMap: GoogleMap? = null

    companion object {
        const val REQUEST_CODE_PERMISSIONS = 1
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val mapFragment = supportFragmentManager.findFragmentById(R.id.activity_main_fragment_map) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }

    override fun onMapReady(googleMap: GoogleMap) {

        mMap = googleMap

        // 초기 위치 설정
        val sydney = LatLng(-33.8688, 151.2093)
        mMap?.moveCamera(CameraUpdateFactory.newLatLng(sydney))

        val hasFineLocationPermission = ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)
        val hasCoarseLocationPermission = ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION)

        if (hasFineLocationPermission != PackageManager.PERMISSION_GRANTED && hasCoarseLocationPermission != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION), REQUEST_CODE_PERMISSIONS)
        } else {

            // MapSettings 객체 가져오기
            val mapSettings: MapSettings? = mMap?.uiSettings

            mapSettings?.run {
                // 컨트롤 보여주기
                setZoomControlsEnabled(true)
            }
        }
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        when (requestCode) {
            REQUEST_CODE_PERMISSIONS -> {
                if(grantResults.isNotEmpty()) {
                    for ((i, permission) in permissions.withIndex()) {
                        isPermissionsGranted = grantResults[i] == PackageManager.PERMISSION_GRANTED
                    }
                }
            }
            else -> {
                Toast.makeText(this@MainActivity, "Permissions denied.", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
```