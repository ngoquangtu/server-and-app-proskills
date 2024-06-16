const express = require('express');
const  router=express.Router();
const userController=require('../controllers/userController');
const {  verifyToken } = require('../middleware/authJWT.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
router.get('/:id',userController.getUserInfor);
router.post('/views',verifyToken,userController.views);
router.post('/search-courses',userController.searchCourse);
router.post('/uploadavatar',verifyToken,upload.single('avatar'),userController.uploadAvatar);
router.post('/getavatar',verifyToken,userController.getAvatar);
router.post('/feedback',verifyToken,userController.writeFeedback);
module.exports=router;

