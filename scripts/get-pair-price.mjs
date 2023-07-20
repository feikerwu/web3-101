import * as ethers from 'ethers';
import { get } from 'http';

const tokenA = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'; // ETH的地址
const tokenB = '0x5d461bf9caf10651a9cf2b913e4a596940bd0fef'; // UMI的地址

async function getPairPrice(tokenA, tokenB) {
  const provider = new ethers.JsonRpcProvider(
    'https://mainnet.infura.io/v3/a19f0cd96efb494d960b231fe9eaaabb'
  );

  const factoryAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
  const factoryABI = [
    'function getPair(address tokenA, address tokenB) external view returns (address pair)',
  ];

  // 构建工厂合约实例
  const factoryContract = new ethers.Contract(
    factoryAddress,
    factoryABI,
    provider
  );

  console.log(factoryContract);
  // 获取到交易对的合约地址
  const pairAddress = await factoryContract.getPair(tokenA, tokenB);

  console.log(pairAddress);
  // 交易对合约的ABI
  const pairABI = [
    'function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)',
  ];

  // 构建交易对合约实例
  const pairContract = new ethers.Contract(pairAddress, pairABI, provider);

  const reserves = await pairContract.getReserves();

  const { reserve0, reserve1 } = reserves;

  const price = reserve1 / reserve0; // UMI对ETH的价格
  console.log('UMI对ETH的价格：', price);
}

getPairPrice(tokenA, tokenB).catch(e => {
  console.log(e);
});
