const mysql =  require ('mysql2');
const config = require ('../config');
const pool = mysql.createPool(config.mysql); 
//Connection pools help reduce the time spent connecting to the MySQL server by reusing a previous connection

module.exports = pool.promise();