(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1632:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"table-of-contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#publishsubject"}},[t._v("PublishSubject")])]),n("li",[n("a",{attrs:{href:"#behaviorsubject"}},[t._v("BehaviorSubject")])])])]),n("p"),t._v(" "),n("h1",{attrs:{id:"subject"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[t._v("#")]),t._v(" Subject")]),t._v(" "),n("p",[n("code",[t._v("Subject")]),t._v("는 "),n("u",[t._v("이벤트 방출")]),t._v("과 "),n("u",[t._v("이벤트 수신")]),t._v("을 모두 할 수 있는 객체입니다.")]),t._v(" "),n("p",[t._v("예제를 살펴봅시다.")]),t._v(" "),n("div",{staticClass:"language-kotlin extra-class"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Subject 생성")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" publishSubject "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PublishSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Int"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 구독")]),t._v("\npublishSubject\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이벤트 수신")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이벤트 방출")]),t._v("\npublishSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npublishSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("결과물은 다음과 같습니다.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("1\n2\n")])])]),n("p",[n("code",[t._v("Subject")]),t._v("에는 크게 네 가지가 있습니다.")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("PublishSubject")])]),t._v(" "),n("li",[n("code",[t._v("BehaviorSubject")])]),t._v(" "),n("li",[n("code",[t._v("AsyncSubject")])]),t._v(" "),n("li",[n("code",[t._v("RelaySubject")])])]),t._v(" "),n("p",[t._v("이번 포스트에서는 자주 사용하는 "),n("code",[t._v("PublishSubject")]),t._v(", "),n("code",[t._v("BehaviorSubject")]),t._v("에 대해 알아보겠습니다.")]),t._v(" "),n("h2",{attrs:{id:"publishsubject"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#publishsubject"}},[t._v("#")]),t._v(" PublishSubject")]),t._v(" "),n("p",[n("code",[t._v("PublishSubject")]),t._v("는 다음과 같이 동작합니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(973),alt:""}})]),t._v(" "),n("p",[n("code",[t._v("PublishSubject")]),t._v("는 다음과 같이 사용합니다.")]),t._v(" "),n("div",{staticClass:"language-kotlin extra-class"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" publishSubject "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PublishSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Int"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 구독 전 이벤트 방출")]),t._v("\npublishSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 구독")]),t._v("\npublishSubject\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 구독 후 이벤트 방출")]),t._v("\npublishSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npublishSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("결과는 다음과 같습니다.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("2\n3\n")])])]),n("p",[t._v("주의할 점이 있습니다. "),n("code",[t._v("PublishSubject")]),t._v("는 구독하기 전 발생한 이벤트는 수신하지 못한다는 것입니다.")]),t._v(" "),n("h2",{attrs:{id:"behaviorsubject"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#behaviorsubject"}},[t._v("#")]),t._v(" BehaviorSubject")]),t._v(" "),n("p",[n("code",[t._v("BehaviorSubject")]),t._v("는 초기값을 설정할 수 있습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(974),alt:""}})]),t._v(" "),n("div",{staticClass:"language-kotlin extra-class"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BehaviorSubject 생성")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" behaviorSubject "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BehaviorSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 초기값 설정")]),t._v("\n\nbehaviorSubject\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A: ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("it")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nbehaviorSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbehaviorSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("결과는 다음과 같습니다. "),n("code",[t._v("PublishSubject")]),t._v("와는 다르게 구독하기 전 방출된 초기값도 수신하고 있습니다.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("A: 1    // 초기값\nA: 2\nA: 3\n")])])]),n("p",[t._v("이제 두 번째 구독을 해봅시다.")]),t._v(" "),n("div",{staticClass:"language-kotlin extra-class"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BehaviorSubject 생성")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" behaviorSubject "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BehaviorSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 초기값 설정")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 첫 번째 구독")]),t._v("\nbehaviorSubject\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A: ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("it")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nbehaviorSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbehaviorSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 두 번째 구독")]),t._v("\nbehaviorSubject\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B: ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("it")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nbehaviorSubject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("결과는 다음과 같습니다.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("A: 1\nA: 2\nA: 3\nB: 3\nA: 4\nB: 4\n")])])]),n("p",[t._v("두 번째 구독부터는 가장 마지막으로 방출된 값을 전달받습니다.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("A: 1\nA: 2\nA: 3    // 첫 번째 구독의 마지막 방출값\nB: 3    // 두 번째 구독이 마지막으로 방출된 값을 전달받아 출력\nA: 4\nB: 4\n")])])])])}),[],!1,null,null,null);s.default=e.exports},973:function(t,s,a){t.exports=a.p+"assets/img/1.6d75b539.png"},974:function(t,s,a){t.exports=a.p+"assets/img/2.11b540bf.png"}}]);