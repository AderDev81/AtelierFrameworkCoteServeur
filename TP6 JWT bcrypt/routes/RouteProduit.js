const express = require('express');
const {AddProduits , GetProduits,FindByIdProduit , UpdateProduit, DeleteProduits} = require('../controllers/controllerProduit');
const router = express.Router();
//const {isAdmin,isActor}= require('../middleware/VerifyToken');
const verifier= require('../middleware/VerifyToken');
// définition des routes
router.post('/'  ,verifier.isActor, AddProduits);
router.get('/' ,verifier.isAdmin, GetProduits);
router.get('/:idP',FindByIdProduit);
router.patch('/:refP',UpdateProduit);
router.delete('/:refP',DeleteProduits);


module.exports = {
    routes: router
}
