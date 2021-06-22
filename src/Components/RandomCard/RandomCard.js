import React, { useEffect, useState } from "react";
import "../RandomCard/RandomCard.css";

const RandomCard = (props) => {
  const [color, setColor] = useState("");
  let recipe = [];

  const getColors = () => {
    switch (props.drink.strCategory) {
      case "Ordinary Drink":
        setColor("pink");
        break;
      case "Cocktail":
        setColor("blue");
        break;
      case "Punch / Party Drink":
        setColor("red");
        break;
      case "Shot":
        setColor("green");
        break;
      case "Homemade Liqueur":
        setColor("orange");
        break;
      case "Beer":
        setColor("yellow");
        break;
      default:
        setColor("purple");
        break;
    }
  };

  const getIngredients = () => {
    let ingredients = [];
    let measures = [];
    for (let i = 1; i < 16; i++) {
      if (
        props.drink[`strIngrient${i}`] !== null ||
        props.drink[`strIngrient${i}`] !== ""
      ) {
        ingredients.push(props.drink[`strIngredient${i}`]);
      }
      if (
        props.drink[`strMeasure${i}`] !== null ||
        props.drink[`strMeasure${i}`] !== ""
      ) {
        measures.push(props.drink[`strMeasure${i}`]);
      }
    }

    for (let j = 0; j < ingredients.length; j++) {
      if (!ingredients[j]) {
        break;
      } else if (measures[j]) {
        recipe.push(measures[j] + ingredients[j]);
      } else {
        recipe.push(ingredients[j]);
      }
    }

    return recipe;
  };

  getIngredients();

  useEffect(() => {
    getColors();
  }, []);

  return (
    <div className="random-card">
      <img
        className="random-drink-img"
        src={props.drink.strDrinkThumb}
        alt={props.drink.strDrink}
      />
      <h1 className="random-drink-name">{props.drink.strDrink}</h1>
      <h2 className="drink-info ingrediants-title">Ingredients:</h2>
      <ul className="drink-info ingrediants-list">
        {recipe.map((ingredient, idx) => {
          return <li key={idx}>{ingredient}</li>;
        })}
      </ul>
      <h2 className="drink-info directions-title">Directions:</h2>
      <p className="drink-info directions">{props.drink.strInstructions}</p>
    </div>
  );
};

export default RandomCard;
