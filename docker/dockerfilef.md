# Dockefile文件
Dockerfile文件是一个文本文件，名称就是Dockefile。可以指定名称。Dockerfile的指令都是大写
## COPY
复制指令，从上下文目录中复制文件或者目录到容器里指定路径。目录和文件使用相同的

```
COPY [--chown=<user>:<group>] <源路径1>...  <目标路径>
COPY [--chown=<user>:<group>] ["<源路径1>",...  "<目标路径>"]
```
<源路径>：源文件或者源目录，这里可以是通配符表达式，其通配符规则要满足 Go 的 filepath.Match 规则
<目标路径>：容器内的指定路径，该路径不用事先建好，路径不存在的话，会自动创建。
源文件可以使用相对路径，二目标路径使用绝对路径。
目录要一个一个的拷贝。

## ADD
ADD 指令和 COPY 的使用格类似（同样需求下，官方推荐使用 COPY）。功能也类似，不同之处如下：

ADD 的优点：
+ 在执行 <源文件> 为 tar 压缩文件的话，压缩格式为 gzip, bzip2 以及 xz 的情况下，会自动复制并解压到 <目标路径>。
+ ADD 的缺点：在不解压的前提下，无法复制 tar 压缩文件。会令镜像构建缓存失效，从而可能会令镜像构建变得比较缓慢。具体是否使用，可以根据是否需要自动解压来决定。

## CMD
类似于 RUN 指令，用于运行程序。在docker run时运行。

支持3中格式：  
CMD [“executable”,”param1”,”param2”] 使用exec执行，推荐方式。  
CMD command param1 param2 在/bin/sh中执行，提供给需要交互的应用。  
CMD [“param1”,”param2“]提供给ENTRYPOINT的默认参数。  
指定启动容器时执行的命令，每个Dockerfile只能有一条CMD命令。如果指定了多条命令，只有最后一条会被执行。  
如果用户启动容器时指定了运行的命令，则会覆盖掉CMD指令的命令。
## RUN
构建时执行
格式为  
RUN "commmand" 或者  
RUN ["executable", "param1", "param2"].
前者将在shell终端中运行命令，即/bin/sh -c; 后者则使用exec执行。
每一条RUN指令将在当前镜像基础上执行指定命令，并提交为新的镜像。当命令较长是可以使用\来换行

## WORKDIR
为后续的RUN,CMD,ENTRYPOINT指令配置工作目录。  
可以使用多个WORKDIR指令，后续命令如果参数时相对路径，则会基于之前命令指定的路径。例如：  
```
WORKDIR /a  
WORKDIR b  
WORKDIR C  
RUN pwd
```
则最终路径为/a/b/c

## ENTRYPOINT

有2种格式：
ENTRYPOINT ["executable", "param1", "param2"]
ENTRYPOINT command param1 param2 (shell中执行)
配置容器启动后执行的命令，并且不可被docker run 提供的参数覆盖。
每一个Dockerfile中只能有一个ENTRYPOINT， 当指定多个ENTRYPOINT时，只有最后一个生效。

说明：这些参数都是hardcode中。与CMD配合，可以接受docker run提供的参数。如果docker run提供参数则默认使用CMD提供的参数。字符串直接拼接