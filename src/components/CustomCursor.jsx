import React, { useEffect, useRef, useState } from 'react';
import useMousePosition from '../utils/useMousePosition';
import customCursor from '../assets/images/moonmouse.png';
import { hexToRgba } from '../utils/hexToRgba';

const TRAIL_LIMIT = 15;

const CustomCursor = ({ enabled, currentColor }) => {
  const { x, y } = useMousePosition();
  const [trailPositions, setTrailPositions] = useState([]);
  const trailRef = useRef([]);

  useEffect(() => {

    const updateTrail = () => {
      if (x !== null && y !== null) {
        trailRef.current = trailRef.current.concat({ x, y });
        if (trailRef.current.length > TRAIL_LIMIT) {
          trailRef.current.shift(); // Remove the oldest position
        }
        setTrailPositions([...trailRef.current]);
      }
      requestAnimationFrame(updateTrail);
    };
    if (enabled) {
      updateTrail();
    }
  }, [x, y, enabled]);

  if (!enabled) return null;

  return (
    <>
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          style={{
            position: 'fixed',
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: '22.5px',
            height: '22.5px',
            backgroundColor: `${hexToRgba(currentColor, (1 / TRAIL_LIMIT) * (index + 1) * 0.5)}`,
            boxShadow: `0 0 1px 5px ${hexToRgba(currentColor, 0.25)}`,
            backgroundImage: `url(${customCursor})`,
            backgroundSize: 'cover',
            pointerEvents: 'none',
            borderRadius: '50%',
            zIndex: 10004 - index, 
            transform: 'translate(-50%, -50%)',
            opacity: (1 / TRAIL_LIMIT) * (index + 1), 
          }}
        />
      ))}
      <div
        style={{
          position: 'fixed',
          left: `${x}px`,
          top: `${y}px`,
          width: '30px',
          height: '30px',
          // backgroundColor: `${currentColor}`,
          // boxShadow: `0 0 10px 5px${currentColor}`,
          backgroundImage: `url(${customCursor})`,
          backgroundSize: 'cover',
          pointerEvents: 'none',
          borderRadius: '50%',
          zIndex: 10005,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
