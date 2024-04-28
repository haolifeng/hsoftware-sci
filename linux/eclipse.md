# eclipse 操作
## 创建文件

```
cd /usr/share/applications

vim eclipse-rust.desktop
```

## eclipse-rust.desktop 内容

```
[Desktop Entry]
Encoding=UTF-8
Name=Eclipse
Comment=Eclipse IDE
Exec=/home/hlf/Tools/eclipse-rust/eclipse#(eclipse存放路径)
Icon=/home/hlf/Tools/eclipse-rust/icon.xpm#(eclipse存放路径)
Terminal=false
Type=Application
Categories=GNOME;Application;Development;
StartupNotify=true
```