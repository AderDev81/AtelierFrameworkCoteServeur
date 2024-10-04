const mongoose = require('mongoose');
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;

//const mongoURI = `mongodb://${MONGO_USERNAME}:${encodeURIComponent(MONGO_PASSWORD)}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
const mongoURI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

mongoose.connect(mongoURI)
    .then(() => {
        console.log('connecté à MongoDB ');
    })
    .catch((error) => {
        console.error('erreur de connection à MongoDB:', error.message);
    });
module.exports= mongoose;
