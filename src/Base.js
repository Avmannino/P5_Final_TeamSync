import React from 'react';
import { useDrop } from 'react-dnd';

const Base = ({ id, onDropPlayer, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'player',
    drop: (item, monitor) => onDropPlayer(item.id, id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} style={{
      width: '100px',
      height: '100px',
      backgroundColor: isOver ? 'lightgreen' : 'lightgrey',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '10px',
    //   position: 'absolute',
      zIndex: "9999",
      top:'25vh',
      borderRadius: '50%',
    }}>
      {children}
    </div>
  );
};

export default Base;
