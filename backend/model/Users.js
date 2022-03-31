const mongoose = require("mongoose");

// User mmodel
const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    userName:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance:{
        type: Number,
        default: 0
    },
    walletAddr: {
        type: String
    },
    privateKey: {
        type: String
    },
    nftList: {  // [nftId, type] type: 0 (게시글 작성시 받은 NFT), :1 (업로드할때 받은 NFT)
        type: Array
    }   
});

module.exports = mongoose.model("Users", UserSchema);
