import Web3 from "web3";

class ScEvents{
    private nodeUrl:string;
    private abi:any;
    private scAddr:string;
    private provider:any;
    private web3:Web3;
    private scInstance:any;
    constructor(nodeUrl, abi, scAddr){
        this.nodeUrl = nodeUrl;
        this.abi = abi;
        this.scAddr = scAddr;

        this.provider = new Web3.providers.HttpProvider(this.nodeUrl);
        this.web3 = new Web3(this.provider);
        this.scInstance = new this.web3.eth.Contract(this.abi, this.scAddr);

    }
    async getEvents(blockNumber:number,filterEvents:string[] = [],filterOps:any = null){

        let allEvents:any;
        if(filterOps){
            allEvents = await this.scInstance.getPastEvents('allEvents',{
                filter:filterOps,
                fromBlock:blockNumber,
                toBlock:blockNumber,
            });
        }else{
            allEvents = await this.scInstance.getPastEvents('allEvents',{
                fromBlock:blockNumber,
                toBlock:blockNumber,
            });
        }

        if(filterEvents.length === 0){
            return allEvents;
        }else{
            let newEvents = allEvents.filter((event)=>{
                return filterEvents.includes(event.event);
            })

            return newEvents;
        }

    }
}

export default ScEvents;