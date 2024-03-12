import React, {useState, useEffect} from 'react'
import CommonSection from '../../shared/CommonSection'
import '../../styles/tour.css'
import tourData from '../../assets/data/tours'
import TourCard from '../../shared/TourCard'
import SearchBar from '../../shared/SearchBar'
import Newsletter from '../../shared/Newsletter'
import { Container, Row, Col } from 'reactstrap'
import FadeLoader from "react-spinners/FadeLoader";

import useFetch from '../../hooks/useFetch'

import { BASE_URL } from '../../utils/config'


const Tours = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const { data:tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)

  useEffect (()=> {

    const pages = Math.ceil(tourCount / 4)
    setPageCount(pages)
    window.scrollTo(0,0)
  },[page, tourCount, tours])
  return (
    <>
       <CommonSection title={'All Travels'} />
       <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
        </section>
        <section className='pt-0'>
       <Container>
       {loading && (<FadeLoader color={"#E25E3E"} loading={loading}  size={100} aria-label="Loading Spinner"  data-testid="loader"
      />)}
       {error && <h4 className='text-center pt-5'>{error}</h4>}
        
        {
          !loading && !error && 
        
           <Row>
          {
            tours?.map(tour => (
              <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}>
              <TourCard tour={tour}/>
              </Col>
            ))
          }

          <Col lg='12'>
          <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
           {[...Array(pageCount).keys()].map(number=>(
            <span key={number} onClick={()=> setPage(number)} className={page === number ? "active__page" : ""}>
              {number + 1}
            </span>
           ))}
          </div>

          </Col>
        </Row>
        }
       </Container>
       </section>
       <Newsletter />
    </>
  )
}

export default Tours
