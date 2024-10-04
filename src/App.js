import './App.css';
import './component/Home.css';
import './component/About.css';
import './component/Contact.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import f1 from './component/img/loc.png'
import f2 from './component/img/cont.png'
import f3 from './component/img/timi.png'

import Home from './component/Home.js';
import About from './component/About.js';
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
							<p>Phone:+91  99298 49600 
								
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
