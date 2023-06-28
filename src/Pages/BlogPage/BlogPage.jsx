import React from "react";
import { Footer, Nav, Table } from "../../Components";
import Blog from "../../Components/Blog/Blog";
import NewFooter from "../../Components/NewFooter/NewFooter";

const BlogPage = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Blog />
      <Table />
      <NewFooter />
    </div>
  );
};

export default BlogPage;
