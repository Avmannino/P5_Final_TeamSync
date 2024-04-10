import React from 'react';
import { Link } from 'react-router-dom'; // Using Link from react-router-dom for navigation
import './Navbar.css'; // Ensure the CSS file is correctly linked
import navLogo from "./assets/ts_logo.png"; // Fix the import path for the navLogo image
import tsLogo from "./assets/nav_logo2.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-logo">
        {/* <img src={tsLogo} alt="ts-logo" /> */}
      </Link>
      <div className="nav-items">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/sports" className="nav-link">Sports</Link>
        <Link to="/schedules" className="nav-link">Schedules</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/social" className="nav-link">Social</Link>
      </div>
    </nav>
  );
};

export default Navbar;