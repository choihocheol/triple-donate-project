const { caver } = require('./index');

module.exports = {
  generateKeyring: () => {
    console.log(process.env.PRIVATE_KEY);
    const account = caver.wallet.keyring.generate();
    return {
      address: account._address,
      privateKey: account._key._privateKey,
    };
  },
};
