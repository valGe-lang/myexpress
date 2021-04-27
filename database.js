const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'banksimulryhma10'
});
module.exports = connection;