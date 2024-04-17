import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Using Link from react-router-dom for navigation
import './Navbar.css'; // Ensure the CSS file is correctly linked
import Logo from './assets/nav_logo2.png';




const Navbar = () => {
  return (
      <nav className="app-navbar">
        <Link to="/home" className="nav-logo">
          <img src={Logo} alt="ts-logo" />
        </Link>
        <div className="nav-items">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/sports" className="nav-link">Sports</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/social" className="nav-link">Motion 🎥</Link>
          <Link to="/log-in" className="nav-link">Sign-In</Link>
        </div>
      </nav>

  );
};

export default Navbar;