const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/ListeProd', (req,res)=>{
    const sql = "SELECT * FROM Produits ";
    db.all(sql, (err, rows) => {
        if (err) {
        return console.error(err.message);
        }
        res.render("pages/ListeProd", { produits: rows });
    });
});
router.get('/itemprod/:REF', (req,res)=>{
	const REF = req.params.REF;
	const sql = "SELECT * FROM Produits where Ref= ?";
	const sql1 = "SELECT * FROM Produits LIMIT 4 ";
	db.all(sql1, (err, rows1) => {
	  if (err) {
		  //res.status(404).json({sign_in_expert:"expert_blocked"});
		  return console.error(err.message);
		  }
	  db.get(sql,REF, (err, rows) => {
		  if (err) {
		  //res.status(404).json({sign_in_expert:"expert_blocked"});
		  return console.error(err.message);
		  }
		  res.render("pages/itemprod", { produit: rows , related: rows1 });
	  });
	});
  });

module.exports = router;