import React from 'react';
import './Social.css';
import homeLogo from './assets/social_homelogo.png';
import reelsLogo from './assets/reels_logo.png';
import teamLogo from './assets/team_logo.png';
import socialSync from './assets/social_sync.png';
import bracketLogo from './assets/bracket_logo.png';

function TopNavbar() {
  return (
    <div className="top-navbar">
      <input type="text" placeholder="Search..." className="search-bar" />
      <p className='sync-text'>socialSync</p>
        <img src={socialSync} alt="socialSync" className="social-sync" />
      <div className='nav-link'>
        <img src={homeLogo} alt="Logo" className="home-logo" />
        <img src={reelsLogo} alt="reelLogo" className="reels-logo" />
        <img src={teamLogo} alt="teamLogo" className="team-logo" />
        <img src={bracketLogo} alt="Bracket" className="bracket-logo" />

      </div>
    </div>
  );
}

export default TopNavbar;
