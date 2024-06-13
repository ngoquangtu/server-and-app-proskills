
const User = require('../models/userModel');
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
};
exports.searchCourse=async(req,res)=>
    {
        try
        {
            const {title}=req.body;
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
    };
exports.uploadAvatar=async(req,res)=>
{
    try
    {

        const userId = req.user?.userId; 
        if (!req.file) {
            return res.status(400).send('No file selected');
          }
          const result = await User.uploadAvatar(req.file, userId);
          if (!result) {
              return res.status(500).json({ message: 'Error uploading avatar' });
          }
          res.status(201).json({ avatarUrl: result, message: 'Image uploaded successfully' });
    }
    catch(err)
    {
        res.status(500).json({message:'Error upload img '});
    }
};
exports.getAvatar = async (req, res) => {
    try {
        const  id  = req.user.userId;
        const avatar = await User.readAvatar(id);
        if (!avatar) {
            return res.status(404).json({ message: 'Avatar not found' }); 
        }
        res.status(200).send(avatar); 
    } catch (err) {
        console.error('Error fetching avatar:', err);
        res.status(500).json({ message: 'Error fetching avatar', error: err.message });
    }
};
exports.writeFeedback=async(req,res)=>
{
    try
    {
        const {feedback}=req.body;
        const userId=req.user?.userId;
        const rows=await User.feedBack(feedback,userId);
        res.status(200).send(rows); 
    }
    catch(err)
    {
        res.status(500).json({ message: 'Error feedback ', error: err.message });
    }
}