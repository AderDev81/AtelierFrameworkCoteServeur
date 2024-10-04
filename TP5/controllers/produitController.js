const mysql = require('../database/db');
const getProduits = async (req,res,next) => {
    try{
        const QueryData = await mysql.execute('select * from produits');
        res.status(200).send(QueryData[0]);
    } catch(error){
        res.status(400).send(error.messsage);
    }
}

module.exports = {
    getProduits  
}
