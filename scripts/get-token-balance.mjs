import * as ethers from 'ethers';


// const provider = new ethers.JsonRpcProvider('https://polygon-mainnet.infura.io/v3/a19f0cd96efb494d960b231fe9eaaabb')

// /**
//  * 获取某个代币余额
//  * @param {*} tokenContract 代币的合约地址
//  * @param {*} address 需要查询的地址
//  * @param {*} provider 以太坊节点
//  */
// export async function getTokenBalance(tokenAddress, address, provider) {
//   const contract = new ethers.Contract(
//     tokenAddress,
//     [
//       // Some details about the token
//       'function name() view returns (string)',

//       // Get the account balance
//       'function balanceOf(address) view returns (uint)',
//     ],
//     provider
//   );


//   const balance = await contract.balanceOf(address);

//   console.log(`Balance${contract.name()}: ${balance.toString()}`);

//   return balance;
// }

// const maticContractAddress = `0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0`;
// const address = `0x0c6590dcda9d5fdcb9cffd453c9952f0515a8ef6`;
// // getTokenBalance(maticContractAddress, address, provider);


// // console.log(wallet.address);

async function getTokenBalance(provider, address) {
  const balanceWei = await provider.getBalance(address);
  const balance = ethers.formatEther(balanceWei);

  return balance
}

async function batchQueryMaticBalance(addresses) {
  const maticProvider = new ethers.JsonRpcProvider('https://polygon-mainnet.infura.io/v3/a19f0cd96efb494d960b231fe9eaaabb')

  const balances = []
  for (let address of addresses) {
    const balance = await getTokenBalance(maticProvider, address)
    balances.push({address, balance})
  }
  return balances
}

let balances = await batchQueryMaticBalance([`0x0c6590dcda9d5fdcb9cffd453c9952f0515a8ef6`])

console.log(balances)