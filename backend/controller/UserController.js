const UserModel = require("../model/Users");
const key = require("../blockchain/login");

// login 처리
exports.login = async (req, res) => {
    const { userId, password } = req.body;

    try {
        const user = await UserModel.findOne({userId: userId, password: password});        
        if(user){
            req.session.loggedIn = true;
            req.session.user = user;
            return res.status(200).json({msg: "Success login"});
        }else{
            return res.status(400).json({msg: "UserName, password is not Correct"});
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
    console.log(userId, userName, password)
    try {   
        
        const checkUserId = await UserModel.exists({userId: userId});
        const checkUserName = await UserModel.exists({userName: userName});
        
        if(checkUserId){
            return res.status(400).json({msg: "UserId is already singup"});
        } else if(checkUserName){
            return res.status(400).json({msg: "UserName is already singup"});
        }else{
            const User = new UserModel({
                userId: userId,
                userName: userName,
                password: password,
                walletAddr: key.generateKeyring().address,
                privateKey: key.generateKeyring().privateKey
            });   
            await User.save()
            return res.status(200).json({msg: "Success signup"})   ;     
        }
        
  } catch (err) {
      console.log(err);
      return res.status(400).json({msg: "Post error"});
  }
};

// getUserData By username?seq?
exports.getMyData = async (req, res) => {
    try{
        // body? session? seq 로 바꾸기
        const user = await UserModel.findOne({userName: req.params.username});
        
        if(!user){
            return res.status(400).json({msg: "Session is expired"});
        }else{
            const {userData, data} = {
                walletAddr: user.walletAddr,
                data: "Data"
            }
            return res.status(201).json({data: userData});
        }

    }
    catch(err){
        console.log(err);
        return res.status(400).json({msg: {err}});
    }
};

exports.logout = async (req, res) => {
    try{
        req.session.destroy();
        res.stats(200).json({msg: "Success logout"});
    }catch(err){
        console.log(err);
    }
};

