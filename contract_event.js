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



// Read the deployed contract - get the addresss from Etherscan
const contractAddress = '0xd03696B53924972b9903eB17Ac5033928Be7D3Bc'
const contractABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]

const contract = new web3.eth.Contract(contractABI, contractAddress)

// Get Contract Event Stream
contract.getPastEvents(
  'AllEvents',
  {
    fromBlock: 11039700,
    toBlock: 'latest'
  },
  (err, events) => { console.log(events) }
)