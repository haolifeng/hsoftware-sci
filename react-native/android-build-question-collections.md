# 1 questions 
## 1.1 build-tool 32.0.0 is missing Dx

```
Build-tool 31.0.0 is missing DX  or  Build-tool 32.0.0 is missing DX 
```

解决方法有：

1. build tool版本改为30。（ 将*.gradle文件中的buildToolsVersion 改为30）  
2. 把build-tools\30.0.0目录下的dx.bat和lib/dx.jar文件，复制到build-tools\32.0.0目录。  
3. 把build-tools\32.0.0目录下的d8.bat和lib/d8.jar文件，分别复制改名为dx.bat以及lib/d8.jar。  
4. 升级Android Gradle 版本到7.0以上  
