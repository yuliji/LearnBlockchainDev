const Web3 = require('web3')

async function main () {
  const web3 = new Web3('https://ropsten.infura.io/v3/4b349dbeeb55471399fb31ca0c6c0204')

  const account = '0x5F6338f5408AD102e7db30CeB449ebD7B3866E9F'
  const wei = await web3.eth.getBalance(account)
  const eth = web3.utils.fromWei(wei, 'ether')
  console.log(eth)
}

main().then(() => {}).catch((err) => { console.log(err) })
