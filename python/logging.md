# 日志模块
## 1. logging
logging是python自身携带的模块。
### 1.1 日志级别
+ debug
+ info
+ warning
+ error
+ critical

### 1.2 日志基本模式
+ 使用logging提供的模块级别的函数。
+ 使用logging日志系统的四大组件记录
## 2. logging的基本概念
### 2.1 logger
日志的基本操作对象。使用该对象写入日志。
Logger 持有日志记录器的方法，日志记录器不直接实例化，而是通过模块级函数 logger.getlogger (name) 来实例化,使用相同的名称多次调用 getLogger() 总是会返回对相同 Logger 对象的引用。

创建Logger实例后，可以使用以下方法进行日志级别设置，增加处理器 Handler：

+ logger.setLevel(logging.ERROR) # 设置日志级别为 ERROR，即只有日志级别大于等于 ERROR 的日志才会输出
+ logger.addHandler(handler_name) # 为 Logger 实例增加一个处理器
+ logger.removeHandler(handler_name) # 为 Logger 实例删除一个处理器
### 2.2 handler处理器
将日志记录写入目的地。
### 2.3 Filter过滤器
过滤输出哪些日志
### 2.4 Formatter格式器
指明日志的格式

### 2.5 组件之间的关联关系

+ 日志器（logger）需要通过处理器（handler）将日志信息输出到目标位置，不同的处理器（handler）可以将日志输出到不同的位置；
+ 日志器（logger）可以设置多个处理器（handler）将同一条日志记录输出到不同的位置；
+ 每个处理器（handler）都可以设置自己的过滤器（filter）实现日志过滤，从而只保留感兴趣的日志；
+ 每个处理器（handler）都可以设置自己的格式器（formatter）实现同一条日志以不同的格式输出到不同的地方。  

简明了说就是：日志器（logger）是入口，真正干活儿的是处理器（handler），处理器（handler）还可以通过过滤器（filter）和格式器（formatter）对要输出的日志内容做过滤和格式化等处理操作。

+ Logger 可以包含一个或多个 Handler 和 Filter
+ Logger 与 Handler 或 Fitler 是一对多的关系
+ 一个 Logger 实例可以新增多 个 Handler，一个 Handler 可以新增多个格式化器或多个过滤器，而且日志级别将会继承。

## 3. handler类型
### 3.1 StreamHandler

### 3.2 FileHandler

### 3.3 NullHandler

## 4. Formatter格式器
默认为%Y-%m-%d

## 5. Filter过滤器

## 6. 配置文件的格式

logging使用fileConfig()函数加载配置文件。fileConfig()所能理解的配置文件格式是基于configparser功能的。该文件必须包含[logger],[handlers]和[formatters]等小节，它们通过名称来标识文件中定义的每种类型的实体。对于每个这样的实体，都有单独的小节来标识实体的配置方式。因此，对于[logger]中名为log01的日志记录器，相应的配置详情保存在 [logger_log01] 小节中。 类似地，对于 [handlers] 小节中名为 hand01 的处理器，其配置将保存在名为 [handler_hand01] 的小节中，而对于 [formatters] 小节中名为 form01 的格式化器，其配置将在名为 [formatter_form01] 的小节中指定。 根日志记录器的配置必须在名为 [logger_root] 的小节中指定。
