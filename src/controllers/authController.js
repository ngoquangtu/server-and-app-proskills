const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto=require('crypto');
// const uuidv4 = require('uuid').v4;// create an unique string
require('dotenv').config();

exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userByEmail = await User.findEmail(email);
        if (userByEmail) {
            return res.json({ message: 'Email already exists, try again!!!' });
        }
        await  User.createInfo({ username, email, password });
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
        const token = jwt.sign({ userId: user.id, username: user.username,role: user.role,isPopup: false }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // const session_id=uuidv4();
        // console.log(session_id);
        // await User.saveSessionId(session_id,user.id);

        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        // res.cookie('session_id', session_id, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        res.status(200).json({ message: 'Authentication successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error during authentication' });
    }
};

exports.logout =async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
};
exports.sendEmail=async (req,res)=>
{
    const {email}=req.body;

    try
    {
        const user=await User.findEmail(email);
        if(!user)
        {
            return res.status(404).json({ message: 'User not found' });

        }
        const token = crypto.randomBytes(20).toString('hex');
        await User.sendEmail(email,token);

        res.json({ message: 'Reset email sent successfully' });
    }
    catch(err)
    {
        throw err;
    }
};
