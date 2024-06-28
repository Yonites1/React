import React from 'react';

function Reset({ handleReset }) {
 
  const handleResetClick = () => {
    if (handleReset) {
      handleReset(); 
    }
  };

  return (
    <button type="button" className="btn btn-secondary" style={{fontSize: "100%",position: "relative", top: "5vh", left:"50vh", marginLeft: "5px", backgroundColor: "grey",
    borderRadius: "8%", color: "white", }} onClick={handleResetClick}> Reset
    </button>
  );
}

export default Reset;
