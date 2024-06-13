const db = require('../public/db');
const dbfirebase=require('../public/dbfirebase');
const bcrypt = require('bcrypt');
const nodemailer=require('nodemailer');
const fs=require('fs').promises;
const path = require('path');


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
    changePassword:async(password,email)=>
    {
        try{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const query= `UPDATE users SET password = ? WHERE  email=?`;

            const result=await db.query(query,[hashedPassword,email]);
            return result;
        }
        catch(err)
        {
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
    findInforUser:async(email)=>
    {
        try {
            const query = 'SELECT username,role,id,email,avatar_url,created_at FROM users WHERE email = ?';
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
    },
    searchCourse:async(title)=>
    {
        try
        {
            const query = 'SELECT * FROM Courses WHERE title LIKE ?';
            const rows = await db.query(query, [`%${title}%`]);
            return rows;
        }
        catch(err)
        {
            throw err;
        }
    },
    views :async()=>
    {
        try{
            const filePath = path.join(__dirname, '../public/count.json');
            const json = fs.readFileSync(filePath, 'utf-8');
            const stats = JSON.parse(json);
            stats.pageviews++;
            fs.writeFileSync(filePath, JSON.stringify(stats, null, 2), 'utf-8');
        }
        catch(err)
        {
            throw err;
        }
    },
    stats: async()=>
    {
        try
        {
            const filePath = path.join(__dirname, '../public/count.json');
            const json = fs.readFileSync(filePath, 'utf-8');
            const stats = JSON.parse(json);
            return stats;
        } catch (err) {
            console.error('Error reading or updating stats:', err);
            throw err;
        }
    },
    uploadAvatar: async(img,id)=>
    {
       try
       {
            const avatarUrl = await dbfirebase.uploadAvatar(img);

            if (avatarUrl) {
                const query = 'UPDATE users set avatar_url=? WHERE id=?';
                await db.query(query, [avatarUrl, id]);
                return avatarUrl;
            }
            return null;
       }
       catch(err)
       {
            throw err;
       }
    },
    readAvatar: async(id)=>
    {
        try
        {
             const query='SELECT avatar_url from users WHERE id= ?';
             const rows=await db.query(query,[id]);
             return rows[0];
        }
        catch(err)
        {
             throw err;
        }
    },
    feedBack :async ( comment,id) => {
        try
        {
            const query = 'INSERT INTO feedback (feedback) VALUES (?) WHERE userId=?';
            const rows = await db.query(query, [comment,id]);
            return rows;
        }
        catch(err)
        {
            throw err;
        }
    },
    readFeedback: async()=>
    {
        try
        {
            const query='SELECT feedback.feedback,users.username,users.avatar_url FROM feedback LEFT JOIN users ON feedback.userId = users.id';
            const rows=await db.query(query);
            return rows;
        }
        catch(err)
        {
            throw err;
        }
    }
};

module.exports = User;
