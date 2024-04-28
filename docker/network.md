# docker的网络配置
## docker的四种网络模式
|网络模式| 命令指定方式|描述|
|---|---|---|
|bridge|-network bridge|为每一个容器分配，设置IP, 病将容器连接到docker0虚拟网桥上，这也是默认的网络模式|
|host|-network host|容器不会创建自己的网卡，配置IP等，而是使用宿主主机的IP和端口|
|container|-network 容器名或id|新创建的容器不会创建自己的网卡和配置自己的IP，而是和一个指定的容器共享IP, 端口范围|
|none|-network none|容器有独立的Network namespace, 但并没有对其进行任何网络设置|

```
sudo docker network ls

NETWORK ID     NAME      DRIVER    SCOPE
108c57a8b7da   bridge    bridge    local
e0cd9757ff4c   host      host      local
4a23ebec5dc5   none      null      local
```

## bridge
Docker服务启动时，默认会创建一个名称为docker0的网桥。
```
ifconfig

docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255
        ether 02:42:95:ce:72:05  txqueuelen 0  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

在docker run时指定IP.