const express=require('express');
const  router=express.Router();
const youtubeController=require('../controllers/youtubeController');

router.get('/search',youtubeController.searchYoutube);
router.get('/embeded-code',youtubeController.getEmbededCode);

module.exports=router;
