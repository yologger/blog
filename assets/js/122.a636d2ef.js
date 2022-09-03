(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1252:function(a,t,s){a.exports=s.p+"assets/img/1.d853662b.png"},1253:function(a,t,s){a.exports=s.p+"assets/img/2.c2d4108a.png"},1697:function(a,t,s){"use strict";s.r(t);var n=s(34),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"table-of-contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[a._v("#")]),a._v(" Table of Contents")]),a._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#kafka-서버"}},[a._v("Kafka 서버")])]),n("li",[n("a",{attrs:{href:"#producer"}},[a._v("Producer")])]),n("li",[n("a",{attrs:{href:"#첫-번째-consumer"}},[a._v("첫 번째 Consumer")])]),n("li",[n("a",{attrs:{href:"#두-번째-consumer"}},[a._v("두 번째 Consumer")])]),n("li",[n("a",{attrs:{href:"#테스트"}},[a._v("테스트")])])])]),n("p"),a._v(" "),n("h1",{attrs:{id:"spring-kafka-시작하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-kafka-시작하기"}},[a._v("#")]),a._v(" Spring Kafka 시작하기")]),a._v(" "),n("p",[n("code",[a._v("Spring Boot")]),a._v("에서 "),n("code",[a._v("Kafka")]),a._v("를 사용하는 방법에 대해 정리한다. 예제는 세 개의 프로젝트로 구성된다.")]),a._v(" "),n("ul",[n("li",[n("code",[a._v("kafka-producer")]),a._v(": Kafka로 메시지를 전송한다.")]),a._v(" "),n("li",[n("code",[a._v("kafka-consumer1")]),a._v(": Kafka를 구독하고 있다가 메시지가 오면 화면에 출력한다.")]),a._v(" "),n("li",[n("code",[a._v("kafka-consumer2")]),a._v(": Kafka를 구독하고 있다가 메시지가 오면 화면에 출력한다.")])]),a._v(" "),n("p",[n("img",{attrs:{src:s(1252),alt:""}})]),a._v(" "),n("h2",{attrs:{id:"kafka-서버"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kafka-서버"}},[a._v("#")]),a._v(" Kafka 서버")]),a._v(" "),n("p",[a._v("Kafka 서버는 Docker compose로 구성한다.")]),a._v(" "),n("div",{staticClass:"language-yml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker-compose.yml")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'2'")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Zookeeper")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("zookeeper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" wurstmeister/zookeeper\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zookeeper\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2181:2181"')]),a._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Kafka")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kafka")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" wurstmeister/kafka\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kafka\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"9092:9092"')]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("KAFKA_ADVERTISED_HOST_NAME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 127.0.0.1\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("KAFKA_ZOOKEEPER_CONNECT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zookeeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("2181")]),a._v("\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("$ docker-compose up -d \n")])])]),n("p",[a._v("그리고 두 개의 Partition을 갖는 Topic을 생성한다.")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("$ kafka-topics \\\n--bootstrap-server localhost:9092 \\\n--topic test-topic \\\n--partitions 2 \\\n--create\n")])])]),n("h2",{attrs:{id:"producer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#producer"}},[a._v("#")]),a._v(" Producer")]),a._v(" "),n("p",[a._v("Producer 역할을 하는 "),n("code",[a._v("kafka-producer")]),a._v(" 프로젝트는 HTTP 요청이 오면 Kafka 서버로 메시지를 전송한다. 이 프로젝트의 의존성은 다음과 같다.")]),a._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[a._v(" ")]),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// build.gradle ")]),a._v("\ndependencies "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    implementation "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'org.springframework.boot:spring-boot-starter-web'")]),a._v("\n    implementation "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'org.springframework.kafka:spring-kafka'")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("설정파일 "),n("code",[a._v("application.yml")]),a._v("은 다음과 같다.")]),a._v(" "),n("div",{staticClass:"language-yml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# application.yml")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kafka")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("producer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("bootstrap-servers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("9092")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key-serializer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.apache.kafka.common.serialization.StringSerializer\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("value-serializer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.apache.kafka.common.serialization.StringSerializer\n")])])]),n("p",[a._v("Kafka 서버로 메시지를 전송하는 서비스는 다음과 같다. "),n("code",[a._v("Spring Kafka")]),a._v(" 모듈에서 제공하는 "),n("b",[n("code",[a._v("KafkaTemplate")])]),a._v("클래스를 사용하면 된다.")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[a._v(" ")]),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[a._v(" ")]),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("beans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Autowired")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KafkaTemplate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("stereotype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Service")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KafkaProducerService")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Autowired")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KafkaTemplate")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sendMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"message: "')]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test-topic"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("HTTP 요청을 받는 컨트롤러는 다음과 같다.")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RestController")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/kafka"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KafkaController")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Autowired")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KafkaProducerService")]),a._v(" kafkaService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@GetMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/send"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("kafka")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        kafkaService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sendMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Test message"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h2",{attrs:{id:"첫-번째-consumer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#첫-번째-consumer"}},[a._v("#")]),a._v(" 첫 번째 Consumer")]),a._v(" "),n("p",[a._v("첫 번째 Consumer 역할을 하는 "),n("code",[a._v("kafka-consumer1")]),a._v(" 프로젝트는 다음 의존성을 갖는다.")]),a._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[a._v(" ")]),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// build.gradle")]),a._v("\ndependencies "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    implementation "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'org.springframework.boot:spring-boot-starter-web'")]),a._v("\n    implementation "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'org.springframework.kafka:spring-kafka'")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("설정 파일 "),n("code",[a._v("application.yml")]),a._v("은 다음과 같다.")]),a._v(" "),n("div",{staticClass:"language-yml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# application.yml")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kafka")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("consumer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("bootstrap-servers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("9092")]),a._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Kafka 서버 주소")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("group-id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("group  "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Consumer group id")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key-deserializer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.apache.kafka.common.serialization.StringDeserializer\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("value-deserializer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.apache.kafka.common.serialization.StringDeserializer\n")])])]),n("p",[a._v("이제 Kafka 서버를 구독하고 있다가 메시지가 오면 화면에 출력하는 서비스를 구현한다. "),n("b",[n("code",[a._v("@KafkaListener")])]),a._v("어노테이션의 인자로 Topic과 Consumer group id를 전달한다.")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KafkaListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("stereotype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IOException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Service")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KafkaConsumerService")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@KafkaListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("topics "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test-topic"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" groupId "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test-consumer-group"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("consume")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IOException")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Consume message: "')]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h2",{attrs:{id:"두-번째-consumer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#두-번째-consumer"}},[a._v("#")]),a._v(" 두 번째 Consumer")]),a._v(" "),n("p",[a._v("두 번째 Consumer 역할을 하는 "),n("code",[a._v("kafka-consumer2")]),a._v(" 프로젝트도 "),n("code",[a._v("kafka-consumer1")]),a._v(" 프로젝트와 동일하다.")]),a._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[a._v(" ")]),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// build.gradle")]),a._v("\ndependencies "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    implementation "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'org.springframework.boot:spring-boot-starter-web'")]),a._v("\n    implementation "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'org.springframework.kafka:spring-kafka'")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("포트 번호만 다르게 설정해주자. "),n("code",[a._v("kafka-consumer1")]),a._v("과 "),n("code",[a._v("kafka-consumer2")]),a._v("를 같은 "),n("code",[a._v("Consumer Group")]),a._v("으로 지정한 점에 주의하자")]),a._v(" "),n("div",{staticClass:"language-yml extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("div",{staticClass:"highlighted"},[a._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[a._v(" ")]),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# application.yml")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("8082")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kafka")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("consumer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("bootstrap-servers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("9092")]),a._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Kafka 서버 주소")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("group-id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("group  "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Consumer group id")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key-deserializer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.apache.kafka.common.serialization.StringDeserializer\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("value-deserializer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.apache.kafka.common.serialization.StringDeserializer\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KafkaListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("stereotype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IOException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Service")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KafkaConsumerService")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@KafkaListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("topics "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test-topic"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" groupId "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test-consumer-group"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("consume")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IOException")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Consume message: "')]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h2",{attrs:{id:"테스트"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#테스트"}},[a._v("#")]),a._v(" 테스트")]),a._v(" "),n("p",[a._v("이제 두 프로젝트를 실행한 후 "),n("code",[a._v("kafka-producer")]),a._v(" 프로젝트의 "),n("code",[a._v("localhost:8080/kafka/test")]),a._v("로 HTTP 요청을 보내보자.")]),a._v(" "),n("p",[a._v("Topic의 Partition이 2개고 Consumer Group의 Consumer도 2개다. 따라서 "),n("code",[a._v("kafka-consumer1")]),a._v("과 "),n("code",[a._v("kafka-consumer2")]),a._v(" 프로젝트 콘솔에 메시지가 번갈아 출력되는 것을 확인할 수 있다.")]),a._v(" "),n("p",[n("img",{attrs:{src:s(1253),alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);