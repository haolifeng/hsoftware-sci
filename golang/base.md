# golang基本语法
开始还是要写一下基本语法  
## 标记
Go程序有关键字， 标识符，常量，字符串，符号等组成。
## 行分割符
在Go程序中，一行代表一个语句结束，不需要以分号结尾。Go编译器会在编译时自己添加。如果打算在一行写多个语句，在需要添加分号。

## 注释
Go的注释与C/Java一样，分为单行注释(//)和多行注释(/**/)。

## 标识符
标识符用来命名变量， 类型等程序实体。一个标识符实际上就是一个或多个字母，数字，下划线组成的序列。第一个字母不能为数字，必须为字母或下划线。这个规则同C++/java一致。

## 关键字
### 25个关键字

 |1|2|3|4|5|
 |----|----|----|----|----|
 |break|default|func|interface|select|
 |case|defer|go|map|struct|
 |chan|else|goto|package|switch|
 |const|fallthrough| if| range| type|
 |const| for| import | return | var| 

36个预定义标识符
 |1|2|3|4|5|6|7|8|9|
 |----|----|----|----|----|----|----|----|----|
|append | bool | byte | cap | close | complex | complex64 | complex128 | uint16 |
|copy |false | float32 | float64 | imag | int | int8 | int16 | uint32 |
|int32 | int64 | iota | len | make | new | nil | panic | uint64 |
| print | pintln | real | recover | string | true | uint | uint8 | uintptr |

程序一般由关键字、常量、变量、运算符、类型和函数组成。
程序中可能会使用到的分隔符：(), [], {}。  
可能使用的标点符号：
```
. , ; : ...

```



