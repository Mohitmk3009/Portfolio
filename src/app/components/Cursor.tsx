"use client";
import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Ensure the cursor stays within the viewport
      const x = Math.min(e.clientX, window.innerWidth - 20); // Add padding to avoid edge overflow
      const y = Math.min(e.clientY, window.innerHeight - 20);

      setPosition({ x, y });
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
        className=" hidden lg:flex custom-cursor cursor-dot"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          position: 'fixed',  // Use fixed positioning to prevent overflow
        }}
      />
      
      {/* Blurred circle behind all elements */}
      <div
        className=" hidden lg:flex custom-cursor cursor-blur"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          position: 'fixed',  // Use fixed positioning to prevent overflow
        }}
      />
    </>
  );
};

export default Cursor;
