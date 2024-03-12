import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';



const Quick_links= [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display:'About'
  },
  {
    path:'/tour',
    display: 'Tours'
  }
   
]

const Quick_links2= [
  {
    path: '/testimoial',
    display: 'Testimonial'
  },
  {
    path: '/login',
    display:'Login'
  },
  {
    path:'/register',
    display: 'Register'
  }
   
]


const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
         <div className='logo'>
         <img src={logo} alt='' />
         <p> "Discover seamless bus booking with our platform. 
           Explore diverse routes and schedules, enjoy secure transactions, 
           and access responsive support. Benefit from exclusive deals and book
           effortlessly on-the-go. Start your journey today!" </p>
         <div className='social__links d-flex align-items-center gap-4'>
         <span>
          <Link to='#'><i class="ri-youtube-line"></i></Link>
         </span>
         <span>
          <Link to='#'><i class="ri-instagram-line"></i></Link>
         </span>
         <span>
          <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
         </span>

         </div>
         </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
            {
              Quick_links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }

            
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
            {
              Quick_links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }

            
            </ListGroup>
          </Col>
          <Col lg='3' mb='3' sm='6'>
          <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>
            
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                 <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  Office:
                 </h6>
                 <p className='mb-0'>1 Commercial Road, Eleganza Building Scorpion
                 Block,Room SFFR 002, Apapa, Lagos State.</p>

                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                 <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  Branch:
                 </h6>
                 <p className='mb-0'>Ecomog Park, Mile 2 Lagos State.</p>

                </ListGroupItem>

                {/* <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                 <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                 </h6>
                 <p className='mb-0'>dareisrael4@gmail.com</p>

                </ListGroupItem> */}

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                 <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  Phone-1:
                 </h6>
                 <p className='mb-0'>09114306285</p>

                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                 <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  Phone-2:
                 </h6>
                 <p className='mb-0'>09032427697</p>

                </ListGroupItem>


                
              
            

            
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
          <p className='copyright'>copyright {year}, design and develop by BrightWeb. All right reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer


