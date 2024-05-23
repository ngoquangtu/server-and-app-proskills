const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userByEmail = await User.findEmail(email);
        if (userByEmail) {
            return res.json({ message: 'Email already exists, try again!!!' });
        }

        await  User.create({ username, email, password });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ message: 'Error while registering' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findEmail(email);
        
        if (!user) {
            return res.status(200).json({ message: 'Email is not exists!!Please try again!!' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(200).json({ message: 'Email or password is wrong!!' });
        }

        const token = jwt.sign({ userId: user.id, username: user.username,role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.cookie('token', token, {  maxAge: 3600000 });
        res.status(200).json({ message: 'Authentication successfully' });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Error during authentication' });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
};
