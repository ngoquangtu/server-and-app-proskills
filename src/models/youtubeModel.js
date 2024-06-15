const axios = require('axios');
require('dotenv').config();

const Youtube = {
    searchYouTube: async (query) => {
        const url = 'https://www.googleapis.com/youtube/v3/search';
        const API_KEY = process.env.YOUTUBE_API_KEY;
        try {
            const response = await axios.get(url, {
                params: {
                    part: 'snippet',
                    q: query,
                    type: 'video',
                    key: API_KEY,
                    maxResults: 4,
                },
            });
            return response.data.items;
        } catch (error) {
            console.error('Error searching YouTube:', error);
            throw new Error('Error searching YouTube');
        }
    },

    getEmbedCode: (url) => {
        const videoId = Youtube.extractVideoId(url);
        if (videoId) {
           return videoId;
        } else {
            return 'Invalid YouTube URL';
        }
    },

    extractVideoId: (url) => {
        try {
            if (!url || typeof url !== 'string') {
                throw new Error('Invalid URL');
            }
            // const regExp = /^.*(youtu\.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|&v=|youtu\.be\/|\/v\/|\/embed\/|watch\?v=|\/?v=|\/v\/)([^#&?]*).*/;
         
            // if (match && match[2]) {
            //     return (match[2].length === 11) ? match[2] : null;
            // const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            const regExp = /([a-zA-Z0-9_-]{11})/;
            const match = url.match(regExp);
            if (match && match[0]) {
                return match ? match[0] : null;
            } else {
                throw new Error('Invalid URL');
            }
        } catch (err) {
            throw err;
        }
    },
}

module.exports = Youtube;
