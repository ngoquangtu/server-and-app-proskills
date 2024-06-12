import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Logout from './components/Logout';
import AvatarUpload from './components/AvatarUpload';

function App() {
    return (
        <Router>
            <div>
                <h1>Auth App</h1>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/upload" element={<AvatarUpload/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
