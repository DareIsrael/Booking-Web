
import React, { useState, useContext } from 'react';
import { Form, FormGroup, ListGroupItem, Button, ListGroup } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './booking.css'
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../../utils/config';
import logo from '../../assets/images/logo.png';
import jsPDF from 'jspdf';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews, title } = tour;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    const handleChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleClick = async e => {
        e.preventDefault();
        console.log(booking);

        try {
            if (!user || user === undefined || user === null) {
                return alert('Please sign in');
            }

            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(booking)
            });

            const result = await res.json();

            if (!res.ok) {
                return alert(result.message);
            }

            generateTicket(booking);

            navigate("/thank-you");
        } catch (err) {
            alert('Fill the form');
        }
    }

    const generateTicket = (bookingDetails) => {
        // Calculate the height needed for the content
        const contentHeight = 100; // Adjust as needed based on the content
    
        // Set the page size based on the content height
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: [80, contentHeight]
        });
    
        // Add logo at the top
        doc.addImage(logo, 'PNG', 5, 2, 25, 20);
    
        // Set font style and size
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
    
        // Add ticket details
        doc.text(10, 30, `Location: ${bookingDetails.tourName}`);
        doc.text(10, 38, `Full Name: ${bookingDetails.fullName}`);
        doc.text(10, 46, `Phone: ${bookingDetails.phone}`);
        doc.text(10, 52, `Guest Size: ${bookingDetails.guestSize}`);
        doc.text(10, 60, `Booked At: ${bookingDetails.bookAt}`);
        doc.text(10, 68, `Ref: ${bookingDetails.userId}`);
        doc.text(17, 80, `Total Amount: #${totalAmount},000`);
        doc.text(1, 97, `website:www.babastar-booking-web.onrender.com`)
    
        // Save the PDF
        doc.save("ticket.pdf");
    };
    
    
    

    return (
        <div className='booking'>
            <div className='booking__top d-flex align-items-center justify-content-between'>
                <h3>#{price},000<span>/per person</span></h3>
                <span className='tour__rating d-flex align-items-center gap-1'>
                    <i class="ri-star-s-fill"></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            {/* Booking form */}
            <div className='booking__form'>
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type='text' placeholder='Full Name' required id='fullName' onChange={handleChange}></input>
                    </FormGroup>
                    <FormGroup>
                        <input type='text' placeholder='Phone' required id='phone' onChange={handleChange}></input>
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='date' placeholder='' required id='bookAt' onChange={handleChange}></input>
                        <input type='number' placeholder='Traveller' required id='guestSize' onChange={handleChange}></input>
                    </FormGroup>
                </Form>
            </div>

            {/* Booking bottom */}
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
    );
}

export default Booking;









// import React, { useState, useContext } from 'react';
// import { Form, FormGroup, ListGroupItem, Button, ListGroup } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { BASE_URL } from '../../utils/config';
// import jsPDF from 'jspdf';

// const Booking = ({ tour, avgRating }) => {
//     const { price, reviews, title } = tour;
//     const navigate = useNavigate();
//     const { user } = useContext(AuthContext);
//     const [booking, setBooking] = useState({
//         userId: user && user._id,
//         userEmail: user && user.email,
//         tourName: title,
//         fullName: '',
//         phone: '',
//         guestSize: 1,
//         bookAt: ''
//     });

//     const serviceFee = 10;
//     const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

//     const handleChange = e => {
//         setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
//     }

//     const handleClick = async e => {
//         e.preventDefault();
//         console.log(booking);

//         try {
//             if (!user || user === undefined || user === null) {
//                 return alert('Please sign in');
//             }

//             const res = await fetch(`${BASE_URL}/booking`, {
//                 method: 'post',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify(booking)
//             });

//             const result = await res.json();

//             if (!res.ok) {
//                 return alert(result.message);
//             }

//             generateTicket(booking);

//             navigate("/thank-you");
//         } catch (err) {
//             alert('Fill the form');
//         }
//     }

//     const generateTicket = (bookingDetails) => {
//         const doc = new jsPDF();
//         doc.text(10, 10, `Tour Name: ${bookingDetails.tourName}`);
//         doc.text(10, 20, `Full Name: ${bookingDetails.fullName}`);
//         doc.text(10, 30, `Phone: ${bookingDetails.phone}`);
//         doc.text(10, 40, `Guest Size: ${bookingDetails.guestSize}`);
//         doc.text(10, 50, `Booked At: ${bookingDetails.bookAt}`);
//         doc.save("ticket.pdf");
//     };

//     return (
//         <div className='booking'>
//             <div className='booking__top d-flex align-items-center justify-content-between'>
//                 <h3>#{price},000<span>/per person</span></h3>
//                 <span className='tour__rating d-flex align-items-center gap-1'>
//                     <i class="ri-star-s-fill"></i>
//                     {avgRating === 0 ? null : avgRating} ({reviews?.length})
//                 </span>
//             </div>

//             {/* Booking form */}
//             <div className='booking__form'>
//                 <h5>Information</h5>
//                 <Form className='booking__info-form' onSubmit={handleClick}>
//                     <FormGroup>
//                         <input type='text' placeholder='Full Name' required id='fullName' onChange={handleChange}></input>
//                     </FormGroup>
//                     <FormGroup>
//                         <input type='text' placeholder='Phone' required id='phone' onChange={handleChange}></input>
//                     </FormGroup>
//                     <FormGroup className='d-flex align-items-center gap-3'>
//                         <input type='date' placeholder='' required id='bookAt' onChange={handleChange}></input>
//                         <input type='number' placeholder='Traveller' required id='guestSize' onChange={handleChange}></input>
//                     </FormGroup>
//                 </Form>
//             </div>

//             {/* Booking bottom */}
//             <div className='booking__bottom'>
//                 <ListGroup>
//                     <ListGroupItem className='border-0 px-0'>
//                         <h5 className='d-flex align-items-center gap-1'>#{price},000<i class="ri-close-line"></i>1 person</h5>
//                         <span>#{price},000</span>
//                     </ListGroupItem>
//                     <ListGroupItem className='border-0 px-0'>
//                         <h5>Service charge</h5>
//                         <span>#{serviceFee},000</span>
//                     </ListGroupItem>
//                     <ListGroupItem className='border-0 px-0 total'>
//                         <h5>Total</h5>
//                         <span>#{totalAmount},000</span>
//                     </ListGroupItem>
//                 </ListGroup>
//                 <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
//             </div>
//         </div>
//     );
// }

// export default Booking;
