import React from "react";
import Services from "../../Components/Services/Services";
import { Footer, Nav, Table } from "../../Components";
import NewFooter from "../../Components/NewFooter/NewFooter";

const OurServices = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Services />
      <Table />
      <NewFooter />
    </div>
  );
};

export default OurServices;
