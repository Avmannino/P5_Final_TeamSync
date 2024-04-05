import React from 'react';
import TopNavbar from './TopNavbar'; // Adjust the path as necessary
import { LeftSideNavbar, RightSideNavbar } from './SideNavbar';
import './Social.css';
import postBtn from './assets/post_btn.png';
import sakib from './assets/sakib.png';


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
        <div className='main-feed-container'>
          <div className='post-container'>
            <img src={sakib} alt="UserImg" className="user-image" />  
            <input type="text" placeholder="What's on your mind, Sakib??" className="post-input-box" />
            <img src={postBtn} alt="Post" className="post-button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
