---
title: "Kotlin 객체지향 프로그래밍"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

# 객체지향 프로그래밍
Kotlin은 모든 대상을 `객체(Object)`로 바라본다. 이러한 점에서 Kotlin은 객체지향 프로그래밍 언어다. 객체지향 프로그래밍을 이해하려면 클래스와 인스턴스에 대해 알아야 한다.

## 클래스와 인스턴스
클래스와 인스턴스를 설명할 때 와플 기계와 와플을 예로 많이 든다.
![](./180810_object_oriented_programming/1.png)

`클래스(Class)`는 <u>인스턴스를 만드는 틀</u>, `인스턴스(Instance)`는 <u>클래스로 만든 무언가</u>다. 즉 클래스는 와플 기계, 인스턴스 와플이다. 클래스를 코드로 표현하면 다음과 같다.
``` kotlin
class Waffle {
    // ...
}
```
인스턴스는 다음과 같이 생성한다. 클래스 이름 뒤에 `()`를 붙여주면 된다.
``` kotlin
var waffle = Waffle()
```
이렇게 만든 인스턴스는 `객체(Object)`라고도 한다.

## 생성자
`생성자(Constructor)`는 클래스의 인스턴스를 생성할 때 호출되는 구문이다. 보통 생성자에서 초기화 작업을 수행한다. 생성자는 키워드`constructor`를 사용하여 선언한다.
``` kotlin
class Person {

    // 멤버변수
    String name

    // 생성자
    constructor() {
        // 멤버변수 초기화 작업 수행   
        this.name = "John" 
        println("This is constructor.")
    }
}
```
이 생성자는 클래스의 인스턴스를 생성할 때 호출된다.
``` kotlin
Person person = person()
// This is constructor.
```
생성자에는 두 가지가 있다.
### 기본 생성자
`기본 생성자`는 클래스 이름 뒤에 키워드`constructor`를 붙여서 만든다. 
``` kotlin
class Person constructor(name: String) {	
    // ...
}

주의할 점은 기본 생성자는 별도의 초기화 구문이 존재하지 않는다. 이 때는 `init`구문을 사용할 수 있다.
``` kotlin
class Person constructor(name: String) {	

    // 멤버변수 선언
    var name: String
	    
    // 초기화 작업 수행
    init {
        println("This is constructor.")
    }
}

// 클래스의 인스턴스 생성
var person = Person("Paul")		

print(person.name)
```

키워드`constructor`는 생략할 수 있다.
``` kotlin
class Person(name: String) {	

    // 멤버변수 선언
    var name: String
	    
    // 초기화 구문
    init {
        this.name = name
    }
}

var person = Person("Paul")		

print(person.name)
```
생성자 안에서 멤버변수를 선언할 수도 있다.
``` kotlin
class Person (var name: String) {
    // var name: String
}
```
위처럼 코드를 작성하는 경우, 클래스를 생성할 때 전달한 값 전달인자가 매개변수에 자동으로 초기화된다.
``` kotlin
var person = Person("Paul")

print(person.name)  // Paul
```

### 보조 생성자
기본 생성자를 정의하지 않고 아래와 같이 `보조 생성자`만을 사용할 수도 있다.
``` kotlin
class Person {

    // 멤버변수
    var name: String

    // 보조 생성자
    constructor(name: String) {
        this.name = name    
    }
}
	
var person = Person("Paul") 
println(person.name)
```

## 멤버 변수와 메소드
`멤버 변수`와 `메소드`는 클래스 내부에 다음과 같이 선언한다.
``` kotlin
class Person {

    // 멤버 변수
    var name: String

    // 생성자
    constructor(name: String) {
        this.name = name
    }

    // 메소드
    fun printName() {
        println("My name is ${this.name}")
    }
}
```
이렇게 선언한 클래스의 인스턴스를 다음과 같이 생성한다. 
``` kotlin	
var person = Person("Ross")
```
인스턴스의 메소드는 다음과 같이 호출할 수 있다.
``` kotlin
person.printName()
```
인스턴스의 멤버 변수는 다음과 같이 접근할 수 있다.
``` kotlin
var name = person.name
```

## 상속
실생활에서의 상속은 자식의 부모의 재산을 물려받는 행위를 뜻한다. Kotlin에서도 상속은 비슷한 의미로 사용된다. `상속(Inheritance)`은 <u>부모 클래스의 멤버 변수나 메소드를 자식 클래스가 그대로 물려받는 것</u>을 의미한다. 이를 통해 코드의 중복을 제거할 수 있다.

### final
Kotlin에서 클래스는 기본적으로 상속이 불가능하다.
``` kotlin
class Person(var name: String) {

    fun work() {
        println("work!");
    }
}
```
위와 아래 코드는 동일하다. 키워드 `final`이 기본값이며, 이 키워드가 붙은 클래스는 상속이 불가능하다.
``` kotlin
final class Person(var name: String) {

    final fun work() {
        println("work!");
    }
}
```

### open
부모 클래스를 상속하려면 부모 클래스에 키워드 `open`을 붙여야한다.

우선 부모 클래스가 기본 생성자를 사용하는 경우에 대해 살펴보자.
``` kotlin
// 부모 클래스에서 기본 생성자를 사용하는 경우
open class Person(val name: String)
```
자식 클래스에서는 생성자 뒤에 `:`를 붙이고 부모 클래스의 이름을 작성한다. 이후 부모 클래스의 생성자를 호출해야한다.
```kotlin
// 자식 클래스
class Programmer(name: String, val nation: String): Person(name)
```
위 코드에서는 `: Person(name)`를 통해 부모 클래스를 상속하면서 부모 클래스의 생성자를 호출하고 있다.

이제 부모 클래스에서 보조 생성자를 사용하는 경우에 대해 알아보자.
``` kotlin
// 부모 클래스에서 보조생성자를 사용
open class Person {

    val name: String
    
    constructor(name: String) {
        this.name = name
    }
}
```
자식 클래스에서는 다음과 같이 생성자를 선언한다. 그리고 `super()`를 통해 부모 클래스의 생성자를 호출한다.
``` kotlin
// 자식 클래스
class Programmer: Person {

    val nation: String
    
    constructor(name: String, nation: String): super(name) {
        this.nation = nation
    }
}
```

### 메소드 오버라이드
부모 클래스에 정의된 메소드를 자식 클래스에서 재정의할 수 있다. 이를 `오버라이드(override)`라고 한다.
``` kotlin
// 부모 클래스
open class Person(var name: String) {

    open fun work() {
        println("work!")
    }
}
``` 
자식 클래스에서는 재정의하려는 메소드 앞에 키워드 `override`를 붙인다.
``` kotlin
// 자식 클래스
class Footballer (name: String): Person(name) {
    
    // 메소드 오버라이드
    override fun work() {
        println("play soccer!")
    }

    // 자식 클래스에서 새로운 메소드 정의
    fun exercise() {
        println("exercise!")
    }
}
``` 
자식 클래스의 인스턴스는 다음과 같이 생성한다.
``` kotlin
var footballer = Footballer("Ronaldo")
footballer.work()
``` 

## Nested Class vs. Inner Class
코틀린에서는 클래스 안에 클래스를 정의할 수 있다.

`Nested Class`는 외부 클래스의 멤버변수에 접근할 수 없다.
``` kotlin
class OuterClass {

    private val outerVariable: Int = 1

    // Nested Class 
    class NestedClass {

        fun printSomething() {
            // Nested Class에서는 외부 클래스의 멤버변수에 접근할 수 없다.
            println(outerVariable)  // Error
        }
    }
}
```
``` kotlin
val nestedClass = OuterClass.NestedClass()
```

반면 `Inner Class`는 외부 클래스의 멤버변수에 접근할 수 있다. 
``` kotlin
class OuterClass {

    private val outerVariable: Int = 1

    // Nested Class 
    inner class InnerClass {

        fun printSomething() {
            // Inner Class에서는 외부 클래스의 멤버변수에 접근할 수 있다.
            println(outerVariable)  // 1
        }
    }
}
```
``` kotlin
val outerClass = OuterClass()
val innerClass = outerClass.InnerClass()
```

## 추상 클래스
<u>선언만 있고 구현부는 없는 메소드</u>를 `추상 메소드(Abstract Method)`라고 한다. 또한 <u>추상 메소드를 포함하는 클래스</u>를 `추상 클래스(Abstract Class)`라고 한다. 추상 메소드와 추상 클래스는 앞에 키워드 `abstract`를 붙인다.
``` kotlin
abstract class Person {

    // 구현부가 없는 추상 메소드
    abstract fun work()

    // 구현부가 있는 일반 메소드
    fun eat() {
        println("eat something.")
    }
}
```
추상 클래스는 인스턴스를 생성할 수 없다.
``` kotlin
val person = Person()   // Error. Cannot create an instance of an abstract class
```

추상 클래스를 상속하는 자식 클래스에서는 추상 메소드를 재정의할 수 있다. 이를 `오버라이드(override)`라고 한다.
``` kotlin
class Programmer: Person() {

    override fun work() {
        println("do programming")
    }
}
```
추상 클래스를 구현한 자식 클래스는 다음과 같이 인스턴스를 생성할 수 있다.
``` kotlin
var programmer = Programmer()
programmer.work()
programmer.eat()
```

## 인터페이스
<u>모든 메소드가 선언만 있고 구현부가 없는 클래스</u>를 `인터페이스(Interface)`라고 한다. 인터페이스를 선언할 때는 키워드 `interface`를 사용한다.

``` kotlin
interface Person {
    fun work()
    fun eat()
}
```
인터페이스는 인스턴스를 만들 수 없으며, 이를 구현한 클래스를 작성해야한다. 인터페이스를 구현한 클래스를 `구현체(Implementation)`라고 한다.
``` kotlin
// 구현체
class Footballer: Person {
    override fun work() {
        println("play soccer.")
    }

    override fun eat() {
        println("Eat something.")
    }
}
```
인터페이스를 구현한 클래스는 인스턴스를 생성할 수 있다.
``` kotlin
// 구현체의 인스턴스 생성
var footballer = Footballer()
footballer.work()
footballer.eat()
```

## 데이터 클래스
Kotlin은 데이터만을 담기 위한 클래스를 제공한다. 이를 `데이터 클래스(data class)`라고 한다. 데이터 클래스를 선언할 때는 키워드`data`를 붙인다. 주의할 점은 멤버 변수를 반드시 기본 생성자에 추가해야한다.
``` kotlin
data class Person constructor(val name: String, val nation: String)
```
데이터 클래스는 데이터를 처리하는데 유용한 메소드들을 자동으로 제공한다. 자주 사용하는 몇 가지 메소드만 알아보자.

### equal()
`equal()`메소드는 두 인스턴스가 동일한지 비교하는데 사용한다.
``` kotlin
data class Person constructor(val name: String, val nation: String)

val p1 = Person("Ronaldo", "Portugal")
val p2 = Person("Ramos", "Spain")

println(p1.equals(p2))  // false
```

보통 `equal()`은 개발자가 정의하여 사용한다.
``` kotlin
data class Person constructor(val name: String, val nation: String) {
    override fun equals(other: Any?): Boolean {
        return (this.name == (other as Person).name) && (this.nation == (other as Person).nation)
    }
}

val p1 = Person("John", "USA")
val p2 = Person("John", "USA")
val p3 = Person("John", "France")

p1.equals(p2)   // true
p1.equals(p3)   // false
```

### toString()
`toString()`메소드는 인스턴스를 문자열로 변환하는데 사용한다.
``` kotlin
data class Person constructor(val name: String, val nation: String)

val person = Person("Ronaldo", "Portugal")

println(person.toString())	// Person(name=Ronaldo, nation=Portugal) 
```
보통 `toString()`도 개발자가 정의하여 사용한다.
``` kotlin
data class Person constructor(val name: String, val nation: String) {
    override fun toString(): String {
        return "${name} lives in ${nation}"
    }
}

val p = Person("John", "USA")
p.toString()    // John lives in USA
```

### copy()
`copy()`메소드는 인스턴스를 복사하는데 사용한다.
``` kotlin
data class Person constructor(val name: String, val nation: String)

val p1 = Person("Paul", "England")
val p2 = p1.copy()

println(p2.name)    // Paul
```

## enum class
`열거 클래스(enum class)`는 <u>서로 관련 있는 상수들을 모아 심볼릭한 명칭의 집합으로 정의하는 것</u>이다.

예를 들어 요일은 월요일부터 일요일까지로 데이터의 범위가 한정되어 있다. 이러한 경우 열거 클래스를 유용하게 사용할 수 있다. 열거 클래스는 키워드 `enum`을 붙여 정의한다.
``` kotlin
enum class Day {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
}
```
열거 클래스의 인스턴스는 다음과 같이 생성한다.
``` kotlin
val today: Day = Day.MONDAY
```
열거 클래스 역시 타입 추론이 가능하므로 타입을 생략할 수 있다.
``` kotlin
val today = Day.MONDAY
```
열거 클래스는 `when()` 구문과 함께 유용하게 사용할 수 있다.
``` kotlin
when(today) {
    Day.MONDAY -> println("It's monday today.")
    Day.TUESDAY -> println("It's tuesday today.")
    Day.WEDNESDAY -> println("It's Wednesday today.")
    Day.THURSDAY -> println("It's thursday today.")
    Day.FRIDAY -> println("It's friday today.")
    else -> println("Weekend.")
}
```
열거 클래스는 내부에 데이터를 담을 수도 있다. 
``` kotlin
enum class Day(val color: String) {
    SUNDAY("Red"),
    MONDAY("Black"),
    TUESDAY("Black"),
    WEDNESDAY("Black"),
    THURSDAY("Black"),
    FRIDAY("Black"),
    SATURDAY("Blue"),
}
```
다음과 같이 값에 접근할 수도 있다.
``` kotlin
val today = Day.SUNDAY

today.color    // Red
```

## sealed class
`Sealed Class`는 열거 클래스의 확장판이라고 보면 된다. 열거 클래스와 마찬가지로 서로 관련 있는 상수들을 모아 심볼릭한 명칭의 집합으로 정의할 수 있다.

Sealed Class는 키워드 `Sealed`를 사용하여 선언한다.
``` kotlin
sealed class Color {
    object Red: Color()
    object Blue: Color()
    object Green: Color()
}
```
Sealed Class의 인스턴스는 다음과 같이 생성할 수 있다.
``` kotlin
// Sealed Class의 인스턴스 생성
var backgroundColor: Color = Color.Blue
```
Sealed Class는 `when 구문`과 함께 유용하게 사용할 수 있다.
``` kotlin
when(backgroundColor) {
    is Color.Red -> {
        println("Background color is red.")
    }
    is Color.Blue -> {
        println("Background color is blue.")
    }
    is Color.Green -> {
        println("Background color is green.")
    }
}
``` 
### enum class vs. sealed class
`Sealed Class`는 인스턴스 안에 다른 타입의 데이터를 포함할 수도 있다. 아래 코드를 살펴봅시다.
``` kotlin
sealed class Manager {
    data class Programmer(var school: String) : Manager()
    data class Marketer(var major: String) : Manager()
}
```
매니저는 프로그래머 출신일 수도 있고 마케터 출신일 수도 있다. 이에 따라 다른 구문이 실행되도록 구현할 수 있다. 
``` kotlin
fun printInformation(manager: Manager) {
    when (manager) {
        is Manager.Programmer -> {
            println("Manager studied at MIT")
        }
        is Manager.Marketer -> {
            println("Manager majored in Economics")
        }
    }
}

var itManager = Manager.Programmer("MIT")
var marketingManager = Manager.Marketer("Economics")

printInformation(itManager) 
// Manager studied at MIT

printInformation(marketingManager)  
// Manager majored in Economics
```
### 로그인 예제
서버에 로그인을 요청하는 코드가 있다고 가정하자. 로그인에 성공하면 다음과 같이 데이터를 반환한다.
``` kotlin
data class LogInData(val code: Int, var message: String)
```
로그인에 실패하면 다음과 같이 에러를 반환한다. 
``` kotlin
enum class LogInError {
    INVALID_EMAIL,
    INVALID_PASSWORD,
    NETWORK_ERROR
} 
```
이처럼 상황에 따라 다른 타입의 데이터를 반환할 때 Sealed Class를 유용하게 사용할 수 있다.
``` kotlin
sealed class LogInResponse {
    object OnProgress : LogInResponse()
    data class OnSuccess(val data: LogInData) : LogInResponse()
    data class OnFailure(val error: LogInError) : LogInResponse()
}
```
로그인을 요청하는 함수는 아래와 같이 `LogInResponse`를 반환한다.
``` kotlin
fun logIn(id: String, password; String): LogInResponse {
    // 로그인 
}
```
Sealed Class `when()`구문과 함께 유용하게 사용될 수 있다.
``` kotlin
var response = logIn("Paul@gmail.com", "12345")

when(response) {
    is SignUpResponse.OnProgress -> {
        println("${response}")
    }
    is SignUpResponse.OnSuccess -> {
        println("${response.data.code}")
        println("${response.data.message}")
    }
    is SignUpResponse.OnFailure -> {
        when(response.error) {
            SignUpError.INVALID_EMAIL -> {
                println("invalid email")
            }
            SignUpError.NETWORK_ERROR -> {
                println("network error")
            }
            SignUpError.INVALID_PASSWORD -> {
                println("invalid password")
            }
        }
    }
}
```

## 키워드 object
키워드 `object`는 크게 세 가지 용도로 사용된다. 

### 싱글톤 
키워드 `object`는 싱글톤을 만드는데 사용할 수 있다. `싱글톤(Singleton)`은 <u>오직 하나의 인스턴스만 존재하는 클래스</u>를 의미한다. 싱글톤은 다음과 같이 정의한다.
``` kotlin
object Counter {

    var count = 0

    fun countUp() {
        count ++
    }

    fun clear() {
        count = 0
    }
}
```
싱글톤은 별도의 인스턴스를 생성하지 않고 사용할 수 있다.
``` kotlin
Counter.count   // 0

Counter.countUp()
Counter.countUp()
Counter.countUp()
Counter.count   // 3

Counter.clear()
Counter.count   // 0
``` 
물론 싱글톤은 인스턴스에 할당할 수 있다. 이때 모든 인스턴스가 값을 공유한다.
```kotlin
var myCounter: Counter = Counter
myCounter.countUp()
myCounter.countUp()

var yourCounter: Counter = Counter
yourCounter.countUp()
yourCounter.countUp()

myCounter.count     // 4
yourCounter.count   // 4
Counter.count       // 4
```
### 익명 클래스
키워드 object는 `익명 클래스(Anonymous Class)`에도 사용된다. 아래 예제는 안드로이드에서 버튼을 클릭했을 때 특정 작업을 수행하는 코드다. 
``` kotlin
var button: Button

button.setOnClickListener(OnButtonClickedListener())

class OnButtonClickedListener: View.OnClickListener {
    @override
    override fun onClick(v: View?) {
        // 클릭 시 처리
    }
}
```
`Button`클래스의 `setOnClickListener()`메소드는 인터페이스 `View.OnClickListener`의 구현체를 인자로 전달받는다. 따라서 `OnButtonClickedListener`라는 구현체에서 `View.OnClickListener`를 구현하고 있다.

익명 클래스를 사용하면 위 코드를 다음과 같이 단축할 수 있다.
``` kotlin
var button: Button

button.setOnClickListener(object: View.OnClickListener {
    override fun onClick(v: View?) {
        // 클릭 시 처리
    }
})
```

### companion object
키워드 `companion object`는 자바의 `static`과 유사하다. `companion object`구문 안에 선언된 멤버 변수와 메소드는 인스턴스를 별도로 생성하지 않고 접근할 수 있다.
``` kotlin
class FoodPoll(val name: String) {

    companion object {

        var total = 0

        fun printTotal() {
            println(total);
        }
		
        const val POLL: String = "food" 
    }
    
    var count = 0
    
    fun vote() {
        total++
        count++
    }
}
```
`companion object`구문 안에 선언된 멤버 변수는 클래스의 모든 인스턴스가 공유한다. 
``` kotlin
var melon = FoodPoll("Melon")
melon.vote()
melon.vote()

var apple = FoodPoll("Apple")
apple.vote()
apple.vote()
apple.vote()

FoodPoll.printTotal()   // 5
    
println("${melon.name}: ${melon.count}")    // Melon: 2
println("${apple.name}: ${apple.count}")    // Apple: 3

println("Total: ${FoodPoll.total}") // Total: 5
println("POLL: ${FoodPoll.POLL}")    // food
```
`companion object`에는 이름을 붙일 수도 있다.
``` kotlin
class Person(val name: String) { 
    companion object Loader { 
        fun fromJSON(jsonText: String): Person = .... 
    } 
} 

person1 = Person.Loader.fromJSON("{name:'hong'}") 
person2 = Person.fromJSON("{name:'kim'}") 
```

## 접근 제한자
`접근 제한자(Access Modifiers)`는 <u>외부에서 클래스 내부의 메소드나 멤버변수에 접근하는 것을 제한하는 것</u>입니다. Kotlin은 네 개의 접근 제한자를 지원합니다.

### private
`private`이 붙은 멤버변수, 메소드, 생성자는 클래스 내부에서만 접근할 수 있습니다. 클래스에는 붙일 수 없습니다.
``` kotlin
class Person(private val name: String) {
    
    fun printName() {
        // 해당 클래스 내부에서 private 변수 name에 접근할 수 있습니다.
        println("Name: ${name}.")
    }
}

var person = Person("Paul")
var name = person.name      // (에러) 클래스 내부가 아니므로 접근 불가능합니다.
```
`private`으로 선언된 변수는 상속받는 자식 클래스에서도 접근이 불가능합니다.
``` kotlin
open class Person(private val name: String) {

    fun printName() {
        println("Name: ${name}.")
    }
}

class Player(name: String, private var team: String): Person(name) {

    fun printTeam() {
        println("Team: ${team}")
    }

    fun printInformation() {
        println("${name} works in ${team}")
        // (에러) 부모클래스에 선언된 private 변수 name에 접근할 수 없고 컴파일되지 않습니다.
    }
}
```
### protected
`protected`가 붙은 멤버변수, 메소드, 생성자는 해당 클래스와 자식 클래스에서만 접근할 수 있습니다. 클래스에는 붙일 수 없습니다.
``` kotlin
open class Person(protected val name: String) {

    fun printName() {
        println("Name: ${name}.")
    }
}

class Player(name: String, private var team: String): Person(name) {

    fun printTeam() {
        println("Team: ${team}")
    }

    fun printInformation() {
        println("${name} works in ${team}")
        // 부모클래스에 선언된 protected 변수 name에 접근할 수 있습니다.
    }
}
```
### internal
`internal`이 붙은 멤버변수, 메소드, 생성자는 같은 모듈 안 어디에서든 접근할 수 있습니다. 이 접근 제한자는 클래스 앞에도 붙일 수 있습니다. Kotlin 공식 문서에서 말하는 같은 `모듈`은 아래 상황을 뜻합니다.
1. Android Studio Module
1. IntelliJ IDEA Module
1. Maven Project

쉽게 말하면 안드로이드 스튜디오 프로젝트의 같은 모듈에서는 접근이 가능하다고 보면 되겠습니다.

### public (default)
접근 제한자를 따로 붙이지 않으면 이 접근 제한자가 적용됩니다. `public`이 붙은 멤버변수, 메소드, 생성자는 다른 모듈에서도 접근할 수 있으며, 클래스에도 붙일 수 있습니다. 


## Custom Getter, Setter
Getter, Setter의 정의 방법은 Java와 Kotlin에서 차이가 있습니다.

### Java의 Getter, Setter
Java에서는 클래스의 속성에 접근하기 위해 `Getter`와 `Setter`를 정의합니다. 
``` java
class Person {

    private String name;
    private int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // 게터(Getter)
    String getName() {
        return this.name;
    }
    
    // 게터(Getter)
    int getAge() {
        return this.age;
    }
    
    // 세터(Setter)
    void setName(String name) {
        this.name = name;
    }
    
    // 세터(Setter)
    void setAge(int age) {
        this.age = age;
    }
}
```
이제 Person클래스의 name과 age 속성은 `Getter`와 `Setter`를 사용해야만 접근할 수 있습니다. 
``` java
Person person = new Person("Paul", 35);

person.setName("Johb");
person.setAge(20);
String hisName = person.getName();
String hisAge = person.getAge();
```

### Kotlin의 Getter, Setter
Kotlin에서는 `Getter`와 `Setter`를 자동으로 만들어줍니다. 따라서 직접 정의할 필요가 없습니다.
``` kotlin
class Person {
    var name: String
    var age: String

    constructor(name: String, age: String) {
        this.name = name
        this.age = age
    }
}
```
위 구문은 다음과 같이 단축할 수 있습니다.
``` kotlin
class Person(var name: String, var age: String) 
```
이제 클래스의 속성에 직접 접근하면 `Getter`와 `Setter`가 호출됩니다.
``` kotlin
val person = Person("Paul", 35)

person.name = "John"
person.age = 35
var hisName = person.name
var hisAge = person.age
```
이처럼 Kotlin에서는 `Getter`와 `Setter`가 자동으로 생성됩니다. 하지만 직접 `Getter`와 `Setter`를 구현할 수 있습니다. 

### Kotlin의 Custom Getter

아래 Java 코드를 살펴봅시다.
``` java
class Person {

    private String name;
    private int age;
    
    // ..
    
    String getInformation() {
        return this.name + " is " + this.age
    }
}

Person person = new Person("Paul", 35);
String information = person.getInformation();   // Paul is 35
```
Kotlin에서는 위 코드를 `Custom Getter`로 쉽게 구현할 수 있습니다.
``` kotlin
class Person(val name: String, val age: Int) {

    var information: String
        get() {
            return "${this.name} is ${this.age}"
        }
}

val person = Person("Paul", 35);
val information = person.information
```
`get()`의 실행 구문이 한줄일 때는 다음과 같이 단축할 수 있습니다.
``` kotlin
class Person(val name: String, val age: Int) {

    var information: String
        get() = "${this.name} is ${this.age}"
}
```
`Custom Getter`는 값 검증 같은 추가적인 작업에 활용할 수 있습니다.
``` kotlin
class Rectangle(val width: Int, val height: Int) {
    val isSquare: Boolean 
        get() {
            return this.width == this.height
        }
}

var rectangle = Rectangle(5, 10)
println(rectangle.isSquare)     // false

var square = Rectangle(10, 10) 
println(square.isSquare)        // true
```
`Custom Setter`의 실행 구문은 속성에 접근할 때 마다 매번 다시 계산됩니다.
``` kotlin
class Rectangle(val width: Int, val height: Int) {
    val isSquare: Boolean 
        get() {
            return this.width == this.height
        }
}

var rectangle = Rectangle(5, 10)
println(rectangle.isSquare)     // false

rectangle.width = 10
println(rectangle.isSquare)     // true
```
### Kotlin의 Custom Setter
`Custom Setter` 역시 값 검증 같은 추가적인 작업에 활용할 수 있습니다.
``` kotlin
class Person(var name: String) {
    
    var height: Double = 0.0
        set(value) {
            if (value < 0) {
                throw Exception("Wrong height range.")
            } 
            field = value
        }

    var person = Person("Monica")
    person.height = -1.1
}
```