import React from "react";
import "./Menu.css";
import { Navigate, useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <div className="menu section__padding">
      <div className="menu_items">
        <ul onClick={handleClick}>
          <li>Bar Menu</li>
          <li>Food Menu</li>
          <li>Desert Menu</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
