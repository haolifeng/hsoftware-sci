const wanUtil = require('wanchain-util');
const wanTx = wanUtil.wanchainTx;
const BaseOffChain = require('../OffChainLib/BaseOffChain');
class LanOffChain extends BaseOffChain{
    constructor(){
        super();
    }
    signTransaction(tx, privateKey){
        try {
            let json = JSON.parse(tx);
            let signTx = new wanTx({
                Txtype: json.txType,
                nonce: json.nonce,
                gasPrice: json.gasPrice,
                gasLimit: json.gasLimit,
                to: json.to,
                value: json.value,
                data: json.data,
            });
            signTx.sign(privateKey);

            //var str = JSON.stringify(signtx);
            let signtx = '0x' + signTx.serialize().toString('hex');
                return signtx;;
            }catch (e) {
                console.log('e: ',e);
                return null;
            }
    }
}

let lanOffChain = new LanOffChain();

module.exports = lanOffChain;



