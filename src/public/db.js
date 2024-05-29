
const mysql = require('mysql2/promise');
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME ,
};

async function connectToDatabase() {
    try {
      const connection = await mysql.createConnection(dbConfig);
      return connection;
    } catch (err) {
      console.error('Error connecting to MySQL database:', err);
      throw err; 
    }
  }
  async function query(text, values) {
    try {
      const connection = await connectToDatabase();
      const rows = await connection.query(text, values);
      connection.end();
      return rows[0];
    } catch (err) {
      console.error('Error executing query:', err);
      throw err; 
    }
  }
  module.exports = {
    connectToDatabase,
    query
  };