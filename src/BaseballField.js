import React from 'react';
import { useDrop } from 'react-dnd';
import BaseballDiag from './assets/baseball_field.png';
import Player from './Player'; // Ensure this import path is correct

const BaseballField = ({ players = [], onPlayerDropped }) => { // Default players to an empty array
  const [, drop] = useDrop(() => ({
    accept: 'player',
    drop: (item, monitor) => {
      // Logic to calculate position and update the state
      const clientOffset = monitor.getClientOffset();
      if (clientOffset) {
        onPlayerDropped(item.id, clientOffset.x, clientOffset.y);
      }
      return undefined;
    },
  }));

  return (
    <div ref={drop} style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <img src={BaseballDiag} alt="Field" style={{ maxWidth: '100%' }} />
      {players.map((player) => (
        <Player key={player.id} id={player.id} name={player.name} />
        // Additional props for positioning might be needed
      ))}
    </div>
  );
};

export default BaseballField;
