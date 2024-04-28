# 开发环境代理设置

## 设置环境变量
###  windows
使用powershell，powershell设置变量的方式为  
$env:http_proxy="http://127.0.0.1:port"  
$env:https_proxy="http://127.0.0.1:port"  
  
删除则是：  
del env:http_proxy  
显示环境变量：  
ls env:


### linux终端
set http_proxy=http://127.0.0.1:port  
set https_proxy=http://127.0.0.1:port

### macos终端
export http_proxy=127.0.0.1:port  
export https_proxy=127.0.0.1:port