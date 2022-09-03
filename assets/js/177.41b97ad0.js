(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1549:function(t,a,s){"use strict";s.r(a);var n=s(34),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#kotlin-compiler"}},[t._v("Kotlin Compiler")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"kotlin-compiler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kotlin-compiler"}},[t._v("#")]),t._v(" Kotlin Compiler")]),t._v(" "),s("p",[s("code",[t._v("Kotlin Compiler")]),t._v("는 "),s("code",[t._v(".kt")]),t._v("확장자가 붙은 소스코드를 "),s("code",[t._v(".class")]),t._v("확장자가 붙은 바이트코드로 변환한다. 이 바이트코드 역시 JVM에서 실행할 수 있다.")]),t._v(" "),s("p",[t._v("Mac OS 환경에서 "),s("code",[t._v("Homebrew")]),t._v("로 Kotlin을 설치해보자.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ brew install kotlin\n")])])]),s("p",[t._v("설치된 Kotlin의 정보를 확인해보자.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ brew info kotlin\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("kotlin: stable 1.6.10 (bottled)\nStatically typed programming language for the JVM\nhttps://kotlinlang.org/\n/usr/local/Cellar/kotlin/1.6.10 (112 files, 74MB) *\n  Poured from bottle on 2021-12-21 at 19:38:56\nFrom: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/kotlin.rb\nLicense: Apache-2.0\n==> Dependencies\nRequired: openjdk ✔\n==> Analytics\ninstall: 7,631 (30 days), 19,253 (90 days), 78,705 (365 days)\ninstall-on-request: 7,421 (30 days), 18,656 (90 days), 75,069 (365 days)\nbuild-error: 0 (30 days)\n")])])]),s("p",[t._v("설치 경로의 "),s("code",[t._v("bin")]),t._v("디렉토리에는 Kotlin과 관련된 다양한 명령어가 포함되어있다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ pwd\n/usr/local/Cellar/kotlin/1.6.10/bin\n\n$ ls\nkotlin\nkotlinc\nkapt\n...\n")])])]),s("p",[t._v("이제 Kotlin Compiler로 "),s("code",[t._v("Main.kt")]),t._v("를 컴파일해보자.")]),t._v(" "),s("div",{staticClass:"language-kotlin Main.kt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ kotlinc Main.kt\n")])])]),s("p",[t._v("바이트 코드가 생성되었다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ls\nMain.kt\nMainKt.class    // 바이트 코드\n")])])]),s("p",[t._v("이 바이트코드는 JVM에서 실행할 수 있다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ java MainKt\nHello World\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);