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
};
exports.views=async(req,res)=>
{
    try
    {
        const viewCount=await User.views();
        res.status(200).json(viewCount);
    }
    catch(err)
    {
        res.status(500).json({message: 'Error view page',error:err.message});
    }
}
exports.searchCourse=async(req,res)=>
    {
        try
        {
            const title=req.body;
            const courses=await User.searchCourse(title);
            if (!courses) {
                return res.status(404).json({ message: 'Courses not found' });
            }
            res.status(200).json(courses);
            
        }
        catch(err)
        {
            res.status(500).json({message: 'Error search courses',error:err.message});
        }
    }
