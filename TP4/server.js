const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const produitsRoutes = require('./routes/produitRoute');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// définition des routes + middlewares
app.use('/api',produitsRoutes.routes);


app.listen(config.port, ()=> console.log('App est en ecoute sur http:\\localhost:' + config.port));
console.log('run ');
