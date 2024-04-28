# 开发环境搭建
## 操作系统
一般使用ubuntu作为开发服务器。但ubuntu的各个版本携带的python3的版本不同，为了统一环境，都安装python3.10.11。使用tar包安装


## 安装过程
```
下载 python-3.10.10.tar.xz


sudo ./configure --enable-optimizations

sudo make altinstall
```
该操作在/usr/local/python3.10下。旧的/usr/bin/python3是/usr/bin/python3.<version>的软链接。
+ 该操作不会替换该链接。可以直接使用python3.10命令操作。命令是可以带小版本的。

+ python3.10本身就携带venv模块。不需要另行安装venv模块。低版本需要使用apt安装python3-venv。
+ python3.10本身也携带pip3模块。不需要另行安装。


## 创建虚拟环境
### 创建操作
```
python3.10 -m venv firstVenv
```

### 升级环境

```
# 安装wheel包
pip3 install wheel
# 升级pip版本
pip3 install --upgrade pip
# 升级setuptools
pip3 install --upgrade setuptools
```


## macos安装python3.10.10
下载python-3.10.11-macos11.pkg。双击安装即可。命令在/usr/local/bin/python3。在PATH路径中替换旧的python3(/usr/bin/python3)。使用绝对路径可以访问旧版的python3


# pypi.org

The Python Package Index (PyPI) is a repository of software for the Python programming language.