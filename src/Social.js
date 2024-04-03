import React from 'react';
import TopNavbar from './TopNavbar'; // Adjust the path as necessary
import { LeftSideNavbar, RightSideNavbar } from './SideNavbar';
import './Social.css';


function Social() {
  return (
    <div className="social-page">
      <TopNavbar />
      <div className='left-nav'>
        <LeftSideNavbar />
      </div>
      <div className='right-nav'>
        <RightSideNavbar />
      </div>
      <div className='main-feed'>
      </div>
    </div>
  );
}

export default Social;
