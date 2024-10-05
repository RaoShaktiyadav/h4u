import './App.css';
import './component/Home.css';
import './component/About.css';
import './component/Contact.css';
import './component/Services.css';
import {BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import f1 from './component/img/loc.png'
import f2 from './component/img/cont.png'
import f3 from './component/img/timi.png'

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
        <NavLink to="/" className="navbar-logo">
          YourLogo
        </NavLink>

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
							<p>Bagadiya Bhawan 
                J-26 subhash marg, opp. papya juice, market road
                 C Scheme,Jaipur, Rajasthan 302001</p>
						</div>
						
					</div>

					<div class="col-md-4">
						
						<div class="contact-info-item wow fadeInUp" data-wow-delay="0.25s" >
							<div class="icon-box">
								<img src={f2} alt=""/>
							</div>

							<h3>Get in Touch</h3>
							<p>Phone:+91  7742414814 
								
                Email: info@domain.com
						</p></div>
						
					</div>

					<div class="col-md-4">
						
						<div class="contact-info-item wow fadeInUp" data-wow-delay="0.5s" >
							<div class="icon-box">
								<img src={f3} alt=""/>
							</div>

							<h3>Working Hours</h3>
							<p>Mon-Std: 09:30 AM - 9:00 PM     
                Sunday: 09:30 PM - 9:00 PM</p>
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
							<img src="images/logo-Group-8.png" alt="logo"/>
						</div>
						
						<div class="footer-social">
							<ul>
								<li><i class="fab fa-facebook-f"></i></li>
								<li><i class="fab fa-instagram"></i></li>
								<li><i class="fab fa-twitter"></i></li>
								<li><i class="fab fa-linkedin-in"></i></li>
							</ul>
						</div>
						
					</div>

					<div class="col-lg-7">
						
						<div class="footer-menu">
							<ul>
								<li>Home</li>
								<li>About Us</li>
								<li>Services</li>
								<li>Contact Us</li>
								
							</ul>
						</div>
					

						
						<div class="copyright">
							<p>©2024 Artist Salon Academy | All rights reserved. Design And Developed By <a href="https://magnifyinfotech.com/">Magnify infotech Pvt. Ltd.</a> &amp; Manage by <a href="https://magnifyinstitute.com/">Magnify Institute.</a> </p>
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
