# docker基本操作
## 安装
在ubuntu上操作
+ install
```
sudo apt install docker.io
```
在macos上，建议下载安装包自己安装。地址：<https://docs.docker.com/desktop/install/mac-install/>
+ 安装的目录
```
/usr/bin/docker
/usr/share/bash-completion/completions/docker
/usr/share/code/resources/app/extensions/docker
/etc/docker
/etc/default/docker
/etc/init.d/docker
/run/docker
/var/lib/docker 
```
## docker info
使用docker info 命令查看docker信息
```
docker info
```

## docker的配置文件

/etc/default/docker

## docker logs
可以查看容器的日志
```
docker logs <containerid>
```