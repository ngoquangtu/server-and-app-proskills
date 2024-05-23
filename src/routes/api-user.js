var express = require('express');
var router=express.Router();
const db=require('../public/db.js');

router.get("/users",async (req,res)=>
{
    try {
        const rows= await db.query('SELECT * FROM users');
        res.json(rows);
      } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Error retrieving users');
      }
});
router.get('/users/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id); 
    if (isNaN(userId)) {
      return res.status(400).send('Invalid user ID');
    }
    const [rows] = await db.query('SELECT * FROM Users WHERE id = ?', [userId]);

    if (rows.length === 0) {
      return res.status(404).send('User not found');
    }

    res.json(rows);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send('Error retrieving user');
  }
});
module.exports=router

