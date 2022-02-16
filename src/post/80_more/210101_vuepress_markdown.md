---
title: "Vuepress 마크다운 문법 정리"
showOnSidebar: true
---

# Vuepress 마크다운 문법 정리
Vuepress에서 마크다운 문법을 사용하는 방법에 대해 정리합니다.

## 코드 블록

```java
class App {
    // ...
}
```
``` shellsession
$ cd ~/app
$ ls
README.md         deploy.sh         node_modules      
package-lock.json package.json      src

$ echo "Hello World"
$ su -
# ps
```
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
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

::: danger STOP
Danger zone, do not proceed
:::

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