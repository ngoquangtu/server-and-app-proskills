import axios from 'axios';
import Youtube  from '../models/youtubeModel';

const API_KEY = process.env.YOUTUBE_API_KEY;

const searchYouTube = async (query: string) => {
    const url = 'https://www.googleapis.com/youtube/v3/search';

    try {
        const response = await axios.get(url, { 
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                key: API_KEY,
                maxResults: 5,
            },
        });
        return response.data.items;
    } catch (error) {
        console.error('Error searching YouTube:', error);
        throw new Error('Error searching YouTube');
    }
};
const getEmbedCode= (url: string) =>
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