import React, { useState } from 'react';
import authService from '../services/authService';

const ResetPassword = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.resetPassword(email);
            setMessage(response.message); 
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleResetPassword}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Send Password Reset Email</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;
