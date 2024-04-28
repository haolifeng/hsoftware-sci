# 接口
接口类型是对其它类型行为的抽象和概况；因为接口类型不会和特点的实现细节绑定在一起，通过这种抽象的方式我们可以让我们的函数更加灵活和更具有适应能力。

接口，把所有的具有共性的方法定义在一起。任何其他类型只要实现了这些方法就是实现了这个接口。  
```
type interface_name interface {
    method_name1 [return_type]
}
type struct_name struct {

}
func (struct_name_variable struct_name)method_name1()[return_type]{}

```

```
package main

import "fmt"

type Phone interface {
	call()
}
type NokiaPhone struct {

}
func (n *NokiaPhone) call(){
	fmt.Println("I am Nokia, I can call you!")
}

type IPhone struct {

}
func (i *IPhone)call(){
	fmt.Println("I am iPhone, I can call you!")
}

func main(){
	var phone Phone
	phone = new(NokiaPhone)
	phone.call()

	phone = new(IPhone)
	phone.call()
}

```