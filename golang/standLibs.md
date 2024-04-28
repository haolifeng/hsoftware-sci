# 标准开发库
## log
```
import (
    "log"
    )
```

该可以提供2种日志功能。一种使用包的直接函数，一种使用Logger类型。
1. 使用Logger类型，使用New函数创建实例。
```
type Logger struct {
	mu        sync.Mutex // ensures atomic writes; protects the following fields
	prefix    string     // prefix on each line to identify the logger (but see Lmsgprefix)
	flag      int        // properties
	out       io.Writer  // destination for output
	buf       []byte     // for accumulating text to write
	isDiscard int32      // atomic boolean: whether out == io.Discard
}

func New(out io.Writer, prefix string, flag int) *Logger {}

func (l *Logger) Println(v ...any)
func (l *Logger) Fatal(v ...any)
...

```
2. 使用log.func方法
```
func Print(v ...any)
func Println(v ...any) 
func Fatalln(v ...any)
...

```

## mongodb
<https://www.mongodb.com/docs/drivers/go/current/quick-start/>
### Requirements
+ Go1.13 or higher. we aim to support the lastest versions of Go.
+ MongoDB 3.6 and higher

### 安装
the recommonded way to get started using the MonogDB Go driver is by using Go modules to install the dependency in your project. this can be done either by importing packages from go.mongodb.org/mongo-driver and having the build step install the dependency or by explicitly running
```
go get go.mongodb.org/mongo-driver/mongo
```
when using a version of Go that does not support modules, the driver can be installed using dep by running

```
dep ensure -add "go.mongodb.org/mongo-driver/mongo"
```

### BSON
MongoDB中的JSON文档被称为BSON（二进制编码的JSON)的二进制表示形式存储。
Go Driver有两种系列用于表示BSON数据：D系列类型和Raw系统类型。
#### D类型
+ D: BSON文档。此类型应用在顺序很重要的场景下，例如MongoDB命令。
+ M: 无序map。除不保留顺序外，与D相同。
+ A: 一个BSON数组
+ E： D中的单个元素。
### 下载驱动
```
go get -v go.mongodb.org/mongo-driver/mongo

```
使用方法
```
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	uri := os.Getenv("MONGODB_URI")
	if uri == "" {
		log.Fatal("You must set your 'MONGODB_URI' environmental variable. See\n\t https://www.mongodb.com/docs/drivers/go/current/usage-examples/#environment-variable")
	}
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))
	if err != nil {
		panic(err)
	}

	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	coll := client.Database("sample_mflix").Collection("movies")
	title := "Back to the Future"

	var result bson.M
	err = coll.FindOne(context.TODO(), bson.D{{"title", title}}).Decode(&result)
	if err == mongo.ErrNoDocuments {
		fmt.Printf("No document was found with the title %s\n", title)
		return
	}
	if err != nil {
		panic(err)
	}

	jsonData, err := json.MarshalIndent(result, "", "    ")
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s\n", jsonData)
}

```