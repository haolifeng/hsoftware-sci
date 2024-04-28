# 安装
## 安装ts-node和tsc
```
npm install -g ts-node
npm install -g typescript 

```
## 初始化项目
```

mkdir first
cd first
npm init -y
tsc --init


```

## 修改配置文件tsconfig.json
为了开发方便，可以
修改strict为false,
修改allowJs:true
修改resolveJsonModule:true

```
struct:false,
allowJs:true,
resolveJsonModule:true
```

## 运行项目
```
ts-node index.ts
```