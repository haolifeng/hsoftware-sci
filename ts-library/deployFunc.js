let Web3Http = require('./web3Lib/Web3Http');
let Web3OnChain = require('./web3Lib/Web3OnChain');
let Web3OffChain = require('./web3Lib/Web3OffChain');

let web3ContractOffChain = require('./web3Lib/web3ContractOffChain');
let txGenerator =  require('./web3Lib/TxGenerator');
async function deployFunc(nodeUrl, abi,bytecode, parmas, chainId, account, privateKey, gas){
    try{
        let web3Http = new Web3Http(nodeUrl);
        let web3OnChain = new Web3OnChain(web3Http.getWeb3());
        let web3OffChain = new Web3OffChain();
        
        let scInstanceOffChain = new web3ContractOffChain(abi,null);

        let payload = scInstanceOffChain.getContractDeployPayload(bytecode,parmas);
        let gasPrice = await web3OnChain.getGasPrice();
        let nonce = await web3OnChain.getNonce(account);
        let rawTx = txGenerator.getRawTx(chainId,nonce,account,'',0,payload,gas,gasPrice,gas);
        let signedTx = await web3OffChain.signTransaction(rawTx,privateKey);

        let receipt = await web3OnChain.sendSignedTransaction(signedTx);
        console.log('deploy -- receipt: ', receipt);
        return receipt;

    }catch (e) {
        console.log('deployFunc -- e: ',e);

    }

}
module.exports = deployFunc;