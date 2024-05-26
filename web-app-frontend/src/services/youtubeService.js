import axios from 'axios';
import Youtube  from '../models/youtubeModel';
const API_KEY = 'AIzaSyCmKDK1fsiRPOwCjxRwZxU4OduBFEQBEPw';

const searchYouTube = async (query) => {
    const url = 'https://www.googleapis.com/youtube/v3/search';

    try {
        const response = await axios.get(url, { 
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                key: API_KEY,
                maxResults: 20,
            },
        });
        return response.data.items;
    } catch (error) {
        console.error('Error searching YouTube:', error);
        throw new Error('Error searching YouTube');
    }
};
const getEmbedCode= (url)=>
{
    const videoId = Youtube.extractVideoId(url);
    
    if (videoId) {
        return Youtube.generateEmbededCode(videoId);
    } else {
        return 'Invalid YouTube URL';
    }
};

const youtubeService = { searchYouTube,getEmbedCode };
export default youtubeService;
