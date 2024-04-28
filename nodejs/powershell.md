# Powershell基本操作
## 停止程序
Ctl-z ,ctl-c, 先按ctl-z, 然后再按ctl-z
## 文件操作
1. 创建文件
```
new-item fileName
```
2. 删除文件或目录
```
del filename
rm filename
```

## 环境变量
1. 显示环境变量
```
ls env:
```
2. 设置环境变量
```
$env:http_proxy="http://127.0.0.1:8080"
```
3. 删除环境变量
```
del env:http_proxy
```