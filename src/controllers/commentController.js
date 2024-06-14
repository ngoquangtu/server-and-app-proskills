const Comment = require('../models/commentModel');

exports.delete = async (req, res) => {
    try {
        const { commentId } = req.params;
        const deleted = await Comment.delete(commentId);
        if (deleted) {
            res.status(200).json({ message: 'Comment deleted successfully' }); // 200 OK
        } else {
            res.status(404).json({ message: 'Comment not found' }); // 404 Not Found
        }
    } catch (err) {
        console.error('Error deleting comment:', err);
        res.status(500).json({ message: 'Error deleting comment', error: err.message }); 
    }
};

exports.create = async (req, res) => {
    try {
        const { content } = req.body;
        const courseId = req.params.courseId;
        const userId = req.userId;
        const comment = await Comment.create({ courseId, userId, content });
        res.status(201).json(comment); // 201 Created
    } catch (err) {
        console.error('Error creating comment:', err);
        res.status(500).json({ message: 'Error creating comment', error: err.message }); 
    }
};
exports.createRating=async(req,res)=>
    {
        try
        {
            const {rating}=req.body;
            const courseId=req.params.courseId;
            const result=await Comment.createRating(courseId,rating);
            res.status(200).json(result);
        }
        catch(err)
        {
            res.status(500).json({message:'Error create rating',error:err.message});
        }
    }
exports.getAllComment = async (req, res) => {
    try {
        const { courseId } = req.params;
        const comments = await Comment.getAllComment(courseId);
        res.status(200).json(comments); // 200 OK
    } catch (err) {
        console.error('Error getting all comments:', err);
        res.status(500).json({ message: 'Error getting all comments by course', error: err.message }); 
    }
};
