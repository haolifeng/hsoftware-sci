# pip
## pip 安装
### 检查是否安装
```
pip --version # python2.x 版本命令
pip3 --version # python3.x 版本命令
```

### 安装
```
sudo apt install python-pip
sudo apt install python3-pip
```
## 常用命令
### 显示所有已安装的包
```
pip list
```
### 安装依赖包
例如安装flask
```
pip install flask

pip install SomePackage  #最新
pip install SomePackage==1.0.4 #指定版本
pip install SomePackage>=1.0.4 #最小版本
```
### 升级包
升级指定的包，通过使用==, >=, <=, >, <来指定一个版本号
```
pip install --upgrade SomePackage
```
### 卸载包
```
pip uninstall SomePackage
```
### 搜索包
```
pip search SomePackage
```
pip已经没有search命令
```
模块包搜索：https://pypi.org/search
（2023.09月已不支持）pip search 关键字

说明：PyPI 已不支持命令搜索，请用浏览器访问https://pypi.org/search，进行搜索。

PyPI no longer supports 'pip search' (or XML-RPC search).
 Please use https://pypi.org/search (via a browser) instead
```


### 显示安装包信息
```
pip show
```

### 显示指定包的详细信息
```
pip show -f SomePackage
```
### 查看可升级的包
```
pip list -o
```

### 列出已安装的包
```
pip list
```

### 显示版本和路径
```
pip --version
```
### 获取帮助
```
pip --help
```
### 升级pip
linux和macos
```
pip install -U pip
pip install --upgrade pip

pip3 install --upgrade pip
```
或者
```
sudo easy_install --upgrade pip
```
windows平台升级
```
python -m pip install -U pip #python2.x
python -m pip3 install -U pip
```
## 国内开源软件镜像站

常用的国内镜像站  
清华大学：https://pypi.tuna.tsinghua.edu.cn/simple

华为云：https://repo.huaweicloud.com/repository/pypi/simple

阿里云：http://mirrors.aliyun.com/pypi/simple/

临时使用
<https://pypi.tuna.tsinghua.edu.cn/simple>

```
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

### linux 平台
1）创建pip.conf文件

　　 首先运行以下命令
```
cd ~/.pip
```
如果提示目录不存在，自行创建一个(如果目录存在，可跳过此步)，如下：
```
mkdir ~/.pip
cd ~/.pip
touch pip.conf

```
（2）编辑 pip.conf 文件

　　 首先打开文件，命令如下：
```
vim ~/.pip/pip.conf

[global] 
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn  # trusted-host 此参数是为了避免麻烦，否则使用的时候可能会提示不受信任


```
### windows平台
（1）新建 pip 配置文件夹，直接在user用户目录中创建一个名为 pip 的文件夹( 即%HOMEPATH%\pip)

（2）在 pip 文件夹中创建一个名为 pip 的文本文件(后缀名由" .txt "改为 " .ini ")
文件内容如下：

```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn  # trusted-host 此参数是为了避免麻烦，否则使用的时候可能会提示不受信任
```