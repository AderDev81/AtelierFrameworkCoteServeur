const express = require('express');
const app= express();
//EJS
app.set('views','./views');  // ceci permet de spécifier le dossier contenant les pages web à afficher
app.set('view engine','ejs'); // ceci permet de spécifier le moteur de template qui est EJS

let message = "ceci est mon premier message passer en paramètre";

app.get('/', (req, res) => {
    //res.send('hello word');
    res.render('home', {msg : message});});
app.get('/contact', (req, res) => {
    //res.send('hello word');
    res.render('./pages/contact');});

app.listen(3000);
