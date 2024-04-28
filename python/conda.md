# conda
## 相关资料
https://docs.conda.io/en/latest/

## 常用命令
1. 查看命令参数
```
conda
```
2. 确认版本
```
conda -V
```
3. 查看子命令帮助信息:conda [ 子命令] -h
```
conda create -h 
```
4. 创建虚拟环境 conda create -n [envname] [packageslist]
```
conda create -n firstEvn python=3.10
```
5. 查看环境列表 conda env list
```
conda env list
```
6. 创建虚拟环境时安装包
```
conda create -n secondV reqeusts numpy
```
7. 在创建完环境后继续安装包
```
conda install -n secondV scipy
```
8. 启动新环境 conda activate envName
```
conda activate secondV
```

9. conda install
```
conda install requests
```
10. pip install
```
pip install requests
```
11. 参看安装的包 conda list
```
conda list
```

12. 退出新环境 exit
```
exit
```
13. 删除环境 conda remove -n [ envName ] --all
```
conda remove -n secondV --all
```
14. 创建低版本的python
```
conda create -n oldV python=3.8 
```
15. 克隆一个环境
```
conda create -n newV --clone oldv
```
16. 环境导入和到处
```
conda env export --file firstV.yml --name firstV

conda env create -f firstV.yml
```
17. 配置信息
```
conda info
```
配置文件所在位置~/.condarc
18.  显示安装的channels
```
conda  config --get channels
```

19. 设置channels
``` 
$ conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/

```
20. 删除conda  
直接使用rm删除。

# 关闭默认启动base

```
conda config --set auto_activate_base false
```
在~/.condarc中添加了
```
auto_activate_base: false
```

# conda-pack打包

https://conda.github.io/conda-pack/

conda-pack is a command line tool for creating relocatable conda environments. This is useful for deploying code in a consistent environment, potentially in locations where python or conda isn't already installed.

## install
```
conda install conda-pack
conda install -c conda-forge conda-pack

pip install conda-pack
```

## use

On the source machine

```
# Pack environment my_env into my_env.tar.gz
$ conda pack -n my_env

# Pack environment my_env into out_name.tar.gz
$ conda pack -n my_env -o out_name.tar.gz

# Pack environment located at an explicit path into my_env.tar.gz
$ conda pack -p /explicit/path/to/my_env
```

On the target machine

```
# Unpack environment into directory `my_env`
$ mkdir -p my_env
$ tar -xzf my_env.tar.gz -C my_env

# Use python without activating or fixing the prefixes. Most python
# libraries will work fine, but things that require prefix cleanups
# will fail.
$ ./my_env/bin/python

# Activate the environment. This adds `my_env/bin` to your path
$ source my_env/bin/activate

# Run python from in the environment
(my_env) $ python

# Cleanup prefixes from in the active environment.
# Note that this command can also be run without activating the environment
# as long as some version of python is already installed on the machine.
(my_env) $ conda-unpack

# At this point the environment is exactly as if you installed it here
# using conda directly. All scripts should work fine.
(my_env) $ ipython --version

# Deactivate the environment to remove it from your path
(my_env) $ source my_env/bin/deactivate

```
# import channel
+ conda-forge

**conda-forge** is a Github organization containing repositories of conda recipes.

```
conda config --add channels conda-forge
conda config --set channel_priority strict
conda install <package-name>
```