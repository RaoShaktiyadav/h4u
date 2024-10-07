import React from 'react'


import {useState, useEffect } from 'react';
import year from './img/ratem.png';
import ye2 from './img/countm.png';
import ye3 from './img/mann.png';
import ai1 from "./img/about-img-1.webp";
import ai2 from "./img/about-img-2.webp";
import Test from './Test.js'




const testimonials = [
  {
    name: 'Kanika Bhati',
    image: 'https://artiestsalonandacademy.com/images/testimonial-4.jpg',
    rating: 5,
    review: `Artiest salon is my new favourite. It’s my go to place and amazing for all your salon needs. The entire staff is so warm, professional and highly skilled. A special mention for Manish who did my haircut and his skills were unmatched. I highly recommend Manish for anyone who wants any solution for all hair problems. Looking forward to visiting again.`
  },
  {
    name: 'Mahesh Sharma',
    image: 'https://artiestsalonandacademy.com/images/testimonial-3.jpg',
    rating: 5,
    review: `This salon is very luxurious. The stylists are very down-to-earth and maintain cleanliness. If you're looking for services for your hair, skin, nails, or makeup, I would recommend this salon as the best.`
  },
  {
    name: 'Neha Bishnoi',
    image: 'https://artiestsalonandacademy.com/images/testimonial-4.jpg',
    rating: 5,
    review: `Artiest salon is my new favourite. It’s my go to place and amazing for all your salon needs. The entire staff is so warm, professional and highly skilled. A special mention for Manish who did my haircut and his skills were unmatched. I highly recommend Manish for anyone who wants any solution for all hair problems. Looking forward to visiting again.`
  },
  {
    name: 'Andy Sharma',
    image: 'https://artiestsalonandacademy.com/images/testimonial-3.jpg',
    rating: 5,
    review: `This salon is very luxurious. The stylists are very down-to-earth and maintain cleanliness. If you're looking for services for your hair, skin, nails, or makeup, I would recommend this salon as the best.`
  },
  // Add more testimonials as needed
];



export default function About() {
  const [yearCount, setYearCount] = useState(0);

  // Simulate a counter for the "Since" year
  useEffect(() => {
      let count = 0;
      const interval = setInterval(() => {
          if (count < 10) {
              setYearCount((prev) => prev + 1);
              count++;
          }
      }, 100);
      return () => clearInterval(interval); // Cleanup the interval
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div mainabout>
      <div class="page-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-8 order-md-1 order-2">
					
					<div class="page-header-box">
						
						<h1 class="text-anime">About Us</h1>
                    <ol class="breadcrumb wow fadeInUp" data-wow-delay="0.25s" >
							<li class="breadcrumb-item">Home </li>
							<li class="breadcrumb-item active" aria-current="page">/About us</li>
						</ol>
					</div>
					</div>
    
				</div>

				<div class="col-md-4 order-md-2 order-1">
					
					<div class="page-header-icon-box wow fadeInUp" data-wow-delay="0.50s" >	
						<div class="page-header-icon">
							<img src="https://artiestsalonandacademy.com/images/icon-about.svg" alt=""/>
						</div>
					</div>
					</div>
				</div>
			</div>

            <div className="about-us-section1">
            <div className="container1">
                <div className="row0 ">
                    <div className="col-lg-61">
                        <div className="about-image1">
                            <div className="row1">
                                <div className="col-71">
                                    <div className="about-img1 right-shape">
                                        <figure className="reveal hover-anime">
                                            <img  className='ai3' src={ai1} alt="About 1" />
                                        </figure>
                                    </div><div className="about-year-image">
                                        
                                        
                                    <div className="about-year">
                                            <p>Since<h4 className="counter">{yearCount}</h4></p>
                                            
                                        </div>
                                    <div className="about-img1  left-shape">
                                        <figure className="reveal hover-anime">
                                            <img className="aboim" src={ai2} alt="About 2" />
                                        </figure>
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="col-lg-61 col-md-8 col-sm-12">
                        <div className="section-title1">
                            <h6 className="wow fadeInUp">About Glimy</h6>
                            <h2 className="text-anime">
                                <span className="line">
                                    <span className="word">Hair4you </span>
                                    <span className="word">Salon </span>
                                    <span className="word">Feel </span>
                                    <span className="word">Unique</span>
                                </span>
                            </h2>
                        </div>

                        <div className="about-content wow fadeInUp" data-wow-delay="0.50s">
                            <p>Artistist Salon and Academy is one of the best beauty and hair salons in Jaipur for men and women. We are proud to have fully trained hairdressers and makeup artists. At Artistest Salon and Academy in Jaipur, with a pure combination of perfection and passion for hygiene and beauty, we ensure attention to detail in coloring and haircuts. Our premium solutions ensure your comfort at all times.</p>
                            
                            <p>We use only proven methods and premium products that deliver the best results. Your city's exclusive unisex salon, trusted by top tools and experts to deliver breathtaking looks and absolute luxury.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="fun-facts">
		<div class="container">
			<div class="rowab ">
				<div class="col-lg-5">
					
					<div class="section-title">
						<h3 class="wow fadeInUp" >Company Overview</h3>
						
					<h2 class="text-anime"><div class="line" ><div class="word" >
                        <div class="char" >Facts &amp; figure</div>
                       </div></div></h2></div>
					
				</div>

				<div class="col-lg-7">
					<div class="facts-counter">
						<div class="row5">
							<div class="col-md-4">
								
								<div class="facts-item wow fadeInUp" data-wow-delay="0.5s">
									<div class="icon-box">
										<img src={year} alt="img"/>
									</div>
									
									<h3><span class="counter">0</span>+</h3>
									<p>Years of Experience.</p>
								</div>
								
							</div>

							<div class="col-md-4">
								
								<div class="facts-item wow fadeInUp" data-wow-delay="0.75s"  >
									<div class="icon-box">
										<img src={ye2} alt="img"/>
									</div>
									
									<h3><span class="counter">700</span>+</h3>
									<p>Company Clients</p>
								</div>
							
							</div>

							<div class="col-md-4">
								
								<div class="facts-item wow fadeInUp" data-wow-delay="1.0s" >
									<div class="icon-box">
										<img src={ye3} alt=""/>
									</div>
									
									<h3><span class="counter">0</span>+</h3>
									<p>Staff Members</p>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div className="testimonials">
      <div className="container">
        <div className="section-title">
          <h3>Client Testimonials</h3>
          <h2>What Our Clients Say</h2>
        </div>

        <div className="slider">
          <div className="testimonial-slide">
            <div className="testimonial-header">
              <div className="author-img">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
              </div>
              <div className="author-info">
                <h3>{testimonials[currentIndex].name}</h3>
                <div className="rating-star">
                  {'★'.repeat(testimonials[currentIndex].rating)}
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <p>{testimonials[currentIndex].review}</p>
            </div>
          </div>

          <div className="slider-nav">
            <button className="prev" onClick={handlePrevClick}>
              &#10094; {/* Left Arrow */}
            </button>
            <button className="next" onClick={handleNextClick}>
              &#10095; {/* Right Arrow */}
            </button>
          </div>
        </div>
      </div>
    </div>
    <Test/>
    </div>
    
  )
}
