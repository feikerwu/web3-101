// 查询地址余额

import { ethers } from 'ethers';

const provider = ethers.getDefaultProvider();

// const provider = new ethers.JsonRpcProvider(
//   'https://mainnet.infura.io/v3/a19f0cd96efb494d960b231fe9eaaabb'
// );

const queryBalance = async address => {
  const balance = await provider.getBalance(address);
  console.log(`ETH Balance: ${ethers.formatEther(balance)} ETH`);
};

queryBalance(`vitalik.eth`);
