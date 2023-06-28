import React from "react";
import {
  Aboutus,
  Delicious,
  Footer,
  Nav,
  Table,
  Update,
} from "../../Components";
import Services from "../../Components/Services/Services";
import NewFooter from "../../Components/NewFooter/NewFooter";

const AboutPage = () => {
  return (
    <div>
      {/* <Nav/> */}
      <Aboutus />
      <Table />
      {/* <Services /> */}
      <NewFooter />
      {/* <Delicious/> */}
      {/* <Update/> */}
    </div>
  );
};

export default AboutPage;
