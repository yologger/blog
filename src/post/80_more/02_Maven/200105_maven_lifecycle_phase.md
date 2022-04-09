---
title: "Build Lifecycle, Phase, Binding"
lang: ko
showOnSidebar: true
collapsible: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## Build Lifecycle
Maven은 사전에 정의된 순서대로 프로젝트를 빌드한 후 배포한다. 이 과정을 `Build Lifecycle`이라고 한다. Maven은 기본적으로 사전에 정의된 세 개의 Lifecycle을 제공한다.

- `default`: 프로젝트를 빌드하여 결과물을 생성한다.
- `clean`: 생성된 빌드 결과물을 제거한다.
- `site`: 문서화 사이트를 생성한다.

## Phase
Build Lifecycle은 여러 단계의 `Phase`로 구성된다. 예를 들어 `default` Build Lifecycle은 다음과 같은 Phase들로 구성된다.

- `validate`: 프로젝트가 정확한지 검증한다.
- `compile`: 프로젝트를 컴파일한다.
- `test`: JUnit 같은 테스팅 라이브러리로 컴파일된 프로젝트를 검증한다.
- `package`: 프로젝트를 패키징한다.
- `verify`: 통합테스트를 진행한다.
- `install`: 로컬 환경에 패키지를 설치한다.
- `deploy`: 운영 환경에 패키지를 배포한다.

`Phase`는 커맨드 명령어를 통해 호출할 수 있다. 예를 들어 `compile` phase는 다음과 같이 호출한다.

```
$ mvn compile 
```

## Binding
사실 Phase는 추상적인 개념이며, Phase를 실행하면 연결된 Plugin의 Goal이 실행된다. 이처럼 Phase와 Goal을 연결하는 작업을 `Binding`이라고 한다. 

예를 들어 `clean` phase 호출하면 `maven-clean-plugin`의 `clean` goal이 실행된다.

```
// Phase 호출
$ mvn clean

// Plugin:Goal 호출
$ mvn clean:clean 
```

`compile` phase를 호출하면 `maven-compiler-plugin`의 `compile` goal이 실행된다.
```
// Phase 호출
$ mvn compile

// Plugin:Goal 호출
$ mvn compiler:compile
```

`package` phase를 호출하면 `maven-jar-plugin`의 `jar` goal이 실행된다.
```
// Phase 호출
$ mvn package

// Plugin:Goal 호출
$ mvn jar:jar
```

Maven에는 기본적으로 내장된 Binding이 있다. [이 곳](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#built-in-lifecycle-bindings)에서 확인할 수 있다.