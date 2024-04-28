# PyMongo

## 相关资料
https://pymongo.readthedocs.io/en/stable/tutorial.html
## 安装
```
pip install pymongo
```
## 创建链接
```
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
or
client = MongoClient('mongodb://localhost:27017/')
```
## 创建数据库

```
db = client.test_database
or
db = client['test-database']
```
## 创建集合
```
collection = db.test_collection
or
collection = db['test-collection']
```
## 文档
### insert_one
```
import datetime
post = {"author": "Mike",
        "text": "My first blog post!",
        "tags": ["mongodb", "python", "pymongo"],
        "date": datetime.datetime.utcnow()}
posts = db.posts
post_id = posts.insert_one(post)        
```

### find_one
```
posts.find_one()

posts.find_one({"author": "Mike"})
```

### insert_many
```
new_posts = [{"author": "Mike",
              "text": "Another post!",
              "tags": ["bulk", "insert"],
              "date": datetime.datetime(2009, 11, 12, 11, 14)},
             {"author": "Eliot",
              "title": "MongoDB is fun",
              "text": "and pretty easy too!",
              "date": datetime.datetime(2009, 11, 10, 10, 45)}]
result = posts.insert_many(new_posts)
```
### find()
find有很多参数，包括：
+ filter
+ projection
+ skip
+ limit
+ no_cursor_timeout
+ cursor_type
+ sort
+ allow_partial_results
+ oplog_replay
+ batch_size
+ collation
+ hint
+ max_scan
+ max_time
+ max
+ min
+ return_key
+ show_record_id
+ snapshot
+ comment
+ session
+ allow_disk_use


```
find(filter=None, projection=None, skip=0, limit=0, no_cursor_timeout=False, cursor_type=CursorType.NON_TAILABLE, sort=None, allow_partial_results=False, oplog_replay=False, batch_size=0, collation=None, hint=None, max_scan=None, max_time_ms=None, max=None, min=None, return_key=False, show_record_id=False, snapshot=False, comment=None, session=None, allow_disk_use=None);
posts.find()
```

### count_documents
```
posts.count_documents({})
posts.count_documents({"author": "Mike"})
```

### 范围查询
```
posts.find({"date": {"$lt": d}}).sort("author")
```

### update_one
```
posts.update_one({"_id":xxx}, {"$set":{
        "author":"TOM",
}})
```
参数
+ filter ：与要更新的文档匹配的查询。

+ update ：要应用的修改。

+ upsert （可选）：如果 True ，如果没有与筛选器匹配的文档，则执行插入。

+ bypass_document_validation ：（可选）如果 True ，允许写入选择退出文档级验证。默认为 False . 此选项仅在MongoDB 3.2及更高版本上受支持。

+ collation （可选）：的实例 Collation . 此选项仅在MongoDB 3.4及更高版本上受支持。

+ array_filters （可选）：筛选器列表，指定应应用更新的数组元素。此选项仅在MongoDB 3.6及更高版本上受支持。

+ hint （可选）：用于支持由字符串名称指定的查询谓词，或使用与传递给的相同格式指定的查询谓词 create_index() （例如） [('field', ASCENDING)] ). 此选项仅在MongoDB 4.2及更高版本上受支持。

+ session （可选）：a ClientSession .

返回 : 的实例 UpdateResult .

### update_many
```
posts.update_many({"_id":xxx}, {"$set":{
        "author":"TOM",
}})
```
参数
+ filter ：与要更新的文档匹配的查询。

+ update ：要应用的修改。

+ upsert （可选）：如果 True ，如果没有与筛选器匹配的文档，则执行插入。

+ bypass_document_validation （可选）：如果 True ，允许写入选择退出文档级验证。默认为 False . 此选项仅在MongoDB 3.2及更高版本上受支持。

+ collation （可选）：的实例 Collation . 此选项仅在MongoDB 3.4及更高版本上受支持。

+ array_filters （可选）：筛选器列表，指定应应用更新的数组元素。此选项仅在MongoDB 3.6及更高版本上受支持。

+ hint （可选）：用于支持由字符串名称指定的查询谓词，或使用与传递给的相同格式指定的查询谓词 create_index() （例如） [('field', ASCENDING)] ). 此选项仅在MongoDB 4.2及更高版本上受支持。

+ session （可选）：a ClientSession .

返回: 
+ 的实例 UpdateResult .

### delete_one
```
result = db.test.delete_one({'x': 1})
```
参数
+ filter ：与要删除的文档匹配的查询。

+ collation （可选）：的实例 Collation . 此选项仅在MongoDB 3.4及更高版本上受支持。

+ hint （可选）：用于支持由字符串名称指定的查询谓词，或使用与传递给的相同格式指定的查询谓词 create_index() （例如） [('field', ASCENDING)] ). 此选项仅在MongoDB 4.4及更高版本上受支持。

+ session （可选）：a ClientSession .

返回
+ 的实例 DeleteResult .
### delete_many
```
result = db.test.delete_many({'x': 1})
```
参数
+ filter ：与要删除的文档匹配的查询。

+ collation （可选）：的实例 Collation . 此选项仅在MongoDB 3.4及更高版本上受支持。

+ hint （可选）：用于支持由字符串名称指定的查询谓词，或使用与传递给的相同格式指定的查询谓词 create_index() （例如） [('field', ASCENDING)] ). 此选项仅在MongoDB 4.4及更高版本上受支持。

+ session （可选）：a ClientSession .

返回
+ 的实例 DeleteResult .
## 建立索引
```
result = db.posts.create_index([('user_id', pymongo.ASCENDING)],
                                  unique=True)
```