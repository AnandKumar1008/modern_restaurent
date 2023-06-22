import React from "react";
import "./MenuStyle.css";
import { useState } from "react";
import { useEffect } from "react";
const key = "d1943702de584b37bfdf4bcc10b27c8f";
const src="https://spoonacular.com/recipeImages/";
const MenuStyle = () => {
  const [items, setItems] = useState();
  const [cuisine, setCuisine] = useState("italian");
  const url = `https://api.spoonacular.com/recipes/search?apiKey=${key}&cuisine=${cuisine}`;
  useEffect(() => {
    const recipes=localStorage.getItem('recipes')||apiCall();
setItems(JSON.parse(recipes));
    // apiCall();
  }, []);
  const apiCall = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/search?apiKey=${key}&cuisine=${cuisine}`
      );
      const data = await res.json();
      console.log(data);
      const store=JSON.stringify(data);
      localStorage.setItem('recipes',store);
      setItems(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="restaurent-menu_style section__padding">
      <div className="restaurent-menu_style_heading">
        <p>Our Menu</p>
        <h2>Amazing Continental</h2>
      </div>
        <hr />
      <div className="restaurent-menu_style_nav">
        <p>
          <a href="">BreakFast </a>
        </p>
        <p>
          <a href="">Desert</a>
        </p>
        <p>
          <a href="">SeaFood</a>
        </p>
        <p>
          <a href="">special</a>
        </p>
        <p>
          <a href="">Starter</a>
        </p>
      </div>
        <hr />
      <div className="restaurent-menu_style_grid">
        {items?.results?.map((item) => (
          <div key={item.id}className="restaurent-menu_style_grid_items" >
            <img src={src+item.image} alt="" />
            <div>

            <p>{item.title}</p>
            <p> <hr />Price: ${Math.ceil((Math.random())*101)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuStyle;
