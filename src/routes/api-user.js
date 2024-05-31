const express = require('express');
const  router=express.Router();
const userController=require('../controllers/userController');

router.get('/:id',userController.getUserInfor);
router.post('/views',userController.views);
router.get('/search-courses',userController.searchCourse);
module.exports=router;

