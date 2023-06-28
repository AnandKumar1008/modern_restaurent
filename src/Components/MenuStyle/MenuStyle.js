import React from "react";
import "./MenuStyle.css";
import { useState } from "react";
import { useEffect } from "react";
const key = "d1943702de584b37bfdf4bcc10b27c8f";
const src = "https://spoonacular.com/recipeImages/";
const MenuStyle = () => {
  const [items, setItems] = useState();
  const [cuisine, setCuisine] = useState("italian");
  const url = `https://api.spoonacular.com/recipes/search?apiKey=${key}&cuisine=${cuisine}`;
  const handleClick = (e) => {
    console.log(e.target);
  };
  useEffect(() => {
    // const recipes = localStorage.getItem("recipes") || apiCall();
    // setItems(JSON.parse(recipes));
    apiCall();
  }, [cuisine]);
  const apiCall = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/search?apiKey=${key}&cuisine=${cuisine}`
      );
      const data = await res.json();
      console.log(data);
      const store = JSON.stringify(data);
      localStorage.setItem("recipes", store);
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
        <p onClick={() => setCuisine("breakfast")}>
          <span href="">BreakFast </span>
        </p>
        <p onClick={() => setCuisine("dessert")}>
          <span href="">Dessert</span>
        </p>
        <p onClick={() => setCuisine("seafood")}>
          <span href="">SeaFood</span>
        </p>
        <p onClick={() => setCuisine("special")}>
          <span href="">special</span>
        </p>
        <p onClick={() => setCuisine("starter")}>
          <span href="">Italian</span>
        </p>
        <p onClick={() => setCuisine("italian")}>
          <span href="">Starter</span>
        </p>
        <p onClick={() => setCuisine("maincourse")}>
          <span href="">Main Course</span>
        </p>
        <p onClick={() => setCuisine("salad")}>
          <span href="">Salad</span>
        </p>
      </div>
      <hr />
      <div className="restaurent-menu_style_grid">
        {items?.results?.map((item) => (
          <div key={item.id} className="restaurent-menu_style_grid_items">
            <img src={src + item.image} alt="" />
            <div>
              <p>{item.title}</p>
              <p>
                {" "}
                <hr />
                Price: ${Math.ceil(Math.random() * 101)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuStyle;
