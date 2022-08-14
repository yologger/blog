---
title: "Retrofit과 Coroutine 함께 사용하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Retrofit과 RxJava 함께 사용하기
`Retrofit`과 `RxJava`를 함께 사용하는 방법에 대해 정리한다.

## 의존성 추가
`Retrofit`은 `Coroutine`과도 함께 사용할 수 있다.
``` groovy {9}
dependencies {
    // Coroutine
    implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.9'

    // Retrofit
    implementation 'com.squareup.retrofit2:retrofit:2.8.2'
    implementation 'com.squareup.retrofit2:converter-gson:2.8.2'

    // MockWebServer
    testImplementation "com.squareup.okhttp3:mockwebserver:4.10.0"

    // Truth
    testImplementation 'com.google.truth:truth:1.1.3'
}
```

## 사용하기
이제 `Retrofit` 인터페이스의 메소드를 `suspend`로 선언할 수 있다.
`Retrofit`의 `Call` 대신 `RxJava`의 `Observable` 타입으로 반환이 가능하다.
``` kotlin
interface AuthApi {
    @POST("/auth/login")
    suspend fun login(@Body request: LoginRequest): LoginResponse
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
이제 코루틴 스코프 안에서 이 함수를 호출할 수 있다.
``` kotlin
GlobalScope.launch {
    val response: LoginResponse = authApi.login(request)
}
```
`try-catch` 구문으로 에러 처리를 할 수 있다.
``` kotlin
val request = LoginRequest("ronalo@gmail.com", "1234")

GlobalScope.launch {
    try {
        val response: LoginResponse = authApi.login(request)
    } catch (exception: Exception) {
        // 에러 처리
    }
}
```
`error`의 타입 비교를 통해 에러의 종류를 파악할 수 있다.
``` kotlin
val request = LoginRequest("ronalo@gmail.com", "1234")

GlobalScope.launch {
    try {
        val response: LoginResponse = authApi.login(request)
    } catch (exception: Exception) {
        when(exception) {
            is HttpException -> {
                // 400, 500 Error
                val code: Int = exception.code()
                val errorBody: ResponseBody? = exception.response()?.errorBody()
            }
            is ConnectException -> {
                // Connection Error
            }
            else -> {
                // Other Exceptions
            }
        }
    }
}
```

## MockWebServer로 단위 테스트 하기
코루틴을 테스트하려면 다음 의존성을 추가해야한다.
``` groovy
dependencies {
    testImplementation "org.jetbrains.kotlinx:kotlinx-coroutines-test:1.3.9"
}
```
`runBlocking()` 메소드를 사용하면 동기적으로 `suspend` 함수를 처리한 후 결과값을 테스트할 수 있다. 
``` kotlin
import kotlinx.coroutines.runBlocking
// ...

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
            .build()
            .create(AuthApi::class.java)
    }

    @After
    fun tearDown() {
        // Shut down MockWebServer
        mockServer.shutdown()
    }

    @Test
    fun `로그인 성공 테스트`() = runBlocking {
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
        val response = authApi.login(request)
        assertThat(response.userId).isEqualTo(dummyUserId)
        assertThat(response.accessToken).isEqualTo(dummyAccessToken)
        assertThat(response.refreshToken).isEqualTo(dummyRefreshToken)
    }

    @Test
    fun `로그인 실패 테스트`() = runBlocking {
        // Given
        val dummyMessage = "fail"

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
        try {
            val response = authApi.login(request)
        } catch (e: HttpException) {
            assertThat(e.code()).isEqualTo(HttpURLConnection.HTTP_BAD_REQUEST)
        } catch (e: Exception) {
            fail()
        }
    }
}
```