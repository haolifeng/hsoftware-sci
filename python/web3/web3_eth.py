import config
from web3 import Web3
from web3.middleware import geth_poa_middleware
w3 = Web3(Web3.HTTPProvider(config.nodeUrl))
w3.middleware_onion.inject(geth_poa_middleware,layer=0)
if __name__ == "__main__":
    #block = w3.eth.get_block('latest')
    #print(block)
    balance = w3.eth.get_balance('0xEF48C3AB7f184e469504Bdbd9C07883Ab4427c66')
    print(balance)
    print(Web3.from_wei(balance, 'ether'))
    height = w3.eth.get_block_number()
    print("height: ", height)