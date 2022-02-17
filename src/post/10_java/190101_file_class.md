---
title: "File 클래스"
lang: ko
showOnSidebar: true
---

# Table of Contents
[[toc]]

# File 클래스
`File`클래스를 사용하면 파일이라 디렉토리를 쉽게 다룰 수 있다.

## 파일 다루기
``` java App.java
public class App {

    public static void main(String[] args) {

        String path = "/Users/yologger/Desktop/project" + File.separator + "source.txt";
        File file = new File(path);

        System.out.println(file.getName());
        // source.txt

        System.out.println(file.getAbsolutePath());
        // /Users/yologger/Desktop/project/source.txt

        System.out.println(file.getPath());
        // /Users/yologger/Desktop/project/source.txt

        System.out.println(file.exists());
        // true

        System.out.println(file.isFile());
        // true

        System.out.println(file.isDirectory());
        // false
    }
}
```

## 디렉토리 다루기
``` java App.java
public class App {

    public static void main(String[] args) {

        String path = "/Users/yologger/Desktop/project";
        File file = new File(path);

        System.out.println(file.getName());
        // project

        System.out.println(file.getAbsolutePath());
        // /Users/yologger/Desktop/project

        System.out.println(file.getPath());
        // /Users/yologger/Desktop/project

        System.out.println(file.exists());
        // true

        System.out.println(file.isFile());
        // false

        System.out.println(file.isDirectory());
        // true
    }
}
```