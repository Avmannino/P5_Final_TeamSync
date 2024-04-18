import React from 'react';
import './Social.css';
import socialSync from './assets/social_sync.png';

// import addFriends from './assets/add_friends.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function TopNavbar() {
  return (
    <div className="top-navbar">
      <input type="text" placeholder="Search..." className="search-bar" />
      <p className='team-takes'>TeamTakes</p>
      {/* <img src={socialSync} alt="socialSync" className="social-sync" /> */}
      <div className='right-nav-link'>
        <Link to="/home"> {/* Use Link instead of <a> for routing */}

        </Link>

      </div>

    </div>
  );
}


export default TopNavbar;
