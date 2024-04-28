import {ethers } from 'ethers'
class AccountWallet {
    private wallet:ethers.Wallet;
    constructor(wallet:ethers.Wallet){
        this.wallet = wallet;
    }
    getUnderlyinWallet(){return this.wallet};
    connectProvider(provider:ethers.providers.JsonRpcProvider){
        this.wallet.connect(provider);
    }
    async getBalance(){
        let balance = await this.wallet.getBalance();
        return balance;
    }

}
export default AccountWallet;