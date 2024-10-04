const express = require("express");
const app = express();
require('dotenv/config')
require('./database/db')
const bodyParser = require('body-parser');
const { verifytoken }= require('./middleware/VerifyToken');

// middilware
app.use(bodyParser.json());

//routes
const produitsRoutes = require('./routes/RouteProduit');
const usersRoutes = require('./routes/RouteUser');
app.use('/prod',verifytoken,produitsRoutes.routes);
app.use('/user',usersRoutes.routes);


app.listen(3000);