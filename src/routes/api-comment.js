const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController.js');
const { verifyToken } = require('../middleware/authJWT');

router.post('/courses/:courseId/comments', verifyToken,commentController.create);
router.delete('/delete',verifyToken,commentController.delete);
router.get('/courses/:courseId/comments', commentController.getAllComment);

module.exports = router;