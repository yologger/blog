---
title: "Gradle Task"
lang: ko
showOnSidebar: true
collapsible: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Task
`Task`는 빌드를 위한 <u>작업 단위</u>다. Task는 크게 두 종류가 있다.
- Built-in Task
- Custom Task

## Built-in Task
`Built-in Task`는 Gradle에 내장되어있는 Task다. Gradle 프로젝트를 초기화하는 `gradle init`, Gradle 프로젝트를 빌드하는 `gradle build`, Gradle 프로젝트를 실행하는 `gradle run`도 사실은 모두 Task다.

Gradle 프로젝트에서 `gradle tasks`명령어를 입력하면 모든 Built-in Task를 확인할 수 있다.
```
$ gradle tasks
```
```
> Task :tasks

------------------------------------------------------------
Tasks runnable from root project 'KotlinApplication'
------------------------------------------------------------

Application tasks
-----------------
run - Runs this project as a JVM application

Build tasks
-----------
assemble - Assembles the outputs of this project.
build - Assembles and tests this project.
buildDependents - Assembles and tests this project and all projects that depend on it.
buildKotlinToolingMetadata - Build metadata json file containing information about the used Kotlin tooling
buildNeeded - Assembles and tests this project and all projects it depends on.
classes - Assembles main classes.
clean - Deletes the build directory.
jar - Assembles a jar archive containing the main classes.
testClasses - Assembles test classes.

Build Setup tasks
-----------------
init - Initializes a new Gradle build.
wrapper - Generates Gradle wrapper files.

Distribution tasks
------------------
assembleDist - Assembles the main distributions
distTar - Bundles the project as a distribution.
distZip - Bundles the project as a distribution.
installDist - Installs the project as a distribution as-is.

Documentation tasks
-------------------
javadoc - Generates Javadoc API documentation for the main source code.

Help tasks
----------
buildEnvironment - Displays all buildscript dependencies declared in root project 'KotlinApplication'.
dependencies - Displays all dependencies declared in root project 'KotlinApplication'.
dependencyInsight - Displays the insight into a specific dependency in root project 'KotlinApplication'.
help - Displays a help message.
javaToolchains - Displays the detected java toolchains.
outgoingVariants - Displays the outgoing variants of root project 'KotlinApplication'.
projects - Displays the sub-projects of root project 'KotlinApplication'.
properties - Displays the properties of root project 'KotlinApplication'.
tasks - Displays the tasks runnable from root project 'KotlinApplication' (some of the displayed tasks may belong to subprojects).

Verification tasks
------------------
check - Runs all checks.
test - Runs the test suite.

To see all tasks and more detail, run gradle tasks --all

To see more detail about a task, run gradle help --task <task>

BUILD SUCCESSFUL in 19s
1 actionable task: 1 executed
```

## Custom Task
`Custom Task`는 사용자가 `build.gradle`에 직접 정의하는 Task다.

### 정의
Task는 다음과 같이 정의한다.
``` groovy build.gradle
task [task_name] {
  // ..
}
```
다음과 같은 형태로도 정의할 수 있다.
``` groovy build.gradle
task([task_name]) {
  // ...
}
```
Task는 콘솔에서 다음과 같이 실행한다.
```
$ gradle [task_name]
```
`printHello`라는 Task를 정의하고 실행해보자.
``` groovy build.gradle
task printHello {
  println "Hello!"
}
```
```
$ gradle printHello

> Configure project :
Hello!

BUILD SUCCESSFUL in 667ms
```
Task를 `quite 모드`로 실행하면 오직 결과값만 출력된다. `-q`을 지정하면 된다.
```
$ gradle -q printHello
Hello!
```

### 파라미터
Task로 파라미터를 전달할 수 있다.
``` groovy build.gradle
task sum {
    def x = x.toInteger()
    def y = y.toInteger()

    println x+y
}
```
이제 다음과 같이 호출할 수 있다.
```
$ gradle -q sum -Px=10 -Py=10
20
```
### doFirst, doLast
위에서는 Task를 다음과 같이 정의했다.
``` groovy build.gradle
task myTask {
  println "myTask"
}
```
그러나 일반적으로 Task에서 실제로 수행할 작업은 doFirst, doLast 안에 정의한다.
``` groovy build.gradle
task [task_name] {
    doFirst {
        // ...
    }
    doLast {
        // ...
    }
}
```