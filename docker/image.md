# 镜像
## 镜像信息
```
sudo docker images 
```
## 搜寻镜像
sudo docker search    imagesName  
such as:
```

sudo docker search node
```
## 删除镜像
docker rmi  
删除的镜像不能被使用，包括停止的容器

```

docker rmi iMage
```

## 构建镜像
```
#!/bin/sh
docker build -t hlf/data:v1 -f dockerfile.data .
```
如果不指定-f,则默认使用当前目录下的Dockerfile。
