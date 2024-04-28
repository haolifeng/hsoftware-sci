import web3

from W3Contract import W3Contract

class ERC20(W3Contract):
    def __init__(self, nodeUrl, scAddr):
        abifile = open('abi/erc20.json',"r")
        abi =  abifile.read()
        abifile.close()
        super().__init__(nodeUrl, scAddr, abi)
    def name(self):
        ret = self.fnCall("name")
        return ret
    def balanceOf(self,address):
        ret = self.fnCall("balanceOf", account=address)
        return ret
    def transfer(self,nonce, pk, fromAddr, to, value):
        txOpts={"from":fromAddr, "nonce": nonce}
        rawTx = self.buildTransaction("transfer",txOpts, to,value)
        print("payload: ", rawTx)
        #rawTx = self.scInst.functions["transfer"](to, value).build_transaction(txOpts)
        #print("rawTx: ", rawTx)
        signedTx = self.signTransaction(rawTx,pk)
        print("signedTx: ", signedTx)
        tx_hash = self.sendRawTransaction(signedTx.rawTransaction)
        return web3.Web3.to_hex(tx_hash)

if __name__ == "__main__":
    import config
    import account
    erc20 = ERC20(config.nodeUrl,"0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D")
    #print(erc20.name())
    #print(erc20.balanceOf("0xEF48C3AB7f184e469504Bdbd9C07883Ab4427c66"))
    account2 = '0xdC484B57a5CC0563b42C2e3D37466b14186f501b'
    fromAddr = account.admin.address
    pk = account.admin.key
    nonce = erc20.getTransactionCount(fromAddr)
    txHash = erc20.transfer(nonce, pk, fromAddr, account2, 1000000000000000000)

    print(txHash)




