const Web3 = require('web3')

// const web3 = new Web3('https://mainnet.infura.io/v3/4b349dbeeb55471399fb31ca0c6c0204')
const web3 = new Web3('https://ropsten.infura.io/v3/4b349dbeeb55471399fb31ca0c6c0204')
// get latest block number
web3.eth.getBlockNumber().then(console.log)

// // get latest block
web3.eth.getBlock('latest').then(console.log)

// get latest 10 blocks
web3.eth.getBlockNumber().then((latest) => {
  for (let i = 0; i < 10; i++) {
    web3.eth.getBlock(latest - i).then(console.log)
  }
})

// get transaction from specific block
const hash = '0x03b9bb6ebed4786c1ec948a1ee053dbe53bc61bacefa83b9efa75d181110a292'
web3.eth.getTransactionFromBlock(hash, 11039797).then(console.log)
