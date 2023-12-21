// MobileNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.css'; // Don't forget to create a CSS file for styling

const MobileNavbar = (onClose) => {
  return (
    <div className='mobilenav'>
      <div className='navContent'>
        <p>

            <Link to="/" className='hello'  onClick={onClose}>Home</Link>


        </p >
<p>
            <Link to="/reels"  className='hello' onClick={onClose}>Reels</Link>
  
  </p>        
          
          
          
        
      </div>
    </div>
  );
};

export default MobileNavbar;
