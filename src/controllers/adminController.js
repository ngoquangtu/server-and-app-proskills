
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
exports.getAllComment= async(req,res)=>
{
    try {
        const comment = await Comment.getAllCommentbyAdmin();
        console.log(comment);
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching comment', error: err.message });
    }
}
exports.getAllUsers=async(req,res)=>
{
    try {
        const userInfor = await User.getAllUserInfor();
        res.status(200).json(userInfor);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching comment', error: err.message });
    }
}
exports.updateCourses=async (req,res)=>
{
    const courseId= req.body;
    const { title, description, content } = req.body;
    try 
    {
        const updateCourse=await Course.update(title,description,content,courseId);
        res.status(200).json(updateCourse);

    }
    catch(err)
    {
        res.status(500).json({message:'Error update course',error:err.message});
    }
}
exports.deleteCourse=async(req,res)=>
{
    const courseId=req.body;
    try
    {
        const deleteCourse=await Course.delete(courseId);
        res.status(200).json(deleteCourse);
    }
    catch(err)
    {
        res.status(500).json({message:'Error delete course'});
    }
}
