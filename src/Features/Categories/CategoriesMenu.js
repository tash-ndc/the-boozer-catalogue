import React from "react";
import { Link } from "react-router-dom";
import "../Categories/CategoriesMenu.css";

const CategoriesMenu = () => {
  return (
    <div className="categories-menu">
      <div className="cocktails">
        <Link to="/category/:cocktails">
          <button className="cocktails-btn">cocktails</button>
        </Link>
      </div>
      <div className="prem-cocktails">
        <button className="prem-cocktails-btn">premium cocktails</button>
      </div>
      <div className="party">
        <button className="party-btn">party</button>
      </div>
      <div className="shots">
        <button className="shots-btn">shots</button>
      </div>
      <div className="homemade-liqueur">
        <button className="homemade-liqueur-btn">homemade liqueur</button>
      </div>
      <div className="beer">
        <button className="beer-btn">beer</button>
      </div>
    </div>
  );
};

export default CategoriesMenu;
