const Caver = require('caver-js');
const caver = new Caver('https://api.baobab.klaytn.net:8651/');
require('dotenv').config();

module.exports = {
  caver: caver,
};
