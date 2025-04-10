import Seat from './Seat';

export default function SeatGrid({ seats, selectedSeats, toggleSeat, currentUser }) {
  return (
    <div>
      {Array.from({ length: 12 }).map((_, row) => (
        <div key={row} style={{ display: 'flex' }}>
          {Array.from({ length: row === 11 ? 3 : 7 }).map((_, col) => {
            const seatNumber = row * 7 + col;
            const isBooked = seats[seatNumber]?.booked;
            const bookedBy = seats[seatNumber]?.user;
            return (
              <Seat
                key={seatNumber}
                number={seatNumber}
                isBooked={isBooked && bookedBy !== currentUser}
                isSelected={selectedSeats.includes(seatNumber)}
                onClick={() => toggleSeat(seatNumber)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}