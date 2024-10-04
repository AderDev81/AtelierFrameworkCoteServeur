const jwt = require('jsonwebtoken');
const User = require("../models/user");

const verifytoken = (req,res,next) => {
    const token = req.header('auth_token');
    if (!token) return res.status(403).send('acces interdit');
    try{
        const verifee=jwt.verify(token,process.env.TOKEN_SECRET);
        req.userId= verifee;
        next();
    }catch (err){
        res.status(401).json('non authoriser ')
    }

}
//vérifier si le role d'ulilisateur est un admin
const isAdmin = async (req, res, next) => {
    await User.findById(req.userId).then(user => {
            if (user.role === "admin") {
                    next();
                    return;
            }
            res.status(403).send({
                message: "Require Admin Role!"
            });
            return;
        });
};
//vérifier si le role d'ulilisateur est un actor
const isActor = async (req, res, next) => {
    await User.findById(req.userId).then(user => {
        if (user.role === "actor") {
            next();
            return;
        }
        res.status(403).send({
            message: "Require actor Role!"
        });
        return;
    });
};

module.exports = {
    verifytoken,isAdmin,isActor
};