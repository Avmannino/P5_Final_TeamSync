import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navlogo-container">
      </div>
      <div className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <div className="nav-link dropdown">
          Sports
          <div className="dropdown-content">
            <Link to="/sports/baseball">Baseball</Link>
            <Link to="/sports/football">Football</Link>
            <Link to="/sports/soccer">Soccer</Link>
            <Link to="/sports/icehockey">Ice Hockey</Link>
            <Link to="/sports/basketball">Basketball</Link>
            <Link to="/sports/tennis">Tennis</Link>
          </div>
        </div>
        <Link to="/schedules" className="nav-link">Schedules</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/social" className="nav-link">Social</Link>
      </div>
    </nav>
  );
};

export default Navbar;