# 结构体
## 定义
结构体时一种聚合的数据类型，是由零个或多个任意类型的聚合成的实体。每个值称为结构体的成员。
## 结构体面值
+ 要求以结构体成员定义的顺序为每个结构体成员指定一个面值
```
type Point struct { X, Y int}

p := Point{1,3}
```

+ 以成员名字和相应的值来初始化，可以包含部分或全部的成员

```
type Point struct { X, Y int}

p := Point{X:1, Y:3}
```

## 在函数中使用
+ 结构体可以作为函数的参数和返回值。如果考虑效率的话，较大的结构体通常会用指针的方式传入和返回

+ 如果要在函数内部修改结构体成员，用指针传入时必须的


## 结构体比较
如果结构体的全部成员都可以比较，那么结构体也是可以比较的。两个结构体使用==或!=运算符进行比较。
```
type Point struct { X, Y int}

p := Point{X:1, Y:3}
q := Point{2,1}

fmt.Println(p.X == q.X && p.Y == q.Y) 

fmt.Println(p == q)  

```

可比较的结构体类型和其他可以比较的类型一样，可以用于map的key类型

## 结构体嵌入和匿名成员
### 结构体嵌入

### 匿名嵌入
匿名成员的数据类型必须是命名的类型或指向一个命名的的类型指针

```
type Point struct { X, Y int}

type Circle struct {
    Point 
    Radius int
}

type Wheel struct {
    Circle 
    Spkes int
}


```
使用方法
```
var w Wheel
w.X = 8  // w.Circle.Point.X = 8
w.Y = 8 // 2.Cirlce.Point.Y = 8
w.Radius = 5
w.Spokes = 20

w = Wheel { Circle{Point{8,8}, 5}, 20}

2 = Wheel {
    Circle: Circle {
        Point : Point { X: 8, Y: 8 },
        Radius: 5
    }
}

```

因为匿名成员也有一个隐式的名字，因此不能同时包含两个类型相同的匿名成员，这会导致名字冲突。同时成员的名字是由其类型隐式地决定的，所有匿名成员也有可见性的规则约束


在包外部，如果circle和point没有导出不能访问它们的成员，因此简短的匿名成员访问语法也是禁止的。
## 内嵌字段的方法调用

```
package main
import "fmt"
type X struct {
    a int
}
type Y struct {
    X
    b int
}
type Z struct {
    Y 
    c int
}

func (x X) Print() {
    fmt.Printf("In X, a = %d\n", x.a)
}

func (x X)XPrint() {
    fmt.Printf("In X, a = %d\n", x.a)
}

func (y Y) Print() {
    fmt.Printf("In Y, b = %d\n", y.b)
}

func (z Z) Print() {
    fmt.Printf("In Z, z = %d\n", z.c)
    z.Y.Print()
    z.Y.X.Print()
}

func main(){
    x := X{a:1}
    y := Y {
        X: x,
        b: 2,
    }
    z := Z {
        Y: y,
        c: 3
    }

    z.Print()
    z.XPrint()
    z.Y.XPrint()
}

```

## 方法集
组合结构的方法集有如下规则：  
1. 若类型S包含匿名字段T，则S的方法集包含T的方法集。
2. 若类型S包含匿名字段*T，则S的方法集包含T和*T方法集。
3. 不管类型S中嵌入的匿名字段是T还是*T， *S方法集总是包含T和*T方法集

```

package main
import ("fmt"
)

type X struct {
    a int
}

type Y struct {
    X
}
type Z struct {
    *X
}
func (x X)Get() int {
    return x.a
}

func (x *X)Set(i int) {
    x.a = i
}

func main(){
    x := X{a:1}
    y := Y{
        X:x,
    }
    println(y.Get())

    y.Set(2)
    println(y.Get())

    (*Y).Set(&y,3)

    fmt.Println(y.Get())

    z := Z{
        X: &x,
    }

    Z.Set(z,4)

    fmt.Println(z.Get())
    (*Z).Set(&z, 5)
    fmt.Println(z.Get())

}

```