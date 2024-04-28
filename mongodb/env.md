# 环境
从mongodb官网下载：<https://www.mongodb.com/try/download/community>
下载mongodb, mongosh, compass三个软件。使用windows版本时，选择zip的类型，不要msi的类型。经过测试发现msi类型有问题。windows可以使用gitview执行sh文件

## 维护
### 启动脚本
```
#!/bin/sh

./bin/mongod --fork --logpath ./log/mongodb.log --bind_ip_all --dbpath ./data  --port 27017

```

```
在ubuntu18.4中安装6.01时提示：
./bin/mongod: error while loading shared libraries: libcurl.so.4: cannot open shared object file: No such file or directory

解决方法为： 

sudo apt install libcurl4
```
### 停止脚本

```
#!/bin/sh
pid=$(ps -ef | grep mongod | grep -v grep | awk '{print $2}')
if [ -n  "$pid" ]; then

        kill -9 $pid;
fi
```

## 设置管理账号并且auth登录
1. 首先用noauth方式启动mongodb,例如使用上文的启动脚本。
2. 使用mongosh, 进入admin数据库,创建admin账号，角色是userAdminAnyDatabase
```
use admin
db.createUser({
        user:"admin",
        pwd:"xxx",
        roles:[{
                role:"userAdminAnyDatabase",
                db :"admin"
        }]
})
```
3. 为admin数据库创建一个用户root,角色为root, 密码自己定.root角色用于关闭数据库（db.shutdownServer()）
```
# use admin
db.createUser({user:"root", pwd:"xxx", roles:[{role:"root", db:"admin"}]})
```
admin数据库是一个特别的数据库，这个数据库的用户，可以访问mongodb中的所有数据库。但不能写。如果对于单个数据库还是使用一下的方式。

4. 创建单个数据库的管理角色
例如数据库sample,管理用户sample, 角色为dbOwner。
```
use sample
db.createUser({
        user:"sample",
        pwd:"xxx",
        roles:[{
                role:"dbOwner",
                db:"sample"
        }]
})
```

5. 开启验证

在启动脚本中添加--auth选项或者使用配置文件。这里使用--auth选项
```
#!/bin/sh

./bin/mongod --fork --logpath ./log/mongodb.log --bind_ip_all --dbpath ./data  --port 27017 --auth

```

6. 访问
+ 单一数据库访问

mongodb://sample:xxx@localhost:27017/sample
+ 多数据库访问

可以使用admin中的账号访问所有的数据库。例如：
mongodb://root:xxx@localhost:27017或者mongodb://admin:xxx@localhost:27017

7. mongosh访问

显示admin数据库中的用户

```
use admin
db.auth("root", "xxx")
show users

[
  {
    _id: 'admin.admin',
    userId: new UUID("3374b63c-57bb-4e5a-a1b1-3b4519fe93da"),
    user: 'admin',
    db: 'admin',
    roles: [ { role: 'userAdminAnyDatabase', db: 'admin' } ],
    mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
  },
  {
    _id: 'admin.root',
    userId: new UUID("cfbbcf99-89ba-4184-968e-58e5166bb7e1"),
    user: 'root',
    db: 'admin',
    roles: [ { role: 'root', db: 'admin' } ],
    mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
  }
]

```

显示sample数据库中的用户

```
use sample
switched to db sample
db.auth("root","xxx") // 会失败MongoServerError: Authentication failed
db.auth("sample","xxx")
sample> show users
[
  {
    _id: 'sample.sample',
    userId: new UUID("f5a68e85-89cd-4011-8688-0abb6aac9ae3"),
    user: 'sample',
    db: 'sample',
    roles: [ { role: 'dbOwner', db: 'sample' } ],
    mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
  }
]

```

## mongosh

### mongosh的链接参数

|参数|描述|
|---|---|
|--port| 端口|
|--host| 主机地址|
|--username| 用户名|
|--password| 密码|
|--authenticationDatabase| 身份认证数据库名称|
|--tls|是否使用tls认证|

### windows下启动控制台窗口
mongosh-1.6.2-win32-x64下双击mongosh.exe启动控制台，用户在控制台中链接字符串“mongodb://localhost:27017”，进行连接。
### windows下powershell控制台
使用mongosh mongodbUrl进入控制台
```
./mongosh.exe mongodb://localhost:27017
```

### Linux-Ubuntu下
mongosh mongodb://localhost:27017