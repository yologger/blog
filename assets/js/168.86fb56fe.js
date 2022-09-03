(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1540:function(a,s,t){"use strict";t.r(s);var n=t(34),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[a._v("#")]),a._v(" Table of Contents")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#메소드-참조"}},[a._v("메소드 참조")])]),t("li",[t("a",{attrs:{href:"#생성자-참조"}},[a._v("생성자 참조")])])])]),t("p"),a._v(" "),t("h1",{attrs:{id:"메소드-참조-생성자-참조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메소드-참조-생성자-참조"}},[a._v("#")]),a._v(" 메소드 참조, 생성자 참조")]),a._v(" "),t("p",[a._v("Java 8 부터 "),t("code",[a._v("메소드 참조")]),a._v(", "),t("code",[a._v("생성자 참조")]),a._v("를 사용할 수 있다.")]),a._v(" "),t("h2",{attrs:{id:"메소드-참조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메소드-참조"}},[a._v("#")]),a._v(" 메소드 참조")]),a._v(" "),t("p",[t("code",[a._v("메소드 참조(Method Reference)")]),a._v("을 사용하면 람다식이 오직 하나의 메소드만을 호출하는 경우 람다식, 람다식의 매개변수를 생략하고 "),t("code",[a._v("::")]),a._v("을 사용하여 간단하게 표현할 수 있다.")]),a._v(" "),t("p",[a._v("예제를 살펴보자. 다음과 같은 함수형 인터페이스가 있다.")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@FunctionalInterface")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" something"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("이제 함수형 인터페이스 타입의 변수에 람다식을 할당한다.")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("div",{staticClass:"highlight-lines"},[t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v(" lambda "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("something"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("something"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nlambda"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("위 코드는 람다식이 단 하나의 메소드 "),t("code",[a._v("System.out.println(something)")]),a._v("만을 호출하고 있다. 이처럼 람다식이 하나의 메소드만을 호출하는 경우 메소드 참조를 사용하여 다음과 같이 단축할 수 있다.")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("div",{staticClass:"highlight-lines"},[t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v(" lambda "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nlambda"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("즉, 두 구문은 동일하다.")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("something"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("something"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),a._v("\n")])])]),t("p",[a._v("메소드 참조는 다음과 같은 형태로 사용한다.")]),a._v(" "),t("ul",[t("li",[a._v("클래스이름"),t("code",[a._v("::")]),a._v("메소드이름")]),a._v(" "),t("li",[a._v("참조변수이름"),t("code",[a._v("::")]),a._v("메소드이름")])]),a._v(" "),t("h2",{attrs:{id:"생성자-참조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#생성자-참조"}},[a._v("#")]),a._v(" 생성자 참조")]),a._v(" "),t("p",[a._v("생성자를 호출하는 람다식도 메소드 참조 예제처럼 단축할 수 있다.")]),a._v(" "),t("p",[a._v("다음 예제를 보자")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@FunctionalInterface")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("div",{staticClass:"language-java extra-class"},[t("div",{staticClass:"highlight-lines"},[t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v(" lambda "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" lambda"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Paul"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("생성자 참조를 사용하면 다음과 같이 단축할 수 있다.")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("div",{staticClass:"highlight-lines"},[t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v(" lambda "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" lambda"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Paul"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);