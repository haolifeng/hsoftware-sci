# react-native project profile
## 1 创建项目
使用如下命令
```
react-native init <project_name>  --version  <react-native-version-um>
```
such as :
```
react-native init firstProject --version 0.59.3
```
## 2 项目结构
![avatar](https://gitee/haolifengwang/react-native-bestpractice/blob/master/picture/react-native-project-struct.png)

react-native项目本身最终是android项目和iOS项目，android目录和ios目录分别包含android和ios的文件。

## 3 android目录结构

![avatar](https://gitee/haolifengwang/react-native-bestpractice/blob/master/picture/react-native-android-catalog.png)

## 3.1 MainApplication.java
```
package com.two;

import android.app.Application; //Android原生项目

import com.facebook.react.ReactApplication; //react-native的项目
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) { //reactNative
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
```
## 3.2 MainActivity.java
```
package com.two;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "two";
    }
}
```

## AndroidManifest.xml
```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.two">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
        android:windowSoftInputMode="adjustResize">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
    </application>

</manifest>
```

## 4 ios结构

![avatar](https://gitee/haolifengwang/react-native-bestpractice/blob/master/picture/react-native-io-catalog.png)

### 4.1 AppDelegate.h
```
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
```

### 4.2 AppDelegate.m

```
#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"two"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
```

### 4.3 main.m
```
#import <UIKit/UIKit.h>

#import "AppDelegate.h"

int main(int argc, char * argv[]) {
  @autoreleasepool {
    return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
  }
}
```


## 5 command 
``` 
react-native -h
Usage: react-native [options] [command]
Options:
  --version  Print CLI version
  --projectRoot [string] Path to the root of the project
  --reactNativePath [string]  Path to React native
  --verbose                   Increase logging verbosity
  --h, --help                 output usage information

Commands:
  start [options]  starts the webserver
  run-ios [options]  builds your app and starts it on iOS simulator
  run-android [options] builds your app and starts it on a connected Android emulator or device
  new-library [options] generates a native library bridge
  bundle [options] builds the javascript bundle for offline use
  ram-bundle  [options]  builds javascript as a "Random Access Module" bundle for offline use
  eject [options] Re-create the IOS and Android folders and native code 
  link [options] [packageName] scope link command to certain platforms (comm-separated) 
  unlink [options] <packageName>  unlink native dependency

  install [options] <packageName> install and link native dependencies

  unistall [options] <packageName>  uninstall and unlink native dependencies
  upgrade [options] [version] upgrade your app's template files to the specified or last npm version using `rn-diff-purge` project. only valide semver version on  are allowd
  log-android [options] starts adb logcat
  log-ios [options] starts iOS device syslog tail
  dependencies [options] lists dependencies
  info [options] Get relevant version info about OS, toolchain and libraries
  init [options] 
```