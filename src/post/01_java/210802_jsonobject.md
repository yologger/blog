---
title: "JSONObject 라이브러리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---


# Table of Contents

[[toc]]

# JSONObject
`JSONObject` 라이브러리를 사용하면 JSON 데이터를 쉽게 생성할 수 있다.

## 설치
`JSONObject`을 사용하려면 다음과 같은 의존성을 추가해야한다.
``` groovy
dependencies {
    // JSONObject
    implementation group: 'com.googlecode.json-simple', name: 'json-simple', version: '1.1.1'
}
```

## JSONObject
``` java
@GetMapping
@RequestMapping("/test")
public ResponseEntity<JSONObject> test() {

    HttpHeaders headers = new HttpHeaders();

    JSONObject body = new JSONObject();
    body.put("name", "Paul");
    body.put("nation", "USA");

    return new ResponseEntity(body, headers, HttpStatus.OK);
}
```
``` json
{
    "nation": "USA",
    "name": "Paul"
}
```

## JSONArray
``` java
@GetMapping
@RequestMapping("/test")
public ResponseEntity<JSONObject> test() {

    HttpHeaders headers = new HttpHeaders();

    JSONArray array = new JSONArray();
    array.add(new Person("paul", "USA"));
    array.add(new Person("smith", "UK"));
    array.add(new Person("john", "Spain"));

    JSONObject body = new JSONObject();
    body.put("people", array);

    return new ResponseEntity(body, headers, HttpStatus.OK);
}
```
``` json
{
    "people": [
        {
            "name": "paul",
            "nation": "USA"
        },
        {
            "name": "smith",
            "nation": "UK"
        },
        {
            "name": "john",
            "nation": "Spain"
        }
    ]
}
```