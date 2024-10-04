const mongoose = require("mongoose");

const UserModel = mongoose.Schema ({
    login:{
      type: String,
      required: true
    },
    password :{
        type:String,
        required:true,
        min:6,
        max:1024
    },
    nom :{
        type: String,
        required: true
    },
    prenom:{
        type: String,
        required:true
    },
    cin:{
        type: String,
        required:true
    },
    role:{
        type: String,
        required:true
    }

});

module.exports = mongoose.model('User',UserModel);