---
title: "외부 파일에서 설정값 읽어오기 - properties 파일"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## 외부 파일에서 설정값 읽어오기
`.properties` 파일을 사용하면 외부에서 설정값을 읽어올 수 있다.

### ConfigurableEnvironment, MutablePropertySources
`admin.properties`파일을 `src/main/resources` 경로에 생성한다.
``` 
// admin.properties

admin.id=paul
admin.password=1234
```
이제 다음과 같이 설정값을 읽어올 수 있다.
``` java App.java
public class App {

    public static void main(String[] args){

        ConfigurableApplicationContext ctx = new GenericXmlApplicationContext();

        // Environment 객체는 애플리케이션마다 1개씩 존재                
        ConfigurableEnvironment env = ctx.getEnvironment();

        // Environment 객체 내부의 모든 propertySources를 가져온다.
        MutablePropertySources propertySources = env.getPropertySources();

        try{
            // 새로운 propertySource를 추가한다.
            propertySources.addLast(new ResourcePropertySource("classpath:admin.properties"));

            // 속성값을 읽어온다.
            System.out.println(env.getProperty("admin.id"));    // paul
            System.out.println(env.getProperty("admin.pw"));    // 1234

        } catch (IOException e) {
            e.printStackTrace();
        }
        ctx.close();
    }
}
```
웹 애플리케이션에는 오직 하나의 `Environment` 객체만 존재한다. `Environment` 안에는 여러 `PropertySource`를 추가할 수 있다.

다음과 같이 여러 `.properites`파일을 읽어올 수도 있다.
``` 
// admin.properties

admin.id=paul
admin.password=1234
```
``` 
// user.properties

user.id=monica
user.password=5678
```
``` java App.java
public class App {

    public static void main(String[] args){

        ConfigurableApplicationContext ctx = new GenericXmlApplicationContext();          
        ConfigurableEnvironment env = ctx.getEnvironment();
        MutablePropertySources propertySources = env.getPropertySources();

        try{
            propertySources.addLast(new ResourcePropertySource("classpath:admin.properties"));
            propertySources.addLast(new ResourcePropertySource("classpath:user.properties"));

            System.out.println(env.getProperty("admin.id"));    // paul
            System.out.println(env.getProperty("admin.pw"));    // 1234
            System.out.println(env.getProperty("user.id"));     // monica
            System.out.println(env.getProperty("user.pw"));     // 5678

        } catch (IOException e) {
            e.printStackTrace();
        }
        ctx.close();
    }
}
```

### EnvironmentAware
다음과 같은 클래스가 있다.
``` java AdminConnection.java
public class AdminConnection {

    private String adminId;
    private String adminPw;

    public void setAdminId(String adminId){
        this.adminId = adminId;
    }

    public void setAdminPw(String adminPw){
        this.adminPw = adminPw;
    }
}
```
이제 `.properties`파일에서 읽어온 속성값으로 `AdminConnection` 클래스의 `adminId`, `adminPw`을 초기화하려고 한다. 
``` bash admin.properties
admin.id=paul
admin.password=1234
```
이때 `InitializingBean`을 구현하고 `afterPropertiesSet()`메소드를 구현한다. 이 메소드는 Bean이 생성될 때 호출된다.
``` java AdminConnection.java
public class AdminConnection implements InitializingBean {

    private String adminId;
    private String adminPw;

    public void setAdminId(String adminId){
        this.adminId = adminId;
    }

    public void setAdminPw(String adminPw){
        this.adminPw = adminPw;
    }

    @Override
    public void afterPropertiesSet() throw Exception {
        // Bean이 생성될 때 호출된다.
    }
}
```
그 다음 `DisposableBean`을 구현하고 `destory()`메소드를 구현하자. 이 메소드는 Bean이 소멸할 때 호출된다.
``` java AdminConnection.java
public class AdminConnection implements InitializingBean, DisposableBean {

    private String adminId;
    private String adminPw;

    public void setAdminId(String adminId){
        this.adminId = adminId;
    }

    public void setAdminPw(String adminPw){
        this.adminPw = adminPw;
    }

    @Override
    public void afterPropertiesSet() throw Exception {
    }

    @Override
    public void destory(){
        // Bean이 소멸할 때 호출된다.
    }
}
```
마지막으로 `EnvironmentAware`을 구현하고 `setEnvironment()`를 구현하자.
``` java AdminConnection.java
public class AdminConnection implements InitializingBean, DisposableBean, EnvironmentAware {

    private Environment env;
    private String adminId;
    private String adminPw;

    public void setAdminId(String adminId){
        this.adminId = adminId;
    }

    public void setAdminPw(String adminPw){
        this.adminPw = adminPw;
    }

    public void setEnv(Environment env) {
        this.env = env;
    }	

    @Override
    public void afterPropertiesSet() throw Exception {
        setAdminId(env.getProperty(“admin.id”));
        setAdminPw(env.getProperty(“admin.pw”));
    }

    @Override
    public void destory(){
    }

    @override	
    public void setEnvironment(Environment env){
        setEnv(env);
    }
}
```
`AdminConnection`을 IoC Container에 등록한다.
``` xml applicationCTX.xml
<beans>
    <bean id=“adminConnection” class=‘com.yologger.app.AdminConnection” />
</bean>
```
이제 `App.java`을 다음과 같이 구현하자.
```java App.java
public class App {

    public static void main(String[] args){

        ConfigurableApplicationContext ctx = new GenericXmlApplicationContext();

        // env가 EnvironmentAware를 구현한 클래스의 setEnvironment()의 파라미터로 전달된다.
        ConfigurableEnvironment env = ctx.getEnvironment();   
        
        MutablePropertySources propertySources = env.getPropertySources();

        try{
            // admin.properties 파일의 속성을 추가하자
            propertySource.addLast(new ResourcePropertySource("classpath:admin.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }

        GenericXmlApplicationContext gCtx = (GenericXmlApplicationContext)ctx;
        gCtx.load("applicationCTX");
        gCtx.refresh();

        AdminConnection adminConnection = gCtx.getBean("adminConnection", AdminConnection.class);

        System.out.println(adminConnection.getAdminId());   // paul
        System.out.println(adminConnection.getAdminPw());   // 1234

        gCtx.close();
        ctx.close();
    }
}
```
위 코드들은 다음과 같이 동작한다.
1. `gCtx.getBean("adminConnection", AdminConnection.class)`를 호출한다.
2. `AdminConnection`클래스의 인스턴스가 생성되면서 `setEnvironment(Environment env)`가 호출된다.
3. `AdminConnection`의 `afterPropertiesSet()`가 호출되며, 이 안에서 `adminId`와 `adminPw`을 초기화한다.

### 어노테이션 사용
`admin.properties`, `user.properties`파일을 `src/main/resources` 경로에 생성한다.
```
// admin.properties

admin.id=paul
admin.password=1234
```
``` 
// user.properties

user.id=monica
user.password=5678
```
다음과 같이 `ApplicationConfig.java` 파일을 생성하자.
``` java {10-18}
@Configuration
public class ApplicationConfig {

    @Value(“${admin.id}”)
    private String adminId;

    @Value(“${admin.pw}”)
    private String adminPw;

    @Bean
    public static PropertySourcesPlaceholderConfigurer Properties() {
        PropertySourcesPlaceholderConfigurer configurer = PropertySourcesPlaceholderConfigurer();
        Resource[] locations = new Resourse[2];
        locations[0] = new ClassPathResource("admin.properties");
        locations[1] = new ClassPathResource("user.properties");
        configurer.setLocations(locations);
        return configurer;
    }

    @Bean
    public AdminConnection adminConfig(){
        AdminConnection adminConnection = new AdminConnection();
        adminConnection.setAdminId(adminId);
        adminConnection.setAdminPw(adminPw);
        return adminConnection;
    }		
}
```
이제 코드에서 다음과 같이 사용할 수 있다.
``` java App.java
public class Main{
    public static void main(String[] args){
        AnnotationApplicationContext ctx = new AnnotationConfigApplicationContext("ApplicationConfig.class");

        AdminConnection connection = ctx.getBean("adminConfig", AdminConnection.class);
        System.out.println(connection.getAdminId());
    }	
}
```

### context:property-placeholder 태그 사용하기
XML 파일에서 `<context:property-placeholder>`태그를 사용하면 Environment 객체를 사용하지 않고도 속성값을 읽어올 수 있다.

다음과 같은 `.properties`파일이 있다고 하자.
``` 
// admin.properties

admin.id=paul
admin.password=1234
```
``` 
// user.properties

user.id=monica
user.password=5678
```
`ApplicationCTX.xml` 파일에 다음 내용을 추가한다.
- xmlns:context = "http://www.springframework.org/schema/context"
- xsi:schemaLocation = "http://www.springframework.org/schema/context"
- xsi:schemaLocation = "http://www.springframework.org/schema/spring-context-3.2.xsd"

이제 다음과 같이 `ApplicationCTX.xml`을 작성한다.
``` 
<beans
    xmlns:context = “http://www.springframework.org/schema/context”
    xsi:schemaLocation = “http://www.springframework.org/schema/beans 
    http://www.springframework.org/schema/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/spring-context-3.2.xsd”>
    
    <context:property-placeholder location=“classpath:admin.properties, classpath:sub_admin.properties” />

    <bean id=“adminConnection” class=“com.javalec.ex.AdminConnection”>
        <property>
            <value>${admin.id}</value>
        </property>
        <property>
            <value>${sub_admin.id}</value>
        </property>
    </bean>
</beans>	
```

## Profile
보통 애플리케이션을 개발할 때 개발 환경과 운영 환경을 분리한다. 이때 `Profile`을 사용하면 개발 환경의 설정 파일과 운영 환경의 설정 파일을 분리할 수 있다.

### XML 파일을 사용
`ServelConnection`은 개발 환경과 운영 환경에 따라 `ip`와 `port`가 다르도록 구성하려고 한다.
``` java ServelConnection.java
public class ServelConnection {

    private String ip;
    private String port;
    
    public String getIp(){
        return this.ip;
    }
    public String getPort(){
        return this.port;
    }
    public void setIpNum(String ip){
        this.ip = ip;
    }
    public void setPortNum(String port){
        this.port = port;
    }
}	
```
이를 위해 두 개의 `applicationCTX.xml` 파일을 생성한다. 이때 `<beans>`태그의 `profile`속성으로 개발 환경과 운영 환경을 분리한다.
``` xml applicationCTX_dev.xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans 
    http://www.springframework.org/schema/beans/spring-beans.xsd"
    profile="dev">

    <bean id="serverConnection" class="com.yologger.app.ServerConnection">
        <property name="ip" value="localhost"></property>
        <property name="port" value="8080"></property>
    </bean>
</beans>
```
``` xml applicationCTX_prod.xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans 
    http://www.springframework.org/schema/beans/spring-beans.xsd"
    profile="prod">

    <bean id="serverConnection" class="com.yologger.app.ServerConnection">
        <property name="ip" value="213.184.221.32"></property>
        <property name="port" value="80"></property>
    </bean>
</beans>
```
이제 다음과 같이 사용할 수 있다.
``` java App.java
public class App{

    public static void main(String[] args){

        String config = null;
        Scanner scanner = new Scanner(System.in);
        String str = scanner.next();

        if(str.equals("dev")){
            config = "dev";
        }else if(str.equals("prod")){
            config = "prod";
        }
        
        scanner.close();

        GenericXmlApplicationContext ctx = new GenericXmlApplicationContext();
        ctx.getEnvironment().setActiveProfiles(config);						
        ctx.load("applicationCTX_dev.xml", "applicationCTX_run.xml");

        // config=="dev"면 profile="dev"가 포함된 applicationCTX_dev.xml에서 Bean을 읽어옵니다.
        ServerConnectin connection = ctx.getBean("serverConnection", ServerConnection.class);

        System.out.println(connection.getIp());
        System.out.println(connection.getPort());

        ctx.close();

}	
```

### Java 파일과 어노테이션 사용
다음과 같이 두 Java 파일을 생성하자.
``` java ApplicationConfigDev.java
@Configuration
@Profile("dev")
public class ApplicationConfigDev {
    @Bean
    public ServerConnection serverConnection() {
        ServerConnection connection = new ServerConnection();
        connection.setIp("localhost");
        connection.setPort("8080");
        return connection;
    }
}
```
``` java ApplicationConfigProd.java
@Configuration
@Profile("prod")
public class ApplicationConfigProd {
    @Bean
    public ServerConnection serverConnection() {
        ServerConnection connection = new ServerConnection();
        connection.setIp("213.184.221.32");
        connection.setPort("80");
        return connection;
    }
}
```
이제 다음과 같이 사용할 수 있다.
``` java App.class
public class App {
    public static void main(String[] args){
        String config = null;
        Scanner scanner = new Scanner(System.in);
        String str = scanner.next();

        if(str.equals("dev")){
            config = "dev";
        }else if(str.equals("prod")){
            config = "prod";
        }
        
        scanner.close();

        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
        ctx.getEnvironment().setActiveProfiles(config);						
        ctx.register(ApplicationConfigDev.class, ApplicationConfigRun.class);
        ctx.refresh();

        ServerConnectin connection = ctx.getBean("serverConnection", ServerConnectin.class);
        System.out.println(connection.getIp());
        System.out.println(connection.getPort());

        ctx.close();
    }		
}
```