import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './component/Home.js';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='App'>
      <Router>
      <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          BrandName
        </Link>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</Router>


</div>

  );
};

export default App;
