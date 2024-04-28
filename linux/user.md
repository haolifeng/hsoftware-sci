# 用户操作
## 添加用户
```
sudo useradd -m -s /usr/bin/bash  -d /sdb/difi difi
```
**注释**
+ -m 自动创建用户登录目录
+ -M 不知道创建用户登录目录
+ -s 指定用户的uid
+ -d 设置用户的home目录，如果不指定则为/home/userName目录
+ -g 指定用户所属组（主组）,如果不指定则默认为userName
+ -G 指定用户附属组，如果不指定则没有。

+ 在创建用户后，可以在/etc/passwd文件中查看用户信息。
## 为用户添加密码
```
sudo passwd difi
```

## 把用户添加到sudo组
```
sudo chmod +w /etc/sudoers

sudo vim /etc/sudoers 
```
在/etc/sudoers文件中添加
```
difi ALL=(ALL:ALL) ALL


```
添加完毕后再去掉/etc/sudoers中的w
```
sudo chmod -w /etc/sudoers
```
