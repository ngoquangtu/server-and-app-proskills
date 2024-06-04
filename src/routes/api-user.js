const express = require('express');
const  router=express.Router();
const userController=require('../controllers/userController');
const {  verifyToken,isAdmin } = require('../middleware/authJWT.js');

router.get('/:id',userController.getUserInfor);
router.post('/views',userController.views);
router.get('/search-courses',userController.searchCourse);
router.post('/uploadavatar',verifyToken,userController.uploadAvatar);
module.exports=router;

