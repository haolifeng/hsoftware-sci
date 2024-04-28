# ethers中的大数操作
## 类型
此库中的许多函数和方法都采用可以无歧义且安全地转换为BigNumber的值。这些值可以指定为：
+ string 16进制字符串或十进制字符串，两者都可以是负数。
+ BytesLike 类似Bytes对象，例如一个数组或一个uint8数组
+ BigNumber 一个本身就是BigNumber的实例
+ number 在javascript安全范围内的数字
+ BigInt Javascript的BigInt对象，nodejs自身携带的。

## 创建
```
ethers.BigNumber.from(aBigNumberish) => BigNumber
```

## 方法
|number | name | notice |
|----|---|--- |
|1|add | 加|
|2|sub|减|
|3|mul|乘|
|4|div|除|
|5|mod|模|
|6|pow|指数，乘方|
|7|abs|绝对数|
|8|mask|返回一个BigNumber，值为BigNumber，且位计数最低有效位以外的位设置为零。|

## 2的补
略
## 比较与等于
|order|name |notice|
|----|----|----|
|1|eq|如果相等返回true|
|2|lt|<|
|3|lte|<=|
|4|gt|>|
|5|gte|>=|
|6|isZero|如果值为0，则返回true|


## 转换
+ toBigInt() 转换为nodejs中的bigInt
+ toNumber() 转为number
+ toString() 转为10进制的string
+ toHexString 转为16进制的string

## 检查
isBigNumber(obj) 检查obj是否是一个bigNumber.