# react-native link执行后对文件的修改
在react-native link命令执行后，会将模块连接到原生代码，即会修改原生文件。我们使用react-native-webview模块为例，研究改变的内容。

## 1 android
### 1.1执行如下命令
```
npm install react-native-webview@5.1.0
react-native link
```
### 1.2变化文件
#### 1.2.1 settings.gradle
```
rootProject.name = 'two'
include ':react-native-webview'
project(':react-native-webview').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-webview/android')

include ':app'
```

#### 1.2.2 app/build.gradle
```
...
dependencies {
    implementation project(':react-native-webview')
    implementation fileTree(dir: "libs", include: ["*.jar"])
    implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
    implementation "com.facebook.react:react-native:+"  // From node_modules
}
...

```

#### 1.2.3 MainApplication.java
```
...
import com.reactnativecommunity.webview.RNCWebViewPackage;
...
public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
      ...
          @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNCWebViewPackage()
      );
    }
    ...
  }
  ...
}

```
## ios
iOS主要是将libRNWebView.a连接到库中，修改了project.pbxproj文件内容.
![avatar](https://github.com/haolifeng/react-native-bestpractice/blob/master/picture/react-native-link-io-file-change.png)
