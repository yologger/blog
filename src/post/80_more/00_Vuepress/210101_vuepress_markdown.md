---
title: "Vuepress 마크다운 문법 정리"
showOnSidebar: true
sidebarDepth: 2
---

# Table of Contents
[[toc]]

# Vuepress 마크다운 문법 정리
Vuepress에서 마크다운 문법을 사용하는 방법에 대해 정리합니다.

## 코드 블록
### Java 코드
````
``` java
class App {
    // ...
}
```
````

```java
class App {
    // ...
}
```
### 터미널
````
``` shellsession
$ cd ~/app
$ ls
README.md         deploy.sh         node_modules      
package-lock.json package.json      src

$ echo "Hello World"
$ su -
# ps
```
````
``` shellsession
$ cd ~/app
$ ls
README.md         deploy.sh         node_modules      
package-lock.json package.json      src

$ echo "Hello World"
$ su -
# ps
```

### 쉘 스크립트
````
``` sh
cd ~/app
ls
README.md         deploy.sh         node_modules      
package-lock.json package.json      src

echo "Hello World"
su -
ps
```
````
``` sh
cd ~/app
ls
README.md         deploy.sh         node_modules      
package-lock.json package.json      src

echo "Hello World"
su -
ps
```

## 컨테이너 
### tip
````
::: tip
This is a tip
:::
````

::: tip
This is a tip
:::

```
::: tip Information
Information
:::
```

::: tip Information
Information
:::

### warning
```
::: warning
This is a warning
:::
```
::: warning
This is a warning
:::

### danger
```
::: danger
This is a dangerous warning
:::
```

::: danger
This is a dangerous warning
:::

### detail

```
::: details
This is a details block, which does not work in IE / Edge
:::
```

::: details
This is a details block, which does not work in IE / Edge
:::

````
::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::
````

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::


## Header Anchor Depth
```
---
title: "Vuepress 마크다운 문법 정리"
showOnSidebar: true
sidebarDepth: 0     // disable header links
sidebarDepth: 1     // extracts the h2 headers (default)
sidebarDepth: 2     // extracts both h2 and h3 headers
---
```