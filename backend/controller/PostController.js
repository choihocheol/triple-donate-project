const PostModel = require("../model/Posts");
const UserModel = require("../model/Users");
const NFTModel = require("../model/NFTs");
const NFT = require("../blockchain/TDKIP37");
const func = require("../libs/func");

// fetch Post List
exports.getPostList = async (req, res) => {
  try {
    // postData 전처리
    const postData = await PostModel.find().sort({seq:-1}).exec();

    return res.status(200).json({ data: postData });
  } catch (err) {
    return res.status(400).josn({ msg: { err } });
  }
};

// save Post
// 게시글 작성 버튼 클릭 => check TDT => NFT생성 => TDT burn => Post save
exports.savePost = async (req, res) => {
  const { title, nftName, nftDescription, data, contents } = req.body;
  const userId = req.session.userId;
  const nftImage = req.file;
  
  // test
  // const _isTDT = func.isTDT(userId, -10);
  const _isTDT = true;
  
  try {
    if (!_isTDT) {
      return res.status(400).json({ msg: "Not sufficient TDT" });
    } else {
      const { nftId, imageURL } = await NFT.createNFT(
        nftName,
        nftDescription,
        nftImage.buffer
      );

      const newPost = new PostModel({
        title: title,
        writer: userId,
        data: data,
        contents: contents,
        nftId: nftId,
        nftName: nftName,
        nftDescription: nftDescription,
        nftImageIpfsAddr: imageURL,
      });

      const newNft = new NFTModel({
        nftId: nftId,
        nftName: nftName,
        nftDescription: nftDescription,
        nftImageIpfsAddr: imageURL
      });

      //burn TDT
      // func.updateTDT(userId, -10);

      // Save Post
      await newPost.save();

      // Save Nft
      await newNft.save();

      // update user nftlist
      await UserModel.updateMany({userId: userId}, {$addToSet: {"nftList": nftId}});
      return res.status(200).json({ msg: "Success Post save" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Err" });
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

exports.upload = async (req,res) => {
  const {nftId} = req.body
  try{
    const user = await UserModel.findOne({userId: req.session.userId});

    // NFT minting
    await NFT.mintNFT(nftId, user.walletAddr)

    // update user nft list
    await UserModel.updateMany({userId: nftId}, {$addToSet: {"nftList": nftId}});
    
    return res.status(200).json({msg: "Success Upload"})
  } catch(err){
    console.log(err)
    return res.status(400).json({msg: err})
    
  }
}