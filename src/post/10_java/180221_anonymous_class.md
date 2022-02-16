---
title: "익명 클래스(Anonymous Class)"
lang: ko
showOnSidebar: true
---

# 익명 클래스
다음과 같은 부모 클래스가 있다고 가정하자.
``` java
// 부모 클래스
abstract class Person {
    abstract void doSomething();
}
```
이를 상속한 자식 클래스를 한번만 사용하는 경우, 매번 자식 클래스를 정의하기에는 번거로운 경우가 있다.
``` java
// 자식 클래스를 정의
class Designer extends Person {

    @Override
    void doSomething() {
        System.out.println("Do something.");
    }
}

// 자식 클래스 사용
Person person = new Designer();
person.doSomething();
```

이러한 경우 익명 클래스를 유용하게 사용할 수 있다.
``` java
abstract class Person {
    abstract void doSomething();
}

// 익명 클래스 사용
Person person = new Person() {
    @Override
    public void doSomething() {
        System.out.println("Do something.");
    }
};

person.doSomething();
```
익명 클래스는 안드로이드 어플리케이션 개발에서 이벤트를 처리할 때 많이 사용한다.
``` java
Button loginButton = findViewById(R.id.loginButton);


// 버튼을 눌렀을 때 실행할 코드를 익명 클래스로 등록
loginButton.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        // log in
    }
});
```