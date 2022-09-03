(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1672:function(a,s,e){"use strict";e.r(s);var t=e(34),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[a._v("#")]),a._v(" Table of Contents")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#spring-legacy-vs-spring-boot"}},[a._v("Spring Legacy vs. Spring Boot")])]),e("li",[e("a",{attrs:{href:"#스프링부트-프로젝트-빌드하기"}},[a._v("스프링부트 프로젝트 빌드하기")])]),e("li",[e("a",{attrs:{href:"#plain-jar-vs-executable-jar"}},[a._v("Plain jar vs. Executable jar")])]),e("li",[e("a",{attrs:{href:"#스프링부트-실행하기"}},[a._v("스프링부트 실행하기")]),e("ul",[e("li",[e("a",{attrs:{href:"#포트번호-설정하기"}},[a._v("포트번호 설정하기")])]),e("li",[e("a",{attrs:{href:"#properties-파일-추가하기"}},[a._v("properties 파일 추가하기")])]),e("li",[e("a",{attrs:{href:"#active-profile-파일-지정하기"}},[a._v("Active Profile 파일 지정하기")])])])]),e("li",[e("a",{attrs:{href:"#nohup"}},[a._v("nohup")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"spring-legacy-vs-spring-boot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-legacy-vs-spring-boot"}},[a._v("#")]),a._v(" Spring Legacy vs. Spring Boot")]),a._v(" "),e("p",[e("code",[a._v("Legacy Spring")]),a._v(" 프로젝트를 빌드하면 "),e("code",[a._v("WAR(Web Application Archive)")]),a._v(" 형태의 결과물이 생성된다. 이 "),e("code",[a._v("WAR")]),a._v(" 파일을 실행하려면 "),e("code",[a._v("톰캣(Tomcat)")]),a._v("과 같은 컨테이너가 필요하다.")]),a._v(" "),e("p",[e("code",[a._v("Spring Boot")]),a._v(" 프로젝트를 빌드하면 "),e("code",[a._v("JAR(Java Archive)")]),a._v(" 형태의 결과물이 생성된다. "),e("code",[a._v("톰캣(Tomcat)")]),a._v("을 내장하고 있기 때문에 "),e("code",[a._v("JRE")]),a._v("만 있어도 실행 가능하다.")]),a._v(" "),e("h2",{attrs:{id:"스프링부트-프로젝트-빌드하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#스프링부트-프로젝트-빌드하기"}},[a._v("#")]),a._v(" 스프링부트 프로젝트 빌드하기")]),a._v(" "),e("p",[a._v("Gradle을 사용하는 경우 다음과 같은 방법으로 스프링부트 프로젝트를 빌드할 수 있다.")]),a._v(" "),e("div",{staticClass:"language-shellsession extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shellsession"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[a._v("$")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a._v("./gradlew clean build")])]),a._v("\n")])])]),e("p",[a._v("빌드 결과물은 "),e("code",[a._v("build/libs")]),a._v(" 디렉토리 아래 생성된다.")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("myproject-0.0.1.jar")])]),a._v(" "),e("li",[e("code",[a._v("myproject-0.0.1-plain.jar")])])]),a._v(" "),e("h2",{attrs:{id:"plain-jar-vs-executable-jar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plain-jar-vs-executable-jar"}},[a._v("#")]),a._v(" Plain jar vs. Executable jar")]),a._v(" "),e("p",[a._v("스프링 부트 2.5부터는 프로젝트를 빌드하면 두 개의 JAR 파일이 생성된다.")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("myproject-0.0.1.jar")])]),a._v(" "),e("li",[e("code",[a._v("myproject-0.0.1-plain.jar")])])]),a._v(" "),e("p",[e("code",[a._v("myproject-0.0.1-plain.jar")]),a._v("는 어플리케이션 실행에 필요한 의존성을 포함하지 않고 작성된 소스코드의 클래스 파일과 리소스 파일만 포함한다. 의존성을 포함하지 않기 때문에 "),e("code",[a._v("java -jar")]),a._v(" 명령어로 실행할 경우 에러가 발상한다. 이러한 JAR 파일을 "),e("code",[a._v("Plain jar")]),a._v("라고 한다.")]),a._v(" "),e("p",[e("code",[a._v("myproject-0.0.1.jar")]),a._v("는 어플리케이션 실행에 필요한 모든 의존성을 포함한다. 때문에 "),e("code",[a._v("java -jar")]),a._v(" 명령어로 실행할 수 있다.")]),a._v(" "),e("p",[e("code",[a._v("Plain jar")]),a._v("를 생성하지 않으려면 "),e("code",[a._v("build.gradle")]),a._v("에 다음 코드를 추가해주면 된다.")]),a._v(" "),e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[a._v("jar "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    enabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h2",{attrs:{id:"스프링부트-실행하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#스프링부트-실행하기"}},[a._v("#")]),a._v(" 스프링부트 실행하기")]),a._v(" "),e("p",[a._v("JAR 파일로 빌드된 스프링부트 프로젝트는 다음과 같이 실행할 수 있다.")]),a._v(" "),e("div",{staticClass:"language-shellsession extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shellsession"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[a._v("$")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a._v("java -jar myproject-0.0.1.jar")])]),a._v("\n")])])]),e("h3",{attrs:{id:"포트번호-설정하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#포트번호-설정하기"}},[a._v("#")]),a._v(" 포트번호 설정하기")]),a._v(" "),e("div",{staticClass:"language-shellsession extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shellsession"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[a._v("$")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a._v("java -jar myproject-0.0.1.jar --server.port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")])])]),a._v("\n")])])]),e("p",[e("code",[a._v("-D")]),a._v(" 파라미터는 반드시 "),e("code",[a._v("-jar")]),a._v("옵션과 "),e("code",[a._v("<YOUR_JAR>.jar")]),a._v("파일 사이에 와야한다.")]),a._v(" "),e("div",{staticClass:"language-shellsession extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shellsession"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[a._v("$")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a._v("java -jar --Dserver.port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(" myproject-0.0.1.jar")])]),a._v("\n")])])]),e("h3",{attrs:{id:"properties-파일-추가하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties-파일-추가하기"}},[a._v("#")]),a._v(" properties 파일 추가하기")]),a._v(" "),e("p",[e("code",[a._v("src/main/resources")]),a._v("에 위치하는 설정 파일("),e("code",[a._v("*.properties")]),a._v(", "),e("code",[a._v("*.yml")]),a._v(")은 빌드할 때 JAR 파일 내부에 포함된다. 그러나 "),e("code",[a._v("spring.config.location")]),a._v(" 옵션을 사용하면 JAR 파일 외부에 존재하는 설정 파일을 실행 시점에 포함시킬 수 있다.")]),a._v(" "),e("div",{staticClass:"language-shellsession extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shellsession"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[a._v("$")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a._v("java -jar myproject.jar --spring.config.location"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/home/ec2-user/myapp/datasource.properties")])]),a._v("\n")])])]),e("p",[e("code",[a._v("콤마(,)")]),a._v("로 여러 설정 파일을 적용할 수도 있다.")]),a._v(" "),e("div",{staticClass:"language-shellsession extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shellsession"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[a._v("$")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a._v("java -jar myproject.jar --spring.config.location"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/home/ec2-user/myapp/datasource.properties,/home/ec2-user/app/myapp/security.properties")])]),a._v("\n")])])]),e("h3",{attrs:{id:"active-profile-파일-지정하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#active-profile-파일-지정하기"}},[a._v("#")]),a._v(" Active Profile 파일 지정하기")]),a._v(" "),e("p",[e("code",[a._v("spring.profiles.active")]),a._v(" 옵션으로 JAR 파일을 실행할 때 활성화할 프로파일을 지정할 수 있다.")]),a._v(" "),e("div",{staticClass:"language-shellsession extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shellsession"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[a._v("$")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a._v("java -jar -Dspring.profiles.active"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dev myprojexwct-0.0.1.jar")])]),a._v("\n")])])]),e("div",{staticClass:"language-shellsession extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shellsession"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[a._v("$")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a._v("java -jar myproject-0.0.1.jar --spring.profiles.active"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dev")])]),a._v("\n")])])]),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# application-dev.properties")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.config.activate.on-profile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("dev")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 생략..")]),a._v("\n")])])]),e("h2",{attrs:{id:"nohup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nohup"}},[a._v("#")]),a._v(" nohup")]),a._v(" "),e("p",[e("code",[a._v("nohup")]),a._v("은 프로세스와의 세션을 종료해도 프로세스가 백그라운드로 계속 실행하도록 하는 리눅스 명령어다. 보통 운영 환경에서 프로세스가 중단없이 실행되도록 하는데 사용한다.")]),a._v(" "),e("div",{staticClass:"language-shellsession extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shellsession"}},[e("code",[e("span",{pre:!0,attrs:{class:"token output"}},[a._v("// nohup [프로세스] &\n")]),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[a._v("$")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token bash language-bash"}},[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" -jar myproject-0.0.1.jar "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")])])]),a._v("\n")])])]),e("p",[e("code",[a._v("nohup")]),a._v("으로 실행한 프로세스는 "),e("code",[a._v("nohup.out")]),a._v("이라는 파일에 결과물을 출력한다. "),e("code",[a._v("nohup.out")]),a._v(" 파일을 생성하지 않으려면 표준출력과 표준에러를 "),e("code",[a._v("/dev/null")]),a._v("로 리다이랙션해주면 된다.")]),a._v(" "),e("div",{staticClass:"language-shellsession extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shellsession"}},[e("code",[e("span",{pre:!0,attrs:{class:"token output"}},[a._v("// nohup [프로세스] &\n")]),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[a._v("$")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token bash language-bash"}},[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" -jar myproject-0.0.1.jar "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v("/dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("&1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")])])]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);