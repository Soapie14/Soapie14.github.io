import React, { useEffect, useState } from 'react';
import './test.css'; // Make sure to include your CSS file

const Test = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Clear the timeout when the component unmounts or when the image appears
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the useEffect runs only once

  return (
    <div className="portfolio-container">
      {isVisible && <img className="animated-image" src="./Skills/coding.png" alt="Portfolio Item" />}
    </div>
  );
};

export default Test;
