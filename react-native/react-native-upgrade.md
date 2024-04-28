# react-native upgrade

## Android Device File Explorer

app的位置在/data/user/0/data/下, 如下图： 
![app位置](https://gitee.com/haolifengwang/react-native-best-practice/picture/dappfile.png)


## react-native bundle命令
```
 react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```
该命令会在./android/app/src/main/assets/中创建index.android.bundle文件。并将相关引用到的资源拷贝到./android/app/src/main/res中。所以使用命令方式启动的应用程序，与使用android studio启动的程序可能不同。   
该命令会把所有的js文件合并到index.android.bundle文件中，将资源文件拷贝到android/app/src/main/res中，另外如果是压缩文件则将生成文件放到raw中。例如：src_screens_dapplatform_defaultdapps_dapp_pages.zip.

## bundle命令说明
```
react-native bundle --help
react-native bundle [options]                                                                                                              
                                                                                                                                           
builds the javascript bundle for offline use                                                                                               
                                                                                                                                           
Options:                                                                                                                                   
  --entry-file <path>                Path to the root JS file, either absolute or relative to JS root# 在本次使用的都是相对路径，相对于本命令。                                     
  --platform [string]                Either "ios" or "android" (default: "ios")                                                            
  --transformer [string]             Specify a custom transformer to be used                                                               
  --dev [boolean]                    If false, warnings are disabled and the bundle is minified (default: true)                            
  --minify [boolean]                 Allows overriding whether bundle is minified. This defaults to false if dev is true, and true if dev is false. Disabling minification can be useful for speeding up production builds for testing purposes.                                      
  --bundle-output <string>           File name where to store the resulting bundle, ex. /tmp/groups.bundle                                 
  --bundle-encoding [string]         Encoding the bundle should be written in (https://nodejs.org/api/buffer.html#buffer_buffer). (default: "utf8")
  --max-workers [number]             Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the number of the cores available on your machine.
  --sourcemap-output [string]        File name where to store the sourcemap file for resulting bundle, ex. /tmp/groups.map
  --sourcemap-sources-root [string]  Path to make sourcemap's sources entries relative to, ex. /root/dir
  --sourcemap-use-absolute-path      Report SourceMapURL using its full path
  --assets-dest [string]             Directory name where to store assets referenced in the bundle
  --reset-cache                      Removes cached files
  --read-global-cache                Try to fetch transformed JS code from the global cache, if configured.
  --config [string]                  Path to the CLI configuration file
  --projectRoot [string]             Path to the root of the project
  --reactNativePath [string]         Path to React Native
  -h, --help                         output usage information
```
## 制作热更新包
```
mkdir jsBundle
cp ./android/app/src/main/assets/index.android.bundle ./jsBundle/
cp -r ./android/app/src/main/assets/fonts/ ./jsBundle/
cp -r ./android/app/src/main/res/* ./jsBundle/
zip -r jsandroid.zip jsBundle/
```
将资源和index.android.bundle文件拷贝到jsBundle目录中，并打包为jsandroid.zip压缩包文件。