---
title: "스프링 프레임워크의 HTTP 통신"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# 스프링 프레임워크의 HTTP 통신
스프링 프레임워크는 HTTP 통신을 위해 다양한 기능을 제공한다.

## RestTemplate
`RestTempate`은 Spring 3부터 지원하며, 동기식으로 HTTP 요청을 보내는 HTTP Client다. `RestTempate`은 HTTP 통신을 위한 다양한 메소드를 제공한다.

### GET
서버는 다음과 같은 형태의 JSON 데이터를 반환한다고 가정하자.
``` json
{
    "email": "paul@gmail.com",
    "name": "paul",
    "age": "3"
}
```
#### getForObject()
`getForObject()`는 다음과 같이 사용한다.
``` java {3}
RestTemplate restTemplate = new RestTemplate();
String url = "https://server_url/path";
String response = restTemplate.getForObject(url, String.class); // {"email": "paul@gmail.com", "name": "paul", "age": "3"}
```
JSON 응답을 POJO로 매핑할 수도 있다. 이 때 POJO 클래스는 기본 생성자와 Setter를 반드시 포함해야한다.
``` java
public class User implements Serializable {
    private String email;
    private String name;
    private int age;

    public User() {
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```
``` java{3}
RestTemplate restTemplate = new RestTemplate();
String url = "https://server_url/path";
User response = restTemplate.getForObject(url, User.class);
```

#### getForEntity()
`getForEntity()`는 응답을 `ResponseEntity`로 래핑하여 반환한다.
``` java{3}
RestTemplate restTemplate = new RestTemplate();
String url = "https://server_url/path";
ResponseEntity<User> response = restTemplate.getForEntity(url, User.class)

HttpStatus httpStatus = response.getStatusCode();
User user = response.getBody();
HttpHeaders headers = response.getHeaders();
headers.getContentType();
```

### POST

#### postForObject()
``` java
User user = new User("ronaldo@gmail.com", "ronaldo", 35);
HttpRequest<User> request = new HttpEntity<>(user);
User user = restTemplate.postForObject(url, request, User.class);
```

#### postForEntity()
``` java
User user = new User("ronaldo@gmail.com", "ronaldo", 35);
HttpRequest<User> request = new HttpEntity<>(user);
ResponseEntity<User> response = restTemplate.postForEntity(url, request, User.class);
```

#### postForLocation()
``` java
User user = new User("ronaldo@gmail.com", "ronaldo", 35);
HttpRequest<User> request = new HttpEntity<>(user);
URI location = restTemplate.postForLocation(url, request);
```

#### Submit Form Data
``` java
HttpHeaders headers = new HttpHeaders();
headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

MultiValueMap<String, String> map= new LinkedMultiValueMap<>();
map.add("email", "ronaldo@gmail.com");
map.add("name", "ronaldo");
map.add("age", "35");

HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);

ResponseEntity<User> response = restTemplate.postForEntity(url, request, User.class);
```

### DELETE
#### delete()
``` java
String url = "http://server/user/1"
restTemplate.delete(url);
```

## WebClient
`WebClient`는 Spring 5부터 지원하며 논블로킹, 리엑티브한 방식으로 HTTP 요청을 보낸다. 동기식, 비동기식 모두 사용 가능하다.