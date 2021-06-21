import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";
import { FiSearch } from "react-icons/fi";

const Nav = () => {
  return (
    <div className="navbar">
      <Link to="/categories">
        <button className="categories-btn">categories</button>
      </Link>
      <Link to="/dealers-choice">
        <button className="dealers-choice-btn">dealer's choice</button>
      </Link>
      <div className="search-area">
        <form className="searchbar">
          <input className="search-input" placeholder="Search..." />
          <FiSearch className="search-button" />
        </form>
      </div>
    </div>
  );
};

export default Nav;
