'use client';

import React, { useState, useEffect, useRef } from 'react';
import './css/cursor.css';

function CustomCursor() {
  const [cursorX, setCursorX] = useState(-50); // Initial position
  const [cursorY, setCursorY] = useState(-50); // Initial position
  const [mouseX, setMouseX] = useState(-50); // Mouse position
  const [mouseY, setMouseY] = useState(-50); // Mouse position
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const [animationFrameId, setAnimationFrameId] = useState(null);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      const factor = 0.1; // Interpolation speed
      const diffX = mouseX - cursorX;
      const diffY = mouseY - cursorY;

      // Calculate the distance between cursor and mouse pointer
      const distance = Math.sqrt(diffX * diffX + diffY * diffY);

      // Snap to the mouse if it's close, otherwise follow smoothly
      if (distance < 5) {
        setCursorX(mouseX); // Snap to the mouse position
        setCursorY(mouseY);
      } else {
        setCursorX((prevX) => prevX + diffX * factor); // Smooth movement
        setCursorY((prevY) => prevY + diffY * factor);
      }

      const id = requestAnimationFrame(followMouse);
      setAnimationFrameId(id);
    };

    followMouse();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [mouseX, mouseY, cursorX, cursorY, animationFrameId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHovering(true);
          } else {
            setIsHovering(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const blackTextElements = document.querySelectorAll('.HeroSection');
    blackTextElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${isHovering ? 'white' : ''}`}
      style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
    ></div>
  );
}

export default CustomCursor;
