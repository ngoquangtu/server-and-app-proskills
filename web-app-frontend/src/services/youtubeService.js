
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/youtube'; 

const searchYoutube = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/search?q=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};
const getEmbededCode= async(url)=>
{
    try
    {
        const response = await axios.get(`${API_URL}/embeded-code?url=${encodeURIComponent(url)}`);
        return response.data;
    }
    catch(err)
    {
        throw err;
    }
}
const youtubeService={
    searchYoutube,
    getEmbededCode  
}
export default youtubeService;