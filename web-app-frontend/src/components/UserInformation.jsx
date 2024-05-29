import React, { useState } from 'react';
import userService from '../services/userService'; 

const UserInformation = () => {
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await userService.getUserInfor(userId);
            setUser(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUser();
    };

    return (
        <div>
            <h2>User Information</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    User ID:
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </label>
                <button type="submit">Fetch User Info</button>
            </form>
            {loading && <p>Loading user information...</p>}
            {error && <p>Error fetching user information: {error.message}</p>}
            {user && (
                <div>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    {user.role && <p><strong>Role:</strong> {user.role}</p>}
                    {user.avatar_url && (
                        <div>
                            <strong>Avatar:</strong>
                            <img src={user.avatar_url} alt="User Avatar" width="100" />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserInformation;
