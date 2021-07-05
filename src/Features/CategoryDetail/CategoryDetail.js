import React, { useState, useEffect } from "react";
import "../CategoryDetail/CategoryDetail.css";
import { getCategoryDrinks } from "../../api/cocktail_db";
import DrinkCard from "../../Components/DrinkCard/DrinkCard";

const CategoryDetail = ({ match }) => {
  const [drinks, setDrinks] = useState([]);
  const [endpoint, setEndpoint] = useState("");

  useEffect(() => {
    const getDrinks = async () => {
      const data = await getCategoryDrinks(endpoint);
      setDrinks(data);
    };

    const getEndpoint = () => {
      switch (match.params.category) {
        case "cocktails":
          setEndpoint("Ordinary_Drink");
          break;
        case "premium-cocktails":
          setEndpoint("Cocktail");
          break;
        case "party-drinks":
          setEndpoint("Punch_/_Party_Drink");
          break;
        case "shots":
          setEndpoint("Shot");
          break;
        case "homemade-liqueur":
          setEndpoint("Homemade_Liqueur");
          break;
        case "beer":
          setEndpoint("Beer");
          break;
        default:
          setEndpoint("Other/Unknown");
          break;
      }
    };

    getEndpoint();
    getDrinks();
  }, [endpoint, match.params.category]);

  // console.log(drinks);

  return (
    <div className="category-detail">
      <h1>feck</h1>
      <DrinkCard category={match.params.category} drinks={drinks} />
    </div>
  );
};

export default CategoryDetail;
