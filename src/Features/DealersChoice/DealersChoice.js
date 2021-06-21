import React from "react";
// import { Link } from 'react-router-dom';
import "../DealersChoice/DealersChoice.css";
import RandomCard from "../../Components/RandomCard/RandomCard";

const DealersChoice = () => {
  return (
    <div className="dealers-choice">
      <button className="shuffle-btn">shuffle</button>
      <RandomCard className="card" />
    </div>
  );
};

export default DealersChoice;
