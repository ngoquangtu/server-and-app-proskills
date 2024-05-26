const express = require('express');
const  router=express.Router();
const userController=require('../controllers/userController');

router.get('/:id',userController.getUserInfor);
router.get('/',userController.getAllUserInfor);
module.exports=router

