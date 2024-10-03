import React from 'react'
import {useState, useEffect } from 'react';
import ai1 from "./img/about-img-1.webp";
import ai2 from "./img/about-img-2.webp";


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
    </div>
    
  )
}
