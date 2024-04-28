# 大数计算
Go的大数计算包是math/big
```
import "math/big"
```
## big.Int
### 普通用法
```
var a big.Int
	n := 12
	a.SetInt64(int64(n))
	fmt.Println("a :", a.Int64())

	b := big.NewInt(3)
	fmt.Println("b :", b.Int64())

	var cal *big.Int = new(big.Int)
	var c *big.Int
	c = cal.Add(&a, b)
	fmt.Println("c :", c.Int64())

	c = cal.Sub(&a,b)
	fmt.Println("c :", c.Int64())


```

连续操作

```
// ((a  + b ) * c)* d

 a:=big.NewInt(11)
	b:=big.NewInt(3)
	c:=big.NewInt(4)
	d:=big.NewInt(2)

	f := d.Mul(c.Mul(b.Add(a, b), c),d)
	fmt.Println("f: ", f)



```