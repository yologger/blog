---
title: "Kotlin Compiler"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## Java Compiler
`Java Compiler`는 `.java`확장자가 붙은 소스코드를 `.class`확장자가 붙은 바이트코드로 변환한다. 이 바이트코드는 `JVM` 위에서 실행할 수 있다.

## Kotlin Compiler
`Kotlin Compiler`는 `.kt`확장자가 붙은 소스코드를 `.class`확장자가 붙은 바이트코드로 변환한다. 이 바이트코드 역시 JVM에서 실행할 수 있다.

Mac OS 환경에서 `Homebrew`로 Kotlin을 설치해보자.
```
$ brew install kotlin
```
설치된 Kotlin의 정보를 확인해보자.
```
$ brew info kotlin
```
```
kotlin: stable 1.6.10 (bottled)
Statically typed programming language for the JVM
https://kotlinlang.org/
/usr/local/Cellar/kotlin/1.6.10 (112 files, 74MB) *
  Poured from bottle on 2021-12-21 at 19:38:56
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/kotlin.rb
License: Apache-2.0
==> Dependencies
Required: openjdk ✔
==> Analytics
install: 7,631 (30 days), 19,253 (90 days), 78,705 (365 days)
install-on-request: 7,421 (30 days), 18,656 (90 days), 75,069 (365 days)
build-error: 0 (30 days)
```

설치 경로의 `bin`디렉토리에는 Kotlin과 관련된 다양한 명령어가 포함되어있다.
```
$ pwd
/usr/local/Cellar/kotlin/1.6.10/bin

$ ls
kotlin
kotlinc
kapt
...
```
이제 Kotlin Compiler로 `Main.kt`를 컴파일해보자.
``` kotlin Main.kt
fun main() {
    println("Hello World")
}
```
```
$ kotlinc Main.kt
```
바이트 코드가 생성되었다.
```
$ ls
Main.kt
MainKt.class    // 바이트 코드
```
이 바이트코드는 JVM에서 실행할 수 있다.
```
$ java MainKt
Hello World
```
