---
title: "Spring MVC 시작하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

## @GetMapping
``` java
@GetMapping(value = "/")
public ResponseEntity<User> getInfo(
    @RequestParam(value="name") String name, 
    @RequestParam(value="age") int age
) {
    // ...
}
```
``` java
@GetMapping(value = "/post/{page}")
public ResponseEntity<List<Post>> getPost(@PathVariable("page") int page) {
    // ...
}
```

## @PostMapping
``` java
@PostMapping(value = "/member/join")
public ResponseEntity<JoinResponse> join(@RequestBody JoinRequest request) {
    // ..
}
```

## @RequestMapping
`method` 속성을 정의하지 않으면 모든 HTTP 요청을 수신할 수 있다.
``` java
@RestController
public class Controller {

    @RequestMapping(value = "/test")
    public String test() {
        return "test";
    }
}
```
``` shellsession
$ curl -X GET -G `http://localhost:8080/test`
test
```
``` shellsession
$ curl -X POST -G `http://localhost:8080/test`
test
```
`method` 속성으로 특정 HTTP 메소드만 수신하도록 제한할 수 있다.
``` java
@RestController
public class Controller {

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public String get() {
        return "get";
    }
}
```
``` shellsession
$ curl -X GET -G `http://localhost:8080/test`
test
```
``` shellsession {2}
$ curl -X POST -G `http://localhost:8080/test`
{"timestamp":"2022-05-09T13:40:02.292+00:00","status":405,"error":"Method Not Allowed","path":"/test"}
```
`@RequestMapping`의 `consumes` 속성을 사용하면 클라이언트로 부터 수신하려는 데이터 포맷을 제한할 수 있다.
``` java {4}
@RequestMapping(
    value = "/test", 
    method = RequestMethod.POST, 
    consumes = MediaType.APPLICATION_JSON_VALUE
)
public String test() {
    return "test";
}
```
이 경우 클라이언트가 요청을 보낼 때 `Content-Type` 헤더를 설정해야한다.
``` shellsession
$ curl -X POST -G 'http://localhost:8080/test'

{"timestamp":"2022-05-09T13:51:31.221+00:00","status":415,"error":"Unsupported Media Type","path":"/test"}
```
``` shellsession
$ curl -X POST -G 'http://localhost:8080/test' \
-H 'Content-Type: text/plain'

{"timestamp":"2022-05-09T13:51:14.675+00:00","status":415,"error":"Unsupported Media Type","path":"/test"}    
```
``` shellsession
$ curl -X POST -G 'http://localhost:8080/test' \
-H 'Content-Type: application/json'

test
```
배열 형태로 여러 타입을 받을 수도 있다.
``` java {4}
@RequestMapping(
    value = "/test", 
    method = RequestMethod.POST, 
    consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_PLAIN_VALUE}
)
public String test() {
    return "test";
}
```

`@RequestMapping`의 `produces` 속성을 사용하면 서버가 응답하는 데이터의 타입을 지정할 수 있다.
``` java {4}
@RequestMapping(
    value = "/test", 
    method = RequestMethod.POST, 
    produces = MediaType.APPLICATION_JSON_VALUE
)
public String test() {
    return "test";
}
```
위와 같이 지정한 경우 클라이언트는 `Accept` 헤더를 설정해야한다.
``` shellsession{2,8,12}
$ curl -X POST -G 'http://localhost:8080/test' -v \
-H 'Accept: application/json'
*   Trying 127.0.0.1:8080...
* Connected to localhost (127.0.0.1) port 8080 (#0)
> POST /test HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.79.1
> Accept: application/json
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 
< Content-Type: application/json
< Content-Length: 4
< Date: Mon, 09 May 2022 14:27:37 GMT
< 
* Connection #0 to host localhost left intact
```

## headers
사용자가 요청을 보낼 때 특정 헤더를 반드시 포함하도록 강제할 수 있다.
``` java{4}
@RequestMapping(
    value = "/test", 
    method = RequestMethod.POST, 
    headers = {HttpHeaders.FROM}
)
public String test() {
    return "test";
}
```
``` shellsession
$ curl -X POST -G 'http://localhost:8080/test' 

{"timestamp":"2022-05-09T14:31:40.101+00:00","status":404,"error":"Not Found","path":"/test"}
```
``` shellsession
$ curl -X POST -G 'http://localhost:8080/test' \
-H 'From: yologger'

test
```

