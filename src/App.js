// Import necessary React components and CSS file

import React, { useState, useEffect } from 'react';
import './App.css'; // Make sure to have a CSS file for styling
import Home from './Home'
import productList from './products.json';

const App = () => {
  // Sample data for the product list

  // State for controlling the current slide in the slideshow
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle next slide in the slideshow
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % productList.length);
  };

  // Automatically advance to the next slide every 3 seconds (adjust as needed)
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      {/* Slideshow Header */}
      <div className="slideshow-container">
        {productList.map((product, index) => (
          <div
            key={product.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={product.url1} alt={`Product ${product.id}`} />
          </div>
        ))}
      </div>

      {/* Small Info Div */}
      <div className="info-div">
        {/* Add your website information here */}
        
        <p>Comming Soon</p>
      </div>

      {/* Product List with Mobile Pattern */}
      <Home productList={productList} />
    </div>
  );
};

export default App;
