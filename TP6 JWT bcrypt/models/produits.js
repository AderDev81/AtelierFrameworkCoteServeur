const mongoose= require("mongoose");

const ProduitSchema = mongoose.Schema({
    ref_prod : {
        type: Number,
        require:true
    },
    libelle :{
        type: String,
        required: true
    },
    description :{
        type : String,
        required: true
    }
    });

module.exports=mongoose.model('produits',ProduitSchema);