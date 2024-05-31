import React, { useState } from 'react';
import authService from '../services/authService';

function ResetPassword() {
    const [gmail, setGmail] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await authService.resetPassword(gmail);
            setMessage('Password reset email sent');
        } catch (error) {
            setMessage('Password reset failed');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleResetPassword}>
                <input type="email" placeholder="Gmail" value={gmail} onChange={(e) => setGmail(e.target.value)} required />
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ResetPassword;
