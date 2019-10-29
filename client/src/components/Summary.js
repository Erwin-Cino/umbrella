import React from "react";
import "./Summary.css";

const Summary = props => {
  return (
    <div className='summary-container'>
      <p className='umbrellaForecast'>{props.umbrellaForecast}</p>
    </div>
  );
};

export default Summary;
