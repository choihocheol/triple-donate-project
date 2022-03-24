const fs = require('fs');
const TDKIP7 = artifacts.require('TDKIP7');
const TDKIP37 = artifacts.require('TDKIP37');

module.exports = async function (deployer) {
  const TDKIP7JSON = {
    contractName: TDKIP7.contractName,
    address: TDKIP7.address,
    abi: TDKIP7.abi,
  };
  const TDKIP37JSON = {
    contractName: TDKIP37.contractName,
    address: TDKIP37.address,
    abi: TDKIP37.abi,
  };
  fs.writeFile(
    process.cwd() + '/../backend/blockchain/jsons/TDKIP7.json',
    JSON.stringify(TDKIP7JSON),
    (err) => {
      if (err) {
        throw err;
      }
    },
  );
  fs.writeFile(
    process.cwd() + '/../backend/blockchain/jsons/TDKIP37.json',
    JSON.stringify(TDKIP37JSON),
    (err) => {
      if (err) {
        throw err;
      }
    },
  );
};
