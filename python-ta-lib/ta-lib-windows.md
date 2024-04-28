# windows下安装ta-lib
## 安装vs_community.exe
安装vs，添加c++编译器。主要使用使用c++的编译器。
## 安装python3.10
下载一个python3.10的windows版本，安装即可。将执行文件python.exe添加到path。如果安装是自动设置就无需手动添加。
安装后自带pip。


## ta-lib c库
### 下载ta-lib-0.4.0.msvc.zip
https://sourceforge.net/projects/ta-lib/files/ta-lib/

目前下载0.4.0, ta-lib-0.4.0.msvc.zip. 将下载包下载到c盘根目录，并解压。**不要放到其他目录**。
解压后是c:/ta-lib.
### 编译
```
cd  C:\ta-lib\c\make\cdr\win32\msvc
nmake
```
完成c库安装

## ta-lib  python库

### 下载TA_Lib

https://www.lfd.uci.edu/~gohlke/pythonlibs/#ta-lib 上下载  

TA_Lib-0.4.24-cp310-win_amd64.whl

cp310表示是cpython3.10的版本， win_amd64表示是windows， amd64的版本。该网站上的库是字符串排序，可以根据字符拖动滚动条查询。


### 安装
```
pip install TA_Lib-0.4.24-cp310-win_amd64.whl

```






