import React, { useState } from 'react';
import userService from '../services/userService';

function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await userService.uploadAvatar(selectedFile);
            setMessage('Image uploaded successfully');
            console.log('Upload response:', response);
        } catch (err) {
            setMessage(`Error uploading image: ${err.message}`);
        }
    };

    return (
        <div>
            <h2>Upload Avatar</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} required />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Upload;
