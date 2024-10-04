var express = require('express');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');

var produits = [
    { libelle: 'Cahier', prixU: "3200", qtestock: 200},
    { libelle: 'Livre Base de donnée', prixU: "32500", qtestock: 50},
    { libelle: 'Livre MCCO', prixU: "35000", qtestock: 75}
  ];
var msg = "liste des articles dans le stock.";

// use res.render to load up an ejs view file
// index page
/* app.get('/', function(req, res) {
    res.render('./pages/index', {
        produits: produits,
        message: msg
    });

}); */
var headReq;
app.get(headReq,(req,res)=>{
   console.log(req.url+'zzz'+req.url); 
    if(req.url==="/"){
          res.render('pages/index');  

    }else if(req.url==="/aprop"){
          res.render('pages/apropos');

         }else
          res.render('pages/404');  
})
// page à propos
/* app.get('/aprop', function(req, res) {
  res.render('pages/apropos');
}); */
app.listen(8080);
console.log('Server is listening on port 8080');
