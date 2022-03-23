const PostModel = require("../model/Posts");

// fetch Post List
exports.getPostList = async (req, res) => {
    try{
        // postData 전처리
        const postData = await PostModel.find().exec();
        
        return res.status(200).json({data: postData});
    }
    
    catch(err){
        return res.status(400).josn({msg: {err}});
    }
}

// save Post
exports.savePost = async (req,res) => {
    try{
        const newPost = new PostModel({
            title: req.body.title,
            description: req.body.description,
            // 체킹해야댐
            // writer: req.session.userName
        });

        await newPost.save();
        return res.status(200).json({msg: "Success Post save"});

    }catch(err){
        console.log(err)
        return res.status(400).json({msg: "err"});

    }
}

exports.getPostFindBySeq = async (req,res) => {
    try{
        const post = await PostModel.findOne({seq: req.params.seq}).exec();
        if(post){
            return res.status(200).json({data: post});
        }else{
            return res.status(400).json({msg: "Seq is not valid"});
        }

    }catch(err){
        return res.status(400).json({msg: err});
    }
}

