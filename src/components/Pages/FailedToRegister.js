import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/failed.css'
import Newsletter from '../../shared/Newsletter'

const FailedToRegister = () => {
  
    return (
        <section>
        <Container>
            <Row>
                <Col lg='12' className='pt-5 text-center'>
                  <div className='fail'>
                  <span className="fail"><i class="ri-close-circle-line"></i></span>
                  <h1 className='mb-3 fw-semibold failed'>Registration failed, try again</h1>
                  {/* <h3 className='mb-4'>Proceed to login</h3> */}
                  
    
                  <Button className='btn primary__btn w-20'><Link to='/register'>Try again</Link></Button>
                  </div>
                </Col>
            </Row>
        </Container>
          <Newsletter />
        </section>
  )
}

export default FailedToRegister
