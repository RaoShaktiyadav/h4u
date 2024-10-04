import React from 'react'
import s1 from './img/service-1.webp'
import s2 from './img/service-2.webp'
import s3 from './img/service-3.webp'
import s4 from './img/service-4.webp'
import s5 from './img/service-5.webp'
import s6 from './img/service-6.webp'

export default function Services() {
  return (
    <div>
       <div class="page-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-8 order-md-1 order-2">
					
					<div class="page-header-box">
						
						<h1 class="text-anime">Services</h1>
                    <ol class="breadcrumb wow fadeInUp" data-wow-delay="0.25s" >
							<li class="breadcrumb-item">Home  </li>
							<li class="breadcrumb-item active" aria-current="page">/Services</li>
						</ol>
					</div>
					</div>
    
				</div>
         <div class="col-md-4 order-md-2 order-1">
					
					<div class="page-header-icon-box wow fadeInUp" data-wow-delay="0.50s" >	
						<div class="page-header-icon">
            
							<img src="https://artiestsalonandacademy.com/images/icon-services.svg" alt=""/>
						</div>
					</div>
					</div>
				</div>
			</div>
      
      
      
      
      <div class="services-listss">
		<div class="containes">
			<div class="rows">
				<div class="col-lg-4s col-md-6s">
					
					<div class="service-item-layout2s wow fadeInUp" >
						<div class="service-images">
							<figure class="hover-animes">
								<img src={s1} alt=""/>
							</figure>
						</div>

						<div class="service-contents">
							<h3>Haircut Styles</h3>
							<p>From modern-day cuts to traditional styles, our experienced stylists are adept at
								developing looks that healthy your particular character and lifestyle.
								</p>
														
						</div>
					</div>
					
				</div>

				<div class="col-lg-4s col-md-6s">
					
					<div class="service-item-layout2s wow fadeInUp" data-wow-delay="0.25s" >
						<div class="service-images">
							<figure class="hover-animes">
								<img src={s2} alt=""/>
							</figure>
						</div>

						<div class="service-contents">
							<h3>Hair &amp; Care</h3>
							<p>Healthy, stunning hair is our passion. Whether you want a nourishing treatment, a shade
							refresh, or a fashionable blowout, our hair care experts are right here to assist.
							</p>
						
						</div>
					</div>
					
				</div>

				<div class="col-lg-4s col-md-6s">
					
					<div class="service-item-layout2s wow fadeInUp" data-wow-delay="0.50s" >
						<div class="service-images">
							<figure class="hover-animes">
								<img src={s3} alt=""/>
							</figure>
						</div>

						<div class="service-contents">
							<h3>Bridal Makeup</h3>
							<p>Your wedding ceremony day is one of the most unique events of your life, and we are
								right here to ensure you look truly lovely</p>
						
						</div>
					</div>
					
				</div>

				<div class="col-lg-4s col-md-6s">
					
					<div class="service-item-layout2s wow fadeInUp" data-wow-delay="0.75s" >
						<div class="service-images">
							<figure class="hover-animes">
								<img src={s4} alt=""/>
							</figure>
						</div>

						<div class="service-contents">
							<h3>Manicure Pedicure</h3>
							<p>Treat your palms and toes to the ultimate pampering experience with our nail-cutting
							and pedicure offerings.</p>
						
						</div>
					</div>
				
				</div>

				<div class="col-lg-4s col-md-6s">
					
					<div class="service-item-layout2s wow fadeInUp" data-wow-delay="1.0s">
						<div class="service-images">
							<figure class="hover-animes">
								<img src={s5} alt=""/>
							</figure>
						</div>

						<div class="service-contents">
							<h3>Facial for Women &amp; Men</h3>
							<p>Indulge in an expensive facial treatment designed to rejuvenate your skin and beautify
							your herbal glow</p>
						
						</div>
					</div>
					
				</div>

				<div class="col-lg-4s col-md-6s">
					
					<div class="service-item-layout2s wow fadeInUp" data-wow-delay="1.25s" >
						<div class="service-images">
							<figure class="hover-animes">
								<img src={s6} alt=""/>
							</figure>
						</div>

						<div class="service-contents">
							<h3>Waxing for Women &amp; Men</h3>
							<p>Say goodbye to undesirable hair with our expert waxing services.</p>
						
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>












    </div>
  )
}
