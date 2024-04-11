import { useDrag } from 'react-dnd';

const Player = ({ id, name }) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'player',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name}
    </div>
  );
};

export default Player;
