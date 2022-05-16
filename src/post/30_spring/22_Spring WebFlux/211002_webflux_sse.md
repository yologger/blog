---
title: "Spring WebFlux - SSE"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# SSE
<b>`SSE(Server Sent Events)`</b>는 서버 푸시기술이다. HTTP 연결 상태를 유지한 채 서버를 계속 관찰하는 형태라고 보면 될 것 같다. SSE는 단방향이기 때문에 클라이언트에서 서버로 데이터를 전송할 수는 없다. 양방향 데이터 통신이 필요할 때는 `WebSocket`을 사용할 수 있다.

`SSE`를 통해 전송되는 데이터는 세 가지 규칙을 지켜야 한다.
- 서버는 `Content-Type`을 `text/event-stream`로 설정한다. 
- 데이터 앞에 `data:` 라는 접두어를 붙여 전송한다. (필요하면 접두어를 변경할 수도 있다.)
- 각 데이터는 두 개의 개행문자 `\n\n`으로 구분된다.

```
data: {"name": "Microsoft", "price": "$130", "amount": "23" "date": "05-10-2022"}

data: {"name": "Microsoft", "price": "$125", "amount": "40" "date": "05-10-2022"}

data: {"name": "Microsoft", "price": "$128", "amount": "15" "date": "05-10-2022"}
``` 

## Spring WebFlux와 SSE
`Spring WebFlux`를 사용하면 SSE를 쉽게 구현할 수 있다. 1초에 한번씩 서버 시간을 문자열로 푸시하는 서버를 다음과 같이 구축할 수 있다. 이 때 `produces = MediaType.TEXT_EVENT_STREAM_VALUE`를 지정하여 응답의 `Content-type`을 `text/event-stream`로 설정해야한다.
``` java {8}
@RestController
@RequestMapping("/stock")
public class StockController {

    @GetMapping
    @RequestMapping(
        value = "/microsoft", 
        produces = MediaType.TEXT_EVENT_STREAM_VALUE
    )
    public Flux<String> get() {
        return Flux.interval(Duration.ofSeconds(1))
                .map(number -> LocalTime.now().toString());
    }
}
```
이제 `cURL`로 서버에 연결해보자. 클라이언트도 요청 시 `Accept`헤더를 `text/event-stream`으로 설정해야한다. 
```
$ curl 'localhost:8080/stock/microsoft' -H 'Accept: text/event-stream'
data:22:27:27.948

data:22:27:28.949

data:22:27:29.949

data:22:27:30.952

data:22:27:32.065

data:22:27:33.067

data:22:27:34.063

data:22:27:35.066

data:22:27:36.066

data:22:27:37.066

^C
```

`ServerSentEvent`를 사용하면 `produces = MediaType.TEXT_EVENT_STREAM_VALUE`를 별도로 설정하지 않아도 된다.

``` java
@RestController
@RequestMapping("/stock")
public class StockController {

    @GetMapping
    @RequestMapping(
        value = "/microsoft", 
        // produces = MediaType.TEXT_EVENT_STREAM_VALUE
    )
    public Flux<ServerSentEvent<String>> get() {
        return Flux.interval(Duration.ofSeconds(1))
                .map(number -> ServerSentEvent.builder(LocalTime.now().toString()).build());
    }
}
```

다음과 같이 데이터 클래스를 반환할 수도 있다.
``` java
@RestController
@RequestMapping("/stock")
public class StockController {

    @GetMapping
    @RequestMapping(
            value = "/microsoft",
            produces = MediaType.TEXT_EVENT_STREAM_VALUE
    )
    public Flux<Stock> get() {

        Random random = new Random();

        return Flux.interval(Duration.ofSeconds(1))
                .map(it -> new Stock("Microsoft", random.nextInt(101), random.nextInt(101), new Date()));
    }
}
```
``` java
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Stock {
    private String name;
    private int amount;
    private int price;
    private Date date;
}
```
```
$ curl 'localhost:8080/stock/microsoft' -H 'Accept: text/event-stream'
data:{"name":"Microsoft","amount":43,"price":37,"date":"2022-05-10T13:51:05.110+00:00"}

data:{"name":"Microsoft","amount":31,"price":79,"date":"2022-05-10T13:51:06.110+00:00"}

data:{"name":"Microsoft","amount":48,"price":54,"date":"2022-05-10T13:51:07.110+00:00"}

data:{"name":"Microsoft","amount":41,"price":91,"date":"2022-05-10T13:51:08.109+00:00"}

data:{"name":"Microsoft","amount":84,"price":27,"date":"2022-05-10T13:51:09.108+00:00"}

data:{"name":"Microsoft","amount":38,"price":61,"date":"2022-05-10T13:51:10.110+00:00"}

data:{"name":"Microsoft","amount":95,"price":33,"date":"2022-05-10T13:51:11.107+00:00"}

data:{"name":"Microsoft","amount":42,"price":1,"date":"2022-05-10T13:51:12.107+00:00"}

data:{"name":"Microsoft","amount":50,"price":51,"date":"2022-05-10T13:51:13.111+00:00"}

data:{"name":"Microsoft","amount":99,"price":92,"date":"2022-05-10T13:51:14.109+00:00"}

^C
```