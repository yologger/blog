---
title: "MockWebServer"
description: "MockWebServer"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# MockWebServer로 Retrofit2 단위테스트 하기
`MockWebServer`를 사용하면 가짜 웹 서버로 `Retrofit2`를 단위테스트할 수 있다. 

## 의존성 추가
``` groovy
dependencies {
    testImplementation("com.squareup.okhttp3:mockwebserver:${mockwebserver_version}")
}
```

## 사용법
`AuthService`를 테스트하려고 한다. `emailVerificationCode()`는 서버에 인증코드 이메일 전송을 요청한다.
``` kotlin
interface AuthService {
    @POST("/auth/emailVerificationCode")
    fun emailVerificationCode(@Body request: EmailVerificationCodeRequest): Call<EmailVerificationCodeResponse>
}
```
이제 테스트코드를 작성해보자. 먼저 `MockWebServer`를 초기화한다.
``` kotlin
class AuthServiceTest {

    lateinit var mockServer: MockWebServer
    lateinit var mockUrl: HttpUrl

    @Before
    fun setUp() {
        // 가짜 웹 서버 생성
        mockServer = MockWebServer()

        // 가짜 웹 서버 시작
        mockServer.start()

        // 가짜 웹 서버 URL 가져오기
        mockUrl = mockServer.url("/")
    }

    @After
    fun tearDown() {
        mockServer.shutdown()
    }
}
```
그리고 가짜 `MockResponse`클래스로 가상 응답을 생성한다.
``` kotlin
class AuthServiceTest {

    // ..

    @Test
    fun `test_emailVerificationCode`() {

        // 가상 응답 생성
        val mockResponse = MockResponse()
            .setResponseCode(HttpURLConnection.HTTP_OK)
            .setBody("{\"message\":\"verified\"}")

        // 가짜 웹 서버에 응답 넣기
        mockServer.enqueue(mockResponse)
    }
}
```

`Retrofit` 객체를 생성한다. 이때 중요한 점은 `baseUrl()`의 인자로 가짜 웹 서버의 `HttpUrl`을 전달해야한다.
``` kotlin {15}
class AuthServiceTest {

    // ..

    @Test
    fun `test_emailVerificationCode`() {

        // ..

        val okHttpClient = OkHttpClient.Builder()
            .build()

        val retrofit = Retrofit.Builder()
            .client(okHttpClient)
            .baseUrl(mockUrl)
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        authService = retrofit.create(AuthService::class.java)
    }
}
```

이제 테스트 코드를 작성해보자.
``` kotlin
class AuthServiceTest {

    @Test
    fun `test_emailVerificationCode`() {

        // ...

        val request = EmailVerificationCodeRequest("ronaldo@gmail.com")
        val result = authService.emailVerificationCode(request).execute()

        assertThat(result.isSuccessful).isTrue()
        assertThat(result.body()!!.message).isEqualTo("verified")
    }
}
```

전체 코드는 다음과 같다.
``` kotlin
class AuthServiceTest {

    lateinit var authService: AuthService
    lateinit var mockServer: MockWebServer
    lateinit var mockUrl: HttpUrl

    @Before
    fun setUp() {
        mockServer = MockWebServer()
        mockServer.start()
        mockUrl = mockServer.url("/")
    }

    @Test
    fun `test_emailVerificationCode`() {

        // Given 
        val mockResponse = MockResponse()
            .setResponseCode(HttpURLConnection.HTTP_OK)
            .setBody("{\"message\":\"verified\"}")

        mockServer.enqueue(mockResponse)

        val okHttpClient = OkHttpClient.Builder()
            .build()

        val retrofit = Retrofit.Builder()
            .client(okHttpClient)
            .baseUrl(mockUrl)
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        authService = retrofit.create(AuthService::class.java)

        // When
        val request = EmailVerificationCodeRequest("ronaldo@gmail.com")
        val result = authService.emailVerificationCode(request).execute()

        // Then
        assertThat(result.isSuccessful).isTrue()
        assertThat(result.body()!!.message).isEqualTo("verified")
    }

    @After
    fun tearDown() {
        mockServer.shutdown()
    }
}
```

## enqueue()
위 예제에서 `enqueue()`를 사용하여 `MockResponse`를 추가했다.
``` kotlin
val mockResponse = MockResponse()
    .setResponseCode(HttpURLConnection.HTTP_OK)
    .setBody("{\"message\":\"verified\"}")

mockServer.enqueue(mockResponse)
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