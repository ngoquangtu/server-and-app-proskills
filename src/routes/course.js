var express = require('express');
var router=express.Router();
const mysql = require('mysql2/promise');
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME ,
  insecureAuth: true,
};
router.get("/courses",async (req,res)=>
{
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM Courses');
        connection.end();
    
        res.json(rows);
      } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).send('Error retrieving courses');
      }
});
app.get('/courses/:id', async (req, res) => {
  try {
    const courseID = parseInt(req.params.id); 
    if (isNaN(courseID)) {
      return res.status(400).send('Invalid courses ID');
    }

    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query('SELECT * FROM Courses WHERE id = ?', [courseID]);
    connection.end();

    if (rows.length === 0) {
      return res.status(404).send('User not found');
    }

    res.json(rows[0]);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send('Error retrieving user');
  }
});
module.exports=router

