const UserModel = require("../model/Users");
const TDT = require("../blockchain/TDKIP7");

// TDT Update
exports.updateTDT = async (userId, amount) => {
    const user = await UserModel.findOne({userId: userId});
    const walletAddr = user.walletAddr;
    const privateKey = user.privateKey;
    
    if(amount >= 0){
        await TDT.mintTDT(walletAddr, amount);
    }else{
        await TDT.burnTDT(privateKey, amount)
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
