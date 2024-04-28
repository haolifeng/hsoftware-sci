# golang环境搭建
## linux环境搭建

golang可以在windows, linux和macos中运行。最好还是在linux下运行。本文档主要讲述在linux下搭建开发环境。

## golang版本
目前golang最新的版本是go1.19.4。本文档以此版本进行各种实验。下载地址为：

<https://golang.google.cn/dl/>

## linux环境变量
需要设置的环境变量主要有：GOROOT, GOPATH, GORROXY, GO111MODULE, PATH。为了方便开发，我的GOPATH由3个目录：GoDevPath, Gopath, Gotest。GoDevPath主要放置第三方依赖库，可以放到其他开发环境中重复使用，但不能跨平台使用。Gopath和Gotest为开发目录。  

GOPROXY设置为“https://goproxy.cn”。该地址 是七牛公司的golang代理。
总体环境如下所示：



```
export GOROOT=/usr/local/go
export GOPATH=$HOME/GoDevPath:$HOME/Gopath:$HOME/Gotest
export GO111MODULE=auto
export GOPROXY=https://goproxy.cn

export PATH=$PATH:$GOROOT/bin:$HOME/GoDevPath/bin:$HOME/Gopath/bin:$HOME/Gotest/bin
```

## IDE设置
开发golang的IDE主要有VSCODE， GoLand。我使用GoLand2019.2.3。GoLand2019.2.3版本比较陈旧,如果使用go1.19.4需要需要go的文件。  
我的go安装在/usr/local/目录下，需要在/usr/local/go/src/runtime/internal/sys/zversion.g添加：
```
const TheVersion = `go1.19.4`  
```

注意： 符号是反引号
need to reboot computer



