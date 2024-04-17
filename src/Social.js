import React, { useState, useEffect } from 'react';
import TopNavbar from './TopNavbar'; // Adjust the path as necessary
import { LeftSideNavbar, RightSideNavbar } from './SideNavbar';
import './Social.css';
import Loader from './Loader';
import VideoPlayer from './VideoPlayer';
import VideoThumbnail from './VideoThumbnail';
import thumbnail1 from './assets/vipers_vid.png';
import thumbnail2 from './assets/mystic_owls.png';
import thumbnail3 from './assets/guardians_thumb.png';
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
            <VideoThumbnail src="./assets/game_footage1.mp4" thumbnail={thumbnail1} onClick={handleThumbnailClick} title="WIN 2-1 @ Vipers" />
            <VideoThumbnail src="./assets/game_footage1.mp4" thumbnail={thumbnail2} onClick={handleThumbnailClick} title="WIN 3-1 vs. Owls" />
            <VideoThumbnail src="./assets/game_footage1.mp4" thumbnail={thumbnail3} onClick={handleThumbnailClick} title="LOSS 4-2 @ Guardians" />
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
