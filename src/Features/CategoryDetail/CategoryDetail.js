import React, { useState, useEffect } from "react";
import "../CategoryDetail/CategoryDetail.css";
import { getCategoryDrinks } from "../../api/cocktail_db";
import DrinkCard from "../../Components/DrinkCard/DrinkCard";

const CategoryDetail = ({ match }) => {
  const [drinks, setDrinks] = useState([]);
  const [apiCategory, setApiCategory] = useState("");
  const menuCategory = match.params.category;

  const getDrinks = async (category) => {
    const drinks = await getCategoryDrinks(category);
    setDrinks(drinks);
  };

  useEffect(() => {
    const getCategory = () => {
      switch (menuCategory) {
        case "cocktails": {
          setApiCategory("Ordinary_Drink");
          break;
        }
        case "premium-cocktails": {
          setApiCategory("Cocktail");
          break;
        }
        case "shots": {
          setApiCategory("Shot");
          break;
        }
        case "party-drinks": {
          setApiCategory("Punch_/_Party_Drink");
          break;
        }
        case "homemade-liqueur": {
          setApiCategory("Homemade_Liqueur");
          break;
        }
        case "beer": {
          setApiCategory("Beer");
          break;
        }
        default: {
          setApiCategory("Other/Unknown");
          break;
        }
      }
    };

    getCategory();
    getDrinks(apiCategory);
  }, [menuCategory, apiCategory]);

  return (
    <div className="category-detail">
      <h1>feck</h1>
      {/* <DrinkCard drinks={drinks} /> */}
    </div>
  );
};

export default CategoryDetail;
