const { caver } = require('./index');

module.exports = {
  generateKeyring: () => {
    const account = caver.wallet.keyring.generate();
    return {
      address: account.address,
      privateKey: account.key.privateKey,
    };
  },
};
