# 环境
## 此系统禁止运行脚本
我们通过管理员权限运行power shell，然后输入命令
```
 set-ExecutionPolicy RemoteSigned
```

## 设置代理
```

$Env:http_proxy="http://127.0.0.1:7890";
$Env:https_proxy="http://127.0.0.1:7890";
```