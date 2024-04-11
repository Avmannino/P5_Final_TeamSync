// Team.js
import React from 'react';

function Team({ name, image }) {
  return (
    <div className="team">
      <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
      <h3>{name}</h3>
    </div>
  );
}

export default Team;
