const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/resetpassword',authController.sendEmail);
router.post('/changepassword',authController.changePassword);
module.exports = router;
