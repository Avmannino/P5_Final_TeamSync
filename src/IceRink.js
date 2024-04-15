import React from 'react';
import HockeyDiag from './assets/hockey_rink.png';


const IceRink = () => { // Default players to an empty array

  return (
    <div className='ice-rink'>
      <img src={HockeyDiag} alt="Rink" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default IceRink;