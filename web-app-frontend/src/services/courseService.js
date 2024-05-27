
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/courses/'; 

const getAllCourses = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};
const getCourseById= async(courseId)=>
{
    try
    {
        const response=await axios.get(`${API_URL}${courseId}`);
        return response.data;
    }
    catch(err)
    {
        throw err;
    }
}
const courseService = {
    getAllCourses,
    getCourseById
};

export default courseService;
