import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/';

const register = async (username, email, password) => {
    try
    {
      const response=await axios.post(API_URL + 'register', { username, email, password });
      
      return response.data;
    }
    catch(error)
    {
      throw new Error('Register failed');
    }
};

const login = async (email, password) => {
    try {
        const response = await axios.post(API_URL + 'login', { email, password });
        if (response.data.token) {
            document.cookie = `token=${response.data.token};path=/`;
        }
        return response.data;
    } catch (error) {
        throw new Error('Login failed');
    }
};

const logout = async () => {
    try {
        await axios.post(API_URL + 'logout');
        document.cookie = 'token=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;secure;HttpOnly;SameSite=Strict';
        return { message: 'Logged out successfully' };
    } catch (error) {
        throw new Error('Logout failed');
    }
};

const authService = {
    register,
    login,
    logout
};

export default authService;
