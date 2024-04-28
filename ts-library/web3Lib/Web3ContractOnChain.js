class Web3ContractOnChain {
    constructor(web3, abi,scAddr){ //when deploy, scAddr is null
        //console.log('abi',abi);
        this.abi = abi;
        this.scAddr = scAddr;
        this.web3 = web3;
        if(scAddr){
            this.contract = new this.web3.eth.Contract(this.abi,this.scAddr);
        }else{
            this.contract = new this.web3.eth.Contract(this.abi);
        }

    }
    getContractDeployPayload(byteCode,args){
        //console.log('byteCode',byteCode)

        let options=null;

        if(args){
            options={
                data:byteCode,
                arguments:args,
            }

        }else{
            options={
                data:byteCode,
            }

        }
        let payload = this.contract.deploy(options).encodeABI();
        return payload;
    }

    getContractFuncPayload(funcName, args){

        let payload = this.contract.methods[funcName](...args).encodeABI();
        return payload;
    }
    async getPastEvents(event,fromBlock,toBlock){
        let eventArray = await this.contract.getPastEvents(event,{
            fromBlock:fromBlock,
            toBlock:toBlock
        });
        return eventArray;
    }
    async contractFuncCall(funcName, args){
        let result = await this.contract.methods[funcName](...args).call();
        return result;
    }
}

module.exports = Web3ContractOnChain;