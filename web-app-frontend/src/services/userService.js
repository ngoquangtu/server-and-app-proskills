import axios from 'axios';

const API_URL="http://localhost:8000/api/users/"

const getUserInfor=async(userId)=>
{
    try
    {
        const response=await axios.get(`${API_URL}${userId}`);
        return response.data;
    }
    catch(err)
    {
        throw err;
    }
}
const userService={
    getUserInfor
}
export default userService;