const UserModel = require("../model/Users");
const NftModel = require("../model/NFTs");
const TDT = require("../blockchain/TDKIP7");
const zipFolder = require('zip-a-folder');

const fs = require('fs');
const path = require("path");

// TDT Update
exports.updateTDT = async (userId, amount) => {
    const user = await UserModel.findOne({userId: userId});
    const walletAddr = user.walletAddr;
    const privateKey = user.privateKey;
    
    if(amount >= 0){
        await TDT.mintTDT(walletAddr, amount);
    }else{
        await TDT.burnTDT(privateKey, -amount)
    } 
    await UserModel.findOneAndUpdate({userId: userId}, {$inc: {balance : amount}});
};

// check TDT is sufficient
exports.isTDT = async (userId, amount) => {
    const user = await UserModel.findOne({userId: userId});
    if(user.balance + amount >= 0){
        return true
    }else{
        return false
    } 
};

exports.fetchNftDataByNftId = async (nftList) => {
    const data = []
    for(let el of nftList){
        let nft = await NftModel.findOne({nftId: el[0]})
        data.push({nftId: nft.nftId, nftName: nft.nftName, nftDescription: nft.nftDescription, nftImageIpfsAddr: nft.nftImageIpfsAddr})
    }
    return data;
};

exports.compressDataBySeq = async (seq) => {
    const dirSeq = path.join(__dirname, `../data/${seq}`);
    const savedDir = path.join(__dirname,  `../data/${seq}.zip`);
    
    // 파일 존재 => 삭제 => 압축
    if(fs.existsSync(savedDir)){
        fs.unlink(savedDir, (err) => {
            if(!err){
                console.log(err)
                return false
            }
        });
        await zipFolder.zip(dirSeq, savedDir)
        console.log("delete and compress")
        return savedDir

    }else{  // 파일 X => 압축
        await zipFolder.zip(dirSeq, savedDir)
        console.log("Success") 
        return savedDir
    }
};

