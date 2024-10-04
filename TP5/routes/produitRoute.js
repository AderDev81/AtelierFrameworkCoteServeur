const express = require('express');
const {getProduits} = require('../controllers/produitController');
const router = express.Router();
// définition des routes
router.get('/produits' , getProduits);

module.exports = {
    routes: router
}
