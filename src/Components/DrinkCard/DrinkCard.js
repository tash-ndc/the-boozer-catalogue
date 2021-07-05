import React, { useState, useEffect } from "react";
import "../DrinkCard/DrinkCard.css";
import { FaChevronDown } from "react-icons/fa";
import ReactLoading from "react-loading";
import testImg from "./test_img.jpg";

const DrinkCard = (props) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const getColors = () => {
      switch (props.category) {
        case "cocktails":
          setColor("pink");
          break;
        case "premium-cocktails":
          setColor("blue");
          break;
        case "party-drinks":
          setColor("red");
          break;
        case "shots":
          setColor("green");
          break;
        case "homeade-liqueur":
          setColor("orange");
          break;
        case "beer":
          setColor("yellow");
          break;
        default:
          setColor("purple");
          break;
      }
    };

    getColors();
  }, [props.category]);

  return (
    <div className={[color, "drink-card"].join(" ")}>
      <img
        className="drink-img"
        src={props.drinks[0]?.strDrinkThumb}
        alt="test img"
      />
      <h1 className="drink-name">
        {props.drinks[0]?.strDrink ?? <ReactLoading type="spin" color="#fff" />}
      </h1>
      <FaChevronDown className="arrow" />
    </div>
  );
};

export default DrinkCard;
