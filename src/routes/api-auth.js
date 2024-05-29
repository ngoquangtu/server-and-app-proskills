const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');
const { verifyToken } = require('../middleware/authJWT.js');
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout',verifyToken, authController.logout);
router.post('/resetpassword',authController.sendEmail);
module.exports = router;
