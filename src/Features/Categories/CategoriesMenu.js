import React from "react";
import { Link } from "react-router-dom";
import "../Categories/CategoriesMenu.css";

const CategoriesMenu = () => {
  return (
    <div className="categories-menu">
      <div className="cocktails">
        <Link to="/category/cocktails" className="link">
          <button className="cocktails-btn">cocktails</button>
        </Link>
      </div>
      <div className="prem-cocktails">
        <Link to="/category/premium-cocktails" className="link">
          <button className="prem-cocktails-btn">premium cocktails</button>
        </Link>
      </div>
      <div className="party">
        <Link to="/category/party-drinks" className="link">
          <button className="party-btn">party</button>
        </Link>
      </div>
      <div className="shots">
        <Link to="/category/shots" className="link">
          <button className="shots-btn">shots</button>
        </Link>
      </div>
      <div className="homemade-liqueur">
        <Link to="/category/homemade-liqueur" className="link">
          <button className="homemade-liqueur-btn">homemade liqueur</button>
        </Link>
      </div>
      <div className="beer">
        <Link to="/category/beer" className="link">
          <button className="beer-btn">beer</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesMenu;
