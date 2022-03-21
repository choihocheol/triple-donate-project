export const localsMiddleware = (req,res,next) => {
    res.locals.isLoggedIn = req.session.loggedIn;
    res.locals.loggedInUser = req.session.user;
    next();
};

export const checkLoggedIn = (req, res, next) => {
    if(req.session.loggedIn){
        return nexxt();
    }else{
        return res.json({msg: "Please Login"})
    }
};