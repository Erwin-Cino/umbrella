import React from "react";
import "./Summary.css";

const Summary = props => {
  return (
    <div className='summary-container'>
      <div className='forecastSelect'>
        <select onChange={props.citySelect} className='dropdownSelect'>
          <option value='1'>Baguio</option>
          <option value='2'>Cainta</option>
        </select>
        <p className='umbrellaForecast'>{props.umbrellaForecast}</p>
      </div>
    </div>
  );
};

export default Summary;
