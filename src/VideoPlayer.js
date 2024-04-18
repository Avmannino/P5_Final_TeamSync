import React, { useRef, useState } from 'react';

// In VideoPlayer.js
function VideoPlayer({ src }) { // Changed from videoSources to src
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Volume range from 0 to 1

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className='video-player' style={{ zIndex: '9999', position: 'absolute' }}>
      <video ref={videoRef} style={{ width: '100%' }} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}


export default VideoPlayer;
