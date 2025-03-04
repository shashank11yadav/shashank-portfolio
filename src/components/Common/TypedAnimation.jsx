import React, { useState, useEffect } from 'react';

const TypedAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 150); // Adjust speed here

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <>
      {displayText}
      <span className="cursor">|</span>
    </>
  );
};

export default TypedAnimation;