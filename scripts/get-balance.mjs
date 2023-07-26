// 查询地址余额

import { ethers } from 'ethers';

// const provider = ethers.getDefaultProvider();

const provider = new ethers.JsonRpcProvider(
  'https://polygon-mainnet.infura.io/v3/a19f0cd96efb494d960b231fe9eaaabb'
);

const contractAddress = ``;

const queryBalance = async address => {
  const balance = await provider.getBalance(address);
  console.log(balance);
  console.log(`ETH Balance: ${ethers.formatEther(balance)} ETH`);
};

const address = `0x0c6590dcda9d5fdcb9cffd453c9952f0515a8ef6`;

queryBalance(address);
