
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const {  verifyToken } = require('../middleware/authJWT.js');
router.get('/',verifyToken,courseController.getAllCourses);
router.get('/:id', verifyToken,courseController.getCourseById);
router.get('/video/:id',verifyToken,courseController.getAllVideoByCourse);
router.get('/comment/:id',verifyToken,courseController.getAllComments);
router.post('/mostrating',courseController.getAllCourseByRating);
router.post('/mostcomment',courseController.gellAllCourseByComment);
router.post('/mostenrollment',courseController.gellAllCourseByEnrollments);
router.post('/enrollments',verifyToken,courseController.getAllCourseEnrollmentsOfUsers);
router.post('/enrollmentbyId',verifyToken,courseController.enrollCourse);
router.post('/rating/:courseId',verifyToken,courseController.createRating);
module.exports = router;
