import axios from 'axios';
import tunnel from 'tunnel';

async run(){
        const agent = tunnel.httpsOverHttp({
            proxy: {
                host: '127.0.0.1',
                port: 49836,
            }
        });
        let resp = await axios.get(this.compoundApi,{
            httpsAgent: agent,
            proxy: false,
        });

        if(resp && resp.data){
            let accountData = resp.data;
            console.log('resp.data: ', accountData);
        }



    }
