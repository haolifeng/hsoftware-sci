# web.py
## install 
```
pip install web.py
```

## 简介
web.py也有模板，可以编写界面程序

## sample
```

import web


urls = (
    '/', 'index'   # one line to one class
)

class index:
    def GET(self):
        return "Hello, world!"

if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()
```

## deploy

https://docs.gunicorn.org/en/stable/