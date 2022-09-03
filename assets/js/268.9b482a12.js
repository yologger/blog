(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{1768:function(t,a,s){"use strict";s.r(a);var e=s(34),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#deprecated"}},[t._v("deprecated")])]),s("li",[s("a",{attrs:{href:"#implementation"}},[t._v("implementation")])]),s("li",[s("a",{attrs:{href:"#api"}},[t._v("api")])]),s("li",[s("a",{attrs:{href:"#compileonly-lombok"}},[t._v("compileOnly (lombok)")])]),s("li",[s("a",{attrs:{href:"#runtimeonly-db"}},[t._v("runtimeOnly (DB)")])]),s("li",[s("a",{attrs:{href:"#안드로이드"}},[t._v("안드로이드")])]),s("li",[s("a",{attrs:{href:"#안드로이드-테스트"}},[t._v("안드로이드 테스트")])]),s("li",[s("a",{attrs:{href:"#스프링"}},[t._v("스프링")])]),s("li",[s("a",{attrs:{href:"#어노테이션-프로세서"}},[t._v("어노테이션 프로세서")])])])]),s("p"),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),s("p",[t._v("현재 작성 중인 포스트입니다.")])]),t._v(" "),s("h2",{attrs:{id:"deprecated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deprecated"}},[t._v("#")]),t._v(" deprecated")]),t._v(" "),s("ul",[s("li",[t._v("apk (deprecated)")]),t._v(" "),s("li",[t._v("compile(deprecated)")]),t._v(" "),s("li",[t._v("testCompile(deprecated)")]),t._v(" "),s("li",[t._v("provided(deprecated) => runtimeOnly")])]),t._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" implementation")]),t._v(" "),s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dependency on a local library module")]),t._v("\n    implementation "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('":mylibrary"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dependency on local binaries")]),t._v("\n    implementation "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fileTree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'libs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.jar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dependency on a remote binary")]),t._v("\n    implementation "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.example.android:app-magic:12.3'")]),t._v("\n    implementation group"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.example.android'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app-magic'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12.3'")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("implementation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-library'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        exclude group"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.example.imgtools'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'native'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" api")]),t._v(" "),s("h2",{attrs:{id:"compileonly-lombok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compileonly-lombok"}},[t._v("#")]),t._v(" compileOnly (lombok)")]),t._v(" "),s("h2",{attrs:{id:"runtimeonly-db"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runtimeonly-db"}},[t._v("#")]),t._v(" runtimeOnly (DB)")]),t._v(" "),s("h2",{attrs:{id:"안드로이드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#안드로이드"}},[t._v("#")]),t._v(" 안드로이드")]),t._v(" "),s("ul",[s("li",[t._v("debugImplementation - 디버그 빌드변형 빌드 시 적용")]),t._v(" "),s("li",[t._v("releaseImplementation - 릴리즈 빌드변형 시 적용")])]),t._v(" "),s("h2",{attrs:{id:"안드로이드-테스트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#안드로이드-테스트"}},[t._v("#")]),t._v(" 안드로이드 테스트")]),t._v(" "),s("ul",[s("li",[t._v("testImplementation")]),t._v(" "),s("li",[t._v("androidTestImplementation")])]),t._v(" "),s("h2",{attrs:{id:"스프링"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스프링"}},[t._v("#")]),t._v(" 스프링")]),t._v(" "),s("ul",[s("li",[t._v("testImplementation")]),t._v(" "),s("li",[t._v("debugImplementation")])]),t._v(" "),s("h2",{attrs:{id:"어노테이션-프로세서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#어노테이션-프로세서"}},[t._v("#")]),t._v(" 어노테이션 프로세서")]),t._v(" "),s("ul",[s("li",[t._v("annotationProcessor (Dagger)")]),t._v(" "),s("li",[t._v("kapt (코틀린)")])])])}),[],!1,null,null,null);a.default=n.exports}}]);