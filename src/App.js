import './App.css';
import './component/Home.css';
import './component/About.css';
import './component/Contact.css';
import './component/Services.css';


import {BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import f1 from './component/img/loc.png'
import f2 from './component/img/cont.png'
import f3 from './component/img/timi.png'

import logo from './component/img/logo.png'

import Home from './component/Home.js';
import About from './component/About.js';
import Services from './component/Services';
import Contact from './component/Contact';



const App = () => {
  const ho= () =>{
    window.location.href = '/'; 
  };
  const ab= () =>{
    window.location.href = '/about'; 
  };
  const se= () =>{
    window.location.href = '/services'; 
  };
  const co= () =>{
    window.location.href = '/contact'; 
  }; 
   // instagram function
const insta = () => {
  window.open('https://www.instagram.com/deepanshu_ahir_10?igsh=NTc4MTIwNjQ2YQ==', '_blank');
};

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
        
          <img className="navbar-logo" src={logo}  alt='logo'/>
       

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

<footer class="footer">
		
		<div class="footer-contact-information">
			<div class="container">
				<div class=" rowa">
					<div class="col-md-4  colmd">
						
						<div class="contact-info-item wow fadeInUp" >
							<div class="icon-box">
								<img src={f1} alt=""/>
							</div>

							<h3>Our Location</h3>
							<p>40 Feet Rd, Anand Nagar, Khairthal, Rajasthan 301404</p>
						</div>
						
					</div>

					<div class="col-md-4">
						
						<div class="contact-info-item wow fadeInUp" data-wow-delay="0.25s" >
							<div class="icon-box">
								<img src={f2} alt=""/>
							</div>

							<h3>Get in Touch</h3>
							<p>Phone:+917891291865, +919057563199 
								
                <br/><span>Email: info@domain.com</span>
						</p></div>
						
					</div>

					<div class="col-md-4">
						
						<div class="contact-info-item wow fadeInUp" data-wow-delay="0.5s" >
							<div class="icon-box">
								<img src={f3} alt=""/>
							</div>

							<h3>Working Hours</h3>
							<p>Mon-Sat: 09:30 AM - 9:00 PM     
                <br/>Sunday: 07:30 AM - 9:00 PM</p>
						</div>
					
					</div>
				</div>
			</div>
		</div>
		
		<div class="footer-main">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-5">
						
						<div class="footer-logo">
							<img src={logo} alt="logo"/>
						</div>
						
						<div class="footer-social">
							<ul>
								<li><i class="fab fa-facebook-f"></i></li>
								<li><i onClick={insta} class="fab fa-instagram"></i></li>
								</ul>
						</div>
						
					</div>

					<div class="col-lg-7">
						
						<div class="footer-menu">
							<ul>
								<li onClick={ho}>Home</li>
								<li onClick={ab}>About Us</li>
								<li onClick={se}>Services</li>
								<li onClick={co}>Contact Us</li>
								
							</ul>
						</div>
					

						
						<div class="copyright">
							<p>©2024 Cut N Curl Salon | All rights reserved. Design And Developed By  Shakti Yadav &amp; Manage by Andy rao </p>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		</footer>
</div>

  );
};

export default App;
