import React from 'react'
import '../../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../assets/images/hero-img01.jpg'
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video2.mp4'
import worldImg from '../../assets/images/world.png'
import Subtitle from '../../shared/Subtitle'
import SearchBar from '../../shared/SearchBar'
import ServiceList from '../../services/ServiceList'
import FeaturedtourList from '../Feature-tour/FeaturedtourList'
import experienceImg from '../../assets/images/experience2.jpeg'
import Testimonials from '../Testimonial/Testimonials'
import Newsletter from '../../shared/Newsletter'


const Home = () => {
  return (
    <>
    <section className='home'>
      <Container>
        <Row>
          <Col lg='6'>
           <div className='hero__content'>
           <div className='hero__subtitle d-flex align-items-center'>
            <Subtitle subtitle={'Know Before you go'} />
            <img src={worldImg} alt=''/>
           </div>
           <h1>Travelling opens the door to creating{" "} <span className='highlight'>memories</span></h1>
           <p>
           Looking for a convenient and hassle-free way to travel from Lagos to exciting destinations like Togo, Ghana, and Cotonou? Look no further! 
           Baba Star International Transport and Haulage Services is here to make your journey comfortable and memorable.
           </p>
           </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box ' >
            <img src={heroImg} alt=''/>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box hero__video-box mt-4'>
            <video src={heroVideo} alt='' controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-5'>
            <img src={heroImg02} alt=''/>
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className='services__subtitle'>What we services</h5>
          <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

     {/* ================ feature tour section start =========== */}

    <section>
      <Container>
        <Row>
          <Col lg = '12' className='mb-5'>
           <Subtitle subtitle={'Explore'} />
           <h2 className='featured__tour-title'> Our featured journey</h2>
           
          </Col>
          <FeaturedtourList />
        </Row>
      </Container>
    </section>

     {/* ==================== feature tour section end ============== */}

      {/* ==================== Experience tour section start ============== */}

        <section>
          <Container>
            <Row>
              <Col lg="6">
              <div className='experience__content'>
                <Subtitle subtitle={'Experience'} />

                <h2>With our all experience <br /> we will serve you</h2>
                <p> Enjoy a comfortable journey with
                 spacious seating, air conditioning, and onboard amenities.
                 Travel with peace of mind knowing that our buses undergo regular
                  maintenance checks and are operated by trained drivers.
                  Reach out to our dedicated customer support team for assistance
                   with bookings, itinerary changes, or any inquiries.
                 </p>
              </div>
              <div className='counter__wrapper d-flex align-items-center gap-5'>
              <div className='counter__box'>
               <span>12k</span>
               <h6>Successful trip</h6>
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
                <img src={experienceImg} alt=''/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>



      {/* ==================== Experience tour section end ============== */}

      {/* ==================== testimonials section start ============== */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
             <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

       {/* ==================== Newsletter section  ============== */}

       <Newsletter />

    </>
  )
}

export default Home
