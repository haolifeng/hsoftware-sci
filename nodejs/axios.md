# axios使用的一些技巧
## 使用代理
axios通过代理，使用get获取数据。  
```
import axios from 'axios'
import tunnel from 'tunnel'

const agent = tunnel.httpsOverHttp({
    proxy:{
        host: '127.0.0.1',
        port:490000        //my private proxy http and port
    }
});

let resp = await axios.get("<your url>",{
            httpsAgent: this.agent,
            proxy: false,
        });

```


