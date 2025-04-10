export default function Seat({
    number, isBooked, isSelected, onClick })  {
        return (
          <button
            onClick={onClick}
            disabled={isBooked}
            style={{
              backgroundColor: isBooked ? 'green' : isSelected ? 'red' : 'white',
              margin: '5px',
              width: '40px'
            }}
          >
            {number + 1}
          </button>
        );
}