const { caver, TDKIP37JSON } = require('./index');
const { pinFileToIPFS, pinJSONToIPFS } = require('./ipfs');

module.exports = {
  createNFT: async (name, descroption, image) => {
    const contract = new caver.contract(TDKIP37JSON.abi, TDKIP37JSON.address);

    try {
      const id = contract.methods.id().call();
      const imageURL = await pinFileToIPFS(image);
      const url = await pinJSONToIPFS(name, descroption, imageURL);

      const rawTx = {
        type: 'SMART_CONTRACT_EXECUTION',
        from: caver.klay.accounts.wallet[0].address,
        to: contract._address,
        gas: await contract.methods.create(url).estimateGas({
          from: caver.klay.accounts.wallet[0].address,
        }),
        data: contract.methods.create(url).encodeABI(),
      };
      const transaction = caver.klay.sendTransaction(rawTx);

      const output = {
        nftId: await id,
        imageURL: imageURL,
      };
      await transaction;
      return output;
    } catch (err) {
      throw err;
    }
  },
  mintNFT: async (nftId, recipientAddress) => {
    const contract = new caver.contract(TDKIP37JSON.abi, TDKIP37JSON.address);

    try {
      const rawTx = {
        type: 'SMART_CONTRACT_EXECUTION',
        from: caver.klay.accounts.wallet[0].address,
        to: contract._address,
        gas: await contract.methods.mint(nftId, recipientAddress).estimateGas({
          from: caver.klay.accounts.wallet[0].address,
        }),
        data: contract.methods.mint(nftId, recipientAddress).encodeABI(),
      };
      const transaction = caver.klay.sendTransaction(rawTx);

      await transaction;
    } catch (err) {
      throw err;
    }
  },
};
