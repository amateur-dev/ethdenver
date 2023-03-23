// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Manager = await hre.ethers.getContractFactory("Manager");
  console.log("Starting the deployment...");
  const manager = await Manager.deploy(
    "0x3d2341ADb2D31f1c5530cDC622016af293177AE0",
    "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
    "0xf86195cf7690c55907b2b611ebb7343a6f649bff128701cc542f0569e2c549da",
    true
  );
  console.log("deploying...");
  console.log(manager.deployTransaction)
  
  await manager.deployed();
  console.log("Manager deployed to:", manager.address);

  await hre.run("verify:verify", {
    address: manager.address,
    constructorArguments: [
      "0x3d2341ADb2D31f1c5530cDC622016af293177AE0",
      "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
      "0xf86195cf7690c55907b2b611ebb7343a6f649bff128701cc542f0569e2c549da",
      true
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
