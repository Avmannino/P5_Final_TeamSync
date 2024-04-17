import React, { useState, useEffect } from 'react';
import TopNavbar from './TopNavbar'; // Adjust the path as necessary
import { LeftSideNavbar, RightSideNavbar } from './SideNavbar';
import './Social.css';
import Loader from './Loader';
import VideoPlayer from './VideoPlayer';
import VideoThumbnail from './VideoThumbnail';
import thumbnail1 from './assets/gulls.png';
import Modal from './Modal';

function Social() {
  const [isLoading, setIsLoading] = useState(true);
  const [showChat, setShowChat] = useState(false); // State for controlling chat display
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true); // Open the modal when a thumbnail is clicked
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="social-page">
          <TopNavbar />
          <div className="video-gallery">
            <VideoThumbnail src="./assets/game_footage1.mp4" thumbnail={thumbnail1} onClick={handleThumbnailClick} title="@ Hawks" />
            {/* Add other thumbnails as needed */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              {currentVideo && <VideoPlayer src={currentVideo} />}
            </Modal>
          </div>
          <div className='left-nav'>
            <LeftSideNavbar />
          </div>
          <div className='right-nav'>
            <RightSideNavbar />
          </div>
          <div className='main-feed'>
            <div className='main-feed-container'>
              <div className='post-container'>
                {/* Optional other content or secondary video player */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Social;
