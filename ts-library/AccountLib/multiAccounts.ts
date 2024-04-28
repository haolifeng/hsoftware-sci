import { ethers } from 'ethers';

class MultiAccounts {
    private basePath:string = "m/44\'/60\'/0\'/0/";
    private words:string;
    private amount:number;
    private wallets:ethers.Wallet[];
    public admin: ethers.Wallet | undefined;
    constructor(words:string){
        this.words = words;
        this.amount = 0;
        this.wallets = [];
    }
    init(amount:number){
        this.amount = amount;
        for(let i = 0; i< this.amount; i++){
            let userPath = this.getWalletPath(i);

            console.log('userPath: ', userPath);

            let wallet = ethers.Wallet.fromMnemonic(this.words,userPath);
            this.wallets.push(wallet);
        }
        this.admin = this.wallets[0];
    }
    getAccountSize(){
        return this.amount;
    }

    getWalletPath(index:number){
        return this.basePath +index;
    }
    getWallet(index:number){
        return this.wallets[index];
    }
    getAlletWallet(){
        return this.wallets;
    }

}

export default MultiAccounts;