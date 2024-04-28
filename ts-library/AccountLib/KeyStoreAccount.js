const fs = require('fs');
const keythereum = require('keythereum');

const Web3 = require('web3');
const web3 = new Web3();

class KeyStoreAccount {
    constructor(keystorefile){
        this.keystoreFile = keystorefile;
        this.keystore = null;

    }
    init(){
        try{
            let keystoreFileContent = fs.readFileSync(this.keystoreFile).toString();
            this.keystore = JSON.parse(keystoreFileContent);

        }catch(e){
            console.log('keystore wallet init, e: ',e);
        }

    }
    getAccount(){
        return  ('0x' + this.keystore.address);
    }
    getPrivKeyBuf(passwd){
        const keyObje = {version: this.keystore.version, crypto:this.keystore.crypto};
        //1. private key
        const privatekey = keythereum.recover(passwd,keyObje);
        return privatekey;
    }
    getPrivKeyStr(passwd){
        let privKeyBuf = this.getPrivKeyBuf(passwd);
        let strPrivKey = web3.utils.bytesToHex(privKeyBuf);
        return strPrivKey;

    }

}
module.exports = KeyStoreAccount;
