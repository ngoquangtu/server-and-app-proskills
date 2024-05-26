import axios from 'axios';

const API_URL = 'http://localhost:8000/api/comments/';

const createComment = async (courseId, content, rating, token) => {
    const response = await axios.post(`${API_URL}/courses/${courseId}/comments`, {
        content,
        rating,
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

const deleteComment = async (commentId, token) => {
    const response = await axios.delete(`${API_URL}/comments/${commentId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

const getAllComments = async (courseId) => {
    const response = await axios.get(`${API_URL}/courses/${courseId}/comments`);
    return response.data;
};

export default {
    createComment,
    deleteComment,
    getAllComments
};
