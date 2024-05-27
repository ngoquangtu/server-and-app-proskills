

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/admin'; 

const adminService = {
  createCourse: async (courseData) => {
    try {
      const response = await axios.post(`${API_URL}/create-course`, courseData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deleteComment: async (commentId) => {
    try {
      const response = await axios.delete(`${API_URL}/delete-comment`, { data: { commentId } });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAllComments: async () => {
    try {
      const response = await axios.get(`${API_URL}/comments`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default adminService;
