---
title: "Mongo DB 정리"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---
# Table of Contents
[[toc]]

# Mongo DB
기존의 테이블 기반 관계형 데이터베이스 구조가 아닌 `JSON Document` 기반의 데이터 모델을 사용하는 NoSQL 데이터베이스다.

![](./210102_start_mongo/1.jpeg)

`Mongo DB`는 다음과 같은 특징을 갖는다.
- `JSON document` 기반의 NoSQL 데이터베이스
- 스키마가 없어 저장되는 데이터의 구조가 자유롭다.
- 외래키 개념이 없어 `Embedded`방식 또는 `Reference` 방식으로 관계를 표현한다.
- 조인 개념이 없어 어플리케이션 레벨에서 처리해야한다.

## Mongo DB 환경설정

### 설치
`Mac OS`에서는 `Homebrew`로 Mongo DB를 설치할 수 있다.
``` shellsession
$ brew tap mongodb/brew

$ brew install mongodb-community@4.2
```

### 서비스 시작
``` shellsession
$ brew services start mongodb-community@4.2 
```

### 서비스 재시작
``` shellsession
$ brew services restart mongodb-community@4.2
```

### 서비스 종료
``` shellsession
$ brew services stop mongodb-community@4.2
```

### Mongo DB 접속
`mongo` 명령어로 Mongo DB에 접속할 수 있다.
``` shellsession
$ mongo
> 
```

원격 접속도 가능하다.
```
// mongo [몽고서버_IP]
$ mongo 192.168.0.1
```

원격 접속을 하면서 데이터베이스를 선택할 수도 있다.
```
// mongo [몽고서버 IP]/[데이터베이스 이름]
$ mongo 192.168.0.1/my_db
```

몽고 서버에 인증을 설정했다면 아이디와 패스워드를 인자로 전달하여 접속할 수 있다.
```
// mongo -u [사용자 이름] -p [비밀번호] [몽고서버 IP]/[데이터베이스 이름]
$ mongo -u user1 -p 1234 192.168.0.1/my_db
```



## Compass
`Compass`는 Mongo DB를 위한 GUI database clinet다. [이 곳](https://www.mongodb.com/try/download/compass)에서 다운받을 수 있다.

## Mongo DB 사용법

### 데이터베이스 목록 확인
`show db`는 모든 데이터베이스를 출력한다. Mongo DB에 처음 접속하면 세 개의 데이터베이스가 자동으로 생성된다.
```
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```

### 데이터베이스 생성, 사용할 데이터베이스 선택
`use [데이터베이스 이름]` 명령어로 사용할 데이터베이스를 선택할 수 있다. 데이터베이스가 없으면 자동으로 생성한다.
```
> use my_db
switched to db my_db
```

### 현재 사용 중인 데이터베이스 출력
`db`는 현재 사용 중인 데이터베이스를 출력한다.
```
> db
my_db
```

### 데이터베이스 삭제
`dropDatabase()`로 현재 데이터베이스를 삭제한다.
```
> db.dropDatabase()
{ "dropped" : "my_db", "ok" : 1 }
```

## Collection
<b>`Collection`</b>은 관계형 데이터베이스의 `Table`에 대응된다. 

### Collection 생성
`db.createCollection("컬렉션 명")`명령어로 컬렉션을 생성할 수 있다.
``` 
> db.createCollection("member");
```

### Collection 확인
데이터베이스에 생성된 Collection은 `show collections`로 확인할 수 있다.
```
> show collections
member
```

### Collection 삭제
`db.[Collection 이름].drop()`으로 Collection을 삭제할 수 있다.
```
> db.member.drop()
true
```

## Document, Field
<b>`Document`</b>는 RDBMS의 `Row`에 해당하며, <b>`Field`</b>는 `Column`에 해당한다.

### Document 저장
`db.<콜렉션이름>.insertOne()` 메소드로 Document 한 개를 생성할 수 있다.
```
> db.member.insertOne({ name: "Paul"})

> db.member.insertOne({ name: "John"})
```

Mongo DB는 스키마가 정해져있지 않기 때문에 저장되는 데이터 형식이 자유롭다.
```
> db.member.insertOne({ name: "monica", height: 165.5 , createdAt: Date()})

> db.member.insertOne({ name: "rachel", age: 25, isMarried: false, weight: 60.5 , job: "programmer"})
```

Document는 다른 객체를 포함할 수 있다.
```
> db.member.insertOne({ name: "marry", phone: { name: "iPhone 10", manufacturer: "Apple" } })
```

Document는 배열을 포함할 수도 있다.
```
> db.member.insertOne({ name: "jordan", children: ["ramos", "benzema"] })
```

`db.<콜렉션이름>.insertMany()` 메소드로 여러 Document를 한꺼번에 생성할 수 있다.

```
> db.member.insertMany([{ name: "messi" }, { name: "ronaldo" }])
```


### Document 조회
Mongo DB는 `JSON Document` 기반으로 데이터를 관리한다. `db.콜렉션.find()` 메소드로 모든 Document를 조회할 수 있다.
```
> db.member.find()
{ "_id" : ObjectId("625ad76b8d6dabdee5230bee"), "name" : "paul" }
{ "_id" : ObjectId("625ad77b8d6dabdee5230bef"), "name" : "john" }
{ "_id" : ObjectId("625adc3d8d6dabdee5230bf6"), "name" : "john" }
{ "_id" : ObjectId("625ad79e8d6dabdee5230bf0"), "name" : "messi" }
{ "_id" : ObjectId("625ad79e8d6dabdee5230bf1"), "name" : "ronaldo" }
{ "_id" : ObjectId("625ad8698d6dabdee5230bf2"), "name" : "monica", "age" : 35, "isMarried" : true, "weight" : 50.5, "createdAt" : "Sat Apr 16 2022 23:53:29 GMT+0900 (KST)" }
{ "_id" : ObjectId("625ad8ab8d6dabdee5230bf3"), "name" : "rachel", "age" : 25, "isMarried" : false, "weight" : 60.5, "job" : "programmer" }
{ "_id" : ObjectId("625ada168d6dabdee5230bf4"), "name" : "marry", "phone" : { "name" : "iPhone 10", "manufacturer" : "Apple" } }
{ "_id" : ObjectId("625ada838d6dabdee5230bf5"), "name" : "jordan", "children" : [ "ramos", "benzema" ] }
```
`pretty()`로 데이터를 보기 좋게 출력할 수 있다.
```
> db.member.find()
{ "_id" : ObjectId("625ad76b8d6dabdee5230bee"), "name" : "paul" }
{ "_id" : ObjectId("625ad77b8d6dabdee5230bef"), "name" : "john" }
{ "_id" : ObjectId("625adc3d8d6dabdee5230bf6"), "name" : "john" }
{ "_id" : ObjectId("625ad79e8d6dabdee5230bf0"), "name" : "messi" }
{ "_id" : ObjectId("625ad79e8d6dabdee5230bf1"), "name" : "ronaldo" }
{ "_id" : ObjectId("625ad8698d6dabdee5230bf2"), "name" : "monica", "age" : 35, "isMarried" : true, "weight" : 50.5, "createdAt" : "Sat Apr 16 2022 23:53:29 GMT+0900 (KST)" }
{ "_id" : ObjectId("625ad8ab8d6dabdee5230bf3"), "name" : "rachel", "age" : 25, "isMarried" : false, "weight" : 60.5, "job" : "programmer" }
{ "_id" : ObjectId("625ada168d6dabdee5230bf4"), "name" : "marry", "phone" : { "name" : "iPhone 10", "manufacturer" : "Apple" } }
{ "_id" : ObjectId("625ada838d6dabdee5230bf5"), "name" : "jordan", "children" : [ "ramos", "benzema" ] }
> db.member.find().pretty()
{ "_id" : ObjectId("625ad76b8d6dabdee5230bee"), "name" : "paul" }
{ "_id" : ObjectId("625ad77b8d6dabdee5230bef"), "name" : "john" }
{ "_id" : ObjectId("625ad79e8d6dabdee5230bf0"), "name" : "messi" }
{ "_id" : ObjectId("625ad79e8d6dabdee5230bf1"), "name" : "ronaldo" }
{
	"_id" : ObjectId("625ad8698d6dabdee5230bf2"),
	"name" : "monica",
	"age" : 35,
	"isMarried" : true,
	"weight" : 50.5,
	"createdAt" : "Sat Apr 16 2022 23:53:29 GMT+0900 (KST)"
}
{
	"_id" : ObjectId("625ad8ab8d6dabdee5230bf3"),
	"name" : "rachel",
	"age" : 25,
	"isMarried" : false,
	"weight" : 60.5,
	"job" : "programmer"
}
{
	"_id" : ObjectId("625ada168d6dabdee5230bf4"),
	"name" : "marry",
	"phone" : {
		"name" : "iPhone 10",
		"manufacturer" : "Apple"
	}
}
{
	"_id" : ObjectId("625ada838d6dabdee5230bf5"),
	"name" : "jordan",
	"children" : [
		"ramos",
		"benzema"
	]
}
```

`findOne()`는 하나의 Document를 조회한다.
```
> db.member.findOne() 
```

다음과 같이 조건을 추가할 수 있다.
```
> db.member.find({ name: "paul" })
{ "_id" : ObjectId("625ad76b8d6dabdee5230bee"), "name" : "paul" }
```

#### eq (equal)
```
> db.member.find({name: {$eq: "john"}})
{ "_id" : ObjectId("625ad77b8d6dabdee5230bef"), "name" : "john" }
{ "_id" : ObjectId("625adc3d8d6dabdee5230bf6"), "name" : "john" }
```

#### ne (not equal)
```
> db.member.find({name: {$ne: "john"}})
{ "_id" : ObjectId("625ad76b8d6dabdee5230bee"), "name" : "paul" }
{ "_id" : ObjectId("625ad79e8d6dabdee5230bf0"), "name" : "messi" }
{ "_id" : ObjectId("625ad79e8d6dabdee5230bf1"), "name" : "ronaldo" }
// ...
```

#### gt
```
> db.member.find({age: {$gt: 30}})
{ "_id" : ObjectId("625ad8698d6dabdee5230bf2"), "name" : "monica", "age" : 35, "isMarried" : true, "weight" : 50.5, "createdAt" : "Sat Apr 16 2022 23:53:29 GMT+0900 (KST)" }
```

#### gte
```
> db.member.find({age: {$gte: 30}})
```

#### lt
```
> db.member.find({age: {$lt: 30}})
```

#### lte
```
> db.member.find({age: {$#### lte
: 30}})
```

#### in
```
> db.member.find({name: {$in: ["monica", "paul"]}})
{ "_id" : ObjectId("625ad76b8d6dabdee5230bee"), "name" : "paul" }
{ "_id" : ObjectId("625ad8698d6dabdee5230bf2"), "name" : "monica", "age" : 35, "isMarried" : true, "weight" : 50.5, "createdAt" : "Sat Apr 16 2022 23:53:29 GMT+0900 (KST)" }
```
#### nin
```
> db.member.find({name: {$#### nin
: ["monica", "paul"]}})
```

#### and
```
> db.member.find({$and: [{name: "monica"}, {isMarried: true}]})
{ "_id" : ObjectId("625ad8698d6dabdee5230bf2"), "name" : "monica", "age" : 35, "isMarried" : true, "weight" : 50.5, "createdAt" : "Sat Apr 16 2022 23:53:29 GMT+0900 (KST)" }
```

#### or
```
> db.member.find({$or: [{name: "paul"}, {isMarried: true}]})
{ "_id" : ObjectId("625ad76b8d6dabdee5230bee"), "name" : "paul" }
{ "_id" : ObjectId("625ad8698d6dabdee5230bf2"), "name" : "monica", "age" : 35, "isMarried" : true, "weight" : 50.5, "createdAt" : "Sat Apr 16 2022 23:53:29 GMT+0900 (KST)" }
```

### Field 데이터 타입
`Field`에는 자바스크립트의 데이터 타입을 저장할 수 있다. 자바스크립트 외에도 몇 개의 특수한 데이터타입을 저장할 수 있는데 그 중 하나가 각 Document를 구분하기 위한 `ObjectId`다. 모든 데이터 타입은 [이 곳](https://www.tutorialspoint.com/mongodb/mongodb_datatype.htm)에서 확인할 수 있다.

### Document 수정
#### 특정 필드 수정
`db.<도큐먼트이름>.updateOne()`으로 도큐먼트의 특정 필드를 수정할 수 있다.
``` {4}
> db.member.find({name: "monica"})
{ "_id" : ObjectId("625ad8698d6dabdee5230bf2"), "name" : "monica", "age" : 35, "isMarried" : false, "weight" : 50.5, "createdAt" : "Sat Apr 16 2022 23:53:29 GMT+0900 (KST)" }

> db.member.updateOne({name: "monica"}, {$set: {age: 35, isMarried: true}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 0 }

> db.member.find({name: "monica"})
{ "_id" : ObjectId("625ad8698d6dabdee5230bf2"), "name" : "monica", "age" : 35, "isMarried" : true, "weight" : 50.5, "createdAt" : "Sat Apr 16 2022 23:53:29 GMT+0900 (KST)" }
```


#### 다른 Document로 대체하기
``` {1}
> db.member.update({ name: "paul"}, { name: "ping", age: 20})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

#### 특정 Field 제거하기
``` {4}
> db.member.find({name: "monica"})
{ "_id" : ObjectId("625ad8698d6dabdee5230bf2"), "name" : "monica", "age" : 35, "isMarried" : false, "weight" : 50.5, "createdAt" : "Sat Apr 16 2022 23:53:29 GMT+0900 (KST)" }

> db.member.update({name: "monica"}, {$unset: {isMarried: true}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

> db.member.find({name: "monica"})
{ "_id" : ObjectId("625ad8698d6dabdee5230bf2"), "name" : "monica", "age" : 35, "weight" : 50.5, "createdAt" : "Sat Apr 16 2022 23:53:29 GMT+0900 (KST)" }
```

### Document 삭제
`deleteOne()`으로 조건에 맞는 Document 하나를 삭제할 수 있다.
``` 
> db.member.deleteOne({name: "messi"});
```
`deleteMany()`로 조건에 맞는 Document 여러 개를 삭제할 수 있다.
```
> db.member.deleteMany({nation: "USA"});
```
모든 도큐먼트를 삭제할 수도 있다.
```
> db.member.deleteMany({})
```

## _id 필드
관계형 데이터베이스에는 `기본 키(primary key)`로 모든 Row를 고유하게 구분한다. `Mongo DB`도 유사한 개념의 `_id` Field로 Document를 고유하게 구분한다. Document를 저장할 때 명시적으로 값을 제공하지 않으면 Mongo DB가 `_id` 값을 자동으로 생성한다.
```
> db.member.insert({ name: "paul" })
> db.member.insert({ name: "john" })

> db.member.find({name: {$ne: "john"}})
{ "_id" : ObjectId("625ad76b8d6dabdee5230bee"), "name" : "paul" }
{ "_id" : ObjectId("625ad79e8d6dabdee5230bf0"), "name" : "messi" }
```

## Index
관계형 데이터베이스의 `인덱스(Index)`를 사용하면 데이터를 빠르게 탐색할 수 있다. Mongo DB도 인덱스를 제공한다.

### Index 조회
`db.<콜렉션 이름>.getIndexes()` 명령어로 인덱스를 확인할 수 있다.
```
> db.member.getIndexes()
[
	{
		"v" : 2,
		"key" : {
			"_id" : 1
		},
		"name" : "_id_",
		"ns" : "my_db.member"
	}
]
```
`_id` 필드에는 인덱스가 자동으로 생성된다.

### 단일 필드 인덱스 생성
`db.[테이블명].createIndex({ [필드명]: ±1 })`로 인덱스를 생성할 수 있다. `1`은 오름차순, `-1`은 내림차순으로 인덱스를 생성한다.
```
> db.member.createIndex({ name: 1 })
{
	"createdCollectionAutomatically" : false,
	"numIndexesBefore" : 1,
	"numIndexesAfter" : 2,
	"ok" : 1
}
```
중복된 데이터가 존재하는 필드에는 인덱스를 생성할 수 없다.

### 복합 필드 인덱스 생성
```
> db.member.createIndex({ name: 1, age: 1 })
```

### 인덱스 삭제
`db.monsters.dropIndex(필드명)`으로 인덱스를 삭제할 수 있다.

## 정렬
`sort()`를 사용하여 조회한 도큐먼트를 정렬할 수 있다.
```
> db.member.find().sort({ name: 1 })	// 오름차순 정렬
```
```
> db.member.find().sort({ name: -1 })	// 내림차순 정렬
```
```
> db.member.find().sort({ name: 1, nation: 1 })
```

## 페이징
`limit(n)`은 조회할 도큐먼트 개수를 제한할 때 사용한다.
```
> db.member.find().limit(10)
```
`skip(n)`은 n개를 건너뛰고 그 다음부터 도큐먼트를 조회한다.
```
> db.member.find().skip(10)
```
페이징은 `skip(n)`과 `limit(n)`  메소드를 조합하여 사용할 수 있다.
```
> db.member.find().skip(10).limit(10)
```

## 관계 설정
Mongo DB는 관계형 데이터베이스의 외래키 개념이 없다. 따라서 두 가지 방법으로 `관계(Relation)`를 설정할 수 있다.

### 임베디드
`임베디드(Embedded)`은 도큐먼트에 다른 도큐먼트를 객체 형태로 가지고 있다.
``` {3,4,5,6}
> db.member.insert({ 
    name: "paul", 
    posts: [
        { title: "Java", content: "I love Java." }, 
        { title: "Kotlin", content: "Kotlin is fun." }
    ]
})
WriteResult({ "nInserted" : 1 })
```
``` {5,6,7,8}
> db.member.findOne({ name: "paul" })
{
	"_id" : ObjectId("625afb558d6dabdee5230bf7"),
	"name" : "paul",
	"posts" : [
		{ "title" : "Java", "content" : "I love Java." },
		{ "title" : "Kotlin", "content" : "Kotlin is fun." }
	]
}
```

### 참조(Reference)
`참조(Reference)`은 다른 도큐먼트의 참조를 가지고 있다.
``` {14,15}
> db.post.insert({
    title: "Swift",
    content: "Swift for iOS"
})

> db.post.insert({
    title: "DevOps",
    content: "DevOps is useful."
})
```
```{3,8}
> db.post.find().pretty()
{
	"_id" : ObjectId("625afcaf8d6dabdee5230bf9"),
	"title" : "Swift",
	"content" : "Swift for iOS"
}
{
	"_id" : ObjectId("625afcb48d6dabdee5230bfa"),
	"title" : "DevOps",
	"content" : "DevOps is useful."
}
```
``` {4,5}
> db.member.insert({
    name: "James",
    posts: [
        ObjectId("625afcaf8d6dabdee5230bf9"),
        ObjectId("625afcb48d6dabdee5230bfa")
    ]
})
```

## 사용자 관리
Mongo DB에 처음 접속하면 인증이 비활성화 되어있기 때문에 누구나 인증없이 데이터베이스 접근할 수 있다. 심지어 원격 접속도 인증이 필요없다.
``` shellsession
$ mongo		// 인증 없이 접속
>
```
따라서 관리자와 사용자 계정을 생성하고, 사용자에게 역할을 부여한 후, 인증을 거치도록 구성해야한다.

### 사용자 조회
`show users` 명령어를 사용하면 모든 사용자를 조회할 수 있다. Mongo DB에 처음 접속했다면 생성한 계정이 없기 때문에 아무 결과도 출력되지 않는다.
```
> show users 

```

`db.getUsers()`를 실행하면 현재 데이터베이스의 모든 사용자를 출력한다.
```
> db.getUsers()
[ ]
```

### 사용자 생성
`db.createUser()`로 사용자를 생성할 수 있다. 
```
> db.createUser({ 
	user: "<name>", 
	pwd: "<cleartext password>", 
	roles: [ 
		{ role: "<role>", db: "<database>" } | "<role>", 
		... 
	] 
}
```

우선 모든 데이터베이스에 대해 모든 권한을 갖는 `root` 계정을 생성하자.
```
> use admin

> db.createUser(
  { 
     user: "root", 
     pwd: "root", 
     roles: [ "root" ] 
  }
)
```
```
> show users
{
	"_id" : "admin.root",
	"userId" : UUID("999a9d45-85f3-4ad8-abe6-01b6184fa90a"),
	"user" : "root",
	"db" : "admin",
	"roles" : [
		{
			"role" : "root",
			"db" : "admin"
		}
	],
	"mechanisms" : [
		"SCRAM-SHA-1",
		"SCRAM-SHA-256"
	]
}
```

일반 사용자 계정도 생성해보자.
```
> use my_db

> db.createUser(
  {
    user: "user",
    pwd: "user",
    roles: [ { role: "readWrite", db: "my_db" } ]
  }
)
```
```
> show users
{
	"_id" : "my_db.user",
	"userId" : UUID("f4aab7bc-413b-4dd3-b1cf-08a65fbb428d"),
	"user" : "user",
	"db" : "my_db",
	"roles" : [
		{
			"role" : "readWrite",
			"db" : "my_db"
		}
	],
	"mechanisms" : [
		"SCRAM-SHA-1",
		"SCRAM-SHA-256"
	]
}
```


### 인증 활성화
Mongo DB는 기본적으로 인증없이 접근할 수 있다. 인증을 활성화하려면 설정 파일을 수정해야한다.
```
$ vim /usr/local/etc/mongod.conf
```
`mongod.conf`에 다음 코드를 추가한다.
```
security:
  authorization: enabled
```
설정파일을 수정한 후 MongoDB를 재시작한다.
```
$ brew services restart mongodb-community@4.2
```

### 사용자 인증
먼저 인증없이 Mongo DB에 접속해보자.
``` shellsession
$ mongo  
MongoDB shell version v4.2.19
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("5cd65398-d599-465d-a384-2f9a51e002a3") }
MongoDB server version: 4.2.1
```

Mongo DB와의 세션은 연결되었으나 인증은 진행되지 않았다. 따라서 데이터베이스나 테이블 조회도 불가능하다.
```
> show databases;
// 결과 없음
```

`db.auth()`를 사용하면 인증을 할 수 있다.
```
> db.auth("user", "user")
1

> show databases;
my_db  0.000GB
```

다음과 같이 Mongo DB와의 세션을 연결할 때 사용자, 비밀번호 정보를 전달할 수도 있다.
``` shellsession {1}
$ mongo -u "user" -authenticationDatabase "my_db"
MongoDB shell version v4.2.19
Enter password: <USER_PASSWORD>
connecting to: mongodb://127.0.0.1:27017/?authSource=my_db&compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("6cfc239f-8b86-48a2-89b6-8fe9dbb62353") }
MongoDB server version: 4.2.19

> show databases;
my_db  0.000GB
```

루트 계정은 `db.auth()`로 접속할 수 없으며 위와 같은 방법으로 접속해야한다.
``` shellsession{1}
$ mongo -u "root"
MongoDB shell version v4.2.19
Enter password: <ROOT_PASSWORD>
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("47d48100-9172-4187-8d5b-6a7944a2e055") }
MongoDB server version: 4.2.19
---
Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---

> show databases;
admin   0.000GB
config  0.000GB
local   0.000GB
my_db   0.000GB
mydb    0.000GB
```

### 사용자 삭제
`db.dropUser()`는 특정 사용자를 삭제하며, `db.dropAllUsers()`로 모든 사용자를 삭제할 수 있다.

## Mongo DB Cluster 구축
::: warning Notification
준비 중인 컨텐츠입니다.
:::

## Replication
::: warning Notification
준비 중인 컨텐츠입니다.
:::

## Sharding
::: warning Notification
준비 중인 컨텐츠입니다.
:::