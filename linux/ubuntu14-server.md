# ubuntu14配置
用这么老的机器就是为了做实验
!! 太旧了，许多东西不能用了。
## 网络配置
修改/etc/network/interfaces设置静态IP
```
sudo vim /etc/network/interfaces
```

用下面的代码替换有关eth0的内容。
```
# The primary network interface
auto eth0  #表示让网卡开机自动挂载eth0
iface eth0 inet static
address 192.168.2.1
gateway 192.168.2.254
netmask 255.255.255.0
#network 192.168.2.0
#broadcast 192.168.2.255

dns-nameservers 192.168.2.2
```
重启网络
```
sudo /etc/init.d/networking restart
```

或者
```
sudo ifdown eth0 && sudo ifup eth0
```
## 替换软件源为阿里云
用vim打开
/etc/apt/sources.list

替换默认的

http://archive.ubuntu.com/

为

mirrors.aliyun.com

```
:%s/archive.ubuntu.com/mirrors.aliyun.com/g
```