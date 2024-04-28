# react-web-app and react-native-webview
## 1 安装react-web-app环境
在react中，通常使用redux和mobx两种机制进行状态管理。我经过仔细分析之后，我选择使用mobx进行状态管理，原因是mobx可以使用面向对象的编程方式，而redux则没有。建议大家都使用mobx这种方式。阿里巴巴的umijs框架使用的是redux方式，不好，这也是我拒绝umijs的原因。
### 1.1 安装 create-react-app并创建项目
安装create-react-app脚手架
```
npm install -g create-react-app
```
创建项目
```
create-react-app myapp
```
执行eject，显示隐藏的依赖项目
```
cd myapp
yarn eject or npm eject
```
该步骤主要用于配置mobx的装饰符。此步骤在没有修改和添加任何文件之前执行。

## 2 安装mobx
### 安装@babel/plugin-proposal-decorators
使用装饰符功能
```
npm install @babel/plugin-proposal-decorators

```
### 安装mobx和mobx-react
```
npm install mobx mobx-react or yarn add mobx mobx-react
```

### 配置package.json
在package.json中，添加：
```
"babel": {
    "plugins": [ //--添加部分
      [
        "@babel/plugin-proposal-decorators",  
        {
          "legacy": true
        }
      ]
    ],
    "presets": [
      "react-app"
    ]
  }
}

```

## 3 根据需要安装其他库
根据需要添加其他库：比如element-react组件库，watermelondb数据库等。
## 4 dev运行
```
npm run start or yarn start 
```
## 5 build
修改package.json文件，在文件中添加

```
    "homepage":"./",
```
执行命令编译
```
yarn build 
```
在项目目录下生成build目录，将该目录拷贝到tomcat或其他服务器中即可运行。
