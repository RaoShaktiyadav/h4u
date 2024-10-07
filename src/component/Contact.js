import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com';
import f1 from "./img/icon-address.svg"
import f2 from "./img/icon-phone.svg"
import f3 from "./img/icon-email.svg"
import Test from './Test.js'

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    msg: "",
  });

  // State to handle submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams= {
      from_name: formData.name,
      to_name: 'Salon Owner',
      message: `Feesback Details:\nName: ${formData.name}\nEmail: ${formData.email} \nContact: ${formData.contact}\nSubject: ${formData.subject}\nMessage: ${formData.msg}`,
      email: formData.email,
    };

    // EmailJS send function
    emailjs
      .send(
        "service_e3hq8xc", // Replace with your EmailJS service ID
        "template_vruvycc", // Replace with your EmailJS template ID
        templateParams, // This is the data being sent
        "9IsxkYY0ZFHQTDf5f" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!");
          setSubmitted(true);
        },
        (error) => {
          console.log("Failed to send the email.", error);
        }
      );

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      msg: "",
    });
  };
  return (
    <div>
		<div class="footer-main">
      <div class="page-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-8 order-md-1 order-2">
					
					<div class="page-header-box">
						
						<h1 class="text-anime">Contact</h1>
                    <ol class="breadcrumb wow fadeInUp" data-wow-delay="0.25s" >
							<li class="breadcrumb-item">Home </li>
							<li class="breadcrumb-item active" aria-current="page">/Contact</li>
						</ol>
					</div>
					</div>
    
				</div>

				<div class="col-md-4 order-md-2 order-1">
					
					<div class="page-header-icon-box wow fadeInUp" data-wow-delay="0.50s" >	
						<div class="page-header-icon">
							<img src="https://artiestsalonandacademy.com/images/icon-contact.svg" alt=""/>
						</div>
					</div>
					</div>
				</div>
			</div>


			
		
		<div class="footer-contact-informationc">
			<div class="containerc">
				<div class=" rowac">
					<div class="col-md-4c  colmdc">
						
						<div class="contact-info-itemc wow fadeInUp" >
							<div class="icon-boxc">
								<img src={f1} alt=""/>
							</div>

							<h3>Our Location</h3>
							<p>Bagadiya Bhawan 
                J-26 subhash marg, opp. papya juice, market road
                 C Scheme,Jaipur, Rajasthan 302001</p>
						</div>
						
					</div>

					<div class="col-md-4c">
						
						<div class="contact-info-itemc wow fadeInUp" data-wow-delay="0.25s" >
							<div class="icon-boxc">
								<img src={f2} alt=""/>
							</div>

							<h3>Phone</h3>
							<p>Phone:+91  99298 49600 
								
                
						</p></div>
						
					</div>

					<div class="col-md-4c">
						
						<div class="contact-info-itemc wow fadeInUp" data-wow-delay="0.5s" >
							<div class="icon-boxc">
								<img src={f3} alt=""/>
							</div>

							<h3>E-mail</h3>
							<p>Email: info@domain.com</p>
						</div>
					
					</div>
				</div>
			</div>
		</div>
		</div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="contact-form">
            {submitted ? (
              <div className="alert alert-success">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form id="contactForm" onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="form-group col-md-5 mb-4">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-5 mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-5 mb-4">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-5 mb-4">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-11 mb-4">
                    <textarea
                      name="msg"
                      className="form-control"
                      id="msg"
                      rows="4"
                      placeholder="Write a Message"
                      value={formData.msg}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn-default">
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>

	<div className="location-map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.087992962106!2d76.54748757522269!3d27.8685672183629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972af292a46d5ef%3A0x54cfa516467e05f3!2sHair%204%20u!5e0!3m2!1sen!2sin!4v1728057744145!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Location"
      ></iframe>
    </div>
    <Test/>
    </div>
  )
}
export default Contact;
