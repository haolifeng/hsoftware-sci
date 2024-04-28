import config
from eth_account import Account
Account.enable_unaudited_hdwallet_features()
admin = Account.from_mnemonic(config.word)
if __name__ == "__main__":
    print(admin.address)
    print(admin.key)  # key is bytes
    print(admin._private_key)