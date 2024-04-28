# go mod
## GO111MODULE
GO111MODULE有三个值：off, on 和auto(默认值)。
+ GO111MODULE=off,go命令行将不支持module功能，寻找依赖包的方式将会沿用旧版本那种vendor目录火灾GOPATH模式查找
+ GO111MODULE=on, go命令行使用modules, 而一点也不会去GOPATH目录下查找。
+ GO111MODULE=auto,。默认值，go命令行将当前目录来决定是否启用module功能。这种情况下可以分为两种情形：

1. 当前目录在GOPATH/src之外，且该目录包含go.mod文件。
2. 当前文件在包含go.mod文件的目录下面。

当modules功能启用时，依赖包的存放位置变更为$GOPATH/pkg

## go mod命令

|命令|	说明|
|--|--|
|download|	download modules to local cache(下载依赖包)|
|edit|	edit go.mod from tools or scripts（编辑go.mod)|
|graph|	print module requirement graph (打印模块依赖图)|
|verify|	initialize new module in current directory（在当前目录初始化mod）|
|tidy|	add missing and remove unused modules(拉取缺少的模块，移除不用的模块)|
|vendor|	make vendored copy of dependencies(将依赖复制到vendor下)|
|verify|	verify dependencies have expected content (验证依赖是否正确）|
why|	explain why packages or modules are needed(解释为什么需要依赖)|

## samle
### init project
```
mkdir gone
cd gone
go mod init gone
```

go.mod文件一旦创建后，它的内容将会被go toolchain全面掌控。go toolchain会在各类命令执行时，比如go get、go build、go mod等修改和维护go.mod文件。

go.mod 提供了module, require、replace和exclude 四个命令

+ module 语句指定包的名字（路径）
+ require 语句指定的依赖项模块
+ replace 语句可以替换依赖项模块
+ exclude 语句可以忽略依赖项模块

