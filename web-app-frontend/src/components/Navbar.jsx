import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  backgroundColor: '#2c3e50',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: '0',
  padding: '0',
};

const liStyle = {
  margin: '0 15px',
};

const linkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
};

const linkHoverStyle = {
  color: '#3498db',
};

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/register"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Register
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/login"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
