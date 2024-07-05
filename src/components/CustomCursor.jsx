'use client'

import React, { useState, useEffect, useRef } from 'react';
import './css/cursor.css';

function CustomCursor() {
  const [cursorX, setCursorX] = useState(-50); // Initial position
  const [cursorY, setCursorY] = useState(-50); // Initial position
  const [mouseX, setMouseX] = useState(-50); // Initial mouse position
  const [mouseY, setMouseY] = useState(-50); // Initial mouse position
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
  }, []);

  useEffect(() => {
    const followMouse = () => {
      const factor = 0.1; // Adjust this value to control the interpolation speed
      setCursorX((prevX) => prevX + (mouseX - prevX) * factor);
      setCursorY((prevY) => prevY + (mouseY - prevY) * factor);
      requestAnimationFrame(followMouse);
    };
    followMouse();
  }, [mouseX, mouseY]);

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
      { threshold: .5 }
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
    >ARIF</div>
  );
}

export default CustomCursor;
