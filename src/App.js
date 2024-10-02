import './App.css';
import './component/Home.css';
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

<footer className="salon-footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Column 1 - About */}
          <div className="footer-col">
            <h4>About Our Salon</h4>
            <p>
              Welcome to our luxury salon where we offer premium beauty services for hair, nails, and skin. Experience relaxation and elegance at our salon with professional stylists and high-quality products.
            </p>
          </div>
          {/* Column 2 - Salon Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="/services/hair">Hair Styling</a></li>
              <li><a href="/services/nails">Nail Care</a></li>
              <li><a href="/services/skin">Skincare</a></li>
              <li><a href="/services/makeup">Makeup</a></li>
              <li><a href="/services/spa">Spa Treatments</a></li>
            </ul>
          </div>
          {/* Column 3 - Contact Info */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: info@salon.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Beauty Lane, City, Country</li>
            </ul>
          </div>
          {/* Column 4 - Social Media */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <img src='' alt='logo'/>
            {/* <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Hair4you. All Rights Reserved.</p>
      </div>
    </footer>
</div>

  );
};

export default App;
