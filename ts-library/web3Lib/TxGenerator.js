let Web3 = require('web3');
let web3 = new Web3();
class TxGenerator{
    constructor(){}

    getRawTx(chainId, nonce, from, to, value, data, gas, gasPrice, gasLimit){
        let gasHex = web3.utils.toHex(gas);
        let gasPriceHex = web3.utils.toHex(gasPrice);
        let gasLimitHex = web3.utils.toHex(gasLimit);
        let nonceHex = web3.utils.toHex(nonce);
        let valueHex = web3.utils.toHex(value);
        let chainIdHex = web3.utils.toHex(chainId);
        return {
            nonce:nonceHex,
            from:from,
            to:to,
            value:valueHex,
            data:data,
            gas:gasHex,
            gasPrice:gasPriceHex,
            gasLimit:gasLimitHex,
            chainId:chainIdHex

        }

    }
}
let txGenerator = new TxGenerator();
module.exports = txGenerator;