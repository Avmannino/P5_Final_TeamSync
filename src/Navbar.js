import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Using Link from react-router-dom for navigation
import './Navbar.css'; // Ensure the CSS file is correctly linked
import Logo from './assets/nav_logo2.png';
import { CustomProvider, IconButton } from 'rsuite';
import { Visible, Unvisible } from '@rsuite/icons';



const Navbar = () => {
  const [toggleMode, setToggleMode] = useState(localStorage.getItem("toggle-mode") === 'true')

  useEffect(() => {
    localStorage.setItem("toggle-mode", toggleMode)
  }, [toggleMode])
  const toggleModeFunc = () => {
    setToggleMode(!toggleMode)
  }


  return (
    <CustomProvider theme={toggleMode ? "dark" : "light"}>
      <nav className="app-navbar">
        <Link to="/home" className="nav-logo">
          <img src={Logo} alt="ts-logo" />
        </Link>
        <div className="nav-items">
          <IconButton onClick={toggleModeFunc} appearance='ghost' style={{ border:"2px solid #017879", color: "#017879", position: 'relative', top:'-1vh', right: '58vw', width: '95px'}} size="lg" icon={toggleMode ? <Visible /> : <Unvisible />}></IconButton>
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/sports" className="nav-link">Sports</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/social" className="nav-link">Social</Link>
          <Link to="/log-in" className="nav-link">Sign-In</Link>
        </div>
      </nav>
    </CustomProvider>
  );
};

export default Navbar;