(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1603:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#코드에서-buildconfig에-접근하기"}},[t._v("코드에서 BuildConfig에 접근하기")])]),a("li",[a("a",{attrs:{href:"#상수를-직접-정의하고-사용하기"}},[t._v("상수를 직접 정의하고 사용하기")])]),a("li",[a("a",{attrs:{href:"#상수를-xml-파일에서-사용하기"}},[t._v("상수를 xml 파일에서 사용하기")])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"buildconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buildconfig"}},[t._v("#")]),t._v(" BuildConfig")]),t._v(" "),a("p",[t._v("안드로이드 시스템은 앱을 빌드할 때 여러가지 파일을 자동으로 생성합니다. 그 중 하나가 "),a("code",[t._v("BuildConfig")]),t._v("클래스입니다. 이 클래스에는 현재 빌드와 관련된 정보가 상수 형태로 정의되어 있으며, 코드에서도 직접 참조할 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"코드에서-buildconfig에-접근하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#코드에서-buildconfig에-접근하기"}},[t._v("#")]),t._v(" 코드에서 BuildConfig에 접근하기")]),t._v(" "),a("p",[t._v("자동으로 생성된 "),a("code",[t._v("BuildConfig")]),t._v("클래스는 다음과 같습니다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BuildConfig.java")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" DEBUG "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseBoolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" APPLICATION_ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.yologger.example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" BUILD_TYPE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" VERSION_CODE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" VERSION_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("BuildConfig")]),t._v("클래스에 정의된 상수는 코드에서 다음과 같이 접근할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MainActivity.kt")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MainActivity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AppCompatActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bundle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" applicationId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BuildConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("APPLICATION_ID  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "com.yologger.example"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" versionCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BuildConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VERSION_CODE      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("그렇다면 이 상수는 어디에 정의되어 있을까요? 바로 모듈 수준의 "),a("code",[t._v("build.gradle")]),t._v("입니다. 이 파일의 "),a("code",[t._v("defaultConfig 섹션")]),t._v("에 상수가 정의되어 있습니다.")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 모듈 수준의 build.gradle")]),t._v("\n\nandroid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    defaultConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        applicationId "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.yologger.example"')]),t._v("\n        minSdkVersion "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\n        targetSdkVersion "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n        versionCode "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        versionName "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"1.0"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"상수를-직접-정의하고-사용하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#상수를-직접-정의하고-사용하기"}},[t._v("#")]),t._v(" 상수를 직접 정의하고 사용하기")]),t._v(" "),a("p",[a("code",[t._v("buildConfigField")]),t._v("를 사용하면 상수를 직접 정의하고 코드에서 참조할 수도 있습니다. 모듈 수준의 "),a("code",[t._v("build.gradle")]),t._v("에 "),a("code",[t._v('buildConfigField ("DATA_TYPE", "KEY", "VALUE")')]),t._v(" 형태로 선언하면 됩니다.")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 모듈 수준의 build.gradle")]),t._v("\n\nandroid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    defaultConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        applicationId "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.yologger.example"')]),t._v("\n        minSdkVersion "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\n        targetSdkVersion "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n        versionCode "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        versionName "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"1.0"')]),t._v("\n        \n        buildConfigField "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"String"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"AUTH_API_KEY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"your_auth_api_key\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        buildConfigField "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"String"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"AUTH_API_URL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"your_auth_api_url\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("추가 후 "),a("code",[t._v("Gradle Sync")]),t._v("를 해야만 BuildConfig 클래스가 생성됩니다.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("문자열의 경우 작은 따옴표로 감싸주어야 합니다.")])]),t._v(" "),a("p",[t._v("새로 생성된 "),a("code",[t._v("BuildConfig")]),t._v("클래스는 다음과 같습니다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BuildConfig.java")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("simple_memo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" DEBUG "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseBoolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" APPLICATION_ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.yologger.example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" BUILD_TYPE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" VERSION_CODE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" VERSION_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Field from default config.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" AUTH_API_KEY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_auth_api_key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Field from default config.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" AUTH_API_URL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_auth_api_url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("생성된 상수에 접근해봅시다.")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MainActivity.kt")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MainActivity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AppCompatActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bundle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" apiKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BuildConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AUTH_API_KEY       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your_auth_api_key")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" apiUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BuildConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AUTH_API_URL       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your_auth_api_url")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"상수를-xml-파일에서-사용하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#상수를-xml-파일에서-사용하기"}},[t._v("#")]),t._v(" 상수를 xml 파일에서 사용하기")]),t._v(" "),a("p",[a("code",[t._v("xml 파일")]),t._v("에서 사용할 상수는 "),a("code",[t._v("resValue")]),t._v("를 사용하여 선언합니다.")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// build.gradle")]),t._v("\n\nandroid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    defaultConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// buildConfigField ("String", "AUTH_API_KEY", \'"your_auth_api_key"\')')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// buildConfigField ("String", "AUTH_API_URL", \'"your_auth_api_url"\')')]),t._v("\n        resValue "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"CLIENT_ID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"your_client_id"')]),t._v("\n        resValue "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"CLIENT_SECRET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"your_client_secret"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("다음과 같이 사용할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("// activity_main.xml\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TextView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@string/CLIENT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TextView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@string/CLIENT_SECRET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);