---
title: "Kotlin 면접 정리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Kotlin 면접 정리
`Kotlin` 면접 내용을 정리합니다.

## 동일성과 동등성
### 동일성
`동일성(Identity)`는 두 객체의 주소값이 같다는 것을 의미한다. `==` 연산자 또는 `hashcode()` 메소드의 값이 동일하면 두 객체는 동일하다고 한다.

### 동등성
`동등성(Equality)`는 두 객체의 속성값이 같다는 것을 의마한다. `equal()`메소드를 구현하여 두 객체가 동등한지 판별할 수 있다.