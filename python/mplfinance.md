# mplfinance

## install

```
pip install --upgrade mplfinance
```
## 相关资料
+ <https://github.com/matplotlib/mplfinance>

## install depend 

```
sudo apt install python3-tk
```
##  修改代码

site-packages/mplfinance/plotting.py

```
import matplotlib
matplotlib.use('TkAgg')
import matplotlib.pyplot as plt
```