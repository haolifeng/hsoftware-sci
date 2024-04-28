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