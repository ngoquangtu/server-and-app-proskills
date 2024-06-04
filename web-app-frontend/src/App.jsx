import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Logout from './components/Logout';
import Upload from './components/UploadAvt';
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
                    <Route path="/upload" element={<Upload/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
