import React from "react";
import "../DrinkCard/DrinkCard.css";
import { FaChevronDown } from "react-icons/fa";
import testImg from "./test_img.jpg";

const DrinkCard = (props) => {
  return (
    <div className="drink-card">
      <img className="drink-img" src={testImg} alt="test img" />
      <h1 className="drink-name">{props.drinks[0].strDrink}</h1>
      <FaChevronDown className="arrow" />
    </div>
  );
};

export default DrinkCard;
