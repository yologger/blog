---
title: "Spring Data ElasticSearch 시작하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Spring Data ElasticSearch
`Spring Data ElasticSearch`을 사용하면 더욱 추상화된 방법으로 `Elastic Search`에 접근할 수 있다.

## 의존성 설정
Spring Data ElasticSearch을 사용하려면 다음 의존성을 추가해야한다.
``` groovy
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-data-elasticsearch'
}
```

## 구성 클래스
`AbstractElasticsearchConfiguration`를 상속하는 구성 클래스를 다음과 같이 정의한다.
``` java
@Configuration
public class ElasticSearchConfig extends AbstractElasticsearchConfiguration {

    @Override
    public RestHighLevelClient elasticsearchClient() {
        final ClientConfiguration clientConfiguration = ClientConfiguration.builder()
                .connectedTo("localhost:9200")
                .build();
        return RestClients.create(clientConfiguration).rest();
    }
}
```
이 클래스의 `elasticsearchClient()` 메소드는 `RestHighLevelClient` 타입의 객체를 반환한다. `AbstractElasticsearchConfiguration` 정의를 보면 이 메소드의 반환 객체를 사용하여 `ElasticsearchRestTemplate` 객체를 빈으로 등록한다.
``` java
public abstract class AbstractElasticsearchConfiguration extends ElasticsearchConfigurationSupport {

	@Bean
	public abstract RestHighLevelClient elasticsearchClient();

	@Bean(name = { "elasticsearchOperations", "elasticsearchTemplate" })
	public ElasticsearchOperations elasticsearchOperations(ElasticsearchConverter elasticsearchConverter,
			RestHighLevelClient elasticsearchClient) {

		ElasticsearchRestTemplate template = new ElasticsearchRestTemplate(elasticsearchClient, elasticsearchConverter);
		template.setRefreshPolicy(refreshPolicy());

		return template;
	}
}
```
`ElasticsearchRestTemplate`클래스는 `ElasticsearchOperations`인터페이스의 구현체다. 따라서 다음과 같이 `ElasticsearchOperations`을 주입받아 사용할 수 있다.
``` java
@SpringBootTest
class Test {

    @Autowired
    private ElasticsearchOperations operations;

	// ...
```

## 데이터 모델 정의
``` java
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@Document(indexName = "player")
@Getter
@Builder
public class PlayerDocument {
    @Id
    private String id;

    @Field(type = FieldType.Text)
    private String name;

    @Field(type = FieldType.Text)
    private String nation;

    @Field(type = FieldType.Integer)
    private int age;

    @Field(type = FieldType.Integer)
    private int score;

    @Field(type = FieldType.Integer)
    private int assist;
}
```

## ElasticsearchOperations
`ElasticsearchOperations`클래스는 CRUD 연산을 요청하기 위한 다양한 메소드를 제공한다.
``` java
@SpringBootTest
class Test {

    @Autowired
    private ElasticsearchOperations operations;

    @Test
    void test1() {
        PlayerDocument player = PlayerDocument.builder()
                .name("neymar")
                .nation("brazil")
                .age(31)
                .score(34)
                .assist(40)
                .build();

        operations.save(player);
    }
```
실제로 저장되는 도큐먼트는 다음과 같다.
``` {18-31}
$ curl -XGET http://localhost:9200/player/_search\?pretty
{
  "took" : 0,
  "timed_out" : false,
  "_shards" : {
    "total" : 1,
    "successful" : 1,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 1,
      "relation" : "eq"
    },
    "max_score" : 1.0,
    "hits" : [
      {
        "_index" : "player",
        "_type" : "_doc",
        "_id" : "OyG-PYEBhCK0-IfWnSy8",
        "_score" : 1.0,
        "_source" : {
          "_class" : "com.yologger.samples.project.repository.PlayerDocument",
          "name" : "neymar",
          "nation" : "brazil",
          "age" : 31,
          "score" : 34,
          "assist" : 40
        }
      }
    ]
  }
}
```

## ElasticsearchRepository
`ElasticsearchRepository` 인터페이스를 사용하면 더욱 추상화된 방법으로 CRUD 연산을 할 수 있다. 이 인터페이스를 사용하려면 먼저 구성 클래스에 `@EnableElasticsearchRepositories` 어노테이션을 추가해야한다.
``` java {1,4}
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;

@Configuration
@EnableElasticsearchRepositories
public class ElasticSearchConfig extends AbstractElasticsearchConfiguration {

    @Override
    public RestHighLevelClient elasticsearchClient() {
        final ClientConfiguration clientConfiguration = ClientConfiguration.builder()
                .connectedTo("localhost:9200")
                .build();
        return RestClients.create(clientConfiguration).rest();
    }
}
```
그 다음 `ElasticsearchRepository`인터페이스를 구현하는 클래스를 정의한다.
``` java
public interface PlayerRepository extends ElasticsearchRepository<PlayerDocument, String> {
}
```
이제 필요한 곳에서 다음과 같이 구현체를 주입받아 사용할 수 있다.
``` java
@SpringBootTest
class Test {

    @Autowired
    private PlayerRepository playerRepository;

    @Test
    void test1() {
        PlayerDocument player = PlayerDocument.builder()
                .name("figo")
                .nation("portugal")
                .age(45)
                .score(34)
                .assist(40)
                .build();

        PlayerDocument saved = playerRepository.save(player);

        assertThat(saved.getName()).isEqualTo("figo");
    }
}
```


## Custom Repository
더 복잡한 쿼리가 필요한 경우 다음과 같이 `Custom Repository`를 사용할 수도 있다.
``` java
public interface CustomPlayerRepository {
    List<PlayerDocument> searchByNation(String name);
}
```
``` java
@RequiredArgsConstructor
@Component
public class CustomPlayerRepositoryImpl implements CustomPlayerRepository {

    private final ElasticsearchOperations elasticsearchOperations;

    @Override
    public List<PlayerDocument> searchByNation(String name) {
        // 직접 구현 ...
    }
}
```
``` java
public interface PlayerRepository extends ElasticsearchRepository<PlayerDocument, String>, CustomPlayerRepository {
}
```