const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController.js');
const { verifyToken } = require('../middleware/authJWT');

// Tạo bình luận cho một khóa học cụ thể
router.post('/courses/:courseId/comments', verifyToken, commentController.create);

// Xóa bình luận cụ thể
router.delete('/courses/:courseId/comments/:commentId', verifyToken, commentController.delete);

// Lấy tất cả các bình luận cho một khóa học cụ thể
router.get('/courses/:courseId/comments', commentController.getAllComment);


module.exports = router;