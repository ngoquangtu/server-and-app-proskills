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
};
const view=async()=>
{
    try
    {
        const response=await axios.post(API_URL+'/views');
        return response.data;
    }
    catch(err)
    {
        throw err ;
    }
        
};
const uploadAvatar=async(file)=>
{
    try
    {
        const formData = new FormData();
        formData.append('avatar', file);
        const response = await axios.post(`${API_URL}uploadavatar`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                withCredentials: true, // Include cookies in the request if needed
            },
        });
        return response.data;
    }
    catch(err)
    {
        throw err;
    }
};
const userService={
    getUserInfor,view,uploadAvatar
}
export default userService;