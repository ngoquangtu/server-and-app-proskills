
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const {  verifyToken } = require('../middleware/authJWT.js');
router.get('/',courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.get('/comment/:id',courseController.getAllComments);
router.post('/mostrating',courseController.getAllCourseByRating);
router.post('/mostcomment',courseController.gellAllCourseByComment);
router.post('/mostenrollment',courseController.gellAllCourseByEnrollments);
router.post('/enrollments',verifyToken,courseController.getAllCourseEnrollmentsOfUsers);
module.exports = router;
