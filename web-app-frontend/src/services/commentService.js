import axios from 'axios';

const API_URL = 'http://localhost:8000/api/comments';

const createComment = async (courseId, content, rating) => {
    const response = await axios.post(`${API_URL}/courses/${courseId}/comments`, {
        content,
        rating,
    }, {
    });
    return response.data;
};

const deleteComment = async (commentId) => {
    const response = await axios.delete(`${API_URL}/comments/${commentId}`, {
    });
    return response.data;
};

const getAllComments = async (courseId) => {
    const response = await axios.get(`${API_URL}/courses/${courseId}/comments`);
    return response.data;
};
const commentService={
    createComment,
    deleteComment,
    getAllComments
}
export default commentService;
