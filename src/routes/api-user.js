const express = require('express');
const  router=express.Router();
const userController=require('../controllers/userController');
const {  verifyToken,isAdmin } = require('../middleware/authJWT.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
router.get('/:id',userController.getUserInfor);
router.post('/views',userController.views);
router.post('/search-courses',userController.searchCourse);
router.post('/uploadavatar',verifyToken,upload.single('avatar'),userController.uploadAvatar);
router.post('/getavatar',verifyToken,userController.getAvatar);
module.exports=router;

