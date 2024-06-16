const Comment = require('../models/commentModel');

exports.delete = async (req, res) => {
    try {
        const { commentId,courseId } = req.params;
        const userId=req.user?.userId;

        const deleted = await Comment.delete(commentId,userId,courseId);
        if (deleted) {
            res.status(200).json({ message: 'Comment deleted successfully' }); 
        } else {
            res.status(404).json({ message: 'Comment not found' }); 
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
        const userId = req.user.userId;
        const comment = await Comment.create(courseId, userId, content );
        res.status(201).json(comment); // 201 Created
    } catch (err) {
        console.error('Error creating comment:', err);
        res.status(500).json({ message: 'Error creating comment', error: err.message }); 
    }
};


