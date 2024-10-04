const express = require('express');
const router = express.Router();

// define routes
router.get('/', (req,res)=>{
    res.render("pages/index");
 });

router.get('/apropos', (req,res)=>{
    res.render("pages/apropos");
});

module.exports = router;