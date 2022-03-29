const PostModel = require("../model/Posts");
const UserModel = require("../model/Users");
const TDT = require("../blockchain/TDKIP7");
const NFT = require("../blockchain/TDKIP37");

// fetch Post List
exports.getPostList = async (req, res) => {
  try {
    // postData 전처리
    const postData = await PostModel.find().exec();

    return res.status(200).json({ data: postData });
  } catch (err) {
    return res.status(400).josn({ msg: { err } });
  }
};

// save Post

// 게시글 작성 버튼 클릭 => NFT생성과 함께 게시글 작성 => ipfs 주소 리턴?
exports.savePost = async (req, res) => {
  const { title, nftName, nftDescription, nftImage, data, contents } = req.body;
  try {
    //nftID
    // const { nftId } = await NFT.createNFT(nftName, nftDescription, nftImage);
    const newPost = new PostModel({
      title: title,
      // 수정
      // writer: "req.session.userId",
      writer: "test",
      data: data,
      contents: contents,
      // nftId: nftId,
      nftName: nftName,
      nftDescription: nftDescription,
      //nftImageAddr: ipfs.image 주소??
    });

    await newPost.save();
    // privateKey 찾는거??
    // const userPriavteKey = await UserModel.findOne({userId: req.session.userId});
    // const {balance} =  await TDT.burnTDT(userPriavteKey, 10);
    // userbalance update 해야댐

    return res.status(200).json({ msg: "Success Post save" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "err" });
  }
};

exports.getPostFindBySeq = async (req, res) => {
  try {
    const post = await PostModel.findOneAndUpdate(
      { seq: req.params.seq },
      { $inc: { views: 1 } }
    ).exec();
    if (post) {
      return res.status(200).json({ data: post });
    } else {
      return res.status(400).json({ msg: "Seq is not valid" });
    }
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};
