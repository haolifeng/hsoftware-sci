# truffle migrate 
## 命令格式
```
truffle migrate [--reset] [--f <number>] [--to <number>] [--network <name>] [--compile-all] [--verbose-rpc] [--dry-run] [--interactive]
```
除非特别指定，truffle migrate命令将从最后完成的迁移脚本开始运行。

## 命令选项
+ --reset：从头开始运行所有的迁移脚本，而不是从最后完成的开始
+ --f ：从number指定的迁移脚本开始运行。number指向迁移脚本文件的前缀
+ --to : 运行到number指定的迁移脚本
+ --network ：指定要使用的网络，该网络名必须在配置文件中已经存在
+ --compile-all：编译全部合约，而不是智能选择需要编译的合约
+ --verbose-rpc：记录并显示Truffle和以太坊客户端之间的通信
+ --dry-run：分叉指定的网络，仅执行测试迁移
+ --interactive：在dry run之后，提醒用户确认是否继续