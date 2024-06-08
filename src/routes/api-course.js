
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const {  verifyToken } = require('../middleware/authJWT.js');
router.get('/',verifyToken,courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.get('/course/comment/:id',courseController.getAllComments);
module.exports = router;
