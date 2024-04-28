# truffle 使用方法
基于solidity 0.8.6
## truffle常见命令
+ init初始化项目  
```
mkdir first 
cd first
truffle init

```
+ compile编译
```
truffle compile
```
+ 部署
```
truffle migration --network test 

truffle imgration --network test --reset
```

## truffle config
### depends
@truffle/hdwallet-provider
### compilers
```
  compilers: {
    solc: {
      version: "0.8.15",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "istanbul"
       }
    }
  },

```
### network
```
wan: {
          provider: () => new HDWalletProvider(mnemonic, nodeUrl),
          network_id: config.wanChain.chainId,       // Ropsten's id
          gas: 5500000,        // Ropsten has a lower block limit than mainnet
          confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
          timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
          skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
},

```