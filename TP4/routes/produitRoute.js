const express = require('express');

const {getProduits, getProduitsById, addProduit, updateProduit, deleteProduit} = require('../controllers/produitController');

const router = express.Router();

// définition des routes

router.get('/produits' , getProduits);
router.get('/produits/:id' , getProduitsById);
router.post('/produits', addProduit);
router.put('/produits/:id', updateProduit);
router.delete('/produits/:id', deleteProduit);

module.exports = {
    routes: router
}
