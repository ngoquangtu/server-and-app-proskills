    
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
        const course = await Course.getById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching course', error: err.message });
    }
};
