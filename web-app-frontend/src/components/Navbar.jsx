import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/register">Register</Link></div>
        <div><Link to="/login">Login</Link></div>
      </ul>
    </nav>
  );
};

export default Navbar;
