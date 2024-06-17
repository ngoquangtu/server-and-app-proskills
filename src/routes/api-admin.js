const express=require('express');
const router = express.Router();

const {  verifyToken,isAdmin } = require('../middleware/authJWT.js');
const adminController = require('../controllers/adminController.js');

router.post('/create-course', [verifyToken ,isAdmin], adminController.createCourse);
router.post('/insertvideo',[verifyToken ,isAdmin],adminController.insertVideoByCourse);
router.delete('/delete-comment/:id', [verifyToken ,isAdmin], adminController.deleteComment);
router.get('/comments/:id',[verifyToken ,isAdmin],adminController.getAllComment);
router.get('/allusers',[verifyToken ,isAdmin],adminController.getAllUsers);
router.get('/update-course',[verifyToken ,isAdmin],adminController.updateCourses);
router.delete('/delete-course/:id',[verifyToken ,isAdmin],adminController.deleteCourse);
router.get('/stats',[verifyToken ,isAdmin],adminController.stats);
router.get('/feedback',[verifyToken ,isAdmin],adminController.readFeedback);
router.get('/allcourses',[verifyToken,isAdmin],adminController.getAllCourse);

module.exports=router;