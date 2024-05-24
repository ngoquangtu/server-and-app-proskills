import React, { useState } from 'react';
import youtubeService from '../services/youtubeService';

const YoutubeEmbedder = () => {
    const [url, setUrl] = useState('');
    const [embedCode, setEmbedCode] = useState('');

    const handleEmbed = (e) => {
        e.preventDefault();
        const embed = youtubeService.getEmbedCode(url);
        setEmbedCode(embed);
    };

    return (
        <div>
            <h2>YouTube Embedder</h2>
            <form onSubmit={handleEmbed}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter YouTube URL"
                />
                <button type="submit">Get Embed Code</button>
            </form>
            {embedCode && (
                <div>
                    <h3>Embed Code:</h3>
                    <div dangerouslySetInnerHTML={{ __html: embedCode }} />
                </div>
            )}
        </div>
    );
};

export default YoutubeEmbedder;
