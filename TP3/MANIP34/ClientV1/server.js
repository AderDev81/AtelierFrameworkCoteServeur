const express = require('express');
const app = express();
const indexroute = require('./routes/indexroute');
const prodroute = require ('./routes/prodroute');

// install global middlewares 
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));// les données trouvées sont ajoutées dans un champ body de la requête traitée (donc req.body)

// view engine setup
app.set('views','./views');
app.set('view engine','ejs');

//
app.use('/',indexroute);
app.use('/prod',prodroute);
//http://localhost:3000/prod/ListeProd
//http://localhost:3000/prod/itemprod/:REF


module.exports = app;
