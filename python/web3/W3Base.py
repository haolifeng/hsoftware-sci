from web3 import Web3
from web3.middleware import geth_poa_middleware

class W3Base:
    def __init__(self,nodeUrl):
        self.w3 = Web3(Web3.HTTPProvider(nodeUrl))
        self.w3.middleware_onion.inject(geth_poa_middleware, layer=0)

    def getBalance(self, address):
        balance = self.w3.eth.get_balance(address)
        return balance
    def getTx(self,txhash):
        tx = self.w3.eth.get_transaction(txhash)
        return tx
    def getHeigh(self):
        height = self.w3.eth.get_block_number()
        return height
    def sendRawTransaction(self, signedTx):
        txHash = self.w3.eth.send_raw_transaction(signedTx)
        return txHash
    def getTxReceipt(self,txHash):
        txReceipt = self.w3.eth.wait_for_transaction_receipt(txHash)
        return txReceipt
    def signTransaction(self,tx, privateKey):
        signedTx = self.w3.eth.account.sign_transaction(tx, privateKey)
        return signedTx
    def getTransactionCount(self,account):
        count = self.w3.eth.get_transaction_count(account)
        return count
