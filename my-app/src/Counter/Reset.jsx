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









/* 
import React, {useState} from 'react'

function Reset (handleReset){
    const handleReset = () => {
        // Counter state is incremented
        setCounter(counter[0]);

    }
       return ( 
      <button type="button" class="btn btn-secondary">Secondary</button>
             )
             
    };

    export default Reset; 


    import React, {useState} from 'react'
    const handleReset = () => {
        //Counter state is decremented
        setCounter(0); 

        return (
            <button type="button" class="btn btn-secondary">Secondary</button> 
        )
};

*/