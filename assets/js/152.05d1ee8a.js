(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1490:function(a,e,r){a.exports=r.p+"assets/img/1.fc30877d.png"},1765:function(a,e,r){"use strict";r.r(e);var t=r(34),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[a._v("#")]),a._v(" Table of Contents")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#gradle-설치"}},[a._v("Gradle 설치")])]),t("li",[t("a",{attrs:{href:"#gradle-프로젝트-생성하기"}},[a._v("Gradle 프로젝트 생성하기")]),t("ul",[t("li",[t("a",{attrs:{href:"#build-gradle"}},[a._v("build.gradle")])]),t("li",[t("a",{attrs:{href:"#settings-gradle"}},[a._v("settings.gradle")])]),t("li",[t("a",{attrs:{href:"#gradle"}},[a._v(".gradle")])]),t("li",[t("a",{attrs:{href:"#그-외의-파일"}},[a._v("그 외의 파일")])])])]),t("li",[t("a",{attrs:{href:"#java-소스코드-작성"}},[a._v("Java 소스코드 작성")])]),t("li",[t("a",{attrs:{href:"#빌드-스크립트-작성"}},[a._v("빌드 스크립트 작성")])]),t("li",[t("a",{attrs:{href:"#프로젝트-빌드"}},[a._v("프로젝트 빌드")])]),t("li",[t("a",{attrs:{href:"#gradle-wrapper"}},[a._v("Gradle Wrapper")]),t("ul",[t("li",[t("a",{attrs:{href:"#gradlew"}},[a._v("gradlew")])]),t("li",[t("a",{attrs:{href:"#gradlew-bat"}},[a._v("gradlew.bat")])]),t("li",[t("a",{attrs:{href:"#gradle-wrapper-gradle-wrapper-jar"}},[a._v("gradle/wrapper/gradle-wrapper.jar")])]),t("li",[t("a",{attrs:{href:"#gradle-wrapper-gradle-wrapper-properties"}},[a._v("gradle/wrapper/gradle-wrapper.properties")])])])]),t("li",[t("a",{attrs:{href:"#gradle-wrapper로-프로젝트-빌드"}},[a._v("Gradle Wrapper로 프로젝트 빌드")])]),t("li",[t("a",{attrs:{href:"#안드로이드-스튜디오와-gradle-wrapper"}},[a._v("안드로이드 스튜디오와 Gradle Wrapper")])]),t("li",[t("a",{attrs:{href:"#gradle로-다양한-프로젝트-만들기"}},[a._v("Gradle로 다양한 프로젝트 만들기")]),t("ul",[t("li",[t("a",{attrs:{href:"#java-프로젝트-생성해보기"}},[a._v("Java 프로젝트 생성해보기")])]),t("li",[t("a",{attrs:{href:"#kotlin-프로젝트-생성해보기"}},[a._v("Kotlin 프로젝트 생성해보기")])])])])])]),t("p"),a._v(" "),t("h1",{attrs:{id:"gradle-시작하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle-시작하기"}},[a._v("#")]),a._v(" Gradle 시작하기")]),a._v(" "),t("p",[t("code",[a._v("Gradle")]),a._v("은 그루비 언어를 기반으로 한 빌드 도구다. Gradle은 Ant나 Maven같은 이전 세대의 빌드 도구의 단점을 보완하고 장점을 취합하여 만든 오픈소스 빌드 도구다.")]),a._v(" "),t("h2",{attrs:{id:"gradle-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle-설치"}},[a._v("#")]),a._v(" Gradle 설치")]),a._v(" "),t("p",[a._v("Mac OS 환경에서 Homebrew로 Gradle을 설치해보자.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ brew install gradle\n")])])]),t("p",[a._v("다음 명령어로 Gradle의 설치여부와 버전을 확인할 수 있다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ gradle --v\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Welcome to Gradle 7.3.1!\n")])])]),t("p",[a._v("Homebrew로 설치 경로 등의 정보를 확인할 수 있다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ brew info gradle\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("gradle: stable 7.3.1 (bottled)\nOpen-source build automation tool based on the Groovy and Kotlin DSL\nhttps://www.gradle.org/\n/usr/local/Cellar/gradle/7.3.1 (11,110 files, 266.3MB) *\n  Poured from bottle on 2021-12-13 at 14:31:46\nFrom: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/gradle.rb\nLicense: Apache-2.0\n==> Dependencies\nRequired: openjdk ✔\n==> Analytics\ninstall: 49,077 (30 days), 120,116 (90 days), 552,595 (365 days)\ninstall-on-request: 48,775 (30 days), 119,457 (90 days), 547,531 (365 days)\nbuild-error: 0 (30 days)\n")])])]),t("h2",{attrs:{id:"gradle-프로젝트-생성하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle-프로젝트-생성하기"}},[a._v("#")]),a._v(" Gradle 프로젝트 생성하기")]),a._v(" "),t("p",[a._v("Gradle로 간단한 프로젝트를 생성해보자. 먼저 디렉토리를 생성하자.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ mkdir myProject\n$ cd myProject\n")])])]),t("p",[t("code",[a._v("gradle init")]),a._v("명령어로 해당 프로젝트를 Gradle 프로젝트로 초기화할 수 있다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ gradle init\n")])])]),t("p",[a._v("생성할 프로젝트 정보를 입력해야한다. 일단 아래와 같이 입력하자.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Select type of project to generate:\n  1: basic\n  2: application\n  3: library\n  4: Gradle plugin\nEnter selection (default: basic) [1..4] 1\n\nSelect build script DSL:\n  1: Groovy\n  2: Kotlin\nEnter selection (default: Groovy) [1..2] 1\n\nGenerate build using new APIs and behavior (some features may change in the next minor release)? (default: no) [yes, no] no\n\nProject name (default: myProject): myProject\n")])])]),t("p",[a._v("프로젝트가 성공적으로 생성되면 다음과 같이 출력된다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> Task :init\nGet more help with your project: Learn more about Gradle by exploring our samples at https://docs.gradle.org/7.3.1/samples\n")])])]),t("p",[a._v("Gradle 프로젝트는 다음과 같은 구조를 가진다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ tree .\n.\n├── build.gradle\n├── settings.gradle\n├── gradle\n│   └── wrapper\n│       ├── gradle-wrapper.jar\n│       └── gradle-wrapper.properties\n├── gradlew\n├── gradlew.bat\n└── .gradle\n\n2 directories, 6 files\n")])])]),t("p",[a._v("각 파일 및 폴더의 역할은 다음과 같다.")]),a._v(" "),t("h3",{attrs:{id:"build-gradle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-gradle"}},[a._v("#")]),a._v(" build.gradle")]),a._v(" "),t("p",[t("code",[a._v("build.gradle")]),a._v("은 Gradle 프로젝트의 핵심 파일이다. Gradle이 프로젝트를 빌드할 때 필요한 작업을 나열한다. 이러한 파일을 "),t("code",[a._v("빌드 스크립트")]),a._v("라고 한다.")]),a._v(" "),t("h3",{attrs:{id:"settings-gradle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#settings-gradle"}},[a._v("#")]),a._v(" settings.gradle")]),a._v(" "),t("p",[a._v("프로젝트에 대한 설정 정보가 포함된다. 프로젝트의 타입을 "),t("code",[a._v("1: basic")]),a._v("으로 선택했다면 다음과 같은 내용이 포함되어있다.")]),a._v(" "),t("div",{staticClass:"language-groovy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// settings.gradle")]),a._v("\nrootProject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'myProject'")]),a._v("\n")])])]),t("p",[a._v("만약 프로젝트가 여러 모듈로 구성되어 있다면 다음과 같이 작성해야한다.")]),a._v(" "),t("div",{staticClass:"language-groovy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[a._v("settings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("gradle\nrootProject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'myProject'")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("include")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'moduleA'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("include")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'moduleB'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("include")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'moduleC'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"gradle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle"}},[a._v("#")]),a._v(" .gradle")]),a._v(" "),t("p",[a._v("Gradle이 관리하는 프로젝트는 "),t("code",[a._v(".gradle")]),a._v("디렉토리를 포함한다. 개발자가 이 디렉토리를 직접 편집하는 일은 거의 없다.")]),a._v(" "),t("h3",{attrs:{id:"그-외의-파일"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#그-외의-파일"}},[a._v("#")]),a._v(" 그 외의 파일")]),a._v(" "),t("p",[a._v("그 외의 파일은 뒤에서 배울 "),t("code",[a._v("Gradle Wrapper")]),a._v("와 관련되어있다.")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("gradlew")])]),a._v(" "),t("li",[t("code",[a._v("gradlew.bat")])]),a._v(" "),t("li",[t("code",[a._v("gradle/wrapper/gradle-wrapper.jar")])]),a._v(" "),t("li",[t("code",[a._v("gradle/wrapper/gradle-wrapper.properties")])])]),a._v(" "),t("h2",{attrs:{id:"java-소스코드-작성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-소스코드-작성"}},[a._v("#")]),a._v(" Java 소스코드 작성")]),a._v(" "),t("p",[a._v("이제 Java 소스코드를 작성해보자. 우선 "),t("code",[a._v("src/java/main")]),a._v(" 디렉토리를 생성한다.")]),a._v(" "),t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ mkdir -p src/java/main\n$ cd src/java/main\n")])])]),t("p",[a._v("이 디렉토리 안에 패키지를 생성한다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ mkdir -p com.yologger.app\n")])])]),t("p",[a._v("디렉토리 구조는 다음과 같다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ tree\n.\n├── build.gradle\n├── gradle\n│   └── wrapper\n│       ├── gradle-wrapper.jar\n│       └── gradle-wrapper.properties\n├── gradlew\n├── gradlew.bat\n├── settings.gradle\n└── src\n    └── main\n        └── java\n            └── com\n                └── yologger\n                    └── app\n                        └── Main.java\n")])])]),t("p",[t("code",[a._v("Main.java")]),a._v("파일을 생성하고 아래와 같이 코드를 작성한다.")]),a._v(" "),t("div",{staticClass:"language-java Main.java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("yologger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Main")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h2",{attrs:{id:"빌드-스크립트-작성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#빌드-스크립트-작성"}},[a._v("#")]),a._v(" 빌드 스크립트 작성")]),a._v(" "),t("p",[t("code",[a._v("build.gradle")]),a._v("에는 프로젝트를 빌드할 때 필요한 작업들을 나열한다. 일단 다음과 같이 작성하자.")]),a._v(" "),t("div",{staticClass:"language-groovy build.gradle extra-class"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 플러그인 추가")]),a._v("\napply plugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'java'")]),a._v("\napply plugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'application'")]),a._v("\n\napplication "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Main 함수가 포함된 클래스 지정")]),a._v("\n    mainClass "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.yologger.app.Main'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h2",{attrs:{id:"프로젝트-빌드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프로젝트-빌드"}},[a._v("#")]),a._v(" 프로젝트 빌드")]),a._v(" "),t("p",[a._v("다음 명령어를 입력하여 프로젝트를 빌드할 수 있다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ gradle compileJava \n")])])]),t("p",[a._v("빌드가 정상적으로 수행되면 콘솔에 다음 내용이 출력된다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("BUILD SUCCESSFUL in 0s\n1 actionable task: 1 executed\n")])])]),t("p",[a._v("프로젝트의 루트 디렉토리에 "),t("code",[a._v("build")]),a._v("디렉토리가 생성된다. 컴파일된 코드가 이 곳에 저장된다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ ls\nsrc\nbuild           \n...\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ tree\n.\n├── build\n│   ├── classes\n│   │   └── java\n│   │       └── main\n│   │           └── com\n│   │               └── yologger\n│   │                   └── app\n│   │                       └── Main.class\n│   └── ...\n└── ...\n")])])]),t("p",[a._v("앱을 실행할 수도 있다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ gradle run\n\n> Task :run\nHello World!\n\nBUILD SUCCESSFUL in 627ms\n2 actionable tasks: 1 executed, 1 up-to-date\n")])])]),t("p",[t("code",[a._v("build")]),a._v("디렉토리를 삭제할 수도 있다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ gradle clean\n")])])]),t("h2",{attrs:{id:"gradle-wrapper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle-wrapper"}},[a._v("#")]),a._v(" Gradle Wrapper")]),a._v(" "),t("p",[a._v("안드로이드 스튜디오를 사용하는 개발자는 의문이 생길 수도 있다. Gradle을 별도로 설치하지 않고도 프로젝트를 빌드할 수 있기 때문이다. 이를 가능하게 하는 것이 "),t("code",[a._v("Gradle Wrapper")]),a._v("다.")]),a._v(" "),t("p",[t("code",[a._v("gradle init")]),a._v("명령어로 Gradle 프로젝트를 초기화하면 다음 파일들도 생성된다.")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("gradlew")])]),a._v(" "),t("li",[t("code",[a._v("gradlew.bat")])]),a._v(" "),t("li",[t("code",[a._v("gradle/wrapper/gradle-wrapper.jar")])]),a._v(" "),t("li",[t("code",[a._v("gradle/wrapper/gradle-wrapper.properties")])])]),a._v(" "),t("p",[a._v("이 네 가지 파일들이 "),t("code",[a._v("Gradle Wrapper")]),a._v("와 관련있다.")]),a._v(" "),t("h3",{attrs:{id:"gradlew"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradlew"}},[a._v("#")]),a._v(" gradlew")]),a._v(" "),t("p",[a._v("유닉스 기반 환경에서 Gradle 명렁어를 실행하기 위한 스크립트 파일")]),a._v(" "),t("h3",{attrs:{id:"gradlew-bat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradlew-bat"}},[a._v("#")]),a._v(" gradlew.bat")]),a._v(" "),t("p",[a._v("윈도우 기반 환경에서 Gradle 명렁어를 실행하기 위한 스크립트 파일이다.")]),a._v(" "),t("h3",{attrs:{id:"gradle-wrapper-gradle-wrapper-jar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle-wrapper-gradle-wrapper-jar"}},[a._v("#")]),a._v(" gradle/wrapper/gradle-wrapper.jar")]),a._v(" "),t("p",[a._v("그래들 래퍼 파일. "),t("code",[a._v("gradlew")]),a._v(" 또는 "),t("code",[a._v("gradlew.bat")]),a._v("이 실행되면 운영체제에 맞는 환경을 로컬 컴퓨터에 다운받아 구성한 후 빌드 작업을 실행합니다.")]),a._v(" "),t("h3",{attrs:{id:"gradle-wrapper-gradle-wrapper-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle-wrapper-gradle-wrapper-properties"}},[a._v("#")]),a._v(" gradle/wrapper/gradle-wrapper.properties")]),a._v(" "),t("p",[a._v("그래들 래퍼 설정 파일")]),a._v(" "),t("h2",{attrs:{id:"gradle-wrapper로-프로젝트-빌드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle-wrapper로-프로젝트-빌드"}},[a._v("#")]),a._v(" Gradle Wrapper로 프로젝트 빌드")]),a._v(" "),t("p",[a._v("이제 유닉스 계열인 Mac OS 환경에서 Gradle Wrapper를 통해 프로젝트를 빌드해보자.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ ./gradlew build\n")])])]),t("p",[a._v("위 명령어는 로컬 PC에 Gradle을 설치하고 "),t("code",[a._v("gradle build")]),a._v("명령어를 실행한 것과 동일하다.")]),a._v(" "),t("h2",{attrs:{id:"안드로이드-스튜디오와-gradle-wrapper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#안드로이드-스튜디오와-gradle-wrapper"}},[a._v("#")]),a._v(" 안드로이드 스튜디오와 Gradle Wrapper")]),a._v(" "),t("p",[a._v("안드로이드 스튜디오에서 프로젝트를 생성하면 자동으로 "),t("code",[a._v("Gradle Wrapper")]),a._v("와 관련된 파일이 생성된다. 따라서 이 프로젝트를 다른 로컬 PC에 구성해도 "),t("code",[a._v("Gradle")]),a._v("을 설치하지 않고도 빌드할 수 있다.\n"),t("img",{attrs:{src:r(1490),alt:""}})]),a._v(" "),t("h2",{attrs:{id:"gradle로-다양한-프로젝트-만들기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle로-다양한-프로젝트-만들기"}},[a._v("#")]),a._v(" Gradle로 다양한 프로젝트 만들기")]),a._v(" "),t("p",[a._v("Gradle을 사용하면 다양한 어플리케이션을 생성할 수 있다.")]),a._v(" "),t("h3",{attrs:{id:"java-프로젝트-생성해보기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-프로젝트-생성해보기"}},[a._v("#")]),a._v(" Java 프로젝트 생성해보기")]),a._v(" "),t("p",[a._v("우선 Java 프로젝트를 생성해보자.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ mkdir JavaApplication\n\n$ cd JavaApplication\n\n$ gradle init\n\nSelect type of project to generate:\n  1: basic\n  2: application\n  3: library\n  4: Gradle plugin\nEnter selection (default: basic) [1..4] 2\n\nSelect implementation language:\n  1: C++\n  2: Groovy\n  3: Java\n  4: Kotlin\n  5: Scala\n  6: Swift\nEnter selection (default: Java) [1..6] 3\n\nSplit functionality across multiple subprojects?:\n  1: no - only one application project\n  2: yes - application and library projects\nEnter selection (default: no - only one application project) [1..2] \n\nSelect build script DSL:\n  1: Groovy\n  2: Kotlin\nEnter selection (default: Groovy) [1..2] 1\n\nGenerate build using new APIs and behavior (some features may change in the next minor release)? (default: no) [yes, no] \nSelect test framework:\n  1: JUnit 4\n  2: TestNG\n  3: Spock\n  4: JUnit Jupiter\nEnter selection (default: JUnit Jupiter) [1..4] \n\nProject name (default: JavaApplication): \nSource package (default: JavaApplication): com.yologger.app    \n\n> Task :init\nGet more help with your project: https://docs.gradle.org/7.3.1/samples/sample_building_java_applications.html\n\nBUILD SUCCESSFUL in 29s\n2 actionable tasks: 2 executed\n")])])]),t("p",[a._v("생성된 프로젝트의 구조는 다음과 같다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ tree\n.\n├── app\n│   ├── build.gradle\n│   └── src\n│       ├── main\n│       │   ├── java\n│       │   │   └── com\n│       │   │       └── yologger\n│       │   │           └── app\n│       │   │               └── App.java\n│       │   └── resources\n│       └── test\n│           ├── java\n│           │   └── com\n│           │       └── yologger\n│           │           └── app\n│           │               └── AppTest.java\n│           └── resources\n├── gradle\n│   └── wrapper\n│       ├── gradle-wrapper.jar\n│       └── gradle-wrapper.properties\n├── gradlew\n├── gradlew.bat\n└── settings.gradle\n")])])]),t("h3",{attrs:{id:"kotlin-프로젝트-생성해보기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kotlin-프로젝트-생성해보기"}},[a._v("#")]),a._v(" Kotlin 프로젝트 생성해보기")]),a._v(" "),t("p",[a._v("우선 Kotlin 프로젝트를 생성해보자.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ mkdir KotlinApplication\n\n$ cd KotlinApplication\n\n$ gradle init\n\nSelect type of project to generate:\n  1: basic\n  2: application\n  3: library\n  4: Gradle plugin\nEnter selection (default: basic) [1..4] 2\n\nSelect implementation language:\n  1: C++\n  2: Groovy\n  3: Java\n  4: Kotlin\n  5: Scala\n  6: Swift\nEnter selection (default: Java) [1..6] 4\n\nSplit functionality across multiple subprojects?:\n  1: no - only one application project\n  2: yes - application and library projects\nEnter selection (default: no - only one application project) [1..2] \n\nSelect build script DSL:\n  1: Groovy\n  2: Kotlin\nEnter selection (default: Kotlin) [1..2] 1\n\nGenerate build using new APIs and behavior (some features may change in the next minor release)? (default: no) [yes, no] \nProject name (default: KotlinApplication): \nSource package (default: KotlinApplication): com.yologger.app\n\n> Task :init\nGet more help with your project: https://docs.gradle.org/7.3.1/samples/sample_building_kotlin_applications.html\n\nBUILD SUCCESSFUL in 24s\n2 actionable tasks: 2 executed\n")])])]),t("p",[a._v("프로젝트 구조는 다음과 같다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ tree\n.\n├── app\n│   ├── build.gradle\n│   └── src\n│       ├── main\n│       │   ├── kotlin\n│       │   │   └── com\n│       │   │       └── yologger\n│       │   │           └── app\n│       │   │               └── App.kt\n│       │   └── resources\n│       └── test\n│           ├── kotlin\n│           │   └── com\n│           │       └── yologger\n│           │           └── app\n│           │               └── AppTest.kt\n│           └── resources\n├── gradle\n│   └── wrapper\n│       ├── gradle-wrapper.jar\n│       └── gradle-wrapper.properties\n├── gradlew\n├── gradlew.bat\n└── settings.gradle\n\n16 directories, 8 files\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);