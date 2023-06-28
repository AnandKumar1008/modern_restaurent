import React from "react";
import {
  About,
  Awards,
  Chef,
  Customer,
  Footer,
  Header,
  Instagram,
  Menu,
  Nav,
  TodaySpecial,
  Update,
  Aboutus,
  MenuStyle,
  Table,
  Delicious,
  NewFooter,
} from "../../Components";
// import NewFooter from "../../Components/NewFooter/NewFooter";
const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Delicious />
      <Chef />
      <Menu />
      <Customer />
      <Awards />
      <Update />
      <Instagram />
      <NewFooter />
    </div>
  );
};

export default Home;
