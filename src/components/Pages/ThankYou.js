import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/thank-you.css'
import Newsletter from '../../shared/Newsletter'
import BookingDetailsPdf from '../Booking/BookingDetailsPdf'

const ThankYou = () => {


    

  return (
    <section>
    <Container>
        <Row>
            <Col lg='12' className='pt-5 text-center'>
              <div className='thank__you'>
              <span><i class="ri-checkbox-circle-line"></i></span>
              <h1 className='mb-3 fw-semibold'>Thank You</h1>
              <h3 className='mb-4'>Your bus is booked.</h3>
              {/* <BookingDetailsPdf /> */}

              <Button className='btn primary__btn w-20'><Link to='/home'>Back to Home</Link></Button>
              </div>
            </Col>
        </Row>
    </Container>
      <Newsletter />
    </section>
  )
}

export default ThankYou
