import React, { useEffect, useState } from 'react';
import SeatGrid from './SeatGrid';
import { getCurrentUser } from './auth';

export default function Booking() {
  const [seats, setSeats] = useState(() => JSON.parse(localStorage.getItem('seats')) || {});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const currentUser = getCurrentUser();

  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNumber));
    } else if (selectedSeats.length < 7) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleBook = () => {
    const updatedSeats = { ...seats };
    selectedSeats.forEach(seat => {
      updatedSeats[seat] = { booked: true, user: currentUser };
    });
    setSeats(updatedSeats);
    setSelectedSeats([]);
    localStorage.setItem('seats', JSON.stringify(updatedSeats));
  };

  return (
    <div>
      <h2>Welcome, {currentUser}</h2>
      <SeatGrid
        seats={seats}
        selectedSeats={selectedSeats}
        toggleSeat={toggleSeat}
        currentUser={currentUser}
      />
      <button onClick={handleBook} disabled={selectedSeats.length === 0}>Book Selected Seats</button>
    </div>
  );
}