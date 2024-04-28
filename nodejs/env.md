# 环境
## 安装 
```
mkdir ~/Libs/
vim .bashrc
export PATH=$PATH:$HOME/Libs/node14/bin
```

## 设置淘宝源
```
npm config set registry http://registry.npmmirror.com
npm config set disturl http://npmmirror.com/dist

npm install -g yarn
yarn config set registry http://registry.npmmirror.com
yarn config set disturl http://npmmirror.com/dist
```

## 因为在此系统上禁止运行脚本解决办法
使用administrator角色运行命令
```
set-ExecutionPolicy RemoteSigned
```

## 安装TS
```
npm install -g typescript  # this is deprecated
npm install -D typescript 
```
## 安装ts-node
```
npm install -g ts-node
```
## 初始化项目
```
mkdir project1
cd project1
npm init -y
tsc --init
```
## 修改TS-NODE CONFIG
修改tsconfig.json
```
"resolveJsonModule": true,
"allowJs": true,
 "strict": false,  

```
