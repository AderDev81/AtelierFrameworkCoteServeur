const path = require('path');

var config = {
    database : 'produit.db',
    db_url : path.join(__dirname,'produit.db')
}

module.exports = config;