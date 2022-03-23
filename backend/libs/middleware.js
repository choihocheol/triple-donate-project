exports.localsMiddleware = (req,res,next) => {
    res.locals.isLoggedIn = req.session.loggedIn;
    res.locals.loggedInUser = req.session.user;
    next();
};

exports.checkLoggedIn = (req, res, next) => {
    if(req.session.loggedIn){
        return next();
    }else{
        return res.json({msg: "Please Login"})
    }
};