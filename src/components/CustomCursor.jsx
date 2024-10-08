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

  // Track mouse position
  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  // Set up mousemove event listener
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Cursor follow effect
  useEffect(() => {
    const followMouse = () => {
      const factor = 0.1; // Smoothness of the cursor
      const diffX = mouseX - cursorX;
      const diffY = mouseY - cursorY;

      const distance = Math.sqrt(diffX * diffX + diffY * diffY);

      // Snap to mouse position when close enough
      if (distance < 5) {
        setCursorX(mouseX);
        setCursorY(mouseY);
      } else {
        setCursorX((prevX) => prevX + diffX * factor);
        setCursorY((prevY) => prevY + diffY * factor);
      }

      requestAnimationFrame(followMouse);
    };

    // Start following the mouse
    const id = requestAnimationFrame(followMouse);

    // Cleanup the animation frame on unmount
    return () => cancelAnimationFrame(id);
  }, [mouseX, mouseY, cursorX, cursorY]);

  // Intersection Observer for detecting hovering on '.HeroSection'
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

    // Cleanup observer on unmount
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
