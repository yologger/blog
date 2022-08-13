---
title: "Retrofit과 RxJava 함께 사용하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Retrofit과 RxJava 함께 사용하기
`Retrofit`과 `RxJava`를 함께 사용하는 방법에 대해 정리한다.

## 의존성 추가
`Retrofit` 응답을 `Observable`로 변환하기 위해서는 `adapter-rxjava3`을 추가해야 한다.
``` groovy {9}
dependencies {
    // RxJava
    implementation "io.reactivex.rxjava3:rxkotlin:3.0.0"
    implementation "io.reactivex.rxjava3:rxandroid:3.0.0"

    // Retrofit
    implementation 'com.squareup.retrofit2:retrofit:2.8.2'
    implementation 'com.squareup.retrofit2:converter-gson:2.8.2'
    implementation 'com.squareup.retrofit2:adapter-rxjava3:2.8.2'

    // MockWebServer
    testImplementation "com.squareup.okhttp3:mockwebserver:4.10.0"

    // Truth
    testImplementation 'com.google.truth:truth:1.1.3'
}
```

## 사용하기
`Retrofit`의 `Call` 대신 `RxJava`의 `Observable` 타입으로 반환이 가능하다.
``` kotlin
import io.reactivex.rxjava3.core.Observable

interface AuthApi {
    @POST("/auth/login")
    fun login(@Body request: LoginRequest): Observable<LoginResponse>
}
``` 
모델은 다음과 같다.
``` kotlin
import com.google.gson.annotations.SerializedName

data class LoginRequest (
    @SerializedName("email") val email: String,
    @SerializedName("password") val password: String
)
```
``` kotlin
data class LoginResponse (
    @SerializedName("user_id") val userId: Long,
    @SerializedName("access_token") val accessToken: String,
    @SerializedName("refresh_token") val refreshToken: String
)
```
`RxJava3CallAdapterFactory.create()`를 다음과 같이 추가한다.
``` kotlin {12}
import retrofit2.adapter.rxjava3.RxJava3CallAdapterFactory

private lateinit var authApi: AuthApi

val client = OkHttpClient.Builder()
    .build()

authApi = Retrofit.Builder()
    .client(client)
    .baseUrl(BASE_URL)
    .addConverterFactory(GsonConverterFactory.create())
    .addCallAdapterFactory(RxJava3CallAdapterFactory.create())
    .build()
    .create(AuthApi::class.java)
```
이제 다음과 같이 응답을 `Observable`로 반환받을 수 있다.
``` kotlin
val request = LoginRequest("paul@gmail.com", "1234")
authApi.login(request)
    .subscribe({ response ->
        // 성공
    }, { error ->
        // 실패
    }, {
        
    }).addTo(disposables)
```
`error`의 타입 비교를 통해 에러의 종류를 파악할 수 있다.
``` kotlin
val request = LoginRequest("paul@gmail.com", "1234")

authApi.login(request)
    .subscribe({ response ->
        // 2xx 성공
    }, { error ->
        when (error) {
            is HttpException -> {
                // 4xx, 5xx Error
                val errorCode: Int = error.code()
                val errorBody: ResponseBody? = error.response()?.errorBody()
            }
            is ConnectException -> {
                // Connection Error
                val message = error.message
            }
            else -> {
                // Other Errors
            }
        }
    }, {

    }).addTo(disposables)
```

## MockWebServer로 단위 테스트 하기
`Observable`클래스의 `blockingSubscribe()`메소드를 사용하면 동기적으로 네트워크 통신 후 응답을 수신할 수 있다.
``` kotlin
class AuthApiTest {

    lateinit var mockServer: MockWebServer
    lateinit var mockUrl: HttpUrl
    lateinit var client: OkHttpClient
    lateinit var authApi: AuthApi

    @Before
    fun setUp() {
        // Set up MockWebServer
        mockServer = MockWebServer()
        mockServer.start()

        // Set up Mock URL
        mockUrl = mockServer.url("/")

        // Set up Okhttp3 client
        client = OkHttpClient.Builder()
            .build()

        // Set up AuthApi
        authApi = Retrofit.Builder()
            .client(client)
            .baseUrl(mockUrl)
            .addConverterFactory(GsonConverterFactory.create())
            .addCallAdapterFactory(RxJava3CallAdapterFactory.create())
            .build()
            .create(AuthApi::class.java)
    }

    @After
    fun tearDown() {
        // Shut down MockWebServer
        mockServer.shutdown()
    }

    @Test
    fun `로그인 성공 테스트`() {
        // Given
        val dummyUserId: Long = 1
        val dummyAccessToken = "qwekjqwlkejlkqwe"
        val dummyRefreshToken = "123jl12j3kj123lk"

        // Create mock response
        val successResponse by lazy {
            MockResponse().apply {

                val jsonObject = JsonObject()
                jsonObject.addProperty("user_id", dummyUserId)
                jsonObject.addProperty("access_token", dummyAccessToken)
                jsonObject.addProperty("refresh_token", dummyRefreshToken)

                val gson = Gson()

                val jsonString = gson.toJson(jsonObject)

                addHeader("Content-Type", "application/json")
                setResponseCode(HttpURLConnection.HTTP_OK)
                setBody(jsonString)
            }
        }

        // Add response to mock server
        mockServer.enqueue(successResponse)

        // When
        val request = LoginRequest("paul@gmail.com", "1234")

        // Then
        authApi.login(request)
            .blockingSubscribe({response ->
                assertThat(response.userId).isEqualTo(dummyUserId)
                assertThat(response.accessToken).isEqualTo(dummyAccessToken)
                assertThat(response.refreshToken).isEqualTo(dummyRefreshToken)
            }, {error ->
                fail()
            }, {

            })
    }

    @Test
    fun `로그인 실패 테스트`() {
        // Given
        val dummyMessage = "Invalid email"

        // Create mock response
        val successResponse by lazy {
            MockResponse().apply {

                val jsonObject = JsonObject()
                jsonObject.addProperty("message", dummyMessage)

                val gson = Gson()

                val jsonString = gson.toJson(jsonObject)

                addHeader("Content-Type", "application/json")
                setResponseCode(HttpURLConnection.HTTP_BAD_REQUEST)
                setBody(jsonString)
            }
        }

        // Add response to mock server
        mockServer.enqueue(successResponse)

        // When
        val request = LoginRequest("paul@gmail.com", "1234")

        // Then
        authApi.login(request)
            .blockingSubscribe({response ->
                fail()
            }, { error ->
                if (error is HttpException) {
                    assertThat(error.code()).isEqualTo(HttpURLConnection.HTTP_BAD_REQUEST)
                } else {
                    fail()
                }
            })
    }
}
```

