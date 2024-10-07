import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from './img/logo.png'

import f1 from './img/loc.png'
import f2 from './img/cont.png'
import f3 from './img/timi.png'
const Test= () => {
  const navigate =useNavigate()

  const ho= () =>{
    navigate('/');
  };

  const ab= () =>{
    navigate('/about');         
  };
  const se= () =>{
    navigate('/services');
  };
  const co= () =>{
    navigate('/contact');
  }; 
   // instagram function
const insta = () => {
  window.open('https://www.instagram.com/deepanshu_ahir_10?igsh=NTc4MTIwNjQ2YQ==', '_blank');
};
const add= () =>{
  window.location.href = 'https://maps.app.goo.gl/JDdX8CvtWPATkM9RA'; 
};
const dail = () => {
  // This will open the dialer with the provided number
  window.location.href = "tel:+917891291865"; 
};
  return(
<div>
<footer class="footer">
		
		<div class="footer-contact-information">
			<div class="container">
				<div class=" rowa">
					<div class="col-md-4  colmd">
						
						<div  onClick={add} class="contact-info-item wow fadeInUp" >
							<div class="icon-box">
								<img src={f1} alt=""/>
							</div>

							<h3>Our Location</h3>
							<p>40 Feet Rd, Anand Nagar, Khairthal, Rajasthan 301404</p>
						</div>
						
					</div>

					<div class="col-md-4">
						
						<div onClick={dail} class="contact-info-item wow fadeInUp" data-wow-delay="0.25s" >
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

  )   
}
export default Test;