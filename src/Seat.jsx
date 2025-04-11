export default function Seat({
    number, isBooked, isSelected, onClick })  {
        return (
          <button
            onClick={onClick}
            disabled={isBooked}
            style={{
              backgroundColor: isBooked ? 'green' : isSelected ? 'yellow' : 'white',
              margin: '5px',
              width: '40px',
              color:"black",
            }}
          >
            {number + 1}
          </button>
        );
}