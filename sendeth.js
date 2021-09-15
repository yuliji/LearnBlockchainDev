const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction

// const web3 = new Web3('https://mainnet.infura.io/v3/4b349dbeeb55471399fb31ca0c6c0204')
const web3 = new Web3('https://ropsten.infura.io/v3/4b349dbeeb55471399fb31ca0c6c0204')

const account = '0x5F6338f5408AD102e7db30CeB449ebD7B3866E9F'

web3.eth.getBalance(account, (_err, wei) => {
  const balance = web3.utils.fromWei(wei, 'ether')
  console.log(balance)
})

const account1 = '0x5F6338f5408AD102e7db30CeB449ebD7B3866E9F'
const account2 = '0x57ef5FB800297fDdc8f1f6562B9A3A10baE72b6E'

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
// const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2)

web3.eth.getTransactionCount(account1, (_err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

  // Sign the transaction
  const tx = new Tx(txObject, { chain: 'ropsten', hardfork: 'petersburg' })
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    if (err) {
      console.log(err)
    }
    console.log('txHash:', txHash)
    // Now go check etherscan to see the transaction!
  })
})


// https://github.com/ethereumjs/ethereumjs-monorepo/tree/master/packages/tx