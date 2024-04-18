import React from 'react';
import './Social.css'; // Import CSS for styling



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
        <h1 className='online'></h1>
        <div className='friends-list'>
        </div>

      </div>
    </div>
  );
}
