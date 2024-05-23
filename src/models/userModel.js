const db = require('../public/db');
const bcrypt = require('bcrypt');

const User = {
    create: async (user) => {
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
    }
};

module.exports = User;
