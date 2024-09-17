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

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // No dependencies needed here

  useEffect(() => {
    const followMouse = () => {
      const factor = 0.1; // Interpolation speed
      const diffX = mouseX - cursorX;
      const diffY = mouseY - cursorY;

      const distance = Math.sqrt(diffX * diffX + diffY * diffY);

      if (distance < 5) {
        setCursorX(mouseX); // Snap to the mouse position
        setCursorY(mouseY);
      } else {
        setCursorX((prevX) => prevX + diffX * factor);
        setCursorY((prevY) => prevY + diffY * factor);
      }

      requestAnimationFrame(followMouse);
    };

    const id = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(id); // Cleanup animation
  }, [mouseX, mouseY, cursorX, cursorY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHovering(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const observedElements = document.querySelectorAll('.HeroSection');
    observedElements.forEach((element) => observer.observe(element));

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
