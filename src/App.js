import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Aboutus, Awards, Chef, Nav } from "./Components";
import {
  Home,
  BlogPage,
  MenuPage,
  AboutusPage,
  OurServices,
  Pages,
  SignIn,
  SignUp,
  TablePage,
} from "./Pages";
import "./App.css";
import OurChef from "./Pages/Pages/OurChef";
import Contactus from "./Pages/Pages/Contactus";
import Landing from "./Pages/Landing/Landing";

export default function App() {
  return (
    <div className="app__bg">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/aboutus" element={<AboutusPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/pages/services" element={<OurServices />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/pages/ourchefs" element={<OurChef />} />
        <Route path="/pages/contactus" element={<Contactus />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}
