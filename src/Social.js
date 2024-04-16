import React, { useState, useEffect } from 'react';
import TopNavbar from './TopNavbar'; // Adjust the path as necessary
import { LeftSideNavbar, RightSideNavbar } from './SideNavbar';
import './Social.css';
import postBtn from './assets/post_btn.png';
import sakib from './assets/sakib.png';
import Loader from './Loader';
import Chat from './components/Chat'; // Import your Chat component

function Social() {
  const [isLoading, setIsLoading] = useState(true);
  const [showChat, setShowChat] = useState(false); // State for controlling chat display

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 

    return () => clearTimeout(timeout);
  }, []);

  // Toggle chat display
  const toggleChatDisplay = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                <input type="text" placeholder="What's on your mind, Coach?" className="post-input-box" />
                <img src={postBtn} alt="Post" className="post-button" />
              </div>
              <div className='chat-render'>
              {showChat && <Chat />}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Render chat display toggle button */}
      <button className="left-link" onClick={toggleChatDisplay}>💬 Team Chat</button>
    </>
  )
}

export default Social;
