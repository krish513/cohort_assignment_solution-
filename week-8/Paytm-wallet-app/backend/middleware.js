
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(403).json({
            msg : "JWT token not found"
        })
    }else{
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        try{
            if(!decoded){
                res.status(403).json({
                    msg : "token not verified"
                })
                
            }else{
                req.userId = decoded.userId;
                next();
            }
        }
        catch(error){
            res.status(403).json({
                msg : "error in auth middleware"
            })
        }
    }
}

module.exports = {
    authMiddleware
}