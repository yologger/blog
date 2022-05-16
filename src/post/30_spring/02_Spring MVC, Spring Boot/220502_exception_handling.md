---
title: "Exception Handling"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

# Spring Exception Handling
스프링 프레임워크는 예외 처리를 위한 다양한 방법을 제공한다. 예외를 처리할 때 지켜야할 중요한 원칙은 다음과 같다.

- 백엔드에서 예외 발생 시 출력되는 `trace`를 클라이언트에 노출하지 않는다.
- 예외 처리 로직을 비즈니스 로직에서 분리하여 가독성을 확보한다.
- 클라이언트에서 처리하기 쉽게 예외 응답을 표준화된 포맷으로 제공한다.

이제 스프링 프레임워크의 다양한 예외 처리 방법에 대해 정리해보자.

## Controller-level Exception Handling
`@Controller` 어노테이션이 붙은 컨트롤러에 Exception Handler를 정의할 수 있다. Exception Handler를 등록할 때는 `@ExceptionHandler` 어노테이션을 사용한다. 
``` java{16-19,21-24}
@RestController
@RequestMapping("/auth")
public class AuthController {
    
    @PostMapping
    @RequestMapping(value = "/join", consumes = "application/json", produces = "application/json")
    public ResponseEntity<JoinResponseDto> join(@Valid @RequestBody JoinRequestDto request) throws MemberAlreadyExistException {
        // ...
    }

    @PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<LoginResponseDto> login(@Valid @RequestBody LoginRequestDto request) throws MemberNotExistException, InvalidPasswordException {
        // ...
    }
    
    @ExceptionHandler({ MemberAlreadyExistException.class })
    public void handleJoinException() {
        // ... 
    }   
    
    @ExceptionHandler({ MemberNotExistException.class, InvalidPasswordException.class })
    public void handleLoginException() {
        // ...
    }         
```
이렇게 정의한 Exception Handler는 해당 컨트롤러에서만 유효하다.

## Global Exception Handling
`@ControllerAdvice` 또는 `@RestControllerAdvice`를 사용하면 애플리케이션 전역에서 유효한 Exception Handler를 정의할 수 있다.
``` java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = ExceptionOne.class)
    public ResponseEntity<ErrorResponseDto> handleExceptionOne(ExceptionOne e) {
        // ...
    }

    @ExceptionHandler({ExceptionTwo.class, ExceptionThree.class})
    public ResponseEntity<ErrorResponseDto> handleExceptionTwoAndExceptionThree(Exception e) {
        // ...
    }
}
```
`basePackageClasses` 속성을 통해 특정 컴포넌트에서 발생한 예외만 캐치하도록 제한할 수 있다.
``` java
@RestControllerAdvice(basePackageClasses = AuthController.class)
public class AuthExceptionHandler {
    // ...
}
```
