---
title: "MockWebServer로 Retrofit2 단위 테스트"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# MockWebServer로 Retrofit2 단위 테스트
`MockWebServer` 라이브러리를 사용하면 API 서버 목업을 만들어 쉽게 테스트할 수 있다.

## 의존성 추가
``` groovy
// Retrofit
implementation 'com.squareup.retrofit2:retrofit:2.8.2'
implementation 'com.squareup.retrofit2:converter-gson:2.8.2'

// MockWebServer
testImplementation "com.squareup.okhttp3:mockwebserver:4.10.0"

// Truth
testImplementation 'com.google.truth:truth:1.1.3'
```

## 사용법 
`Retrofit2`를 사용한 `AuthApi`인터페이스를 테스트하려고 한다.
``` kotlin
interface AuthApi {
    @POST("/auth/login")
    fun login(@Body request: LoginRequest): Call<LoginResponse>
}
```
``` kotlin
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

테스트 코드는 다음과 같이 작성할 수 있다.
``` kotlin
import com.google.common.truth.Truth.assertThat
import com.google.gson.Gson
import com.google.gson.JsonObject
import com.yologger.app.api.auth.model.LoginRequest
import okhttp3.HttpUrl
import okhttp3.OkHttpClient
import okhttp3.mockwebserver.MockResponse
import okhttp3.mockwebserver.MockWebServer
import org.junit.After
import org.junit.Before
import org.junit.Test
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.net.HttpURLConnection

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
    fun `로그인 성공 테스트`() {
        // Given
        val dummyUserId = 1
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
        val response = authApi.login(request).execute()

        // Then
        assertThat(response.isSuccessful).isTrue()
        assertThat(response.body()?.userId).isEqualTo(dummyUserId)
        assertThat(response.body()?.accessToken).isEqualTo(dummyAccessToken)
        assertThat(response.body()?.refreshToken).isEqualTo(dummyRefreshToken)
    }
}
```


## enqueue()
위 예제에서 `MockWebServer`클래스의 `enqueue()`를 사용하여 `MockResponse`를 추가했다.
``` kotlin
mockServer.enqueue(successResponse)
```

`enqueue()`는 내부적으로 Queue를 사용하기 때문에 `FIFO`구조로 응답하게 된다.
``` kotlin
// 첫 번째 가상 응답 추가
val response1 = MockResponse()
    .setResponseCode(HttpURLConnection.HTTP_OK)
    .setBody("{\"message\":\"response1\"}")
mockServer.enqueue(response1)

// 두 번째 가상 응답 추가
val response2 = MockResponse()
    .setResponseCode(HttpURLConnection.HTTP_OK)
    .setBody("{\"message\":\"response1\"}")
mockServer.enqueue(response2)

// 첫 번째 요청 후 결과 확인
val request1 = EmailVerificationCodeRequest("ronaldo@gmail.com")
val result1 = authService.emailVerificationCode(request1).execute()
assertThat(result1.body()!!.message).isEqualTo("response1")

// 두 번째 요청 후 결과 확인
val request2 = EmailVerificationCodeRequest("ronaldo@gmail.com")
val result2 = authService.emailVerificationCode(request2).execute()
assertThat(result2.body()!!.message).isEqualTo("response2")
```

## Dispatcher
`Dispatcher`를 사용하면 요청 `URL`에 따라 다른 가짜 응답을 하도록 구현할 수 있다.
``` kotlin
import okhttp3.mockwebserver.Dispatcher
import okhttp3.mockwebserver.MockResponse
import okhttp3.mockwebserver.MockWebServer
import okhttp3.mockwebserver.RecordedRequest

val dispatcher = object: Dispatcher() {
    override fun dispatch(request: RecordedRequest): MockResponse {
        return when(request.path) {
            "/auth/login" -> MockResponse().apply {
                setResponseCode(200)
                setBody("{\"message\":\"logged in.\"}")
            }
            "/auth/join" -> MockResponse().apply {
                setResponseCode(200)
                setBody("{\"data\":\"joined.\"}")
            }
            else -> MockResponse().apply {
                setResponseCode(404)
                setBody("{\"error\":\"Not Found\"}")
            }
        }
    }
}

server.dispatcher = dispatcher
```