import React, { useState, useContext } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroupItem, Button, ListGroup } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

import { BASE_URL } from '../../utils/config'


const Booking = ({tour, avgRating}) => {

    const {price, reviews, title} = tour

    const navigate = useNavigate()

    const { user } = useContext (AuthContext) 

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName:title,
        fullName:'',
        phone:'',
        guestSize: 1,
        bookAt:''
    })

    const handleChange = e => {
        setBooking(prev=>({...prev, [e.target.id]:e.target.value}))
    }

    const serviceFee = 10
    const totalAmount = Number(price) * Number(booking.guestSize) + Number (serviceFee)
     
    const handleClick =  async e => {
        e.preventDefault();
        console.log (booking)

        try {
            if (!user || user === undefined || user === null) {
                return alert ('please sign in')
            }

            const res = await fetch (`${BASE_URL}/booking`, {
                method: 'post',
                headers: {
                    'content-type' : 'application/json'
                },

                credentials:'include',
                body:JSON.stringify(booking)
            }) 

            const result = await res.json()

            if(!res.ok) {
                return alert(result.message)
            }

            navigate("/thank-you")
        } catch (err) {
          alert('fill the form')
        }

        // console.log(credentials)
       
    }

  return (
    <div className='booking'>
     <div className='booking__top d-flex align-items-center justify-content-between'>
     <h3>#{price},000<span>/per person</span></h3>
     <span className='tour__rating d-flex align-items-center gap-1'>
        <i class="ri-star-s-fill"></i>
        {avgRating === 0 ? null : avgRating} ({reviews?.length})
     </span>
     </div>

     {/* ============== booking form ============ */}
     <div className='booking__form'>
     <h5>Information</h5>
      <Form className='booking__info-form' onSubmit={handleClick}>
       <FormGroup>
        <input type='text' placeholder='Full Name' required id='fullName'  onChange={handleChange}></input>
       </FormGroup>
       <FormGroup>
        <input type='text' placeholder='Phone' required id='phone'  onChange={handleChange}></input>
       </FormGroup>
       <FormGroup className='d-flex align-items-center gap-3'>
        <input type='date' placeholder='' required  id='bookAt' onChange={handleChange}></input>
        <input type='number' placeholder='Traveller' required  id='guestSize'  onChange={handleChange}></input>
       </FormGroup>
      </Form>
     </div>


     {/* =================== booking end =============== */}


     {/* ====================== booking bottom =============== */}
       <div className='booking__bottom'>
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>#{price},000<i class="ri-close-line"></i>1 person</h5>
            <span>#{price},000</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
            <h5>Service charge</h5>
            <span>#{serviceFee},000</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
            <h5>Total</h5>
            <span>#{totalAmount},000</span>
            </ListGroupItem>
        </ListGroup>
        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
       </div>

    </div>
  )
}

export default Booking
