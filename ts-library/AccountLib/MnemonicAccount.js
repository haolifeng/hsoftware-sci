const ethers = require('ethers');

class MnemonicAccount{
   constructor (mnemonic,derivationPath) {
        this.account = new ethers.Wallet.fromMnemonic(mnemonic,derivationPath);
   }
   getAddress(){
       return this.account.address;
   }
   getStrPriKey(){
        return this.account.privateKey;
   }
   getBuffPriKey(){
       let strPrivateKey = this.account.privateKey;
       let buffPriKey = Buffer.from(strPrivateKey.slice(2),'hex');
       return buffPriKey;
   }
}

module.exports = MnemonicAccount;