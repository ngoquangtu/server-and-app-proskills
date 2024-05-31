import React, { useEffect, useState } from 'react';
import authService from '../services/authService';

function Logout() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const handleLogout = async () => {
            try {
                const response = await authService.logout();
                setMessage(response.message);
            } catch (error) {
                setMessage('Logout failed');
            }
        };
        handleLogout();
    }, []);

    return (
        <div>
            <h2>Logout</h2>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Logout;
