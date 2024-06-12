import React, { useState } from 'react';
import axios from 'axios';

const AvatarUpload = () => {
    const [avatar, setAvatar] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        setAvatar(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!avatar) {
            setError('Please select an avatar file.');
            return;
        }

        const formData = new FormData();
        formData.append('avatar', avatar);

        try {
            const response = await axios.post('http://localhost:8000/api/users/uploadavatar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setAvatarUrl(response.data.avatarUrl);
            setError('');
        } catch (err) {
            setError('Error uploading avatar');
        }
    };

    return (
        <div>
            <h1>Upload Avatar</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {avatarUrl && (
                <div>
                    <h2>Uploaded Avatar:</h2>
                    <img src={avatarUrl} alt="Avatar" width="200" />
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default AvatarUpload;
