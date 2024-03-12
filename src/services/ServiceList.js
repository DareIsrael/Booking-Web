import React from 'react'
import ServiceCard from './ServiceCard';
import { Col, Row } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: 'Wide Range of Destinations',
    desc: ' Whether youre planning a weekend getaway or a long-distance journey, we offer a variety of routes to popular destinations across West Africa, including Togo, Ghana, and Cotonou.'
  },
  {
    imgUrl: guideImg,
    title: 'Modern Fleet',
    desc: ' Our fleet of modern buses is equipped with state-of-the-art amenities to ensure a comfortable and enjoyable journey for passengers. From spacious seating to onboard entertainment, we have got everything you need to travel in style.'

    
  },
  {
    imgUrl: customizationImg,
    title: 'Exceptional Service',
    desc: ' Customer satisfaction is our top priority, and we go above and beyond to ensure that every passenger has a positive experience with our service. From friendly customer support to reliable on-time departures'
  }
]

const ServiceList = () => {
  return (
    <>
      { servicesData.map((item, index) => (
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
         <ServiceCard item = {item} />
        </Col>
        ))}
    </>
  )
}

export default ServiceList;
