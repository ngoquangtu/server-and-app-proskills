var express = require('express');
var router=express.Router();
const db=require('../public/db.js')
router.get("/courses",async (req,res)=>
{
    try {
        const rows = await db.query('SELECT * FROM Courses');
        res.json(rows);
      } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).send('Error retrieving courses');
      }
});
router.get('/courses/:id', async (req, res) => {
  try {
    const courseID = parseInt(req.params.id); 
    if (isNaN(courseID)) {
      return res.status(400).send('Invalid courses ID');
    }

    const [rows] = await db.query('SELECT * FROM Courses WHERE id = ?', [courseID]);

    if (rows.length === 0) {
      return res.status(404).send('User not found');
    }

    res.json(rows);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send('Error retrieving user');
  }
});

// Add a comment to a course
router.post('/courses/:courseId/comments', async (req, res) => {
  try {
    const { courseId, userId, comment, rating } = req.body;

    // Validate input and authorize user

    // Insert comment and rating into the database
    const [result] = await db.query('INSERT INTO comments (course_id, user_id, comment, rating) VALUES ($1, $2, $3, $4)', [courseId, userId, comment, rating]);

    if (result.rowCount === 1) {
      res.status(201).json({ message: 'Comment added successfully' });
    } else {
      res.status(500).json({ error: 'Failed to add comment' });
    }
  } catch (err) {
    console.error('Error adding comment:', err);
    res.status(500).json({ error: 'Failed to add comment' });
  }
});

// Get all comments for a course
router.get('/courses/:courseId/comments', async (req, res) => {
  try {
    const courseId = req.params.courseId;

    // Fetch comments from the database
    const [rows] = await db.query('SELECT comments.*, users.username, users.email FROM comments JOIN users ON comments.user_id = users.id WHERE course_id = $1', [courseId]);

    res.json(rows); 
  } catch (err) {
    console.error('Error fetching comments:', err);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});
module.exports=router

