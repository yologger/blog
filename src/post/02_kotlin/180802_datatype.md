---
title: "Kotlin 데이터 타입"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## 자료형
`자료형`이란 <u>데이터의 종류</u>를 의미한다. 예를 들어 나이는 숫자고 이름은 문자열이다. 여기서 숫자와 문자열을 자료형이라고 한다. Kotlin에서는 이를 다음과 같이 표현한다. 
``` kotlin
var age: Int = 30
var name: String = "Paul"
``` 
Kotlin에서 제공하는 데이터 타입은 다음과 같다.

### 정수형 숫자
`10진수 정수형 숫자`는 다음과 같이 사용한다.
``` kotlin
var age: Byte = 4       // 1 byte
var age: Short = 4      // 2 byte
var age: Int = 4        // 4 byte
var age: Long = 4       // 8 byte
```
`2진수 정수형 숫자`는 다음과 같이 사용한다.
``` kotlin
var binaryByte: Byte = 0b01000001   // 10진수로 56
```

`16진수 정수형 숫자`는 다음과 같이 사용한다.
``` kotlin
var hexadecimalByte: Byte = 0x41    // 10진수로 56
```

### 실수형 숫자
``` kotlin
var height: Float = 178.2f  // 4 byte
var weight: Double = 78.3   // 8 byte
```

### 불리언
``` kotlin
var isMarried: Boolean = true
```

### 문자
`문자` 한 개를 선언하고 초기화할 때는 `따옴표(')`를 사용한다.
``` kotlin
var letter: Char = 'a'
```
### 문자열
`문자열`을 선언하고 초기화할 때는 `쌍따옴표(")`를 사용한다.
``` kotlin
// 문자열 선언 및 초기화
var name: String = "Paul"
```
문자열 안에 변수를 삽입하는 것을 `문자열 템플릿`이라고 한다.
``` kotlin
var description: String = "My name is ${name}"
```

문자열 타입의 변수에는 유용한 속성과 메소드가 내장되어있다.
``` kotlin
var name = "Paul"
name.length             // 4
name.toLowerCase()      // paul
name.toUpperCase()      // PAUL

var str = "Hello.Nice.To.Meet.You"
var words = str.spilt('.')      // ["Hello", "Nice", "To", "Meet", "You"]
```

## Java와 Kotlin의 데이터 타입 차이
Java에서는 자료형을 원시 타입과 참조 타입으로 나누어지며, 원시 타입은 클래스가 아니다.
``` java
// 원시 타입
int age = 30;
double height = 167.3;

// 참조 타입
Person person = new Person("Paul", "USA");
```

그러나 Kotlin에서는 원시 타입도 클래스로 정의되어있다.
``` kotlin
val age: Int = 30;
val double: Double = 167.3;

val person: Person = Person("Paul", "USA")
```

## 타입 추론
Kotlin에서는 변수명 뒤에 자료형을 선언한다.
``` kotlin
var name: String = "Paul"
var age: Int = 35
```
하지만 자료형을 선언하지 않아도 변수를 선언과 동시에 초기화하면 자동으로 자료형이 추론된다.
``` kotlin
var name = "Paul"       // var name: String = "Paul"과 동일
var age = 35            // var age: Int = 35와 동일
```

## 변수와 상수
### 변수
변수를 선언할 때는 키워드`var`를 사용한다.
``` kotlin
// 변수 선언
var name: String

// 변수 초기화
name = "Paul"
```
``` kotlin
// 변수 선언과 동시에 초기화
var name: String = "Paul"
```
변수는 값을 초기화한 후 변경할 수 있다.
``` kotlin
var name: String = "Paul"
name = "James"
```

### 상수
상수를 선언할 때는 키워드 `val`을 사용한다.
``` kotlin
// 상수 선언과 초기화
val name: String = "Paul"
``` 
상수는 초기화한 후 값을 변경할 수 없다. 
``` kotlin
name = "James"       // Error
``` 
상수는 선언과 초기화를 동시에 해야한다.
``` kotlin
val nation: String = "Republic of Korea"    // Success

val name: String    // Error
name = "Son"        // Error
```

### val vs. const
`val`은 <u>런타임에 값이 결정되는 상수</u>다. 상수는 한 번 값이 할당되면 변경할 수 없다. 
``` kotlin
// 기본타입의 상수 선언
val age: Int = 30

// 에러, 값 변경 불가능
age = 31
```
`val`은 문자열도 할당할 수 있다.
``` kotlin
// 문자열 타입의 상수 선언
val name: String = "Paul"

// 에러, 값 변경 불가능
name = "John"
```
`val`는 클래스의 인스턴스도 할당할 수 있다.
``` kotlin
val person = Person("Paul", 35)

// 에러, 물론 다른 인스턴스를 할당할 수도 없다.
person = Person("John", 25)
```

반면 `const val`는 <u>컴파일 타임에 값이 결정되는 상수</u>다. 인스턴스를 할당할 수 없으며, 기본 자료형과 문자열만 할당할 수 있다. 이름은 통상 <u>대문자</u>와 <u>언더바</u>를 통해 선언한다.
``` kotlin
const val DEVICE_WIDTH: Int = 1400                  // 성공
const val URL: String = "http://www.naver.com"      // 성공

const val person: Person = Person("ronaldo", 34)    // 에러
```
클래스 안에서 사용할 때는 `companion object` 블럭 안에 정의한다.
``` kotlin
class MediaQueryMananger {
    companion object {
        const val DEVICE_WIDTH: Int = 1400
    }
}
 
// 클래스의 인스턴스를 생성하지 않고 사용할 수 있다.
println(MediaQueryManager.DEVICE_WIDTH)
```

## 늦은 초기화
Kotlin에서 변수나 상수는 원칙적으로 선언과 동시에 초기화해야 한다. 변수는 초기화하지 않으면 컴파일 자체가 안되기 때문이다.
``` kotlin
// 기본 데이터타입 Int
var age: Int        // Property must be initialized or be abstract
var person: Person  // Property must be initialized or be abstract
``` 

값이 없다면 데이터 타입을 `Nullable`로 선언하고 `null`이라도 할당해야 한다.
``` kotlin
var age: Int? = null
var person: Person? = null
``` 

그러나 Kotlin은 선언만 먼저 하고 초기화는 나중에 하는 방법을 제공한다. 이를 `늦은 초기화(Late Initialization)`라고 한다.

늦은 초기화에는 두 가지 방법이 있다.

1. `lateinit var`
1. `by lazy`

### lateinit var
`lateinit var`을 사용하면 변수만 먼저 선언하고 초기화는 특정 시점으로 미룰 수 있다. 기본 자료형은 사용할 수 없으며 클래스의 인스턴스만 가능하다.
``` kotlin
class Person(name: String, age: Int)

lateinit var person: Person     // 컴파일 에러가 발생하지 않는다.

person = Person("Paul", 35)
```
문자열 `String`도 클래스이므로 사용할 수 있다.
``` kotlin
lateinit var name: String
name = "Ronaldo"
```
보통 안드로이드 앱을 개발할 때 다음과 같이 사용한다.
``` kotlin
class MainActivity : AppCompatActivity() {

    private lateinit var loginButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        loginButton = findViewById(R.id.login_button)

        loginButton.setOnClickListener {
            println("LoginButton Clicked.")
        }
    }
}
``` 

### by lazy
키워드 `by lazy`를 상수 앞에 붙이면 상수에 접근할 때 값이 초기화된다. 접근하기 전에는 값이 초기화되지 않으므로 메모리를 절약할 수 있다.
``` kotlin
val name: String by lazy {
    println("Initializing....")
    "Paul"  // 블럭의 마지막 값이 할당된다.
}

print(name) // 상수에 접근하는 이 시점에 상수 name이 초기화됩니다.
``` 

보통 안드로이드 앱을 개발할 때 다음과 같이 사용한다.
``` kotlin
class MainActivity : AppCompatActivity() {

    private val loginButton: Button by lazy { findViewById<Button>(R.id.login_button) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        loginButton.setOnClickListener {
            println("LoginButton Clicked.")
        }
    }
}
``` 