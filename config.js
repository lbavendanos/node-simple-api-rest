// configura puerto
// default '3000'
const PORT_EXPRESS = process.env.PORT_EXPRESS || 3000;

// configura morgan
// otras opciones: combined, common, dev, short, tiny
// default 'dev'
const MORGAN_FORMAT = process.env.MORGAN_FORMAT || 'dev';

// configura MongoDB
const MONGO_DB_NAME = 'api';
const MONGO_DB_URL = `mongodb://localhost:27017/${MONGO_DB_NAME}`;

module.exports = {
    PORT_EXPRESS,
    MORGAN_FORMAT,
    MONGO_DB_NAME,
    MONGO_DB_URL

}