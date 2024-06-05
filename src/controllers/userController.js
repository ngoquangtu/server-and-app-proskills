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
};
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
    };
exports.uploadAvatar=async(req,res)=>
{
    try
    {

        const userId = req.user?.userId; 
        if (!req.file) {
            return res.status(400).send('No file selected');
          }
        const allowedFormats = ['image/png', 'image/jpeg'];
        if (!allowedFormats.includes(req.file.mimetype)) {
            return res.status(400).send('Invalid file format. Only PNG and JPEG are allowed.');
        }
        const image = {
            data: fs.readFileSync(req.file.path),
            name: req.file.originalname,
        };
       await User.uploadAvatar(image,userId);
        res.status(201).send({ message: 'Image uploaded successfully' });
    }
    catch(err)
    {
        res.status(500).json({message:'Error upload img '});
    }
};
exports.getAvatar = async (req, res) => {
    try {
        const { userId } = req.params;
        const avatar = await User.readAvatar(userId);
        if (!avatar) {
            return res.status(404).json({ message: 'Avatar not found' }); 
        }
        res.status(200).send(avatar); 
    } catch (err) {
        console.error('Error fetching avatar:', err);
        res.status(500).json({ message: 'Error fetching avatar', error: err.message });
    }
};