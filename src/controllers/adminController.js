const Course = require('../models/courseModel');
const Comment = require('../models/commentModel');
const User = require('../models/userModel');

exports.createCourse = async (req, res) => {
    const { title, description, publisher ,thumbnail} = req.body;

    try {
        const newCourse = await Course.create( title, description, publisher ,thumbnail);
        res.status(201).json({ message: 'Course created successfully', course: newCourse });
    } catch (err) {
        console.error('Error creating course:', err);
        res.status(500).json({ message: 'Failed to create course' });
    }
};
exports.insertVideoByCourse=async (req,res)=>
{
    const {id,courseId,title,description,link}=req.body;
    try
    {
        const result=await Course.insertVideoByCourse(id,courseId,title,description,link);
        res.status(200).json(result);
    }
    catch(err)
    {
        res.status(500).json({message:'Error insert video by course',error:err.message});
    }
}
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
    const {courseId}=req.body;
    try {
        const comment = await Course.getAllCommentbyAdmin(courseId);
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
exports.deleteCourse = async (req, res) => {
    const courseId = req.params.id; 
    try {
        const result = await Course.delete(courseId); // Pass the courseId to delete function
        res.status(200).json({ success: true, message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ success: false, message: 'Error deleting course' });
    }
};
exports.stats=async(req,res)=>
{
    try
    {
        const stats=await User.stats();
        res.status(200).json(stats);
    }
    catch(err)
    {
        res.status(500).json({message:'Error view stats'});
    }
}
exports.readFeedback=async(req,res)=>
{
    try
    {
        const fb=await User.readFeedback();
        res.status(200).json(fb);
    }
    catch(err)
    {
        res.status(500).json({message:'Error read feedback'});
    }
}
exports.getAllCourse=async(req,res)=>
{
    try
    {
        const courses=await Course.getAll();
        res.status(200).json(courses);
    }
    catch(err)
    {
        res.status(500).json({message:'Error read courses'});
    }
}
