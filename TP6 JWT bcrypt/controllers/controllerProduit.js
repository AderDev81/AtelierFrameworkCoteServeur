const produits = require('../models/produits');
const User = require('../models/user');

//Ajouter produit
const AddProduits = async (req,res) => {
    try{
        const prod = new produits({
            ref_prod: req.body.ref_prod,
            libelle : req.body.libelle,
            description: req.body.description
        });
        const produitAjouter = await prod.save();
             res.status(200).json(produitAjouter);
    } catch(error){
        res.status(400).send(error.messsage);
    }
}
//recupérer tous les produits
const GetProduits = async (req,res,next) => {
    try{
        const prods = await produits.find();
        res.status(200).json(prods);
        console.log(req.user);
        //exemple d'utilisation des informations passées dans le token
        const user = await User.findById(req.userId);
        console.log(user);

    } catch(error){
        res.status(400).send(error.message);
    }
}
//récupere par identifiant
const FindByIdProduit = async (req,res) => {
    try{
        const prod = await produits.findById(req.params.idP);
        res.status(200).json(prod);

    }catch (error) {
        res.status(400).send(error.message);
    }
}
//Mettre à jour une collection
const UpdateProduit = async (req,res) => {
    try{
       const updprod = await produits.updateOne(
           {ref_prod: req.params.refP},
           { $set: { libelle: req.body.libelle , description: req.body.description }}

    );
       res.status(200).json(updprod.modifiedCount);

    }catch (error){
        res.status(400).send(error.message);
    }
}
//supprimer une collection
const DeleteProduits = async (req,res) => {
    try{
        const prod = await produits.deleteOne(
            {ref_prod : req.params.refP}
        )
        if (prod){
            res.status(200).json('collection supprimer');
            console.log(prod);

        }
    }catch(error){
        res.status(400).send(error.message);
    }
}
module.exports = {
    AddProduits ,GetProduits, FindByIdProduit , UpdateProduit , DeleteProduits
}