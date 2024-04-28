# gralde
## 1. 安装
### 环境变量设置
```
export JAVA_HOME=/home/hlf/Libs/jdk-17.0.0+9
export CLASS_PATH=.
export GRADLE_HOME=/home/hlf/Libs/gradle-8.5
export GRADLE_USER_HOME=/home/hlf/Libs/repo_gradle
export PATH=$PATH:$HOME/Libs/node16/bin:$JAVA_HOME/bin:$GRADLE_HOME/bin

```

## 2. 常用Gradle任务
### init
```
gradle init --type java-application
```

### build

```
gradle build
```

### run
```
gradle run
```
### test
```
gradle test
```
### clean
```
gradle clean
```

## 3. gradle构建脚本基础 build.gradle文件

### 3.1 tasks

```
tasks.register('mytask') {
    doLast {
        println "this is a custom task"
    }
}
```

### 3.2 dependencies

```
tasks.register('taskA') {
    doLast {
        println 'Task A is executed.'
    }
}

tasks.register('taskB') {
    dependsOn 'taskA'
    doLast {
        println 'Task B is executed.'
    }
}
```
`taskB`依赖于`taskA`。当你执行`taskB`时，首先会执行`taskA`。

### 3.3 plugins

```
plugins {
    id 'java' // Java插件，为Java项目提供编译、测试和打包的任务
    id 'application' // Application插件，可以创建可运行的应用程序，提供了‘run’任务来运行应用
    id 'war' // War插件，用于构建Java Web应用程序，提供了生成WAR文件的任务
}

```

+ java插件。提供了java项目的核心任务，如*complileJava*来编译Java源代码和*test*来运行测试
+ Application插件。提供了创建可执行Java应用程序所需的功能。最重要的是，它添加了`run`任务，允许你直接从Gradle运行你的应用.
+ War插件。用于生成WAR文件，这是Java EE和Servlet容器通常使用的部署格式。
+ 其他插件

## 4. 依赖管理
### 4.1 仓库依赖
声明依赖的仓库
```
repositories {
    mavenCentral()
}
```
#### 4.2 库依赖
```
dependencies {
    implemenation 'com.google.code.gson:gson:2.8.6'
}
```
其中，`implementation`表示这是一个主要的运行时依赖。

## 5. 使用插件
### 5.1 常见插件
+ Java 插件: 这是最常用的插件之一，它为Java项目提供了编译、测试和打包的功能。
```
    plugins {
        id 'java'
    }
```

+ Application 插件: 如果你正在构建一个应用程序，这个插件可以帮助你打包并运行它。
```
    plugins {
        id 'application'
    }
```

+ War 插件: 为Web应用程序提供支持，使你能够构建WAR文件。
```
    plugins {
        id 'war'
    }
```
### 5.2 如何使用插件

+ 从Gradle插件门户应用（目前主流做法，简洁）:

```
    plugins {
        id 'org.springframework.boot' version '2.5.4'
    }
```

+ 从Maven仓库应用:
```
    buildscript {
        repositories {
            mavenCentral()
        }
        dependencies {
            classpath("org.springframework.boot:spring-boot-gradle-plugin:2.5.4")
        }
    }
```

    apply plugin: 'org.springframework.boot'
+ 从本地文件应用:
    ```
    apply from: 'other.gradle'
    ``````
## 6. jar 
在build.gradle文件中添加jar中的配置
```
plugins {
    id 'java'
}

group = 'org.example'
version = '1.0-SNAPSHOT'

repositories {
    mavenCentral()
}

dependencies {
    testImplementation platform('org.junit:junit-bom:5.9.1')
    testImplementation 'org.junit.jupiter:junit-jupiter'

}

test {
    useJUnitPlatform()
}

jar {
    manifest {
        attributes(
                'Main-Class': 'org.example.Main'
        )
    }
}
```

## 7. 使用国内镜像
### 7.1 全局使用
在gradle安装目录例如"/home/hlf/Libs/gradle-8.5/init.d"下创建文件init.gradle
```

allprojects {
    repositories { 
        mavenLocal() 
        maven { name "Alibaba" ; url "https://maven.aliyun.com/repository/public" } 
        maven { name "Bstek" ; url "https://nexus.bsdn.org/content/groups/public/" } 
        mavenCentral()
    }
    buildscript {
        repositories { 
            maven { name "Alibaba" ; url 'https://maven.aliyun.com/repository/public' } 
            maven { name "Bstek" ; url 'https://nexus.bsdn.org/content/groups/public/' } 
            maven { name "M2" ; url 'https://plugins.gradle.org/m2/' }
        }
    }
}
```

### 7.2 项目内使用
在build.gradle中repositories中添加
```
repositories {
    maven {
        url 'https://maven.aliyun.com/repository/public/'
    }
    mavenLocal()
    mavenCentral()
}

```

## 8 注意
gradlew是对gradle的包装。有些gradle的功能gradlew使用不了，例如run.