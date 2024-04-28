# mint安装vnc Server
## 安装Server
```
sudo apt install tigervnc-server
```
## 安装xterm
```
sudo apt install xterm
```

## 安装Xfce桌面
可能还有其他桌面，进行配置，我这里就用网上的东西了。
```
sudo apt install xfce4 xfce4-goodies
```

## 启动vncpasswd设置密码
不要加sudo
```
vncpasswd
```
密码文件存储在~/.vnc目录中，如果不存在就创建目录。
## 创建xstartup文件，并配置

### ~/.vnc/xstartup  -- 这个是错误的

```
vim ~/.vnc/xstartup

#!/bin/sh
xrdb "$HOME/.Xresources"
unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS
exec statxfce4
```

### ~/.vnc/config -- 有这个就可以

```
geometry=1920x1080
session=gnome-classic
localhost=no


```

## 启动vncServer
```
vncserver
```
## 使用tigerVnc-view链接

192.168.2.1:5901

## vnc-viewer
## windows下有安装包tigerVnc-view.exe
## linux下
+ 安装
```
sudo apt install tigervnc-viewer
```
+ 启动
用命令
```
vncviewer 192.168.1.71:5904
```
或者使用界面。

## macOS
