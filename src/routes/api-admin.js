const express=require('express');
const router = express.Router();

const { verifyToken, isAdmin } = require('../middleware/authJWT.js');
const adminController = require('../controllers/adminController.js');

router.post('/create-course', [verifyToken, isAdmin], adminController.createCourse);
router.delete('/delete-comment', [verifyToken, isAdmin], adminController.deleteComment);
router.get('/comments',adminController.getAllComment);
router.get('/allusers',adminController.getAllUsers);
router.get('/update-course',adminController.updateCourses);
router.get('/delete-course',adminController.deleteCourse);

module.exports=router;