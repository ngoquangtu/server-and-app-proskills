    
const Course = require('../models/courseModel');

exports.createCourse = async (req, res) => {
    try {
        const course = req.body;
        const newCourse = await Course.create(course);
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(500).json({ message: 'Error creating course', error: err.message });
    }
};

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

exports.updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = req.body;
        const updatedCourse = await Course.update(id, course);
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (err) {
        res.status(500).json({ message: 'Error updating course', error: err.message });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourse = await Course.delete(id);
        if (!deletedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting course', error: err.message });
    }
};
