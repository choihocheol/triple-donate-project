const TDKIP7 = artifacts.require('TDKIP7');
const TDKIP37 = artifacts.require('TDKIP37');

module.exports = function (deployer) {
  deployer.deploy(TDKIP7);
  deployer.deploy(TDKIP37);
};
