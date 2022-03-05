---
title: "Token 기반 인증 구현"
lang: ko
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

# Token 기반 인증 구현
`Spring Security`와 `jjwt`를 사용하여 Token 기반 인증을 구현해보자.

## 의존성 설정
`Spring Security`와 `jjwt` 의존성을 추가한다.
``` groovy
// build.gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-security:${spring_security_version}'
    implementation 'io.jsonwebtoken:jjwt:${jjwt_version}'
}
```

## UserDetailsService


## AuthenticationManager 
`AuthenticationManager`는 인증 작업을 수행하고 `Authentication`객체로 인증 결과를 반환한다. 구성 파일의 `configure(AuthenticationManagerBuilder auth)`를 직접 구현하여 인증 방법을 지정할 수 있다.
``` java
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    // UserDetailsService를 통해 인증
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // 인증 시 MemberDetailsService를 사용하도록 지정
        auth
                .userDetailsService(memberDetailsService)
                .passwordEncoder(passwordEncoder());
    }
```

## UserDetailsService
Database에서 User정보를 반환
``` java
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MemberEntity memberEntity = memberRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username Not Found."));

        return User.builder()
                .username(memberEntity.getEmail())
                .password(memberEntity.getPassword())
                .roles("USER")
                .build();
    }
}
```

# AuthenticationManager 빈으로 등록
``` java
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    // ...

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        // AuthenticationManager를 빈으로 등록
        return super.authenticationManagerBean();
    }
}
```

# AuthenticationManager로 인증
``` java
@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final MailUtil mailUtil;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    private final MemberRepository memberRepository;
    private final VerificationCodeRepository verificationCodeRepository;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<LoginResponseDto> login(LoginRequestDto request) throws MemberDoesNotExistException, InvalidPasswordException {

        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

    }
```
데이터베이스에서 읽어온 User 정보와 UsernamePasswordAuthenticationToken()으로 전달한 정보가 일치하는지 비교한다.

인증에 실패하면 세 가지 예외를 발생시킨다.
A DisabledException must be thrown if an account is disabled and the AuthenticationManager can test for this state.
A LockedException must be thrown if an account is locked and the AuthenticationManager can test for account locking.
A BadCredentialsException must be thrown if incorrect credentials are presented. Whilst the above exceptions are optional, an AuthenticationManager must always test credentials.

인증에 성공하면

# UserDetails

위처럼 설정이 끝나면
Authentication auth = authenticationManager.authenticate()

// 인증
auth.getPrincial()
인증 수행 

## JWT
``` groovy
// build.gradle
dependencies {
    implementation 'io.jsonwebtoken:jjwt:${jjwt_version}'
}
```