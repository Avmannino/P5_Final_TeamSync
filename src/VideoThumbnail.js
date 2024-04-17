import React from 'react';
import './styles.css';

function VideoThumbnail({ src, thumbnail, onClick, title }) {
  return (
    <div className="video-thumbnail" onClick={() => onClick(src)} style={{ textAlign: 'center',  boxShadow: '0 8px 16px 0 #00000080', borderRadius:'20px'  }}>
      <img
        src={thumbnail}
        alt={`Thumbnail for ${src}`}
        style={{ width: '100%', height: 'auto', borderRadius:'20px' }}
      />
      <div style={{fontSize:'19px'}}>{title}</div> {/* Display the title below the thumbnail */}
    </div>
  );
}

export default VideoThumbnail;
