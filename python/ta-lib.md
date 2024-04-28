# ta-lib教程
# 参考资料
+ https://www.ta-lib.org/
+ https://pypi.org/project/TA-Lib/
+ https://github.com/ta-lib/ta-lib-python
# 安装
## linux

### 下载ta-lib

http://prdownloads.sourceforge.net/ta-lib/ta-lib-0.4.0-src.tar.gz

解压后
```
./configure
make 
sudo make install
```
安装在/usr/local/lib下
### python3-dev
```
sudo apt install python3-dev
```
### 安装python的ta-lib库
```
pip install ta-lib
```

## windows`
直接下载python库的包，直接安装
https://www.lfd.uci.edu/~gohlke/pythonlibs/#ta-lib
下载
使用
```
pip install TA_Lib-0.4.24-cp310-win_amd64.whl
```
或者  

<https://sourceforge.net/projects/ta-lib/files/ta-lib/0.4.0/ta-lib-0.4.0-msvc.zip/download?use_mirror=nav>
下载ta-lib-0.4.0-msvc.zip    
This is a 32-bit binary release. If you want to use 64-bit Python, you will need to build a 64-bit version of the library.   
Some unofficial (and unsupported) instructions for building on 64-bit Windows 10, here for reference:

1. Download and Unzip **ta-lib-0.4.0-msvc.zip**  
2. Move the Unzipped Folder **ta-lib** to C:\. (说明, 一定要在c的根目录)  
3. Download and Install Visual Studio Community (2015 or later)
  + Remember to Select **[Visual C++]** Feature  
4. Build TA-Lib Library  
+ From Windows Start Menu, Start **[VS2015 x64 Native Tools Command Prompt]**  
+ Move to **C:\ta-lib\c\make\cdr\win32\msvc**  
+ Build the Library **nmake**  
## macos
首先安装brew，可以参考网上资料。
```
brew intall ta-lib 
```
安装ta-lib库,再安装
```
pip install ta-lib
```


# API
Each fuction returns an output array and have default values for their parameters, unless specified as keyword arguments. Typically, these functions will have an initial "lookback" perioud(a required number of observations before an output is generated) set to NaN.

for convenience, the Function API supports both numpy.ndarray and pandas.Series and polars.Series inputs.

All of the following examples use the Function API:
```
import numpy as np
import talib
colose = np.random.random(100)

```
Calculate a simple moving average of the close prices:

```
output = talib.SMA(close)
```
Calculating bollinger bands, with triple exponential moving average:
```
from talib import MA_Type
upper, middle, lower = talib.BBANDS(close, matype=MA_Type.T3)
```
Calculating momentum of the close prices, with a time period of 5:
```
output = talib.MOM(close, timeperiod=5)
```

## NaN's
the underlying TA-Lib C library handles NaN's in a sometimes surprising manner by typically propagating NaN's to the end of the output, for exmaple:
```
>>> c = np.array([1.0, 2.0, 3.0, np.nan, 4.0, 5.0, 6.0])

>>> talib.SMA(c, 3)
array([nan, nan,  2., nan, nan, nan, nan])

```

you can compare that to a Pandas rolling mean, where their approach is to output NaN until enough "lookback" values are observed to generate new outputs:
```
>>> c = pandas.Series([1.0, 2.0, 3.0, np.nan, 4.0, 5.0, 6.0])

>>> c.rolling(3).mean()
0    NaN
1    NaN
2    2.0
3    NaN
4    NaN
5    NaN
6    5.0
dtype: float64
```
# AbstractAPI
if you're already familiar with using the function API, you should feel right at home using the Abstract API.


Every function takes a collection of named input, either a dict of numpy.ndarray or pandas.Series or polars.Series, or a pandas.DataFrame or polars.DataFrame. if a pandas.DataFrame or polars.DataFram is provided, the output is returned as the same type with named output columns.

For exmaple, inputs could be provided for the typical "OHLCV" data:
```
import numpy as np

# note that all ndarrays must be the same length!
inputs = {
    'open': np.random.random(100),
    'high': np.random.random(100),
    'low': np.random.random(100),
    'close': np.random.random(100),
    'volume': np.random.random(100)
}
```

Functions can either be imported directly or instantiated by name:
```
from talib import abstract

# directly
SMA = abstract.SMA

# or by name
SMA = abstract.Function('sma')
```

From there, calling functions is basically the same as the function API:
```
from talib.abstract import *

# uses close prices (default)
output = SMA(inputs, timeperiod=25)

# uses open prices
output = SMA(inputs, timeperiod=25, price='open')

# uses close prices (default)
upper, middle, lower = BBANDS(inputs, 20, 2, 2)

# uses high, low, close (default)
slowk, slowd = STOCH(inputs, 5, 3, 0, 3, 0) # uses high, low, close by default

# uses high, low, open instead
slowk, slowd = STOCH(inputs, 5, 3, 0, 3, 0, prices=['high', 'low', 'open'])
```
# Streaming API
An experimental Streaming API was added the allows users to compute the latest value of an indicator. this can be faster then using the Function API，for example in an applicatioin that receives streaming data, and wants to known just the most recent updated indicator value.

```
import talib
from talib import stream

close = np.random.random(100)

# the Function API
output = talib.SMA(close)

# the Streaming API
latest = stream.SMA(close)

# the latest value is the same as the last output value
assert (output[-1] - latest) < 0.00001
```
# Supported Indicators and Functions
We can show all the TA functions supported by TA-Lib, either as a list or as a dict sorted by group (e.g. "Overlap Studies", Momentum Indicators", etc):

```
import talib

# list of functions
print talib.get_functions()

# dict of functions by group
print talib.get_function_groups()
```
