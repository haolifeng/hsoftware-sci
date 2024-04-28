# windows安装react-native环境
建议使用windows10作为开发环境。特别说明，android模拟器只支持intel的芯片，不支持AMD的芯片。

## 1 jdk
安装jdk1.8,设置JAVA_HOME环境变量，并将执行java添加到PATH中。

## 2 node
安装node10, node12比较新，根据情况选择。将node添加到path中。

### 2.1 设置node源为alibaba
我使用的是node10。

```
npm config set registry https://registry.npmmirror.com

npm config set disturl http://npmmirror.com/dist
```
该操作会在当前用户的目录下产生一个.npmrc文件。如果是Administor用户，则即C:\Users\Administrator\.npmrc

```
registry= https://registry.npmmirror.com/
disturl=http://npmmirror.com/dist
```
也可以直接创建文件。

### 2.2 安装yarn并设置为alibaba源
#### 安装
```
npm install yarn -g
```
#### 设置alibab源

```
yarn config set registry https://registry.npmmirror.com
yarn config set disturl https://npmmirror.com/dist
```
该操作会在当前用户的目录下产生.yarnrc文件, 如果是Administor用户，则即c:\Users\Administrator\.yarnrc
```
registry "https://registry.npm.taobao.org"
disturl "https://npm.taobao.org/dist"
```
## 3 python
安装python的目的是一些react-native模块在编译是需要。安装python2。

## 4 windows-build-tools

安装windows-build-tools需要在administrator权限下。主要是全局安装Microsoft's Windows Build Tools。使用Administrator权限启动PowerShell或者CMD.exe。
如果在Administrator用户下没有设置alibaba源，则首先执行如下命令，加速安装。
```
npm config set registry https://registry.npm.taobao.org

npm config set disturl https://npm.taobao.org/dist
```
如果已经设置则执行如下：
```
npm install --global --production windows-build-tools@4.0.0
```

该命令将执行很长时间，因为要安装vs-c++，用于编译react-native模块。如果python没有在前期步骤中执行，该操作也会安装python

## 5 react-native-cli
```
npm install --global react-native-cli
```
## 6 安装android-studio
react-native项目本身就是一个android项目，所以要使用android_studio处理和下载android的依赖。
安装步骤可以参考官方稳定。这里只是一些重要的实践
### 6.1 设置环境变量
%ANDROID_HOME%\platform-tools

%ANDROID_HOME%\emulator

%ANDROID_HOME%\tools

%ANDROID_HOME%\tools\bin

### 6.2 设置AVD目录
android-studio的AVD目录默认放置在C:\Users\Administrator\.android\avd。为了修改默认目录，需要设置环境变量ANDROID_SDK_HOME。这个名字真让人迷惑，但就是这个名字！
### 6.3 设置SDK目录
android-studio的SDK目录默认放置在C:\Users\Administrator\AppData\Local\Android\Sdk。为了修改默认目录，需要设置环境变量ANDROID_HOME。这个名字还好。

### 6.4 修改模拟器的内存
在(<ANDROID_SDK_HOME>\.android\avd\模拟器目录)下有一个文件config.ini，该文件中有一个变量hw.ramSize，可以修改。修改后重新启动模拟器。
```
hw.ramSize=1536
```
## 7 项目实践
### 7.1 创建项目
创建react-native 固定版本的项目
```
react-native init project_name --version 0.59.3
```

### 7.2 使用aliyun的maven镜像

将android/build.gradle中的jcenter()和google()分别替换为maven { url 'https://maven.aliyun.com/repository/jcenter' }和maven { url 'https://maven.aliyun.com/repository/google' }

```
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/google' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/gradle-plugin' }
```

也可以不用替换，就是慢。

### 7.3 gradle下载慢的问题
gradle下载很慢，除了修改maven镜像外还可以收到下载grdle。

查找个人使用的android-studio使用的gradle的版本，在项目的gradle-wrapper.peroperties文件中，如下：
```
distributionUrl=https\://services.gradle.org/distributions/gradle-5.1.1-all.zip
```

1)使用下载工具下载gradle
gradle的官网下载地址是 https://gradle.org/releases， 打开网址后下载complete版本。

2)替换本地gradle
完全关闭AS，包括正在下载gradle的进程也需要关闭。进入到本地的gradle存储目录，我的是C:\Users\Administrator\.gradle\wrapper\dists。

把gradle-2.14.1-all.zip文件复制到 gradle-2.14.1-all/8bnwg5hd3w55iofp58khbp6yv 目录下，同时把该目录下的其他文件删除掉。这个8bnwg5hd3w55iofp58khbp6yv是由AS自动生成的，不能更改。

重新打开AS，会自动解压并生成文件。至此gradle更新完成。

### 7.4 windows下开发与linux下开发的比较。
windows下程序编译运行比在linux下编译运行慢，但最大的优势是在编译时，windows系统会启动一个窗口显示bundle的运行过程，还会提示js的错误，比如变量名错误等，而linux下则没有这个窗口。

## android studio配置

修改android_studio/plugins/android/lib/templates/gradle-projects/NewAndroidProject/root/build.gradle.ftl

![alt](./picture/android-studio-gradle-place.png)

修改以下内容:


![alt](./picture/build-gradel-ftl.png)

```

maven { url'https://maven.aliyun.com/repository/public/'}
maven { url'https://maven.aliyun.com/repository/google/'}
maven { url'https://maven.aliyun.com/repository/jcenter/'}
maven { url'https://maven.aliyun.com/repository/central/'}


```



