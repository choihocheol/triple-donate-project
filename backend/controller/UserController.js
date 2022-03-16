const UserModel = require("../model/Users");
const key = require("../blockchain/login");

// login 처리
exports.login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ userName: req.body.userName, password: req.body.password });
    if (user) {
      return res.status(201).json({ msg: "Success login" });
    } else {
      return res.status(400).json({ msg: "UserName, password is not Correct" });
    }
  } catch (err) {
    // error 처리
    return res.status(400).json({ msg: "Post Error" });
  }
};

// singup 처리
exports.signup = async (req, res) => {
  try {
    const user = await UserModel.findOne({ userName: req.body.userName });

    if (user) {
      return res.status(404).json({ msg: "Already Singup" });
    } else {
      const User = new UserModel({
        userName: req.body.userName,
        password: req.body.password,
        walletAddr: key.generateKeyring().address,
        privateKey: key.generateKeyring().privateKey,
      });
      await User.save();
      return res.status(201).json({ msg: "Success Singup" });
    }
  } catch (err) {
    return res.status(400).json({ msg: "Post error" });
  }
};

// getUserData By username?seq?
exports.getMyData = async (req, res) => {
  try {
    // body? session? seq 로 바꾸기
    const user = await UserModel.findOne({ userName: req.params.username });

    if (!user) {
      return res.status(404).json({ msg: "Session is expired" });
    } else {
      const { userData, data } = {
        walletAddr: user.walletAddr,
        data: "Data",
      };
      return res.status(201).json({ data: userData });
    }
  } catch (err) {
    return res.status(400).json({ msg: { err } });
  }
};

exports.logout = async (req, res) => {
  try {
  } catch (err) {}
};
