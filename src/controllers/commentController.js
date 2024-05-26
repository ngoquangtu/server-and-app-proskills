const Comment=require('../models/commentModel');

exports.delete=async(req,res)=>
{
    try {
        const { id } = req.params;
        await Comment.delete(id);
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting comment' });
    }
};
exports.create=async(req,res)=>
{
    try
    {
        const { content, rating } = req.body;
        const courseId = req.params.courseId;
        const userId = req.userId;
        const comment = await Comment.create({ courseId,userId,content, rating  });
        res.status(201).json(comment);
    }
    catch(err)
    {
        res.status(500).json({ message: 'Error creating comment' });
    }

    
};
exports.getAllComment=async(req,res)=>
{
    try
    {
        courseId=req.params.courseId;
        const comment=await Comment.getAllComment;
        res.status(201).json(comment);
    }
    catch(err)
    {
        res.status(500).json({message:'Error get all comment by course'});
    }
};
