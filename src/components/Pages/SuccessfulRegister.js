
import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/thank-you.css'
import Newsletter from '../../shared/Newsletter'

const SuccessfulRegister = () => {
  return (
    <section>
    <Container>
        <Row>
            <Col lg='12' className='pt-5 text-center'>
              <div className='thank__you'>
              <span><i class="ri-checkbox-circle-line"></i></span>
              <h1 className='mb-3 fw-semibold succes'>Successfully Registered</h1>
              {/* <h3 className='mb-4'>Proceed to login</h3> */}
              

              <Button className='btn primary__btn w-20'><Link to='/login'>Login</Link></Button>
              </div>
            </Col>
        </Row>
    </Container>
      <Newsletter />
    </section>
  )
}

export default SuccessfulRegister
