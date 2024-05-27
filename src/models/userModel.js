const db = require('../public/db');
const bcrypt = require('bcrypt');
const nodemailer=require('nodemailer');
require('dotenv').config();
const User = {
    createInfo: async (user) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(user.password, salt);
            const defaultAvatar_url ='12151.svg';
            const role = 'user';
            const query = 'INSERT INTO users (username, email, password, role, avatar_url) VALUES (?, ?, ?, ?, ?)';
            const values = [user.username, user.email, hashedPassword, role, defaultAvatar_url];
            const result = await db.query(query, values);
            return result[0];
        } catch (err) {
            throw err;
        }
    },
    findEmail: async (email) => {
        try {
            const query = 'SELECT * FROM users WHERE email = ?';
            const rows = await db.query(query, [email]);
            return rows[0];
        } catch (err) {
            throw err;
        }
    },
    getUserInfor:async(userId)=>
    {
        try
        {
            const query ='SELECT * FROM users WHERE id=?';
            const rows=await db.query(query,[userId]);
            return rows[0];
        }
        catch(err)
        {
            throw err;
        }
    },
    getAllUserInfor:async()=>
    {
        try
        {
            const query='SELECT * FROM users';
            const rows =await db.query(query);
            return rows; 
        }
        catch(err)
        {
            throw err;
        }
    },
    sendEmail: async (email,token) => {
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                auth: {
                    user: 'willis.nader43@ethereal.email',
                    pass: 'xcB2E9FBem5EtyXaSK',
                },
            });

            const mailOptions = {
                from: 'willis.nader43@ethereal.email',
                to: email,
                subject: 'Reset Password in proSkills.com',
                html: `<p>You requested for reset password, kindly use this <a href="http://localhost:8000/resetpassword?token=${token}">link</a> to reset your password</p>`,
            };
            console.log('Mail Options:', mailOptions);

            await transporter.sendMail(mailOptions);
             
        } catch (err) {
            console.error('Error sending email:', err); 
            throw err;
        }
    }
};

module.exports = User;
