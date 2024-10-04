const sqlite3 = require('sqlite3');
const config = require('../config');

// connect database SQlite
const db = new sqlite3.Database(config.db_url, err => {
	if (err) {
	  return console.error(err.message);
	}
	console.log("Connexion réussie à la base de données 'produit.db'");
  });

module.exports = db;