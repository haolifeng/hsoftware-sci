# 合约操作
## 合约样例
使用网上提供的样例。使用truffle进行编译和部署。具体内容看其他相关章节
```
// SPDX-License-Identifier: GPL-3.0

pragma solidity >0.7.0 < 0.9.0;
/**
* @title Storage
* @dev store or retrieve variable value
*/

contract Storage {

	uint256 value;

	function store(uint256 number) public{
		value = number;
	}

	function retrieve() public view returns (uint256){
		return value;
	}
}
```
我部署的合约地址为："0x94B00bFfD2e69E8d07bC8fcbC8c80398f8497295"

## 编译abi文件为Golang对象
Storage的abi文件为storage.json, 内容如下：
```
[
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "number",
        "type": "uint256"
      }
    ],
    "name": "store",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "retrieve",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```
使用abigen工具编译

```
abigen --abi=storage.json --pkg=Storage --out=Storage.go
```
1. abi -- 包含abi内容的文件地址。
2. pkg -- 创建的文件的包名，也同时是智能合约结构的名称。包名可以根据以后实际包再次修改，但智能合约的结构名称应该要与智能合约中合约的名字一致。
3. out -- 创建的go文件的名字。
4. bin -- 该标志是生成bytecode使用。再本样例中没有用到。

## 实例代码

```

package main

import (
	"context"
	"fmt"

	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
	hdwallet "github.com/miguelmota/go-ethereum-hdwallet"
	"log"
	"math/big"
	"wanchain.basefn/Storage"
)

const (
	testURl = "https://gwan-ssl.wandevs.org:46891"
	storageAddr = "0x94B00bFfD2e69E8d07bC8fcbC8c80398f8497295"
)

func main(){
	client, err := ethclient.Dial(testURl)
	if err != nil {
		log.Fatal(err)
	}

	mnemonic := "deer funny trip dress siren crane build stomach thunder setup yellow audit"
	wallet, err := hdwallet.NewFromMnemonic(mnemonic)
	if err != nil {
		log.Fatal(err)
	}

	path := hdwallet.MustParseDerivationPath("m/44'/60'/0'/0/0")
	account, err := wallet.Derive(path, true)
	if err != nil {
		log.Fatal(err)
	}

	balance, err := client.BalanceAt(context.Background(), account.Address, nil)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(balance)

	nonce, err := client.PendingNonceAt(context.Background(), account.Address)
	if err != nil { log.Fatal(err) }
	fmt.Println("nonce: ", nonce)
	privateKey, err := wallet.PrivateKey(account)
	if err != nil {
		log.Fatal(err)
	}
	scAddr := common.HexToAddress(storageAddr)
	instance, err := Storage.NewStorage(scAddr,client)
	if err != nil {
		log.Fatal(err)
	}
	gasPrice, err := client.SuggestGasPrice(context.Background())
	if err != nil { log.Fatal(err) }

	chainID, err := client.NetworkID(context.Background())
	if err != nil {
		log.Fatal(err)
	}

	auth, _ := bind.NewKeyedTransactorWithChainID(privateKey, chainID)
	auth.Nonce = big.NewInt(int64(nonce))
	auth.Value = big.NewInt(0) // in wei
	//
	auth.GasLimit = uint64(300000) // in units
	auth.GasPrice = gasPrice




	tx, err := instance.Store(auth, big.NewInt(100))
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("tx sent: %s", tx.Hash().Hex())

	result, err := instance.Retrieve(nil)
	if err != nil {
		fmt.Println(err)
		log.Fatal(err)
	}
	fmt.Println("result", result)


}

```