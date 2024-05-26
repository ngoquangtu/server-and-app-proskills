const User =require('../models/userModel');

exports.getUserInfor=async (req,res)=>
{
    try
    {
        const {id}= req.params;
        const userInfor= await User.getUserInfor(id);
        if (!userInfor) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(userInfor);
    }
    catch(err)
    {
        res.status(500).json({ message: 'Error get user infor', error: err.message });
    }
}
exports.getAllUserInfor=async(req,res)=>
{
    try
    {
        const userInfor=await User.getAllUserInfor();
        res.status(200).json(userInfor);
    }
    catch(err)
    {
        res.status(500).json({ message: 'Error get user infor', error: err.message });
    }
}