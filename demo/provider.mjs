import * as ethers from 'ethers'

const providerUrl = `https://polygon-mainnet.infura.io/v3/a19f0cd96efb494d960b231fe9eaaabb`

const provider = new ethers.JsonRpcProvider(providerUrl)

// const network = await provider.getNetwork()
// const feeData = await provider.getFeeData()
// console.log(feeData.gasPrice.toString())

/**
 * 查区块信息
 */
const blockNumber = await provider.getBlockNumber()
const block = await provider.getBlock(blockNumber)

/**
 * 查合约字节码
 */

const bytecode = await provider.getCode('0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0')
console.log(bytecode)


// console.log({blockNumber, block})