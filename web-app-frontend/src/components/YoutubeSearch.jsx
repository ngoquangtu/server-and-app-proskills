import React, { useState } from 'react';
import axios from 'axios';

const YoutubeSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors
        setResults([]); // Clear previous results

        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    q: query,
                    key: process.env.YOUTUBE_API_KEY,
                },
            });

            setResults(response.data.items);
        } catch (err) {
            console.error('Error searching YouTube:', err);
            setError('Error searching YouTube');
        }
    };

    return (
        <div>
            <h2>YouTube Search</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for videos"
                />
                <button type="submit">Search</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {results.map((item) => (
                    <li key={item.id.videoId}>
                        <h3>{item.snippet.title}</h3>
                        <p>{item.snippet.description}</p>
                        <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YoutubeSearch;
