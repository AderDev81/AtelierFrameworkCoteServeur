const users = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// inscription d'un utilisateur
const RegisterUser = async (req,res) =>{
    try{
        //vérifier si le login existe
        const userexist = await users.findOne({login:req.body.login});
        if (userexist) return res.status(400).send('utilisateur existe déja');

        //hash mot de passe
        const salt = await bcrypt.genSalt(10);
        const HashedPassword = await bcrypt.hash(req.body.password,salt);

        //créer un nouveau utilisateur
        const user = new users({
            login : req.body.login,
            password: HashedPassword,
            nom: req.body.nom,
            prenom:req.body.prenom,
            cin: req.body.cin,
            role: req.body.role
        });
        //
        const result = await user.save();
        res.status(200).send(result);

    }catch (err){
        res.status(400).send(err.message);
    }
}
//
const SigninUser = async (req,res)=>{
    try{

        const result = await users.findOne({login:req.body.login}).exec();
        if (!result) return res.status(400).send('email n existe pas');
        const validpass = await bcrypt.compare(req.body.password,result.password);
        if (!validpass) return res.status(400).send('mot passe incoorect');


        //créer et affecter un token
        const token = jwt.sign({_id : result._id},process.env.TOKEN_SECRET,{expiresIn: "1h"});
        res.header('auth_token',token);

        res.status(200).json('bienvenue ');


    }catch(err){
        res.status(400).send(err.message);
    }
}
module.exports = {
    RegisterUser,SigninUser
}