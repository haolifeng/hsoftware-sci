# watermelondb in react-native

## 1. init react-native project
```
  react-native init watermelondbproj --version=0.59.3
```
## 2. install watermeondb 

### 2.1 install 
```
yarn add @nozbe/watermelondb
yarn add @nozbe/with-observables

```
### 2.2 install babel plugin
install  the Babel plugin for decorators if you haven't already:
```
yarn add --dev @babel/plugin-proposal-decorators

```
or 
```
npm install -D @babel/plugin-proposal-decorators 
 ```
### 2.3 add ES6 decorators support to your .babelrc file
```
{
  "presets":["module:metro-react-native-babel-preset"],
  "plugin":[
    ["@babel/plugin-proposal-decorators",{"legacy":true}]
  ]
}
```
## 3 iOS
### 3.1 add Swift support to your Xcode project:
1.  Open ios/YourAppName.xcodeproj in Xcode
2. Right-click on Your APP Name in the Project Navigator on the left , and click New File...
3. create a single empty Swift file to the project (make sure that Your App Name target is selected when adding), and when Xcode asks, press Create Bridging Header and do not remove Swift file then.

### 3.2 Link WatermelonDB's native library with the Xcode project
you can link WatermelonDB manually or using CocoaPods
#### 3.2.1 manually
1. Open your project in Xcode, right click on Libraries in the Project Navigator on the left and click Add Files to "Your Project Name". Look under "node_module/@nozbe/watermelondb/native/ios" and select "WatermelonDB.xcodeproj"
2. Go to Project settings(top item in the project navigator on the left), select your app name under Target-> Build Phases-> Link Binary With Libraries, and add libWatermelonDB.a 


  