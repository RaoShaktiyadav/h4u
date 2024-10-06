import React from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Test= () => {
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
      
      const [submitted, setSubmitted] = useState(false);
    
      
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
        const whatsappMessage = `Appointment Details:%0AName: ${formData.name}%0AEmail: ${formData.email}%0ADate: ${formData.date}%0ATime: ${formData.time}%0AService: ${formData.service} %0ALocation: ${formData.location}%0AGender: ${formData.grnder} `;
        window.open(`https://wa.me/917742414814?text=${whatsappMessage}`, '_blank'); // Replace with the WhatsApp number
      };
    
      // Function to handle both WhatsApp and email when the button is clicked
      const onAppointmentClick = (e) => {
        e.preventDefault();
        sendEmail(e);  // Send the email
        sendToWhatsApp();  // Send WhatsApp message
      };
    
    
    
    
    
  return (
    <div>
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
    
          )}
          </div>
    </div>
    </section>





    </div>
  )
}
export default Test;