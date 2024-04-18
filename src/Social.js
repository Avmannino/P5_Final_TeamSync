import React, { useState, useEffect } from 'react';
import TopNavbar from './TopNavbar'; // Adjust the path as necessary
import { LeftSideNavbar, RightSideNavbar } from './SideNavbar';
import './Social.css';
import Loader from './Loader';
import VideoPlayer from './VideoPlayer';
import VideoThumbnail from './VideoThumbnail';
import thumbnail1 from './assets/hockey_thumb.png';
import thumbnail2 from './assets/hockey_thumb2.png';
import thumbnail3 from './assets/hockey_thumb3.png';
import thumbnail4 from './assets/hockey_thumb4.png';
import thumbnail5 from './assets/hockey_thumb5.png';
import thumbnail6 from './assets/hockey_thumb6.png';
import thumbnail7 from './assets/hockey_thumb7.png';
import thumbnail8 from './assets/hockey_thumb8.png';
import hockey_vid1 from './assets/hockey_vid1.mp4';
import hockey_vid2 from './assets/hockey_vid2.mp4';
import hockey_vid3 from './assets/hockey_vid3.mp4';
import hockey_vid4 from './assets/hockey_vid4.mp4';
import hockey_vid5 from './assets/hockey_vid5.mp4';
import hockey_vid6 from './assets/hockey_vid6.mp4';
import hockey_vid7 from './assets/hockey_vid7.mp4';
import hockey_vid8 from './assets/hockey_vid8.mp4';


import Modal from './Modal';

function Social() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true); // Open the modal when a thumbnail is clicked
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
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
          <h1 className='my-library' style={{ display: 'flex', flexDirection: 'row', color: 'white', fontSize: '50px', zIndex: '9999', position: 'absolute', left: '-20vw', top: '-12vh' }}>My Library</h1>
          <div className="video-gallery">
            {/* Replace the videoSrc props with the appropriate video URLs */}
            <VideoThumbnail src={hockey_vid1} thumbnail={thumbnail1} onClick={handleThumbnailClick} title="WIN 2-1 @ Vipers" style={{ height: '50%', width: '85%' }} />
            <VideoThumbnail src={hockey_vid2} thumbnail={thumbnail2} onClick={handleThumbnailClick} title="WIN 3-1 vs. Owls" style={{ height: '50%', width: '85%' }} />
            <VideoThumbnail src={hockey_vid3} thumbnail={thumbnail3} onClick={handleThumbnailClick} title="LOSS 4-2 @ Guardians" style={{ height: '50%', width: '85%' }} />
            <VideoThumbnail src={hockey_vid4} thumbnail={thumbnail4} onClick={handleThumbnailClick} title="WIN 2-1 @ Vipers" style={{ height: '50%', width: '85%' }} />
            <VideoThumbnail src={hockey_vid5} thumbnail={thumbnail5} onClick={handleThumbnailClick} title="WIN 2-1 @ Vipers" style={{ height: '50%', width: '85%' }} />
            <VideoThumbnail src={hockey_vid6} thumbnail={thumbnail6} onClick={handleThumbnailClick} title="WIN 2-1 @ Vipers" style={{ height: '50%', width: '85%' }} />
            <VideoThumbnail src={hockey_vid7} thumbnail={thumbnail7} onClick={handleThumbnailClick} title="WIN 2-1 @ Vipers" style={{ height: '50%', width: '85%' }} />
            <VideoThumbnail src={hockey_vid8} thumbnail={thumbnail8} onClick={handleThumbnailClick} title="WIN 2-1 @ Vipers" style={{ height: '50%', width: '85%' }} />

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
              <div className='post-container' style={{ backgroundColor: '#00000050', height: '60%', width: '75vw', position: 'relative', left: '-3.5vw', borderRadius: '25px' }}>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Social;
