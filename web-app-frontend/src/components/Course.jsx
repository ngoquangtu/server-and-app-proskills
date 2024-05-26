import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import courseService from '../services/courseService';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const data = await courseService.getAllCourses();
            setCourses(data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const handleDeleteCourse = async (id) => {
        try {
            await courseService.deleteCourse(id);
            setCourses(courses.filter(course => course.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const handleUpdateCourse = async (id, updatedCourse) => {
        try {
            await courseService.updateCourse(id, updatedCourse);
            const updatedCourses = courses.map(course => {
                if (course.id === id) {
                    return { ...course, ...updatedCourse };
                }
                return course;
            });
            setCourses(updatedCourses);
        } catch (err) {
            setError(err);
        }
    };

    const handleCreateCourse = async (newCourse) => {
        try {
            const createdCourse = await courseService.createCourse(newCourse);
            setCourses([...courses, createdCourse]);
        } catch (err) {
            setError(err);
        }
    };

    if (loading) {
        return <p>Loading courses...</p>;
    }

    if (error) {
        return <p>Error fetching courses: {error.message}</p>;
    }

    return (
        <div>
            <h2>All Courses</h2>
            <div className="course-list">
                {courses.length > 0 ? (
                    courses.map(course => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            onDelete={handleDeleteCourse}
                            onUpdate={handleUpdateCourse}
                        />
                    ))
                ) : (
                    <p>No courses available</p>
                )}
            </div>
        </div>
    );
};

export default Courses;
