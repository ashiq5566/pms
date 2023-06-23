// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    // Add more styles as needed
  };

  return (
    <div style={navbarStyle}>
        <Link to="/" style={{ marginRight: '10px', color: 'white' }}>
            Home
        </Link>
        <Link to="/about" style={{ marginRight: '10px', color: 'white' }}>
            About
        </Link>
        <Link to="/contact" style={{ marginRight: '10px', color: 'white' }}>
            Contact
        </Link>
        <Link to="/signin" style={{ marginRight: '10px', color: 'white' }}>
            Login
        </Link>
    </div>
  );
};

export default Navbar;
