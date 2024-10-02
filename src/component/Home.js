import React from 'react'
import { useState } from 'react';
import slide1 from "./img/istk.jpg";
import slide2 from "./img/slid.jpg";
import slide3 from "./img/slid2.png";
const Home= () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";
    if (!formData.service) errors.service = "Service is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Process the form
      setSubmitted(true);
      console.log("Form submitted successfully", formData);
    }
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
<li class="col-lg-4 col-md-4 col-sm-12 animated fadeInRight delay-1200 go"><img src="https://d3r0z4awu7ba6n.cloudfront.net/images/looks/homeBanner/2.jpg" alt="looks in vague collection"/></li>
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

<div className="appointment-form">
      <h2>Book an Appointment</h2>

      {submitted ? (
        <div className="success-message">
          <h3>Appointment Successfully Booked!</h3>
          <p>Thank you, {formData.name}. We will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>

          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {formErrors.date && <span className="error">{formErrors.date}</span>}
          </div>

          <div>
            <label>Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            {formErrors.time && <span className="error">{formErrors.time}</span>}
          </div>

          <div>
            <label>Service:</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option value="Haircut">Haircut</option>
              <option value="Hair Coloring">Hair Coloring</option>
              <option value="Manicure">Manicure</option>
              <option value="Pedicure">Pedicure</option>
            </select>
            {formErrors.service && (
              <span className="error">{formErrors.service}</span>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  

   </div> 
  )
}
export default Home;
