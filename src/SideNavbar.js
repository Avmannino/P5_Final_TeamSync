import React from 'react';
import './Social.css'; // Import CSS for styling


export const LeftSideNavbar = () => {
  return (
    <div className="sidenav left">
      <a className="left-link" href="#">📰 News Feed</a>
      <a className="left-link" href="#">🏟️ Upcoming Games</a>
      <a className="left-link" href="#">📅 Events</a>
      <a className="left-link" href="#">♾️ Teams</a>
      <a className="left-link" href="#">📋 My Rosters</a>
      <a className="left-link" href="#">💬 Team Chat</a>
      <a className="left-link" href="#">▶️ Highlights</a>
    </div>
  );
}

export const RightSideNavbar = () => {
  return (
    <div className="sidenav right">
      <a href="#">Right Link 1</a>
      <a href="#">Right Link 2</a>
      <a href="#">Right Link 3</a>
      {/* Add more right links as needed */}
    </div>
  );
}
