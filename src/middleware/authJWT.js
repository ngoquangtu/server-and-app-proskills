const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];

    if (!token || !token.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'No token provided' });
    }

    token = token.split(' ')[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token.' });
        }
        req.user = user;
        next();
    });
};

exports.isAdmin = (req, res, next) => {
    if (!req.user) {
        return res.status(403).json({ message: 'User not authenticated' });
    }
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Require Admin Role!' });
    }
    next();
};
