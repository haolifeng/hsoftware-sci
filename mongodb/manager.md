# 管理
## 导出数据

https://www.mongodb.com/try/download/database-tools

```
mongoexport --host 127.0.0.1 --port 27017 -d dbname -c collection --type json -o file.json

```
example:linux下操作
```
mongoexport --host=127.0.0.1 --port=27017 --db=market --collection=wanKlines --type=json --out=file.json
```

```
mongoimport --host 127.0.0.1 --port 27017 -d dbname -c collection --type json file.json
```

example: windows下操作
```
mongoimport /host:127.0.0.1 /port:27017 /db:market /collection:wanKlines /type:json file.json
```