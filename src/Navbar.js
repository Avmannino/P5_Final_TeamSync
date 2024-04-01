import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './assets/nav_logo.png'; // Import your logo image here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navlogo-container">
        <Link to="/home">
          <img src={Logo} alt="Logo" className="nav-logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/sports" className="nav-link">Sports</Link>
        <Link to="/schedules" className="nav-link">Schedules</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
