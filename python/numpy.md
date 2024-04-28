# numpy
本教程使用python3,pip3
<https://numpy.org/>
## 安装
```
pip3 install numpy
```
## Ndarray对象
NumPy最重要的一个特点是其N维数组对象ndarray，它是一系列同类型数据的集合，以0下标为开始进行集合中元素的索引.
ndarray对象是用于存放同类元素的多维数组。🇺每个元素在内存中都有相同存储大小的区域。

## NumPy数据类型
### 常用NumPy基本类型
|名称|描述|
|---|---|
|bool_|布尔型数据类型(True或者False)|
|int_|默认的整数裂隙（类似于C语言中的long, int32 或int64)|
|intc|与C的int类型一样，一般是int32或int64|
|intp|用于索引的整数类型(类似于C的ssize_t, 一般情况下仍然是int32或者int64)|
|int8|字节(-128 to 127)|
|int16|整数(-32768 to 32767)|
|int32|整数（-2147483648 to 2147483647）|
|int64|整数(-9223372036854775808 to 9223372036854775807)|
|uint8|无符号整数（0 同255）|
|uint16|无符号整数(0 to 65535)|
|uint32|无符号整数(0 to 4294967295)|
|uint64|无付号整数（0 to 18446744073709551615）|
|float_|float64类型的简写|
|float16|半精度浮点数，包括：1个符号位， 5个指数位，10个尾数位|
|float64|双精度浮点数，包括：1个符号位，8个指数位，23个尾数位|
|complex_|complex128类型的简写，即128位复数|
|complex64|复数，表示双32位浮点数（实数部分和虚数部分）|
|complex128|复数，表示双64位浮点数（实数部分和虚数部分）|

### 数据类型对象（dtype)
数据类型对象（numpy.dtype类的实例)用来描述于数组对应的内存区域是如何使用，它描述了数据的以下几个方面：
+ 数据的类型（整数，浮点数或者python对象）
+ 数据的大小(例如，整数使用多少个字节存储)
+ 数据的字节顺序(小端或大端)
+ 在结果化类型的情况下，字段的名称，美国字段的数据类型和每个字段所取的内存块的部分。
+ 如果数据类型是子数组，那么它的形状和数据类型是什么？

字节顺序是通过对数据类型预先设定 < 或 > 来决定的。 < 意味着小端法(最小值存储在最小的地址，即低位组放在最前面)。> 意味着大端法(最重要的字节存储在最小的地址，即高位组放在最前面)。

dtype对象是使用以下语法构造的：
```
numpy.dtype(object, align, copy)
```
+ object - 要转换的数据类型对象。
+ align - 如果位true, 填充字段使用类型C的结构体。
+ copy - 复制dtype对象，如果为false, 则是兑内置数据类型对象的引用

每个内建类型都有一个唯一定义它的字符代码，如下：
|z字符|对应类型|
|---|---|
|b|布尔型|
|i|(有符号)整型|
|u|无符号整型integer|
|f|浮点型|
|c|复数浮点型|
|m|timedelta(时间间隔)|
|M|dateTime(日期时间)|
|O|(Python)对象|
|S，a| (byte-)字符|
|U|Unicode|
|V|原始数据(void)|
## 数组属性
ndarray对象属性有：
|属性|说明|
|---|---|
|ndrray.ndim|秩, 即轴的数量或维度的数量|
|ndrray.shap|数组的维度，对于矩阵，n行m列|
|ndrray.size|数组元素的总个数，相当于shape中的n*m的值|
|ndarray.dtype|ndarray对象的元素类型|
|ndarray.itemsize| ndrray对象中每个元素的大小，以字节为单位|
|ndrray.flags|ndrray对象的内存信息|
|ndrray.real|ndarray元素的实体|
|ndrray.imag|ndarray元素的虚部|
|ndarray.data|包含实际数组元素的缓冲区，由于一般通过数组的索引获取元素，所以通常不需要使用这个属性|

## NumPy创建数组
ndrray数组除了可以使用底层ndarray构造器来创建外，也可以通过以下几种方式来创建。
### empty
```
numpy.empty(shape, dtype = float, order="C)
```
+ shape 数组形状
+ dtype  数据类型，可选
+ order 有C和F两种选项，分别代表，行优先和列优先，在计算机内存中的存储元素的顺序。

### zeros

```
numpy.zeros(shap, dtype = float, order = 'C')
```
### ones
```
numpy.ones(shape, dtype = None, order = 'C')

```
### arrange
```
numpy.arange(start, stop, step, dtype)
np.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None)
np.logspace(start, stop, num=50, endpoint=True, base=10.0, dtype=None)
```

## 从已有的数组创建数组
```
numpy.asarray(a, dtype=None, order = None)
numpy.frombuffer(buffer, dtype=float, count = -1, offset = 0)
numpy.fromiter(iterable, dtype, count=-1)
```
## NumPy高级索引
