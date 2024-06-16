const db = require('../public/db');
const dbfirebase=require('../public/dbfirebase');
const bcrypt = require('bcrypt');
const nodemailer=require('nodemailer');
const fs = require('fs');
const path = require('path');
const { OAuth2Client } = require('google-auth-library');

require('dotenv').config();
const User = {
    createInfo: async (user) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(user.password, salt);
            let arrayDefaultAvatar=['https://firebasestorage.googleapis.com/v0/b/lexiland2024.appspot.com/o/avatars%2FavatarDefault.jfif?alt=media&token=8dc1b7e2-950d-4b46-bd63-8f6d750f3827',
                'https://firebasestorage.googleapis.com/v0/b/lexiland2024.appspot.com/o/avatars%2Favatar1.jpg?alt=media&token=d12203ef-e29b-4168-b986-bd6b181a1ca5',
                'https://firebasestorage.googleapis.com/v0/b/lexiland2024.appspot.com/o/avatars%2Favatar2.png?alt=media&token=cd930998-7de5-46a8-a013-679bf534eff4',
                'https://firebasestorage.googleapis.com/v0/b/lexiland2024.appspot.com/o/avatars%2Favatar3.png?alt=media&token=c8e79fa0-7ecc-4e3b-b9b8-d76c997f928d',
                'https://firebasestorage.googleapis.com/v0/b/lexiland2024.appspot.com/o/avatars%2Favatar4.jpg?alt=media&token=5a2da0af-a24c-40b5-83cd-e6d5c41d755a'
            ];
            const defaultAvatar_url = arrayDefaultAvatar[Math.floor(Math.random() * arrayDefaultAvatar.length)];

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
        const GOOGLE_MAILER_CLIENT_ID = process.env.GOOGLE_MAILER_CLIENT_ID
        const GOOGLE_MAILER_CLIENT_SECRET = process.env.GOOGLE_MAILER_CLIENT_SECRET
        const GOOGLE_MAILER_REFRESH_TOKEN = process.env.GOOGLE_MAILER_REFRESH_TOKEN
        const ADMIN_EMAIL_ADDRESS = process.env.ADMIN_EMAIL_ADDRESS

        const myOAuth2Client = new OAuth2Client(
            GOOGLE_MAILER_CLIENT_ID,
            GOOGLE_MAILER_CLIENT_SECRET
          )
          myOAuth2Client.setCredentials({
            refresh_token: GOOGLE_MAILER_REFRESH_TOKEN
          })
        try {
            const myAccessTokenObject = await myOAuth2Client.getAccessToken()
            // Access Token sẽ nằm trong property 'token' trong Object mà chúng ta vừa get được ở trên
            const myAccessToken = myAccessTokenObject?.token
            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: ADMIN_EMAIL_ADDRESS,
                    clientId: GOOGLE_MAILER_CLIENT_ID,
                    clientSecret: GOOGLE_MAILER_CLIENT_SECRET,
                    refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
                    accessToken: myAccessToken
                }
                })  

            const mailOptions = {
                to: email,
                subject: 'Reset Password in proSkills.com',
                html: `<p>You requested for reset password, kindly use this <a href="http://localhost:8000/resetpassword?token=${token}">link</a> to reset your password</p>`,
            };
            console.log('Mail Options:', mailOptions);

            await transport.sendMail(mailOptions);
             
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
            const json = await fs.promises.readFile(filePath, 'utf-8');
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
    feedBack :async ( feedback,userId) => {
        try
        {
            const query = 'INSERT INTO feedback (feedback,userId) VALUES (?,?) ';
            const rows = await db.query(query, [feedback,userId]);
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
