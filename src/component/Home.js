import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
import slide1 from "./img/istk.jpg";
import slide2 from "./img/slid.jpg";
import slide3 from "./img/slid2.png";
const Home= () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    city: "",
    location: "",
    gender: "",
    service: "",
    date: "",
    time: "",
    meridiem: "AM",
  });

  const [formErrors, setFormErrors] = useState({});
  const [captchaValid, setCaptchaValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.contact || formData.contact.length !== 10)
      errors.contact = "Valid 10-digit contact number is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.location) errors.location = "Location is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.date) errors.date = "Preferred date is required";
    if (!formData.time) errors.time = "Preferred time is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0 && captchaValid) {
      setSubmitted(true);
      console.log("Form Submitted", formData);
    } else {
      setFormErrors(errors);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValid(!!value);
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

<section className="container-fluid hQuery">
      <div className="animatedParent" data-appear-top-offset="-300">
        <div className="container whiteBg animated bounceInDown spacing go">
          <h5 className="heading5 text-center smText">
            Let's not wait for the "Perfect Look"
          </h5>
          <p className="text-center">Book An Appointment Now!</p>
          {submitted ? (
            <div className="success-message">
              <h3>Appointment Successfully Booked!</h3>
              <p>Thank you, {formData.name}. We will contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="bookAppointmentform formField animated fadeInLeft go">
                    <li>
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.name && (
                        <span className="error">{formErrors.name}</span>
                      )}
                    </li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <input
                        type="text"
                        name="contact"
                        placeholder="Contact*"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        maxLength={10}
                      />
                      {formErrors.contact && (
                        <span className="error">{formErrors.contact}</span>
                      )}
                    </li>
                    <li>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Id"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.email && (
                        <span className="error">{formErrors.email}</span>
                      )}
                    </li>
                    <li>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      >
                        <option value="">City*</option>
                        <option value="Agra">Agra</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Aligarh">Aligarh</option>
                        {/* Add more cities */}
                      </select>
                      {formErrors.city && (
                        <span className="error">{formErrors.city}</span>
                      )}
                    </li>
                    </ul>
                    <ul className='phas2'>
                    <li>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Location*</option>
                        <option value="Downtown">Downtown</option>
                        <option value="Uptown">Uptown</option>
                      </select>
                      {formErrors.location && (
                        <span className="error">{formErrors.location}</span>
                      )}
                    </li>
                  </ul>
                </div>

                <div className="col-sm-6 animated fadeInLeft go">
                  <ul className="bookAppointmentform formField">
                    <li>
                      <i className="fa fa-male" aria-hidden="true"></i>
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
                      {formErrors.gender && (
                        <span className="error">{formErrors.gender}</span>
                      )}
                    </li>
                    <li>
                      <i className="fa fa-scissors" aria-hidden="true"></i>
                      <input
                        type="text"
                        name="service"
                        placeholder="Service Type"
                        value={formData.service}
                        onChange={handleChange}
                      />
                    </li>
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.date && (
                        <span className="error">{formErrors.date}</span>
                      )}
                    </li>
                    <li>
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                      <select
                        name="meridiem"
                        value={formData.meridiem}
                        onChange={handleChange}
                        style={{ marginLeft: "10px" }}
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                      {formErrors.time && (
                        <span className="error">{formErrors.time}</span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>

              <div align="center" className="form-group mb-2 mt-3">
                <ReCAPTCHA
                  sitekey="your-recaptcha-site-key"
                  onChange={handleCaptchaChange}
                />
                {!captchaValid && (
                  <span className="error">Please complete the CAPTCHA</span>
                )}
              </div>

              <div className="text-center">
                <button type="submit" disabled={!captchaValid}>
                  Book Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>


    <section class="container-fluid spacing">
<h5 class="heading5 text-center instagramIcon"><a href="https://www.instagram.com/looksunisexsalon/" target="_blank"><img src="https://www.lookssalon.in/public/images/instagram.png" alt="Instagram Icon"/></a><span class="text-uppercase">Follow us </span> @Hair4you</h5>
<div class="instagramFrame"><iframe src="https://snapwidget.com/embed/470887" class="insFrame" allowtransparency="true" frameborder="0" scrolling="no" ></iframe>


</div>
</section>
<section class="containe-fluid seoContent spacing">
<div class="containe">
<h4>Explore the Realm of Beauty with Hair4you Salon</h4>
<p> Hair4you salon is a premium beauty salon for men and women who desire to look the best every day. Getting a makeover not only changes the appearance of a person but also brings back the lost confidence and Hair4you Salon would take pride in being a part of it. From beauty to grooming services, we provide a tremendous range of facilities that touches every dimension of beauty and hair treatments. Our repertoire of professional experts makes sure that all your beauty and hair questions are answered, and you leave the salon with a big smile on your face.  </p>
<p>With over 30 employees engaged in transforming your look, we make sure that all the services provided at our salons meet the international standards. Through our advice and solutions from the expertise in this array, we aim at giving the best services through our state-of-art facilities. Our professional stylists and beauty experts are constantly updated with the latest trends and fashion advices that help them to work efficiently and deliver outstanding results!  </p>
<p>Give us an opportunity to serve you once, we are sure you'll love to come back to us again and be our esteemed customer forever. Fill the form or call us to book an appointment now!  </p>
</div>
</section>

   </div> 
  
  )
}
export default Home;
