const UserModel = require("../model/Users");
const PostModel = require("../model/Posts");
const key = require("../blockchain/login");
const func = require("../libs/func");

// login 처리
exports.login = async (req, res) => {

    const { userId, password } = req.body;

    try {

        const checkUserId = await UserModel.exists({ userId: userId });
        const user = await UserModel.findOne({userId: userId, password: password});        

        if(user){
            req.session.loggedIn = true;
            req.session.userId = user.userId;
            return res.status(200).json({msg: "Success login"});
        }else if (!checkUserId) {
            return res.status(400).json({ msg: "UserId is not exist" });
        }else{
            return res.status(400).json({msg: "Password is not Correct"});
        }
    } catch (err) {
    // error 처리
        console.log(err);
        return res.status(400).json({msg: "Post Error"});
    }

};

// singup 처리
exports.signup = async (req, res) => {
  const { userId, userName, password } = req.body;

  try {
    const checkUserId = await UserModel.exists({ userId: userId });
    const checkUserName = await UserModel.exists({ userName: userName });
    const { address, privateKey } = key.generateKeyring();

    if (checkUserId) {
      return res.status(400).json({ msg: "UserId is already signup" });
    } else if (checkUserName) {
      return res.status(400).json({ msg: "UserName is already signup" });
    } else {
      const User = new UserModel({
        userId: userId,
        userName: userName,
        password: password,
        walletAddr: address,
        privateKey: privateKey,
      });
      // User data save
      await User.save();

      //mint TDT
      func.updateTDT(userId, 10);

      return res.status(200).json({ msg: "Success signup" });
    }
  } catch (err) {
    return res.status(400).json({ msg: "Post error" });
  }
};

// getUserData By username?seq?
exports.getMyData = async (req, res) => {
  const userId = req.session.userId;  
  try {
    if (!userId) {
      res.status(404).json({ msg: "Not Authorized" });
    } else {
      const userData = await UserModel.findOne({ userId: userId });
      const postData = await PostModel.find({ writer: userId });
      const nftData = await func.fetchNftDataByNftId(userData.nftList)

      return res.status(200).json({ msg: "ok", userData: userData, postData: postData, nftData: nftData });
    } 
  } catch (err) {
    return res.status(400).json({ msg: { err } });
  }
};

// logout
exports.logout = async (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({ msg: "Success logout" });
  } catch (err) {
    console.log(err);
  }
};
