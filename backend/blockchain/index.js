const Caver = require('caver-js');
const caver = new Caver('https://api.baobab.klaytn.net:8651/');
require('dotenv').config();
caver.klay.accounts.wallet.add(process.env.PRIVATE_KEY);
const TDKIP7JSON = require('./jsons/TDKIP7.json');
const TDKIP37JSON = require('./jsons/TDKIP37.json');

module.exports = {
  caver: caver,
  TDKIP7JSON: TDKIP7JSON,
  TDKIP37JSON: TDKIP37JSON,
};
