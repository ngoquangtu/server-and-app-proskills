
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

export default {
    getAllCourses
};
