---
title: "조건문"
lang: ko
showOnSidebar: true
---

## if else
`if else`구문은 다음과 같이 사용할 수 있다.
``` java
bool isMarried = true;

if (isMarried) {
    System.out.println("He is married.");
} else {
    System.out.println("He is not married.");
}
```

## switch
`switch`구문은 `열거형(enum)`과 함께 유용하게 사용할 수 있다.
``` java
enum Direction {
    EAST, WEST, SOUTH, NORTH
}
``` 
``` java
Direction direction = Direction.EAST;

switch (direction) {
    case EAST: {
        System.out.println("Go to east.");
        break;
    }
    case WEST: {
        System.out.println("Go to west.");
        break;
    }
    case NORTH: {
        System.out.println("Go to north.");
        break;
    }
    case SOUTH: {
        System.out.println("Go to south.");
        break;
    }
}
```