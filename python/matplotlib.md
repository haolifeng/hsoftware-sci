# Matplotlib
## install
```
pip3 install matplotlib
```
## Pyplot
Pyplot是Matplotlib的子库，提供了和matlab类似的绘图api。Pyplot是常用的绘图模块，能很方便让用户绘制2D图表。  
Pyplot包含一系列绘图函数的相关函数，每个函数会对当前的图像进行一些修改，例如：给图像加入标记，生新的图像，在图像中产生新的绘图区域等。
使用的时候，我们可以使用import导入pyplot库，并设置一个别名plt:
```
import matplotlib.pyplot as plt
```
以下我们就可以使用plt来引用pyplot包的方法。
+ plot() :用于绘制线图和三点图。
+ scatter(): 用于绘制散点图。
+ bar(): 用于绘制垂直条形图和水平条形图。
+ hist(): 用于绘制直方图。
+ pie(): 用于绘制饼图。
+ imshow(): 用于绘制图像。
+ subplots(): 用于创建字图。 

还有其他函数，具体参考文档



## 参考资料
+ https://matplotlib.org/stable/tutorials/index

+ https://m.runoob.com/matplotlib/

# 重点函数
## plot
plot()函数是绘制二维图形的最基本函数。用于绘制点和线。
```
plot([x], y, [fmt], *, data=None, **Kwargs)
plot([x],y,[fmt], [x2], y2), [fmt2], ..., **kwargs)

```

+ x, y : 点或线的节点，x 为x轴数据，y为y轴的数据，数据可以列表或数组。
+ fmt: 可选，定义基本格式（如颜色、标记和线条样式）。
+ **kwargs: 可选，用在二维平面图上，设置指定属性，如标签，线的宽度等。
### fmt类型
**颜色字符** 'b': 蓝色， 'm', 'g', 'y', 'r', 'k', 'w', 'c', 
**线性参数** '-', '--', '-.', ':'
**标记字符** ‘.', ',', 'o', 'v', '^', '>', '<'