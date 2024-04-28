# 笔记本电脑合盖子ubuntu不休眠
所有修改都在这个文件内。

sudo gedit /etc/systemd/logind.conf
打开文件后修改下面这行：

#HandleLidSwitch=suspend
改成这样：

HandleLidSwitch=ignore
保存文件，重启 Login Manager 服务：

sudo restart systemd-logind