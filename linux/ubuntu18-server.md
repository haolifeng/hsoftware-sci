# ubuntu18配置
## 网络配置
打开文件/etc/netplan/00-installer-config.yaml 

```
network:
  ethernets:
    ens33:
      dhcp4: no
      dhcp6: no
      addresses: [192.168.2.13/24]
      gateway4: 192.168.2.2
      nameservers:
              addresses: [192.168.2.2] 
  version: 2


```
s
重启网络
```
sudo netplan apply
```

## 设置服务自动随机启动

```
sudo  systemctl enable ssh

sudo systemctl enable disable ssh

sudo systemctl start ssh
sudo systemctl stop ssh

```