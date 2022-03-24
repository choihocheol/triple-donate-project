const UserModel = require("../model/Users");
const PostModel = require("../model/Posts");
const key = require("../blockchain/login");

// login 처리
exports.login = async (req, res) => {

    const { userId, password } = req.body;

    try {
        const checkUserId = await UserModel.exists({ userId: userId });
        const user = await UserModel.findOne({userId: userId, password: password});        
        if(user){
            req.session.loggedIn = true;
            req.session.userId = user.userId;
            console.log(req.session)
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
        
        const checkUserId = await UserModel.exists({userId: userId});
        const checkUserName = await UserModel.exists({userName: userName});
        
        if(checkUserId){
            return res.status(400).json({msg: "UserId is already signup"});
        } else if(checkUserName){
            return res.status(400).json({msg: "UserName is already signup"});
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
      
      return res.status(400).json({msg: "Post error"});
  }
};

// getUserData By username?seq?
exports.getMyData = async (req, res) => {
    try{
        if(!req.session.userId){
            res.status(404).json({msg: "Not Authorized"})
        }else{
            const userData = await UserModel.findOne({userId: req.session.userId});
            const postData = await PostModel.find({writer: req.session.userId});
            return res.status(200).json({msg: "ok", userData: userData, postData: postData});
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
        res.status(200).json({msg: "Success logout"});
    }catch(err){
        console.log(err);
    }
};

