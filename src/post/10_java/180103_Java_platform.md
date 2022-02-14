---
title: "Java Platform의 종류"
showOnSidebar: true
---

# Java Platform

`Java Platform`은 크게 세 가지 에디션으로 나뉜다.

## Java SE
- `Java Platform Standard Edition`
- 가장 보편적으로 사용되는 에디션
- 자바 <u>데스크탑</u>, <u>스마트폰</u> 어플리케이션 개발에 사용된다.
- 안드로이드 어플리케이션을 개발할 때에도 주로 Java SE가 사용된다.
- 기초적인 데이터 타입부터 네트워킹, 보안, 데이터베이스 처리, GUI(Swing, AWT) 등 데스크탑과 스마트폰 개발에 필요한 API를 포함한다.

## Java EE
- `Java Platform Enterprise Edition`
- 자바 <u>서버</u> 어플리케이션 개발에 사용된다.
- Java SE의 모든 API를 포함한다.
- 그 외 JSP, Sevlet, EJB 등 서버 어플리케이션 개발을 위한 API를 포함한다.
- 2017년 오라클은 오픈소스 진영인 이클립스 재단에 Java EE를 넘겼으며, 명칭은 <u>Jakarta EE</u>로 변경되었다.

## Java ME
- `Java Platform Micro Edition`
- Java SE API의 일부만 포함한다.
- <u>셋톱박스</u>, <u>PDA</u>등 소형 임베디드 시스템을 개발하는데 사용된다.

![1.png](./180103_Java_platform/1.png)

## 용어 정리 - Java SE 7 , Java 7, JDK 7
`Java SE`는 Java Platform Standard Edition의 약자로 Java Platform의 근간을 이루는 추상적인 <u>명세(Specification)</u>를 의미한다.
 `JDK`는 Java SE 명세를 코드로 구현한 구체적인 <u>구현체(Implementation)</u>다. 즉 Java SE 7은 JSR-336로 규정된 Java SE의 일곱 번째 명세를 의미하며, JDK 7은 OpenJDK 7, Oracle JDK 7과 같은 구현체를 의미한다.

`Java EE` 역시 Java Server Application 개발을 위한 <u>명세(Specification)</u>를 의미한다. Java EE의 <u>구현체(Implementation)</u>는 다음과 같다.
- Java EE 명세를 모두 구현한 WAS
    - Oracle WebLogic
    - IBM Websphere
    - Red Hat Jboss
    - Tmax JEUS
- Java EE 명세의 일부를 구현한 Web Container
    - Apache Tomcat

추가적으로 엄밀히 말하자면 `Java 7`은 정확한 표현이 아니다. 하지만 Java SE 7이나 JDK 7보다 사용하기 편해서 흔히 Java 7이라고 부른다.