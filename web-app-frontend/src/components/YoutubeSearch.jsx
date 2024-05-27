import React, { useState } from 'react';
import youtubeService from '../services/youtubeService';
import './YoutubeSearch.css'; // Import CSS file for styling

const YoutubeSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors  

        try {
            const data = await youtubeService.searchYoutube(query);
            if (data.length > 0) {
                setResults(data);
            } else {
                setError('No results found');
            }
        } catch (err) {
            console.error('Error searching YouTube:', err);
            setError('Error searching YouTube');
        }
    };

    return (
        <div className="youtube-search-container">
            <h2 className="youtube-search-title">YouTube Search</h2>
            <form onSubmit={handleSearch} className="youtube-search-form">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for videos"
                    className="youtube-search-input"
                />
                <button type="submit" className="youtube-search-button">Search</button>
            </form>
            {error && <p className="youtube-error-message">{error}</p>}
            <div className="youtube-results-container">
                {results.map((item) => (
                    <div key={item.id.videoId} className="youtube-video-item">
                        <h3 className="youtube-video-title">{item.snippet.title}</h3>
                        <div className="youtube-video-wrapper">
                            <iframe
                                title={item.snippet.title}
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className="youtube-video-iframe"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YoutubeSearch;
