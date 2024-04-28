const Web3 = require('web3');

class Web3Http {
    constructor(url){
        this.web3 = new Web3(new Web3.providers.HttpProvider(url));
        this.web3.eth.handlRevert = true;
    }
    getWeb3(){
        return this.web3;
    }
}
module.exports = Web3Http;