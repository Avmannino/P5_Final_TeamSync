import React, { useRef, useState } from 'react';
import videoSrc from './assets/game_footage1.mp4';  // Ensure the path is correct relative to this file

function VideoPlayer() {
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
      <video ref={videoRef} src={videoSrc} style={{ width: '100%' }} controls>
        {/* Including a source tag for clarity, though it should work without it */}
        <source src={videoSrc} type="video/mp4" />
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
