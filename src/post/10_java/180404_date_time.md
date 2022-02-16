---
title: "Java 시간, 날짜 처리하기"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

Java에서는 버전에 따라 날짜와 시간을 처리하는 방식이 다르다.

Java 8 이전
- java.util.Date
- java.util.Calander

Java 8 이후
- java.time.LocalDate
- java.time.LocalTime
- java.time.LocalDateTime

## Java 8 이전

### Date
시스템의 현재 시간은 다음과 같이 알아낼 수 있다.
``` java
long now = System.currentTimeMillis();
System.out.println(now);        // 1640209553887

Date date = new Date(now);
System.out.println(date);       // Thu Dec 23 06:45:53 KST 2021
```

### SimpleDateFormat
`SimpleDateFormat`클래스를 사용하면 날짜를 포맷팅할 수 있다.
``` java
SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm", Locale.getDefault());
String str = dateFormat.format(date);
System.out.println(str);        
```

## Java 9 이후
Java 8 이상에서는 `LocalDate`, `LocalTime`, `LocalDate`클래스를 사용한다.

### LocalDate
`LocalDate`는 날짜를 다루는데 사용한다.

현재 날짜 정보는 다음과 같이 얻을 수 있다.
``` java
LocalDate currentDate = LocalDate.now();
System.out.println(currentDate);    // 2018-04-04
```
특정 날짜 정보를 담은 `LocalDate`객체는 다음과 같이 생성한다.
``` java
LocalDate targetDate = LocalDate.of(2018, 11, 12);
System.out.println(targetDate);     // 2018-11-12
```
`Period`클래스를 사용하면 두 날짜 사이의 기간을 취급할 수 있다.
``` java
Period period = Period.between(targetDate, currentDate);
System.out.println(period.getYears());      // 3
System.out.println(period.getMonths());     // 1
System.out.println(period.getDays());       // 11
```

### LocalTime
`LocalTime`은 시간을 다루는데 사용한다.

현재 시간 정보는 다음과 같이 얻을 수 있다.
``` java
LocalTime currentTime = LocalTime.now();
System.out.println(currentTime);           // 06:58:51.952
```
특정 시간 정보를 담은 `LocalTime`객체는 다음과 같이 생성한다.
``` java
LocalTime targetTime = LocalTime.of(3, 22, 44, 2);
System.out.println(targetTime);           // 03:22:44.000000002
```
`Duration`클래스를 사용하면 두 시간 사이의 기간을 계산할 수 있다.
``` java
Duration duration = Duration.between(targetTime, currentTime);
System.out.println(duration.getSeconds());      // 13088
```

### LocalDateTime
날짜와 시간을 함께 취급할 때는 `LocalDateTime`클래스를 사용한다.
현재 날짜 시간 정보는 다음과 같이 얻을 수 있다.
``` java
LocalDateTime currentDateTime = LocalDateTime.now();
System.out.println(currentDateTime);    // 2018-04-04T11:46:46.831
```
특정 시간 정보를 담은 `LocalDateTime`객체는 다음과 같이 생성한다.
``` java
LocalDateTime targetDateTime = LocalDateTime.of(2019, 10, 1, 12, 30, 22, 3333);
System.out.println(targetDateTime);     // 2019-10-01T12:30:22.000003333
```

### DateTimeFormatter
`DateTimeFormatter`클래스를 사용하면 `LocalDateTime`객체를 포맷팅할 수 있다.
``` java
LocalDateTime time = LocalDateTime.of(2019, 10, 1, 12, 30, 22, 3333);
System.out.println(time);     // 2019-10-01T12:30:22.000003333

DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
System.out.println(time.format(formatter));     // 2019-10-01 12:30:22

System.out.println(time.format(DateTimeFormatter.ISO_DATE));    // 2019-10-01
```

### 문자열을 LocalDateTime으로 변환하기
`LocalDateTime.parse()`를 사용하면 문자열을 LocalDateTime 객체로 변환할 수 있다.
``` java
String dateTimeStr = "2020-12-24T03:16:11.000Z";
LocalDateTime localDateTime = LocalDateTime.parse(dateTimeStr, DateTimeFormatter.ISO_DATE_TIME);
System.out.println(localDateTime);  // 2020-12-24T03:16:11
```