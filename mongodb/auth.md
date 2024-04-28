# 权限授权
<https://www.jianshu.com/p/53ff1b2f0125>
## RBAC权限模型简介（基于角色的访问控制）
RBAC(基于角色的访问控制)：英文名称Role-Base Access Control，介绍这种模型的权限系统设计。取消了用户和权限的直接关联，改为通过用户关联角色、角色关联权限的方法来间接地赋予用户权限。从而实现了解耦。

模型中有几个关键的术语：
+ 用户（User): 系统接口及访问的操作者，即登录的用户本身，有一个用户ID(定义uuid)
+ 角色（Role): 具有一类相同操作权限的用户的总称，即这个用户拥有几个身份，一个用户可以有很多角色
+ 权限（Access): 能够访问某接口或者做某操作的授权资格。Access英文中的含义是访问，引申为访问的资源，习惯上可以称之为权限。

## MongoDB系统角色（RBAC)
MongoDB内部提供了一系列内置的角色，这些角色是为了完成一些基本的数据库操作。每个内置角色提供了用户在角色数据库内数据库级别所有非系统类集合的访问权限，也提供了对集合级别所有系统集合的访问权限。

### 用户
MongoDB是基于角色的访问控制，所以创建用户需要指定用户的角色，在创建用户之前需要满足：  
1. 先在admin数据库中创建角色为userAdmin或userAdminAnyDatabase的用户作为关联用户的用户；
2. 启用访问控制，进行登录用户验证，这样创建的用户才有意义。
#### 创建用户管理的用户
启用访问控制登录之前，首先需要在admin数据库中创建角色为userAdmin或userAdminAnyDatabase作为用户管理的用户，之后才能通过这个用户创建其他角色的用户，这个用户作为其他所有用户的管理者。
## 角色
在MongoDB中通过角色对用户授予相应数据库资源的操作权限，每个角色当中的权限可以显式指定，也可以通过继承其他角色的权限，或者两都有的权限。

### MongoDB内置
1. 数据库用户角色： read, readWrite;
2. 数据库管理角色： dbAdmin, dbOwner, userAdmin;
3. 集群管理角色： clusterAdmin, clusterManager, clusterMonitor, hostManager; 
4. 备份恢复角色： backup, restore;
5. 所有数据库角色: readAnyDatabase, readWriteAnyDatabase, userAdminAnyDatabase, dbAdminAnyDatabase
6. 超级用户角色： root
7. 内部角色： _system


常用的内置角色，如下表：
| 角色 | 权限描述 |
|-----| ------| 
| read | 可以读取指定数据库中任何数据 |
| readWrite| 可以读写指定数据库中任务数据，包括创建、重名、删除集合|
|readAnyDataBase| 可以读取所有数据库中任何数据(除了数据库config和local之外)|
|readWriteAnyDatabase|可以读写所有数据库中任何数据(除了数据库config和local之外)|
|dbAdmin|可以读取指定数据库以及对数据库进行清理、修改、压缩、获取统计信息、执行检查等操作。|
|dbAdminAnyDatabase|可以读取任何数据库以及对数据库进行清理、修改、压缩、获取统计信息、执行检查等操作（除了数据库config和local之外）|
|clusterAdmin|可以对整个集群或数据库系统进行管理操作|
|userAdmin| 可以在指定数据库创建和修改用户|
|userAdminAnyDatabase|可以在指定数据库创建和修改用户（除了数据库config和local之外|

#### 数据库用户角色
+ read角色包含读取所有非系统集合数据和订阅部分系统集合（system.indexes,system.js,system.namespaces)的权限。
该角色权限包含命令操作：changeStream, collStats, dbHash, dbStats, find, killCursors, listIndexes, listCollections.

+ readWrite 角色包含read角色的权限同时增加了对非系统集合数据的修改权限，但对系统集合system.js有修改权限。
该角色权限包含命令操作：collStats, convertToCapped, createCollection, dbHash, dbStats, dropCollection, createIndex, dropIndex, find, insett, killCursors, listIndexes, listCollections, remove, renameCollectionSameDB, update
#### 数据库管理角色
+ dbAdmin

dbAdmin角色包含执行某些管理任务（与schema相关，索引、收集统计信息）的权限，该角色不包含用户和角色管理的权限。
对于系统集合（system.indexes, system.namespace, system.profile)包含命令操作：collStatus,dbHash, dbStats, find, killCursors, listIndexes, listCollections, dropCollection and createCollection(仅适用system.profile)
对于非系统集合包含命令：bypassDocumentValidation, collMod, collStats, compact, vonvertToCapped, createCollection, createIndex, dbStats, dropCollection, dropDatabase, dropIndex, enableProfile, reIndex, renameCollectionSameDB, repairDatabase, storageDetails, validate
+ dbOwner包含对数据所有的管理操作权限，即包含角色readWrite, dbAdmin和userAdmin的权限。

+ userAdmin 包含对当前数据库创建和修改角色和用户的权限。该角色允许向其他任何用户（包括自身）授予任何权限，所以这个角色也提供间接对超级用户root的访问权限，如果限定在admin数据中，也包括集群管理的权限。
该角色权限包含命令操作：changeCustomData, changePassword, createRole, createUser, dropRole, dropUser, grantRole, revokeRole, setAuthenticationRestriction, viewRole, viewUser.
#### 集群管理角色
+ clusterManager包含对集群监控和管理操作的权限。拥有此角色的用户能够访问集群中的config数据库和local数据库。
对于整个集群该角色包含命令操作：addShard, appendOplogNote, applicationMessage, clearupOrphaned, flushRouterConfig, listSessions, listShards, removeShard, replSetConfigurre, replSetGetConfig, replSetGetStatus, replSetStateChange, resync.
对于集群中所有的数据库包含命令操作：enableSharding, moveChunk, splitChunk, splitVector.

+ clusterMonitor角色包含针对监控工具具有只读操作的权限。如工具MongoDB Cloud Mnager和工具Ops Manager.
对于整个集群该角色包含命令操作：checkFreeMonitoringStatus, connPoolStats, getCmdLineOpts, getLog, getParameter, getShardMap, hostInfo, inprog, listDatabases, listSessions, listShards, netstat, replSetGetConfig, replSetGetStatus, serverStatus, setFreeMonitoring, shardingState, top.

对于集群中所有的数据为包含命令操作：collStats, dbStats, getShardVersion, indexStats, useUUID
+ hostManager角色包含针对数据库服务器的监控和管理操作权限。
对于整个集群该角色包含命令操作：applicationMessage, closeAllDatabases, connPoolSync, cpuProfile, flushRouterConfig, fsync, invalidateUserCache, killAnyCursor, killAnySession, killop, logRotate, rsysnc, setParameter, shutdown, touch unlock. 
对于集群中所有的数据库包含命令操作：killCursors, repairDatabase.
+ clusterAdmin
clusterAdmin角色包含MongoDB集群管理最高的操作权限。该角色包含clusterManager,clusterMonitor和hostManager三个角色的所有权限，并且还拥有dropDatabase操作命令的权限。
#### 备份恢复角色
+ backup角色包含备份MongoDB数据最小的权限。对于MongoDB中所有的数据库资源包含命令操作：listDatabases, listCollections, listIndexes. 
对于整个集群包含命令操作：appendOplogNote, getParameter, listDatabases.
对于以下数据库资源提供find操作权限：
对于集群中的所有非系统集合，包括自身的config数据库和local数据库；对于集群中的系统集合：system.indexes, syste.namespaces, system.js和system.profile;
admin数据库中的集合：admin.system.users和admin.system.roles;
config.settings集合：2.6版本之前的system.users集合。  
对于config.setting集合还有insert和update操作权限。
+ restore角色包含从备份文件中还原恢复MongoDB数据(除了system.profile集合)的权限。  
restore角色有以下注意事项：
1. 如果备份中包含system.profile集合二恢复模板数据库没有system.profile集合，mongorestore会尝试重建该集合。因此执行用户需要有额外针对system.profile集合的createCollection和convertToCapped操作权限；
2. 如果执行mongorestore命令时指定选项--oplogReply, 则restore角色包含的权限无法进行重放oplog。如果需要进行重放oplog, 则需要只对执行mongorestore的用户授予包含对实例中任何资源具有任何权限的自定义角色。
对于整个集群包含命令操作：getParameter.  
对于所有非系统集合包含命令操作：bypassDocumentValidation, changeCustomData, changePassword, collMod, convertToCapped, createCollection, createIndex, createRole, createUser, dropCollection, dropRole, dropUser, grantRole, insert, revokeRole, viewRole, viewUser。
#### 所有数据库角色

以下角色只存在于admin数据库，并且适用于除了config和local之外所有的数据库。
+ readAnyDatabase角色包含对除了config和local之外所有数据库的只读权限。同时对于整个集群包含listDatabases命令操作。
在MongoDB3.4版本之前，该角色包含对config和local数据库的读取权限。当前版本如果需要对这两个数据库进行读取，则需要在admin数据库授予用户对这两个数据库的read角色。
+ readWriteAnyDatabase  
userAdminAnyDatabase角色包含类似于userAdmin角色对于所有数据库的用户管理权限，除了config数据库和local数据库。  
对于集群包含命令操作：authSchemaUpgrade, invalidateUserCache, listDatabases.   
对于系统集合admin.system.users和admin.system.roles包含命令操作：collStats, dbHash, dbStats, find, killCursors, planCacheRead, createIndex, dropIndex。  
该角色不会限制用户授予权限的操作，因此，拥有角色的用户也有可能授予超过角色范围内的权限给自己或其他用户，也可以使自己成为超级用户，userAdminAnyDatabase角色也可以认为使MongoDB中的超级用户角色。
+ dbAdminAnyDatabase  
dbAdminAnyDatabase角色包含类似于dbAdmin角色对于所有数据库管理权限，除了config数据库和local数据库。同时对于整个集群包含listDatabase命令操作。
在MongoDB3.4版本之前，该角色包含对config和local数据库的管理权限。当前版本如果需要对这两个数据库进行管理，则需要在Admin数据库抽烟用户对这两个数据库的dbAmin角色。
#### 超级用户角色
以下角色包含在任何数据库授予任何用户任何权限的权限。这意味着用户如果有以下角色之一可以为自己在任何数据库授予任何权限。
+ dbOwner角色（作用范围为admin数据库）
+ userAdmin角色（作用范围为admin数据库）
+ userAdminAnyDatabase角色

以下角色包含数据库所有资源的所有操作权限。
+ root  
root角色包含角色readWriteAnyDatabase, dbAdminAnyDatabase, userAdminAnyDatabase, clusterAdmin, restore和backup联合之后所有的权限。
#### 内部角色
+ _system
MongoDB将此角色授予代表集群成员的用户对象，如副本集（replica set)成员或mongos实例。该角色允许用户对于需要的数据库操作都具有相应的权限，不要将该角色授予英语程序用户或其他管理员用户。

### 用户自定义角色
虽然mongodb提供了一系列内置角色，但有时内置角色包含的权限病不满足所有需求，所以Mongodb也提供了创建自定义角色的方法。当创建一个自定义角色时需要进入指定数据库进行操作，因为mongodb通过数据库和角色名称对角色进行唯一标识。  
除了在admin数据库中创建的角色之外，在其他数据库中创建的自定义角色包含的权限只适用于角色所在的数据库，并且只能继承用数据库其他角色的权限。在admin数据库中创建的自定义角色则不受此限制。
MongoDB将所有的角色信息存储在admin数据库的system.roles集合中，不建议直接访问此集合内容，而是通过角色管理命令来查看和编辑自定义角色。
## 权限
权限由指定的数据库资源(resource)以及允许在指定资源上进行操作(action)组成。
+ 1.资源(resource)包括：数据库、集合、部分集合和集群；
+ 2.操作(action)包括：对资源的进行的增、删、改、查（CRUD)操作。

在角色定义是可以包含一个或多个已存在的角色，新创建的角色会继承包含的角色所有的权限。在同IG数据库中，新创建角色可继承其他角色的权限，在admin数据库中创建的角色可以继承在其他任意数据库中角色的权限。

## 账号密码设置
MongoDB密码和传统数据如mysql等有些区别：MongoDB的用户名和密码是基于特定数据库的，而不是基于整个系统的。所有数据库DB都需要设置密码。
### 创建所有数据库的管理角色
#### 查看所有数据库
启动mongodb, 使用mongosh，进入命令行管理界面。

### 创建单个数据库的管理角色
我们除了可以设置数据库的超级管理员以外，还可以给每个数据库设置单独的管理员。其只有操作单独数据库的一定权限。这里我们以sample数据库为例，给sample配置一个账户。  
注： 各个不同的数据库之间，可以创建有一个或多个账户，各个数据库之间账户、密码都是独立的，不能互相访问。
#### 查看所有数据库
+ 进入mongo指令界面
```
show dbs

use sample //创建并切换sample

//创建账户
db.createUser({
    user:"sample",
    pwd:"sample",
    roles:[{
        role: "dbOwner",
        db:"sample"
    }]
})

```
注意：如果不给admin表设置账号，则就算给业务表设置账号密码也没有用，没有账号密码可以访问。
一定要切换到所在数据库上去创建用户，不然创建的用户还是属于admin。
+ 设置完成，可以输入show users或者db.getUsers()查看是否设置成功。
```
show users

```
## 数据库用户操作
删除用户必须有账号管理员来删，所以，切换到admin角色
```
use admin
db.auth("root", "root")
```
### 删除用户
+ 删除单个用户
```
//删除单个用户
db.system.users.remove({user:"xxxx})
//删除用户
db.dropUser("admin")
//删除所有用户
db.system.users.remove({})
```
+ 修改用户密码，密码认证
```
//修改用户密码
db.updateUser("admin", {pwd:"root"})
//密码认证
db.auth("root", "root")
```
## 开启验证
开启验证可以通过--auth参数或者配置文件mongod.conf中的security:authorization:enable设置开启

```
#!/bin/sh
./bin/mongod --fork --logpath ./log/mongodb.log --bind_ip_all --dbpath ./data --port 27017 --auth
```

## mongoose链接数据库
```
mongoose.connect('mongodb://user:password@localhost:port/database')

  例子：

const mongoose = require('mongoose')

mongoose.connect("mongodb://sample:sample@192.168.56.101:27017/sample",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('数据库连接成功'))
.catch(() => console.log('数据库连接失败'))

```

