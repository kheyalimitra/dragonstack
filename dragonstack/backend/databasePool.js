const { Pool } = require('pg');
const configureation = require('./secret/databaseConfiguration');

const pool = new Pool(configureation);
module.exports = pool;

// pool.query('SELECT * FROM generation', (error, response) => {
//     if(error) {
//         return console.log('error', error);
//     }
//     console.log('response.rows', response.rows);
// })