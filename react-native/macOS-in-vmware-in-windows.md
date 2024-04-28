# macOS-in-vmware-in-windows
为了开发iOS程序，需要使用MacOS，为了不购买苹果笔记本可以如下操作。
## 1. 硬件准备
主要影响的因素是需要固态硬盘, 在安装完毕后，虚拟机需要在固态硬盘上运行，速度才能达到可以忍受的程度，否则操作非常的慢，没法使用。内存和CPU不是关键条件，当然越大越好。主要是vmware-station中要虚拟化CPU，这就导致很慢。

## 2. 软件准备

### 2.1 windows10操作系统；
### 2.2 VMware-workstation-full-15.5.2-15785246.exe 
可以从官网下载，现在可以免费下。
### 2.3 unlock.zip
vmware workstation 默认是不支持macOS的。该文件是破解vmware,使vmware支持macos
### 2.4 macOS Mojave 10.14 18A391 Lazy Installer.cdr
macOS懒人版，网上下载的。或者其他的安装包。
### 2.5 Xcode10.xip
从apple官网下载，需要注册appleID。注册不花钱。


## 3. 安装过程。
1. 双击安装VMware-workstation,不赘述。网上查询注册码，破解。
2. 安装python和python3,unlock.zip要使用。
3. 解压unlock.zip,在unlock目录下有一个文件，**win-install.cmd**。使用administrator权限执行该文件。该操作从vmware官网下载文件，所以需要联网。执行完毕后会在当前目录创建tools目录，该目录会有一个文件darwin.iso文件，该文件就是vmware的工具文件。此时就可以使用vmware-workstation安装macos
4. 安装macos，过程不赘述。需要注意的是如下问题：
1)“该副本已损坏，不能安装”。解决方法是断网，启动终端修改时间，如：
```
date 032208102015.20
```
然后继续安装。
2）安装时没法发现硬盘，使用磁盘工具将硬盘抹掉。


## 4 安装vmtools
因为vmware是被硬破解的，所以vmware不能自动安装，需要手动安装。将unlock生成的**darwin.iso**文件放到vmware中的CD中，硬加载。启动后到macos双击，硬安装。在安装过程中，会告知在系统偏好设置中**安全与隐私**界面设置允许。

## 5 安装Xcode10.xip

将xCode10.xip传到macOS中，双击Xcode10.xip即可解压。解压是可能xcode10下的比较旧会提示"你的应用程序不是来着app"。这个时候有两者解决方法，一是从apple重新下载xcode.10，二是修改macos的系统时间，提前一年。在安装完毕后就可以恢复时间。

解压后，会生成Xcode.app，将Xcode.app移动到/Applactions/目录下，则可以在macos的启动器中看到Xcode。


## 6 联机调试
vmware使用usb2.0。

linux也可以安装Vm,并破解安装macos,执行速度较快，但没有联机调试。因为linux的驱动不能很好的被vmware断开。









