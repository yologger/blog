---
title: "Retrofit2 단위 테스트"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

``` groovy
// Retrofit
implementation 'com.squareup.retrofit2:retrofit:2.8.2'
implementation 'com.squareup.retrofit2:converter-gson:2.8.2'

// MockWebServer
testImplementation "com.squareup.okhttp3:mockwebserver:4.10.0"

// Truth
testImplementation 'com.google.truth:truth:1.1.3'
```
``` kotlin
import com.google.gson.annotations.SerializedName

data class LoginRequest (
    @SerializedName("email") val email: String,
    @SerializedName("password") val password: String
)
```
``` kotlin
import com.google.gson.annotations.SerializedName

data class LoginResponse (
    @SerializedName("user_id") val userId: Long,
    @SerializedName("access_token") val accessToken: String,
    @SerializedName("refresh_token") val refreshToken: String
)
```
``` kotlin
```