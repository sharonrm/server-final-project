const pgp 	= require('pg-promise')();


var db = pgp(process.env.DATABASE_URL || 'postgres://sharonmoskal@localhost:5432/tones');
module.exports = db;