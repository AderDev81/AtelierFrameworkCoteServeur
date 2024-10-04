const mysql = require('../database/db');

// revoyer tous les produits
const getProduits = async (req,res,next) => {
    try{
        const QueryData = await mysql.execute('select * from produits');
        res.status(200).send(QueryData[0]);
    } catch(error){
        res.status(400).send(error.messsage);
    }
}
//recherche par identifiant
const getProduitsById = async (req,res,next) => {
    try{
        const id = req.params.id;
        const QueryData = await mysql.execute('select * from produits where Ref_Prod = ?', [id]);
        
        res.status(200).send(QueryData[0]);
    } catch(error){
        res.status(400).send(error.messsage);
    }
}
// ajouter un produit 
const addProduit = async (req, res, next) => {
    try {
        const data = req.body;
        const QueryData = await mysql.execute(
            'INSERT INTO Produits (Ref_Prod,Lib_Prod,Pu_Prod,Date_Achat,Qte_Prod) VALUES (?, ?, ?, ?, ?)',
            [
                data.Ref_Prod, 
                data.Lib_Prod,
                data.Pu_Prod, 
                data.Date_Achat,
                data.Qte_Prod
            ]);

        res.status(200).json({status:true});
    } catch (error) {
        res.status(200).json({create:"Erreur Ajout"});
    }
}
// Mettre à jour un produit 
const updateProduit = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const QueryData = await mysql.execute(
            'update Produits set Lib_Prod=?,Pu_Prod=?,Date_Achat=?,Qte_Prod=? where Ref_Prod=?',
            [
                data.Lib_Prod,
                data.Pu_Prod, 
                data.Date_Achat,
                data.Qte_Prod,
                id
            ]);
            if(QueryData[0].affectedRows == 0){
                res.status(200).json({status:"not exist"});
                return false;
            }
            

        res.status(200).json({status:true});
    } catch (error) {
        res.status(200).json({create:"Erreur de modification"});
    }
}
// supprimer un produit 
const deleteProduit = async (req, res, next) => {
    try {
        const id = req.params.id;
        const QueryData = await mysql.execute('delete from Produits where Ref_Prod=?',[id]);
        if(QueryData[0].affectedRows == 0){
            res.status(200).json({status:"not exist"});
            return false;
        }
        res.status(200).json({status:true});
    } catch (error) {
        res.status(200).json({create:"Erreur de suppression"});
    }
}
module.exports = {
    getProduits,
    getProduitsById,
    addProduit,
    updateProduit,
    deleteProduit
}