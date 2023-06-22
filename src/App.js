import React from "react";
import Nav from "./Components/Nav/Nav.js";
import Header from "./Components/Header/Header.js";
import "./App.css";
import About from "./Components/About/About.js";
import TodaySpecial from "./Components/TodaySpecial/TodaySpecial.js";
import Chef from "./Components/Chef/Chef.js";
import Instagram from "./Components/Instagram/Instagram.js";
import Menu from "./Components/Menu/Menu.js";
import Customer from "./Components/Customer/Customer.js";
import Awards from "./Components/Awards/Awards.js";
import Update from "./Components/Update/Update.js";
import Footer from "./Components/Footer/Footer.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import SignIn from "./Pages/SignIn.js/SignIn.js";
import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
export default function App() {
  return (
    <div className="app__bg">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign_in" element={<SignIn/>}/>
        <Route path="/sign_up" element={<SignUp/>}/>
      </Routes>
      <Nav />
      <Header />
      <About />
      <TodaySpecial />
      <Chef />
      <Menu />
      <Customer />
      <Awards />
      <Update />
      <Instagram />
      <Footer />
      {/* <SignIn/>
      <SignUp/> */}
    </div>
  );
}
