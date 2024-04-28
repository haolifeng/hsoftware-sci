# 数据类型
Solidity is a statically typed language, which means that the type of each variable (state and local) needs to be specified. soldity providers several elementary types which can be combined to form complex types.

the concept of "undefined" or null vales does not exist in solidity, but newly decleared variables always have a default value dependent on its types. to handle any unexpected values ,you should use the rever function to revert the whole transaction, or return a tuple which a second bool value denotine success.
## 值类型
+ 布尔类型  
bool: the possible values are constants true and false.
操作：！&& || == !=
+ 整数   
 int/uint: signed and unsigned integers of various sizes. keywords uint8 to uint256 in steps of 8 (unsigned of 8 up to 256 bits) and int8 to int256. uint and int are aliases for uint256 and int256, respectively.
+ Fixed Point Numbers, 
+ Address  
 the address type commes in two flavours, which are largely identical
+ Contract Types
+ Fixed-size byte arrays   
the value types bytes1, bytes2, bytes3,..., bytes32 hold a sequence of bytes from one to up to 32.  
+ Dynamically-sized byte array  
**bytes**: Dynamically-sized byte array, see Arrays,不是一个值类型
**string**: Dynamically-size UTF8-encoded string, see Arrays, 不是一个值类型
+ Address Literals地址字面值
+ Rational and Integer Literals 有理数和整数字面值
+ String Literals and Types 字符串字面值和类型
+ Hexadecimal Literals 16进制字面值
+ Enums 枚举类型
+ Function 函数类型
## 引用类型
1. Data location  
Every reference type has an additional annotation, the "data location", about where it is stored, there are three data locations: memory, storage, and calldata. Calldata是不能修改，不能持久化区域，这里函数参数被纯粹，表现更像memory。 它要求external函数的参数但也可以用于其他类型。 --- 参数存储

