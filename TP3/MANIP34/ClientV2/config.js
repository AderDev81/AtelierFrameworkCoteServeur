const path = require("path");

var config = {
	debug: true,
    database : 'produit.db',
    db_url : path.join(__dirname, "", "produit.db")
}

//const db_name = path.join(__dirname, "", "../produit.db");

module.exports = config;