// configura MongoDB
const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_DATABASE = process.env.DB_DATABASE || 'api';
const DB_USERNAME = process.env.DB_USERNAME || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
const DB_OPTION = { user: DB_USERNAME, pass: DB_PASSWORD };

module.exports = {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_URL,
    DB_OPTION
}