from W3Base import W3Base

class W3Contract(W3Base) :
    def __init__(self, nodeUrl,scAddr, abi):
        super().__init__(nodeUrl)
        self.scInst = self.w3.eth.contract(address=scAddr, abi=abi)
    def fnCall(self, fnName, *args, **kwargs):
        ret = self.scInst.functions[fnName](*args, **kwargs).call()
        return ret
    def buildTransaction(self,fnName ,txOpts, *args):
        return self.scInst.functions[fnName](*args).build_transaction(txOpts)







