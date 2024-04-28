# WanChain客户端
## RPC信息
Wanchain的RPC是。该信息可以从metamask中查到。
+ 主网 <https://gwan-ssl.wandevs.org:56891>
+ 测试网 <https://gwan-ssl.wandevs.org:46891>


## 初始化
用户Go初始化以太坊客户端是和区块链交互所需要的基本步骤。首先导入go-ethereum的ethclient包并通过调用接收区块链服务提供的URL。
```
package main

import (
	"fmt"
	"github.com/ethereum/go-ethereum/ethclient"
	"log"
)
const (
	URl = "https://gwan-ssl.wandevs.org:56891"
)
func main(){
	client, err := ethclient.Dial(URl)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("we have a connect")
	_ = client
}
```

## 账户余额
读取一个账户的余额相当简单。调用客户端的BalanceAt方法，给它传递账户地址和可选的区块号。将区块号设置为nil将返回最新的余额
```
package main

import (
	"context"
	"fmt"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/ethereum/go-ethereum/common"
	"log"
)
const (
	URl = "https://gwan-ssl.wandevs.org:56891"
)
func main(){
	client, err := ethclient.Dial(URl)
	if err != nil {
		log.Fatal(err)
	}
	//fmt.Println("we have a connect")
	account := common.HexToAddress("0x8E7fbb49f436d0e8a50c02F631e729A57a9a0aCA")
	balance, err := client.BalanceAt(context.Background(), account, nil)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(balance)
}
```

## 转账

```
package main

import (
	"context"
	"fmt"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/ethereum/go-ethereum/common"
	"github.com/miguelmota/go-ethereum-hdwallet"
	"log"
	"math/big"
)
const (
	testURl = "https://gwan-ssl.wandevs.org:46891"
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

  //get Nonce
	nonce, err := client.PendingNonceAt(context.Background(), account.Address)
	if err != nil { log.Fatal(err) }
	fmt.Println("nonce: ", nonce)

	//
	value := big.NewInt(1000000000000000000)
	toAddress := common.HexToAddress("0xdC484B57a5CC0563b42C2e3D37466b14186f501b")
	gasLimit := uint64(21000)
	gasPrice := big.NewInt(21000000000)
	var data []byte

	tx := types.NewTransaction(nonce, toAddress, value, gasLimit, gasPrice, data)

  //get chainID
	chainID, err := client.NetworkID(context.Background())
	if err != nil {
		log.Fatal(err)
	}
	signedTx, err := wallet.SignTx(account, tx, chainID)



	if err != nil {
		fmt.Println("err: ", err)
		log.Fatal(err)
	}

	err = client.SendTransaction(context.Background(), signedTx)
	if err != nil {
		fmt.Println("err: ", err)
		log.Fatal(err)
	}
	fmt.Printf("tx sent: %s", signedTx.Hash().Hex())
}


```
