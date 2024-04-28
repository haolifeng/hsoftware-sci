import {ethers} from 'ethers';
import AccountWallet from "./AccountWallet";
class MultiAccountWallet {
    private mnemonicWords:string;
    private walletSize:number;
    private basePath:string;
    private walletArray:AccountWallet[];
    private leader:AccountWallet;
    constructor(_words:string, _walletSize:number, _basePath:string){
        this.mnemonicWords = _words;
        this.walletSize = _walletSize;
        this.basePath = _basePath;
    }
    init(){
        for(let i = 0; i< this.walletSize; i++){
            let usePath = this.basePath + i;
            let wallet = ethers.Wallet.fromMnemonic(this.mnemonicWords, usePath);
            let accountWallet = new AccountWallet(wallet);
            this.walletArray.push(accountWallet);
        }
        this.leader = this.walletArray[0];
    }
    getSize():number{ return this.walletSize};
    getWalletByIndex(index:number):AccountWallet{
        return this.walletArray[index];
    }
    getAllWallet():AccountWallet[]{return this.walletArray;}
    async connectProvider(provider:ethers.providers.JsonRpcProvider){
        this.walletArray.forEach((wallet, index)=>{
            wallet.connectProvider(provider);

        })
    }
    async getAllBalance(){
        for(let i =0; i< this.walletArray.length;i++){
            const wallet = this.walletArray[i];
            let balance = await wallet.getBalance();
            console.log('balance: ', balance);
        }
    }
}