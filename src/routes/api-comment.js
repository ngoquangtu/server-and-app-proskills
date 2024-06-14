const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController.js');
const { verifyToken } = require('../middleware/authJWT');


router.post('/courses/:courseId/comments', verifyToken, commentController.create);

// Xóa bình luận cụ thể
router.delete('/courses/:courseId/comments/:commentId', commentController.delete);

// Lấy tất cả các bình luận cho một khóa học cụ thể
router.get('/courses/:courseId/comments', commentController.getAllComment);
router.post('/course/:courseId/video/:videoId/comments',verifyToken,commentController.createCommentVideo);


module.exports = router;
