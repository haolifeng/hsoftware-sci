# 环境错误修改记录
## 1 Failed building wheel for X when using pip install 
造成这种局面的原因可能有多种  
+ Not having the wheel package installed in the environment.在环境中没有wheel包
+ Having installed packages that clash with the package we are trying to install.  安装了一个崩溃的包
+ Having a Python version that isn't supported by the package we're trying to install.  安装的python版本不支持我们要安装的包

解决方案

```
# 安装wheel包
pip3 install wheel
# 升级pip版本
pip3 install --upgrade pip
# 升级setuptools
pip3 install --upgrade setuptools

# 再次安装需要安装的的包
```