(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{1775:function(a,t,s){"use strict";s.r(t);var e=s(34),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[a._v("#")]),a._v(" Table of Contents")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#compiler-vs-interpreter"}},[a._v("Compiler vs. Interpreter")])]),s("li",[s("a",{attrs:{href:"#jvm-jre-jdk"}},[a._v("JVM, JRE, JDK")])]),s("li",[s("a",{attrs:{href:"#jvm-메모리구조"}},[a._v("JVM 메모리구조")])]),s("li",[s("a",{attrs:{href:"#final"}},[a._v("final")])]),s("li",[s("a",{attrs:{href:"#unchecked-exception-vs-checked-exception"}},[a._v("Unchecked Exception vs. Checked Exception")])]),s("li",[s("a",{attrs:{href:"#제너릭"}},[a._v("제너릭")])]),s("li",[s("a",{attrs:{href:"#어노테이션"}},[a._v("어노테이션")])]),s("li",[s("a",{attrs:{href:"#직렬화"}},[a._v("직렬화")])]),s("li",[s("a",{attrs:{href:"#얕은-복사-vs-깊은-복사"}},[a._v("얕은 복사 vs. 깊은 복사")])]),s("li",[s("a",{attrs:{href:"#객체-비교"}},[a._v("객체 비교")]),s("ul",[s("li",[s("a",{attrs:{href:"#동일성"}},[a._v("동일성")])]),s("li",[s("a",{attrs:{href:"#동등성"}},[a._v("동등성")])])])]),s("li",[s("a",{attrs:{href:"#가변-객체-vs-불변-객체"}},[a._v("가변 객체 vs. 불변 객체")])]),s("li",[s("a",{attrs:{href:"#접근-제한자"}},[a._v("접근 제한자")])]),s("li",[s("a",{attrs:{href:"#static"}},[a._v("static")])]),s("li",[s("a",{attrs:{href:"#함수형-인터페이스"}},[a._v("함수형 인터페이스")])]),s("li",[s("a",{attrs:{href:"#리플렉션"}},[a._v("리플렉션")]),s("ul",[s("li",[s("a",{attrs:{href:"#클래스-참조"}},[a._v("클래스 참조")])]),s("li",[s("a",{attrs:{href:"#메소드-참조"}},[a._v("메소드 참조")])]),s("li",[s("a",{attrs:{href:"#생성자-참조"}},[a._v("생성자 참조")])])])]),s("li",[s("a",{attrs:{href:"#optional-api"}},[a._v("Optional API")])]),s("li",[s("a",{attrs:{href:"#stream-api"}},[a._v("Stream API")])]),s("li",[s("a",{attrs:{href:"#default-메소드"}},[a._v("default 메소드")])]),s("li",[s("a",{attrs:{href:"#jdbc"}},[a._v("JDBC")])]),s("li",[s("a",{attrs:{href:"#solid-원칙"}},[a._v("SOLID 원칙")]),s("ul",[s("li",[s("a",{attrs:{href:"#srp"}},[a._v("SRP")])]),s("li",[s("a",{attrs:{href:"#ocp"}},[a._v("OCP")])]),s("li",[s("a",{attrs:{href:"#lsp"}},[a._v("LSP")])]),s("li",[s("a",{attrs:{href:"#isp"}},[a._v("ISP")])]),s("li",[s("a",{attrs:{href:"#dip"}},[a._v("DIP")])])])])])]),s("p"),a._v(" "),s("h1",{attrs:{id:"java-면접-정리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-면접-정리"}},[a._v("#")]),a._v(" Java 면접 정리")]),a._v(" "),s("p",[s("code",[a._v("Java")]),a._v(" 면접 내용을 정리합니다.")]),a._v(" "),s("h2",{attrs:{id:"compiler-vs-interpreter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compiler-vs-interpreter"}},[a._v("#")]),a._v(" Compiler vs. Interpreter")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("Compiler")]),a._v(": 컴파일러는 소스 코드를 기계어로 컴파일한다. 컴파일러 언어는 소스 코드를 컴파일하는 과정이 필요하다. 예를 들어 c언어는 "),s("code",[a._v(".c")]),a._v(" 확장자의 소스코드는 "),s("code",[a._v("gcc")]),a._v("컴파일러로 컴파일하여 "),s("code",[a._v(".o")]),a._v("확장자의 오브젝트 파일이라는 실행 파일을 생성한다.")]),a._v(" "),s("li",[s("code",[a._v("Interpreter")]),a._v(": 인터프리터 언어 소스 코드를 컴파일하는 과정이 필요없으며, 인터프리터가 소스 코드를 한 줄씩 읽어서 실행한다. 예를 들어 JavaScript 언어는 크롬 V8 런타임이 소스코드를 한 줄씩 읽어 실행한다.")]),a._v(" "),s("li",[a._v("Java는 두 특성을 모두 가진 언어다. "),s("code",[a._v(".java")]),a._v(" 확장자의 소스코드를 "),s("code",[a._v(".class")]),a._v(" 확장자의 바이트 코드로 컴파일한다는 점에서 컴파일 언어다. 또한 JVM이 바이트 코드를 운영체제에 종속적인 기계어로 변환하여 실행한다는 점에서 인터프리터 언어의 특성도 가지고 있다.")])]),a._v(" "),s("h2",{attrs:{id:"jvm-jre-jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm-jre-jdk"}},[a._v("#")]),a._v(" JVM, JRE, JDK")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("JVM")]),a._v(": 자바 바이트코드를 운영체제에 종속적인 기계어로 변환한 후 실행한다.")]),a._v(" "),s("li",[s("code",[a._v("JRE")]),a._v(": JVM에 Java API")]),a._v(" "),s("li",[s("code",[a._v("JDK")]),a._v(": JRE + 개발과 관련된 도구")])]),a._v(" "),s("h2",{attrs:{id:"jvm-메모리구조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm-메모리구조"}},[a._v("#")]),a._v(" JVM 메모리구조")]),a._v(" "),s("ul",[s("li",[a._v("클래스 파일을 메모리에 로드하는 "),s("code",[a._v("Class Loader")])]),a._v(" "),s("li",[a._v("클래스 파일이 로드되는 "),s("code",[a._v("Runtime Data Area")])]),a._v(" "),s("li",[a._v("Runtime Data Area를 실행하는 "),s("code",[a._v("Execution Engine")])]),a._v(" "),s("li",[a._v("참조가 없는 인스턴스를 삭제하는 "),s("code",[a._v("Garbage Collector")])]),a._v(" "),s("li",[s("code",[a._v("Runtime Data Area")]),a._v("는 다섯 부분으로 나뉜다.\n"),s("ul",[s("li",[a._v("메소드, 클래스, 인터페이스, Static 변수, 상수가 배치되는 "),s("code",[a._v("Method")]),a._v("영역. 모든 스레드가 공유한다.")]),a._v(" "),s("li",[a._v("지역변수와 파라미터가 저장되는 "),s("code",[a._v("Stack")]),a._v("영역. 스레드마다 존재한다.")]),a._v(" "),s("li",[a._v("동적 할당 영역인 "),s("code",[a._v("Heap")]),a._v("영역. 모든 스레드가 공유한다.")]),a._v(" "),s("li",[a._v("멀티 스레드 환경에서 각 스레드가 실행할 명령어의 주소를 저장하는 "),s("code",[a._v("PC Register")]),a._v(" 영역")]),a._v(" "),s("li",[a._v("C/C++ 같이 Java 외의 언어로 작성된 코드가 배치되는 "),s("code",[a._v("Native Method")]),a._v("영역")])])])]),a._v(" "),s("h2",{attrs:{id:"final"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#final"}},[a._v("#")]),a._v(" final")]),a._v(" "),s("p",[a._v("키워드 "),s("code",[a._v("final")]),a._v("은 세 가지 용도로 사용된다.")]),a._v(" "),s("ul",[s("li",[a._v("변수 앞에 붙이면 변경 불가능한 상수")]),a._v(" "),s("li",[a._v("메소드 앞에 붙이면 오버라이드 불가능한 메소드")]),a._v(" "),s("li",[a._v("클래스 앞에 붙이면 상속 불가능한 메소드")])]),a._v(" "),s("h2",{attrs:{id:"unchecked-exception-vs-checked-exception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unchecked-exception-vs-checked-exception"}},[a._v("#")]),a._v(" Unchecked Exception vs. Checked Exception")]),a._v(" "),s("p",[s("code",[a._v("RuntimeException")]),a._v("을 상속하는 클래스를 "),s("b",[s("code",[a._v("Unchecked Exception")])]),a._v("라고 한다. 이 예외는 코드에서의 예외처리를 강제하지 않는다. 대표적으로 "),s("code",[a._v("NullPointException")]),a._v(", "),s("code",[a._v("ClassCastException")]),a._v(" 등이 있다.")]),a._v(" "),s("p",[s("code",[a._v("RuntimeException")]),a._v("을 상속하지 않는 클래스를 "),s("b",[s("code",[a._v("Checked Exception")])]),a._v("라고 한다. 이 예외에서는 코드에서의 예외처리를 강제한다. 따라서 "),s("code",[a._v("try-catch")]),a._v(" 문으로 감싸주거나 "),s("code",[a._v("throw")]),a._v(" 구문으로 예외처리를 전가해야한다. 대표적으로 "),s("code",[a._v("IOException")]),a._v(", "),s("code",[a._v("ClassNotFoundException")]),a._v(" 등이 있다.")]),a._v(" "),s("h2",{attrs:{id:"제너릭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#제너릭"}},[a._v("#")]),a._v(" 제너릭")]),a._v(" "),s("ul",[s("li",[a._v("클래스 내부에서 사용되는 변수의 타입을 클래스 외부에서 지정하는 것")]),a._v(" "),s("li",[a._v("제너릭을 사용하면 세 가지 장점이 있다.\n"),s("ul",[s("li",[a._v("List, Set, Map 같은 "),s("code",[a._v("Collection")]),a._v("처럼 타입에 종속되지 않은 유연한 로직.")]),a._v(" "),s("li",[s("code",[a._v("Object")]),a._v("클래스와 비교했을 때 컴파일 타임에 에러를 찾아낼 수 있다는 점에서 타입 안정성.")]),a._v(" "),s("li",[s("code",[a._v("Object")]),a._v("클래스와 비교했을 때 자동 형변환을 제공한다.")])])])]),a._v(" "),s("h2",{attrs:{id:"어노테이션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#어노테이션"}},[a._v("#")]),a._v(" 어노테이션")]),a._v(" "),s("ul",[s("li",[a._v("컴파일러에게 컴파일 타임이나 런타임에 특정 처리를 하도록 정보를 제공하는 것")]),a._v(" "),s("li",[a._v("컴파일 과정에서 경고나 에러를 감지하도록 컴파일러에게 정보를 제공")]),a._v(" "),s("li",[a._v("컴파일 과정에서 특정 코드를 생성하도록 컴파일러에게 정보를 제공")]),a._v(" "),s("li",[a._v("런타임에서 특정 기능을 실행하도록 정보를 제공")])]),a._v(" "),s("h2",{attrs:{id:"직렬화"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#직렬화"}},[a._v("#")]),a._v(" 직렬화")]),a._v(" "),s("ul",[s("li",[a._v("객체를 스트림으로 입출력하기 위해서 바이트 배열로 변환하는 것")]),a._v(" "),s("li",[a._v("바이트 배열을 객체로 변환하는 것을 "),s("code",[a._v("역직렬화")]),a._v("라고 한다.")]),a._v(" "),s("li",[a._v("직렬화할 클래스는 "),s("code",[a._v("Serializable")]),a._v(" 인터페이스를 구현해야한다.")])]),a._v(" "),s("h2",{attrs:{id:"얕은-복사-vs-깊은-복사"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#얕은-복사-vs-깊은-복사"}},[a._v("#")]),a._v(" 얕은 복사 vs. 깊은 복사")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("얕은 복사")]),a._v("는 두 참조 변수가 같은 인스턴스를 참조하는 것이다.")]),a._v(" "),s("li",[s("code",[a._v("깊은 복사")]),a._v("는 동일한 인스턴스를 새롭게 생성하는 것으로 Java에서는 "),s("code",[a._v("Cloneable")]),a._v("인터페이스를 구현하고 "),s("code",[a._v("clone()")]),a._v(" 메소드를 오버라이드하면 된다.")])]),a._v(" "),s("h2",{attrs:{id:"객체-비교"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#객체-비교"}},[a._v("#")]),a._v(" 객체 비교")]),a._v(" "),s("h3",{attrs:{id:"동일성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동일성"}},[a._v("#")]),a._v(" 동일성")]),a._v(" "),s("p",[s("code",[a._v("동일성(Identity)")]),a._v("는 두 객체의 주소값이 같다는 것을 의미한다. "),s("code",[a._v("==")]),a._v(" 연산자로 두 객체가 동일한지 비교할 수 있다.")]),a._v(" "),s("h3",{attrs:{id:"동등성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동등성"}},[a._v("#")]),a._v(" 동등성")]),a._v(" "),s("p",[s("code",[a._v("동등성(Equality)")]),a._v("는 두 객체의 속성값이 같다는 것을 의마한다. "),s("code",[a._v("Object")]),a._v(" 클래스의 "),s("code",[a._v("equal()")]),a._v("메소드를 구현하여 두 객체가 동등한지 판별할 수 있다.")]),a._v(" "),s("h2",{attrs:{id:"가변-객체-vs-불변-객체"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#가변-객체-vs-불변-객체"}},[a._v("#")]),a._v(" 가변 객체 vs. 불변 객체")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("가변 객체")]),a._v("는 객체를 생성한 후 상태를 바꿀 수 있는 객체를 의미한다.")]),a._v(" "),s("li",[s("code",[a._v("불변 객체")]),a._v("는 객체를 생성한 후 상태를 바꿀 수 없는 객체를 의미한다.")]),a._v(" "),s("li",[a._v("불변 객체를 사용하면 다음과 같은 장점이 있다.\n"),s("ul",[s("li",[a._v("상태를 변경할 수 없기 때문에 멀티 스레드 환경에서 안전한다.")]),a._v(" "),s("li",[a._v("사이드 이펙트를 방지할 수 있다.")])])])]),a._v(" "),s("h2",{attrs:{id:"접근-제한자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#접근-제한자"}},[a._v("#")]),a._v(" 접근 제한자")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("private")]),a._v(": 멤버변수와 메소드에만 붙일 수 있으며, 해당 클래스 내부에서만 접근할 수 있다.")]),a._v(" "),s("li",[s("code",[a._v("protected")]),a._v(": 멤버변수와 메소드에만 붙일 수 있으며, 해당 클래스와 이를 상속하는 클래스 내부에서만 접근할 수 있다.")]),a._v(" "),s("li",[s("code",[a._v("default")]),a._v(": 클래스, 멤버변수, 메소드에 붙일 수 있으며, 해당 클래스가 포함된 패키지의 다른 클래스에서 자유롭게 접근할 수 있다.")]),a._v(" "),s("li",[s("code",[a._v("public")]),a._v(": 클래스, 멤버변수, 메소드에 붙일 수 있으며, 다른 패키지에서도 자유롭게 접근할 수 있다.")])]),a._v(" "),s("h2",{attrs:{id:"static"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[a._v("#")]),a._v(" static")]),a._v(" "),s("ul",[s("li",[a._v("멤버변수와 메소드에 붙일 수 있으며 이를 "),s("code",[a._v("정적 멤버변수")]),a._v("와 "),s("code",[a._v("정적 메소드")]),a._v("라고 한다.")]),a._v(" "),s("li",[a._v("정적 멤버변수와 정적 메소드는 인스턴스를 생성하지 않고도 접근할 수 있다.")]),a._v(" "),s("li",[a._v("정적 멤버변수는 모든 인스턴스가 값을 공유한다.")])]),a._v(" "),s("h2",{attrs:{id:"함수형-인터페이스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#함수형-인터페이스"}},[a._v("#")]),a._v(" 함수형 인터페이스")]),a._v(" "),s("ul",[s("li",[a._v("객체지향 프로그래밍인 Java에 함수형 프로그래밍 패러다임을 적용하기 위해 Java 8에서 도입된 기능")]),a._v(" "),s("li",[a._v("Kotlin은 함수 타입이 존재하기 때문에 람다식을 변수에 할당하거나, 파라미터로 전달하거나 반환값으로 반환할 수 있다.")]),a._v(" "),s("li",[a._v("Java는 함수 타입이 없기 때문에 함수형 인터페이스로 람다식을 변수에 할당하거나, 파라미터로 전달하거나, 반환값으로 반환할 수 있다.")]),a._v(" "),s("li",[a._v("함수형 인터페이스는 단 하나의 추상 메소드를 가지고 있는 인터페이스에 "),s("code",[a._v("@FunctionalInterace")]),a._v(" 어노테이션을 붙여주면 된다.")])]),a._v(" "),s("h2",{attrs:{id:"리플렉션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#리플렉션"}},[a._v("#")]),a._v(" 리플렉션")]),a._v(" "),s("p",[a._v("런타임에 클래스의 구체적인 타입을 몰라도 그 클래스의 멤버변수, 메소드 등을 분석하고 접근할 수 있도록 하는 자바 API와 기법이다")]),a._v(" "),s("h3",{attrs:{id:"클래스-참조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#클래스-참조"}},[a._v("#")]),a._v(" 클래스 참조")]),a._v(" "),s("p",[a._v("Java의 모든 클래스와 인터페이스는 컴파일 후 "),s("code",[a._v(".class")]),a._v("파일로 변환된다. 이 파일에는 생성자, 멤버변수, 메서드 등 객체의 정보가 포함되어있는데 "),s("code",[a._v("Class")]),a._v("클래스를 사용하면 이 파일에서 가져온 객체의 정보를 담을 수 있다. 이를 "),s("code",[a._v("클래스 참조(Class Reference)")]),a._v("라고 한다.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),a._v(" clazz "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"메소드-참조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메소드-참조"}},[a._v("#")]),a._v(" 메소드 참조")]),a._v(" "),s("p",[a._v("Java 8부터 추가된 기능으로 람다식이 오직 하나의 메소드만을 호출하는 경우 "),s("code",[a._v("메소드 참조")]),a._v("를 사용하여 단축할 수 있다. 메소드 참조는 "),s("code",[a._v("콜론 두 개(::)")]),a._v("를 사용한다.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v(" lambda "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("something"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("something"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v(" lambda "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"생성자-참조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#생성자-참조"}},[a._v("#")]),a._v(" 생성자 참조")]),a._v(" "),s("p",[a._v("Java 8부터 추가된 기능으로 생성자 호출을 "),s("code",[a._v("생성자 참조")]),a._v("를 사용하여 단축할 수 있다.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v(" lambda "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v(" lambda "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v(" lambda "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"optional-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optional-api"}},[a._v("#")]),a._v(" Optional API")]),a._v(" "),s("p",[s("code",[a._v("Optional")]),a._v("은 Java 8에 추가된 기능으로, "),s("code",[a._v("NullPointException")]),a._v("을 쉽게 핸들링할 수 있다. "),s("code",[a._v("null")]),a._v("이 발생할 수 있는 객체를 "),s("code",[a._v("Optional")]),a._v("로 래핑한 후 "),s("code",[a._v("isPresent()")]),a._v(", "),s("code",[a._v("ifPresent()")]),a._v(" 메소드로 "),s("code",[a._v("null")]),a._v(" 체크를 할 수 있다.")]),a._v(" "),s("h2",{attrs:{id:"stream-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stream-api"}},[a._v("#")]),a._v(" Stream API")]),a._v(" "),s("p",[a._v("Java 8에서 추가된 "),s("code",[a._v("스트림(Stream)")]),a._v("을 사용하면 Collection을 더욱 쉽게 순회, 필터링, 변환할 수 있다. 특히 람다식과 함께 사용하면 코드가 더욱 간결해진다.")]),a._v(" "),s("h2",{attrs:{id:"default-메소드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-메소드"}},[a._v("#")]),a._v(" default 메소드")]),a._v(" "),s("p",[s("code",[a._v("default 메소드")]),a._v("를 사용하면 인터페이스에도 메소드를 구현할 수 있다. 이 기능을 사용하여 하위 호환성을 확보할 수 있다.")]),a._v(" "),s("h2",{attrs:{id:"jdbc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdbc"}},[a._v("#")]),a._v(" JDBC")]),a._v(" "),s("ul",[s("li",[a._v("Java에서 데이터베이스 연결 및 조작을 위한 자바 API")]),a._v(" "),s("li",[a._v("SQL Mapper, JPA는 내부적으로 모두 JDBC를 사용한다.")])]),a._v(" "),s("h2",{attrs:{id:"solid-원칙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solid-원칙"}},[a._v("#")]),a._v(" SOLID 원칙")]),a._v(" "),s("p",[a._v("객체지향 프로그래밍에서 유지보수가 쉽고 변경에 유연하게 대응할 수 있도록 적용하는 원칙")]),a._v(" "),s("h3",{attrs:{id:"srp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#srp"}},[a._v("#")]),a._v(" SRP")]),a._v(" "),s("ul",[s("li",[a._v("단일 책임 원칙(Single Responsibility Priciple)")]),a._v(" "),s("li",[a._v("한 클래스는 하나의 책임만 가져야한다.")]),a._v(" "),s("li",[a._v("즉 하나의 클래스는 해당 클래스와 연관된 기능들만 가져야하며, 모듈 하나의 응집도를 높이고 모듈 사이의 결합도를 낮추는 것과 관련된다.")]),a._v(" "),s("li",[a._v("예를 들어 계산기 클래스는 덧셈, 뺄셈, 곱셈, 나눗셈 기능만을 포함해야한다.")])]),a._v(" "),s("h3",{attrs:{id:"ocp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ocp"}},[a._v("#")]),a._v(" OCP")]),a._v(" "),s("ul",[s("li",[a._v("개방 폐쇠 원칙(Open Closed Priciple)")]),a._v(" "),s("li",[a._v("변경에는 닫혀있으나 확장에는 열려있다.")]),a._v(" "),s("li",[a._v("요구사항이 변경되었을 때 기존 코드를 수정하지 않고도 확장의 형태로 재사용할 수 있어야한다.")]),a._v(" "),s("li",[a._v("요구사항이 변경될 수도 있는 부분을 인터페이스로 정의하고, 변경된 요구사항은 새로운 구현체로 구현한다.")]),a._v(" "),s("li",[a._v("Spring 에서는 JDBC나 JPA를 사용할 때 인터페이스 형태로 Driver에 접근하고, 이 인터페이스를 따르는 MySQL, Oracle, H2 등의 Driver를 사용하여 쉽게 변경에 대응할 수 있다.")]),a._v(" "),s("li",[a._v("변경될 부분과 절대 변경되지 않을 부분을 구분하는게 핵심이다.")])]),a._v(" "),s("h3",{attrs:{id:"lsp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lsp"}},[a._v("#")]),a._v(" LSP")]),a._v(" "),s("ul",[s("li",[a._v("리스코프 치환 원칙(Liskov Substitution Principle)")]),a._v(" "),s("li",[a._v("잘못된 상속을 피하기 위한 원칙으로 부모 클래스 타입의 변수에 자식 클래스의 인스턴스를 넣어도 잘 작동해야한다.")]),a._v(" "),s("li",[a._v("자식 클래스는 부모 클래스의 기능을 오버라이딩하기보단 새롭게 메소드를 정의하는 형태로 구현해야한다.")])]),a._v(" "),s("h3",{attrs:{id:"isp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isp"}},[a._v("#")]),a._v(" ISP")]),a._v(" "),s("ul",[s("li",[a._v("인터페이스 분리 원칙(Interface Segregation Principle)")]),a._v(" "),s("li",[a._v("클래스는 자신이 사용하지 않는 인터페이스를 implements 하지 말아야한다.")]),a._v(" "),s("li",[a._v("또한 하나의 인터페이스에 선언을 몰아넣는 것보다 연관된 작은 단위로 인터페이스에 분리하여 필요한 인터페이스만 구현하는 것이 낫다.")])]),a._v(" "),s("h3",{attrs:{id:"dip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dip"}},[a._v("#")]),a._v(" DIP")]),a._v(" "),s("ul",[s("li",[a._v("의존성 역전 원칙(Dependency Inversion Principle)")]),a._v(" "),s("li",[a._v("의존하는 객체를 직접 만들고 관리하는 것이 아니라 외부에서 주입받는 원칙으로 의존성 주입의 기반이 된다.")])])])}),[],!1,null,null,null);t.default=v.exports}}]);