# 容器

## 查看容器
sudo docker ps // 查看容器信息

sudo docker ps -a //可以查看所以容器

## 停止容器
docker stop

docker ps -a -q命令看处于终止状态的容器的ID信息。

启动终止状态的docker start/restart

## 删除容器
docker rm [OPTIONS] CONTAINER [CONTAINER...]  
-f, --force=false 强行终止并删除一个运行的容器  
-l, --link=false 删除容器的连接，当保留容器  
-v, --volumes=false 删除容器挂载的数据卷。  

## 运行容器
命令格式： docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
Usage: Run a command in a new container
中文意思为：通过run命令创建一个新的容器(container)
常用选项说明
+ -d , --detach=false, 指定容器运行与前台还是后台，默认为false
+ -i, --interactive=false, 打开SDTIN, 用于控制台交互
+ -t, --tty=false，分配tty设备，可以支持终端登录，默认为false
+ -u, --user=””, 指定容器的用户
+ -a, --attach=[], 登录容器（必须是以docker run -d 启动的容器）
+ -w, --workdir=”” 指定容器的工作目录
+ -c, --cpu-shares=0,设置容器CPU权重，在CPU共享场景使用
+ -e, --env=[],指定环境变量，容器中可以使用该环境变量
+ -m, --memory=””, 指定容器的内存上限
+ -P，--public=[], 指定容器暴露的端口
+ -p, --public=[], 指定容器暴露的端口
+ -h, --hostname=””, 指定容器的主机名
+ -v, --volume=[], 给容器挂在存储卷，挂在到容器的某个目录
+ --volumes-from=[], 给容器挂载其他容器上的卷，挂载到容器的某个目录
+ --cap-add=[], 添加全局，
+ --cap-drop=[], 删除权限
+ --cidfile=””, 运行容器后，在指定文件中写入容器PID值，一种典型的监控系统用法
+ --cpuset=””, 设置容器可以使用哪些CPU，此参数可以用来容器独占CPU
+ --device=[], 添加主机设备给容器，相当于设备直通
+ --dns=[],指定容器的dns服务器
+ --dns-search=[], 指定容器的dns搜索域名，写入到/etc/resolv.conf文件
+ --entrypoint=””,覆盖image的入口点
+ --env-file=[]， 指定环境变量文件，文件格式为每行一个环境变量
+ --expose=[], 指定容器暴露的端口，即修改镜像的暴露端口
+ --link=[], 指定容器间的关联，使用其他容器的IP、env的信息
+ --lxc-conf=[], 指定容器的配置文件，只有在指定--exec-driver=lxc时使用
+ --name=””, 指定容器名字，后续可以通过名字进行容器关联，links特性需要使用名字
+ --net=”bridge”, 容器网络设置  
bridge使用docker daemon指定的网桥  
Host //容器使用主机的网络  
Container: NAME_or_ID > //使用其他容器的网路，共享IP和PORT等网路资源  
none容器使用自己的网路(类型--net=bridge),但是不进行配置  
+ --privileged=false, 指定容器是否为特权容器，特权容器拥有所有的capabilities
+ --restart=”no”, 指定容器停止后的启动策略：  
No: 容器退出是不重启  
On-failure: 容器故障退出(返回值非零）时重启  
Always: 容器退出是总是重启  
+ --rm=false, 指定容器停止后自动删除容器(不支持以docker run -d 启动的容器）
+ --sig-proxy=true，设置由代理接受并处理信号，但是SIGCHLD/SIGSTOP/SIGKILL不能被代理

+ --ip IPv4 address

## 重启docker
sudo docker start

run命令会创建一个新的容器。停止一个容器后使用start启动容器

## 导出容器

```
docker export 1e560fca3906 > ubuntu.tar
```

## 导入容器
```
docker import filename  imagename
```
