# pandas
## 相关资料

https://github.com/pandas-dev/pandas.git

https://pandas.pydata.org/
https://www.pypandas.cn/docs/
# 安装
```
pip install pandas
```

## 数据结构
### Series 
Series类似表格中的一个列(column), 类似于一维数组，可以保存任何数据类型。
Series由索引(index)和列组成，函数如下：
```
pandas.Series(data, index, dtype, name, copy)
```

参数说明：
+ data: 一组数据(ndarray类型)。
+ index: 数据索引标签， 如果不指定，默认从0 开始
+ dtype: 数据类型，默认会自己判断。
+ name: 设置名称
+ copy: 拷贝数据，默认为False.

### DataFrame
DataFrame是一个表格型的数据结构，它包含一组有序的列，每列可以是不同的值类型（数组、字符串、布尔型值）。DataFrame既有行索引也有列索引，它可以被看做由Series组成的字典（共同用一个索引）。

```
pandas.DataFrame(data, index, columns, dtype, copy)
```
参数说明：  
+ data: 一组数据（ndarray, series, map, lists, dict等类型）
+ index: 索引值，或者可以成为行标签
+ columns: 列标签，默认为RangeIndex(0,1,2,..,n);
+ dtype: 数据类型。
+ copy: 拷贝数据，默认为False

## csv文件

## json

## 数据清洗

## 常用函数
### 读取数据
|function | 说明|
|---|---|
|pd.read_csv(filename) | 读取csv文件|
|pd.read_excel(filename)| 读取Excel文件|
|pd.read_sql(query, connection_object)| 从SQL数据库读取数据 |
|pd.read_json(json_string)|从JSON字符串读取数据|
|pd.read_html(url)| 从HTML页面中读取数据|

### 查看数据
|function | 说明|
|---|---|
|df.head(n)| 显示前n行数据| 
|df.tail(n)|显示后n行数据|
|df.info(n) |显示数据的信息，包括列名、数据类型、缺失值等|
|df.describe()|显示数据的基本统计信息，包括均值，方差，最大值，最小值等；|
|df.shape|显示数据的行数和列数|


## 重点函数样例说明
### 1. set_index
```
# 1. 创建df
df = pd.DataFrame(docs, columns=["openTime", "openPrice", "closePrice"], dtype=float)
# 2. 设置索引
df.set_index("openTime", inplace=True)
```
1. 创建pd, 列为openTime, openPrice和closePrice。索引现在默认为[0, 1, 2,...]

```
         openTime  openPrice  closePrice
0    1.640966e+12     0.7238      0.7225
1    1.640966e+12     0.7236      0.7239
2    1.640967e+12     0.7224      0.7220
3    1.640967e+12     0.7210      0.7214
4    1.640967e+12     0.7215      0.7206
..            ...        ...         ...
716  1.641009e+12     0.7088      0.7089
717  1.641010e+12     0.7086      0.7091
718  1.641010e+12     0.7088      0.7086
719  1.641009e+12     0.7075      0.7078
720  1.641009e+12     0.7074      0.7075
```

2. set_index调用后，索引为[opentime0, opentime1, opentime2,...]

```
              openPrice  closePrice
openTime
1.640966e+12     0.7238      0.7225
1.640966e+12     0.7236      0.7239
1.640967e+12     0.7224      0.7220
1.640967e+12     0.7210      0.7214
1.640967e+12     0.7215      0.7206
...                 ...         ...
1.641009e+12     0.7088      0.7089
1.641010e+12     0.7086      0.7091
1.641010e+12     0.7088      0.7086
1.641009e+12     0.7075      0.7078
1.641009e+12     0.7074      0.7075

[721 rows x 2 columns]
```

### 2. plot
```
df.plot( y=['openPrice', 'closePrice'], kind='line')
plt.show()
```
dataFrame自带的plot()函数，其中y为显示的数据列。具体可以查看帮助文档

https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html

显示的时候使用plt.show(),该函数依赖matplotlib库

