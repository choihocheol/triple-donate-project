const mongoose = require("mongoose");

// NFT mmodel
const NftSchema = new mongoose.Schema({
    nftId: {
        type: String,
        required: true,
        unique: true
    },
    nftName: {
        type: String
    },
    nftDescription: {
        type: String
    },
    nftImageIpfsAddr: {
        type: String
    }
});

module.exports = mongoose.model("NFTs", NftSchema);
