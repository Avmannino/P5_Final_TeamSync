import React from 'react';
import './Social.css';
import homeLogo from './assets/social_homelogo.png';
import reelsLogo from './assets/reels_logo.png';
import teamLogo from './assets/team_logo.png';
import socialSync from './assets/social_sync.png';
import bracketLogo from './assets/bracket_logo.png';
import inboxLogo from './assets/inbox_logo.png';
import messageLogo from './assets/message_logo.png';
import notificationLogo from './assets/notification_logo.png';
import logout from './assets/logout.png';
// import addFriends from './assets/add_friends.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function TopNavbar() {
  return (
    <div className="top-navbar">
      <input type="text" placeholder="Search..." className="search-bar" />
      <p className='sync-text'>motion</p>
      <img src={socialSync} alt="socialSync" className="social-sync" />
      <div className='right-nav-link'>
        <Link to="/home"> {/* Use Link instead of <a> for routing */}
          <img src={homeLogo} alt="Logo" className="home-logo" /> {/* Wrap the logo in Link */}
          <img src={inboxLogo} alt="Inbox" className="inbox-logo" />
          <img src={messageLogo} alt="Message" className="message-logo" />
          <img src={notificationLogo} alt="Notif" className="notification-logo" />
        </Link>

      </div>

    </div>
  );
}


export default TopNavbar;
