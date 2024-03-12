import React from 'react'

import '../../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../assets/images/hero-img01.jpg'
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video.mp4'
import worldImg from '../../assets/images/world.png'
import Subtitle from '../../shared/Subtitle'
import SearchBar from '../../shared/SearchBar'
import ServiceList from '../../services/ServiceList'
import FeaturedtourList from '../Feature-tour/FeaturedtourList'
import experienceImg from '../../assets/images/experience.png'
import Testimonials from '../Testimonial/Testimonials'
import Newsletter from '../../shared/Newsletter'
import CommonSection from '../../shared/CommonSection'
import logo from '../../assets/images/logo.png'

const About = () => {
  return (
    <>
         <CommonSection title={'About'} />
          <section>
          <Container>
            <Row>
              <Col lg="6">
              <div className='experience__content'>
                <Subtitle subtitle={'About Us'} />

                {/* <h2>With our all experience <br /> we will serve you</h2> */}
                <p> Welcome to Baba Star International Transport, your 
                  go-to platform for convenient and reliable bus travel in West Africa.
                   At Baba Star International Transport , we're committed to providing travelers
                    with a seamless and enjoyable journey from start to finish.
                 </p>
              </div>
              <div className='counter__wrapper d-flex align-items-center gap-5'>
              <div className='counter__box'>
               <span>24</span>
               <h6>successful</h6>
              </div>
              <div className='counter__box'>
               <span>2k+</span>
               <h6>Regular clients</h6>
              </div>
              <div className='counter__box'>
               <span>10</span>
               <h6>Years experience</h6>
              </div>
              </div>
              </Col>
              <Col lg="6">
                <div className='experience__img'>
                <img src={logo} alt=''/>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col lg="6">
              <div className='experience__content'>
                <Subtitle subtitle={'Our Mission'} />

                {/* <h2>With our all experience <br /> we will serve you</h2> */}
                <p> Our mission is to make bus travel accessible, comfortable, 
                 and hassle-free for everyone. We strive to connect people with
                 their desired destinations, offering a safe and reliable mode 
                 of transportation that meets their needs and exceeds their expectations.
                 </p>
              </div>
              <div className='counter__wrapper d-flex align-items-center gap-5'>


              <div className='experience__content'>
                <Subtitle subtitle={'Who We Are'} />

                {/* <h6>Wide Range of Destinations</h6> */}
                <p> At Baba Star International Transport , we're passionate about 
                travel and dedicated to delivering exceptional service to our customers.
                 With years of experience in the transportation industry, our team brings 
                 a wealth of knowledge and expertise to ensure a smooth and enjoyable travel 
                 experience for all passengers.
                 </p>
              </div>
              {/* <div className='counter__box'>
               <span>24</span>
               <h6>successful</h6>
              </div>
              <div className='counter__box'>
               <span>2k+</span>
               <h6>Regular clients</h6>
              </div>
              <div className='counter__box'>
               <span>10</span>
               <h6>Years experience</h6>
              </div> */}
              </div>
              </Col>
              <Col lg="6">

              <div className='experience__img'>
              <div className='experience__content'>
                <Subtitle subtitle={'What we Offer'} />

                <h6>Wide Range of Destinations</h6>
                <p> Whether you're planning a weekend getaway or a long-distance journey, 
                we offer a variety of routes to popular destinations across West Africa,
                 including Togo, Ghana, and Cotonou.
                 </p>
                 <h6>Modern Fleet</h6>
                 <p>Our fleet of modern buses is equipped with state-of-the-art 
                 amenities to ensure a comfortable and enjoyable journey for passengers. 
                 From spacious seating to onboard entertainment, we've got everything you
                  need to travel in style.</p>
                  <h6>Exceptional Service</h6>
                  <p>Customer satisfaction is our top priority, and we go above and beyond 
                  to ensure that every passenger has a positive experience with our service. 
                  From friendly customer support to reliable on-time departures, we're here to
                   make your journey a memorable one.</p>
              </div>

                {/* <img src={experienceImg} alt=''/> */}
                 
                </div> 
              </Col>
            </Row>
          </Container>
        </section>
        <Newsletter />
    </>
  )
}

export default About
