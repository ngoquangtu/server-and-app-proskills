const express=require('express');
const router = express.Router();

const { verifyToken, isAdmin } = require('../middleware/authJWT.js');

router.post('/create-course', [verifyToken, isAdmin], adminController.createCourse);
router.delete('/delete-comment', [verifyToken, isAdmin], adminController.deleteComment);