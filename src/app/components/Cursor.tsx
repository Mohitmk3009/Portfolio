"use client"
import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e:any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Small white dot on top of everything */}
      <div
        className="custom-cursor cursor-dot"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      />
      
      {/* Blurred circle behind all elements */}
      <div
        className="custom-cursor cursor-blur"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      />
    </>
  );
};

export default Cursor;
