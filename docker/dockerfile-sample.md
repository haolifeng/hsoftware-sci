# Dockerfile样例
## data
### dockerfile.data
```
FROM node
COPY ./gconfig /root/gconfig
COPY ./liquidApp /root/liquidApp
WORKDIR /root/liquidApp

RUN npm install -g ts-node  && yarn

CMD ["ts-node","dataApp.ts"]

```
### build
```
#!/bin/sh
docker build -t hlf/data:v1 -f dockerfile.data .
```
## liquid
### dockefile.liquid
```
FROM node
COPY ./gconfig /root/gconfig
COPY ./liquidApp /root/liquidApp
WORKDIR /root/liquidApp

RUN npm install -g ts-node  && yarn

CMD ["ts-node","fnLiquid.ts"]
```
### build
```
#!/bin/sh
docker build -t hlf/liquid:v1 -f dockerfile.liquid .
```
## 镜像导出和导入
### hlf/data 导出
```
sudo docker save -o data.tar  hlf/data:v1
```
### hlf/data导入
```
sudo docker load -i data.tar
```

### hlf/liquid导出
```
sudo docker save -o liquid.tar hlf/liquid:v1
```

### hlf/liquid导入
```
sudo docker load -i liquid.tar
```

