const { caver, TDKIP7JSON } = require('./index');

module.exports = {
  mintTDT: async (userAddress, amount) => {
    const contract = new caver.contract(TDKIP7JSON.abi, TDKIP7JSON.address);

    try {
      const rawTx = {
        type: 'SMART_CONTRACT_EXECUTION',
        from: caver.klay.accounts.wallet[0].address,
        to: contract._address,
        gas: await contract.methods.mint(userAddress, amount).estimateGas({
          from: caver.klay.accounts.wallet[0].address,
        }),
        data: contract.methods.mint(userAddress, amount).encodeABI(),
      };
      await caver.klay.sendTransaction(rawTx);

      const output = {
        userAddress: userAddress,
        balance: await contract.methods.balanceOf(userAddress).call(),
      };
      return output;
    } catch (err) {
      throw err;
    }
  },
  burnTDT: async (userPrivateKey, amount) => {
    const userAccount = caver.klay.accounts.privateKeyToAccount(userPrivateKey);
    const contract = new caver.contract(TDKIP7JSON.abi, TDKIP7JSON.address);

    try {
      const rawTx = {
        type: 'FEE_DELEGATED_SMART_CONTRACT_EXECUTION',
        from: userAccount.address,
        to: contract._address,
        gas:
          (await contract.methods.burn(amount).estimateGas({
            from: userAccount.address,
          })) * 2,
        data: contract.methods.burn(amount).encodeABI(),
      };
      const { rawTransaction: senderRawTransaction } =
        await caver.klay.accounts.signTransaction(
          rawTx,
          userAccount.privateKey,
        );
      await caver.klay.sendTransaction({
        senderRawTransaction: senderRawTransaction,
        feePayer: caver.klay.accounts.wallet[0].address,
      });

      const output = {
        userAddress: userAccount.address,
        balance: await contract.methods.balanceOf(userAccount.address).call(),
      };
      return output;
    } catch (err) {
      throw err;
    }
  },
};
