import React, { useState } from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import Reset from './Reset';

function CounterApp() {
  const [counter, setCounter] = useState(0);


  const handleIncrementClick = () => {
    setCounter(counter  + 1);
  };

  const handleDecrementClick = () => {
    setCounter(counter  - 1);
   
  };

 
  const handleResetClick = () => {
    setCounter(0);
  };

  return (
    <>
      <h1 style={{fontSize: "120%",position: "relative", top: "5px",left:"50vh", border:"solid black 1px", marginLeft:"5%", width:"10vw" }}> Counter: {counter}</h1>
      <Increment handleIncrement={handleIncrementClick} />
      <Decrement handleDecrement={handleDecrementClick} />
      <Reset handleReset={handleResetClick} />
    </>
  );
}

export default CounterApp;


