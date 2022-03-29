const axios = require('axios');
const FormData = require('form-data');

module.exports = {
  pinFileToIPFS: async (image) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    const data = new FormData();
    data.append('file', image, { filepath: 'NFT Image' });

    try {
      const res = await axios.post(url, data, {
        maxBodyLength: 'Infinity',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_SECRET,
        },
      });
      return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
    } catch (err) {
      throw err;
    }
  },
  pinJSONToIPFS: async (name, description, imageURL) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    const jsonBody = {
      pinataMetadata: {
        name: 'NFT Metadata',
      },
      pinataContent: {
        name: name,
        description: description,
        imageURL: imageURL,
      },
    };

    try {
      const res = await axios.post(url, jsonBody, {
        headers: {
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_SECRET,
        },
      });
      return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
    } catch (err) {
      throw err;
    }
  },
};
