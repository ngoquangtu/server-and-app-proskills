const express=require('express');
const router = express.Router();

const {  verifyToken,isAdmin } = require('../middleware/authJWT.js');
const adminController = require('../controllers/adminController.js');

router.post('/create-course', [verifyToken ,isAdmin], adminController.createCourse);
router.delete('/delete-comment', [verifyToken ,isAdmin], adminController.deleteComment);
router.get('/comments',[verifyToken ,isAdmin],adminController.getAllComment);
router.get('/allusers',[verifyToken ,isAdmin],adminController.getAllUsers);
router.get('/update-course',[verifyToken ,isAdmin],adminController.updateCourses);
router.get('/delete-course',[verifyToken ,isAdmin],adminController.deleteCourse);
router.get('/stats',[verifyToken ,isAdmin],adminController.stats);


module.exports=router;