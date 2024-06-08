const express=require('express');
const  router=express.Router();
const youtubeController=require('../controllers/youtubeController');

router.post('/search',youtubeController.searchYoutube);
router.post('/embeded-code',youtubeController.getEmbededCode);

module.exports=router;
