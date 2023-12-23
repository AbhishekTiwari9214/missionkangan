// App.js

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import MobileNavbar from './MobileNavbar';
import productList from './products.json';
import reels from './reels.json';

import Reels from './Reels';

const App = () => {
  const [nav, setNav] = useState(false);

  const changenav = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <Router>
      <div className="app-container">
        <button className="navtoggle" onClick={changenav}>
          nav
        </button>
        
        {nav && <MobileNavbar onClose={changenav}/>}
        

        <Routes>
            <Route exact path="/reels" element={!nav && <Reels videos={reels}/>} />
          <Route exact path="/" element={!nav &&  <Home productList={productList} />}>
            
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </div>
    </Router>


  );
};

// Use ReactDOM.createRoot for React 18 or ReactDOM.render for older versions
const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root); // For React 18
reactRoot.render(<App />);

// For older versions of React, use the following:
// ReactDOM.render(<App />, root);

export default App;
