# 数据类型
Golang的基础数据类型只有3类：数字，布尔和字符串。没有字符类型。

## 数字类型
### 整数
### 浮点数

## 布尔型

## 字符串

## 常量
常量表达式的值在编译期计算，而不是在运行期。每种常量的潜在类型都是基础类型：boolean, string或数字。

## 数组
数组是具有唯一类型的一组已编号且长度固定的数据项序列，这种类型可以是任意的原始类型或者自定义类型。
### 声明数组

```
var variable_name  [size]variable_type
```
### 初始化
```
var balance = []float32{1,2,3,4,5}
```

## Map

## 切片
切片也可以成为动态数组。
### 定义
```
var identifier []type
var slice1 []type = make([]type, len)

slice2 := make([]type, len)

s:= [] int {1,2,3}
```

### len和cap
切片是可索引的，并且可以由len()方法获取长度。cap()可以测量切片最长可以到达多少。

### 空(nil)
一个切片在未初始化之前默认为nil,长度为0
### 切片截取
可以通过设置下限及上限设置截取切片[lower-bound:upper-bound]

### append()和copy()
向切片追加新元素append. 拷贝切片copy

```
package main

import "fmt"

func main(){
	var p []int

	p =append(p,1)
	p =append(p,2)
	fmt.Println(len(p))
}
```

## 结构

