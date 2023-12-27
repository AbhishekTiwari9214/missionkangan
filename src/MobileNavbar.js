// MobileNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.css'; // Don't forget to create a CSS file for styling

const MobileNavbar = (onClose) => {
  return (
    <div className='mobilenav'>
      <div className='navContent'>
    



      <Link to="/profile"  className='hello' onClick={onClose}><p>Profile</p></Link>

            <Link to="/" className='hello'  onClick={onClose}><p>Home</p></Link>


        
            <Link to="/reels"  className='hello' onClick={onClose}><p>Reels</p></Link>
  
     
          
          
          
        
      </div>
    </div>
  );
};

export default MobileNavbar;
