var pgp = require('pg-promise')();

const dbConfig = {
   host: 'localhost',
   port: 5432,
   database: 'softwareproject',
   user: 'postgres',
   password: '' // TODO: Fill in your PostgreSQL password here.
                // Use empty string if you did not set a password
};

var db = pgp(dbConfig);

module.exports = db;