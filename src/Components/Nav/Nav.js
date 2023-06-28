import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./Nav.css";
import { NavLink, useNavigate,useLocation } from "react-router-dom";

const Menu = () => {
  // const [option,setOption]=useState(false);
  const location=useLocation();
  // const [active,setActive]=useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    const name = e.target.getAttribute("name");
    // if(active!=="active")
    // setActive("active");
    console.log(location.pathname);
    navigate(`/pages/${name}`);

    // console.log(e.target.getAttribute("name"));
  };
  return (
    <>
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
      <p className="modern_restaurent-nav_pages">
        <div  className={location.pathname.includes("/pages")?"active":""}>
          Pages <BsChevronDown />
        </div>
        <div className="modern-restaurent-nav_pages_item">
          <span onClick={handleClick} name="aboutus">
            About us
          </span>
          <span onClick={handleClick} name="services">
            services
          </span>
          <span onClick={handleClick} name="ourchefs">
            our chefs
          </span>
          <span onClick={handleClick} name="contactus">
            Contact us
          </span>
        </div>
      </p>
      <p>
        <NavLink to="/menu">Menu </NavLink>
      </p>
      <p>
        <NavLink to="/blog">Blog</NavLink>
      </p>

      <p>
        <NavLink to="/landing">Landing</NavLink>
      </p>
    </>
  );
};
const Login = () => {
  return (
    <>
      <p>
        <NavLink to="/signin">Login</NavLink>
      </p>
      <p>
        <NavLink to="/signup">Register</NavLink>
      </p>
      <p>
        |
      </p>
      <p>
        <NavLink to="/table">Book Table</NavLink>
      </p>
    </>
  );
};
export default function Nav() {
  return (
    <div>
      <div className="nav_container">
        <div>
          <h1>
            <span>K</span>rishna
          </h1>
        </div>
        <div className="nav_container_links">
          <Menu />
        </div>
        <div className="nav_container_login">
          <Login />
        </div>
      </div>
    </div>
  );
}
