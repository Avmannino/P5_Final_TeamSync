import React from 'react';
import './Social.css'; // Import CSS for styling
import momo from './assets/momo.png';
import kirstyn from './assets/kirstyn.png';
import austin from './assets/austin.png';
import raf from './assets/raf.png';
import friendLogo from './assets/friends_logo.png';


export const LeftSideNavbar = () => {
  return (
    <div className="sidenav left">
      <div className='left-link-container'>
        {/* <a className="left-link" href="#">💬 Team Chat</a>
        <a className="left-link" href="#">🏟️ Upcoming Games</a>
        <a className="left-link" href="#">📅 Events</a>
        <a className="left-link" href="#">▶️ Highlights</a> */}
      </div>
    </div>
  );
}

export const RightSideNavbar = () => {
  return (
    <div className="sidenav right">
      <div className='right-link-container'>
      <img src={friendLogo} alt="friends" className="friends-icon" />  
        <h1 className='online'>My Team</h1>
        <div className='friends-list'>
          <div class="friend-container">
            <img src={momo} alt="UserImg" className="friend-image" />
            <span class="friend-name">Mohammed "Sunny" Omar</span>
          </div>
          <div class="friend-container">
            <img src={kirstyn} alt="UserImg" className="friend-image" />
            <span class="friend-name">Kirstyn Canull</span>
          </div>
          <div class="friend-container">
            <img src={austin} alt="UserImg" className="friend-image" />
            <span class="friend-name">Augustin Rivera</span>
          </div>
          <div class="friend-container">
            <img src={raf} alt="UserImg" className="friend-image" />
            <span class="friend-name">Rafaelo G.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
