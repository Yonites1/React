import React from 'react';

function Increment({ handleIncrement }) {
  const handleIncrementClick = () => {
    if (handleIncrement) {
      handleIncrement();
    }
  };

  return (
    <button type="button" className="increment" style={{fontSize: "100%",position: "relative", top: "5vh", left:"50vh", marginleft:"5px", backgroundColor: "green",
    borderRadius: "8%", color: "white", }} onClick={handleIncrementClick}> Increment
    </button>
  );
}

export default Increment;