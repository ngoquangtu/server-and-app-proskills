const Course = require('../models/courseModel');
const Comment = require('../models/commentModel');
const User = require('../models/userModel');

exports.createCourse = async (req, res) => {
    const { title, description, content } = req.body;

    try {
        const newCourse = await Course.create({ title, description, content, createdBy: req.userId });
        res.status(201).json({ message: 'Course created successfully', course: newCourse });
    } catch (err) {
        console.error('Error creating course:', err);
        res.status(500).json({ message: 'Failed to create course', error: err.message });
    }
};

exports.deleteComment = async (req, res) => {
    const { commentId } = req.body;

    try {
        const result = await Comment.destroy({ where: { id: commentId } });
        if (result) {
            res.status(200).json({ message: 'Comment deleted successfully' });
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    } catch (err) {
        console.error('Error deleting comment:', err);
        res.status(500).json({ message: 'Failed to delete comment', error: err.message });
    }
};

exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.status(200).json(comments);
    } catch (err) {
        console.error('Error fetching comments:', err);
        res.status(500).json({ message: 'Error fetching comments', error: err.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
};

exports.updateCourse = async (req, res) => {
    const { courseId, title, description, content } = req.body;
    
    try {
        const [updated] = await Course.update(
            { title, description, content },
            { where: { id: courseId } }
        );
        if (updated) {
            const updatedCourse = await Course.findOne({ where: { id: courseId } });
            res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (err) {
        console.error('Error updating course:', err);
        res.status(500).json({ message: 'Failed to update course', error: err.message });
    }
};

exports.deleteCourse = async (req, res) => {
    const { courseId } = req.body;
    
    try {
        const result = await Course.destroy({ where: { id: courseId } });
        if (result) {
            res.status(200).json({ message: 'Course deleted successfully' });
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (err) {
        console.error('Error deleting course:', err);
        res.status(500).json({ message: 'Failed to delete course', error: err.message });
    }
};

exports.stats = async (req, res) => {
    try {
        const stats = await User.stats();
        res.status(200).json(stats);
    } catch (err) {
        console.error('Error fetching stats:', err);
        res.status(500).json({ message: 'Failed to fetch stats', error: err.message });
    }
};
