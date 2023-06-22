import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
      <p>
        <a href="">Pages</a>
      </p >
      <p>
        <a href="">Contact Us</a>
      </p>
      <p>
        <a href="">Blog</a>
      </p>

      <p>
        <a href="">Landing</a>
      </p>
    </>
  );
};
const Login=()=>{
  return <>
  <p><NavLink to="/sign_in">Login</NavLink></p>
  <p><NavLink to="/sign_up">Register</NavLink></p>
  <p ><a href="">|</a></p>
  <p><a href="">Book Table</a></p>
  </>
}
export default function Nav() {
  return (
    <div>
      <div className="nav_container">
        <div>
          <h1><span>K</span>rishna</h1>
        </div>
        <div className="nav_container_links">
       <Menu/>
        </div>
        <div className="nav_container_login">
          <Login/>
        </div>
      </div>
    </div>
  );
}
