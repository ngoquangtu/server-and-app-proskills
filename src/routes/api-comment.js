const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController.js');
const { verifyToken } = require('../middleware/authJWT');


router.post('/courses/:courseId/comments', verifyToken, commentController.create);

router.delete('/courses/:courseId/comments/:commentId', commentController.delete);



module.exports = router;
