    
const Course = require('../models/courseModel');


exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.getAll();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching courses', error: err.message });
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        await Course.calculateRateofCourse(id);
        const course = await Course.getById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching course', error: err.message });
    }
};  
exports.getAllComments = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await Course.getAllComments(id);
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching comments', error: err.message });
    }
};
exports.getAllCourseByRating= async(req,res)=>
{
    try
    {
        const courses=await Course.getFiveTopCoursesbyRating();
        res.status(200).json(courses);
    }
    catch(err)
    {
        res.status(500).json({message:'Error get course by rating',error:err.message});
    }
}
exports.gellAllCourseByComment= async(req,res)=>
{
    try
    {
        const courses=await Course.getFiveTopCoursesByComments();
        res.status(200).json(courses);
    }
    catch(err)
    {
        res.status(500).json({message:'Error get course by comment',error:err.message});
    }
}
exports.gellAllCourseByEnrollments= async(req,res)=>
{
    try
    {
        const courses=await Course.getFiveTopCoursesbyEnrollments();
        res.status(200).json(courses);
    }
    catch(err)
    {
        res.status(500).json({message:'Error get course by enrollments',error:err.message});
    }
}
