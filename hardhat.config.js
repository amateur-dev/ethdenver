require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.5',
    settings: {
      optimizer: {
        runs: 200,
        enabled: true
      }
    }
  },
    networks: {
      polygon: {
        url: "https://rpc.ankr.com/polygon",
        accounts:["INSERT PRIVATE KEY HERE"]
      }
    },
    etherscan: {
      apiKey: {
        polygon: "INSERT POLYGONSCAN API KEY HERE",
      },
      customChains: [
        {
          network: "polygon",
          chainId: 137,
          urls: {
            apiURL: "https://api.polygonscan.com/",
            browserURL: "https://polygonscan.com/"
          },
        },
      ],
    }
};
