const Tx = require('ethereumjs-tx');
const BaseOffChain = require('../OffChainLib/BaseOffChain');
class Web3OffChain extends BaseOffChain {
    constructor(){
        super();
    }
    async signTransaction(rawTx,buffPriKey){
        const tx = new Tx(rawTx);
        tx.sign(buffPriKey);
        let serializedTx = tx.serialize();
        let serializedData = '0x' + serializedTx.toString('hex');
        return serializedData;
    }

}

module.exports = Web3OffChain;