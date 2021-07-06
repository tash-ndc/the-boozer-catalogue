import React, { useState, useEffect } from "react";
import "../DrinkCard/DrinkCard.css";
import { getDrinkInfo } from "../../api/cocktail_db";
import { FaChevronDown } from "react-icons/fa";
import ReactLoading from "react-loading";
import { Animated } from "react-animated-css";

const DrinkCard = (props) => {
  const [color, setColor] = useState("");
  const [drink, setDrink] = useState([]);
  const [visible, setVisible] = useState(false);
  let recipe = [];

  const handleClick = async () => {
    const drink = await getDrinkInfo(props.drinkId);
    setDrink(drink);
  };

  const getIngredients = () => {
    let ingredients = [];
    let measures = [];
    for (let i = 1; i < 16; i++) {
      if (
        drink[`strIngrient${i}`] !== null ||
        drink[`strIngrient${i}`] !== ""
      ) {
        ingredients.push(drink[`strIngredient${i}`]);
      }
      if (drink[`strMeasure${i}`] !== null || drink[`strMeasure${i}`] !== "") {
        measures.push(drink[`strMeasure${i}`]);
      }
    }

    for (let j = 0; j < ingredients.length; j++) {
      if (!ingredients[j]) {
        break;
      } else if (measures[j]) {
        recipe.push(measures[j] + " " + ingredients[j]);
      } else {
        recipe.push(ingredients[j]);
      }
    }

    return recipe;
  };

  getIngredients();

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
      <img className="drink-img" src={props?.drinkImg} alt={props?.drinkName} />
      <h1 className="drink-name">
        {props?.drinkName ?? <ReactLoading type="spin" color="#fff" />}
      </h1>
      <Animated
        // animationIn="slideInDown"
        // animationOut="slideOutUp"
        isVisible={visible}
      >
        <div className="selected-drink-details">
          <h2 className="ingredients-heading">Ingredients:</h2>
          <ul className="ingredients">
            {recipe.map((ingredient, idx) => {
              return <li key={idx}>{ingredient}</li>;
            })}
          </ul>
          <h2 className="instructions-heading">Directions:</h2>
          <p className="instructions">{drink.strInstructions}</p>
        </div>
      </Animated>
      <button className="button" onClick={handleClick}>
        <FaChevronDown className="expand-arrow" />
      </button>
    </div>
  );
};

export default DrinkCard;
