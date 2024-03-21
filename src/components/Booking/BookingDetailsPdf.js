import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import { BASE_URL } from '../../utils/config';
import { Button } from 'reactstrap';
import logo from '../../assets/images/logo.png';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'

const BookingDetailsPDF = () => {
    const { id } = useParams();
    // const [bookingDetails, setBookingDetails] = useState(null);

    const { data:book, loading, error } = useFetch(`${BASE_URL}/booking/${id}`);
   
    const {fullName, phone, userId, userEmail, guestSize, bookAt} = book
    

    const pdfGenerate = () => {
        

        // Generate PDF using booking details
        const doc = new jsPDF();
        doc.addImage(logo, 'PNG', 25, 5, 30, 30); // Add logo
        doc.setFontSize(12); // Set font size
        doc.setFont("Helvetica", "normal"); // Set font style
        doc.text(10, 40, `Name: ${fullName}`);
        doc.text(10, 50, `Phone: ${phone}`);
        doc.text(10, 60, `User ID: ${userId}`);
        doc.text(10, 70, `Email: ${userEmail}`);
        doc.text(10, 80, `Guest Size: ${guestSize}`);
        doc.text(10, 90, `Booked At: ${new Date(bookAt).toLocaleString()}`);

        // Save the PDF
        doc.save("ticket.pdf");
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <Button onClick={pdfGenerate}>Download Ticket</Button>
        </div>
    );
};

export default BookingDetailsPDF;



// components/Booking/BookingListComponent.js



// import React, { useEffect, useState } from 'react';
// import { BASE_URL } from '../../utils/config';

// const BookingDetailsPdf = () => {
//     const [bookings, setBookings] = useState(null);

//     useEffect(() => {
//         const fetchAllBookings = async () => {
//             try {
//                 const response = await fetch(`${BASE_URL}/booking`);
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch bookings");
//                 }
//                 const bookingsData = await response.json();
//                 setBookings(bookingsData);
//             } catch (error) {
//                 console.error("Error fetching bookings:", error);
//                 setBookings([]);
//             }
//         };

//         fetchAllBookings();
//     }, []);

//     if (!bookings) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h2>All Bookings</h2>
//             <ul>
//                 {bookings.map((booking) => (
//                     <li key={booking._id}>
//                         <p>Name: {booking.fullName}</p>
//                         <p>Phone: {booking.phone}</p>
//                         <p>User ID: {booking.userId}</p>
//                         {/* Add more details as needed */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BookingDetailsPdf;
