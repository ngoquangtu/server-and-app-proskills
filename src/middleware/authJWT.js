const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken=(req,res,next)=>
{
    const token=req.cookies.token;
    if(!token)
    {
        return res.send(403).json({message:'No token provided'});
    }
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>
    {
        if (err) {
            return res.status(200).json({ message: 'Failed to authenticate token.' });
        }
        req.userId = decoded.userId;
        req.username = decoded.username;
        req.role = decoded.role;
        next();
    });
};
exports.isAdmin = (req, res, next) => {
    if (req.role !== 'admin') {
        return res.status(403).json({ message: 'Require Admin Role!' });
    }
    next();
};