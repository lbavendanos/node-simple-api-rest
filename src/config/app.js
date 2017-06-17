// configura puerto
// default '3000'
const PORT = process.env.PORT || 3000;

// configura morgan
// otras opciones: combined, common, dev, short, tiny
// default 'dev'
const MORGAN_FORMAT = process.env.MORGAN_FORMAT || 'dev';

// configura JWT
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'secret';

module.exports = {
    PORT,
    MORGAN_FORMAT,
    TOKEN_SECRET
}