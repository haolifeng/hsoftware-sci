# 反射

Go提供了一种机制在运行时更新变量和检查它们的值，调用它们的方法，和它们支持的内在操作，但在编译时病不知道这些变量的类型。这种机制被称为反射。反射也可以让我们将类型本身作为第一类的值类型处理。  
## reflect.Type和reflect.Value
反射是由reflect包提供支持。它定义了两个重要的类型，Type和Value。

函数reflect.TypeOf接受任意的interface{}类型，并返回对应动态类型的reflect.Type.  
