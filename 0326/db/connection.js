require('dotenv').config();
// Required Modules
const mariadb = require('mariadb');

//Initialize Pool
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'youtube',
  connectionLimit: 100,
});

// Fetch Connection
async function fetchConn() {
  let conn = await pool.getConnection();
  return conn;
}

module.exports = fetchConn;
