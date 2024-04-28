# 虚拟机配置优化
virtual box 6.1
## 环境配置
### 常规
+ 高级->共享粘贴板：双向，拖放双向 
### 系统
+ Motherborad-> Base Memory:4096MB
+ Processor->Processor(s): 2, Extended Features: Enable PAE/NX
+ Acceleration-> Hardware Virtualization : Enable Nested Pagin
### 显示
+ Screen -> Video Memory: 64MB, Acceleration: Enable 3D Acceleration

### Network
配置三个适配器： NAT,桥接适配器，Host-only Adapter



### User Interface
+ Show at Top of Screen