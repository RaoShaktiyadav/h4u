import React from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import slide1 from "./img/istk.jpg";
import slide2 from "./img/slid.jpg";
import slide3 from "./img/slid2.png";
import logo from "./img/logo.png"
import Test from './Test.js'

const Home= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender:'',
    service:'',
    contact:'',
    date: '',
    time: '',
    location:'',
   
  });
  
  

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Sending email through EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      to_name: 'Salon Owner',
      message: `Appointment Details:\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nTime: ${formData.time}\nGender: ${formData.gender} \nService: ${formData.service}\nContact: ${formData.contact}\nLocation: ${formData.location}`,
      email: formData.email,
    };

    emailjs.send('service_e3hq8xc', 'template_vruvycc', templateParams, '9IsxkYY0ZFHQTDf5f')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send email.');
      });
  };

  // Function to send data via WhatsApp
  const sendToWhatsApp = () => {
    const whatsappMessage = `Appointment Details:%0AName: ${formData.name}%0AEmail: ${formData.email}%0ADate: ${formData.date}%0ATime: ${formData.time}%0AService: ${formData.service} %0ALocation: ${formData.location}%0AGender: ${formData.gender} `;
    window.open(`https://wa.me/917742414814?text=${whatsappMessage}`, '_blank'); // Replace with the WhatsApp number
  };

  // Function to handle both WhatsApp and email when the button is clicked
  const onAppointmentClick = (e) => {
    e.preventDefault();
    sendEmail(e);  // Send the email
    sendToWhatsApp();  // Send WhatsApp message
  };


  const ser= () =>{
    window.location.href = '/services'; 
  };


// instagram function
const insta = () => {
  window.open('https://www.instagram.com/deepanshu_ahir_10?igsh=NTc4MTIwNjQ2YQ==', '_blank');
};











  return (
    <div id='mainhome'>
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block w-100" className='ha1' alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" className='ha1' alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" className='ha1' alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="animatedParent">
<ul class="row">
<li class="col-lg-4 col-md-4 col-sm-12 animated fadeInLeft delay-2000 go"><img src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/homeBanner/1.jpg" alt="Looks Salon Gents Hair Style"/></li>
<li class="col-lg-4 col-md-4 col-sm-12 animated fadeInRight delay-1200 go"><img onClick={ser} src={logo} alt="looks in vague collection"/></li>
<li class="col-lg-4 col-md-4 col-sm-12 animated fadeInLeft delay-250 go"><img src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/homeBanner/6.jpg" alt="Looks Salon Ladies Hair Style"/></li>
<li class="col-lg-4 col-md-4 col-sm-12 animated fadeInRight delay-500 go"><img src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/homeBanner/4.jpg" alt="Ladies Hair Style - Looks Salon"/></li>
<li class="col-lg-4 col-md-4 col-sm-12 animated fadeInLeft delay-1500 go"><img src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/homeBanner/5.jpg" alt="Haircut with Beard Style - Looks Salon"/></li>
<li class="col-lg-4 col-md-4 col-sm-12 animated fadeInRight delay-1050 go"><img src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/homeBanner/3.jpg" alt="Long Hairstyle for Men - Looks Salon"/></li> 
</ul>
</div>

<section class="container-fluid hServices text-uppercase">
<h3 class="heading3 text-center">Our Services</h3>
<div class="animateParent">
<ul class="row">
<li class="col-lg- col-md-6 col-sm-6"><img src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/services/gents.jpg" alt="Short Hairstyle for Men - Looks Salon" class="animate fadeInRight delay-1000 go"/><span class="animated fadeInLeftShort delay-1500 go">Gents</span></li>
<li class="col-lg-  col-md-6 col-sm-6"><img src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/services/ladies.jpg" alt="Rebonding Hairstyle for Girl - Looks Salon" class="animate fadeInLeft go"/><span class="animated fadeInLeftShort delay-2000 go">Ladies</span></li>
</ul>
</div>
</section>
<section className="container-fluid hQuery">
      <div className="animatedParent" data-appear-top-offset="-300">
        <div className="container whiteBg animated bounceInDown spacing go">
          <h5 className="heading5 text-center smText">
            Let's not wait for the "Perfect Look"
          </h5>
          <h3 className="text-center">Book An Appointment Now!</h3>
          (
      <form onSubmit={onAppointmentClick}>
        <div className='form'>
        <div className='ph1'>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
        <label>Contact</label>
          <input type="text" name="contact" placeholder='Contact'  value={formData.phone} onChange={handleChange} required  maxLength={10} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email"  placeholder='E-mail'  value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
        <label>Location</label>
        
          <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      >
                        <option value="">location*</option>
                        <option value="Khairthal">Khairthal</option>
                        <option value="Mundawar">Mundawar</option>
                      </select>
                     
                      </div>
                      </div>
        <div className='ph2'>
        <div className="form-group">
          <label>Gender</label>
          <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Gender*</option>
                        <option value="Ladies">Ladies</option>
                        <option value="Gents">Gents</option>
                      </select>
                     
                      </div>
        <div className="form-group">
          <label>Service</label>
          <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Service*</option>
                        <option value="Hair cut">Hair cut</option>
                        <option value="Hair color">Hair color</option>
                      </select>
                      </div>
                      <div className="form-group">
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">

          <label>Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        </div>
        </div>
        <button type="submit" className="btn-submit">Send Appointment</button>
      </form>
    
          )
          </div>
    </div>
    </section>


    <section class="container-fluid spacing">
<h5 class="heading5 text-center instagramIcon" onClick={insta}>
  <a href="https://www.instagram.com/deepanshu_ahir_10?igsh=NTc4MTIwNjQ2YQ==" rel="noreferrer">
  <img onClick={insta} src="https://www.lookssalon.in/public/images/instagram.png" alt="Instagram Icon"/></a><span onClick={insta} class="text-uppercase">Follow us </span> @Cut N Curl</h5>
  <div onClick={insta} className="instagram-frame-container">
      <iframe 
      onClick={insta}
         
        className="instagram-iframe" 
        allowTransparency="true" 
        title="Instagram Feed" 
        frameBorder="0" 
        scrolling="no"
      ></iframe>
    </div>
</section>
<section class="containe-fluid seoContent spacing">
<div class="containe">
<h4>Explore the Realm of Beauty with Cut N Curl Salon</h4>
<p> Cut N Curl salon is a premium beauty salon for men and women who desire to look the best every day. Getting a makeover not only changes the appearance of a person but also brings back the lost confidence and Cut N Curl Salon would take pride in being a part of it. From beauty to grooming services, we provide a tremendous range of facilities that touches every dimension of beauty and hair treatments. Our repertoire of professional experts makes sure that all your beauty and hair questions are answered, and you leave the salon with a big smile on your face.  </p>
<p>With over 30 employees engaged in transforming your look, we make sure that all the services provided at our salons meet the international standards. Through our advice and solutions from the expertise in this array, we aim at giving the best services through our state-of-art facilities. Our professional stylists and beauty experts are constantly updated with the latest trends and fashion advices that help them to work efficiently and deliver outstanding results!  </p>
<p>Give us an opportunity to serve you once, we are sure you'll love to come back to us again and be our esteemed customer forever. Fill the form or call us to book an appointment now!  </p>
</div>
</section>
<Test/>
   </div> 
  
  )
}
export default Home;
