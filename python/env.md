# 环境

## 相关资料
+ <https://pypi.org/>

## python3安装
```
下载 python-3.10.10.tar.xz


sudo ./configure --enable-optimizations

sudo make altinstall
```

## ubuntu升级python

1. 升级环境
```
sudo apt update               
sudo apt install software-properties-common
```
2. 配置ppa
```

sudo add-apt-repository ppa:deadsnakes/ppa
```

deadsnakes提供某个ubuntu版本提供的python版本，在不能安装自己需要的版本是，需要代码安装。

3. 升级python3
```
sudo apt update
sudo apt install python3.9
```
4. 替换默认的python版本
```
sudo update-alternatives --config python3
```
或者手动的将/usr/bin/python3链接到/usr/bin/python3.9。 

```
sudo rm -rf /usr/bin/python3
sudo ln -s /usr/bin/python3.9 /usr/bin/python3
```
## 依赖库安装位置

ubuntu中python库在/usr/lib/python3/dist-packages

## 安装开发虚拟环境venv
### 安装python3-venv
python3.10之下的版本需要如此安装。python3.10本身就携带venv模块。不需要另行安装。
```
sudo apt install python3-venv
```

### 创建一个新的虚拟环境
```
python3 -m venv testVenv
```
在testVenv虚拟环境中python和python3都是真实环境的中python和python3的软链接。其他如pip和pip3都是自己的执行文件。

+ testVenv/bin/activate是系统环境文件。
+ 在testVenv/share/python-wheels/目录下是分享的各种whl文件。
+ 安装的库都在testVenv/lib/python3.8/site-packages/下。

## WHL文件
WHL文件是以Wheel格式保存的Python安装包，Wheel是Python发行版的标准内置包格式。在本质上是一个压缩包，WHL文件中包含了Python安装的py文件和元数据，以及经过编译的pyd文件，安装适合自己python版本的库文件。

如果要查看WHL文件的内容，可以把.whl后缀名改成.zip，使用解压软件（如WinRAR、WinZIP）解压打开即可查看。
### 用途
在python的使用过程中，我们免不了要经常通过pip来安装自己所需要的包，大部分的包基本都能正常安装，但是总会遇到有那么一些包因为各种各样的问题导致安装不了的。这时我们就可以通过尝试去Python安装包大全中（whl包下载<https://www.lfd.uci.edu/~gohlke/pythonlibs/>）下载whl包来安装解决问题。

下载需要的安装包，使用
```
pip install <packageName>
```