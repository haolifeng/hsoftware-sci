# 命令行参数
argparse模块是Python内置的一个用于命令选项与参数解析的模块，通过在程序中定义好我们需要的的参数，argparse将会从sys.argv中解析出这些参数，并自动生成帮助和使用信息。

使用argparse模块解析命令行参数， 主要分三个步骤：创建解析器、添加参数、解析参数。  
+ 创建ArgumentParser()对象
+ 调用add_argument() 方法添加参数： 定位参数、可选参数和混合使用参数
+ 使用parse_args()解析添加参数

add_argument()方法定义了如何解析命令行参数：
```
ArgumentParser.add_argumen(name or flags ...[, action][, nargs][, const][,default][,type][,choices][,required][,help][,metavar][,dest])
```
+ name or flags -- 选项字符串的名字或者列表， 例如foo或者-f, --foo。
+ action -- 命令行遇到参数时的动作，默认值时store。
    - store_const，表示赋值为 const 的相反值，比如 store_true，代表参数赋值为 false；
    - append，将遇到的值存储成列表，也就是如果参数重复则会保存多个值;
    - append_const，将参数规范中定义的一个值保存到一个列表；
    - count，存储遇到的次数；此外，也可以继承 argparse.Action 自定义参数解析；
+ nargs – 应该读取的命令行参数个数，可以是具体的数字，或者是 ? 号，当不指定值时对于 Positional argument 使用 default，对于 Optional argument 使用 + + const；或者是 * 号，表示 0 或多个参数；或者是 + 号表示 1 或多个参数。
+ const – action 和 nargs 所需要的常量值。
+ default – 不指定参数时的默认值。
+ type – 命令行参数应该被转换成的类型。
+ choices – 参数可允许的值的一个容器。
+ required – 可选参数是否可以省略 (仅针对可选参数)。
+ help – 参数的帮助信息，当指定为 argparse.SUPPRESS 时表示不显示该参数的帮助信息.
+ metavar – 在 usage 说明中的参数名称，对于必选参数默认就是参数名称，对于可选参数默认是全大写的参数名称.
+ dest – 解析后的参数名称，默认情况下，对于可选参数选取最长的名称，中划线转换为下划线.

## sample
```
import argparse
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="annotated data set for aligned")
    parser.add_argument('-r1', '--src-data-root', dest='data_root1', default='/mnt/dms_data/Data_All/custom_alarm_smokeall_20190505/json/v20190610', type=str, metavar='STRING', help='src data path')
    parser.add_argument('-r2', '--dst-data-root', dest='data_root2', default='/mnt/dms_data/Data_All/custom_alarm_smokeall_20190505/json/v20190505', type=str, metavar='STRING', help='tag data path')
    args = parser.parse_args()
    data_root1 = args.data_root1
    data_root2 = args.data_root2
    print('data_root1 path is %s' % data_root1)  # data_root1 path is /mnt/dms_data/Data_All/custom_alarm_smokeall_20190505/json/v20190610
```