import React, { useState, useEffect } from 'react';
import HockeyDiag from './assets/hockey_rink.png';

const IceRink = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000'); // Default color
  const [thickness, setThickness] = useState(); // Default thickness

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    function handleMouseDown(e) {
      setIsDrawing(true);
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.beginPath();
      ctx.moveTo(x, y);
    }

    function handleMouseMove(e) {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.lineTo(x, y);
      ctx.strokeStyle = color; // Set color
      ctx.lineWidth = thickness; // Set thickness
      ctx.stroke();
    }

    function handleMouseUp() {
      setIsDrawing(false);
    }

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDrawing, color, thickness]);

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleChangeThickness = (e) => {
    setThickness(parseInt(e.target.value));
  };

  return (
    <div className='ice-rink' >
      <img src={HockeyDiag} alt="Rink" style={{ maxWidth: '100%', position: 'absolute', top: '30vh', left: '25vw' }} />
      <canvas
        id="canvas"
        width="950"
        height="650"
        style={{ position: 'absolute', top: '35vh', left: '30vw', pointerEvents: 'auto' }}
      ></canvas>
      <div style={{ position: 'absolute', top: '25vh', left: '45vw' }}> {/* Adjusted position */}
        <input type="color" value={color} onChange={handleChangeColor} />
        <input type="range" min="1" max="20" value={thickness} onChange={handleChangeThickness} />
      </div>
    </div>
  );
};

export default IceRink;
