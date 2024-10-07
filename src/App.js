import './App.css';
import './component/Home.css';
import './component/About.css';
import './component/Contact.css';
import './component/Services.css';
import './component/Test.css';



import {BrowserRouter as Router, Route, Routes, NavLink,  } from 'react-router-dom';
import React, { useState } from 'react';


import logo from './component/img/logo.png'

import Home from './component/Home.js';
import About from './component/About.js';
import Services from './component/Services';
import Contact from './component/Contact';




const App = () => {


  // State to manage whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <div className='App'>
      <Router>
      <nav className="navbar">
      <div className="navbar-container">
        
          <img  className="navbar-logo" src={logo}  alt='logo'/>
       

        {/* Hamburger icon */}
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        {/* Menu links */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink 
              exact 
              to="/" 
              className="nav-links" 
              activeClassName="active-link"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className="nav-links" 
              activeClassName="active-link"
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink 
              to="/services" 
              className="nav-links" 
              activeClassName="active-link"
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className="nav-links" 
              activeClassName="active-link"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
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
