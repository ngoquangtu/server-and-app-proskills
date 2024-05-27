import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import YoutubeEmbedder from './components/YoutubeEmbedder';
import YoutubeSearch from './components/YoutubeSearch';
import Course from './components/Course';
import UserInformation from './components/UserInformation';
import AdminComponent from './components/adminComponent';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/youtube" element={<YoutubeEmbedder/>}/>
        <Route path="/youtubesearch" element={<YoutubeSearch/>}/>
        <Route path="/courses" element={<Course/>} />
        <Route path="/users" element={<UserInformation/>} />
        <Route path="/admin" element={<AdminComponent/>} />
        <Route path="/reset" element={<ResetPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
