# maven

## install
### 全局配置，设置本地仓库，默认为<user>/.m2/


在<maven_home>/conf/setting.xml中配置aliyun , mirror

```
   <mirror>
	<id>aliyunmaven</id>
	<mirrorOf>*</mirrorOf>
	<name>阿里云公共仓库</name>
	<url>https://maven.aliyun.com/repository/public</url>
	</mirror>
```

## 创建项目
首先配置ide的maven配置


archetype是应用类型，一般使用maven-archetype-quickstart类型。如果使用IDE（idea, or eclipse)需要从maven远程仓库中同步包。


## jar 可执行包

```
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-jar-plugin</artifactId>
      <version>3.2.0</version>
      <configuration>
        <archive>
          <manifest>
            <mainClass>com.example.MainClass</mainClass> <--package.className-- >
          </manifest>
        </archive>
      </configuration>
    </plugin>
  </plugins>
</build>
```

## 运行本地代码
pom.xml文件配置了正确的maven-compiler-plugin来编译你的代码，并且配置了maven-exec-plugin来运行编译后的类。

以下是一个简单的pom.xml配置示例：
```
<project>
    <!-- ... 其他配置 ... -->
 
    <build>
        <plugins>
            <!-- 配置编译插件 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
 
            <!-- 配置exec插件运行代码 -->
            <plugin>
                <groupId>org.codehaus.mojo</groupId>
                <artifactId>exec-maven-plugin</artifactId>
                <version>1.6.0</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>java</goal>
                        </goals>
                    </execution>
                </executions>
                <configuration>
                    <mainClass>com.yourcompany.MainClass</mainClass>
                    <arguments>
                        <argument>arg0</argument>
                        <argument>arg1</argument>
                        
                    </arguments>
                </configuration>
            </plugin>
        </plugins>
    </build>
 
    
</project>
```

在上面的配置中，<mainClass>标签内应该填写你的主类全限定名（包括包名）。<arguments>标签内可以配置传递给主类main方法的参数。

要运行配置好的代码，你可以在命令行使用以下Maven目标
```sh
mvn compile exec:java
```
这将会编译你的代码，然后运行配置好的主类。如果你想要在运行前清理（删除target目录），可以使用以下命令
```sh
mvn clean compile exec:java
```
请确保你的主类包含一个public static void main(String[] args)方法，这是Java程序的入口点。