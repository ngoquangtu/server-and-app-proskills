
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

const caPath = path.join(__dirname, 'ca.pem');
const dbConfig = {
  // host: 'mysql-2ae6ddd1-proskills.e.aivencloud.com',
  // port: 16258,
  // user: 'avnadmin',
  // password: 'AVNS_UNpXU4iubxlZX4Fygqv',
  // database: 'defaultdb',

  // ssl: {
  //   ca: fs.readFileSync(caPath)
  // }
  host: 'localhost',
  port: 3306,
  user:'root',
  password:'root',
  database:'webdatabase',
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