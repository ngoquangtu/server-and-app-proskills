const Status = require('../models/constant')
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config();

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userByEmail = await User.findEmail(email);
        if (userByEmail) {
            return res.status(200).json({type: Status.INVALID_EMAIL, message: 'Email already exists, try again!!!' });
        }
        await User.createInfo({ username, email, password });
        res.status(200).json({type: Status.SUCCESS, message: 'User registered successfully' }); // 201 Created
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ message: 'Error while registering', error: err.message }); 
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findEmail(email);
        const userInfo = await User.findInforUser(email);
        if (!user) {
            return res.status(404).json({type:Status.INVALID_EMAIL, message: 'Email does not exist. Please try again!' }); // 404 Not Found
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ type:Status.INVALID_PASSWORD,message: 'Email or password is wrong!' }); // 401 Unauthorized
        }
        const token = jwt.sign(
            { userId: user.id, username: user.username, role: user.role, isPopup: false },
            process.env.SECRET_KEY,
            { expiresIn: '5h' }
        );
        res.cookie('token', token, { httpOnly: true});
        res.status(200).json({type:Status.SUCCESS, token, userInfo }); 
    } catch (err) {
        console.error('Error during authentication:', err);
        res.status(500).json({ message: 'Error during authentication', error: err.message }); 
    }   
};

exports.logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logged out successfully' }); // 200 OK
    } catch (err) {
        console.error('Error logging out:', err);
        res.status(500).json({ message: 'Error logging out', error: err.message }); // 500 Internal Server Error
    }
};

exports.sendEmail = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' }); // 404 Not Found
        }
        
        const token = crypto.randomBytes(20).toString('hex');
        await User.sendEmail(email, token);
        
        res.status(200).json({ message: 'Reset email sent successfully' }); // 200 OK
    } catch (err) {
        console.error('Error sending reset email:', err);
        res.status(500).json({ message: 'Error sending reset email', error: err.message }); // 500 Internal Server Error
    }
};

exports.changePassword = async (req, res) => {
    const { email, password, newPassword } = req.body;
    try {
        const user = await User.findEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'Email does not exist. Please try again!' }); // 404 Not Found
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Email or password is wrong!' }); // 401 Unauthorized
        }
        
        const success = await User.changePassword(newPassword, user.email);
        if (success) {
            res.status(200).json({ message: 'Password changed successfully' }); // 200 OK
        } else {
            res.status(500).json({ message: 'Failed to change password' }); // 500 Internal Server Error
        }
    } catch (err) {
        console.error('Error during password change:', err);
        res.status(500).json({ message: 'Error during authentication', error: err.message }); // 500 Internal Server Error
    }
};
