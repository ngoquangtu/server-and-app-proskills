

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
  },
  updateCourse: async (courseData)=>
    {
      try{
        const response=await axios.put(`${API_URL}/update-course`,courseData);
        return response.data;
      }
      catch(err)
      {
        throw err;
      }
    },
  getAllUserInfor: async()=>
  {
    try{
      const response=await axios.get(`${API_URL}/allusers`);
      return response.data;
    }
    catch(err)
    {
      throw err;
    }
  },
  deleteCourse: async(courseId)=>
  {
    try{
      const response=await axios.delete(`${API_URL}/delete-course`,courseId);
      return response.data;
    }
    catch(err)
    {
      throw err;
    }
  },
  viewStats: async ()=>
    {
      try
      {
        const response=await axios.get(`${API_URL}/stats`);
        return response.data;
      }
      catch(err)
      {
        throw err;
      }
    }
};

export default adminService;
