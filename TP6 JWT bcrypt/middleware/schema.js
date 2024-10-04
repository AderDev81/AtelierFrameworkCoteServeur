const Joi = require("joi");

const authSignIn = Joi.object({

    login : Joi.string()
        .min(6)
        .max(30)
        .required()
        .email(),
    /*password: Joi.string()
        .min(6)
        .required()
        //.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        .pattern(new RegExp( "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})"))*/

});
const authSignUp = Joi.object({
    nom: Joi.string()
        .required()
        .max(30),
    prenom: Joi.string()
        .required()
        .max(30),
    cin: Joi.string()
        .required()
        .pattern(new RegExp("^[0-9]{8}$"))
        //.pattern(new RegExp("/^[0-8]$/"))
        .messages({'string.pattern.base': `cin doit avoir 8 valeur.`}),
    login : Joi.string()
        .min(6)
        .max(30)
        .required()
        .email(),
    password: Joi.string()
        .min(6)
        .required()
        //.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        .pattern(new RegExp( "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})")),
    role: Joi.string()
        .required(),

});

module.exports ={
    "/auth/signin": authSignIn,
    "/auth/signup": authSignUp,
}