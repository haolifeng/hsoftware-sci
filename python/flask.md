# flask

## 安装
```
pip3 install flask
```
## sample
```
from flask import Flask

app = Flask(__name__)
app.debug=True

@app.route("/")
def hello_world():
    return "<p>Hello, World</p>"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

## gunicorn
https://docs.gunicorn.org/en/stable/

### install 
```
pip3 install gunicorn

```