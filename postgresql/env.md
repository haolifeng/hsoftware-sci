# 安装
## 相关资料
+ <https://www.postgresql.org/>
## ubuntu的安装
直接使用apt安装。
```
sudo apt install postgresql postgresql-client
```
安装完毕后，会为linux创建超级用户postgres, 密码为空。也会为数据库创建数据库账号：postgres,密码也为空。

为了安全，用户自己为postgres设置密码。


切换到用户postgres,然后输入psql,进入postgres控制台。



```
suod su - postgres

psql
```
输入\q退出控制台。

```
\q
```

postgresql安装完毕后默认是已经启动的。通过下面的方式来手动启动服务。

```
sudo /etc/init.d/postgresql start
sudo /etc/init.d/postgresql stop
suod /etc/init.d/postgresql restart
```