# mongodb in docker
## 下拉镜像
```
sudo docker pull mongo
```

## 启动容器
```
sudo docker run -itd --name mongo -p 37027:27017 mongo --auth
```
如果为了开发方便可以不带auth.

```
sudo docker run -itd --name mongo -p 27017:27017 mongo
```
--name mongo为用户定义的容器名称。最后的mongo为镜像的名称。

## 设置用户和密码
### 登录admin数据库
```
sudo docker exec -it mongo mongosh admin 

```
### 创建一个名为 admin，密码为 123456 的用户。
```
>  db.createUser({
        user:'admin',pwd:'zihua',
        roles:[
            {
                role:'userAdminAnyDatabase', db: 'admin'
            },
            "readWriteAnyDatabase"
        ]
    });
# 尝试使用上面创建的用户信息进行连接。
> db.auth('admin', '123456')
```

### 创建用户，访问某数据库
必须先通过admin的授权。

```
Use flyliquid-one
db.createUser({
    user:"hlf",
    pwd:"xxxx",
    roles:[{
        role: "dbOwner",
        db:"flyliquid-one"
    }]
})
```
