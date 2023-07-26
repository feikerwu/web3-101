import * as ethers from 'ethers';
import type { HDNodeWallet } from 'ethers';

// 输出的钱包类型
type OutWallet = {
  privateKey: string;
  publicKey: string;
  address: string;
  mnemonic?: string;
};

/**
 * 批量生成钱包
 * @param num 需要创建的钱包数量
 * @returns
 */
export const createWallets = (num: number) => {
  const wallets: OutWallet[] = [];

  for (let i = 0; i < num; i++) {
    const wallet = ethers.Wallet.createRandom();

    wallets.push({
      privateKey: wallet.privateKey,
      publicKey: wallet.publicKey,
      address: wallet.address,
      mnemonic: wallet.mnemonic?.phrase,
    });
  }

  return wallets;
};

/**
 * 通过助记词找回钱包
 * @param mnemonic 助记词
 * @returns
 */
export const findWalletByMnemonic = (mnemonic: string) =>
  ethers.Wallet.fromPhrase(mnemonic);

console.log(createWallets(1));
