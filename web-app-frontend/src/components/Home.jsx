
import React, { useEffect } from 'react';
import userService from '../services/userService'; 
  

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
        try {
             await userService.view();
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };
    fetchData();
}, []);
  return (
    <div>
      <h2>Welcome to the Online Learning Platform</h2>
    </div>
  );
};

export default Home;
