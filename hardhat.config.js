require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.5',
    settings: {
      optimizer: {
        runs: 200,
        enabled: true,
      },
    },
  },
  networks: {
    polygon: {
      url: 'https://rpc.ankr.com/polygon',
      accounts: [process.env.PRIVATEKEY],
    },
  },
  etherscan: {
    // Move the apiKey configuration to the etherscan field
    apiKey: {
      polygon: process.env.POLYGOSCAN_API_KEY,
    },
  },
  customChains: [
    {
      network: 'polygon',
      chainId: 137,
      urls: {
        apiURL: 'https://api.polygonscan.com/',
        browserURL: 'https://polygonscan.com/',
      },
    },
  ],
};
