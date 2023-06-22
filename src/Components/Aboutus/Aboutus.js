import React from "react";
import "./Aboutus.css";
import img1 from "../Restaurent/res1.jpg";
import img2 from "../Restaurent/res6.jpg";
const Aboutus = () => {
  return (
    <div className="restaurent-about_us section__padding">
      <div className="restaurent-about_us_heading">
        <p>About Us</p>
        <h2>Serving Customers For Over A Decade</h2>
      </div>
      <div className="restaurent-about_us_images">
        <div className="restaurent-about_us_images_left">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            dicta eveniet non nam ex modi, suscipit tempore perspiciatis debitis
            neque.
          </p>
          <img src={img1} alt="" />
        </div>
        <div className="restaurent-about_us_images_right">
          <img src={img2} alt="" />
          <h2>Over The Years</h2>
          <div className="restaurent-about_us_images_right_data">
            <div>
              {" "}
              <span>50+</span>  <br />
              <p>BreakFast Options</p>
            </div>
            <hr />
            <div>
              <span>30+ </span> <br />
              <p>Dinner Option</p>
            </div>
            <hr />
            <div>
              <span>10+</span> <br /> <p> New Locations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
