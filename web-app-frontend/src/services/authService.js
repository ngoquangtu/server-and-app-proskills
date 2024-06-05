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
            return response.data;
        } catch (error) {
            throw new Error('Login failed');
        }
    };

    const logout = async () => {
        try {
            await axios.post(API_URL + 'logout');
            return { message: 'Logged out successfully' };
        } catch (error) {
            throw new Error('Logout failed');
        }
    };
    const resetPassword=async (gmail)=>
    {
        try
        {
            const response= await axios.post(API_URL+'resetpassword',{gmail});
            return response.data;
        }
        catch(err)
        {
            throw new Error('Send email failer');
        }
    }

    const authService = {
        register,
        login,
        logout,
        resetPassword
    };

    export default authService;