
const Course = require('../models/courseModel');
const Comment = require('../models/commentModel');

exports.createCourse = async (req, res) => {
    const { title, description, content } = req.body;

    try {
        const newCourse = await Course.create({ title, description, content, createdBy: req.userId });
        res.status(201).json({ message: 'Course created successfully', course: newCourse });
    } catch (err) {
        console.error('Error creating course:', err);
        res.status(500).json({ message: 'Failed to create course' });
    }
};

exports.deleteComment = async (req, res) => {
    const { commentId } = req.body;

    try {
        const result = await Comment.delete({ where: { id: commentId } });
        if (result) {
            res.status(200).json({ message: 'Comment deleted successfully' });
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    } catch (err) {
        console.error('Error deleting comment:', err);
        res.status(500).json({ message: 'Failed to delete comment' });
    }
};
