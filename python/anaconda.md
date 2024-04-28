# Anaconda
世界上最流行的数据可以计算平台。
## install
<https://www.anaconda.com/>

支持windows, linux, macOS版本，下载相应的版本之间安装即可。提供界面安装程序，根据提示安装。注意要勾选添加到path的选项。  
我这里主要讲linux版的安装过程。


1. 前往官方下载页面下载。有两个版本可供选择：Python 3.6 和 Python 2.7，我下载的是前者。选择版之后点击“64-Bit Command-Line Installer”进行下载。

2. 完成下载之后，在mac的Launchpad中找到“其他”并打开“终端”。

▫ 安装Python 3.6： bash ~/Downloads/Anaconda3-5.0.1-MacOSX-x86_64.sh

▫ 安装Python 2.7： bash ~/Downloads/Anaconda2-5.0.1-MacOSX-x86_64.sh

注意：
首词bash也需要输入，无论是否用的Bash shell。
如果你的下载路径是自定义的，那么把该步骤路径中的 ~/Downloads 替换成你自己的下载路径。
如果你将第1步下载的 .sh 文件重命名了，那么把该步骤路径中的 Anaconda3-5.0.1-MacOSX-x86_64.sh 或 Anaconda2-5.0.1-MacOSX-x86_64.sh 替换成你重命名后的文件名。
▫ 强烈建议：不要修改文件名。如果重命名，使用英文进行命名。

3. 安装过程中，看到提示“In order to continue the installation process, please review the license agreement.”（“请浏览许可证协议以便继续安装。”），点击“Enter”查看“许可证协议”。

4. 在“许可证协议”界面将屏幕滚动至底，输入“yes”表示同意许可证协议内容。然后进行下一步。

5. 安装过程中，提示“Press Enter to confirm the location, Press CTRL-C to cancel the installation or specify an alternate installation directory.”（“按回车键确认安装路径，按'CTRL-C'取消安装或者指定安装目录。”）如果接受默认安装路径，则会显示 PREFIX=/home/<user>/anaconda<2 or 3> 并且继续安装。安装过程大约需要几分钟的时间。

建议：直接接受默认安装路径。
6. 安装器若提示“Do you wish the installer to prepend the Anaconda install location to PATH in your /home/<user>/.bash_profile ?”（“你希望安装器添加Anaconda安装路径在 /home/<user>/.bash_profile 文件中吗？”），建议输入“yes”。

注意：
① 路径 /home/<user>/.bash_profile 中 <user> 即进入到家目录后你的目录名。

② 如果输入“no”，则需要手动添加路径。添加 export PATH="/<path to anaconda>/bin:$PATH" 在 .bashrc 或者 .bash_profile 中。其中， <path to anaconda> 替换为你真实的Anaconda安装路径。

7. 当看到“Thank you for installing Anaconda!”则说明已经成功完成安装。

8. 关闭终端，然后再打开终端以使安装后的Anaconda启动。

9. 验证安装结果。可选用以下任意一种方法：

① 在终端中输入命令 conda list ，如果Anaconda被成功安装，则会显示已经安装的包名和版本号。

## 在windows下powerShell
```
conda init powershell
```

## conda
conda是一个开源的包管理系统和环境管理系统。在安装完anaconda后就安装完毕。  

+  https://docs.conda.io/en/latest/

