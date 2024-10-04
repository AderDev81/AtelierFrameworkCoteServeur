const express = require("express");
const {RegisterUser,SigninUser}= require('../controllers/controllerUser');
const routes = express.Router();
const schemaValidator = require('../middleware/schemaValidator')

routes.post('/Register',schemaValidator("/auth/signup"),RegisterUser);
routes.get('/login',schemaValidator("/auth/signin"),SigninUser);


module.exports= {routes };