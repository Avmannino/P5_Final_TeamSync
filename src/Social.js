import React from 'react';
import TopNavbar from './TopNavbar'; // Adjust the path as necessary
import SideNavbar from './SideNavbar'; // Adjust the path as necessary

function Social() {
  return (
    <div className="social-page">
      <TopNavbar />
      <div className="content">
        <SideNavbar position="left" />
        <div className='main-feed'>
          
        </div>
        {/* Your main content goes here */}
        <SideNavbar position="right" />
      </div>
    </div>
  );
}

export default Social;
