(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1582:function(t,s,a){"use strict";a.r(s);var e=a(34),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"shared-preference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared-preference"}},[t._v("#")]),t._v(" Shared Preference")]),t._v(" "),a("p",[a("code",[t._v("Shared Preference")]),t._v("를 사용하면 비교적 간단한 값을 저장할 수 있습니다. Shared Preference는 파일 형태로 아래 경로에 저장됩니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("data/data/[pacakge_name]/shared_prefs/[file_name].xml\n")])])]),a("p",[t._v("Shared Preference 파일에 저장된 데이터는 앱이 삭제되기 전까지 유지됩니다.")]),t._v(" "),a("h2",{attrs:{id:"shared-preference-객체-생성하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared-preference-객체-생성하기"}},[t._v("#")]),t._v(" Shared Preference 객체 생성하기")]),t._v(" "),a("p",[a("code",[t._v("Context")]),t._v("클래스에는 "),a("code",[t._v("getSharedPreferences()")]),t._v("메소드와 "),a("code",[t._v("getPreferences()")]),t._v("메소드가 선언되어있습니다.")]),t._v(" "),a("div",{staticClass:"language-java Context.java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SharedPreferences")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSharedPreferences")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PreferencesMode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SharedPreferences")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSharedPreferences")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PreferencesMode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("따라서 "),a("code",[t._v("Context")]),t._v("를 구현한 객체에서는 둘 중 하나의 메서드를 호출하여 새로운 Shared Preference 파일을 생성하거나 기존 파일에 접근할 수 있습니다. "),a("code",[t._v("액티비티(Activity)")]),t._v("도 "),a("code",[t._v("Context")]),t._v("클래스를 구현하므로 두 메소드를 호출할 수 있습니다.")]),t._v(" "),a("h3",{attrs:{id:"getsharedpreferences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getsharedpreferences"}},[t._v("#")]),t._v(" getSharedPreferences()")]),t._v(" "),a("p",[a("code",[t._v("getSharedPreferences()")]),t._v("는 함수의 첫 번째 인자로 전달되는 이름으로 파일을 생성하거나 구분합니다.")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" YOUR_KEY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_key"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" sharedPref "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" activity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSharedPreferences")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("YOUR_KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODE_PRIVATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"getpreferences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getpreferences"}},[t._v("#")]),t._v(" getPreferences()")]),t._v(" "),a("p",[t._v("액티비티에서 하나의 Shared Preference 파일만 사용해야하는 경우 "),a("code",[t._v("getPreferences()")]),t._v("메서드를 사용합니다. 이 메서드는 액티비티에 포함된 기본 Shared Preference 파일을 자동으로 검색하므로 첫 번째 인자로 파일의 이름을 제공할 필요가 없습니다.")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" sharedPreference "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" activity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPreferences")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODE_PRIVATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"shared-prefenreces에-쓰기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared-prefenreces에-쓰기"}},[t._v("#")]),t._v(" Shared Prefenreces에 쓰기")]),t._v(" "),a("p",[t._v("SharedPreference의 "),a("code",[t._v("edit()")]),t._v("메소드를 호출하여 "),a("code",[t._v("Editor")]),t._v("객체를 생성합니다.")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" YOUR_KEY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_key"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" sharedPref "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" activity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSharedPreferences")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("YOUR_KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODE_PRIVATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" editor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sharedPref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("edit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("이제 "),a("code",[t._v("put○○○()")]),t._v("을 호출하여 데이터를 저장할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[t._v("edit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Monica"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nedit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nedit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putBoolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"is_married"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nedit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"height"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("168.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("마지막으로 "),a("code",[t._v("commit()")]),t._v("을 호출하여 동기화합니다.")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[t._v("edit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"shared-prefrences에서-읽기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared-prefrences에서-읽기"}},[t._v("#")]),t._v(" Shared Prefrences에서 읽기")]),t._v(" "),a("p",[a("code",[t._v("SharedPreferences")]),t._v("객체의 "),a("code",[t._v("get()")]),t._v("를 호출하여 데이터를 읽어올 수 있습니다. 이 때 두 번째 인자로 값이 없을 때의 기본값을 지정합니다.")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" YOUR_KEY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_key"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" sharedPref "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" activity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSharedPreferences")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("YOUR_KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODE_PRIVATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sharedPref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sharedPref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" isMarred "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sharedPref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"is_married"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sharedPref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"height"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"context를-구현하지-않은-클래스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context를-구현하지-않은-클래스"}},[t._v("#")]),t._v(" Context를 구현하지 않은 클래스")]),t._v(" "),a("p",[t._v("개발을 하다보면 "),a("code",[t._v("Context")]),t._v("클래스를 구현하지 않은 클래스에서도 "),a("code",[t._v("Shared Preferences")]),t._v("에 접근할 필요가 있습니다. 이 때는 "),a("code",[t._v("Application")]),t._v("클래스를 활용할 수 있습니다.")]),t._v(" "),a("p",[t._v("우선 "),a("code",[t._v("Application")]),t._v("클래스를 상속하는 "),a("code",[t._v("App")]),t._v("클래스를 정의합니다.")]),t._v(" "),a("div",{staticClass:"language-kotlin App.kt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Application\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("companion")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lateinit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" App\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("AndroidManifest.xml")]),t._v("파일에 "),a("code",[t._v("App")]),t._v("클래스를 지정합니다.")]),t._v(" "),a("div",{staticClass:"language-xml AndroidManifest.xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="utf-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("manifest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.yologger.shared_preference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("application")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.yologger.shared_preference.App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("manifest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("이제 다음과 같이 "),a("code",[t._v("Shared Preferences")]),t._v("에 접근할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" YourClass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" sharedPreference "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSharedPreferences")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_file_key"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODE_PRIVATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);