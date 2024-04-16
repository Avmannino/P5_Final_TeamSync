import React from 'react';
import BaseballDiag from './assets/baseball_field.png';


const BaseballField = () => { // Default players to an empty array

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <img src={BaseballDiag} alt="Field" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default BaseballField;
