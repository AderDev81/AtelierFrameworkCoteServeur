const dotenv = require ('dotenv') ;
//Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. 
const assert = require('assert') ;
//If an expression evaluates to 0 or false, an error is thrown and the program is terminated:

dotenv.config() ;

const { PORT , HOST ,  HOST_URL , MYSQL_USER , MYSQL_PASSWORD , MYSQL_DATABASE , MYSQL_HOST } = process.env ;
assert(PORT , ' Port is required') ;
assert(HOST , ' host is required') ;

module.exports = { 
	port : PORT ,
	host : HOST ,
	url : HOST_URL ,
	mysql : {
		host : MYSQL_HOST ,
		user : MYSQL_USER ,
		database : MYSQL_DATABASE ,
        password : MYSQL_PASSWORD ,
        waitforConnexion : true , 
        connectionLimit : 10 
        }
}

