import React, { useState, useEffect } from "react";
import "../DealersChoice/DealersChoice.css";
import RandomCard from "../../Components/RandomCard/RandomCard";
import { getRandomCocktail } from "../../api/cocktail_db";

const DealersChoice = () => {
  const [drink, setDrink] = useState([]);

  const getDrink = async () => {
    const drink = await getRandomCocktail();
    setDrink(drink);
  };

  useEffect(() => {
    getDrink();
  }, []);

  return (
    <div className="dealers-choice">
      <button className="shuffle-btn" onClick={getDrink}>
        shuffle
      </button>
      <RandomCard className="card" drink={drink} />
    </div>
  );
};

export default DealersChoice;
