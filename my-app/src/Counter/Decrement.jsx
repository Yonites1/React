import React from 'react';

function Decrement({ handleDecrement }) {
  const handleDecrementClick = () => {
    if (handleDecrement) {
      handleDecrement();
    }
  };

  return (
    <button type="button" className="decrement" style={{fontSize: "100%",
    position: "relative", top: "5vh",left:"50vh", margin: "5px", backgroundColor: "red",
      borderRadius: "8%", color: "white", }} onClick={handleDecrementClick}>
      Decrement
    </button>
  );
}

export default Decrement;
