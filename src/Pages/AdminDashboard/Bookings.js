import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Import your firebase configuration
import Sidebar from './Sidebar';
import { Navbar } from 'react-bootstrap';

const BookingsDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
       
        const querySnapshot = await db.collection('bookings').get();
        const bookingsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBookings(bookingsData);
      } catch (error) {
        console.error('Error fetching bookings: ', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
  
      <Sidebar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Bookings Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map(booking => (
          <div key={booking.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold">{booking.packageName}</h2>
            <p className="text-gray-600 mb-2">Customer: {booking.customerName}</p>
            <p className="text-gray-600 mb-2">Email: {booking.customerEmail}</p>
            <p className="text-gray-600 mb-2">Phone: {booking.customerPhone}</p>
            <p className="text-gray-600 mb-2">Date: {booking.bookingDate}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BookingsDashboard;
